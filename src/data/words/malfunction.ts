import { WordAnalysis } from '../../types';

export const malfunction: WordAnalysis = {
    word: 'malfunction',
    ipa: '/mælˈfʌŋk.ʃən/',
    partOfSpeech: 'noun / verb (名詞/動詞)',
    chineseMeaning: '故障、失靈（名詞）；發生故障、無法正常運作（動詞）',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 負面前綴',
        morpheme: 'mal-',
        originalForm: 'malus (拉丁語)',
        variantNote: 'mal- 是零音變前綴，直接加在字根前面，沒有音變，隨處可見於 malfunction, malnutrition, malpractice 這類字',
        meaning: '不好、惡劣 (bad, evil, ill)',
        category: '性質判斷',
        grammaticalRole: '負面前綴'
      },
      {
        type: 'root',
        label: '💎 核心字根',
        morpheme: 'funct',
        originalForm: 'fungi / functus (拉丁語)',
        variantNote: '來自拉丁文的異態動詞 fungor, fungi, functus sum，意思是「執行、完成」；function、functional 這些字都是同一個字根',
        meaning: '執行、運作 (to perform, execute)',
        category: '核心動作',
        grammaticalRole: '動作核心'
      },
      {
        type: 'suffix',
        label: '🏷️ 名詞字尾',
        morpheme: '-ion',
        originalForm: '-io / -ionis (拉丁語)',
        variantNote: '這個字尾把動詞變成名詞，表示「...的動作或結果」',
        meaning: '...的行為、狀態',
        category: '抽象名詞',
        grammaticalRole: '名詞化後綴'
      }
    ],
    phonetic: {
      assimilationPath: 'malus (壞) ➔ mal- + fungi/functus (執行) ➔ funct + -ion (名詞化) ➔ malfunction',
      phoneticAnalysis: 'mal- 是零音變前綴，直接貼在字根前面唸就好，不會像 ad- 那樣同化。重音落在 -func- 這個音節：/mælˈfʌŋk.ʃən/。',
      ruleKey: 'mal- 零音變前綴直接複合'
    },
    semantic: {
      prefixMeaning: '不好、惡劣地 (mal-)',
      rootCoreAction: '執行、運作 (funct)',
      suffixGrammar: '名詞化 (-ion)',
      modernMeaning: '機器、器官或系統沒辦法正常執行原本該做的工作',
      formulaDisplay: '{ 不好地 (mal-) } + { 運作 (funct) } + { 的狀態 (-ion) } = 故障、失靈 (malfunction)',
      literalLogic: '字面上就是「運作得不好」，用在機器上是故障，用在身體器官上就是功能失調。'
    },
    familyTree: [
      { word: 'function', formula: 'funct + -ion', meaning: '功能、作用', level: 'Core', tags: ['TOEIC'] },
      { word: 'functional', formula: 'funct + -ion + -al', meaning: '功能性的、正常運作的', level: 'TOEIC', tags: ['TOEIC'] },
      { word: 'dysfunction', formula: 'dys- (異常) + funct + -ion', meaning: '功能障礙', level: 'TOEFL', tags: ['TOEFL'] },
      { word: 'malicious', formula: 'mal + -icious', meaning: '惡意的', level: 'GRE', tags: ['GRE'] },
      { word: 'malice', formula: 'mal + -ice', meaning: '惡意', level: 'GRE', tags: ['GRE'] }
    ],
    memory: {
      cognatesDaily: 'malfunctioning equipment (故障的設備), system malfunction (系統故障)',
      oneSentenceMnemonic: 'mal (不好) + function (運作) ➔ 「運作得不好」就是 malfunction (故障)！',
      etymologicalOrigin: '20世紀初從 mal- 和 function 兩個現成的字直接拼在一起造出來的新字，最早用在機械和電子設備上。',
      visualImagery: '想像一台印表機卡紙、燈號狂閃，怎麼修都修不好，這就是最典型的 malfunction。',
      commonCollocations: [
        'a malfunction occurs (發生故障)',
        'a malfunctioning device (故障的裝置)',
        'mechanical malfunction (機械故障)'
      ],
      contrastiveTips: 'malfunction 通常指機器、系統「壞掉、不能動」；dysfunction 比較常用在人的關係、心理或身體器官「運作不正常」，不一定完全停擺。'
    },
    source: 'preset'
  };
