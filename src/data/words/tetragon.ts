import { WordAnalysis } from '../../types';

export const tetragon: WordAnalysis = {
  word: 'tetragon',
  ipa: '/ˈtɛtrəˌɡɑːn/',
  partOfSpeech: 'noun (名詞)',
  chineseMeaning: '四邊形、四角形',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 數量前綴',
      morpheme: 'tetra-',
      originalForm: 'tettares / téssares (希臘語)',
      variantNote: '這是希臘文的「四」，跟拉丁文的 quadr- 意思一樣，只是分別用在不同語源的字裡：tetragon 用希臘字根 gon，quadrant 用拉丁字根',
      meaning: '四 (four)',
      category: '數量',
      grammaticalRole: '數量前綴'
    },
    {
      type: 'root',
      label: '💎 核心字根',
      morpheme: 'gon',
      originalForm: 'gōnia (希臘語)',
      variantNote: '這個字根專門用在幾何圖形的名稱裡，像 polygon, pentagon, hexagon 都有它',
      meaning: '角、角度 (angle, corner)',
      category: '幾何圖形',
      grammaticalRole: '名詞字根'
    }
  ],
  phonetic: {
    assimilationPath: 'tettares (四) + gōnia (角) ➔ 希臘文 tetragōnon ➔ 英文 tetragon',
    phoneticAnalysis: '從希臘文直接借入英文，拼法和發音都很貼近原文，重音在第一音節：TET-ra-gon。',
    ruleKey: '希臘語幾何字根直接複合'
  },
  semantic: {
    prefixMeaning: '四 (tetra-)',
    rootCoreAction: '角、角度 (gon < gōnia)',
    suffixGrammar: '幾何圖形名詞',
    modernMeaning: '由四個角、四條邊組成的平面圖形',
    formulaDisplay: '{ 四 (tetra-) } + { 角 (gon) } = 四邊形 (tetragon)',
    literalLogic: '字面上就是「有四個角的圖形」，是幾何學裡「四邊形」的一種說法。'
  },
  familyTree: [
    { word: 'polygon', formula: 'poly- (多) + gon (角)', meaning: '多邊形', level: 'TOEFL', tags: ['TOEFL'] },
    { word: 'pentagon', formula: 'penta- (五) + gon (角)', meaning: '五邊形', level: 'Core', tags: ['TOEIC'] },
    { word: 'hexagon', formula: 'hexa- (六) + gon (角)', meaning: '六邊形', level: 'Core', tags: ['TOEIC'] },
    { word: 'quadrilateral', formula: 'quadri- (拉丁語的四) + later (邊) + -al', meaning: '四邊形（拉丁字根對照版本）', level: 'GRE', tags: ['GRE'] },
    { word: 'quadrant', formula: 'quadr- (四) + -ant', meaning: '象限', level: 'TOEFL', tags: ['TOEFL'] }
  ],
  memory: {
    cognatesDaily: '數學課本裡常作為 quadrilateral 的同義詞出現',
    oneSentenceMnemonic: 'tetra (四) + gon (角) ➔ 「有四個角」就是 tetragon (四邊形)！',
    etymologicalOrigin: '希臘文 tetragōnon，由 tettares（四）加上 gōnia（角）組成。',
    visualImagery: '想像用四根木棍釘出四個角，圍成一個四邊形。',
    commonCollocations: ['a regular tetragon (正四邊形，即正方形)'],
    contrastiveTips: '英文日常更常用拉丁字根的 quadrilateral 來說「四邊形」；tetragon 是希臘字根版本，較少見於日常對話，多出現在數學或幾何學術語裡，意思上和 quadrilateral 幾乎相同。'
  },
  source: 'preset'
};
