import { WordAnalysis } from '../../types';

export const nonsense: WordAnalysis = {
    word: 'nonsense',
    ipa: '/ˈnɑːn.sens/',
    partOfSpeech: 'noun (不可數名詞)',
    chineseMeaning: '胡說、無意義的話、荒謬的事',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 客觀否定前綴',
        morpheme: 'non-',
        originalForm: 'non (拉丁語)',
        variantNote: 'non- 拼法固定不變，直接加在名詞前面表示「沒有」',
        meaning: '不、沒有 (not)',
        category: '否定極性',
        grammaticalRole: '否定前綴'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'sense',
        originalForm: 'sensus (拉丁語) ← sentire',
        variantNote: '拉丁動詞 sentire「感覺、感知」的名詞形式是 sensus，意思是「感官所感知到的東西」，後來也引申成「道理、意義」',
        meaning: '意義、感知、道理 (meaning, feeling)',
        category: '核心概念',
        grammaticalRole: '概念中心'
      }
    ],
    phonetic: {
      assimilationPath: 'non- (無) + sensus (意義) ➔ nonsense',
      phoneticAnalysis: 'non- 直接接在 sense 前面，不需要變身，重音落在第一個音節 NONsense。',
      ruleKey: 'non- + sense 直接拼接'
    },
    semantic: {
      prefixMeaning: '沒有 (non-)',
      rootCoreAction: '意義、道理 (sense < sensus)',
      suffixGrammar: '不可數名詞',
      modernMeaning: '完全沒有邏輯或道理可言的話語或行為',
      formulaDisplay: '{ 沒有 (non-) } + { 意義 (sense) } = 胡說、無意義 (nonsense)',
      literalLogic: '字面上就是「沒有意義」，用來形容講不通、沒道理的事情。'
    },
    familyTree: [
      { word: 'sense', formula: '字根本體', meaning: '感官、意義、道理' },
      { word: 'sensible', formula: 'sense + -ible', meaning: '明智的、合理的' },
      { word: 'sensitive', formula: 'sense + -itive', meaning: '敏感的' },
      { word: 'nonsensical', formula: 'nonsense + -ical', meaning: '荒謬的、無意義的 (形容詞)' }
    ],
    memory: {
      cognatesDaily: 'talk nonsense (胡說八道), pure nonsense (純粹是胡扯), stop this nonsense (別再鬧了)',
      oneSentenceMnemonic: 'non (沒有) + sense (意義) ➔ 「沒有任何意義」就是 nonsense (胡說)！',
      etymologicalOrigin: '拉丁文 sensus (源自動詞 sentire「感覺」) 加上客觀否定前綴 non-',
      commonCollocations: [
        'talk nonsense (胡言亂語)',
        'a load of nonsense (一堆廢話)',
        'make nonsense of something (使某事變得荒謬、毫無意義)'
      ],
      contrastiveTips: 'nonsense 語氣直接、常帶點不耐煩或輕視，指「講的話沒道理」；absurdity 較正式，強調「荒謬到違反常理」，常用於描述情境或處境而非單純的言語。'
    },
    source: 'preset'
  };
