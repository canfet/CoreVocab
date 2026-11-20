import { WordAnalysis } from '../../types';

export const circumvent: WordAnalysis = {
    word: 'circumvent',
    ipa: '/ˌsɝː.kəmˈvent/',
    partOfSpeech: 'verb (及物動詞)',
    chineseMeaning: '規避、繞過（法律、規定或困難障礙）',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 前綴',
        morpheme: 'circum-',
        originalForm: 'circum',
        meaning: '圍繞、環繞、四周 (around)',
        category: '幾何軌跡',
        grammaticalRole: '空間修飾'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'vent',
        originalForm: 'venīre / ventus',
        meaning: '來、行走、到達 (to come, arrive)',
        category: '核心位移',
        grammaticalRole: '動作中心'
      }
    ],
    phonetic: {
      assimilationPath: 'circum- + vent ➔ circumvent',
      phoneticAnalysis: '古拉丁文動詞 venīre（來）有兩種長相：ven- 和 vent-。',
      dualStemInfo: {
        presentStem: 'ven- (如 convene, intervene, revenue)',
        supineStem: 'vent- (如 event, invent, prevent, venture, adventure)',
        meaning: '來到、出現 (come, arrive)'
      },
      ruleKey: '拉丁雙詞幹 ven/vent'
    },
    semantic: {
      prefixMeaning: '環繞 (circum-)',
      rootCoreAction: '走過來 (vent)',
      suffixGrammar: '動詞幹',
      modernMeaning: '巧妙地繞過法規、限制或困境以達到目的',
      formulaDisplay: '{ 繞圈 (circum-) } + { 走/來 (vent) } = 規避、繞行 (circumvent)',
      literalLogic: '不走正面，從旁邊繞過去的意思。'
    },
    familyTree: [
      { word: 'prevent', formula: 'pre- + vent', meaning: '預防、阻止' },
      { word: 'convene', formula: 'con- + ven', meaning: '召集、集合' }
    ],
    memory: {
      cognatesDaily: 'circle (圓), prevent (預防)',
      oneSentenceMnemonic: 'circum (繞圈) + vent (走) ➔ 繞著走就是規避！',
      etymologicalOrigin: '來自古拉丁文 circumvenīre。'
    },
    source: 'preset'
  };
