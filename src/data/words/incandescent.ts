import { WordAnalysis } from '../../types';

export const incandescent: WordAnalysis = {
    word: 'incandescent',
    ipa: '/ˌɪn.kænˈdes.ənt/',
    partOfSpeech: 'adjective (形容詞)',
    chineseMeaning: '熾熱發光的、白熾的；激動熱烈的',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 前綴',
        morpheme: 'in-',
        originalForm: 'in-',
        meaning: '在...之中、極度 (in, intensive)',
        category: '空間/強調',
        grammaticalRole: '前綴修飾'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'cand',
        originalForm: 'candēre',
        meaning: '發白光、發熱 (to shine white, glow)',
        category: '光學本質',
        grammaticalRole: '核心概念'
      },
      {
        type: 'suffix',
        label: '🏷️ 漸進後綴',
        morpheme: '-esc-',
        originalForm: '-escere (Inchoative)',
        variantNote: '這個字尾來自古拉丁文，加在字根後面表示動作「慢慢開始、漸漸變成這樣」',
        meaning: '逐漸變得 (becoming)',
        category: '漸進體態',
        grammaticalRole: '體態修飾'
      },
      {
        type: 'suffix',
        label: '🏷️ 分詞後綴',
        morpheme: '-ent',
        originalForm: '-entem',
        variantNote: '這個字尾來自古拉丁文動詞「正在做」的形式，會把字變成形容詞',
        meaning: '...狀態的',
        category: '形容詞後綴',
        grammaticalRole: '構成形容詞'
      }
    ],
    phonetic: {
      assimilationPath: 'in- + cand + -esc + -ent ➔ incandescent',
      phoneticAnalysis: '表示「漸漸變成」的字尾 -escere，和 candēre（發白光）結合在一起。',
      ruleKey: 'Inchoative 漸進後綴 -esce'
    },
    semantic: {
      prefixMeaning: '極度 (in-)',
      rootCoreAction: '發白光 (cand)',
      suffixGrammar: '逐漸發光 (-escent)',
      modernMeaning: '因極高溫度而發出耀眼白光的',
      formulaDisplay: '{ 強調 (in-) } + { 白光 (cand) } + { 漸進發熱 (-escent) } = 白熾發光的',
      literalLogic: '裡面燒得發出純白色光芒的意思。'
    },
    familyTree: [
      { word: 'candle', formula: 'cand + -le', meaning: '蠟燭' },
      { word: 'candidate', formula: 'cand + -id + -ate', meaning: '候選人 (白袍者)' }
    ],
    memory: {
      cognatesDaily: 'candle (蠟燭), candid (坦白的)',
      oneSentenceMnemonic: 'in + candle ➔ 像蠟燭一樣熾熱發光！',
      etymologicalOrigin: '來自古拉丁文 incandēscere。'
    },
    source: 'preset'
  };
