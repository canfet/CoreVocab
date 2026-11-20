import { WordAnalysis, MorphemeComponent, FamilyWord } from '../types';
import { capitalizeWord } from './format';
import { CURRICULUM_STAGES } from '../data/curriculum';
import { PRESET_WORDS } from '../data/presetWords';

// Extended Prefix Database (Including 8 assimilation branches & Greek/Germanic prefixes)
interface PrefixMeta {
  prefix: string;
  original: string;
  meaning: string;
  role: string;
  category: string;
  assimilationOrigin?: string;
}

const EXTENDED_PREFIXES: Record<string, PrefixMeta> = {
  // ad- assimilation family
  'ad': { prefix: 'ad-', original: 'ad- (拉丁語)', meaning: '朝向、去、加強 (to, toward)', role: '趨向/強化前綴', category: '空間/方向' },
  'ac': { prefix: 'ac-', original: 'ad- ➔ ac- (拉丁語)', meaning: '朝向、加強 (to, toward)', role: '同化前綴(遇c/k/q)', category: '同化音變', assimilationOrigin: 'ad-' },
  'af': { prefix: 'af-', original: 'ad- ➔ af- (拉丁語)', meaning: '朝向、加強 (to, toward)', role: '同化前綴(遇f)', category: '同化音變', assimilationOrigin: 'ad-' },
  'ag': { prefix: 'ag-', original: 'ad- ➔ ag- (拉丁語)', meaning: '朝向、加強 (to, toward)', role: '同化前綴(遇g)', category: '同化音變', assimilationOrigin: 'ad-' },
  'al': { prefix: 'al-', original: 'ad- ➔ al- (拉丁語)', meaning: '朝向、加強 (to, toward)', role: '同化前綴(遇l)', category: '同化音變', assimilationOrigin: 'ad-' },
  'an': { prefix: 'an-', original: 'ad- ➔ an- (拉丁語)', meaning: '朝向、加強 (to, toward)', role: '同化前綴(遇n)', category: '同化音變', assimilationOrigin: 'ad-' },
  'ap': { prefix: 'ap-', original: 'ad- ➔ ap- (拉丁語)', meaning: '朝向、加強 (to, toward)', role: '同化前綴(遇p)', category: '同化音變', assimilationOrigin: 'ad-' },
  'ar': { prefix: 'ar-', original: 'ad- ➔ ar- (拉丁語)', meaning: '朝向、加強 (to, toward)', role: '同化前綴(遇r)', category: '同化音變', assimilationOrigin: 'ad-' },
  'as': { prefix: 'as-', original: 'ad- ➔ as- (拉丁語)', meaning: '朝向、加強 (to, toward)', role: '同化前綴(遇s)', category: '同化音變', assimilationOrigin: 'ad-' },
  'at': { prefix: 'at-', original: 'ad- ➔ at- (拉丁語)', meaning: '朝向、加強 (to, toward)', role: '同化前綴(遇t)', category: '同化音變', assimilationOrigin: 'ad-' },

  // con-/com- assimilation family
  'con': { prefix: 'con-', original: 'com- / con- (拉丁語)', meaning: '共同、一起、徹底 (together, thoroughly)', role: '聚集/強化前綴', category: '關係/態勢' },
  'com': { prefix: 'com-', original: 'com- (拉丁語)', meaning: '共同、加強 (together)', role: '同化前綴(遇b/p/m)', category: '同化音變', assimilationOrigin: 'con-' },
  'col': { prefix: 'col-', original: 'com- ➔ col- (拉丁語)', meaning: '共同、聚集 (together)', role: '同化前綴(遇l)', category: '同化音變', assimilationOrigin: 'con-' },
  'cor': { prefix: 'cor-', original: 'com- ➔ cor- (拉丁語)', meaning: '共同、互相 (together)', role: '同化前綴(遇r)', category: '同化音變', assimilationOrigin: 'con-' },
  'co': { prefix: 'co-', original: 'com- ➔ co- (拉丁語)', meaning: '共同、合作 (together, with)', role: '弱化前綴(遇母音/h)', category: '同化音變', assimilationOrigin: 'con-' },

  // in-/en- assimilation family
  'in': { prefix: 'in-', original: 'in- (拉丁語)', meaning: '1. 向內、進入 (into)；2. 否定 (not)', role: '方位/否定前綴', category: '空間與極性' },
  'im': { prefix: 'im-', original: 'in- ➔ im- (拉丁語)', meaning: '向內 或 否定 (into / not)', role: '同化前綴(遇b/p/m)', category: '同化音變', assimilationOrigin: 'in-' },
  'il': { prefix: 'il-', original: 'in- ➔ il- (拉丁語)', meaning: '否定 或 向內 (not / into)', role: '同化前綴(遇l)', category: '同化音變', assimilationOrigin: 'in-' },
  'ir': { prefix: 'ir-', original: 'in- ➔ ir- (拉丁語)', meaning: '否定 (not)', role: '同化前綴(遇r)', category: '同化音變', assimilationOrigin: 'in-' },
  'en': { prefix: 'en-', original: 'en- (法語/希臘語)', meaning: '使進入、使處於...狀態 (in, cause to be)', role: '使役前綴', category: '使役構詞' },
  'em': { prefix: 'em-', original: 'en- ➔ em- (法語)', meaning: '使進入、加強 (into)', role: '同化使役前綴', category: '同化音變', assimilationOrigin: 'en-' },

  // sub- family
  'sub': { prefix: 'sub-', original: 'sub- (拉丁語)', meaning: '在...之下、次等、秘密 (under, secondary)', role: '空間/位階前綴', category: '空間與層級' },
  'suc': { prefix: 'suc-', original: 'sub- ➔ suc- (拉丁語)', meaning: '在...之下、隨後 (under)', role: '同化前綴(遇c)', category: '同化音變', assimilationOrigin: 'sub-' },
  'suf': { prefix: 'suf-', original: 'sub- ➔ suf- (拉丁語)', meaning: '在...之下 (under)', role: '同化前綴(遇f)', category: '同化音變', assimilationOrigin: 'sub-' },
  'sug': { prefix: 'sug-', original: 'sub- ➔ sug- (拉丁語)', meaning: '在...之下、暗示 (under)', role: '同化前綴(遇g)', category: '同化音變', assimilationOrigin: 'sub-' },
  'sum': { prefix: 'sum-', original: 'sub- ➔ sum- (拉丁語)', meaning: '在...之下 (under)', role: '同化前綴(遇m)', category: '同化音變', assimilationOrigin: 'sub-' },
  'sup': { prefix: 'sup-', original: 'sub- ➔ sup- (拉丁語)', meaning: '在...之下 (under)', role: '同化前綴(遇p)', category: '同化音變', assimilationOrigin: 'sub-' },
  'sur': { prefix: 'sur-', original: 'sub- ➔ sur- 或 super-', meaning: '在...之下 或 在...之上 (under / over)', role: '同化/法語前綴', category: '空間向度' },
  'sus': { prefix: 'sus-', original: 'sub- ➔ sus- (拉丁語)', meaning: '由下往上 (up from under)', role: '同化前綴(遇s/p/t)', category: '同化音變', assimilationOrigin: 'sub-' },

  // ob- family
  'ob': { prefix: 'ob-', original: 'ob- (拉丁語)', meaning: '反對、阻擋、面向 (against, toward)', role: '抗衡/面對前綴', category: '極性與方向' },
  'oc': { prefix: 'oc-', original: 'ob- ➔ oc- (拉丁語)', meaning: '迎面、對向 (toward, against)', role: '同化前綴(遇c)', category: '同化音變', assimilationOrigin: 'ob-' },
  'of': { prefix: 'of-', original: 'ob- ➔ of- (拉丁語)', meaning: '反對、阻礙 (against)', role: '同化前綴(遇f)', category: '同化音變', assimilationOrigin: 'ob-' },
  'op': { prefix: 'op-', original: 'ob- ➔ op- (拉丁語)', meaning: '反對、逆向 (against)', role: '同化前綴(遇p)', category: '同化音變', assimilationOrigin: 'ob-' },

  // dis-/ex-/syn-
  'dis': { prefix: 'dis-', original: 'dis- (拉丁語)', meaning: '分離、相反、除去 (apart, away, not)', role: '否定/分散前綴', category: '極性與分散' },
  'dif': { prefix: 'dif-', original: 'dis- ➔ dif- (拉丁語)', meaning: '分離、分散 (apart)', role: '同化前綴(遇f)', category: '同化音變', assimilationOrigin: 'dis-' },
  'di': { prefix: 'di-', original: 'dis- ➔ di- (拉丁語/希臘語)', meaning: '分離 或 二倍 (apart / two)', role: '弱化前綴', category: '空間與數量' },
  'ex': { prefix: 'ex-', original: 'ex- (拉丁語/希臘語)', meaning: '向外、完全、以前的 (out, thoroughly, former)', role: '空間/狀態前綴', category: '空間向度' },
  'ef': { prefix: 'ef-', original: 'ex- ➔ ef- (拉丁語)', meaning: '向外、徹底 (out)', role: '同化前綴(遇f)', category: '同化音變', assimilationOrigin: 'ex-' },
  'e': { prefix: 'e-', original: 'ex- ➔ e- (拉丁語)', meaning: '向外、發出 (out)', role: '弱化前綴(遇濁輔音)', category: '同化音變', assimilationOrigin: 'ex-' },
  'syn': { prefix: 'syn-', original: 'syn- (希臘語)', meaning: '共同、同時、合成 (together, with)', role: '希臘聚集前綴', category: '關聯' },
  'sym': { prefix: 'sym-', original: 'syn- ➔ sym- (希臘語)', meaning: '共同、感應 (together)', role: '同化前綴(遇b/p/m)', category: '同化音變', assimilationOrigin: 'syn-' },

  // Other Common Prefixes
  'pre': { prefix: 'pre-', original: 'prae- (拉丁語)', meaning: '在...之前、預先 (before, in advance)', role: '時間/方位前綴', category: '時間與空間' },
  'pro': { prefix: 'pro-', original: 'pro- (拉丁語/希臘語)', meaning: '向前、支持、擁護、代理 (forward, in favor of)', role: '方向/立場前綴', category: '方向與態度' },
  're': { prefix: 're-', original: 're- (拉丁語)', meaning: '再次、向後、回歸、重複 (again, back)', role: '反覆/空間前綴', category: '時間與動作' },
  'de': { prefix: 'de-', original: 'de- (拉丁語)', meaning: '向下、離開、去除、徹底 (down, away, completely)', role: '方向/剝奪前綴', category: '空間與反轉' },
  'un': { prefix: 'un-', original: 'un- (古英語)', meaning: '不、未、相反動作 (not, opposite of)', role: '本族否定前綴', category: '極性與否定' },
  'trans': { prefix: 'trans-', original: 'trans- (拉丁語)', meaning: '跨越、轉移、穿過 (across, through, beyond)', role: '空間轉移前綴', category: '空間向度' },
  'per': { prefix: 'per-', original: 'per- (拉丁語)', meaning: '貫穿、徹底、自始至終 (through, thoroughly, completely)', role: '貫穿/強化前綴', category: '空間與程度' },
  'inter': { prefix: 'inter-', original: 'inter- (拉丁語)', meaning: '在...之間、相互 (between, among, mutually)', role: '關係前綴', category: '空間與關係' },
  'intra': { prefix: 'intra-', original: 'intra- (拉丁語)', meaning: '在...之內 (within, inside)', role: '內部前綴', category: '空間向度' },
  'intro': { prefix: 'intro-', original: 'intro- (拉丁語)', meaning: '向內、引入 (inward, into)', role: '內向引導前綴', category: '空間向度' },
  'super': { prefix: 'super-', original: 'super- (拉丁語)', meaning: '在...之上、超級、過度 (above, over, beyond)', role: '程度/空間前綴', category: '層級與程度' },
  'hyper': { prefix: 'hyper-', original: 'hyper- (希臘語)', meaning: '過度、超越 (over, excessive)', role: '希臘極度前綴', category: '程度與層級' },
  'hypo': { prefix: 'hypo-', original: 'hypo- (希臘語)', meaning: '在...之下、次於 (under, below, deficient)', role: '不足前綴', category: '程度與空間' },
  'anti': { prefix: 'anti-', original: 'anti- (希臘語)', meaning: '對抗、反對、抗拒 (against, opposite)', role: '抗衡前綴', category: '極性與抗衡' },
  'contra': { prefix: 'contra-', original: 'contra- (拉丁語)', meaning: '相反、對照 (against, contrary)', role: '相反前綴', category: '極性' },
  'counter': { prefix: 'counter-', original: 'contra- ➔ counter- (法語)', meaning: '反向、對等 (opposite, countering)', role: '抗衡前綴', category: '極性' },
  'tele': { prefix: 'tele-', original: 'tele- (希臘語)', meaning: '遠距離的 (far, distant)', role: '空間前綴', category: '空間' },
  'auto': { prefix: 'auto-', original: 'auto- (希臘語)', meaning: '自己、自動的 (self, same)', role: '主體前綴', category: '主體' },
  'micro': { prefix: 'micro-', original: 'mikros (希臘語)', meaning: '微小的 (small)', role: '尺度前綴', category: '尺度' },
  'macro': { prefix: 'macro-', original: 'makros (希臘語)', meaning: '宏觀的、巨大的 (large, long)', role: '尺度前綴', category: '尺度' },
  'omni': { prefix: 'omni-', original: 'omnis (拉丁語)', meaning: '全、遍及 (all, every)', role: '全景前綴', category: '數量與範圍' },
  'multi': { prefix: 'multi-', original: 'multus (拉丁語)', meaning: '多數的、多元的 (many, much)', role: '多量前綴', category: '數量' },
  'poly': { prefix: 'poly-', original: 'polus (希臘語)', meaning: '多的、多重複合的 (many)', role: '希臘多量前綴', category: '數量' },
  'mono': { prefix: 'mono-', original: 'monos (希臘語)', meaning: '單一的、獨自的 (single, alone)', role: '單一前綴', category: '數量' },
  'bi': { prefix: 'bi-', original: 'bis (拉丁語)', meaning: '二、雙重的 (two, twice)', role: '雙重前綴', category: '數量' },
  'tri': { prefix: 'tri-', original: 'tres / tria (拉丁/希臘語)', meaning: '三 (three)', role: '三倍前綴', category: '數量' },
  'mis': { prefix: 'mis-', original: 'mis- (日耳曼語)', meaning: '錯誤、不當、惡意 (wrongly, badly)', role: '否定/偏差前綴', category: '極性' },
  'mal': { prefix: 'mal-', original: 'malus (拉丁語)', meaning: '惡劣、病態、不當 (bad, evil, ill)', role: '不良前綴', category: '性質' },
  'bene': { prefix: 'bene-', original: 'bene (拉丁語)', meaning: '良好、優美、慈善 (well, good)', role: '良性前綴', category: '性質' },
  'non': { prefix: 'non-', original: 'non (拉丁語)', meaning: '非、無 (not, absence of)', role: '單純否定前綴', category: '極性' },
  'fore': { prefix: 'fore-', original: 'fore (古英語)', meaning: '在前面、預先 (before, front)', role: '本族時間/方位前綴', category: '時間與空間' },
  'over': { prefix: 'over-', original: 'ofer (古英語)', meaning: '過度、在...之上 (too much, above)', role: '程度前綴', category: '程度' },
  'under': { prefix: 'under-', original: 'under (古英語)', meaning: '不足、在...下方 (below, insufficient)', role: '不足前綴', category: '程度' }
};

// Extended Suffix Database
interface SuffixMeta {
  suffix: string;
  meaning: string;
  role: string;
  pos: string;
  category: string;
}

const EXTENDED_SUFFIXES: Record<string, SuffixMeta> = {
  // Nouns
  'tion': { suffix: '-tion', meaning: '動作、過程、狀態或結果 (名詞)', role: '標準動作/狀態名詞後綴', pos: 'noun (名詞)', category: '名詞後綴' },
  'ation': { suffix: '-ation', meaning: '動作、過程或抽象結果 (名詞)', role: '抽象名詞後綴', pos: 'noun (名詞)', category: '名詞後綴' },
  'ition': { suffix: '-ition', meaning: '動作或狀態 (名詞)', role: '拉丁名詞後綴', pos: 'noun (名詞)', category: '名詞後綴' },
  'sion': { suffix: '-sion', meaning: '動作、狀態或結果 (名詞)', role: '顎音化名詞後綴', pos: 'noun (名詞)', category: '名詞後綴' },
  'ment': { suffix: '-ment', meaning: '行為、手段、產物或結果 (名詞)', role: '具體/抽象名詞後綴', pos: 'noun (名詞)', category: '名詞後綴' },
  'ance': { suffix: '-ance', meaning: '性質、狀態或動作 (名詞)', role: '狀態名詞後綴', pos: 'noun (名詞)', category: '名詞後綴' },
  'ence': { suffix: '-ence', meaning: '性質、狀態或實體 (名詞)', role: '性質名詞後綴', pos: 'noun (名詞)', category: '名詞後綴' },
  'ancy': { suffix: '-ancy', meaning: '品質或狀態 (名詞)', role: '抽象名詞後綴', pos: 'noun (名詞)', category: '名詞後綴' },
  'ency': { suffix: '-ency', meaning: '品質或狀態 (名詞)', role: '抽象名詞後綴', pos: 'noun (名詞)', category: '名詞後綴' },
  'ity': { suffix: '-ity', meaning: '性質、狀態或特徵 (名詞)', role: '抽象性質名詞後綴', pos: 'noun (名詞)', category: '名詞後綴' },
  'ty': { suffix: '-ty', meaning: '性質或狀態 (名詞)', role: '名詞後綴', pos: 'noun (名詞)', category: '名詞後綴' },
  'ness': { suffix: '-ness', meaning: '狀態、特質 (名詞)', role: '日耳曼抽象名詞後綴', pos: 'noun (名詞)', category: '名詞後綴' },
  'tude': { suffix: '-tude', meaning: '狀態、度量、情況 (名詞)', role: '維度名詞後綴', pos: 'noun (名詞)', category: '名詞後綴' },
  'ism': { suffix: '-ism', meaning: '主義、學說、體系或現象 (名詞)', role: '學術/主義名詞後綴', pos: 'noun (名詞)', category: '名詞後綴' },
  'ist': { suffix: '-ist', meaning: '從事者、學者、信仰者 (人物名詞)', role: '執行者/專家名詞後綴', pos: 'noun (名詞)', category: '人物名詞' },
  'er': { suffix: '-er', meaning: '做某事的人或工具 (名詞)', role: '施動者名詞後綴', pos: 'noun (名詞)', category: '人物/工具' },
  'or': { suffix: '-or', meaning: '執行者、主管或器具 (名詞)', role: '拉丁施動者名詞後綴', pos: 'noun (名詞)', category: '人物名詞' },
  'ee': { suffix: '-ee', meaning: '受動者、被...的人 (名詞)', role: '受動者名詞後綴', pos: 'noun (名詞)', category: '人物名詞' },
  'ant': { suffix: '-ant', meaning: '1. 執行者/媒介 (名詞)；2. 具有...特性的 (形容詞)', role: '施動者/形容詞後綴', pos: 'noun / adjective', category: '名詞/形容詞' },
  'ent': { suffix: '-ent', meaning: '1. 執行者 (名詞)；2. ...的 (形容詞)', role: '名詞/形容詞後綴', pos: 'noun / adjective', category: '名詞/形容詞' },
  'ure': { suffix: '-ure', meaning: '動作、結果或結構 (名詞)', role: '結構名詞後綴', pos: 'noun (名詞)', category: '名詞後綴' },
  'ship': { suffix: '-ship', meaning: '身份、關係、技能或狀態 (名詞)', role: '關係名詞後綴', pos: 'noun (名詞)', category: '名詞後綴' },
  'hood': { suffix: '-hood', meaning: '時期、群體或狀態 (名詞)', role: '時期名詞後綴', pos: 'noun (名詞)', category: '名詞後綴' },
  'dom': { suffix: '-dom', meaning: '領域、境界或狀態 (名詞)', role: '領域名詞後綴', pos: 'noun (名詞)', category: '名詞後綴' },
  'logy': { suffix: '-logy', meaning: '...學、理論研究 (名詞)', role: '學科名詞後綴', pos: 'noun (名詞)', category: '學科名詞' },

  // Verbs
  'ate': { suffix: '-ate', meaning: '使成為、實行、造成...狀態 (動詞/形容詞)', role: '拉丁使役動詞/形容詞後綴', pos: 'verb / adjective', category: '動詞使役' },
  'ize': { suffix: '-ize', meaning: '使...化、實踐、體系化 (動詞)', role: '現代使動後綴', pos: 'verb (動詞)', category: '動詞使役' },
  'ise': { suffix: '-ise', meaning: '使...化 (動詞)', role: '英式使動後綴', pos: 'verb (動詞)', category: '動詞使役' },
  'ify': { suffix: '-ify', meaning: '使純化、使成為 (動詞)', role: '轉變使役後綴', pos: 'verb (動詞)', category: '動詞使役' },
  'fy': { suffix: '-fy', meaning: '使成為 (動詞)', role: '動詞後綴', pos: 'verb (動詞)', category: '動詞使役' },
  'en': { suffix: '-en', meaning: '使具備某物理性質 (動詞)', role: '日耳曼使動後綴', pos: 'verb (動詞)', category: '動詞使役' },

  // Adjectives
  'able': { suffix: '-able', meaning: '能夠被...的、易於...的 (形容詞)', role: '可受性能力形容詞後綴', pos: 'adjective (形容詞)', category: '形容詞' },
  'ible': { suffix: '-ible', meaning: '可被...的、能夠...的 (形容詞)', role: '拉丁能力形容詞後綴', pos: 'adjective (形容詞)', category: '形容詞' },
  'ive': { suffix: '-ive', meaning: '具有...特性的、傾向於...的 (形容詞)', role: '主動特質形容詞後綴', pos: 'adjective (形容詞)', category: '形容詞' },
  'itive': { suffix: '-itive', meaning: '具有...特質的 (形容詞)', role: '複合形容詞後綴', pos: 'adjective (形容詞)', category: '形容詞' },
  'ative': { suffix: '-ative', meaning: '傾向於...的 (形容詞)', role: '複合形容詞後綴', pos: 'adjective (形容詞)', category: '形容詞' },
  'ous': { suffix: '-ous', meaning: '充滿...的、具有...特質的 (形容詞)', role: '特質形容詞後綴', pos: 'adjective (形容詞)', category: '形容詞' },
  'ious': { suffix: '-ious', meaning: '充滿...的 (形容詞)', role: '形容詞後綴', pos: 'adjective (形容詞)', category: '形容詞' },
  'acious': { suffix: '-acious', meaning: '極度傾向於...的 (形容詞)', role: '強烈特質形容詞後綴', pos: 'adjective (形容詞)', category: '形容詞' },
  'al': { suffix: '-al', meaning: '關於...的、屬於...的 (形容詞)', role: '關係形容詞後綴', pos: 'adjective (形容詞)', category: '形容詞' },
  'ial': { suffix: '-ial', meaning: '具有...性質的 (形容詞)', role: '關係形容詞後綴', pos: 'adjective (形容詞)', category: '形容詞' },
  'ical': { suffix: '-ical', meaning: '與...學術/屬性相關的 (形容詞)', role: '學術形容詞後綴', pos: 'adjective (形容詞)', category: '形容詞' },
  'ic': { suffix: '-ic', meaning: '與...相關的、屬於...特性的 (形容詞)', role: '屬性形容詞後綴', pos: 'adjective (形容詞)', category: '形容詞' },
  'ary': { suffix: '-ary', meaning: '1. 與...相關的 (形容詞)；2. 場所/人員 (名詞)', role: '形容詞/名詞後綴', pos: 'adjective / noun', category: '形容詞' },
  'ory': { suffix: '-ory', meaning: '具有...性質的 (形容詞) 或 場所 (名詞)', role: '形容詞/場所後綴', pos: 'adjective / noun', category: '形容詞' },
  'ful': { suffix: '-ful', meaning: '充滿...的 (形容詞)', role: '充盈形容詞後綴', pos: 'adjective (形容詞)', category: '形容詞' },
  'less': { suffix: '-less', meaning: '沒有...的、缺乏...的 (形容詞)', role: '否定形容詞後綴', pos: 'adjective (形容詞)', category: '形容詞' },

  // Adverbs
  'ly': { suffix: '-ly', meaning: '以...方式、具備...特性地 (副詞)', role: '方式副詞後綴', pos: 'adverb (副詞)', category: '副詞' },
  'ward': { suffix: '-ward', meaning: '朝向...方向 (副詞/形容詞)', role: '方向副詞後綴', pos: 'adverb / adjective', category: '副詞' },
  'wise': { suffix: '-wise', meaning: '就...方面而言、依...方式 (副詞)', role: '維度副詞後綴', pos: 'adverb (副詞)', category: '副詞' }
};

// Rich Curated Latin & Greek Root Dictionary (80+ High Frequency Morphemes)
interface RootMeta {
  root: string;
  stemForms: string[];
  meaning: string;
  etymon: string;
  category: string;
  cognates: string[];
  description: string;
}

const CURATED_ROOT_DICTIONARY: RootMeta[] = [
  { root: 'duc', stemForms: ['duc', 'duct'], meaning: '引導、帶領 (lead, guide, bring)', etymon: '拉丁語 dūcere / ductus', category: '動作與方向', cognates: ['produce', 'conduct', 'deduce', 'educate', 'induce', 'reduce'], description: '核心意象：把人事物從一處「牽引」或「導向」目標。' },
  { root: 'ced', stemForms: ['ced', 'cess', 'ceed'], meaning: '行走、移動、退讓 (go, move, yield)', etymon: '拉丁語 cēdere / cessus', category: '位移與空間', cognates: ['recede', 'process', 'access', 'predecessor', 'succeed', 'exceed'], description: '核心意象：步伐前進、退後或讓出空間。' },
  { root: 'scrib', stemForms: ['scrib', 'script'], meaning: '書寫、刻畫、記錄 (write, draw, record)', etymon: '拉丁語 scrībere / scrīptus', category: '符號與創造', cognates: ['describe', 'prescribe', 'manuscript', 'subscribe', 'transcript', 'inscribe'], description: '核心意象：用筆或雕刻工具將文字印記在載體上。' },
  { root: 'mit', stemForms: ['mit', 'miss'], meaning: '送出、投射、釋放 (send, let go, throw)', etymon: '拉丁語 mittere / missus', category: '發射與傳遞', cognates: ['transmit', 'mission', 'admit', 'dismiss', 'promise', 'emit'], description: '核心意象：把訊息、能量或物體投遞出去。' },
  { root: 'vert', stemForms: ['vert', 'vers'], meaning: '轉向、轉換、翻轉 (turn, change direction)', etymon: '拉丁語 vertere / versus', category: '旋轉與改變', cognates: ['convert', 'reverse', 'divert', 'versatile', 'anniversary', 'adversary'], description: '核心意象：改變面對的方向或轉變形態。' },
  { root: 'pel', stemForms: ['pel', 'puls'], meaning: '驅使、推動、敲擊 (drive, push, strike)', etymon: '拉丁語 pellere / pulsus', category: '動力與衝擊', cognates: ['propel', 'impulse', 'repel', 'compel', 'expel', 'pulsate'], description: '核心意象：施加外力推動物體向前運動。' },
  { root: 'pon', stemForms: ['pon', 'posit', 'pos'], meaning: '放置、立定、安排 (put, place, set)', etymon: '拉丁語 pōnere / positus', category: '安置與結構', cognates: ['postpone', 'deposit', 'component', 'position', 'compose', 'propose'], description: '核心意象：把某物妥善定位安放在特定點。' },
  { root: 'cap', stemForms: ['cap', 'cept', 'cip', 'ceiv'], meaning: '抓取、拿取、容納、理解 (take, seize, hold, grasp)', etymon: '拉丁語 capere / captus', category: '控制與認知', cognates: ['capture', 'accept', 'concept', 'perceive', 'recipient', 'capable'], description: '核心意象：伸手抓住物體，引申為大腦「掌握理解」概念。' },
  { root: 'vid', stemForms: ['vid', 'vis'], meaning: '看見、觀察、景象 (see, look, view)', etymon: '拉丁語 vidēre / vīsus', category: '視覺與認知', cognates: ['evident', 'vision', 'provide', 'invisible', 'supervise', 'video'], description: '核心意象：肉眼目睹或心智洞察未來。' },
  { root: 'spect', stemForms: ['spect', 'spec', 'spic'], meaning: '端詳、注視、觀察 (look at, watch, examine)', etymon: '拉丁語 spectāre / specere', category: '視覺與探究', cognates: ['inspect', 'spectator', 'respect', 'perspective', 'conspicuous', 'suspect'], description: '核心意象：聚焦目光仔細審視。' },
  { root: 'tract', stemForms: ['tract', 'tra'], meaning: '拉、拖曳、吸引 (pull, drag, draw)', etymon: '拉丁語 trahere / tractus', category: '力學與位移', cognates: ['attract', 'extract', 'contract', 'distract', 'traction', 'tractor'], description: '核心意象：用拉力將物體往自身方向牽引。' },
  { root: 'port', stemForms: ['port'], meaning: '攜帶、搬運、門戶 (carry, bear, gate)', etymon: '拉丁語 portāre', category: '搬運與交通', cognates: ['transport', 'import', 'export', 'portable', 'report', 'porter'], description: '核心意象：背負或運輸物品穿過門口港灣。' },
  { root: 'struct', stemForms: ['struct', 'stru'], meaning: '建造、堆疊、建構 (build, pile up, construct)', etymon: '拉丁語 struere / structus', category: '工程與構造', cognates: ['construct', 'destruct', 'instruct', 'structure', 'obstruct', 'instrument'], description: '核心意象：一磚一瓦由下往上堆疊成堅固體系。' },
  { root: 'ject', stemForms: ['ject'], meaning: '投擲、拋出 (throw, cast, hurl)', etymon: '拉丁語 jacere / jactus', category: '投擲與推進', cognates: ['project', 'reject', 'inject', 'object', 'eject', 'trajectory'], description: '核心意象：將物體用力擲出飛向空中。' },
  { root: 'voc', stemForms: ['voc', 'vok'], meaning: '呼喚、發聲、聲音 (call, voice, speak)', etymon: '拉丁語 vocāre / vox', category: '語言與聲音', cognates: ['vocal', 'advocate', 'provoke', 'revoke', 'evoke', 'vocabulary'], description: '核心意象：用喉嚨發出聲音呼叫或聲援。' },
  { root: 'plic', stemForms: ['plic', 'ply', 'plex', 'pli'], meaning: '折疊、編織、重疊 (fold, bend, twine)', etymon: '拉丁語 plicāre', category: '幾何與關係', cognates: ['complicate', 'imply', 'apply', 'explicit', 'complex', 'duplicate'], description: '核心意象：紙張或線條多層次交疊折起。' },
  { root: 'gen', stemForms: ['gen', 'gener', 'gn'], meaning: '出生、繁衍、種類、創造 (birth, produce, kind, origin)', etymon: '希臘/拉丁語 genos / genus', category: '生命與起源', cognates: ['generate', 'genesis', 'generous', 'generic', 'indigenous', 'gender'], description: '核心意象：生命的孕育與種屬的衍生。' },
  { root: 'fac', stemForms: ['fac', 'fect', 'fic', 'fact'], meaning: '做、製造、產生 (make, do, cause)', etymon: '拉丁語 facere / factus', category: '行動與生產', cognates: ['factory', 'perfect', 'affect', 'efficient', 'deficit', 'manufacture'], description: '核心意象：親手勞作並製作出成品。' },
  { root: 'ten', stemForms: ['ten', 'tent', 'tain', 'tin'], meaning: '握持、保持、容納 (hold, keep, grasp)', etymon: '拉丁語 tenēre / tentus', category: '掌控與維持', cognates: ['attain', 'contain', 'maintain', 'retain', 'content', 'tenacious', 'continue'], description: '核心意象：用雙手緊緊抓住不放或維持現狀。' },
  { root: 'sta', stemForms: ['sta', 'stat', 'stit', 'sist'], meaning: '站立、確立、建立 (stand, place, remain)', etymon: '拉丁語 stāre / statuere', category: '位置與狀態', cognates: ['resist', 'statue', 'status', 'constitute', 'constant', 'establish'], description: '核心意象：雙腳站定於地面，穩固不動。' },
  { root: 'flu', stemForms: ['flu', 'flux'], meaning: '流動、流淌 (flow, wave)', etymon: '拉丁語 fluere / fluxus', category: '液體與變化', cognates: ['fluid', 'influx', 'fluent', 'fluctuate', 'affluent', 'confluence'], description: '核心意象：水流源源不絕向前湧動。' },
  { root: 'frag', stemForms: ['frag', 'fract'], meaning: '打破、折斷、破碎 (break, smash)', etymon: '拉丁語 frangere / fractus', category: '形變與瓦解', cognates: ['fragile', 'fraction', 'fragment', 'fracture', 'infraction', 'refract'], description: '核心意象：堅硬物體受外力碎裂成塊。' },
  { root: 'tang', stemForms: ['tang', 'tact', 'ting', 'tag'], meaning: '觸碰、接觸、感觸 (touch, feel)', etymon: '拉丁語 tangere / tactus', category: '感官與互動', cognates: ['attain', 'tangible', 'contact', 'tactile', 'intact', 'contingent', 'contagious'], description: '核心意象：手指肌膚輕觸表面感受質地。' },
  { root: 'cred', stemForms: ['cred', 'credit'], meaning: '相信、信任、信譽 (believe, trust)', etymon: '拉丁語 crēdere / crēditus', category: '心理與信仰', cognates: ['credit', 'incredible', 'credible', 'creed', 'credential'], description: '核心意象：將心交付於對方，給予信任。' },
  { root: 'pend', stemForms: ['pend', 'pens'], meaning: '懸掛、衡量、支付 (hang, weigh, pay)', etymon: '拉丁語 pendere / pēnsus', category: '力學與價值', cognates: ['depend', 'suspend', 'compensate', 'pension', 'expensive', 'impending'], description: '核心意象：將重物吊掛在天平上秤量價值。' },
  { root: 'form', stemForms: ['form'], meaning: '形狀、塑造、外觀 (shape, mold, structure)', etymon: '拉丁語 forma', category: '形態與模具', cognates: ['conform', 'transform', 'reform', 'format', 'uniform', 'formula'], description: '核心意象：用模具將原料塑造成特定形狀。' },
  { root: 'press', stemForms: ['press'], meaning: '按壓、擠壓、壓迫 (push, squeeze, press)', etymon: '拉丁語 premere / pressus', category: '力量與重壓', cognates: ['compress', 'express', 'impress', 'oppress', 'pressure', 'depress'], description: '核心意象：施加重量向下擠壓，或把心思表達出來。' },
  { root: 'rupt', stemForms: ['rupt'], meaning: '斷裂、爆發、衝破 (burst, break, tear)', etymon: '拉丁語 rumpere / ruptus', category: '破壞與突變', cognates: ['erupt', 'interrupt', 'bankrupt', 'corrupt', 'disrupt', 'rupture'], description: '核心意象：積聚壓力過大而突然崩裂爆發。' },
  { root: 'tort', stemForms: ['tort'], meaning: '扭曲、絞纏、擰 (twist, wrench)', etymon: '拉丁語 torquēre / tortus', category: '幾何與力學', cognates: ['distort', 'torture', 'retort', 'extort', 'contort', 'torsion'], description: '核心意象：將直線或真相用力扭轉變形。' },
  { root: 'ven', stemForms: ['ven', 'vent'], meaning: '到來、來到、發生 (come, arrive)', etymon: '拉丁語 venīre / ventus', category: '位移與事件', cognates: ['convene', 'prevent', 'invent', 'event', 'revenue', 'adventure'], description: '核心意象：腳步走進某個場域或某事件降臨。' },
  { root: 'log', stemForms: ['log', 'logy', 'locut', 'loqu'], meaning: '說話、論述、學問、邏輯 (word, speech, study, reason)', etymon: '希臘語 logos / 拉丁語 loquī', category: '思維與表達', cognates: ['dialogue', 'eloquent', 'apology', 'logic', 'biology', 'monologue'], description: '核心意象：用嚴謹語言論證推理。' },
  { root: 'bio', stemForms: ['bio'], meaning: '生命、生物 (life, living)', etymon: '希臘語 bios', category: '自然與生命', cognates: ['biology', 'biography', 'symbiosis', 'antibiotic', 'biome'], description: '核心意象：自然界生生不息的有機生命體。' },
  { root: 'phon', stemForms: ['phon', 'phone'], meaning: '聲音、語音 (sound, voice)', etymon: '希臘語 phōnē', category: '聲音與通訊', cognates: ['telephone', 'symphony', 'phonetic', 'microphone', 'megaphone'], description: '核心意象：由震動傳導至耳膜的聲響。' },
  { root: 'graph', stemForms: ['graph', 'gram'], meaning: '書寫、圖畫、記錄 (write, draw, record)', etymon: '希臘語 graphein', category: '符號與記錄', cognates: ['telegraph', 'photograph', 'diagram', 'graphic', 'grammar', 'autograph'], description: '核心意象：用筆墨在畫布或紙張上留下圖表記錄。' },
  { root: 'path', stemForms: ['path', 'pass'], meaning: '感受、痛苦、同理、疾病 (feeling, suffering, disease)', etymon: '希臘語 pathos', category: '情感與體驗', cognates: ['sympathy', 'empathy', 'antipathy', 'pathology', 'apathy', 'compassion'], description: '核心意象：心靈與他人同頻共振的悲喜感受。' },
  { root: 'chron', stemForms: ['chron'], meaning: '時間、歲月 (time)', etymon: '希臘語 chronos', category: '時間與歷史', cognates: ['chronic', 'chronology', 'synchronize', 'chronicle', 'anachronism'], description: '核心意象：鐘擺滴答流逝的客觀時間軸。' },
  { root: 'loc', stemForms: ['loc', 'locat'], meaning: '地方、位置 (place, spot)', etymon: '拉丁語 locus / locāre', category: '空間與定位', cognates: ['allocate', 'location', 'locally', 'dislocate', 'relocate'], description: '核心意象：空間地圖上精確劃定的特定坐標點。' },
  { root: 'scend', stemForms: ['scend', 'scent'], meaning: '攀登、攀爬 (climb, mount)', etymon: '拉丁語 scandere', category: '位移', cognates: ['ascend', 'descend', 'transcend', 'condescend', 'scale'], description: '核心意象：一步一步沿階梯向上攀登。' }
];

/**
 * Intelligent Fuzzy Morphological Deconstructor
 * Searches prefix, root, and suffix libraries for the optimal morphological breakdown of any word.
 */
export function fuzzyDeconstructWord(rawWord: string): WordAnalysis {
  const word = rawWord.trim().toLowerCase();

  // 1. Direct hit in curated preset words
  if (PRESET_WORDS[word]) {
    return {
      ...PRESET_WORDS[word],
      source: 'preset',
      isAssembled: false
    };
  }

  // 2. Direct hit in curriculum stages
  for (const stage of CURRICULUM_STAGES) {
    const item = stage.words.find((w) => w.word.toLowerCase() === word);
    if (item) {
      const parts = item.focus.split('+').map((p) => p.trim());
      const morphemes: MorphemeComponent[] = parts.map((p, idx) => {
        // 詞綴標記（前綴 "pre-"、後綴 "-ate"）固定緊跟在字母後面，中間不含空白或註解，
        // 因此直接以原始 token（去除語義註解前）判斷連字號位置最可靠；
        // 中文語義關鍵字比對（如「前」「向」）在語義本身不含該字時會漏判（如「預先」不含「前」字）。
        const tokenMatch = p.match(/^([a-zA-Z-]+)/);
        const rawToken = tokenMatch ? tokenMatch[1] : p;
        const isPrefix = idx === 0 && rawToken.endsWith('-');
        const isSuffix = idx === parts.length - 1 && rawToken.startsWith('-');
        const type = isPrefix ? 'prefix' : isSuffix ? 'suffix' : 'root';
        const label = type === 'prefix' ? '🚩 前綴' : type === 'suffix' ? '🏷️ 後綴' : '💎 字根';
        const token = rawToken.replace(/^-|-$/g, '');
        const meaningMatch = p.match(/\(([^)]+)\)/);
        const meaning = meaningMatch ? meaningMatch[1] : p;

        return {
          type,
          label,
          morpheme: token,
          originalForm: token,
          meaning,
          category: type === 'prefix' ? '方位/態勢' : type === 'root' ? '核心概念' : '語法後綴',
          grammaticalRole: type === 'prefix' ? '前綴修飾' : type === 'root' ? '語義基石' : '詞性標示'
        };
      });

      return {
        word,
        ipa: `/${word}/`,
        partOfSpeech: morphemes.some((m) => m.type === 'suffix' && m.morpheme.includes('ive'))
          ? 'adjective (形容詞)'
          : morphemes.some((m) => m.type === 'suffix' && (m.morpheme.includes('tion') || m.morpheme.includes('ment')))
          ? 'noun (名詞)'
          : 'verb / noun (動詞/名詞)',
        chineseMeaning: item.meaning,
        morphemes,
        phonetic: {
          assimilationPath: `${item.focus} ➔ ${word}`,
          phoneticAnalysis: `本詞屬於 ${stage.name}。${item.keyRule || '標準詞素拼接與形態衍生。'}`,
          ruleKey: item.keyRule || stage.name
        },
        semantic: {
          prefixMeaning: morphemes.find((m) => m.type === 'prefix')?.meaning || '空間/態勢引導',
          rootCoreAction: morphemes.find((m) => m.type === 'root')?.meaning || item.meaning,
          suffixGrammar: morphemes.find((m) => m.type === 'suffix')?.meaning || '詞性語法標籤',
          modernMeaning: item.meaning,
          formulaDisplay: `{ ${item.focus} } = ${item.meaning} (${word})`,
          literalLogic: `由「${item.focus}」合成現代語義「${item.meaning}」。`
        },
        familyTree: [
          { word: word, formula: item.focus, meaning: item.meaning }
        ],
        memory: {
          cognatesDaily: `相關詞素：${parts.join(', ')}`,
          oneSentenceMnemonic: `【${capitalizeWord(word)}】${item.focus} ➔ 直譯即為「${item.meaning}」！`,
          etymologicalOrigin: `拉丁語 / 希臘語同源衍生（${stage.subtitle}）`
        },
        source: 'preset',
        isAssembled: false
      };
    }
  }

  // 3. FUZZY MORPHOLOGICAL DECONSTRUCTION ENGINE
  // For short words (< 4 chars) or non-affixed simplex words without verified roots, return an honest "Not Found / Simplex Word" state
  if (word.length < 4) {
    return {
      word,
      ipa: `/${word}/`,
      partOfSpeech: '單純詞 / 固有基本詞 (Simplex Word)',
      chineseMeaning: '查無古典構詞拆解（本詞為短單純詞或未收錄條目）',
      isNotFound: true,
      isSimplex: true,
      notFoundReason: '本詞為短單純詞，非由拉丁／希臘前綴與字根組合而成。',
      morphemes: [
        {
          type: 'root',
          label: '💎 單純詞彙',
          morpheme: word,
          originalForm: word,
          meaning: '固有單純詞（無古典前後綴）',
          category: '單純詞彙',
          grammaticalRole: '獨立語素'
        }
      ],
      phonetic: {
        assimilationPath: `單純詞: ${word}`,
        phoneticAnalysis: `本詞並非由拉丁或希臘前綴與字根組合而成的派生複合詞。英語中許多基礎詞彙（如 water, good, poor, dog 等）屬於固有日耳曼語源或古法語單純借詞。為維持學術嚴謹度，系統不提供強行硬拆之偽詞源。`,
        ruleKey: '單純詞 (Simplex Word)'
      },
      semantic: {
        prefixMeaning: '無前綴',
        rootCoreAction: '單純詞核心語素',
        suffixGrammar: '無衍生後綴',
        modernMeaning: '無古典派生構詞直譯',
        formulaDisplay: `【${word}】為單純詞或未收錄條目`,
        literalLogic: `單純詞無法透過「前綴 + 字根 + 後綴」拆解。建議查詢如 allocate, predict, sympathy, deconstruct 等經典拉丁/希臘派生詞。`
      },
      familyTree: [],
      memory: {
        cognatesDaily: '推薦查詢：allocate, predict, sympathy, contain, transfer, deconstruct',
        oneSentenceMnemonic: `【提示】此詞為單純詞或未收錄於離線庫，建議輸入帶有前綴/字根的學術核心單字！`,
        etymologicalOrigin: '固有日耳曼語源或單純借詞'
      },
      source: 'heuristic',
      isAssembled: false
    };
  }

  let remaining = word;
  let detectedPrefix: PrefixMeta | null = null;
  let detectedSuffix: SuffixMeta | null = null;
  let detectedRoot: RootMeta | null = null;
  let matchedStem = '';

  // Step A: Longest Prefix Match (requires remaining length >= 3 after stripping)
  const sortedPrefixKeys = Object.keys(EXTENDED_PREFIXES).sort((a, b) => b.length - a.length);
  for (const pKey of sortedPrefixKeys) {
    if (remaining.startsWith(pKey) && remaining.length >= pKey.length + 3) {
      detectedPrefix = EXTENDED_PREFIXES[pKey];
      remaining = remaining.slice(pKey.length);
      break;
    }
  }

  // Step B: Longest Suffix Match (requires remaining length >= 3 after stripping)
  const sortedSuffixKeys = Object.keys(EXTENDED_SUFFIXES).sort((a, b) => b.length - a.length);
  for (const sKey of sortedSuffixKeys) {
    if (remaining.endsWith(sKey) && remaining.length >= sKey.length + 3) {
      detectedSuffix = EXTENDED_SUFFIXES[sKey];
      remaining = remaining.slice(0, -sKey.length);
      break;
    }
  }

  // Step C: Fuzzy Root Lookup in Curated Database
  // Search for stemForms matching remaining core (stem must be at least 3 letters)
  for (const rootItem of CURATED_ROOT_DICTIONARY) {
    for (const form of rootItem.stemForms) {
      if (form.length >= 3 && (remaining === form || remaining.startsWith(form) || remaining.endsWith(form))) {
        detectedRoot = rootItem;
        matchedStem = form;
        break;
      }
    }
    if (detectedRoot) break;
  }

  // If still not matched, check whole original word for known root of length >= 4
  if (!detectedRoot) {
    for (const rootItem of CURATED_ROOT_DICTIONARY) {
      for (const form of rootItem.stemForms) {
        if (form.length >= 4 && word.includes(form)) {
          detectedRoot = rootItem;
          matchedStem = form;
          break;
        }
      }
      if (detectedRoot) break;
    }
  }

  // If no authentic root is detected, or only an ambiguous prefix was matched without a real root:
  // Return an honest "Not Found / Simplex Word" response to prevent misleading pseudo-etymology
  if (!detectedRoot) {
    return {
      word,
      ipa: `/${word}/`,
      partOfSpeech: '單純詞 / 未收錄構詞 (Simplex Word)',
      chineseMeaning: '查無古典構詞拆解（本詞可能為固有單純詞或未收錄條目）',
      isNotFound: true,
      isSimplex: true,
      notFoundReason: '本單字在離線字根庫中未偵測到明確的拉丁／希臘字根。為避免強行硬拆造成誤導，已標記為查無構詞。',
      morphemes: [
        {
          type: 'root',
          label: '💎 單純詞彙',
          morpheme: word,
          originalForm: word,
          meaning: '固有單純詞或未收錄條目（無古典前後綴）',
          category: '單純詞彙',
          grammaticalRole: '獨立語素'
        }
      ],
      phonetic: {
        assimilationPath: `單純詞: ${word}`,
        phoneticAnalysis: `本詞非典型拉丁／希臘派生詞（無明確前綴+字根結構），可能為日耳曼本族單純詞、古法語借詞或未收錄於離線詞庫。為求學術嚴謹，本系統不提供臆測之偽詞源。`,
        ruleKey: '單純詞 / 固有詞彙'
      },
      semantic: {
        prefixMeaning: '無前綴',
        rootCoreAction: '單純詞核心語素',
        suffixGrammar: '無衍生後綴',
        modernMeaning: '無派生構詞直譯',
        formulaDisplay: `【${word}】為單純詞或未收錄條目`,
        literalLogic: `單純詞無法透過「前綴 + 字根 + 後綴」拆解。建議查詢如 allocate, predict, sympathy, deconstruct 等經典拉丁/希臘派生詞。`
      },
      familyTree: [],
      memory: {
        cognatesDaily: '推薦查詢：allocate, predict, sympathy, contain, transfer, deconstruct',
        oneSentenceMnemonic: `【提示】此詞屬於基本單純詞或未收錄於離線庫，建議輸入帶有前綴/字根的學術核心單字！`,
        etymologicalOrigin: '固有日耳曼語源或單純借詞'
      },
      source: 'heuristic',
      isAssembled: false
    };
  }

  // Build Morpheme Structure for Verified Matches
  const morphemes: MorphemeComponent[] = [];

  if (detectedPrefix) {
    morphemes.push({
      type: 'prefix',
      label: '🚩 前綴',
      morpheme: detectedPrefix.prefix,
      originalForm: detectedPrefix.original,
      meaning: detectedPrefix.meaning,
      category: detectedPrefix.category,
      grammaticalRole: detectedPrefix.role,
      variantNote: detectedPrefix.assimilationOrigin ? `源自 ${detectedPrefix.assimilationOrigin} 在該輔音前的語音同化` : undefined
    });
  }

  const rootMorphemeToken = matchedStem || detectedRoot.root;
  const rootMeaning = detectedRoot.meaning;

  morphemes.push({
    type: 'root',
    label: '💎 字根',
    morpheme: rootMorphemeToken,
    originalForm: detectedRoot.etymon || rootMorphemeToken,
    meaning: rootMeaning,
    category: detectedRoot.category || '核心語素',
    grammaticalRole: '語義核心載體'
  });

  if (detectedSuffix) {
    morphemes.push({
      type: 'suffix',
      label: '🏷️ 後綴',
      morpheme: detectedSuffix.suffix,
      originalForm: detectedSuffix.suffix,
      meaning: detectedSuffix.meaning,
      category: detectedSuffix.category,
      grammaticalRole: detectedSuffix.role
    });
  }

  // Synthesize Deductions
  const prefixText = detectedPrefix ? detectedPrefix.meaning.split('(')[0].trim() : '';
  const rootText = detectedRoot.meaning.split('(')[0].trim();
  const suffixPos = detectedSuffix ? detectedSuffix.pos : 'verb / noun (動詞/名詞)';
  
  const estimatedMeaning = detectedPrefix
    ? `【${prefixText}】+【${rootText}】➔ 引申為具備 ${rootText} 屬性或方向的動作/狀態`
    : `與【${rootText}】相關之概念`;

  const formulaParts = morphemes.map((m) => m.morpheme).join(' + ');
  const formulaSemantic = morphemes.map((m) => `{ ${m.meaning.split('(')[0].trim()} (${m.morpheme}) }`).join(' + ');

  // Family Words from Cognates
  const familyTree: FamilyWord[] = detectedRoot.cognates
    ? detectedRoot.cognates.slice(0, 4).map((c) => ({
        word: c,
        formula: `${detectedRoot?.root} + 詞綴`,
        meaning: `同源詞（含字根 ${detectedRoot?.root}）`
      }))
    : [{ word, formula: formulaParts, meaning: estimatedMeaning }];

  const phoneticPath = detectedPrefix?.assimilationOrigin
    ? `${detectedPrefix.assimilationOrigin} ➔ (同化為 ${detectedPrefix.prefix}) + ${rootMorphemeToken} ${detectedSuffix ? '+ ' + detectedSuffix.suffix : ''} ➔ ${word}`
    : `${formulaParts} ➔ ${word}`;

  return {
    word,
    ipa: `/${word}/`,
    partOfSpeech: suffixPos,
    chineseMeaning: estimatedMeaning,
    morphemes,
    phonetic: {
      assimilationPath: phoneticPath,
      phoneticAnalysis: detectedPrefix?.assimilationOrigin
        ? `偵測到字首語音同化現象：原型前綴「${detectedPrefix.assimilationOrigin}」與後續輔音相遇，自動同化為「${detectedPrefix.prefix}」，使發音更省力順暢。`
        : `本單字由字根庫演算法拆解為 ${morphemes.length} 個語素單元（${formulaParts}）。`,
      ruleKey: detectedPrefix?.assimilationOrigin ? `${detectedPrefix.assimilationOrigin} 同化規律` : `${detectedRoot.root} 構詞字根族`
    },
    semantic: {
      prefixMeaning: detectedPrefix?.meaning || '無前綴 / 原始字根',
      rootCoreAction: rootMeaning,
      suffixGrammar: detectedSuffix?.meaning || '詞性標示',
      modernMeaning: estimatedMeaning,
      formulaDisplay: `${formulaSemantic} = ${word}`,
      literalLogic: `直譯邏輯：${detectedPrefix ? `在「${prefixText}」的態勢下，` : ''}進行「${rootText}」的核心動作${detectedSuffix ? `，並轉化為 ${detectedSuffix.pos.split('(')[1]?.replace(')', '') || '相應詞性'}` : ''}。`
    },
    familyTree,
    memory: {
      cognatesDaily: `同根同源族群：${detectedRoot.cognates.join(', ')}`,
      oneSentenceMnemonic: `記憶口訣：【${formulaParts}】➔ 把「${prefixText || '核心'}」與「${rootText}」組合起來就是 ${word}！`,
      etymologicalOrigin: detectedRoot.etymon,
      contrastiveTips: detectedRoot.description
    },
    source: 'assembled',
    isAssembled: true,
    assembledConfidence: detectedPrefix ? 95 : 85
  };
}

export const generateFallbackAnalysis = fuzzyDeconstructWord;
