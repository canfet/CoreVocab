import { WordAnalysis } from '../../types';

export const component: WordAnalysis = {
    word: 'component',
    ipa: '/kəmˈpoʊ.nənt/',
    partOfSpeech: 'noun (名詞); also adjective (構成的)',
    chineseMeaning: '組成部分、零件、成分；(形容詞) 構成的、組成的',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 同化前綴',
        morpheme: 'com-',
        originalForm: 'con- (拉丁語)',
        variantNote: 'con- 遇到 p 這個音，會整個變身成 com- (con- ➔ com-)',
        meaning: '共同、一起 (together, with)',
        category: '空間/共同',
        grammaticalRole: '聚合前綴'
      },
      {
        type: 'root',
        label: '💎 核心字根',
        morpheme: 'pon',
        originalForm: 'ponere (拉丁語「放置」)，現在分詞幹 ponent-',
        variantNote: 'ponere（放置）這個動詞的現在分詞是 ponens/ponentem，字根就寫成 pon-ent；component 用的正是這個「正在放置」的分詞形式，不是完成分詞 positus（那個是 position, deposit 這組字用的）',
        meaning: '放置 (to place, put)',
        category: '核心動作',
        grammaticalRole: '分詞詞幹'
      },
      {
        type: 'suffix',
        label: '🏷️ 名詞字尾',
        morpheme: '-ent',
        originalForm: '-ens/-entem (拉丁語現在分詞字尾)',
        variantNote: '加在動詞現在分詞幹後面，表示「正在做...動作的東西」',
        meaning: '...的東西 (that which does)',
        category: '名詞化',
        grammaticalRole: '分詞名詞化後綴'
      }
    ],
    phonetic: {
      assimilationPath: 'con- (共同) ➔ 同化為 com- + ponere (放置) ➔ componere ➔ 現在分詞 componentem ➔ component',
      phoneticAnalysis: 'con- 遇到 p 開頭的字，字尾的 n 會換成 m，唸起來才順口（con- + p... ➔ com-，像 component, compare, combine 都是這樣）。',
      ruleKey: 'con- ➔ com- 語音同化 (前綴遇 b/m/p 全同化) + ponere 現在分詞幹 -pon-ent-'
    },
    semantic: {
      prefixMeaning: '共同、一起 (con- ➔ com-)',
      rootCoreAction: '放置在一起 (pon < ponere)',
      suffixGrammar: '名詞化 (-ent，正在做某動作的東西)',
      modernMeaning: '被放在一起、組合起來構成一個更大整體的其中一部分',
      formulaDisplay: '{ 共同 (com- < con-) } + { 放置 (pon) } + { ...的東西 (-ent) } = 組成部分 (component)',
      literalLogic: '字面上是「一起被放進去的東西」，引申為構成一個系統、機器或整體的其中一個零件或成分。'
    },
    familyTree: [
      { word: 'opponent', formula: 'ob- (對著) + pon (放置) + -ent', meaning: '對手（放在對立面的人）', level: 'TOEIC', tags: ['TOEIC'] },
      { word: 'proponent', formula: 'pro- (向前) + pon (放置) + -ent', meaning: '支持者、倡議者（放在前面提出主張的人）', level: 'GRE', tags: ['GRE'] },
      { word: 'position', formula: 'pon (放置) 完成分詞 posit + -ion', meaning: '位置、職位、立場', level: 'Core', tags: ['TOEIC'] },
      { word: 'postpone', formula: 'post- (之後) + pon(e) (放置)', meaning: '延期、延後（把事情放到後面）', level: 'TOEIC', tags: ['TOEIC'] }
    ],
    memory: {
      cognatesDaily: 'key component (關鍵零件/要素), electronic components (電子零件), component parts (組成部分)',
      oneSentenceMnemonic: 'com (一起) + pon (放) + ent (...的東西) ➔ 「被放在一起組成整體的東西」就是 component (組成部分)！',
      etymologicalOrigin: '拉丁文 componentem，是動詞 componere（con- 共同 + ponere 放置）的現在分詞',
      visualImagery: '想像把好幾個零件（com- 一起 + pon 放置）拼裝進一台機器裡，每一個零件都是 component。',
      commonCollocations: [
        'a key/essential component (關鍵要素/零件)',
        'the components of a system (系統的組成部分)'
      ],
      contrastiveTips: '要特別注意！component 和 compose/composition 表面上長得很像，但其實不是同一個字根家族：component 真的來自拉丁文 ponere（放置）；而 compose 其實是從古法文 poser 演變來的，poser 又來自通俗拉丁文 pausare（暫停），跟 ponere 沒有直接關係，只是長得很像的「同形異源」陷阱字。'
    },
    source: 'preset'
  };
