/**
 * Pronunciation utility
 *
 * Two engines, chosen per device:
 *  - Recordings: real human audio from dictionaryapi.dev played through one shared HTML5 <audio>
 *    element. It is "unlocked" on the first touch so iOS lets us play it after the async lookup,
 *    and <audio> is not muted by the iOS silent switch (speechSynthesis is).
 *  - TTS: Web Speech API, used for phrases, offline, and when no recording exists.
 *
 * iOS (single words) → recording first, TTS as fallback.
 * Everything else    → TTS first, recording as fallback when TTS is silent/unavailable.
 */

export interface SpeechOptions {
  lang?: 'en-US' | 'en-GB' | string;
  rate?: number;
  pitch?: number;
  volume?: number;
}

export interface SpeechCallbacks {
  onStart?: () => void;
  onEnd?: () => void;
  onError?: (e?: any) => void;
}

let cachedVoices: SpeechSynthesisVoice[] = [];
let activeUtterance: SpeechSynthesisUtterance | null = null;

// Android reports "en_US", desktop reports "en-US"
const normLang = (l: string) => (l || '').replace('_', '-').toLowerCase();

const hasTTS = () => typeof window !== 'undefined' && 'speechSynthesis' in window;

const isIOS = () =>
  typeof navigator !== 'undefined' &&
  (/iP(hone|ad|od)/.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1));

/** LINE / Facebook / Instagram etc. in-app browsers, which often lack speech synthesis */
export const isInAppBrowser = () =>
  typeof navigator !== 'undefined' &&
  /Line\/|FBAN|FBAV|FB_IAB|Instagram|MicroMessenger|; wv\)/i.test(navigator.userAgent);

export const isMobileDevice = () =>
  typeof navigator !== 'undefined' &&
  (/Android|iP(hone|ad|od)|Mobile/i.test(navigator.userAgent) || isIOS());

function pickVoice(targetLang: string): SpeechSynthesisVoice | undefined {
  let voices = cachedVoices;
  if (voices.length === 0) {
    try {
      voices = window.speechSynthesis.getVoices();
    } catch {
      return undefined;
    }
  }
  if (!voices || voices.length === 0) return undefined;

  const target = normLang(targetLang);
  const prefix = target.split('-')[0];
  // Prefer on-device voices so playback works offline and without network latency
  const rank = (v: SpeechSynthesisVoice) => (v.localService ? 0 : 1);
  const byRank = (a: SpeechSynthesisVoice, b: SpeechSynthesisVoice) => rank(a) - rank(b);

  const exact = voices.filter((v) => normLang(v.lang) === target).sort(byRank);
  if (exact.length) return exact[0];
  const loose = voices.filter((v) => normLang(v.lang).split('-')[0] === prefix).sort(byRank);
  return loose[0];
}

// ---------------------------------------------------------------------------
// Recording engine (HTML5 <audio>)
// ---------------------------------------------------------------------------
const SILENT_WAV =
  'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA';

const audioUrlCache = new Map<string, string | null>();
let sharedAudio: HTMLAudioElement | null = null;
let audioUnlocked = false;
let playToken = 0;

/** Must run inside a user gesture. Plays a silent clip so iOS allows later programmatic play(). */
function unlockAudio() {
  if (typeof Audio === 'undefined') return;
  if (!sharedAudio) sharedAudio = new Audio();
  if (audioUnlocked) return;
  audioUnlocked = true;
  try {
    sharedAudio.src = SILENT_WAV;
    sharedAudio.play().catch(() => {
      audioUnlocked = false;
    });
  } catch {
    audioUnlocked = false;
  }
}

async function lookupAudioUrl(word: string, lang: string): Promise<string | null> {
  const key = `${word.toLowerCase()}|${normLang(lang)}`;
  if (audioUrlCache.has(key)) return audioUrlCache.get(key)!;
  let url: string | null = null;
  try {
    const res = await fetch(`https://api.dictionaryapi.dev/v2/entries/en/${encodeURIComponent(word.toLowerCase())}`);
    if (res.ok) {
      const data = await res.json();
      const urls: string[] = (data as any[])
        .flatMap((entry) => entry.phonetics || [])
        .map((p: any) => p.audio as string)
        .filter(Boolean);
      const accent = normLang(lang) === 'en-gb' ? '-uk' : '-us';
      url = urls.find((u) => u.includes(accent)) || urls[0] || null;
    }
    audioUrlCache.set(key, url); // cache hits and "not found", not network errors
  } catch {
    url = null;
  }
  return url;
}

/** Resolves true if a recording actually started playing, false if the caller should fall back. */
async function playRecording(
  text: string,
  lang: string,
  options: SpeechOptions | undefined,
  callbacks?: SpeechCallbacks
): Promise<boolean> {
  if (typeof Audio === 'undefined') return false;
  const token = ++playToken;
  const url = await lookupAudioUrl(text, lang);
  if (token !== playToken) return true; // superseded by a newer request; stay silent
  if (!url) return false;

  if (!sharedAudio) sharedAudio = new Audio();
  const audio = sharedAudio;

  return new Promise<boolean>((resolve) => {
    let started = false;
    // iOS Safari resets playbackRate whenever the source changes → re-apply on load and on play
    const rate = Math.min(Math.max(options?.rate ?? 1, 0.7), 1.2);
    const applyRate = () => {
      try { audio.playbackRate = rate; } catch { /* ignore */ }
    };
    audio.onloadedmetadata = applyRate;
    audio.onplaying = () => {
      applyRate();
      started = true;
      callbacks?.onStart?.();
      resolve(true);
    };
    audio.onended = () => callbacks?.onEnd?.();
    audio.onerror = () => {
      if (!started) resolve(false);
      else callbacks?.onEnd?.();
    };
    try {
      audio.pause();
      audio.src = url;
      audio.volume = options?.volume ?? 1.0;
      applyRate();
      audio.play().catch(() => {
        if (!started) resolve(false);
      });
    } catch {
      resolve(false);
    }
  });
}

// ---------------------------------------------------------------------------
// TTS engine (Web Speech API)
// ---------------------------------------------------------------------------
/** Speaks via Web Speech API. Calls onFail (instead of onError) if it stays silent or errors out. */
function speakTTS(
  text: string,
  targetLang: string,
  options: SpeechOptions | undefined,
  callbacks: SpeechCallbacks | undefined,
  onFail: (err?: any) => void
) {
  try {
    const synth = window.speechSynthesis;
    let started = false;
    let failed = false;

    const fail = (err?: any) => {
      if (failed || started) return;
      failed = true;
      try { synth.cancel(); } catch { /* ignore */ }
      onFail(err);
    };
    // Engine present but silent (no voices / WebView / missing TTS data)
    const watchdog = window.setTimeout(() => fail(), 1500);

    const speakNow = (useVoice: boolean) => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = targetLang;
      utterance.rate = options?.rate ?? 0.85;
      utterance.pitch = options?.pitch ?? 1.0;
      utterance.volume = options?.volume ?? 1.0;

      if (useVoice) {
        const voice = pickVoice(targetLang);
        if (voice) utterance.voice = voice;
      }

      // Keep a strong reference: Android Chrome may GC the utterance and never fire onend
      activeUtterance = utterance;

      utterance.onstart = () => {
        started = true;
        window.clearTimeout(watchdog);
        callbacks?.onStart?.();
      };
      utterance.onend = () => {
        if (activeUtterance === utterance) activeUtterance = null;
        callbacks?.onEnd?.();
      };
      utterance.onerror = (e) => {
        if (activeUtterance === utterance) activeUtterance = null;
        const reason = (e as SpeechSynthesisErrorEvent)?.error;
        if (reason === 'canceled' || reason === 'interrupted') {
          if (!failed) callbacks?.onEnd?.();
          return;
        }
        // Voice failed (e.g. network voice offline / unavailable): retry once with the system default
        if (useVoice && !started) {
          speakNow(false);
          return;
        }
        window.clearTimeout(watchdog);
        if (started) callbacks?.onEnd?.();
        else fail(e);
      };

      synth.speak(utterance);
    };

    // Only cancel when something is actually queued. Speaking synchronously keeps the user-gesture
    // context, which iOS Safari / mobile Chrome require; a delay is needed only after cancel().
    if (synth.speaking || synth.pending) {
      synth.cancel();
      setTimeout(() => {
        try {
          synth.resume();
          speakNow(true);
        } catch (err) {
          window.clearTimeout(watchdog);
          fail(err);
        }
      }, 50);
    } else {
      synth.resume();
      speakNow(true);
    }
  } catch (err) {
    console.warn('Speech synthesis failed:', err);
    onFail(err);
  }
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------
export function initSpeechEngine() {
  if (typeof window === 'undefined') return;

  if (hasTTS()) {
    const updateVoices = () => {
      try {
        const voices = window.speechSynthesis.getVoices();
        if (voices && voices.length > 0) cachedVoices = voices;
      } catch {
        // Ignore in unsupported environments
      }
    };
    updateVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = updateVoices;
    }
  }

  // First touch/click: unlock <audio> and the speech engine (iOS requires a gesture)
  const warmUp = () => {
    unlockAudio();
    try {
      if (hasTTS()) {
        window.speechSynthesis.resume();
        if (isIOS() && !window.speechSynthesis.speaking) {
          const u = new SpeechSynthesisUtterance(' ');
          u.volume = 0;
          window.speechSynthesis.speak(u);
        }
      }
    } catch {
      // Ignore
    }
    window.removeEventListener('click', warmUp);
    window.removeEventListener('touchend', warmUp);
    window.removeEventListener('keydown', warmUp);
  };

  window.addEventListener('click', warmUp, { passive: true });
  window.addEventListener('touchend', warmUp, { passive: true });
  window.addEventListener('keydown', warmUp, { passive: true });
}

export function speakWord(
  text: string,
  options?: SpeechOptions,
  callbacks?: SpeechCallbacks
) {
  const cleanText = (text || '').trim();
  const targetLang = options?.lang || 'en-US';

  if (!cleanText) {
    callbacks?.onError?.();
    return;
  }

  // Must be synchronous, inside the click handler
  unlockAudio();
  playToken++; // cancels any in-flight recording lookup
  if (sharedAudio) {
    try { sharedAudio.pause(); } catch { /* ignore */ }
  }

  const isSingleWord = /^[A-Za-z][A-Za-z'-]*$/.test(cleanText);

  const tryTTS = (onFail: (err?: any) => void) => {
    if (!hasTTS()) return onFail();
    speakTTS(cleanText, targetLang, options, callbacks, onFail);
  };
  const tryRecording = (onFail: () => void) => {
    if (!isSingleWord) return onFail();
    playRecording(cleanText, targetLang, options, callbacks).then((ok) => {
      if (!ok) onFail();
    });
  };
  const giveUp = (err?: any) => callbacks?.onError?.(err);

  if (isIOS() && isSingleWord) {
    // iOS: TTS is muted by the silent switch and often unreliable → recording first
    tryRecording(() => tryTTS(giveUp));
  } else {
    tryTTS(() => tryRecording(giveUp));
  }
}
