export interface MorphemeComponent {
  type: 'prefix' | 'root' | 'suffix' | 'interfix';
  label: string; // e.g. "🚩 前綴", "💎 字根", "🏷️ 字尾", "🔗 連接音"
  morpheme: string; // e.g. "al-"
  originalForm: string; // e.g. "ad-" or "locus / locare"
  variantNote?: string; // e.g. "ad- 在 l 前同化為 al-"
  meaning: string; // e.g. "朝向、加強 (to, toward)"
  category?: string; // e.g. "空間/方向", "核心概念", "名詞/動詞化"
  grammaticalRole?: string; // e.g. "及物動詞後綴"
}

export interface PhoneticMechanism {
  assimilationPath: string; // e.g. "ad- + loc ➔ l 開頭同化為 al- ➔ allocate"
  phoneticAnalysis: string; // Detailed breakdown of vowel weakening, elision, doubling, Grimm's law, etc.
  ruleKey?: string; // e.g. "ad- 同化規則", "元音弱化 (Apophony)"
  dualStemInfo?: {
    presentStem?: string;
    supineStem?: string;
    meaning?: string;
  };
  grimmsLaw?: {
    protoIndoEuropean: string;
    latinGreek: string;
    germanicEnglish: string;
    rule: string;
  };
}

export interface SemanticFormula {
  prefixMeaning: string;
  rootCoreAction: string;
  suffixGrammar: string;
  modernMeaning: string;
  formulaDisplay: string; // e.g. "{ 往/指向 (ad- ➔ al-) } + { 場所/位置 (loc) } + { 動詞化 (-ate) } = 分配、撥給"
  literalLogic: string; // e.g. "把特定資源『指向特定的場所或位置』，引申為在預算或任務中『分配給特定對象』"
}

export interface FamilyWord {
  word: string;
  ipa?: string;
  formula: string; // e.g. "dis- + loc + -ate"
  meaning: string; // e.g. "使脫臼、擾亂"
  partOfSpeech?: string;
  level?: 'TOEIC' | 'TOEFL' | 'IELTS' | 'GRE' | 'Core';
  tags?: string[]; // e.g. ['TOEFL', 'GRE']
}

export interface MemoryAnchor {
  cognatesDaily: string; // e.g. "local (當地的), location (位置), locate (定位)"
  oneSentenceMnemonic: string; // e.g. "al (朝向) + loc (位置) + ate (做) ➔ 把資源送到該去的位置就是『分配』！"
  etymologicalOrigin?: string; // e.g. "拉丁語 adlocāre (ad- + locāre)"
  visualImagery?: string; // 心智圖像與情境聯想 (e.g. "想像在白板上把預算資金畫上箭頭，精準派送到各部門的專屬格子中。")
  commonCollocations?: string[]; // 實戰高頻搭配 (e.g. ["allocate funds/resources (撥款/分配資源)", "allocate time (調配時間)"])
  contrastiveTips?: string; // 辨析與概念錨點 (e.g. "不同於 distribute (散發式分送)，allocate 強調『特定目標指定分配』。")
}

export interface WordAnalysis {
  word: string;
  ipa: string;
  partOfSpeech: string;
  chineseMeaning: string;
  morphemes: MorphemeComponent[];
  phonetic: PhoneticMechanism;
  semantic: SemanticFormula;
  familyTree: FamilyWord[];
  memory: MemoryAnchor;
  rawAsciiBlock?: string;
  source?: 'preset' | 'ai' | 'heuristic' | 'assembled';
  isAssembled?: boolean; // 標記為字根庫自動拼裝分析
  assembledConfidence?: number; // 拼裝匹配信心度 (0~100)
  isNotFound?: boolean; // 標記為查無古典構詞或單純詞
  isSimplex?: boolean; // 標記為單純詞 (Simplex Word)
  notFoundReason?: string; // 查無原因說明
}

export interface AssimilationRule {
  prefix: string;
  meaning: string;
  rules: {
    condition: string;
    variant: string;
    examples: string[];
  }[];
}

export interface DualStemRule {
  pair: string;
  present: string;
  supine: string;
  meaning: string;
  examples: string[];
}

// 一字首一 Level：每個 ID 對應資料庫中單一字首家族（見 src/data/curriculum.ts）
export type StudyLevel =
  | 'RE' | 'PRE' | 'UN' | 'DIS' | 'NON'
  | 'PRO' | 'ANTE_FORE' | 'POST' | 'PRIM_PROTO'
  | 'AD' | 'CON' | 'IN' | 'SUB' | 'OB' | 'EX' | 'AB' | 'PER'
  | 'TRANS' | 'INTER' | 'INTRA_EXTRA' | 'CIRCUM_TELE' | 'DE'
  | 'A_AN' | 'ANTI_CONTRA' | 'MIS_MAL'
  | 'SUPER_HYPO' | 'ULTRA_OVER' | 'ARCH_MAIN'
  | 'SYN' | 'AUTO_HETERO' | 'BENE_EU'
  | 'UNI_MONO' | 'BI_TRI' | 'QUADR_MULTI' | 'SEMI_OMNI'
  | 'PARA' | 'OCT_CENT' | 'SE' | 'DIA';

// 對應 rulesData.ts PREFIX_TAXONOMY 的六大維度，外加 foundation 給零音變字首
export type PrefixDimension = 'foundation' | 'time' | 'space' | 'negation' | 'degree' | 'relation' | 'number';

export interface AudioSettings {
  lang: 'en-US' | 'en-GB';
  rate: number; // 0.7, 0.85, 1.0, 1.2
  voiceURI?: string;
  autoPlayOnSearch?: boolean;
}

export interface CurriculumWordItem {
  word: string;
  focus: string; // e.g. "pre- (前) + dict (說)"
  meaning: string;
  keyRule: string; // e.g. "透明前綴拼接", "ad- 輔音同化", "ten/tain 詞根交替"
}

export interface CurriculumStage {
  id: StudyLevel;
  levelNumber: number;
  name: string;
  englishTitle: string;
  subtitle: string;
  description: string;
  color: string;
  badgeBg: string;
  words: CurriculumWordItem[];
  dimension: PrefixDimension; // 用於 Level 選擇畫面分組
}

export interface DailyStudyProgress {
  currentLevel: StudyLevel;
  dailyGoal: number; // e.g. 3, 5, 8 words per day
  masteredWords: string[]; // words marked as mastered
  todayStudiedWords: string[]; // words viewed/studied today
  lastStudyDate: string; // YYYY-MM-DD
  streakDays: number; // continuous days streak
}
