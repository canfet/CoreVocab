import { WordAnalysis } from '../../types';

export const sparse: WordAnalysis = {
    word: 'sparse',
    ipa: '/spɑːrs/',
    partOfSpeech: 'adjective (形容詞)',
    chineseMeaning: '稀疏的、零落的、稀少單薄的',
    morphemes: [
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'sparse',
        originalForm: 'sparsus (spargere 之過去分詞幹)',
        meaning: '被撒開的、零散分佈的 (scattered)',
        category: '分佈狀態',
        grammaticalRole: '核心概念'
      }
    ],
    phonetic: {
      assimilationPath: '拉丁分詞 sparsus ➔ 現代英語 sparse (同源 PIE *(s)perg- ➔ spark)',
      phoneticAnalysis: '古拉丁文的動詞 spargere (散開) 換了一種寫法變成 sparsus，直接被英文拿來用。',
      ruleKey: '拉丁 Supine 幹 sparsus'
    },
    semantic: {
      prefixMeaning: '無前綴',
      rootCoreAction: '被四散撒開 (sparsus)',
      suffixGrammar: '形容詞',
      modernMeaning: '分佈間隔很寬、密度極低或數量極少',
      formulaDisplay: '{ 被零星撒落 (sparsus) } = 稀疏的、零落的 (sparse)',
      literalLogic: '像種子被隨意散落各處一樣稀疏。'
    },
    familyTree: [
      { word: 'sparsity', formula: 'sparse + -ity', meaning: '稀疏、稀少' },
      { word: 'disperse', formula: 'dis- + spargere', meaning: '驅散、分散' },
      { word: 'spark', formula: '*(s)perg-', meaning: '火花' }
    ],
    memory: {
      cognatesDaily: 'sparse population (稀疏的人口), sparse hair (稀疏的頭髮)',
      oneSentenceMnemonic: 'sparse (散開了) ➔ 零零散散就是 sparse (稀疏的)！',
      etymologicalOrigin: '古拉丁文 sparsus（是 spargere「散開」這個字換了一種寫法的樣子）'
    },
    source: 'preset'
  };
