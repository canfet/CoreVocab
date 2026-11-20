import { WordAnalysis } from '../../types';

export const unprecedented: WordAnalysis = {
    word: 'unprecedented',
    ipa: '/ʌnˈpres.ə.den.t̬ɪd/',
    partOfSpeech: 'adjective (形容詞)',
    chineseMeaning: '史無前例的、前所未有的、空前的',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 否定前綴',
        morpheme: 'un-',
        originalForm: 'un-',
        variantNote: '很久很久以前的語言裡有一個表示「不」的音，後來在日耳曼語變成了 un-。',
        meaning: '不、非、未曾 (not, opposite of)',
        category: '否定極性',
        grammaticalRole: '否定形容詞'
      },
      {
        type: 'prefix',
        label: '🚩 空間前綴',
        morpheme: 'pre-',
        originalForm: 'prae-',
        variantNote: '這個前綴在古拉丁文裡是「在...之前」的意思，後來演變成英文的 pre-。',
        meaning: '在...之前 (before, prior to)',
        category: '時空關係',
        grammaticalRole: '前綴'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'ced',
        originalForm: 'cēdere / cessus',
        meaning: '走、行進、發生 (to go, yield)',
        category: '核心動作',
        grammaticalRole: '概念中心'
      },
      {
        type: 'suffix',
        label: '🏷️ 字尾',
        morpheme: '-ent',
        originalForm: '-entem (拉丁現在分詞)',
        variantNote: '這個字尾來自古拉丁文動詞「正在做」的形式，會把字變成形容詞或名詞',
        meaning: '...的 (現在分詞性質)',
        category: '形容詞/名詞化',
        grammaticalRole: '構成分詞'
      },
      {
        type: 'suffix',
        label: '🏷️ 字尾',
        morpheme: '-ed',
        originalForm: '-ed',
        variantNote: '放在字的後面，表示「有這個特徵的」，是英文形容詞很常見的結尾',
        meaning: '具有...特徵的',
        category: '形容詞後綴',
        grammaticalRole: '複合形容詞化'
      }
    ],
    phonetic: {
      assimilationPath: 'un- + pre- + ced + -ent + -ed ➔ unprecedented',
      phoneticAnalysis: '這個字是好幾層組合起來的。古拉丁文動詞 cēdere（走、發生）有兩種長相：ced- 和 cess-。',
      dualStemInfo: {
        presentStem: 'ced- (如 precede, concede, recede)',
        supineStem: 'cess- (如 access, success, process, excess)',
        meaning: '走、讓步 (go, move, yield)'
      },
      ruleKey: '多重構詞 & 雙詞幹 ced/cess'
    },
    semantic: {
      prefixMeaning: '未曾 (un-) + 先前 (pre-)',
      rootCoreAction: '走過 / 發生 (ced)',
      suffixGrammar: '被具有...特性的 (-ent + -ed)',
      modernMeaning: '歷史上從未發生過、毫無先例可循的重大事件',
      formulaDisplay: '{ 未 (un-) } + { 之前 (pre-) } + { 走過 (ced) } + { 的 (-ent-ed) } = 史無前例的',
      literalLogic: '以前從來沒有人走過這條路的意思。'
    },
    familyTree: [
      { word: 'precedent', formula: 'pre- + ced + -ent', meaning: '先例、前例' },
      { word: 'succeed', formula: 'sub- + ceed (ced 變體)', meaning: '繼承、成功' }
    ],
    memory: {
      cognatesDaily: 'precedent (判例), process (過程)',
      oneSentenceMnemonic: 'un (不) + pre (先) + ced (走) ➔ 「從未走在前面過」➔ 史無前例！',
      etymologicalOrigin: '來自古拉丁文 praecēdere。'
    },
    source: 'preset'
  };
