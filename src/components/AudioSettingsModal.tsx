import React, { useState, useEffect } from 'react';
import { X, Volume2, Settings2, Check, Play } from 'lucide-react';
import { AudioSettings } from '../types';
import { speakWord, isInAppBrowser, isMobileDevice } from '../utils/speech';

interface AudioSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: AudioSettings;
  onSaveSettings: (newSettings: AudioSettings) => void;
  currentWord?: string;
}

export const AudioSettingsModal: React.FC<AudioSettingsModalProps> = ({
  isOpen,
  onClose,
  settings,
  onSaveSettings,
  currentWord = 'elucidate'
}) => {
  const [lang, setLang] = useState<'en-US' | 'en-GB'>(settings.lang || 'en-US');
  const [rate, setRate] = useState<number>(settings.rate || 0.85);
  const [autoPlay, setAutoPlay] = useState<boolean>(!!settings.autoPlayOnSearch);
  const [isPlayingTest, setIsPlayingTest] = useState(false);
  const [testFailed, setTestFailed] = useState(false);

  useEffect(() => {
    setLang(settings.lang || 'en-US');
    setRate(settings.rate || 0.85);
    setAutoPlay(!!settings.autoPlayOnSearch);
  }, [settings, isOpen]);

  if (!isOpen) return null;

  const handleTestSpeech = () => {
    setIsPlayingTest(true);
    setTestFailed(false);
    // Safety net so the button never stays stuck on "播放中"
    const timeout = window.setTimeout(() => setIsPlayingTest(false), 8000);
    const done = () => {
      window.clearTimeout(timeout);
      setIsPlayingTest(false);
    };
    speakWord(
      currentWord || 'elucidate',
      { lang, rate },
      {
        onStart: () => setIsPlayingTest(true),
        onEnd: done,
        onError: () => {
          done();
          setTestFailed(true);
        }
      }
    );
  };

  const handleSave = () => {
    onSaveSettings({
      lang,
      rate,
      autoPlayOnSearch: autoPlay
    });
    onClose();
  };

  const rateOptions = [
    { label: '0.7x 慢速', value: 0.7, desc: '逐音節慢速辨音' },
    { label: '0.85x 適中', value: 0.85, desc: '推薦最佳學習語速' },
    { label: '1.0x 原速', value: 1.0, desc: '母語者標準語速' },
    { label: '1.2x 快速', value: 1.2, desc: '聽力高強度挑戰' }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white border-2 border-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] rounded-xl w-full max-w-md overflow-hidden flex flex-col my-auto animate-in fade-in zoom-in-95">
        {/* Header */}
        <div className="px-5 py-4 bg-slate-900 text-white flex items-center justify-between border-b-2 border-slate-900">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-yellow-400 text-slate-900 rounded font-black">
              <Volume2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold font-serif">語音發音與朗讀設定</h3>
              <p className="text-xs text-slate-400 font-mono">Speech Synthesis & Audio Engine</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-5 space-y-5 text-slate-800 text-sm">
          {/* Accent Selection */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
              1. 語音口音與地區腔調 (Accent)
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setLang('en-US')}
                className={`p-3 rounded-lg border-2 text-left transition-all cursor-pointer flex flex-col justify-between ${
                  lang === 'en-US'
                    ? 'border-indigo-600 bg-indigo-50/70 shadow-xs'
                    : 'border-slate-300 hover:border-slate-400 bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg">🇺🇸</span>
                  {lang === 'en-US' && <Check className="w-4 h-4 text-indigo-600 font-bold" />}
                </div>
                <div className="mt-2">
                  <div className="font-bold text-slate-900 text-xs">美式英語 (General American)</div>
                  <div className="text-[11px] text-slate-500 font-mono">en-US (托福 TOEFL 首選)</div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setLang('en-GB')}
                className={`p-3 rounded-lg border-2 text-left transition-all cursor-pointer flex flex-col justify-between ${
                  lang === 'en-GB'
                    ? 'border-indigo-600 bg-indigo-50/70 shadow-xs'
                    : 'border-slate-300 hover:border-slate-400 bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg">🇬🇧</span>
                  {lang === 'en-GB' && <Check className="w-4 h-4 text-indigo-600 font-bold" />}
                </div>
                <div className="mt-2">
                  <div className="font-bold text-slate-900 text-xs">英式英語 (British RP)</div>
                  <div className="text-[11px] text-slate-500 font-mono">en-GB (雅思 IELTS 首選)</div>
                </div>
              </button>
            </div>
          </div>

          {/* Speech Rate Adjustment */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                2. 朗讀速度調節 (Playback Rate)
              </label>
              <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                {rate}x
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {rateOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setRate(opt.value)}
                  className={`p-2 rounded-lg border-2 text-center transition-all cursor-pointer ${
                    rate === opt.value
                      ? 'border-slate-900 bg-slate-900 text-yellow-300 font-bold shadow-xs'
                      : 'border-slate-300 hover:border-slate-400 bg-slate-50 text-slate-700 text-xs'
                  }`}
                >
                  <div className="font-mono text-xs">{opt.label}</div>
                  <div className="text-[9px] opacity-80 mt-0.5 hidden sm:block truncate">{opt.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Test Audio Preview Bar */}
          <div className="p-3.5 bg-slate-100 rounded-lg border border-slate-300 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-xs font-bold text-slate-700 whitespace-nowrap">試聽範例：</span>
              <span className="font-mono font-bold text-slate-900 uppercase text-xs truncate">
                "{currentWord}"
              </span>
            </div>
            <button
              type="button"
              onClick={handleTestSpeech}
              className={`px-3 py-1.5 rounded-lg border text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-all ${
                isPlayingTest
                  ? 'bg-indigo-600 text-white border-indigo-700 animate-pulse'
                  : 'bg-white hover:bg-slate-50 text-indigo-700 border-indigo-300 shadow-2xs'
              }`}
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{isPlayingTest ? '播放中...' : '立即試聽'}</span>
            </button>
          </div>

          {(testFailed || isMobileDevice()) && (
            <div
              className={`p-3 rounded-lg border text-[11px] leading-relaxed ${
                testFailed
                  ? 'bg-red-50 border-red-300 text-red-800'
                  : 'bg-amber-50 border-amber-300 text-amber-900'
              }`}
            >
              {testFailed && <div className="font-bold mb-1">無法播放發音，請檢查以下項目：</div>}
              <ul className="list-disc pl-4 space-y-0.5">
                <li>調高手機音量，並確認 iPhone 側邊靜音鍵沒有開啟（橘色表示靜音）。</li>
                <li>需要連網才能播放真人發音；離線時改用系統語音，Android 需安裝英文語音包。</li>
                {isInAppBrowser() && (
                  <li className="font-bold">
                    你正在使用 LINE / Facebook 等內建瀏覽器，請改用右上角選單「以瀏覽器開啟」（Safari / Chrome）。
                  </li>
                )}
              </ul>
            </div>
          )}

          {/* Auto play switch */}
          <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
            <div>
              <div className="font-bold text-xs text-slate-900">查詢單詞時自動朗讀</div>
              <div className="text-[11px] text-slate-500">切換單詞或點擊搜尋時立即播放發音</div>
            </div>
            <button
              type="button"
              onClick={() => setAutoPlay(!autoPlay)}
              className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
                autoPlay ? 'bg-indigo-600' : 'bg-slate-300'
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                  autoPlay ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-5 py-3.5 bg-slate-50 border-t-2 border-slate-200 flex items-center justify-end gap-2.5">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
          >
            取消
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-yellow-300 font-bold text-xs rounded-lg border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] transition-all cursor-pointer flex items-center gap-1.5"
          >
            <Check className="w-4 h-4" />
            <span>套用設定</span>
          </button>
        </div>
      </div>
    </div>
  );
};
