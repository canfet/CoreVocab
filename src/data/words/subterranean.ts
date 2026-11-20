import { WordAnalysis } from '../../types';

export const subterranean: WordAnalysis = {
    word: 'subterranean',
    ipa: '/ˌsʌb.təˈreɪ.ni.ən/',
    partOfSpeech: 'adjective (形容詞，名詞用法為罕見古義)',
    chineseMeaning: '地下的、地底的；秘密的、隱蔽的',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 空間前綴',
        morpheme: 'sub-',
        originalForm: 'sub-',
        meaning: '在...下面 (under, below)',
        category: '垂直深度',
        grammaticalRole: '方位前綴'
      },
      {
        type: 'root',
        label: '💎 地理字根',
        morpheme: 'terra',
        originalForm: 'terra',
        meaning: '土地、陸地 (earth, land)',
        category: '核心地理',
        grammaticalRole: '概念中心'
      },
      {
        type: 'suffix',
        label: '🏷️ 字尾',
        morpheme: '-anean',
        originalForm: '-aneus',
        variantNote: '這個字尾放在字根後面，會把它變成形容詞，表示「位於...的」',
        meaning: '位於...的',
        category: '形容詞後綴',
        grammaticalRole: '空間形容詞'
      }
    ],
    phonetic: {
      assimilationPath: 'sub- + terra + -anean ➔ subterranean',
      phoneticAnalysis: 'sub- 遇到 t 開頭的字，不用變身，直接保持原本的樣子。',
      ruleKey: 'sub- + terra'
    },
    semantic: {
      prefixMeaning: '在下方 (sub-)',
      rootCoreAction: '土地 (terra)',
      suffixGrammar: '位於...處的 (-anean)',
      modernMeaning: '處於地表深層之下的',
      formulaDisplay: '{ 在下面 (sub-) } + { 大地 (terra) } + { 的 } = 地下的 (subterranean)',
      literalLogic: '意思就是「在土地下面」。'
    },
    familyTree: [
      { word: 'terrain', formula: 'terra + -ain', meaning: '地形、地勢' },
      { word: 'Mediterranean', formula: 'medi- + terra + -anean', meaning: '地中海' }
    ],
    memory: {
      cognatesDaily: 'subway (地鐵), territory (領土)',
      oneSentenceMnemonic: 'sub (地下) + terra (土地) ➔ 地下 subterranean！',
      etymologicalOrigin: '古拉丁文 subterrāneus'
    },
    source: 'preset'
  };
