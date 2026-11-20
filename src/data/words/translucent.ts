import { WordAnalysis } from '../../types';

export const translucent: WordAnalysis = {
    word: 'translucent',
    ipa: '/trænˈsluː.sənt/',
    partOfSpeech: 'adjective (形容詞)',
    chineseMeaning: '半透明的、透光但無法看清細節的',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 空間前綴',
        morpheme: 'trans-',
        originalForm: 'trans-',
        meaning: '穿過、跨越 (through, across)',
        category: '貫通空間',
        grammaticalRole: '方向前綴'
      },
      {
        type: 'root',
        label: '💎 光學字根',
        morpheme: 'luc',
        originalForm: 'lūcēre / lux',
        meaning: '光、照耀、明亮 (light, shine)',
        category: '光學本質',
        grammaticalRole: '核心概念'
      },
      {
        type: 'suffix',
        label: '🏷️ 字尾',
        morpheme: '-ent',
        originalForm: '-entem',
        variantNote: '這個字尾來自古拉丁文動詞「正在做」的形式，會把字變成形容詞',
        meaning: '...性質的',
        category: '形容詞後綴',
        grammaticalRole: '構成形容詞'
      }
    ],
    phonetic: {
      assimilationPath: 'trans- + luc + -ent ➔ translucent',
      phoneticAnalysis: '很久很久以前的語言裡有一個字 *leuk-，意思是「光」。這個字傳到古拉丁文，變成了 lux 或 luc-。',
      ruleKey: '印歐語光學字根 *leuk-'
    },
    semantic: {
      prefixMeaning: '穿透 (trans-)',
      rootCoreAction: '光 (luc)',
      suffixGrammar: '性質 (-ent)',
      modernMeaning: '光線能夠部分穿透但無法看清細節的',
      formulaDisplay: '{ 穿過 (trans-) } + { 光 (luc) } + { 的 (-ent) } = 半透明的 (translucent)',
      literalLogic: '光可以穿過去，但沒辦法看清楚裡面的細節。'
    },
    familyTree: [
      { word: 'lucid', formula: 'luc + -id', meaning: '清晰的、清醒的' },
      { word: 'elucidate', formula: 'e- + luc + -id + -ate', meaning: '闡明、解釋' }
    ],
    memory: {
      cognatesDaily: 'lucid (清醒的), light (光)',
      oneSentenceMnemonic: 'trans (穿過) + luc (光) ➔ 光能穿透 = 半透明！',
      etymologicalOrigin: '古拉丁文 translūcēre'
    },
    source: 'preset'
  };
