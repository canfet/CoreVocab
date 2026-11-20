import React, { useState } from 'react';
import { MorphemeComponent, SemanticFormula, WordAnalysis } from '../types';
import { Layers, Sparkles, Lightbulb, Eye, EyeOff, BookOpen, GitMerge, CheckCircle2 } from 'lucide-react';
import { hasDualStemEntry } from '../data/rulesData';

export type RulesTabType = 'prefixes' | 'assimilation' | 'dualStems' | 'phonology' | 'suffixes' | 'strata';

interface MorphemeDeconstructionCardProps {
  analysis?: WordAnalysis;
  morphemes?: MorphemeComponent[];
  semantic?: SemanticFormula;
  isMastered?: boolean;
  onToggleMastered?: () => void;
  onInspectMorpheme?: (morpheme: MorphemeComponent) => void;
  onOpenRules?: (options: { tab?: RulesTabType; query?: string }) => void;
}

export const MorphemeDeconstructionCard: React.FC<MorphemeDeconstructionCardProps> = ({
  analysis,
  morphemes: rawMorphemes,
  semantic: rawSemantic,
  isMastered = false,
  onToggleMastered,
  onInspectMorpheme,
  onOpenRules
}) => {
  const [isMasked, setIsMasked] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const morphemes = analysis?.morphemes || rawMorphemes || [];
  const semantic = analysis?.semantic || analysis?.semanticFormula || rawSemantic || {
    prefixMeaning: '',
    rootCoreAction: '',
    suffixGrammar: '',
    modernMeaning: analysis?.chineseMeaning || '',
    formulaDisplay: '',
    literalLogic: ''
  };

  const mnemonic = analysis?.memory?.oneSentenceMnemonic;

  const getStyleForType = (type: MorphemeComponent['type']) => {
    switch (type) {
      case 'prefix':
        return {
          icon: '🚩',
          name: '前綴 (Prefix)',
          bgCell: 'bg-red-50 text-red-700 font-mono font-semibold',
          pillBg: 'bg-red-600 hover:bg-red-700 text-white',
          borderAccent: 'border-red-200'
        };
      case 'root':
        return {
          icon: '💎',
          name: '字根 (Root)',
          bgCell: 'bg-blue-50 text-blue-700 font-mono font-semibold',
          pillBg: 'bg-blue-600 hover:bg-blue-700 text-white',
          borderAccent: 'border-blue-200'
        };
      case 'suffix':
        return {
          icon: '🏷️',
          name: '後綴 (Suffix)',
          bgCell: 'bg-green-50 text-green-700 font-mono font-semibold',
          pillBg: 'bg-emerald-600 hover:bg-emerald-700 text-white',
          borderAccent: 'border-green-200'
        };
      case 'interfix':
      default:
        return {
          icon: '🔗',
          name: '連接素 (Interfix)',
          bgCell: 'bg-slate-50 text-slate-700 font-mono font-semibold',
          pillBg: 'bg-slate-700 hover:bg-slate-800 text-white',
          borderAccent: 'border-slate-200'
        };
    }
  };

  const handleRootClick = (morphemeStr: string) => {
    if (onOpenRules) {
      onOpenRules({ tab: 'dualStems', query: morphemeStr });
    }
  };

  const handleMorphemeClick = (m: MorphemeComponent) => {
    const rawKey = m.morpheme || m.originalForm || '';
    const cleanKey = rawKey.replace(/^[+-]|[+-]$/g, '').trim();

    if (m.type === 'prefix') {
      const match = (m.originalForm || '').match(/\b[a-z]+-?/i) || (m.morpheme || '').match(/\b[a-z]+-?/i);
      const targetQuery = match ? match[0] : cleanKey;
      if (onOpenRules) {
        onOpenRules({
          tab: 'prefixes',
          query: targetQuery
        });
      }
    } else if (m.type === 'root') {
      handleRootClick(rawKey);
    } else if (m.type === 'suffix') {
      if (onOpenRules) {
        onOpenRules({
          tab: 'suffixes',
          query: cleanKey
        });
      }
    }
  };

  const handleMorphemeRuleClick = (m: MorphemeComponent) => {
    const rawKey = m.morpheme || m.originalForm || '';
    const cleanKey = rawKey.replace(/^[+-]|[+-]$/g, '').trim();

    if (m.type === 'prefix') {
      const match = (m.originalForm || '').match(/\b[a-z]+-?/i) || (m.morpheme || '').match(/\b[a-z]+-?/i);
      const targetQuery = match ? match[0] : cleanKey;
      if (onOpenRules) {
        onOpenRules({
          tab: 'prefixes',
          query: targetQuery
        });
      }
    } else if (m.type === 'root') {
      if (onOpenRules) {
        onOpenRules({
          tab: 'dualStems',
          query: cleanKey
        });
      }
    } else if (m.type === 'suffix') {
      if (onOpenRules) {
        onOpenRules({
          tab: 'suffixes',
          query: cleanKey
        });
      }
    }
  };

  const handleOpenAssimilation = (m: MorphemeComponent) => {
    const origMatch = (m.originalForm || '').match(/\b[a-z]+-?/i);
    const morphemeMatch = (m.morpheme || '').match(/\b[a-z]+-?/i);
    const targetQuery = origMatch ? origMatch[0] : (morphemeMatch ? morphemeMatch[0] : (m.morpheme || m.originalForm || '').replace(/^[+-]|[+-]$/g, '').trim());
    if (onOpenRules) {
      onOpenRules({
        tab: 'prefixes',
        query: targetQuery
      });
    }
  };

  // Helper to ensure every morpheme has a clear, linguistically accurate morphology explanation
  const getMorphemeMorphologyNote = (m: MorphemeComponent): string => {
    if (m.variantNote && m.variantNote.trim()) {
      return m.variantNote.trim();
    }

    const cleanMorph = (m.morpheme || '').replace(/\s*\(.*?\)/g, '').replace(/^[+-]|[+-]$/g, '').trim();
    const cleanOrig = (m.originalForm || '').replace(/\s*\(.*?\)/g, '').replace(/^[+-]|[+-]$/g, '').trim();
    const hasFormChange = cleanMorph.toLowerCase() !== cleanOrig.toLowerCase() && cleanOrig.length > 0;

    if (m.type === 'prefix') {
      if (m.label?.includes('同化') || hasFormChange) {
        return `前綴同化音變：原始前綴「${m.originalForm}」在後接子音前發生語音同化，轉化為實體拼寫「${m.morpheme}」。`;
      }
      return `基準前綴原形：保持原始詞首「${m.originalForm || m.morpheme}」，直接附加於詞幹前進行修飾。`;
    }

    if (m.type === 'root') {
      if (m.originalForm && (m.originalForm.includes('➔') || m.originalForm.includes('/'))) {
        return `古典雙詞幹演變：源自古典詞源「${m.originalForm}」，在現代構詞中以詞幹形態「${m.morpheme}」承載核心語義。`;
      }
      if (hasFormChange) {
        return `詞根形態演變：源自詞源「${m.originalForm}」，在現代英語中作為核心語義詞根「${m.morpheme}」。`;
      }
      return `核心語義詞根：以原形「${m.originalForm || m.morpheme}」作為基底，承載全詞最根本的實質概念。`;
    }

    if (m.type === 'suffix') {
      if (hasFormChange) {
        return `後綴形態轉化：源自歷史後綴「${m.originalForm}」，現代英語拼寫為「${m.morpheme}」${m.grammaticalRole ? `，主導全詞作為${m.grammaticalRole}` : '，標定詞性與語法角色'}。`;
      }
      return `標準構詞後綴：附加於詞幹末尾${m.grammaticalRole ? `，主導全詞作為${m.grammaticalRole}` : '，賦予語法特徵並標定詞性'}。`;
    }

    return `語素成分：以形態「${m.morpheme}」參與構詞組合。`;
  };

  if (analysis?.isNotFound) {
    return (
      <div id="morpheme-deconstruction-card" className="bg-white border-2 border-slate-900 rounded-lg shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] sm:shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] p-3.5 sm:p-6 space-y-4">
        <div className="flex items-center gap-2 text-slate-900 font-bold text-base border-b border-slate-200 pb-3">
          <Layers className="w-5 h-5 text-indigo-600" />
          <span>🔍 查無古典語素拆解（單純詞或未收錄詞彙）</span>
        </div>

        <div className="bg-slate-50 border-2 border-slate-200 rounded-lg p-4 sm:p-5 space-y-3">
          <div className="flex items-start gap-2.5">
            <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <p className="font-bold text-slate-900">為什麼這個單字無法拆解出前綴或字根？</p>
              <p>
                英文詞彙可分為<strong>「單純詞（Simplex Words，如 poor, water, tree, dog）」</strong>與<strong>「派生複合詞（Affixed Words，如 allocate, predict, sympathy）」</strong>。
              </p>
              <p className="text-slate-600">
                本單字屬於固有日耳曼語源、古法語借詞或單純詞本體，並非由拉丁/希臘前綴與字根組合而成。為維持語言學嚴謹度，系統<strong>不進行牽強硬拆，以避免產生偽詞源誤導</strong>。
              </p>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-200">
            <span className="text-xs font-bold text-slate-800">💡 推薦查詢具備豐富詞綴之學術/核心詞彙：</span>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {['allocate', 'predict', 'sympathy', 'contain', 'transfer', 'deconstruct', 'reproduce', 'poverty'].map((w) => (
                <button
                  key={w}
                  onClick={() => onInspectMorpheme?.({ type: 'root', label: '字根', morpheme: w, originalForm: w, meaning: w })}
                  className="px-2.5 py-1 bg-white hover:bg-yellow-200 text-indigo-700 font-mono text-xs font-bold rounded border border-slate-300 hover:border-slate-900 transition-colors cursor-pointer shadow-2xs"
                >
                  {w}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="morpheme-deconstruction-card" className="bg-white border-2 border-slate-900 rounded-lg shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] sm:shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] p-3.5 sm:p-6 space-y-4 sm:space-y-6">
      {/* 1. Header with Title and Quick Formula Stack */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 border-b border-slate-200 pb-3 sm:pb-4">
        <div className="flex items-center gap-2 sm:gap-2.5">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 shrink-0">
            <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </div>
          <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap">
            <h2 className="font-bold text-slate-900 text-sm sm:text-lg uppercase tracking-wide flex items-center gap-1.5">
              <span>🧩 語義推導</span>              
            </h2>            
          </div>
        </div>

        {/* Right Header Area: Quick Pill Sequence & Open Lab CTA */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 self-stretch sm:self-center justify-between sm:justify-end">
          {onToggleMastered && (
              <button
                id="btn-card-toggle-mastered"
                type="button"
                onClick={onToggleMastered}
                className={`px-2 sm:px-2.5 py-0.5 sm:py-1 text-xs font-bold rounded border transition-all flex items-center gap-1 cursor-pointer whitespace-nowrap ${
                  isMastered
                    ? 'bg-emerald-100 text-emerald-800 border-emerald-400 hover:bg-emerald-200 shadow-2xs'
                    : 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
                }`}
                title={isMastered ? '目前單詞已標記為掌握' : '標記目前單詞為已掌握'}
              >
                <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${isMastered ? 'text-emerald-600' : 'text-slate-400'}`} />
                <span>{isMastered ? '已掌握' : '標記掌握'}</span>
              </button>
          )}

          {morphemes.length > 0 && (
            <div className="flex flex-wrap items-center gap-1 bg-slate-100 px-2 sm:px-3 py-1 sm:py-1.5 rounded-md border border-slate-300">
              {morphemes.map((m, idx) => {
                const st = getStyleForType(m.type);
                const isRoot = m.type === 'root';
                const isPrefix = m.type === 'prefix';
                const isSuffix = m.type === 'suffix';
                const rootLinkable = !isRoot || hasDualStemEntry(m.morpheme || m.originalForm || '');
                return (
                  <React.Fragment key={idx}>
                    <button
                      type="button"
                      onClick={() => rootLinkable && handleMorphemeClick(m)}
                      className={`px-1.5 sm:px-2 py-0.5 rounded text-[11px] sm:text-xs font-mono font-bold ${st.pillBg} shadow-xs transition-transform ring-1 ring-white/50 ${
                        rootLinkable ? 'cursor-pointer hover:scale-105 active:scale-95' : 'cursor-default opacity-80'
                      }`}
                      title={
                        isRoot
                          ? (rootLinkable ? `點擊查看「${m.morpheme}」字根規則庫 📖` : undefined)
                          : isPrefix
                          ? `點擊查看「${m.morpheme}」前綴分類規則庫 📖`
                          : isSuffix
                          ? `點擊查看「${m.morpheme}」後綴詞性規則庫 📖`
                          : st.name
                      }
                    >
                      {m.morpheme}
                      {isRoot && rootLinkable && <span className="ml-1 text-[10px] text-amber-200">💎</span>}
                      {isPrefix && <span className="ml-1 text-[10px] opacity-80">📖</span>}
                      {isSuffix && <span className="ml-1 text-[10px] opacity-80">📖</span>}
                    </button>
                    {idx < morphemes.length - 1 && (
                      <span className="text-slate-400 text-xs font-black">+</span>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Auto Assembled Alert if word was heuristically constructed */}
      {(analysis?.isAssembled || analysis?.source === 'assembled' || analysis?.source === 'heuristic') && (
        <div className="bg-amber-50 border border-amber-300 p-2.5 rounded-md text-xs text-amber-900 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-amber-700 shrink-0" />
            <span>
              <strong>該字為自動拼裝分析：</strong>此詞非預設字典收錄，已自字首與字根資料庫進行模糊形態比對與拆解。
            </span>
          </div>
          {analysis?.assembledConfidence && (
            <span className="text-[10px] font-mono font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded border border-amber-300 shrink-0">
              匹配度：{analysis.assembledConfidence}%
            </span>
          )}
        </div>
      )}

      {/* 2. Structured Morphemes Table & Responsive Cards */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
            <span>語素積木拆解表</span>
          </div>
          <span className="text-[11px] font-mono text-indigo-700 font-bold hidden sm:inline">
            點擊各語素按鈕即可直接移至規則庫查閱
          </span>
        </div>

        {/* Mobile View (< 640px): Stacked Component Cards with Zero Overlap */}
        <div className="sm:hidden space-y-2.5">
          {morphemes.map((m, idx) => {
            const st = getStyleForType(m.type);
            const isRoot = m.type === 'root';
            const isPrefix = m.type === 'prefix';
            const isSuffix = m.type === 'suffix';
            const rawKey = m.morpheme || m.originalForm || '';

            return (
              <div
                key={idx}
                className={`p-3 rounded-lg border-2 border-slate-900 shadow-2xs space-y-2.5 ${st.bgCell}`}
              >
                {/* Header Row: Type Badge + Morpheme form */}
                <div className="flex items-center justify-between gap-2 flex-wrap border-b border-slate-300/80 pb-2">
                  <div className="flex items-center gap-1.5 flex-wrap min-w-0">
                    <span className="text-sm shrink-0">{st.icon}</span>
                    <span className="font-bold text-slate-900 text-xs">
                      {m.label?.replace(/^[^\w\u4e00-\u9fa5]+/, '') || st.name}
                    </span>
                    <div className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-300 font-bold text-slate-900">
                      <span>{m.originalForm}</span>
                      {m.morpheme !== m.originalForm && (
                        <span className="text-slate-600 font-normal"> ➔ <strong className="text-indigo-950 font-black">{m.morpheme}</strong></span>
                      )}
                    </div>
                  </div>

                  {/* Actions on Mobile */}
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {isRoot && onOpenRules && (
                      <>
                        {(m.variantNote?.includes('同化') || m.label?.includes('同化')) && (
                          <button
                            type="button"
                            onClick={() => handleOpenAssimilation(m)}
                            className="px-2 py-1 bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 rounded text-xs font-bold flex items-center gap-1 cursor-pointer shadow-2xs"
                            title={`在同化法則庫中查看同化路徑`}
                          >
                            <GitMerge className="w-3 h-3 text-amber-700" />
                            <span>同化律</span>
                          </button>
                        )}
                        {(m.variantNote?.includes('對偶') || m.variantNote?.includes('格林') || m.variantNote?.includes('階變') || m.label?.includes('對偶')) && (
                          <button
                            type="button"
                            onClick={() => onOpenRules({ tab: 'phonology', query: rawKey })}
                            className="px-2 py-1 bg-purple-50 hover:bg-purple-100 text-purple-800 border border-purple-200 rounded text-xs font-bold flex items-center gap-1 cursor-pointer shadow-2xs"
                            title="在規則庫中查閱語音對偶律"
                          >
                            <Sparkles className="w-3 h-3 text-purple-600" />
                            <span>對偶律</span>
                          </button>
                        )}
                        {!(m.variantNote?.includes('同化') || m.label?.includes('同化')) && hasDualStemEntry(rawKey) && (
                          <button
                            type="button"
                            onClick={() => handleMorphemeRuleClick(m)}
                            className="px-2 py-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-800 border border-indigo-200 rounded text-xs font-bold flex items-center gap-1 cursor-pointer shadow-2xs"
                            title="在規則庫中查閱古典雙詞幹對照"
                          >
                            <Layers className="w-3 h-3 text-indigo-600" />
                            <span>雙詞幹對照</span>
                          </button>
                        )}
                      </>
                    )}

                    {isPrefix && onOpenRules && (
                      <>
                        <button
                          type="button"
                          onClick={() => handleMorphemeRuleClick(m)}
                          className="px-2.5 py-1 bg-red-100 hover:bg-red-200 text-red-900 border border-red-300 rounded text-xs font-bold flex items-center gap-1 cursor-pointer shadow-2xs active:scale-95"
                          title={`在規則庫中查閱「${rawKey}」前綴分類`}
                        >
                          <BookOpen className="w-3 h-3 text-red-700" />
                          <span>查前綴詞性庫</span>
                        </button>
                        {(() => {
                          const cleanPrefixMorph = (m.morpheme || '').replace(/\s*\(.*?\)/g, '').replace(/^[+-]|[+-]$/g, '').trim().toLowerCase();
                          const cleanPrefixOrig = (m.originalForm || '').replace(/\s*\(.*?\)/g, '').replace(/^[+-]|[+-]$/g, '').trim().toLowerCase();
                          const isAssimilated = (cleanPrefixMorph && cleanPrefixOrig && cleanPrefixMorph !== cleanPrefixOrig) ||
                            Boolean(m.variantNote?.includes('同化')) ||
                            Boolean(m.label?.includes('同化'));
                          if (!isAssimilated) return null;
                          return (
                            <button
                              type="button"
                              onClick={() => handleOpenAssimilation(m)}
                              className="px-2 py-1 bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 rounded text-xs font-bold flex items-center gap-1 cursor-pointer shadow-2xs"
                              title={`在同化法則庫中查看同化路徑`}
                            >
                              <GitMerge className="w-3 h-3 text-amber-700" />
                              <span>同化律</span>
                            </button>
                          );
                        })()}
                      </>
                    )}

                    {isSuffix && onOpenRules && (
                      <button
                        type="button"
                        onClick={() => handleMorphemeRuleClick(m)}
                        className="px-2.5 py-1 bg-emerald-100 hover:bg-emerald-200 text-emerald-900 border border-emerald-300 rounded text-xs font-bold flex items-center gap-1 cursor-pointer shadow-2xs active:scale-95"
                        title={`在規則庫中查閱「${rawKey}」後綴詞性功能`}
                      >
                        <BookOpen className="w-3 h-3 text-emerald-700" />
                        <span>查後綴詞性庫</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Meaning & Morphology Explanation */}
                <div className="space-y-2 text-xs text-slate-800">
                  <div className="flex items-start gap-1.5">
                    <span className="font-bold text-slate-600 shrink-0">核心語義：</span>
                    <span className="font-semibold text-slate-900 leading-snug">{m.meaning}</span>
                    {m.grammaticalRole && (
                      <span className="text-slate-500 font-normal">({m.grammaticalRole})</span>
                    )}
                  </div>
                  
                  {/* Morphology explanation */}
                  <div className="text-[11px] text-slate-700 bg-white/90 p-2 rounded border border-slate-200 leading-relaxed shadow-2xs">
                    <span className="font-bold text-indigo-700 mr-1">💡 形態說明：</span>
                    <span>{getMorphemeMorphologyNote(m)}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop & Tablet Table (>= 640px) */}
        <div className="hidden sm:block overflow-x-auto rounded-md border border-slate-300">
          <table className="w-full border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-300 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
                <th className="px-3.5 py-2.5 text-left border-r border-slate-300 w-28">
                  詞綴成分
                </th>
                <th className="px-3.5 py-2.5 text-left border-r border-slate-300 w-5/12">
                  形態 (原形 ➔ 變體)
                </th>
                <th className="px-3.5 py-2.5 text-left">
                  核心語義 / 語法角色
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {morphemes.map((m, idx) => {
                const st = getStyleForType(m.type);
                const isRoot = m.type === 'root';
                const isPrefix = m.type === 'prefix';
                const isSuffix = m.type === 'suffix';
                const rawKey = m.morpheme || m.originalForm || '';
                const morphNote = getMorphemeMorphologyNote(m);

                return (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    {/* Type / Component */}
                    <td className="px-3.5 py-3 font-medium text-slate-900 whitespace-nowrap border-r border-slate-200">
                      <span className="mr-1.5 text-base">{st.icon}</span>
                      <span className="font-bold text-slate-800 text-sm">
                        {m.label?.replace(/^[^\w\u4e00-\u9fa5]+/, '') || st.name}
                      </span>
                    </td>

                    {/* Morphological variant */}
                    <td className={`px-3.5 py-3 border-r border-slate-200 ${st.bgCell}`}>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                          <div className="font-mono text-sm font-bold">
                            <span>{m.originalForm}</span>
                            {m.morpheme !== m.originalForm && (
                              <span className="text-slate-600 font-normal"> ➔ <strong className="text-slate-950 font-bold">{m.morpheme}</strong></span>
                            )}
                          </div>

                          {/* Action Buttons on Desktop */}
                          <div className="flex items-center gap-1.5 flex-wrap">
                            {isRoot && onOpenRules && (
                              <>
                                {(m.variantNote?.includes('同化') || m.label?.includes('同化')) && (
                                  <button
                                    type="button"
                                    onClick={() => handleOpenAssimilation(m)}
                                    className="px-1.5 py-0.5 bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 rounded text-[11px] font-bold flex items-center gap-0.5 cursor-pointer shadow-2xs"
                                    title={`在同化法則庫中查看同化路徑`}
                                  >
                                    <GitMerge className="w-2.5 h-2.5 text-amber-700" />
                                    <span>同化律</span>
                                  </button>
                                )}
                                {(m.variantNote?.includes('對偶') || m.variantNote?.includes('格林') || m.variantNote?.includes('階變') || m.label?.includes('對偶')) && (
                                  <button
                                    type="button"
                                    onClick={() => onOpenRules({ tab: 'phonology', query: rawKey })}
                                    className="px-1.5 py-0.5 bg-purple-50 hover:bg-purple-100 text-purple-800 border border-purple-200 rounded text-[11px] font-bold flex items-center gap-0.5 cursor-pointer shadow-2xs"
                                    title="在規則庫中查閱語音對偶律"
                                  >
                                    <Sparkles className="w-2.5 h-2.5 text-purple-600" />
                                    <span>對偶律</span>
                                  </button>
                                )}
                                {!(m.variantNote?.includes('同化') || m.label?.includes('同化')) && hasDualStemEntry(rawKey) && (
                                  <button
                                    type="button"
                                    onClick={() => handleMorphemeRuleClick(m)}
                                    className="px-1.5 py-0.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-800 border border-indigo-200 rounded text-[11px] font-bold flex items-center gap-0.5 cursor-pointer shadow-2xs"
                                    title="在規則庫中查閱古典雙詞幹對照"
                                  >
                                    <Layers className="w-2.5 h-2.5 text-indigo-600" />
                                    <span>雙詞幹對照</span>
                                  </button>
                                )}
                              </>
                            )}

                            {isPrefix && onOpenRules && (
                              <>
                                <button
                                  type="button"
                                  onClick={() => handleMorphemeRuleClick(m)}
                                  className="px-2 py-0.5 bg-red-100 hover:bg-red-200 text-red-900 border border-red-300 rounded text-[11px] font-bold flex items-center gap-1 transition-all cursor-pointer shadow-2xs hover:scale-105 shrink-0"
                                  title={`在規則庫中查閱「${rawKey}」前綴分類`}
                                >
                                  <BookOpen className="w-3 h-3 text-red-700" />
                                  <span>查前綴詞性庫</span>
                                </button>
                                {(m.morpheme !== m.originalForm || m.variantNote?.includes('同化') || m.label?.includes('同化')) && (
                                  <button
                                    type="button"
                                    onClick={() => handleOpenAssimilation(m)}
                                    className="px-1.5 py-0.5 bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 rounded text-[11px] font-bold flex items-center gap-0.5 cursor-pointer shadow-2xs"
                                    title={`在同化法則庫中查看同化路徑`}
                                  >
                                    <GitMerge className="w-2.5 h-2.5 text-amber-700" />
                                    <span>同化律</span>
                                  </button>
                                )}
                              </>
                            )}

                            {isSuffix && onOpenRules && (
                              <button
                                type="button"
                                onClick={() => handleMorphemeRuleClick(m)}
                                className="px-2 py-0.5 bg-emerald-100 hover:bg-emerald-200 text-emerald-900 border border-emerald-300 rounded text-[11px] font-bold flex items-center gap-1 transition-all cursor-pointer shadow-2xs hover:scale-105 shrink-0"
                                title={`在規則庫中查閱「${rawKey}」後綴詞性功能`}
                              >
                                <BookOpen className="w-3 h-3 text-emerald-700" />
                                <span>查後綴詞性庫</span>
                              </button>
                            )}
                          </div>
                        </div>

                        {/* Morphology Explanatory Note */}
                        <div className="text-[11px] font-sans text-slate-700 bg-white/80 p-1.5 rounded border border-slate-200 leading-relaxed">
                          <span className="font-bold text-indigo-700 mr-1">💡 形態說明：</span>
                          <span>{morphNote}</span>
                        </div>
                      </div>
                    </td>

                    {/* Meaning / Grammatical Role */}
                    <td className="px-3.5 py-3 text-slate-800">
                      <div>
                        <span className="font-semibold text-slate-900 text-sm">{m.meaning}</span>
                        {m.grammaticalRole && (
                          <span className="text-slate-500 text-xs ml-1 font-normal">
                            ({m.grammaticalRole})
                          </span>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* 3. Mathematical Semantic Derivation Equation */}
      <div className="bg-slate-50 rounded-lg p-3 sm:p-5 border border-slate-300 space-y-2.5 sm:space-y-3.5">
        {/* Compact Mnemonic & Cognate Hook (No large mind map) */}
        {mnemonic && (
          <div className="pt-2 border-t border-slate-200/80 space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-amber-800 font-bold text-xs">
                <Lightbulb className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>直譯解釋</span>
              </div>
              <button
                onClick={() => {
                  setIsMasked(!isMasked);
                  setRevealed(false);
                }}
                className="text-[11px] text-slate-500 hover:text-slate-800 flex items-center gap-1 cursor-pointer font-sans"
              >
                {isMasked ? <EyeOff className="w-3 h-3 text-amber-600" /> : <Eye className="w-3 h-3 text-slate-400" />}
                <span>{isMasked ? '自測遮罩中' : '遮罩自測'}</span>
              </button>
            </div>

            {isMasked && !revealed ? (
              <div
                onClick={() => setRevealed(true)}
                className="p-2 bg-amber-50/60 hover:bg-amber-100/60 border border-dashed border-amber-300 rounded text-xs text-amber-900 cursor-pointer text-center italic transition-colors"
              >
                🔒 點擊揭曉口訣...
              </div>
            ) : (
              <div className="p-2.5 bg-amber-50 border border-amber-200/80 rounded-md text-xs font-bold text-amber-950 leading-relaxed">
                “{mnemonic}”
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
