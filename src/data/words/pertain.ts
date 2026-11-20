import { WordAnalysis } from '../../types';

export const pertain: WordAnalysis = {
    word: 'pertain',
    ipa: '/pərˈteɪn/',
    partOfSpeech: 'verb (不及物動詞)',
    chineseMeaning: '關於、與...有關、適合、切合 (常與 to 連用)',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 前綴',
        morpheme: 'per-',
        originalForm: 'per- (拉丁語)',
        meaning: '貫穿、徹底、自始至終 (through, thoroughly)',
        category: '空間/程度',
        grammaticalRole: '前綴'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'tain',
        originalForm: 'tenēre',
        meaning: '握住、持、關聯 (to hold, reach to)',
        category: '核心動作',
        grammaticalRole: '動作中心'
      }
    ],
    phonetic: {
      assimilationPath: 'per- (貫穿) + tenēre ➔ 拉丁 pertinēre ➔ 法語 perteiner ➔ pertain',
      phoneticAnalysis: 'per-（貫穿）加上 tenēre（握住、延伸到），在古拉丁文裡變成 pertinēre，進到法文後又變身成 -tain（pertain）。形容詞則保留比較輕的長相 tin（pertinent）。',
      ruleKey: 'per- + tenēre'
    },
    semantic: {
      prefixMeaning: '貫穿/徹底 (per-)',
      rootCoreAction: '握住/關聯 (tain)',
      suffixGrammar: '不及物動詞',
      modernMeaning: '某事物自始至終貫穿並牽連到另一個主題，意即「關於、與...相關、屬於」',
      formulaDisplay: '{ 貫穿 (per-) } + { 握住/關聯 (tain) } = 關於、屬於、切題 (pertain)',
      literalLogic: '一路延伸貫穿過去，緊緊牽連在一起，後來變成「跟某件事有關、屬於某個範圍」的意思。'
    },
    familyTree: [
      { word: 'pertinent', formula: 'per- + tin (握住) + -ent', meaning: '相關的、切題的、中肯的' },
      { word: 'pertinence', formula: 'per- + tin + -ence', meaning: '相關性、適切性' },
      { word: 'impertinent', formula: 'in- (否定) + pertinent', meaning: '不切題的、無禮唐突的 (不合時宜)' },
      { word: 'contain', formula: 'con- + tain', meaning: '包含、容納' },
      { word: 'maintain', formula: 'manu + tain', meaning: '保持、維護' }
    ],
    memory: {
      cognatesDaily: 'pertain to (與...相關/屬於), matters pertaining to health (與健康相關的事務)',
      oneSentenceMnemonic: 'per (貫穿) + tain (握持) ➔ 「貫穿牽連在一起」就是 pertain (關於/屬於)！',
      etymologicalOrigin: '古拉丁文 pertinēre (per- 「貫穿」 + tenēre 「握住」)'
    },
    source: 'preset'
  };
