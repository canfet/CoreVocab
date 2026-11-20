import { WordAnalysis } from '../../types';

export const addictive: WordAnalysis = {
    word: 'addictive',
    ipa: '/əˈdɪk.tɪv/',
    partOfSpeech: 'adjective (形容詞)',
    chineseMeaning: '使人上癮的、成癮性的、令人著迷的',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 前綴',
        morpheme: 'ad-',
        originalForm: 'ad-',
        variantNote: 'ad- 遇到 d 開頭的字，不用變身，直接保持原本樣子，所以會出現兩個 d（dd）。',
        meaning: '朝向、指向、全心綁定 (to, toward, attachment)',
        category: '空間/趨向',
        grammaticalRole: '動詞方向強化'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'dict',
        originalForm: 'dicere ➔ dictus (拉丁字根)',
        variantNote: '這個字換了一種寫法變成 dict-，意思是「宣佈、裁決、判決」。',
        meaning: '說話、宣佈、司法裁決 (to say, declare, proclaim, award legally)',
        category: '核心概念',
        grammaticalRole: '動作本質載體'
      },
      {
        type: 'suffix',
        label: '🏷️ 後綴',
        morpheme: '-ive',
        originalForm: '-īvus',
        variantNote: '這個字尾放在字根後面，會把它變成形容詞，表示「有這種傾向或功能的」',
        meaning: '具有...傾向的、使人...的 (tending to, causing)',
        category: '形容詞化',
        grammaticalRole: '形容詞後綴'
      }
    ],
    phonetic: {
      assimilationPath: 'ad- (指向/奉獻) + dicere ➔ dictus (判決宣佈) + -ive ➔ addictive',
      phoneticAnalysis: '古羅馬法律用語 addictus，是說「法官判決，把還不出錢的人判給債主去當奴隸」。後來變成心理學說的「整個人被某樣東西控制住、離不開的成癮狀態」。兩個 d 疊在一起，是因為 ad- 沒有變身，直接跟 dict 連在一起。',
      dualStemInfo: {
        presentStem: 'dic- (如 condition, contradict)',
        supineStem: 'dict- (如 predict, addict, dictate, verdict)',
        meaning: '說、指示、宣判 (to speak, declare)'
      },
      ruleKey: '前綴 ad- & 拉丁字根 dic / dict'
    },
    semantic: {
      prefixMeaning: '全身心指向 (ad-)',
      rootCoreAction: '法律判令/奉獻 (dict)',
      suffixGrammar: '具有促成特性的 (-ive)',
      modernMeaning: '具有強烈誘惑力或化學依賴性，使人身心深陷不可自拔',
      formulaDisplay: '{ 指向/判給 (ad-) } + { 裁決/宣言 (dict) } + { 傾向 (-ive) } = 使人成癮的 (addictive)',
      literalLogic: '古羅馬法律裡「被判去當奴隸 (addictus)」，後來變成現代說的「被某種藥物、行為或遊戲完全控制、上癮了 (addictive)」。'
    },
    familyTree: [
      { word: 'addict', formula: 'ad- + dict', meaning: '成癮者、沉溺於...者；使沉溺' },
      { word: 'addiction', formula: 'ad- + dict + -ion', meaning: '沉溺、成癮性、癮頭' },
      { word: 'addicted', formula: 'ad- + dict + -ed', meaning: '上癮的、成癮入迷的' },
      { word: 'predict', formula: 'pre- (預先) + dict (說)', meaning: '預測、預言 (提前說出)' },
      { word: 'contradict', formula: 'contra- (反對) + dict (說)', meaning: '反駁、相矛盾 (對著反著說)' },
      { word: 'dictate', formula: 'dict + -ate', meaning: '口述、命令、支配' },
      { word: 'verdict', formula: 'veri (真實) + dict (說/判決)', meaning: '法庭裁決、定論 (說出真相)' },
      { word: 'dedicate', formula: 'de- (完全) + dic + -ate', meaning: '奉獻、獻身 (完全宣稱奉獻給某事)' },
      { word: 'indicate', formula: 'in- (向內) + dic + -ate', meaning: '指出、指示、象徵' }
    ],
    memory: {
      cognatesDaily: 'game is addictive (遊戲令人上癮), video game addiction (電玩成癮), coffee addict (重度咖啡迷), dictionary (字典)',
      oneSentenceMnemonic: 'ad (指向) + dict (判決) + ive ➔ 「把自己整個人都判給了它」就是 addictive (使人上癮的)！',
      etymologicalOrigin: '古拉丁文 addictīvus（來自 addīcere，意思是「經過法官判決，把人送給別人當奴隸」）',
      visualImagery: '想像古羅馬法官用法槌重重敲下，將一個人判決移交給命運或慾望當作奴隸（ad- 向 + dict 宣判），整個人被無形鎖鏈銬住無法自拔。',
      commonCollocations: [
        'highly addictive substances / drugs (極易成癮的物質/毒品)',
        'addictive gameplay loop (令人欲罷不能的遊戲循環)',
        'social media can be as addictive as nicotine (社群媒體可能像尼古丁一樣令人上癮)'
      ],
      contrastiveTips: 'addictive 是用來形容「東西」讓人上癮的；addicted 是用來形容「人」對某樣東西上癮了（像 I am addicted to coffee）。'
    },
    source: 'preset'
  };
