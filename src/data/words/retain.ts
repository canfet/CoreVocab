import { WordAnalysis } from '../../types';

export const retain: WordAnalysis = {
    word: 'retain',
    ipa: '/rɪˈteɪn/',
    partOfSpeech: 'verb (及物動詞)',
    chineseMeaning: '保留、保持、記住（資訊）、聘請（律師等）',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 前綴',
        morpheme: 're-',
        originalForm: 're-',
        meaning: '回、再次 (back, again)',
        category: '空間/反覆',
        grammaticalRole: '動詞修飾'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'tain',
        originalForm: 'tenēre',
        meaning: '握住、持 (to hold)',
        category: '核心動作',
        grammaticalRole: '動作中心'
      }
    ],
    phonetic: {
      assimilationPath: 're- (回、再次) + tenēre ➔ retain (名詞形態 retention)',
      phoneticAnalysis: '動詞 retain 和名詞 retention 顯示這個字根會換兩種長相：-tain 和 -tent。',
      ruleKey: 're- + tenēre'
    },
    semantic: {
      prefixMeaning: '回、再次 (re-)',
      rootCoreAction: '握住 (tain)',
      suffixGrammar: '及物動詞',
      modernMeaning: '繼續持有或保存某事物，不讓其流失',
      formulaDisplay: '{ 向後/再次 (re-) } + { 握住 (tain) } = 保留、保存 (retain)',
      literalLogic: '把東西握回來留在身邊，後來變成「留住員工、記住資訊、聘請顧問」的意思。'
    },
    familyTree: [
      { word: 'retention', formula: 're- + tent + -ion', meaning: '保留、記憶力、滯留' },
      { word: 'retainer', formula: 'retain + -er', meaning: '聘僱定金、家臣、保持器' }
    ],
    memory: {
      cognatesDaily: 'retainer fee (律師諮詢預付訂金), memory retention (記憶保持率)',
      oneSentenceMnemonic: 're (回、再次) + tain (握住) ➔ 「握在手裡不給別人」就是 retain (保留)！',
      etymologicalOrigin: '古拉丁文 retinēre (re- 「回」 + tenēre 「握住」)'
    },
    source: 'preset'
  };
