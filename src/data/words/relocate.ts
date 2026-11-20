import { WordAnalysis } from '../../types';

export const relocate: WordAnalysis = {
    word: 'relocate',
    ipa: '/ˌriːˈloʊ.keɪt/',
    partOfSpeech: 'verb (及物/不及物動詞)',
    chineseMeaning: '重新安置、搬遷、遷移（公司總部/家庭）',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 前綴',
        morpheme: 're-',
        originalForm: 're-',
        meaning: '重新、再次 (again, anew)',
        category: '重複/變更',
        grammaticalRole: '前綴'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'loc',
        originalForm: 'locus',
        meaning: '場所、地點 (place)',
        category: '核心概念',
        grammaticalRole: '概念中心'
      },
      {
        type: 'suffix',
        label: '🏷️ 字尾',
        morpheme: '-ate',
        originalForm: '-ate',
        variantNote: '這個字尾放在字根後面，會把它變成動詞，意思是「讓它變成...、去做這件事」',
        meaning: '使動 (to cause to be in)',
        category: '致使動詞',
        grammaticalRole: '構成動詞'
      }
    ],
    phonetic: {
      assimilationPath: 're- + locus + -ate ➔ relocate',
      phoneticAnalysis: 're- 沒有變身，直接跟後面組成一個字。',
      ruleKey: 're- + loc'
    },
    semantic: {
      prefixMeaning: '重新 (re-)',
      rootCoreAction: '安置場所 (loc)',
      suffixGrammar: '致使動詞 (-ate)',
      modernMeaning: '將人員、機構或設備移動並安置到新的地理位置',
      formulaDisplay: '{ 重新 (re-) } + { 位置 (loc) } + { 做 (-ate) } = 重新安置、搬遷 (relocate)',
      literalLogic: '重新找一個新的位置，把東西安置在那裡。'
    },
    familyTree: [
      { word: 'relocation', formula: 'relocate + -ion', meaning: '搬遷、重新安置 (名詞)' },
      { word: 'allocate', formula: 'ad- ➔ al- + loc + -ate', meaning: '分配、配置' }
    ],
    memory: {
      cognatesDaily: 'relocate headquarters (搬遷總部)',
      oneSentenceMnemonic: 're (重新) + loc (位置) + ate ➔ 「換個新位置」就是 relocate (搬遷)！',
      etymologicalOrigin: '古拉丁文 re-（重新） + locāre（放置）'
    },
    source: 'preset'
  };
