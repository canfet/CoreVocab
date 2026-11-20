import { WordAnalysis } from '../../types';

export const propose: WordAnalysis = {
    word: 'propose',
    ipa: '/prəˈpoʊz/',
    partOfSpeech: 'verb (及物/不及物動詞)',
    chineseMeaning: '提議、提出（想法/計畫）；求婚',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 空間前綴',
        morpheme: 'pro-',
        originalForm: 'pro- (拉丁語)',
        meaning: '向前 (forward, forth)',
        category: '前向空間',
        grammaticalRole: '前綴'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'pose',
        originalForm: 'poser (古法語) ← pausare (晚期拉丁語)',
        variantNote: '這裡有個很多人會搞錯的地方：-pose 這個字根看起來很像拉丁文「放置」的 ponere，但其實英文的 -pose 家族 (propose, compose, expose, oppose) 是透過古法語 poser 傳進來的，而 poser 源自晚期拉丁文 pausare「停下、休息」。因為意思和長相都很接近 ponere，中世紀的法文把兩者混用，才形成現在的 -pose 拼法',
        meaning: '放置、停下 (to place, to pause)',
        category: '核心動作',
        grammaticalRole: '動作中心'
      }
    ],
    phonetic: {
      assimilationPath: 'pro- (向前) + poser (放置，源自晚期拉丁文 pausare「停下」) ➔ propose',
      phoneticAnalysis: 'pro- 直接接在 pose 前面，不需要變身，唸的時候重音在後面 proPOSE。',
      ruleKey: 'pro- + pose (經由古法語 poser)'
    },
    semantic: {
      prefixMeaning: '向前 (pro-)',
      rootCoreAction: '放置、提出 (pose < poser)',
      suffixGrammar: '及物/不及物動詞',
      modernMeaning: '把一個想法、計畫放到大家面前，讓對方考慮或決定；也用於「把婚姻的想法放到對方面前」，也就是求婚',
      formulaDisplay: '{ 向前 (pro-) } + { 放置 (pose) } = 提議、提出 (propose)',
      literalLogic: '字面上是「把東西放到前面」，引申成把想法提出來讓別人看到、討論。'
    },
    familyTree: [
      { word: 'proposal', formula: 'propose + -al', meaning: '提案、求婚 (名詞)' },
      { word: 'compose', formula: 'com- (一起) + pose', meaning: '組成、作曲 (把東西放在一起)' },
      { word: 'expose', formula: 'ex- (向外) + pose', meaning: '揭露、使暴露 (把東西放到外面)' },
      { word: 'oppose', formula: 'ob- (對著) + pose', meaning: '反對 (把自己放在對立面)' },
      { word: 'suppose', formula: 'sub- (在下) + pose', meaning: '假設、猜想 (把想法放在底下當前提)' }
    ],
    memory: {
      cognatesDaily: 'propose a plan (提出計畫), propose a toast (提議敬酒), propose to someone (向某人求婚)',
      oneSentenceMnemonic: 'pro (向前) + pose (放置) ➔ 「把想法放到大家面前」就是 propose (提議)！',
      etymologicalOrigin: '古法語 proposer (pro- + poser「放置」，poser 源自晚期拉丁文 pausare「停下、休息」)',
      commonCollocations: [
        'propose a solution (提出解決方案)',
        'propose marriage (求婚)'
      ],
      contrastiveTips: '很多學習者以為 -pose 系列字都直接來自拉丁文 ponere/positus（如 position, positive），但其實 propose、compose、expose 這些「動作類」的 -pose 字是經由古法語 poser 從 pausare 演變來的，是兩條不同的語源路線在英文裡撞在一起，拼法才長得這麼像。'
    },
    source: 'preset'
  };
