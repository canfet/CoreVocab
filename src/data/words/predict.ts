import { WordAnalysis } from '../../types';

export const predict: WordAnalysis = {
    word: 'predict',
    ipa: '/prɪˈdɪkt/',
    partOfSpeech: 'verb (及物動詞)',
    chineseMeaning: '預測、預言、預料',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 前綴',
        morpheme: 'pre-',
        originalForm: 'prae-',
        meaning: '在...之前、預先 (before)',
        category: '時間超前',
        grammaticalRole: '前綴'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'dict',
        originalForm: 'dictus',
        meaning: '說話、宣稱 (to say, speak)',
        category: '言語動作',
        grammaticalRole: '概念中心'
      }
    ],
    phonetic: {
      assimilationPath: 'pre- + dict ➔ predict',
      phoneticAnalysis: '來自古拉丁文 praedīcere，這個字換了一種寫法，變成 predict-。',
      ruleKey: 'pre- + dict'
    },
    semantic: {
      prefixMeaning: '事前 (pre-)',
      rootCoreAction: '說出 (dict)',
      suffixGrammar: '動詞幹',
      modernMeaning: '在事情尚未發生之前就提前說出其可能結果',
      formulaDisplay: '{ 預先 (pre-) } + { 說出 (dict) } = 預測、預言 (predict)',
      literalLogic: '事情發生之前，就先說出來的意思。'
    },
    familyTree: [
      { word: 'prediction', formula: 'predict + -ion', meaning: '預測、預言 (名詞)' },
      { word: 'predictable', formula: 'predict + -able', meaning: '可預測的、不出所料的' }
    ],
    memory: {
      cognatesDaily: 'predict the future (預測未來), unpredictable weather (天氣捉摸不定)',
      oneSentenceMnemonic: 'pre (預先) + dict (說) ➔ 「提早說出來」就是 predict (預測)！',
      etymologicalOrigin: '來自古拉丁文 praedīcere。'
    },
    source: 'preset'
  };
