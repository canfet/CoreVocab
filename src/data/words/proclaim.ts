import { WordAnalysis } from '../../types';

export const proclaim: WordAnalysis = {
    word: 'proclaim',
    ipa: '/proʊˈkleɪm/',
    partOfSpeech: 'verb (及物動詞)',
    chineseMeaning: '宣告、公布、宣稱',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 空間前綴',
        morpheme: 'pro-',
        originalForm: 'pro- (拉丁語)',
        meaning: '公開、向前 (forth, publicly)',
        category: '前向空間',
        grammaticalRole: '前綴'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'claim',
        originalForm: 'clamare (拉丁語)',
        variantNote: '拉丁動詞 clamare「喊叫」經過古法語 clamer 傳進英文，拼法簡化成 claim，唸法也從喊叫聲變成了 /kleɪm/',
        meaning: '喊叫、宣稱 (to cry out, shout)',
        category: '核心動作',
        grammaticalRole: '動作中心'
      }
    ],
    phonetic: {
      assimilationPath: 'pro- (公開) + clamare (喊叫) ➔ proclamare ➔ 古法語 proclamer ➔ 英文 proclaim',
      phoneticAnalysis: 'pro- 直接接在 claim 前面，不需要變身，唸的時候重音在後面 proCLAIM。',
      ruleKey: 'pro- + claim 直接拼接'
    },
    semantic: {
      prefixMeaning: '公開、向前 (pro-)',
      rootCoreAction: '喊叫、宣稱 (claim < clamare)',
      suffixGrammar: '及物動詞',
      modernMeaning: '公開、正式地向所有人宣布一件重要的事情',
      formulaDisplay: '{ 公開 (pro-) } + { 喊叫 (claim) } = 宣告、公布 (proclaim)',
      literalLogic: '字面上是「對著大家公開喊出來」，就是正式宣告的意思。'
    },
    familyTree: [
      { word: 'proclamation', formula: 'proclaim + -ation', meaning: '宣告、公告 (名詞)' },
      { word: 'claim', formula: '字根本體', meaning: '聲稱、要求' },
      { word: 'exclaim', formula: 'ex- (向外) + claim', meaning: '驚呼、大叫' },
      { word: 'acclaim', formula: 'ad- ➔ ac- (朝向) + claim', meaning: '讚揚、歡呼' },
      { word: 'reclaim', formula: 're- (重新) + claim', meaning: '取回、開墾（土地）' }
    ],
    memory: {
      cognatesDaily: 'proclaim independence (宣告獨立), proclaim victory (宣布勝利)',
      oneSentenceMnemonic: 'pro (公開) + claim (喊出來) ➔ 「公開大聲喊出來」就是 proclaim (宣告)！',
      etymologicalOrigin: '拉丁文 proclamare (pro- + clamare「喊叫」)',
      commonCollocations: [
        'proclaim someone king (宣布某人為國王)',
        'proclaim a state of emergency (宣布進入緊急狀態)'
      ],
      contrastiveTips: 'proclaim 語氣正式、莊重，常用於官方或重大場合的公開宣告；announce 是中性、日常也能用的「宣布」，適用範圍廣得多，例如宣布考試成績就用 announce 而非 proclaim。'
    },
    source: 'preset'
  };
