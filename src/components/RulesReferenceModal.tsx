import React, { useState, useMemo, useRef, useEffect } from 'react';
import {
  X,
  Search,
  BookOpen,
  Layers,
  ArrowRight,
  Sparkles,
  GitMerge,
  BookMarked,
  Compass,
  ChevronDown,
  ChevronUp,
  Volume2,
  ExternalLink,
  Cpu
} from 'lucide-react';
import {
  ASSIMILATION_RULES,
  DUAL_STEM_RULES,
  GRIMMS_LAW_INFO,
  PHONOLOGICAL_LAWS,
  SUFFIX_TAXONOMY,
  PREFIX_TAXONOMY,
  ETYMOLOGICAL_STRATA
} from '../data/rulesData';
import { PRESET_WORDS } from '../data/presetWords';
import { generateFallbackAnalysis } from '../utils/fallbackGenerator';
import { speakWord } from '../utils/speech';
import { WordAnalysis } from '../types';

export type TabType = 'prefixes' | 'dualStems' | 'phonology' | 'suffixes' | 'strata' | 'assimilation';

interface RulesReferenceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectWord?: (word: string) => void;
  initialTab?: TabType;
  initialQuery?: string;
}

export const RulesReferenceModal: React.FC<RulesReferenceModalProps> = ({
  isOpen,
  onClose,
  onSelectWord,
  initialTab,
  initialQuery
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('prefixes');
  const [searchQuery, setSearchQuery] = useState(initialQuery || '');
  const [showFullMatrix, setShowFullMatrix] = useState(true);
  const [previewWordAnalysis, setPreviewWordAnalysis] = useState<WordAnalysis | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const contentContainerRef = useRef<HTMLDivElement>(null);

  // Sync initial tab (mapping 'assimilation' to 'prefixes') and initial query when opened
  useEffect(() => {
    if (isOpen) {
      if (initialTab) {
        if (initialTab === 'assimilation' || (initialTab as any) === 'all') {
          setActiveTab('prefixes');
        } else {
          setActiveTab(initialTab);
        }
      } else {
        setActiveTab('prefixes');
      }
      if (initialQuery !== undefined) {
        setSearchQuery(initialQuery);
      }
    }
  }, [isOpen, initialTab, initialQuery]);

  // Helper to scroll the rules content container to the very top or an anchor
  const scrollToContentTop = (smooth = true) => {
    if (contentContainerRef.current) {
      contentContainerRef.current.scrollTo({
        top: 0,
        behavior: smooth ? 'smooth' : 'auto'
      });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Automatically scroll to top when search query or active tab changes
  useEffect(() => {
    scrollToContentTop(false);
  }, [searchQuery, activeTab]);

  // Clean word string and fetch its analysis for in-situ preview
  const handlePreviewWord = (rawWord: string) => {
    const clean = rawWord.split(/[\s(/,]/)[0].replace(/[^a-zA-Z]/g, '').toLowerCase();
    if (!clean) return;
    const found = PRESET_WORDS[clean] || generateFallbackAnalysis(clean);
    setPreviewWordAnalysis(found);
  };

  const handlePlayPreviewAudio = (word: string) => {
    if (!word) return;
    setIsPlayingAudio(true);
    speakWord(word, { lang: 'en-US', rate: 0.85 }, {
      onEnd: () => setIsPlayingAudio(false),
      onError: () => setIsPlayingAudio(false)
    });
  };

  // Clean and normalize search query (case-insensitive & hyphen-tolerant)
  const normalizedQuery = useMemo(() => {
    const raw = searchQuery.trim().toLowerCase();
    const stripped = raw.replace(/^-+|-+$/g, '');
    return { raw, stripped };
  }, [searchQuery]);

  // Prefix alias map for bidirectional search between variants and base forms
  const PREFIX_ALIAS_MAP: Record<string, string[]> = {
    ad: ['ac', 'af', 'ag', 'al', 'an', 'ap', 'ar', 'as', 'at', 'a'],
    ac: ['ad'], af: ['ad'], ag: ['ad'], al: ['ad'], ap: ['ad'], ar: ['ad'], as: ['ad'], at: ['ad'],
    con: ['com', 'col', 'cor', 'co'], com: ['con'], col: ['con'], cor: ['con'], co: ['con'],
    in: ['im', 'il', 'ir', 'en', 'em'], im: ['in'], il: ['in'], ir: ['in'], en: ['in'], em: ['in'],
    sub: ['suc', 'suf', 'sug', 'sum', 'sup', 'sur', 'sus', 'su'],
    suc: ['sub'], suf: ['sub'], sug: ['sub'], sum: ['sub'], sup: ['sub'], sur: ['sub'], sus: ['sub'], su: ['sub'],
    ob: ['oc', 'of', 'op', 'os'], oc: ['ob'], of: ['ob'], op: ['ob'], os: ['ob'],
    dis: ['dif', 'di'], dif: ['dis'], di: ['dis'],
    ex: ['e', 'ef'], ef: ['ex'],
    ab: ['abs', 'a'], abs: ['ab'],
    per: ['pel'], pel: ['per'],
    trans: ['tra', 'tran'], tra: ['trans'], tran: ['trans'],
    syn: ['sym', 'syl', 'sys', 'sy'], sym: ['syn'], syl: ['syn'], sys: ['syn'], sy: ['syn'],
    an: ['ad', 'a'], a: ['ad', 'ab', 'an']
  };

  // Map each base prefix to its assimilation rule if available
  const assimilationRuleByPrefixKey = useMemo(() => {
    const map = new Map<string, typeof ASSIMILATION_RULES[0]>();
    ASSIMILATION_RULES.forEach((rule) => {
      const keys = rule.prefix.toLowerCase().replace(/[`\s]/g, '').split(/[/,]/).map((k) => k.replace(/^-+|-+$/g, ''));
      keys.forEach((k) => {
        if (k) map.set(k, rule);
      });
    });
    return map;
  }, []);

  // Tokenize search query into multiple smart search keys
  const searchTokens = useMemo(() => {
    const raw = searchQuery.trim().toLowerCase();
    if (!raw) return [];

    const affixTokens = (raw.match(/[a-z]+-|-+[a-z]+/gi) || []).map((t) => t.toLowerCase());
    const wordTokens = (raw.match(/[a-z]{2,}/gi) || []).map((t) => t.toLowerCase());
    const cjkTokens = (raw.match(/[\u4e00-\u9fa5]{2,}/gi) || []).map((t) => t.toLowerCase());
    const stripped = raw.replace(/^[^\w\u4e00-\u9fa5]+|[^\w\u4e00-\u9fa5]+$/g, '').toLowerCase();
    const parts = raw.split(/[➔\->+=,()（）\s/]+/).map((p) => p.trim().toLowerCase()).filter((p) => p.length >= 2);

    const aliasExpansions: string[] = [];
    [stripped, ...wordTokens, ...parts].forEach((k) => {
      const cleanKey = k.replace(/^-+|-+$/g, '');
      if (PREFIX_ALIAS_MAP[cleanKey]) {
        PREFIX_ALIAS_MAP[cleanKey].forEach((alias) => {
          aliasExpansions.push(alias);
          aliasExpansions.push(`${alias}-`);
        });
      }
    });

    return Array.from(new Set([raw, stripped, ...affixTokens, ...wordTokens, ...cjkTokens, ...parts, ...aliasExpansions]))
      .filter((t) => t && t.length >= 2);
  }, [searchQuery]);

  const matchesSearch = (text?: string): boolean => {
    if (!text || searchTokens.length === 0) return false;
    const lower = text.toLowerCase();
    const rawTrimmed = searchQuery.trim().toLowerCase();

    if ((rawTrimmed.length >= 3 || /[\u4e00-\u9fa5]/.test(rawTrimmed)) && lower.includes(rawTrimmed)) {
      return true;
    }

    return searchTokens.some((token) => {
      if (!token || token.length < 2) return false;

      if (token.length === 2 && /^[a-z0-9]+$/i.test(token)) {
        const pattern = new RegExp(`(^|[^a-z0-9])${token}($|[^a-z0-9]|-|—|\\b|\\s)`, 'i');
        if (pattern.test(lower)) return true;
        if (/^[a-z]/.test(lower) && lower.startsWith(token)) return true;
        return false;
      }

      if (token.includes('-')) {
        const clean = token.replace(/^-+|-+$/g, '');
        if (lower.includes(token)) return true;
        const pattern = new RegExp(`(^|[^a-z0-9])${clean}($|[^a-z0-9]|-|—|\\b)`, 'i');
        return pattern.test(lower);
      }

      return lower.includes(token);
    });
  };

  // 0. Filtered Prefix Taxonomy (Incorporates Assimilation Variants)
  const filteredPrefixes = useMemo(() => {
    if (!normalizedQuery.raw) return PREFIX_TAXONOMY;
    const processed = PREFIX_TAXONOMY.map((group) => {
      const matchingItems = group.items.filter(
        (item) =>
          matchesSearch(item.prefix) ||
          matchesSearch(item.meaning) ||
          matchesSearch(item.origin) ||
          item.examples.some((ex) => matchesSearch(ex))
      );

      // Sort items: direct prefix header matches first
      const sortedItems = [...matchingItems].sort((a, b) => {
        const aPrefixMatch = matchesSearch(a.prefix) ? 2 : matchesSearch(a.meaning) ? 1 : 0;
        const bPrefixMatch = matchesSearch(b.prefix) ? 2 : matchesSearch(b.meaning) ? 1 : 0;
        return bPrefixMatch - aPrefixMatch;
      });

      return {
        ...group,
        items: sortedItems
      };
    }).filter((group) => group.items.length > 0);

    // Sort groups: groups with direct header prefix matches first
    return processed.sort((a, b) => {
      const aHasHeaderMatch = a.items.some((it) => matchesSearch(it.prefix)) ? 1 : 0;
      const bHasHeaderMatch = b.items.some((it) => matchesSearch(it.prefix)) ? 1 : 0;
      return bHasHeaderMatch - aHasHeaderMatch;
    });
  }, [normalizedQuery]);

  const prefixTotalCount = useMemo(() => {
    return filteredPrefixes.reduce((acc, g) => acc + g.items.length, 0);
  }, [filteredPrefixes]);

  // 1. Filtered Assimilation rules (For matrix overview inside Prefix Families)
  const filteredAssimilation = useMemo(() => {
    if (!normalizedQuery.raw) return ASSIMILATION_RULES;
    const matching = ASSIMILATION_RULES.filter(
      (r) =>
        matchesSearch(r.prefix) ||
        matchesSearch(r.meaning) ||
        r.rules.some(
          (sub) =>
            matchesSearch(sub.variant) ||
            matchesSearch(sub.condition) ||
            sub.examples.some((ex) => matchesSearch(ex))
        )
    );

    // Sort: prefix header matches first
    return matching.sort((a, b) => {
      const aHeaderMatch = matchesSearch(a.prefix) ? 2 : a.rules.some((sub) => matchesSearch(sub.variant)) ? 1 : 0;
      const bHeaderMatch = matchesSearch(b.prefix) ? 2 : b.rules.some((sub) => matchesSearch(sub.variant)) ? 1 : 0;
      return bHeaderMatch - aHeaderMatch;
    });
  }, [normalizedQuery]);

  // Combined Prefix Family Count (Prefix items + Assimilation rules)
  const prefixFamilyTotalCount = useMemo(() => {
    return prefixTotalCount + filteredAssimilation.length;
  }, [prefixTotalCount, filteredAssimilation]);

  // 2. Filtered Dual Stem rules
  const filteredDualStems = useMemo(() => {
    if (!normalizedQuery.raw) return DUAL_STEM_RULES;
    const matching = DUAL_STEM_RULES.filter(
      (r) =>
        matchesSearch(r.pair) ||
        matchesSearch(r.present) ||
        matchesSearch(r.supine) ||
        matchesSearch(r.meaning) ||
        r.examples.some((ex) => matchesSearch(ex))
    );

    // Sort: header stem/pair matches first
    return matching.sort((a, b) => {
      const aHeaderMatch = (matchesSearch(a.pair) || matchesSearch(a.present) || matchesSearch(a.supine)) ? 2 : matchesSearch(a.meaning) ? 1 : 0;
      const bHeaderMatch = (matchesSearch(b.pair) || matchesSearch(b.present) || matchesSearch(b.supine)) ? 2 : matchesSearch(b.meaning) ? 1 : 0;
      return bHeaderMatch - aHeaderMatch;
    });
  }, [normalizedQuery]);

  // 3. Filtered Phonological Laws
  const filteredPhonology = useMemo(() => {
    if (!normalizedQuery.raw) return PHONOLOGICAL_LAWS;
    const matching = PHONOLOGICAL_LAWS.filter(
      (r) =>
        matchesSearch(r.title) ||
        matchesSearch(r.desc) ||
        r.examples.some((ex) => matchesSearch(ex))
    );

    // Sort: header / law title matches first
    return matching.sort((a, b) => {
      const aTitleMatch = matchesSearch(a.title) ? 1 : 0;
      const bTitleMatch = matchesSearch(b.title) ? 1 : 0;
      return bTitleMatch - aTitleMatch;
    });
  }, [normalizedQuery]);

  // 4. Filtered Suffixes Taxonomy
  const filteredSuffixes = useMemo(() => {
    if (!normalizedQuery.raw) return SUFFIX_TAXONOMY;
    const filterAndSortGroup = (items: typeof SUFFIX_TAXONOMY.nouns) => {
      const matching = items.filter(
        (item) =>
          matchesSearch(item.type) ||
          matchesSearch(item.suffixes) ||
          matchesSearch(item.examples)
      );

      return matching.sort((a, b) => {
        const aHeaderMatch = (matchesSearch(a.suffixes) || matchesSearch(a.type)) ? 1 : 0;
        const bHeaderMatch = (matchesSearch(b.suffixes) || matchesSearch(b.type)) ? 1 : 0;
        return bHeaderMatch - aHeaderMatch;
      });
    };

    return {
      nouns: filterAndSortGroup(SUFFIX_TAXONOMY.nouns),
      verbs: filterAndSortGroup(SUFFIX_TAXONOMY.verbs),
      adjectives: filterAndSortGroup(SUFFIX_TAXONOMY.adjectives),
      adverbs: filterAndSortGroup(SUFFIX_TAXONOMY.adverbs)
    };
  }, [normalizedQuery]);

  const suffixTotalCount = useMemo(() => {
    return (
      filteredSuffixes.nouns.length +
      filteredSuffixes.verbs.length +
      filteredSuffixes.adjectives.length +
      filteredSuffixes.adverbs.length
    );
  }, [filteredSuffixes]);

  // 5. Filtered Strata & Grimm's Law
  const filteredStrata = useMemo(() => {
    if (!normalizedQuery.raw) return ETYMOLOGICAL_STRATA;
    const matching = ETYMOLOGICAL_STRATA.filter(
      (s) =>
        matchesSearch(s.level) ||
        matchesSearch(s.domain) ||
        matchesSearch(s.features) ||
        s.examples.some((ex) => matchesSearch(ex))
    );

    return matching.sort((a, b) => {
      const aHeaderMatch = matchesSearch(a.level) ? 1 : 0;
      const bHeaderMatch = matchesSearch(b.level) ? 1 : 0;
      return bHeaderMatch - aHeaderMatch;
    });
  }, [normalizedQuery]);

  const filteredGrimms = useMemo(() => {
    if (!normalizedQuery.raw) return GRIMMS_LAW_INFO;
    const matching = GRIMMS_LAW_INFO.filter(
      (g) =>
        matchesSearch(g.rule) ||
        matchesSearch(g.latin) ||
        matchesSearch(g.english) ||
        matchesSearch(g.note)
    );

    return matching.sort((a, b) => {
      const aHeaderMatch = (matchesSearch(a.rule) || matchesSearch(a.latin) || matchesSearch(a.english)) ? 1 : 0;
      const bHeaderMatch = (matchesSearch(b.rule) || matchesSearch(b.latin) || matchesSearch(b.english)) ? 1 : 0;
      return bHeaderMatch - aHeaderMatch;
    });
  }, [normalizedQuery]);

  const strataTotalCount = useMemo(() => {
    return filteredStrata.length + filteredGrimms.length;
  }, [filteredStrata, filteredGrimms]);

  // Consolidated Tab result summary counts
  const tabCounts: Record<TabType, number> = useMemo(() => ({
    prefixes: prefixFamilyTotalCount,
    assimilation: filteredAssimilation.length,
    dualStems: filteredDualStems.length,
    phonology: filteredPhonology.length,
    suffixes: suffixTotalCount,
    strata: strataTotalCount
  }), [prefixFamilyTotalCount, filteredAssimilation, filteredDualStems, filteredPhonology, suffixTotalCount, strataTotalCount]);

  const totalMatchesAllTabs = useMemo(() => {
    return prefixFamilyTotalCount + filteredDualStems.length + filteredPhonology.length + suffixTotalCount + strataTotalCount;
  }, [prefixFamilyTotalCount, filteredDualStems, filteredPhonology, suffixTotalCount, strataTotalCount]);

  // Base tabs order definition
  const baseTabMeta: { id: TabType; label: string; icon: any; count: number }[] = useMemo(() => [
    { id: 'prefixes', label: '🚩 前綴家族庫 (含同化音變)', icon: Compass, count: tabCounts.prefixes },
    { id: 'dualStems', label: '💎 雙詞幹對照', icon: Layers, count: tabCounts.dualStems },
    { id: 'phonology', label: '⚖️ 對偶律', icon: Sparkles, count: tabCounts.phonology },
    { id: 'suffixes', label: '🏷️ 後綴詞性庫', icon: BookOpen, count: tabCounts.suffixes },
    { id: 'strata', label: '🏛️ 詞源三大地層', icon: BookMarked, count: tabCounts.strata }
  ], [tabCounts]);

  // Dynamic Tab Meta: When searching, tabs with search matches are prioritized and placed first in the header!
  const tabMeta = useMemo(() => {
    if (!normalizedQuery.raw) return baseTabMeta;
    return [...baseTabMeta].sort((a, b) => {
      const aHas = a.count > 0 ? 1 : 0;
      const bHas = b.count > 0 ? 1 : 0;
      if (aHas !== bHas) return bHas - aHas; // Tabs with matches first
      return b.count - a.count; // Higher count first
    });
  }, [baseTabMeta, normalizedQuery.raw]);

  // When user is searching, if the current active tab has 0 matches, auto switch to the top matching tab in header
  useEffect(() => {
    if (normalizedQuery.raw && tabCounts[activeTab] === 0 && totalMatchesAllTabs > 0) {
      const firstMatchingTab = tabMeta.find((t) => t.count > 0);
      if (firstMatchingTab && firstMatchingTab.id !== activeTab) {
        setActiveTab(firstMatchingTab.id);
      }
    }
  }, [normalizedQuery.raw, activeTab, tabCounts, totalMatchesAllTabs, tabMeta]);

  if (!isOpen) return null;

  /* ---------------- SECTION RENDERERS ---------------- */

  // Section: Unified Prefixes & Assimilation (前綴家族庫)
  const renderPrefixFamilySection = () => {
    if (filteredPrefixes.length === 0 && filteredAssimilation.length === 0) return null;
    return (
      <div id="prefixes-section" className="space-y-5">        
        {/* 1. Prefix Taxonomy Groups with Inline Assimilation Linkage */}
        <div className="space-y-4">
          {filteredPrefixes.map((group, gIdx) => (
            <div key={gIdx} className="bg-white border-2 border-slate-900 rounded-xl p-4 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b-2 border-slate-900 mb-3 gap-1">
                <div>
                  <h4 className="font-black text-slate-900 text-sm flex items-center gap-2">
                    <span>{group.dimension}</span>
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">{group.desc}</p>
                </div>
                <span className="text-[11px] font-mono font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded self-start sm:self-auto">
                  {group.items.length} 個字首家族
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {group.items.map((item, idx) => {
                  // Check if this item has matched assimilation rules
                  const cleanItemPrefixKey = item.prefix.split(/[/,\s]/)[0].replace(/^-+|-+$/g, '').toLowerCase();
                  const relatedAssimilation = assimilationRuleByPrefixKey.get(cleanItemPrefixKey);

                  return (
                    <div
                      key={idx}
                      className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs flex flex-col justify-between hover:border-slate-400 transition-colors"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <span className="px-2 py-0.5 bg-slate-900 text-yellow-400 font-mono font-black text-xs rounded">
                            {item.prefix}
                          </span>
                          {item.origin && (
                            <span className="text-[10px] text-slate-500 font-medium italic">
                              {item.origin}
                            </span>
                          )}
                        </div>

                        <div className="font-bold text-slate-800 text-xs my-1">
                          {item.meaning}
                        </div>

                        {/* Inline Assimilation Highlight if this prefix family assimilates */}
                        {relatedAssimilation && (
                          <div className="my-2 p-2 bg-indigo-50/70 border border-indigo-200 rounded-lg text-[11px]">
                            <div className="flex items-center gap-1 font-bold text-indigo-900 mb-1">
                              <GitMerge className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                              <span>同化音變家族 (Assimilation Variants)：</span>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {relatedAssimilation.rules.map((r, rIdx) => (
                                <span
                                  key={rIdx}
                                  className="font-mono font-bold text-indigo-700 bg-white px-1.5 py-0.5 rounded border border-indigo-200 shadow-2xs"
                                  title={`${r.variant} (${r.condition})`}
                                >
                                  {r.variant}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="pt-2 border-t border-slate-200/60 mt-2">
                        <div className="text-[10px] font-bold text-slate-400 mb-1">代表字範例：</div>
                        <div className="flex flex-wrap gap-1">
                          {item.examples.map((ex, eIdx) => {
                            const cleanWord = ex.split(' ')[0].replace(/[^a-zA-Z]/g, '');
                            return (
                              <button
                                key={eIdx}
                                type="button"
                                onClick={() => handlePreviewWord(cleanWord || ex)}
                                className="text-[11px] font-mono font-bold text-indigo-700 bg-white hover:bg-yellow-300 hover:text-slate-900 px-1.5 py-0.5 rounded border border-slate-200 transition-colors cursor-pointer"
                              >
                                {ex}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* 2. Integrated Assimilation Matrix Table (八大同化矩陣速查) */}
        {filteredAssimilation.length > 0 && (
          <div className="bg-white border-2 border-slate-900 rounded-xl p-4 shadow-xs">
            <div
              onClick={() => setShowFullMatrix(!showFullMatrix)}
              className="flex items-center justify-between cursor-pointer pb-2 border-b-2 border-slate-900 select-none"
            >
              <div className="flex items-center gap-2">
                <GitMerge className="w-4 h-4 text-indigo-600" />
                <h4 className="font-black text-slate-900 text-sm">
                  八大語音同化律音變矩陣 (Phonological Assimilation Matrix)
                </h4>
                <span className="text-[11px] font-mono text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-200">
                  {filteredAssimilation.length} 家族
                </span>
              </div>
              <button
                type="button"
                className="text-xs text-slate-500 hover:text-slate-900 flex items-center gap-1 font-bold"
              >
                <span>{showFullMatrix ? '收合矩陣' : '展開速查'}</span>
                {showFullMatrix ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>

            {showFullMatrix && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                {filteredAssimilation.map((rule, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between pb-2 border-b border-slate-200/80 mb-2">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 bg-slate-900 text-yellow-400 font-mono font-black text-xs rounded">
                            {rule.prefix}
                          </span>
                          <span className="text-xs font-bold text-slate-800">
                            {rule.meaning}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-1.5 my-1.5">
                        {rule.rules.map((v, vIdx) => (
                          <div
                            key={vIdx}
                            className="bg-white border border-slate-200 rounded-lg p-2 text-xs flex flex-col gap-0.5"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-mono font-black text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded border border-indigo-200">
                                {v.variant}
                              </span>
                              <span className="text-[11px] text-slate-600 font-medium">
                                {v.condition}
                              </span>
                            </div>
                            <div className="text-[11px] text-slate-500 mt-0.5 italic">
                              範例：
                              {v.examples.map((exW, exWIdx) => (
                                <button
                                  key={exWIdx}
                                  type="button"
                                  onClick={() => handlePreviewWord(exW)}
                                  className="inline-block mx-0.5 font-mono font-bold text-indigo-700 hover:text-indigo-950 underline decoration-indigo-300 hover:decoration-indigo-700 cursor-pointer"
                                >
                                  {exW}
                                </button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-200/80 flex flex-wrap items-center gap-1.5 mt-2">
                      <span className="text-[10px] font-bold text-slate-400">快速速覽:</span>
                      {rule.rules.flatMap((r) => r.examples).slice(0, 5).map((w, wIdx) => {
                        const cleanWord = w.split(' ')[0].replace(/[^a-zA-Z]/g, '');
                        return (
                          <button
                            key={wIdx}
                            type="button"
                            onClick={() => handlePreviewWord(cleanWord || w)}
                            className="text-[11px] font-mono font-bold text-indigo-600 hover:text-indigo-900 bg-indigo-50/80 hover:bg-indigo-100 px-1.5 py-0.5 rounded cursor-pointer transition-colors"
                          >
                            {cleanWord || w}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  // Section: Dual Stems
  const renderDualStemsSection = () => {
    if (filteredDualStems.length === 0) return null;
    return (
      <div id="dual-stems-section" className="space-y-4">
        <div className="bg-amber-50 border border-amber-200 p-3 rounded-xl text-xs text-amber-900 flex items-start gap-2">
          <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">拉丁動詞雙詞幹對照 (Present vs Supine Stems)：</span>
            拉丁語動詞有「現在詞幹（進行/動態）」與「完成被動詞幹（結果/名詞/完成）」，這正是英語中許多動詞與名詞/形容詞字根成對出現的原因（如 <code className="font-mono bg-white px-1 py-0.5 rounded border border-amber-200 font-bold">ced- (走動) vs cess- (已走)</code>）。
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {filteredDualStems.map((stem, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-slate-900 rounded-xl p-3.5 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-2.5">
                  <span className="px-2.5 py-0.5 bg-slate-900 text-yellow-400 font-mono font-black text-sm rounded">
                    {stem.pair}
                  </span>
                  <span className="text-xs font-bold text-slate-700">
                    {stem.meaning}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 my-2">
                  <div className="bg-blue-50/70 border border-blue-200 p-2 rounded-lg">
                    <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">現在詞幹 (Present)</div>
                    <div className="font-mono font-black text-slate-900 text-xs mt-0.5">{stem.present}</div>
                  </div>
                  <div className="bg-purple-50/70 border border-purple-200 p-2 rounded-lg">
                    <div className="text-[10px] font-bold text-purple-600 uppercase tracking-wider">完成詞幹 (Supine)</div>
                    <div className="font-mono font-black text-slate-900 text-xs mt-0.5">{stem.supine}</div>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <div className="text-[10px] font-bold text-slate-400 mb-1">衍生代表字 (點擊即時速覽)：</div>
                <div className="flex flex-wrap gap-1.5">
                  {stem.examples.map((ex, eIdx) => (
                    <button
                      key={eIdx}
                      type="button"
                      onClick={() => handlePreviewWord(ex)}
                      className="text-[11px] font-mono font-bold text-indigo-700 bg-slate-100 hover:bg-yellow-300 hover:text-slate-900 px-1.5 py-0.5 rounded transition-colors cursor-pointer"
                    >
                      {ex}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Section: Phonology & Grimm's Law
  const renderPhonologySection = () => {
    if (filteredPhonology.length === 0 && filteredGrimms.length === 0) return null;
    return (
      <div id="phonology-section" className="space-y-4">
        <div className="space-y-3.5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {filteredPhonology.map((law, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-slate-900 rounded-xl p-4 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2 pb-2 border-b border-slate-100">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-yellow-400 flex items-center justify-center font-mono font-black text-xs shrink-0">
                      {idx + 1}
                    </span>
                    <h4 className="font-bold text-slate-900 text-sm">{law.title}</h4>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed mb-3">
                    {law.desc}
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-2.5">
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    經典演變範例
                  </div>
                  <div className="space-y-1">
                    {law.examples.map((ex, eIdx) => (
                      <div
                        key={eIdx}
                        className="text-xs font-mono font-bold text-indigo-900 flex items-center gap-1.5"
                      >
                        <ArrowRight className="w-3 h-3 text-indigo-500 shrink-0" />
                        <span>{ex}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Grimm's law sub-box */}
          {filteredGrimms.length > 0 && (
            <div className="bg-white border-2 border-slate-900 rounded-xl p-4 shadow-xs">
              <h4 className="font-black text-slate-900 text-sm mb-3 pb-2 border-b-2 border-slate-900 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-yellow-600" />
                  <span>格林定律（Grimm's Law - 印歐至日耳曼輔音推移）</span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">{filteredGrimms.length} 條</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                {filteredGrimms.map((g, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs">
                    <div className="font-mono font-black text-amber-700 text-sm mb-1">{g.rule}</div>
                    <div className="text-slate-600 text-[11px] mb-1"><span className="font-bold text-slate-800">拉丁:</span> {g.latin}</div>
                    <div className="text-indigo-700 font-mono font-bold text-[11px] mb-1.5"><span className="font-bold text-slate-800">英語:</span> {g.english}</div>
                    <div className="text-[10px] text-slate-500 leading-tight">{g.note}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Section: Suffixes
  const renderSuffixesSection = () => {
    if (suffixTotalCount === 0) return null;
    return (
      <div id="suffixes-section" className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {/* Noun Suffixes */}
          {filteredSuffixes.nouns.length > 0 && (
            <div className="bg-white border-2 border-slate-900 rounded-xl p-4 shadow-xs">
              <h4 className="font-black text-slate-900 text-sm mb-3 pb-2 border-b-2 border-slate-900 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded font-mono text-xs">Noun</span>
                  <span>名詞後綴 (角色與抽象概念)</span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">{filteredSuffixes.nouns.length} 項</span>
              </h4>
              <div className="space-y-2.5">
                {filteredSuffixes.nouns.map((item, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs">
                    <div className="font-bold text-slate-800">{item.type}</div>
                    <div className="font-mono font-bold text-indigo-700 text-[11px] my-0.5">{item.suffixes}</div>
                    <div className="text-[11px] text-slate-500 italic">例：{item.examples}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Verb Suffixes */}
          {filteredSuffixes.verbs.length > 0 && (
            <div className="bg-white border-2 border-slate-900 rounded-xl p-4 shadow-xs">
              <h4 className="font-black text-slate-900 text-sm mb-3 pb-2 border-b-2 border-slate-900 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-mono text-xs">Verb</span>
                  <span>動詞使動後綴 (使成為/實踐)</span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">{filteredSuffixes.verbs.length} 項</span>
              </h4>
              <div className="space-y-2.5">
                {filteredSuffixes.verbs.map((item, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs">
                    <div className="font-bold text-slate-800">{item.type}</div>
                    <div className="font-mono font-bold text-emerald-700 text-[11px] my-0.5">{item.suffixes}</div>
                    <div className="text-[11px] text-slate-500 italic">例：{item.examples}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Adjective Suffixes */}
          {filteredSuffixes.adjectives.length > 0 && (
            <div className="bg-white border-2 border-slate-900 rounded-xl p-4 shadow-xs">
              <h4 className="font-black text-slate-900 text-sm mb-3 pb-2 border-b-2 border-slate-900 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-purple-100 text-purple-800 rounded font-mono text-xs">Adj</span>
                  <span>形容詞後綴 (屬性、能力與極性)</span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">{filteredSuffixes.adjectives.length} 項</span>
              </h4>
              <div className="space-y-2.5">
                {filteredSuffixes.adjectives.map((item, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs">
                    <div className="font-bold text-slate-800">{item.type}</div>
                    <div className="font-mono font-bold text-purple-700 text-[11px] my-0.5">{item.suffixes}</div>
                    <div className="text-[11px] text-slate-500 italic">例：{item.examples}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Adverb Suffixes */}
          {filteredSuffixes.adverbs.length > 0 && (
            <div className="bg-white border-2 border-slate-900 rounded-xl p-4 shadow-xs">
              <h4 className="font-black text-slate-900 text-sm mb-3 pb-2 border-b-2 border-slate-900 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-amber-100 text-amber-800 rounded font-mono text-xs">Adv</span>
                  <span>副詞後綴 (方式與方向)</span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">{filteredSuffixes.adverbs.length} 項</span>
              </h4>
              <div className="space-y-2.5">
                {filteredSuffixes.adverbs.map((item, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs">
                    <div className="font-bold text-slate-800">{item.type}</div>
                    <div className="font-mono font-bold text-amber-700 text-[11px] my-0.5">{item.suffixes}</div>
                    <div className="text-[11px] text-slate-500 italic">例：{item.examples}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Section: Strata
  const renderStrataSection = () => {
    if (filteredStrata.length === 0) return null;
    return (
      <div id="strata-section" className="space-y-4">
        <div className="bg-white border-2 border-slate-900 rounded-xl p-4 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {filteredStrata.map((stratum, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs flex flex-col justify-between">
                <div>
                  <div className="font-bold text-slate-900 text-sm mb-1">{stratum.level}</div>
                  <div className="text-slate-600 text-[11px] mb-2 font-medium">{stratum.domain}</div>
                  <div className="bg-white border border-slate-200 rounded p-2 text-[11px] text-slate-700 mb-2">
                    <span className="font-bold text-slate-900">特徵：</span>{stratum.features}
                  </div>
                </div>
                <div className="text-[11px] font-mono text-indigo-700 font-semibold pt-1 border-t border-slate-200">
                  <span className="text-slate-400 font-bold mr-1">代表：</span>
                  {stratum.examples.map((exW, exWIdx) => (
                    <button
                      key={exWIdx}
                      type="button"
                      onClick={() => handlePreviewWord(exW)}
                      className="inline-block mx-0.5 font-mono font-bold text-indigo-700 hover:text-indigo-950 underline decoration-indigo-300 hover:decoration-indigo-700 cursor-pointer"
                    >
                      {exW}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        id="rules-reference-modal"
        className="relative bg-white border-2 border-slate-900 rounded-2xl shadow-2xl w-full max-w-5xl h-[92vh] max-h-[850px] flex flex-col overflow-hidden animate-in zoom-in-95 duration-150"
      >
        {/* Header Bar */}
        <div className="bg-slate-900 text-white px-3 sm:px-6 py-3 border-b-2 border-slate-900 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="p-1.5 bg-yellow-400 text-slate-950 rounded-lg shrink-0">
              <BookMarked className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h2 className="text-sm sm:text-base font-black tracking-wide truncate">
                  規則庫
                </h2>                
              </div>              
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0 ml-2 cursor-pointer"
            title="關閉"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter & Subtabs Bar */}
        <div className="bg-slate-50 border-b-2 border-slate-900 p-2.5 sm:p-3 shrink-0 flex flex-col gap-2.5">
          {/* Top Row: Full-width Search Box */}
          <div className="flex items-center gap-2 w-full">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              <input
                id="rules-search-input"
                type="text"
                value={searchQuery}
                onFocus={() => scrollToContentTop(true)}
                onClick={() => scrollToContentTop(true)}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="全域搜尋"
                className="w-full pl-9 pr-8 py-2 bg-white border-2 border-slate-300 focus:border-slate-900 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden transition-colors shadow-2xs"
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    scrollToContentTop(true);
                  }}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center rounded-full bg-slate-200 hover:bg-slate-300 text-slate-600 text-xs font-bold transition-colors cursor-pointer"
                  title="清除搜尋"
                >
                  ✕
                </button>
              )}
            </div>
            {searchQuery && (
              <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1.5 bg-yellow-400/30 border border-yellow-500 text-slate-950 font-bold text-xs rounded-lg shrink-0">
                <span>跨類共找到</span>
                <span className="font-mono text-slate-900 font-black">{totalMatchesAllTabs}</span>
                <span>項結果</span>
              </span>
            )}
          </div>

          {/* Bottom Row: Tab Selector */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 no-scrollbar">
            {tabMeta.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id || (tab.id === 'prefixes' && activeTab === 'assimilation');
              const hasSearch = !!normalizedQuery.raw;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id as TabType);
                    scrollToContentTop(true);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer shrink-0 ${
                    isActive
                      ? 'bg-slate-900 text-yellow-400 shadow-xs border border-slate-900'
                      : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 hover:border-slate-400'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span>{tab.label}</span>
                  {hasSearch && (
                    <span
                      className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                        isActive
                          ? 'bg-yellow-400/20 text-yellow-300 border border-yellow-400/40'
                          : tab.count > 0
                          ? 'bg-indigo-100 text-indigo-800 font-black'
                          : 'bg-slate-100 text-slate-400'
                      }`}
                    >
                      {tab.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Modal Main Content (Scrollable) */}
        <div
          ref={contentContainerRef}
          className="flex-1 overflow-y-auto p-3 sm:p-5 bg-slate-100/50 space-y-6 scroll-smooth"
        >
          {/* Smart cross-tab notice if current tab has 0 matches but others do */}
          {normalizedQuery.raw && tabCounts[activeTab] === 0 && totalMatchesAllTabs > 0 && (
            <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-3 text-xs text-amber-950 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-xs">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                <span>
                  目前分頁無符合「<strong className="font-mono text-indigo-700">{searchQuery}</strong>」的規則，但在其他分類有找到共 <strong className="text-amber-900 font-mono font-black">{totalMatchesAllTabs}</strong> 項：
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-1.5">
                {tabMeta
                  .filter((t) => t.id !== activeTab && tabCounts[t.id] > 0)
                  .map((t) => (
                    <button
                      key={t.id}
                      onClick={() => {
                        setActiveTab(t.id);
                        scrollToContentTop(true);
                      }}
                      className="px-2.5 py-1 bg-yellow-400 hover:bg-yellow-500 text-slate-950 rounded-md font-bold text-xs cursor-pointer transition-colors flex items-center gap-1 shadow-2xs"
                    >
                      <span>切換至 {t.label}</span>
                      <span className="font-mono bg-slate-900 text-yellow-400 px-1.5 py-0.2 rounded-full text-[10px] font-black">{tabCounts[t.id]}</span>
                    </button>
                  ))}
              </div>
            </div>
          )}

          {/* Global Empty State when no tab has matches */}
          {normalizedQuery.raw && totalMatchesAllTabs === 0 && (
            <div className="bg-white border-2 border-slate-900 rounded-2xl p-6 sm:p-8 text-center space-y-3 shadow-sm">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                跨分類均查無符合「{searchQuery}」的規則項目
              </h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                規則庫支援不分大小寫模糊搜尋。您可以嘗試搜尋字首家族（如 <code className="font-mono text-indigo-700 font-bold">ad</code>, <code className="font-mono text-indigo-700 font-bold">con</code>, <code className="font-mono text-indigo-700 font-bold">sub</code>）、雙詞幹對照（如 <code className="font-mono text-indigo-700 font-bold">dict</code>, <code className="font-mono text-indigo-700 font-bold">ced</code>, <code className="font-mono text-indigo-700 font-bold">duc</code>）、後綴（如 <code className="font-mono text-indigo-700 font-bold">tion</code>, <code className="font-mono text-indigo-700 font-bold">ate</code>）或概念名稱。
              </p>
              <div className="pt-2 flex flex-wrap justify-center gap-1.5">
                {['ad-', 'con-', 'sub-', 're-', 'trans-', 'dict', 'ced / cess', 'duc / duct', '-tion', '格林定律'].map((kw) => (
                  <button
                    key={kw}
                    onClick={() => setSearchQuery(kw)}
                    className="px-2.5 py-1 bg-slate-100 hover:bg-yellow-300 hover:text-slate-950 text-slate-700 rounded-lg text-xs font-mono font-bold border border-slate-300 transition-colors cursor-pointer"
                  >
                    {kw}
                  </button>
                ))}
                <button
                  onClick={() => setSearchQuery('')}
                  className="px-3 py-1 bg-slate-900 text-white rounded-lg text-xs font-bold hover:bg-slate-800 transition-colors cursor-pointer ml-2"
                >
                  清除搜尋
                </button>
              </div>
            </div>
          )}

          {/* TAB 1: 整合後的前綴家族庫 (含同化音變) */}
          {(activeTab === 'prefixes' || activeTab === 'assimilation') && renderPrefixFamilySection()}

          {/* TAB 2: 雙詞幹對照 */}
          {activeTab === 'dualStems' && renderDualStemsSection()}

          {/* TAB 3: 對偶律與語音定律 */}
          {activeTab === 'phonology' && renderPhonologySection()}

          {/* TAB 4: 後綴詞性分類庫 */}
          {activeTab === 'suffixes' && renderSuffixesSection()}

          {/* TAB 5: 詞源三大地層學 */}
          {activeTab === 'strata' && renderStrataSection()}
        </div>

        {/* IN-SITU QUICK PREVIEW DRAWER / POPUP OVERLAY */}
        {previewWordAnalysis && (
          <div className="absolute inset-x-0 bottom-0 z-30 bg-slate-950/60 backdrop-blur-xs p-2 sm:p-4 flex items-end justify-center animate-in fade-in duration-200">
            <div className="bg-white border-2 border-slate-900 rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in slide-in-from-bottom-4 duration-200">
              {/* Preview Header */}
              <div className="bg-slate-900 text-white px-4 py-2.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-yellow-400 text-slate-950 font-black text-[11px] rounded uppercase tracking-wider">
                    單字表
                  </span>                  
                </div>
                <button
                  type="button"
                  onClick={() => setPreviewWordAnalysis(null)}
                  className="p-1 hover:bg-slate-800 rounded-md text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="關閉單字表"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Preview Body */}
              <div className="p-4 sm:p-5 space-y-3.5 max-h-[60vh] overflow-y-auto">
                <div className="flex items-baseline justify-between gap-3 flex-wrap">
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-xl sm:text-2xl font-black text-slate-950 font-mono tracking-tight">
                      {previewWordAnalysis.word}
                    </h3>
                    {previewWordAnalysis.ipa && (
                      <span className="text-xs font-mono font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                        {previewWordAnalysis.ipa}
                      </span>
                    )}
                    <button
                      type="button"
                      onClick={() => handlePlayPreviewAudio(previewWordAnalysis.word)}
                      disabled={isPlayingAudio}
                      className={`p-1.5 rounded-lg border border-slate-200 transition-colors cursor-pointer ${
                        isPlayingAudio ? 'bg-amber-100 text-amber-900 animate-pulse' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                      }`}
                      title="發音播放"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded border border-indigo-200">
                      {previewWordAnalysis.partOfSpeech}
                    </span>
                    <span className="text-sm font-bold text-slate-900">
                      {previewWordAnalysis.chineseMeaning}
                    </span>
                  </div>
                </div>

                {/* Morphemes Breakdown Row */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-2">
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center justify-between">
                    <span>語素拆解架構 (Morpheme Breakdown)</span>
                    {previewWordAnalysis.source === 'assembled' && (
                      <span className="text-[10px] text-amber-700 font-mono font-bold flex items-center gap-1">
                        <Cpu className="w-3 h-3" /> 字根庫拼裝
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {previewWordAnalysis.morphemes.map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className={`p-2 rounded-lg border text-xs flex-1 min-w-[120px] ${
                          m.type === 'prefix'
                            ? 'bg-blue-50/80 border-blue-200 text-blue-950'
                            : m.type === 'root'
                            ? 'bg-amber-50/80 border-amber-200 text-amber-950'
                            : 'bg-purple-50/80 border-purple-200 text-purple-950'
                        }`}
                      >
                        <div className="flex items-center justify-between text-[10px] font-bold opacity-75 mb-0.5">
                          <span>{m.label}</span>
                          <span className="font-mono">{m.originalForm}</span>
                        </div>
                        <div className="font-mono font-black text-sm">{m.morpheme}</div>
                        <div className="text-[11px] mt-0.5 leading-snug">{m.meaning}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Semantic Formula & Logic */}
                {previewWordAnalysis.semantic && (
                  <div className="bg-indigo-50/60 border border-indigo-200/80 rounded-xl p-3 text-xs space-y-1">
                    <div className="font-mono font-bold text-indigo-900">
                      {previewWordAnalysis.semantic.formulaDisplay}
                    </div>
                    {previewWordAnalysis.semantic.literalLogic && (
                      <div className="text-slate-600 text-[11px] leading-relaxed">
                        <span className="font-bold text-slate-800">字源邏輯：</span>
                        {previewWordAnalysis.semantic.literalLogic}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="bg-slate-50 border-t border-slate-200 px-4 py-2.5 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setPreviewWordAnalysis(null)}
                  className="px-3.5 py-1.5 rounded-lg border border-slate-300 bg-white text-slate-700 font-bold text-xs hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  關閉單字表
                </button>               
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="bg-slate-50 border-t-2 border-slate-900 px-4 py-2.5 flex items-center justify-between shrink-0 text-xs">
          <span className="text-slate-500 text-[11px]">
            前綴家族庫（語義維度 × 語音同化律）、拉丁動詞雙詞幹對照、對偶律、四類後綴詞性、詞源三大地層
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg cursor-pointer transition-colors"
          >
            關閉規則庫
          </button>
        </div>
      </div>
    </div>
  );
};
