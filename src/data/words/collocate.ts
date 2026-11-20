import { WordAnalysis } from '../../types';

export const collocate: WordAnalysis = {
    word: 'collocate',
    ipa: '/ˈkɑː.lə.keɪt/',
    partOfSpeech: 'verb (不及物動詞，語言學用語)',
    chineseMeaning: '（語言學）搭配使用、（詞語）習慣並列出現；並置、排列在一起',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 同化前綴',
        morpheme: 'col-',
        originalForm: 'con- (拉丁語)',
        variantNote: 'con- 遇到 l 這個音，會整個變身成 col- (con- ➔ col-)',
        meaning: '共同、一起 (together, with)',
        category: '空間/共同',
        grammaticalRole: '聚合前綴'
      },
      {
        type: 'root',
        label: '💎 核心字根',
        morpheme: 'loc',
        originalForm: 'locus (拉丁語「地方」) / locare (放置)',
        meaning: '位置、放置 (place, to place)',
        category: '核心概念',
        grammaticalRole: '核心語義'
      },
      {
        type: 'suffix',
        label: '🏷️ 動詞字尾',
        morpheme: '-ate',
        originalForm: '-ātus (拉丁語)',
        variantNote: '這個字尾加在字根後面，會把它變成動詞，表示「做...這個動作」',
        meaning: '使...、做...動作',
        category: '動詞化',
        grammaticalRole: '動詞化後綴'
      }
    ],
    phonetic: {
      assimilationPath: 'con- (共同) ➔ 同化為 col- + locare (放置) ➔ collocare ➔ collocate',
      phoneticAnalysis: 'con- 遇到 l 開頭的字，字尾的 n 會換成 l，唸起來才順口（con- + l... ➔ col-，像 collocate, collaborate, collapse 都是這樣）。',
      ruleKey: 'con- ➔ col- 語音同化 (前綴遇 l 全同化)'
    },
    semantic: {
      prefixMeaning: '共同、一起 (con- ➔ col-)',
      rootCoreAction: '放置在某個位置 (loc < locus / locare)',
      suffixGrammar: '動詞化 (-ate)',
      modernMeaning: '把兩個或多個詞語、事物放在一起，形成習慣上會一起出現的組合',
      formulaDisplay: '{ 共同 (col- < con-) } + { 放置 (loc) } + { 做...動作 (-ate) } = 搭配、並置 (collocate)',
      literalLogic: '字面上是「把東西放在一起」，在語言學裡引申為「詞語習慣上會一起出現、互相搭配」。'
    },
    familyTree: [
      { word: 'collocation', formula: 'collocate + -ion', meaning: '(語言學) 詞語搭配、慣用組合', level: 'IELTS', tags: ['IELTS'] },
      { word: 'allocate', formula: 'ad- ➔ al- (朝向) + loc + -ate', meaning: '分配、撥給', level: 'TOEIC', tags: ['TOEIC'] },
      { word: 'relocate', formula: 're- (再次) + loc + -ate', meaning: '遷移、搬遷', level: 'TOEIC', tags: ['TOEIC'] },
      { word: 'dislocate', formula: 'dis- (分開) + loc + -ate', meaning: '使脫臼、使錯位', level: 'TOEFL', tags: ['TOEFL'] },
      { word: 'local', formula: 'loc + -al', meaning: '當地的、本地的', level: 'Core', tags: ['TOEIC'] }
    ],
    memory: {
      cognatesDaily: 'strong collocation (常見搭配詞), "make a decision" is a common collocation (make a decision 是常見的搭配用法)',
      oneSentenceMnemonic: 'col (一起) + loc (位置) + ate (放置) ➔ 「把詞語一起放在同一個位置」就是 collocate (搭配)！',
      etymologicalOrigin: '拉丁文 collocare（con- 共同 + locare 放置）',
      visualImagery: '想像把兩塊拼圖（兩個單字）放在一起，發現它們正好能拼成一組固定搭配，這就是 collocate 的概念。',
      commonCollocations: [
        'collocate with (與...搭配)',
        'naturally collocate (自然地搭配在一起)'
      ],
      contrastiveTips: 'collocate 是語言學專有用語，指「詞語習慣性地一起出現」；一般口語中若想表達「排列、放置在一起」，用 arrange 或 place together 更常見。'
    },
    source: 'preset'
  };
