import { WordAnalysis } from '../../types';

export const exportWord: WordAnalysis = {
  word: 'export',
  ipa: '/ɪkˈspɔːrt/ (動詞); /ˈɛkspɔːrt/ (名詞)',
  partOfSpeech: 'verb / noun (及物動詞/名詞)',
  chineseMeaning: '出口、輸出（動詞/名詞）',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 空間前綴',
      morpheme: 'ex-',
      originalForm: 'ex- (拉丁語)',
      variantNote: 'ex- 在 p 開頭的字根前面不會變形，直接拼接成 export-。',
      meaning: '向外、離開 (out, away)',
      category: '空間/方向',
      grammaticalRole: '方向前綴'
    },
    {
      type: 'root',
      label: '💎 核心字根',
      morpheme: 'port',
      originalForm: 'portare (拉丁語)',
      meaning: '攜帶、搬運 (to carry)',
      category: '核心動作',
      grammaticalRole: '動作中心'
    }
  ],
  phonetic: {
    assimilationPath: 'ex- (向外) + portare (攜帶) ➔ exportare (帶到外面去) ➔ export',
    phoneticAnalysis: '這是沒有音變的透明拼接字，ex- 直接接上 port。作動詞時重音在後面 ex-PORT，作名詞時重音移到前面 EX-port，這是英文裡「名詞前重音、動詞後重音」的常見雙音節詞規律（同樣的模式也出現在 record、present）。',
  },
  semantic: {
    prefixMeaning: '向外 (ex-)',
    rootCoreAction: '攜帶、搬運 (port < portare)',
    suffixGrammar: '及物動詞/名詞',
    modernMeaning: '把貨物「搬運到國外」去，也就是出口；作名詞時則指出口的貨物或出口這件事本身',
    formulaDisplay: '{ 向外 (ex-) } + { 攜帶 (port) } = 出口、輸出 (export)',
    literalLogic: '字面上是「把東西搬運到外面去」，用在國際貿易上，就是把本國生產的貨物運到國外銷售，也就是出口。'
  },
  familyTree: [
    { word: 'import', formula: 'im- (向內) + port (攜帶)', meaning: '進口、輸入', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'transport', formula: 'trans- (橫越) + port (攜帶)', meaning: '運輸、運送', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'support', formula: 'sup- (在下) + port (攜帶)', meaning: '支持、支撐', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'portable', formula: 'port (攜帶) + -able', meaning: '可攜帶的、輕便的', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'exporter', formula: 'export + -er (人/機構)', meaning: '出口商、出口國', level: 'TOEIC', tags: ['TOEIC'] }
  ],
  memory: {
    cognatesDaily: 'export goods to other countries (將貨物出口到其他國家), export earnings (出口收益), major exports (主要出口項目)',
    oneSentenceMnemonic: 'ex (向外) + port (搬運) ➔ 把貨物「搬運到外國」就是 export (出口)！',
    etymologicalOrigin: '拉丁語 exportare（ex- 「向外」 + portare 「攜帶」）',
    visualImagery: '想像貨櫃船滿載貨物，緩緩駛離本國港口駛向海外，那個「把貨物運出國門」的畫面就是 export。',
    commonCollocations: ['export goods/products (出口商品)', 'export earnings/revenue (出口收益)', 'major export markets (主要出口市場)'],
    contrastiveTips: 'export 和 import 是一組反義詞，作動詞時重音都在後（-PORT），作名詞時重音都在前（EX-/IM-port），拼字很像，考試常考重音位置與詞性判斷。'
  },
  source: 'preset'
};
