import { WordAnalysis } from '../../types';

export const perspicacious: WordAnalysis = {
    word: 'perspicacious',
    ipa: '/ˌpɝː.spəˈkeɪ.ʃəs/',
    partOfSpeech: 'adjective (形容詞)',
    chineseMeaning: '敏銳的、有洞察力的、目光銳利的',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 前綴',
        morpheme: 'per-',
        originalForm: 'per-',
        meaning: '貫穿、徹底、完全 (through, completely)',
        category: '極致/貫穿',
        grammaticalRole: '前綴加強'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'spic',
        originalForm: 'specere',
        meaning: '看、注視、洞悉 (to look, see)',
        category: '視覺感知',
        grammaticalRole: '核心概念'
      },
      {
        type: 'suffix',
        label: '🏷️ 傾向字尾',
        morpheme: '-acious',
        originalForm: '-āx + -ōsus',
        variantNote: '這是古拉丁文兩個字尾黏在一起，專門用來說「很愛做某件事、傾向很強烈」',
        meaning: '極度擅長...的 (sharp at)',
        category: '性向修飾',
        grammaticalRole: '形容詞修飾'
      }
    ],
    phonetic: {
      assimilationPath: 'per- + spic- (元音弱化: spec ➔ spic) + -acious ➔ perspicacious',
      phoneticAnalysis: 'spec 這個字根，前面加上 per- 之後，中間的母音會悄悄換成 i，變成 spic-，唸起來才會更順。',
      dualStemInfo: {
        presentStem: 'spec- / spic-',
        supineStem: 'spect-',
        meaning: '看、審視'
      },
      ruleKey: '元音弱化 spec ➔ spic'
    },
    semantic: {
      prefixMeaning: '徹底穿透 (per-)',
      rootCoreAction: '審視 (spic)',
      suffixGrammar: '極善於...的 (-acious)',
      modernMeaning: '具有極強洞察力，能一眼看穿事物本質',
      formulaDisplay: '{ 徹底穿透 } + { 審視 } + { 善於 } = 敏銳洞察的 (perspicacious)',
      literalLogic: '能夠徹底看穿事物本質。'
    },
    familyTree: [
      { word: 'perspective', formula: 'per- + spect + -ive', meaning: '視角、觀點' },
      { word: 'perspicuous', formula: 'per- + spic + -uous', meaning: '清晰易懂的' }
    ],
    memory: {
      cognatesDaily: 'perspective (觀點), suspect (嫌犯)',
      oneSentenceMnemonic: 'per (穿透) + spic (看) ➔ 一眼看穿 = 洞察敏銳！',
      etymologicalOrigin: '古拉丁文 perspicāx'
    },
    source: 'preset'
  };
