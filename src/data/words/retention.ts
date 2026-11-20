import { WordAnalysis } from '../../types';

export const retention: WordAnalysis = {
  word: 'retention',
  ipa: '/rɪˈten.ʃən/',
  partOfSpeech: 'noun (不可數名詞，特定領域可數)',
  chineseMeaning: '保留、保持；記憶力；（體內水分等的）滯留',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 前綴',
      morpheme: 're-',
      originalForm: 're- (拉丁語)',
      variantNote: 're- 在這裡沒有音變，直接加在字根前面，強調「一直握著、不放開」的持續感。',
      meaning: '回、再次 (back, again)',
      category: '空間/回返',
      grammaticalRole: '名詞前綴'
    },
    {
      type: 'root',
      label: '💎 字根',
      morpheme: 'tent',
      originalForm: 'tenēre / tentus (拉丁語)',
      variantNote: '拉丁文動詞 tenēre（握住）有兩種常見長相：一般動詞形態用 -tain（如 retain, contain），但變成名詞或形容詞時，會改用過去分詞的形態 -tent（如 retention, content）。',
      meaning: '握住、持有 (to hold)',
      category: '核心動作',
      grammaticalRole: '動作中心'
    },
    {
      type: 'suffix',
      label: '🏷️ 字尾',
      morpheme: '-ion',
      originalForm: '-io, -ionis (拉丁語)',
      variantNote: '這個字尾加在動詞字根後面，會把動作變成名詞，表示「...的動作或狀態」。',
      meaning: '動作、狀態、結果 (act, state, result of)',
      category: '抽象名詞化',
      grammaticalRole: '構成名詞'
    }
  ],
  phonetic: {
    assimilationPath: 're- (回) + tenēre (握) ➔ 過去分詞 tentus ➔ retention',
    phoneticAnalysis: 'retain 和 retention 是同一個拉丁動詞 tenēre 的兩種面貌：動詞用 -tain，名詞用 -tent，這是英文從拉丁文的「現在詞幹」和「過去分詞詞幹」分別借字造成的結果。',
    dualStemInfo: {
      presentStem: 'tain- (如 retain, contain, maintain)',
      supineStem: 'tent- (如 retention, content, intent)',
      meaning: '握住、持有 (hold, keep)'
    },
    ruleKey: '拉丁雙詞幹 tain/tent'
  },
  semantic: {
    prefixMeaning: '回、再次 (re-)',
    rootCoreAction: '握住 (tent)',
    suffixGrammar: '抽象名詞 (-ion)',
    modernMeaning: '持續握住、留住某樣東西不讓它流失的狀態，可以是資訊、員工，也可以是水分',
    formulaDisplay: '{ 回 (re-) } + { 握住 (tent) } + { 狀態 (-ion) } = 保留、記憶力 (retention)',
    literalLogic: '「一直握著不放」的狀態，用在腦袋裡就是記憶力，用在公司就是留住員工的能力。'
  },
  familyTree: [
    { word: 'retain', formula: 're- + tain', meaning: '保留、保持、記住', level: 'TOEIC', tags: ['TOEIC', 'TOEFL'] },
    { word: 'contain', formula: 'con- (完全) + tain', meaning: '包含、容納、抑制', level: 'Core', tags: ['TOEIC'] },
    { word: 'content', formula: 'con- (完全) + tent', meaning: '內容；滿足的（形容詞）', level: 'Core', tags: ['TOEIC'] },
    { word: 'tenant', formula: 'ten + -ant', meaning: '房客、承租人（握著租約的人）', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'tenacious', formula: 'ten + -acious', meaning: '堅韌不拔的、緊抓不放的', level: 'GRE', tags: ['GRE', 'TOEFL'] }
  ],
  memory: {
    cognatesDaily: 'water retention (水腫、水分滯留), employee retention (留住員工), memory retention (記憶保持率)',
    oneSentenceMnemonic: 're (回) + tent (握住) + ion (狀態) ➔ 「一直握著不放的狀態」就是 retention (保留、記憶力)！',
    etymologicalOrigin: '來自拉丁文 retinēre（re- + tenēre「握住」）的過去分詞 retentus。',
    visualImagery: '想像手裡緊緊握著一把沙子，不讓它從指縫中流失——這種「留住不放」的狀態就是 retention。',
    commonCollocations: ['employee retention (留住員工/員工留任率)', 'water retention (水分滯留)', 'improve memory retention (提升記憶力)'],
    contrastiveTips: 'retention 強調「持續留住、不讓其流失」的狀態；memory 單純指「記憶」這個能力或內容本身；preservation 則偏向「刻意保存、避免損壞或消失」，常用於文物、環境等語境。'
  },
  source: 'preset'
};
