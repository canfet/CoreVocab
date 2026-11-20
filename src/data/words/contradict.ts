import { WordAnalysis } from '../../types';

export const contradict: WordAnalysis = {
    word: 'contradict',
    ipa: '/ˌkɑːn.trəˈdɪkt/',
    partOfSpeech: 'verb (及物/不及物動詞)',
    chineseMeaning: '反駁、駁斥；與...相矛盾、牴觸',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 前綴',
        morpheme: 'contra-',
        originalForm: 'contra-',
        variantNote: '來自古拉丁文的介詞 contrā，意思是「反對、對抗」。',
        meaning: '相反、對抗 (against, opposite)',
        category: '極性/方向',
        grammaticalRole: '動詞前綴'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'dict',
        originalForm: 'dīcere / dictus',
        variantNote: '古拉丁文動詞 dīcere（說話），這個字後來換了一種寫法，變成 dict-。',
        meaning: '說話、宣稱、宣告 (to speak, to declare)',
        category: '言語核心',
        grammaticalRole: '核心動作'
      }
    ],
    phonetic: {
      assimilationPath: 'contra- + dict ➔ 直接合成 ➔ contradict',
      phoneticAnalysis: '古拉丁文的動詞 dīcere（說話）有兩種長相：一種是 dic-，一種是 dict-。這個字很久很久以前的老祖先意思是「指出、說話」，後來在日耳曼語那邊變成了 teach（教導）和 token（象徵）這些字。',
      dualStemInfo: {
        presentStem: 'dic- (如 condition)',
        supineStem: 'dict- (如 predict, verdict, addict, dictionary)',
        meaning: '說話、指示 (say, speak, proclaim)'
      },
      ruleKey: '拉丁雙詞幹 dict/dic'
    },
    semantic: {
      prefixMeaning: '反向 / 對抗 (contra-)',
      rootCoreAction: '言說 / 宣稱 (dict)',
      suffixGrammar: '動詞幹',
      modernMeaning: '提出相反的言論予以反對，或是事物與理論相互衝突',
      formulaDisplay: '{ 反對/相反 (contra-) } + { 說話/宣稱 (dict) } = 駁斥、矛盾 (contradict)',
      literalLogic: '照字面上的意思就是「對著別人反著說」，後來變成說話上的「反駁」，還有道理上「互相矛盾」的意思。'
    },
    familyTree: [
      { word: 'predict', formula: 'pre- (在...之前) + dict (說)', meaning: '預言、預測、預報' },
      { word: 'verdict', formula: 'ver (真實) + dict (說)', meaning: '陪審團裁決、定論 (說真話)' },
      { word: 'dictate', formula: 'dict + -ate', meaning: '口授、聽寫；發號施令、獨裁命令' },
      { word: 'addict', formula: 'ad- (指向) + dict (說)', meaning: '判給；使成癮、上癮者' },
      { word: 'benediction', formula: 'bene (良好) + dict (說) + -ion', meaning: '祝福、賜福、感恩祝禱' }
    ],
    memory: {
      cognatesDaily: 'dictionary (字典 - 收集話語之處), dictate (口述命令), contrast (對比)',
      oneSentenceMnemonic: 'contra (反對) + dict (說話) ➔ 專門「反著說話」，就是「反駁與矛盾」！',
      etymologicalOrigin: '來自古拉丁文 contradīcere，contrā 是「反對」，dīcere 是「說」。'
    },
    source: 'preset'
  };
