import { WordAnalysis } from '../../types';

export const entertain: WordAnalysis = {
    word: 'entertain',
    ipa: '/ˌen.tɚˈteɪn/',
    partOfSpeech: 'verb (及物動詞)',
    chineseMeaning: '款待、招待（客人）；使娛樂、給人樂趣；懷有、抱持（想法/希望）',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 弱化前綴',
        morpheme: 'enter-',
        originalForm: 'inter- (拉丁語)',
        variantNote: 'inter- 進入古法文以後，因為不是重音，母音被拉長弱化，拼法也跟著簡化，變成 entre-，再變成英文的 enter-（inter- ➔ entre- ➔ enter-）。',
        meaning: '在...之間、互相 (between, among, mutually)',
        category: '空間/方向',
        grammaticalRole: '弱化前綴'
      },
      {
        type: 'root',
        label: '💎 核心字根',
        morpheme: 'tain',
        originalForm: 'tenēre (拉丁語)',
        variantNote: '跟 attain、contain、maintain 是同一個字根家族：ten- 在唸重音的位置時，經過古法文的音變會變成 -tain。',
        meaning: '握住、支撐、維繫 (to hold)',
        category: '核心動作',
        grammaticalRole: '動作中心'
      }
    ],
    phonetic: {
      assimilationPath: 'inter- (在...之間) ➔ 古法語弱化為 entre-/enter- + tenēre (握住) ➔ 古法語 entretenir ➔ entertain',
      phoneticAnalysis: 'inter- 這個前綴在古法文裡因為不是重音，母音被拉長弱化，拼法也跟著簡化成 entre-，進到英文後再變成 enter-。字根 tenēre（握住）在這裡也依照 tain 家族的規律變成 -tain。整個字原意是「互相握住、互相扶持」，後來才引申出「款待客人」、「使人開心」的意思。',
      ruleKey: 'inter- ➔ enter- 前綴弱化 (法語非重音弱化)'
    },
    semantic: {
      prefixMeaning: '彼此之間、互相 (enter- < inter-)',
      rootCoreAction: '握住、維繫 (tain < tenēre)',
      suffixGrammar: '及物動詞',
      modernMeaning: '主人與客人之間互相「維繫」情誼，延伸出款待客人、提供娛樂節目、或心裡懷抱著某個想法',
      formulaDisplay: '{ 彼此之間 (enter- < inter-) } + { 握住、維繫 (tain) } = 款待、娛樂 (entertain)',
      literalLogic: '字面上是「在人與人之間互相扶持、維繫關係」，後來慢慢變成主人招待客人、讓客人開心的意思，也可以指心裡「抱持」著一個想法。'
    },
    familyTree: [
      { word: 'entertainment', formula: 'entertain + -ment', meaning: '娛樂、娛樂節目', level: 'TOEIC', tags: ['TOEIC'] },
      { word: 'entertaining', formula: 'entertain + -ing (形容詞)', meaning: '有趣的、引人入勝的', level: 'TOEIC', tags: ['TOEIC'] },
      { word: 'contain', formula: 'con- (完全) + tain (握住)', meaning: '包含、容納', level: 'Core', tags: ['TOEIC'] },
      { word: 'maintain', formula: 'manu (手) + tain (握住)', meaning: '維持、保養', level: 'TOEIC', tags: ['TOEIC'] },
      { word: 'sustain', formula: 'sub- ➔ sus- (在下方) + tain', meaning: '維持、支撐', level: 'TOEFL', tags: ['TOEFL', 'IELTS'] }
    ],
    memory: {
      cognatesDaily: 'entertain guests (招待客人), entertainment industry (娛樂產業), entertain an idea (考慮一個想法)',
      oneSentenceMnemonic: 'enter (彼此之間，來自 inter-) + tain (握住、維繫) ➔ 主客之間「互相維繫熱絡氣氛」就是 entertain (款待/娛樂)！',
      etymologicalOrigin: '古法文 entretenir（entre- 「彼此之間」，源自拉丁文 inter- + tenir 「握住」，源自拉丁文 tenēre），原意是「互相扶持、維繫」',
      visualImagery: '想像主人與賓客圍成一圈，手牽著手互相招呼款待，那個「彼此之間緊緊維繫」的畫面就是 entertain。',
      commonCollocations: [
        'entertain guests/clients (招待客人/客戶)',
        'entertain the idea of doing something (考慮做某件事的可能性)',
        'purely for entertainment (純粹為了娛樂)'
      ],
      contrastiveTips: 'entertain 強調「用心思招待、讓對方感到開心愉快」，語氣比較正式；amuse 單純指「引人發笑、覺得好玩」，範圍較小。'
    },
    source: 'preset'
  };
