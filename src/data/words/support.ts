import { WordAnalysis } from '../../types';

export const support: WordAnalysis = {
  word: 'support',
  ipa: '/səˈpɔːrt/',
  partOfSpeech: 'verb / noun (及物動詞/名詞)',
  chineseMeaning: '支持、支撐；支持、援助（名詞）',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 同化前綴',
      morpheme: 'sup-',
      originalForm: 'sub- (拉丁語)',
      variantNote: 'sub- 遇到 p 開頭的字根時，最後的 b 會同化成 p，變成 sup-（sub- ➔ sup-），兩個子音才唸得順口。',
      meaning: '在下方、由下往上 (under, up from below)',
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
    assimilationPath: 'sub- (在下方) ➔ 同化為 sup- + portare (攜帶) ➔ supportare ➔ 古法語 supporter ➔ support',
    phoneticAnalysis: 'sub- 的字尾 b 遇到 p 這個音，直接同化成 p，唸起來變成 sup-，跟後面的 port 連在一起更順口。',
    ruleKey: 'sub- ➔ sup- 前綴同化 (遇 p 全同化)'
  },
  semantic: {
    prefixMeaning: '在下方撐著 (sub- ➔ sup-)',
    rootCoreAction: '攜帶、搬運、扛著 (port < portare)',
    suffixGrammar: '及物動詞/名詞',
    modernMeaning: '從下方把重量「扛起來」，引申為在物理上撐住、或在精神/財務上給予支持與援助',
    formulaDisplay: '{ 在下方 (sup- < sub-) } + { 攜帶、扛住 (port) } = 支持、支撐 (support)',
    literalLogic: '字面上是「在底下把東西扛住、帶著它」，後來就引申成「在背後撐住某人或某個立場」，也就是支持、援助。'
  },
  familyTree: [
    { word: 'supportive', formula: 'support + -ive (形容詞)', meaning: '支持的、給予支持的', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'supporter', formula: 'support + -er (人)', meaning: '支持者、擁護者', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'export', formula: 'ex- (向外) + port (攜帶)', meaning: '出口、輸出', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'import', formula: 'im- (向內) + port (攜帶)', meaning: '進口、輸入', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'transport', formula: 'trans- (橫越) + port (攜帶)', meaning: '運輸、運送', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'portable', formula: 'port (攜帶) + -able', meaning: '可攜帶的、輕便的', level: 'TOEIC', tags: ['TOEIC'] }
  ],
  memory: {
    cognatesDaily: 'support a family (養家), support a cause (支持某項訴求), technical support (技術支援)',
    oneSentenceMnemonic: 'sup (在下方) + port (扛住、攜帶) ➔ 在底下「把重量扛起來」就是 support (支持、支撐)！',
    etymologicalOrigin: '拉丁語 supportare（sub- 「在下方」 + portare 「攜帶」）',
    visualImagery: '想像一根柱子從下方穩穩撐住整棟建築的重量，那份「在底下扛住」的力量就是 support。',
    commonCollocations: ['support a decision (支持決定)', 'financial support (財務支援)', 'support system (支援系統)'],
    contrastiveTips: 'support 泛指各種形式的支持（實質、財務、情感）；sustain 則更強調「長時間維持住」某種狀態，不易輕易中斷。'
  },
  source: 'preset'
};
