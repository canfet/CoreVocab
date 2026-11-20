import { WordAnalysis } from '../../types';

export const prevent: WordAnalysis = {
  word: 'prevent',
  ipa: '/prɪˈvent/',
  partOfSpeech: 'verb (及物動詞)',
  chineseMeaning: '預防、阻止、防止（事情發生）',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 前綴',
      morpheme: 'pre-',
      originalForm: 'prae- (拉丁語)',
      variantNote: 'pre- 沒有音變，直接接在字根前面。',
      meaning: '在...之前 (before)',
      category: '時間順序',
      grammaticalRole: '動詞前綴'
    },
    {
      type: 'root',
      label: '💎 字根',
      morpheme: 'vent',
      originalForm: 'venire / ventus (拉丁語)',
      variantNote: '拉丁文動詞 venire（來）有兩種常見長相：一般動詞形態常用 -vene（如 convene, intervene），但過去分詞形態則是 -vent（如 prevent, invent, event）。',
      meaning: '來、到達 (to come)',
      category: '核心動作',
      grammaticalRole: '動作中心'
    }
  ],
  phonetic: {
    assimilationPath: 'prae- (在前) + venire (來) ➔ 拉丁文 praevenire (搶先到達) ➔ 英文 prevent',
    phoneticAnalysis: '拉丁文原意是「搶先一步到達、比別人先到」，後來意思慢慢收窄成「先下手擋住、阻止事情發生」，是常見的語意演變。',
    dualStemInfo: {
      presentStem: 'vene- (如 convene, intervene, avenue)',
      supineStem: 'vent- (如 prevent, invent, event, convention)',
      meaning: '來、到達 (come, arrive)'
    },
    ruleKey: '拉丁雙詞幹 vene/vent'
  },
  semantic: {
    prefixMeaning: '在...之前 (pre-)',
    rootCoreAction: '來、到達 (vent)',
    suffixGrammar: '及物動詞',
    modernMeaning: '在不好的事情發生之前，先採取行動讓它無法發生',
    formulaDisplay: '{ 之前 (pre-) } + { 到達 (vent) } = 預防、阻止 (prevent)',
    literalLogic: '拉丁文原意是「比事情本身先到達」，也就是搶先一步擋在它前面，讓它發生不了。'
  },
  familyTree: [
    { word: 'prevention', formula: 'prevent + -ion', meaning: '預防（名詞）', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'convene', formula: 'con- (共同) + vene', meaning: '召集、開會（大家一起來）', level: 'TOEFL', tags: ['TOEFL', 'GRE'] },
    { word: 'invent', formula: 'in- (向內) + vent', meaning: '發明（想法進到腦中）', level: 'Core', tags: ['TOEIC'] },
    { word: 'event', formula: 'e- (向外) + vent', meaning: '事件（結果冒出來）', level: 'Core', tags: ['TOEIC'] },
    { word: 'convention', formula: 'con- (共同) + vent + -ion', meaning: '大會、慣例', level: 'TOEIC', tags: ['TOEIC', 'TOEFL'] }
  ],
  memory: {
    cognatesDaily: 'prevent disease (預防疾病), crime prevention (預防犯罪)',
    oneSentenceMnemonic: 'pre (之前) + vent (來) ➔ 「搶先一步到達、擋在它前面」就是 prevent (預防)！',
    etymologicalOrigin: '來自拉丁文 praevenire（prae- + venire「來」），原意是「搶先到達」，後來演變成「阻止」。',
    visualImagery: '想像有人在門口張開雙臂，比壞消息更早一步抵達，把它擋在門外——這就是 prevent 的畫面。',
    commonCollocations: ['prevent disease / accidents (預防疾病/意外)', 'prevent someone from doing something (阻止某人做某事)', 'crime prevention (犯罪預防)'],
    contrastiveTips: 'prevent 強調「事前採取行動讓事情根本不會發生」；avoid 是「自己閃開、不去碰某件事」，主詞通常是自己；stop 泛指「讓正在進行的事情停下來」，時間點可以是事中而非事前。'
  },
  source: 'preset'
};
