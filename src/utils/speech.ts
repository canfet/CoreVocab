/**
 * Enhanced Web Speech API Utility
 * Solves browser front-audio clipping on first click by:
 * 1. Preloading & caching system voices
 * 2. Pre-warming audio context & speech engine on page interaction
 * 3. Introducing micro-timeout after cancel() to prevent voice buffer truncation
 * 4. Explicitly binding high-quality locale voices
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
let isInitialized = false;
let activeUtterance: SpeechSynthesisUtterance | null = null;

// Android reports "en_US", desktop reports "en-US"
const normLang = (l: string) => (l || '').replace('_', '-').toLowerCase();

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

export function initSpeechEngine() {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  if (isInitialized) return;

  const updateVoices = () => {
    try {
      const voices = window.speechSynthesis.getVoices();
      if (voices && voices.length > 0) {
        cachedVoices = voices;
        isInitialized = true;
      }
    } catch {
      // Ignore in unsupported environments
    }
  };

  updateVoices();

  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = updateVoices;
  }

  // Pre-warm audio on initial user touch or click
  const warmUp = () => {
    try {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.resume();
      }
    } catch {
      // Ignore
    }
    window.removeEventListener('click', warmUp);
    window.removeEventListener('touchstart', warmUp);
    window.removeEventListener('keydown', warmUp);
  };

  window.addEventListener('click', warmUp, { once: true, passive: true });
  window.addEventListener('touchstart', warmUp, { once: true, passive: true });
  window.addEventListener('keydown', warmUp, { once: true, passive: true });
}

// ---- HTML5 <audio> fallback (real recordings) for devices without a usable TTS engine ----
const audioUrlCache = new Map<string, string | null>();
let fallbackAudio: HTMLAudioElement | null = null;

async function lookupAudioUrl(word: string, lang: string): Promise<string | null> {
  const key = `${word.toLowerCase()}|${lang}`;
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
  } catch {
    url = null;
  }
  audioUrlCache.set(key, url);
  return url;
}

function playFallbackAudio(text: string, lang: string, options: SpeechOptions | undefined, callbacks?: SpeechCallbacks) {
  // Create + touch the element synchronously so it stays tied to the user gesture on mobile
  if (fallbackAudio) fallbackAudio.pause();
  const audio = new Audio();
  fallbackAudio = audio;
  audio.volume = options?.volume ?? 1.0;

  lookupAudioUrl(text, lang).then((url) => {
    if (!url || fallbackAudio !== audio) {
      if (!url) callbacks?.onError?.();
      return;
    }
    audio.onplay = () => callbacks?.onStart?.();
    audio.onended = () => callbacks?.onEnd?.();
    audio.onerror = () => callbacks?.onError?.();
    audio.src = url;
    audio.play().catch((err) => callbacks?.onError?.(err));
  });
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

  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    playFallbackAudio(cleanText, targetLang, options, callbacks);
    return;
  }

  try {
    const synth = window.speechSynthesis;
    let started = false;
    let fellBack = false;

    // Engine present but silent (no voices / WebView / missing TTS data): switch to <audio>
    const fallback = () => {
      if (fellBack || started) return;
      fellBack = true;
      try { synth.cancel(); } catch { /* ignore */ }
      playFallbackAudio(cleanText, targetLang, options, callbacks);
    };
    const watchdog = window.setTimeout(fallback, 1500);

    const speakNow = (useVoice: boolean) => {
      const utterance = new SpeechSynthesisUtterance(cleanText);
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
          if (!fellBack) callbacks?.onEnd?.();
          return;
        }
        // Voice failed (e.g. network voice offline / unavailable on mobile): retry with the system default voice
        if (useVoice) {
          speakNow(false);
          return;
        }
        window.clearTimeout(watchdog);
        fallback();
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
          console.warn('Speech synthesis execution failed:', err);
          callbacks?.onError?.(err);
        }
      }, 50);
    } else {
      synth.resume();
      speakNow(true);
    }
  } catch (err) {
    console.warn('Speech synthesis initialization failed:', err);
    callbacks?.onError?.(err);
  }
}
