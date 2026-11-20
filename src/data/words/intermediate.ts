import { WordAnalysis } from '../../types';

export const intermediate: WordAnalysis = {
    word: 'intermediate',
    ipa: '/ˌɪn.tɚˈmiː.di.ət/',
    partOfSpeech: 'adjective / noun (形容詞/名詞)',
    chineseMeaning: '中級的、中間的、過渡的；(名詞) 中間物、媒介物',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 前綴',
        morpheme: 'inter-',
        originalForm: 'inter- (拉丁語)',
        meaning: '在...之間 (between)',
        category: '空間/方向',
        grammaticalRole: '前綴'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'medi',
        originalForm: 'medius (拉丁語)',
        meaning: '中間的 (middle)',
        category: '核心概念',
        grammaticalRole: '形容詞字根'
      },
      {
        type: 'suffix',
        label: '🏷️ 字尾',
        morpheme: '-ate',
        originalForm: '-atus (拉丁語過去分詞字尾)',
        variantNote: '放在字根後面，表示「處於某種狀態」，這裡構成形容詞。',
        meaning: '處於...狀態的 (being in a state of)',
        category: '形容詞化',
        grammaticalRole: '形容詞後綴'
      }
    ],
    phonetic: {
      assimilationPath: 'inter- (之間) + medius (中間的) + -atus ➔ intermediatus ➔ intermediate',
      phoneticAnalysis: '這個字沒有明顯的前綴音變，inter- 直接接上 medi（中間），再加上表示「處於某狀態」的字尾 -ate。',
      ruleKey: 'inter- + medi + -ate (透明拼接)'
    },
    semantic: {
      prefixMeaning: '在...之間 (inter-)',
      rootCoreAction: '中間的 (medi < medius)',
      suffixGrammar: '處於...狀態的 (-ate)',
      modernMeaning: '位於兩個階段或程度之間，不高不低、承先啟後的過渡狀態',
      formulaDisplay: '{ 之間 (inter-) } + { 中間 (medi) } + { ...的 (-ate) } = 中級的、中間的 (intermediate)',
      literalLogic: '字面上是「在中間之間的」，用來形容程度介於初級與高級之間的過渡階段。'
    },
    familyTree: [
      { word: 'medium', formula: 'medi + -um', meaning: '媒介、媒體；中等的', level: 'Core', tags: ['TOEIC'] },
      { word: 'median', formula: 'medi + -an', meaning: '中位數；中間的', level: 'GRE', tags: ['GRE'] },
      { word: 'immediate', formula: 'im- (無/否定) + medi + -ate', meaning: '立即的（字面「中間沒有東西阻隔」）', level: 'TOEIC', tags: ['TOEIC'] },
      { word: 'mediate', formula: 'medi + -ate', meaning: '調解、居中協調', level: 'TOEFL', tags: ['TOEFL', 'GRE'] }
    ],
    memory: {
      cognatesDaily: 'intermediate level (中級程度), intermediate English class (中級英文班)',
      oneSentenceMnemonic: 'inter (之間) + medi (中間) + ate (...的) ➔ 「介於兩者之間」就是 intermediate (中級的)！',
      etymologicalOrigin: '拉丁文 intermedius（inter- 「之間」 + medius 「中間的」）',
      commonCollocations: [
        'beginner, intermediate, and advanced levels (初級、中級、高級)',
        'an intermediate step (過渡的步驟)'
      ],
      contrastiveTips: 'intermediate 強調「介於兩個明確階段之間」；moderate 則泛指「程度適中、不極端」，不一定有明確的分級架構。'
    },
    source: 'preset'
  };
