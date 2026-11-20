import { WordAnalysis } from '../../types';

export const quadruple: WordAnalysis = {
  word: 'quadruple',
  ipa: '/kwɑːˈdruːpəl/',
  partOfSpeech: 'adjective (形容詞) / verb (及物/不及物動詞) / noun (名詞)',
  chineseMeaning: '四倍的、由四部分組成的；使成四倍、變成四倍',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 數量前綴',
      morpheme: 'quadr-',
      originalForm: 'quattuor (拉丁語)',
      variantNote: 'quattuor 在複合字中常縮短成 quadr-，像 quadrant, quadrilateral 都是這樣',
      meaning: '四 (four)',
      category: '數量',
      grammaticalRole: '數量前綴'
    },
    {
      type: 'suffix',
      label: '🏷️ 倍數字尾',
      morpheme: '-uple',
      originalForm: '-plus (拉丁語)',
      variantNote: '這個字尾來自拉丁文 plicare「摺疊」的相關形式，摺疊幾次就是幾倍，double, triple, quadruple 都用同一套倍數字尾邏輯',
      meaning: '...倍 (fold, times)',
      category: '倍數',
      grammaticalRole: '倍數字尾'
    }
  ],
  phonetic: {
    assimilationPath: 'quattuor (四) + -plus (摺疊/倍) ➔ 拉丁文 quadruplus ➔ 古法文 quadruple ➔ 英文 quadruple',
    phoneticAnalysis: 'quadr- 加上 -uple 幾乎照抄拉丁原文的拼法進入英文，沒有明顯的音變；重音落在第二音節：qua-DRU-ple。',
    ruleKey: '拉丁倍數字尾直接借入 (無音變)'
  },
  semantic: {
    prefixMeaning: '四 (quadr-)',
    rootCoreAction: '摺疊倍數 (-uple < plicare 的相關形式)',
    suffixGrammar: '倍數形容詞/動詞',
    modernMeaning: '把某個數量增加到原本的四倍',
    formulaDisplay: '{ 四 (quadr-) } + { ...倍 (-uple) } = 四倍 (quadruple)',
    literalLogic: '想像把一張紙摺了又摺，摺成四層堆疊起來，數量就變成原本的四倍。'
  },
  familyTree: [
    { word: 'triple', formula: 'tri- (三) + -ple', meaning: '三倍的；使成三倍', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'double', formula: 'du- (二) + -ble', meaning: '兩倍的；使加倍', level: 'Core', tags: ['TOEIC'] },
    { word: 'quadrant', formula: 'quadr- (四) + -ant (四分之一份)', meaning: '象限', level: 'TOEFL', tags: ['TOEFL'] },
    { word: 'quadrilateral', formula: 'quadri- (四) + later (邊) + -al', meaning: '四邊形', level: 'GRE', tags: ['GRE'] },
    { word: 'tetragon', formula: 'tetra- (希臘語的四) + gon (角)', meaning: '四邊形（希臘字根版本，與 quadr- 對照）', level: 'GRE', tags: ['GRE'] }
  ],
  memory: {
    cognatesDaily: 'quadruple the profits (讓利潤變成四倍), a quadruple bypass (心臟四重繞道手術)',
    oneSentenceMnemonic: 'quadr (四) + uple (倍) ➔ 「摺成四倍」就是 quadruple (四倍的)！',
    etymologicalOrigin: '拉丁文 quadruplus，由 quattuor（四）加上表示倍數的 -plus 組成。',
    visualImagery: '想像一張紙連續對摺，最後疊成四層厚，代表數量變成四倍。',
    commonCollocations: ['quadruple in size (規模變成四倍)', 'quadruple the amount (數量變成四倍)'],
    contrastiveTips: 'quadruple 是精確的「四倍」；multiply 沒有指定倍數，只是泛指「增加、變多」，要講清楚倍數時才用 double/triple/quadruple 這類字。'
  },
  source: 'preset'
};
