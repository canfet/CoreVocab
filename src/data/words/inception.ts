import { WordAnalysis } from '../../types';

export const inception: WordAnalysis = {
    word: 'inception',
    ipa: '/ɪnˈsep.ʃən/',
    partOfSpeech: 'noun (名詞)',
    chineseMeaning: '開端、創立、初期（正式用語，常指機構、計畫的創立之初）',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 前綴',
        morpheme: 'in-',
        originalForm: 'in- (拉丁語)',
        meaning: '向內、開始進入 (into, onto)',
        category: '空間/方向',
        grammaticalRole: '方向前綴'
      },
      {
        type: 'root',
        label: '💎 核心字根',
        morpheme: 'cept',
        originalForm: 'capere (拉丁語「拿取」)，現在式弱化形 -cipere / 完成分詞幹 -ceptus',
        variantNote: 'capere（拿）放進複合字中間時，母音會弱化：現在式變成 -cipere，完成分詞變成 -ceptus，inception 用的正是這個完成分詞弱化形 cept',
        meaning: '拿取、開始抓住 (to take, seize, begin)',
        category: '核心動作',
        grammaticalRole: '分詞詞幹'
      },
      {
        type: 'suffix',
        label: '🏷️ 名詞字尾',
        morpheme: '-ion',
        originalForm: '-io / -ionem (拉丁語)',
        variantNote: '加在動詞完成分詞幹後面，把動作變成抽象名詞',
        meaning: '...的動作、過程 (act of, state of)',
        category: '抽象名詞',
        grammaticalRole: '名詞化後綴'
      }
    ],
    phonetic: {
      assimilationPath: 'in- (向內) + capere ➔ 現在式弱化為 -cipere (開始拿取) ➔ 完成分詞 inceptus ➔ inception',
      phoneticAnalysis: 'in- 在 c 開頭的字前面不需要同化，直接拼接。字根 capere（拿）放進複合字中間時，母音從 a 弱化成 i（現在式 incipere）或 e（完成分詞 inceptus），這是拉丁文很常見的短母音弱化現象。',
      ruleKey: 'in- 無同化直接拼接 + capere 母音弱化 (a➔e)'
    },
    semantic: {
      prefixMeaning: '向內、開始 (in-)',
      rootCoreAction: '拿取、抓住 (cept < capere)',
      suffixGrammar: '抽象名詞化 (-ion)',
      modernMeaning: '一件事情、機構或計畫最初被「抓住、啟動」的那個起點',
      formulaDisplay: '{ 向內開始 (in-) } + { 拿取/抓住 (cept) } + { ...的過程 (-ion) } = 開端、創立 (inception)',
      literalLogic: '字面上是「開始抓取、著手進行」的動作，引申為一件事物「最初開始」的那個時間點。'
    },
    familyTree: [
      { word: 'incipient', formula: 'in- (向內) + cipi (拿) + -ent', meaning: '初期的、剛開始出現的', level: 'GRE', tags: ['GRE'] },
      { word: 'accept', formula: 'ad- ➔ ac- (朝向) + cept (拿取)', meaning: '接受', level: 'Core', tags: ['TOEIC'] },
      { word: 'except', formula: 'ex- (向外) + cept (拿取)', meaning: '除了...之外', level: 'Core', tags: ['TOEIC'] },
      { word: 'concept', formula: 'con- (共同) + cept (拿取)', meaning: '概念', level: 'TOEFL', tags: ['TOEFL'] },
      { word: 'receive', formula: 're- (回) + ceive (拿取)', meaning: '收到、接收', level: 'Core', tags: ['TOEIC'] }
    ],
    memory: {
      cognatesDaily: 'since its inception (自從創立以來), the inception of the project (計畫的開端)',
      oneSentenceMnemonic: 'in (開始向內) + cept (抓住) + ion (過程) ➔ 「一開始就抓住、啟動」就是 inception (開端)！',
      etymologicalOrigin: '拉丁文 inceptio(n-)，來自動詞 incipere（in- 向內/開始 + capere 拿取）',
      visualImagery: '想像一部電影的第一顆鏡頭，畫面從一片黑暗中「抓住」第一個影像開始播放，那個起點就是 inception。',
      commonCollocations: [
        'from its inception (從創立之初起)',
        'mark the inception of (標誌著...的開端)'
      ],
      contrastiveTips: 'inception 是正式、書面用語，常用在描述機構、計畫、制度的「創立起點」；beginning/start 是最普遍的日常用字，任何情境都能用。'
    },
    source: 'preset'
  };
