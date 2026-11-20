import { WordAnalysis } from '../../types';

export const obvious: WordAnalysis = {
  word: 'obvious',
  ipa: '/ˈɑːbviəs/',
  partOfSpeech: 'adjective (形容詞)',
  chineseMeaning: '明顯的、顯而易見的',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 空間前綴',
      morpheme: 'ob-',
      originalForm: 'ob- (拉丁語)',
      variantNote: 'ob- 在 v 開頭的字根前面不會變形，直接拼接成 obvi-。',
      meaning: '對著、迎面、擋在路上 (against, in the way of)',
      category: '空間/方向',
      grammaticalRole: '方向前綴'
    },
    {
      type: 'root',
      label: '💎 核心字根',
      morpheme: 'vi',
      originalForm: 'via (拉丁語)',
      meaning: '道路、路徑 (way, road)',
      category: '場所/路徑',
      grammaticalRole: '核心名詞字根'
    },
    {
      type: 'suffix',
      label: '🏷️ 形容詞字尾',
      morpheme: '-ous',
      originalForm: '-us (拉丁語形容詞字尾)',
      variantNote: '拉丁文的形容詞 obvius 原本字尾就是 -us；英文借入後，依照 previous、devious 這類同源字的拼寫習慣，把字尾改拼成更常見的 -ous。',
      meaning: '具有...性質的 (full of, characterized by)',
      category: '形容詞化',
      grammaticalRole: '形容詞後綴'
    }
  ],
  phonetic: {
    assimilationPath: 'ob- (擋在路上) + via (道路) + -us/-ous (...的) ➔ obvius ➔ obvious',
    phoneticAnalysis: '這是一個沒有明顯輔音同化的透明拼接字，ob- 直接接上以母音開頭的 via。拉丁文原本的形容詞字尾 -us 在英文裡被拼成更常見的 -ous 型態。',
  },
  semantic: {
    prefixMeaning: '擋在路上、迎面而來 (ob-)',
    rootCoreAction: '道路 (vi < via)',
    suffixGrammar: '形容詞 (-ous)',
    modernMeaning: '「正好站在路中間、迎面就會遇到」的東西，引申為一眼就能看到、不用刻意尋找的，也就是顯而易見的',
    formulaDisplay: '{ 擋在路上 (ob-) } + { 道路 (vi) } + { ...的 (-ous) } = 明顯的 (obvious)',
    literalLogic: '字面上是「正好在你必經之路上」，任何人走這條路都會遇到、看到，所以引申為「顯而易見、不言而喻」。'
  },
  familyTree: [
    { word: 'obviously', formula: 'obvious + -ly (副詞)', meaning: '明顯地、顯然', level: 'Core', tags: ['TOEIC'] },
    { word: 'previous', formula: 'pre- (在前) + vi (路) + -ous', meaning: '先前的、之前的', level: 'Core', tags: ['TOEIC'] },
    { word: 'devious', formula: 'de- (偏離) + vi (路) + -ous', meaning: '不正當的、迂迴的', level: 'GRE', tags: ['GRE'] },
    { word: 'via', formula: 'via (拉丁語，路)', meaning: '經由、透過', level: 'Core', tags: ['TOEIC'] },
    { word: 'trivial', formula: 'tri- (三) + vi (路) + -al', meaning: '瑣碎的、不重要的（字面：三岔路口人人都會經過的閒話）', level: 'TOEFL', tags: ['TOEFL', 'GRE'] }
  ],
  memory: {
    cognatesDaily: 'an obvious mistake (明顯的錯誤), for obvious reasons (基於顯而易見的原因), it is obvious that... (很明顯...)',
    oneSentenceMnemonic: 'ob (擋在路上) + vi (道路) + ous (...的) ➔ 「正好擋在你必經之路上」的東西當然是 obvious (顯而易見的)！',
    etymologicalOrigin: '拉丁語 obvius（ob- 「擋在路上」 + via 「道路」），原意是「迎面遇到的、擋在路上的」',
    visualImagery: '想像走在路上，一個又大又醒目的招牌直接立在你必經的道路正中央，想不看到都難，那就是 obvious。',
    commonCollocations: ['an obvious reason/mistake (顯而易見的原因/錯誤)', 'state the obvious (說出顯而易見的事)', 'for obvious reasons (原因顯而易見)'],
    contrastiveTips: 'obvious 強調「一眼就能看出來」；apparent 語氣較委婉，有時暗示「表面上看起來是這樣，但不一定是事實」。'
  },
  source: 'preset'
};
