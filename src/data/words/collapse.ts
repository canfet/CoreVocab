import { WordAnalysis } from '../../types';

export const collapse: WordAnalysis = {
    word: 'collapse',
    ipa: '/kəˈlæps/',
    partOfSpeech: 'verb (不及物動詞); also noun',
    chineseMeaning: '倒塌、崩潰、瓦解；（醫學）虛脫；(名詞) 倒塌、崩潰',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 同化前綴',
        morpheme: 'col-',
        originalForm: 'con- (拉丁語)',
        variantNote: 'con- 遇到 l 這個音，會整個變身成 col- (con- ➔ col-)',
        meaning: '共同、完全 (together, completely)',
        category: '強調程度',
        grammaticalRole: '強調前綴'
      },
      {
        type: 'root',
        label: '💎 核心字根',
        morpheme: 'laps',
        originalForm: 'labi (拉丁語「滑動、滑落」)，完成分詞幹 lapsus',
        meaning: '滑落、跌落 (to slide, slip, fall)',
        category: '核心動作',
        grammaticalRole: '分詞詞幹'
      }
    ],
    phonetic: {
      assimilationPath: 'con- (完全) ➔ 同化為 col- + labi (滑落) ➔ 完成分詞 lapsus ➔ collapsus ➔ collapse',
      phoneticAnalysis: 'con- 遇到 l 開頭的字，字尾的 n 會換成 l，唸起來才順口（con- + l... ➔ col-，像 collapse, collocate, collaborate 都是這樣）。字根 labi（滑落）的完成分詞是 lapsus，跟 lapse, elapse, relapse 是同一家族。',
      ruleKey: 'con- ➔ col- 語音同化 (前綴遇 l 全同化) + labi 完成分詞幹 laps'
    },
    semantic: {
      prefixMeaning: '完全、徹底 (con- ➔ col-)',
      rootCoreAction: '滑落、跌落 (laps < labi)',
      suffixGrammar: '不及物動詞',
      modernMeaning: '結構、體制或身體整個失去支撐，一下子完全垮下來',
      formulaDisplay: '{ 完全 (col- < con-) } + { 滑落 (laps) } = 倒塌、崩潰 (collapse)',
      literalLogic: '字面上是「整個一起滑落下去」，引申為建築物倒塌、制度崩潰或人體力不支倒下。'
    },
    familyTree: [
      { word: 'collapsible', formula: 'collapse + -ible', meaning: '可摺疊的、可收合的', level: 'TOEIC', tags: ['TOEIC'] },
      { word: 'lapse', formula: 'laps (滑落) + -e', meaning: '失誤、過失、（時間）流逝', level: 'TOEFL', tags: ['TOEFL', 'GRE'] },
      { word: 'elapse', formula: 'e- (向外) + lapse (滑落)', meaning: '（時間）過去、消逝', level: 'TOEFL', tags: ['TOEFL'] },
      { word: 'relapse', formula: 're- (再次) + lapse (滑落)', meaning: '（病情）復發、故態復萌', level: 'GRE', tags: ['GRE', 'TOEFL'] },
      { word: 'prolapse', formula: 'pro- (向前) + lapse (滑落)', meaning: '（器官）脫垂（醫學用語）', level: 'GRE', tags: ['GRE'] }
    ],
    memory: {
      cognatesDaily: 'the building collapsed (建築物倒塌了), economic collapse (經濟崩潰), collapse from exhaustion (因精疲力竭而昏倒)',
      oneSentenceMnemonic: 'col (完全) + laps (滑落) ➔ 「整個一起滑落下去」就是 collapse (倒塌/崩潰)！',
      etymologicalOrigin: '拉丁文 collapsus，是動詞 collabi（con- 完全 + labi 滑落）的完成分詞',
      visualImagery: '想像一疊積木原本堆得好好的，突然整排一起滑落、垮成一堆，這個「整個一起垮下去」的畫面就是 collapse。',
      commonCollocations: [
        'collapse under pressure/weight (在壓力/重量下崩潰)',
        'the system collapsed (系統/體制崩潰)',
        'suddenly collapse (突然倒下)'
      ],
      contrastiveTips: 'collapse 強調「突然、整體性地垮下」，語氣戲劇化，可用於建築物、制度或人（昏倒）；fall 是最普通的字，只表示「倒下」，不一定有「結構整體瓦解」的意涵。'
    },
    source: 'preset'
  };
