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

export function speakWord(
  text: string,
  options?: SpeechOptions,
  callbacks?: SpeechCallbacks
) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    callbacks?.onError?.();
    return;
  }

  const cleanText = (text || '').trim();
  if (!cleanText) {
    callbacks?.onError?.();
    return;
  }

  try {
    // 1. Ensure engine is unpaused
    window.speechSynthesis.resume();

    // 2. Clear any lingering utterances
    window.speechSynthesis.cancel();

    // 3. Short delay (35ms) allows Chrome/Safari engine buffer to settle and prevents cutting off first sound
    setTimeout(() => {
      try {
        const targetLang = options?.lang || 'en-US';
        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.lang = targetLang;
        utterance.rate = options?.rate ?? 0.85;
        utterance.pitch = options?.pitch ?? 1.0;
        utterance.volume = options?.volume ?? 1.0;

        // 4. Bind matched voice to avoid dynamic fallback delay
        const voices = cachedVoices.length > 0 ? cachedVoices : window.speechSynthesis.getVoices();
        if (voices.length > 0) {
          const exactMatch = voices.find((v) => v.lang.toLowerCase() === targetLang.toLowerCase());
          const prefixMatch = voices.find((v) => v.lang.toLowerCase().startsWith(targetLang.split('-')[0].toLowerCase()));
          if (exactMatch) {
            utterance.voice = exactMatch;
          } else if (prefixMatch) {
            utterance.voice = prefixMatch;
          }
        }

        utterance.onstart = () => {
          callbacks?.onStart?.();
        };

        utterance.onend = () => {
          callbacks?.onEnd?.();
        };

        utterance.onerror = (e) => {
          // If canceled by another action, don't trigger error state
          callbacks?.onEnd?.();
        };

        window.speechSynthesis.speak(utterance);
      } catch (err) {
        console.warn('Speech synthesis execution failed:', err);
        callbacks?.onError?.(err);
      }
    }, 35);
  } catch (err) {
    console.warn('Speech synthesis initialization failed:', err);
    callbacks?.onError?.(err);
  }
}
