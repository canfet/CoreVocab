import { WordAnalysis } from '../../types';

export const collaborate: WordAnalysis = {
    word: 'collaborate',
    ipa: '/kəˈlæb.ə.reɪt/',
    partOfSpeech: 'verb (不及物動詞)',
    chineseMeaning: '合作、協作、共同努力',
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
        morpheme: 'labor',
        originalForm: 'labor / laborare (拉丁語「勞動、工作」)',
        meaning: '勞動、工作、努力 (to work, labor)',
        category: '核心動作',
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
      assimilationPath: 'con- (共同) ➔ 同化為 col- + laborare (勞動) ➔ collaborare ➔ collaborate',
      phoneticAnalysis: 'con- 遇到 l 開頭的字，字尾的 n 會換成 l，唸起來才順口（con- + l... ➔ col-，像 collaborate, collocate 都是這樣）。',
      ruleKey: 'con- ➔ col- 語音同化 (前綴遇 l 全同化)'
    },
    semantic: {
      prefixMeaning: '共同、一起 (con- ➔ col-)',
      rootCoreAction: '勞動、努力工作 (labor)',
      suffixGrammar: '動詞化 (-ate)',
      modernMeaning: '和其他人一起投入勞力和心力，為了共同的目標而工作',
      formulaDisplay: '{ 共同 (col- < con-) } + { 勞動 (labor) } + { 做...動作 (-ate) } = 合作 (collaborate)',
      literalLogic: '字面上是「一起工作、一起流汗努力」，引申為「合作、協作完成一件事」。'
    },
    familyTree: [
      { word: 'collaboration', formula: 'collaborate + -ion', meaning: '合作、協作（名詞）', level: 'TOEIC', tags: ['TOEIC'] },
      { word: 'collaborative', formula: 'collaborate + -ive', meaning: '合作的、協作性的', level: 'TOEFL', tags: ['TOEFL'] },
      { word: 'collaborator', formula: 'collaborate + -or', meaning: '合作者（也可指通敵者）', level: 'GRE', tags: ['GRE'] },
      { word: 'laborious', formula: 'labor + -ious', meaning: '費力的、艱辛的', level: 'GRE', tags: ['GRE', 'TOEFL'] },
      { word: 'elaborate', formula: 'e- (向外) + labor + -ate', meaning: '精心製作的、詳盡闡述（把工夫做到極致）', level: 'GRE', tags: ['GRE', 'TOEFL'] }
    ],
    memory: {
      cognatesDaily: 'collaborate with a colleague (跟同事合作), collaborate on a project (合作進行一個專案)',
      oneSentenceMnemonic: 'col (一起) + labor (努力工作) + ate (做) ➔ 「大家一起流汗努力工作」就是 collaborate (合作)！',
      etymologicalOrigin: '拉丁文 collaborare（con- 共同 + laborare 工作/勞動）',
      visualImagery: '想像好幾個人一起拉一根很粗的繩子，每個人都用力，繩子才能被拉動，這種「共同出力」的畫面就是 collaborate。',
      commonCollocations: [
        'collaborate closely (密切合作)',
        'collaborate with international partners (與國際夥伴合作)'
      ],
      contrastiveTips: 'collaborate 強調「共同投入心力、一起創造成果」，常用在學術、藝術、商業計畫；cooperate 語氣較中性，只強調「互相配合、不扯後腿」，不一定共同創造新東西。'
    },
    source: 'preset'
  };
