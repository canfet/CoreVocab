import { WordAnalysis } from '../../types';

export const polygon: WordAnalysis = {
  word: 'polygon',
  ipa: '/ˈpɑːliˌɡɑːn/',
  partOfSpeech: 'noun (名詞)',
  chineseMeaning: '多邊形',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 數量前綴',
      morpheme: 'poly-',
      originalForm: 'polys (希臘語)',
      variantNote: 'poly- 後面接母音開頭的字根時通常不必變形，直接連接，像 polygon, polygamy 都是這樣',
      meaning: '多、許多 (many)',
      category: '數量',
      grammaticalRole: '數量前綴'
    },
    {
      type: 'root',
      label: '💎 核心字根',
      morpheme: 'gon',
      originalForm: 'gōnia (希臘語)',
      variantNote: '跟 tetragon, pentagon 用的是同一個希臘字根',
      meaning: '角、角度 (angle, corner)',
      category: '幾何圖形',
      grammaticalRole: '名詞字根'
    }
  ],
  phonetic: {
    assimilationPath: 'polys (多) + gōnia (角) ➔ 希臘文 polygōnon ➔ 英文 polygon',
    phoneticAnalysis: '直接從希臘文借入，沒有明顯音變，重音在第一音節：PO-ly-gon。',
    ruleKey: '希臘語幾何字根直接複合'
  },
  semantic: {
    prefixMeaning: '多 (poly-)',
    rootCoreAction: '角、角度 (gon)',
    suffixGrammar: '幾何圖形名詞',
    modernMeaning: '由三個以上的角和邊組成的封閉平面圖形',
    formulaDisplay: '{ 多 (poly-) } + { 角 (gon) } = 多邊形 (polygon)',
    literalLogic: '字面上是「有很多角的圖形」，泛指三角形以上、邊數不限的封閉圖形。'
  },
  familyTree: [
    { word: 'tetragon', formula: 'tetra- (四) + gon (角)', meaning: '四邊形（與 polygon 對照的固定邊數版本）', level: 'GRE', tags: ['GRE'] },
    { word: 'pentagon', formula: 'penta- (五) + gon (角)', meaning: '五邊形', level: 'Core', tags: ['TOEIC'] },
    { word: 'hexagon', formula: 'hexa- (六) + gon (角)', meaning: '六邊形', level: 'Core', tags: ['TOEIC'] },
    { word: 'polymer', formula: 'poly- (多) + mer (部分)', meaning: '聚合物', level: 'TOEFL', tags: ['TOEFL'] },
    { word: 'polyglot', formula: 'poly- (多) + glot (語言)', meaning: '通曉多種語言的人', level: 'GRE', tags: ['GRE'] }
  ],
  memory: {
    cognatesDaily: 'regular polygon (正多邊形), convex polygon (凸多邊形)',
    oneSentenceMnemonic: 'poly (多) + gon (角) ➔ 「角很多」就是 polygon (多邊形)！',
    etymologicalOrigin: '希臘文 polygōnon，由 polys（多）加上 gōnia（角）組成。',
    visualImagery: '想像一個角一個角慢慢加上去，圍成一個複雜的多邊形。',
    commonCollocations: ['a convex/concave polygon (凸/凹多邊形)'],
    contrastiveTips: 'polygon 泛指「邊數不限、三邊以上」的圖形；tetragon/pentagon/hexagon 是「邊數固定」的特定圖形，是 polygon 底下更精確的種類。'
  },
  source: 'preset'
};
