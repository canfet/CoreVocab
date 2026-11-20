import { WordAnalysis } from '../../types';

export const dislocate: WordAnalysis = {
    word: 'dislocate',
    ipa: '/ˈdɪs.loʊ.keɪt/',
    partOfSpeech: 'verb (及物動詞)',
    chineseMeaning: '使（關節）脫臼；打亂、擾亂（計畫/生活秩序）',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 前綴',
        morpheme: 'dis-',
        originalForm: 'dis-',
        meaning: '分離、離開、相反 (apart, away)',
        category: '分離極性',
        grammaticalRole: '前綴'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'loc',
        originalForm: 'locus',
        meaning: '位置、關節定位 (place, spot)',
        category: '核心概念',
        grammaticalRole: '概念中心'
      },
      {
        type: 'suffix',
        label: '🏷️ 字尾',
        morpheme: '-ate',
        originalForm: '-ate',
        variantNote: '這個字尾放在字根後面，會把它變成動詞，意思是「讓它變成...、去做這件事」',
        meaning: '使...成為',
        category: '致使動詞',
        grammaticalRole: '構成動詞'
      }
    ],
    phonetic: {
      assimilationPath: 'dis- + loc + -ate ➔ dislocate',
      phoneticAnalysis: 'dis- 在 l 音前保持原形 dis-。',
      ruleKey: 'dis- + loc'
    },
    semantic: {
      prefixMeaning: '離開原位 (dis-)',
      rootCoreAction: '位置 (loc)',
      suffixGrammar: '致使動詞 (-ate)',
      modernMeaning: '使骨頭脫離關節窩；或使原本運作順暢的秩序產生混亂',
      formulaDisplay: '{ 離開 (dis-) } + { 位置 (loc) } + { 致使 (-ate) } = 使脫臼、擾亂 (dislocate)',
      literalLogic: '致使其離開原有的 location。'
    },
    familyTree: [
      { word: 'dislocation', formula: 'dislocate + -ion', meaning: '脫臼、混亂 (名詞)' },
      { word: 'allocate', formula: 'ad- ➔ al- + loc + -ate', meaning: '分配、配置' }
    ],
    memory: {
      cognatesDaily: 'dislocated shoulder (肩膀脫臼)',
      oneSentenceMnemonic: 'dis (離開) + loc (位置) ➔ 「離開正常位置」就是 dislocate (脫臼/擾亂)！',
      etymologicalOrigin: 'dis- + locāre'
    },
    source: 'preset'
  };
