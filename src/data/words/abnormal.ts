import { WordAnalysis } from '../../types';

export const abnormal: WordAnalysis = {
  word: 'abnormal',
  ipa: '/æbˈnɔːr.məl/',
  partOfSpeech: 'adjective (形容詞)',
  chineseMeaning: '異常的、不正常的、反常的',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 前綴',
      morpheme: 'ab-',
      originalForm: 'ab- (拉丁語)',
      variantNote: 'ab- 在這個字裡沒有變形，直接接在 n 開頭的字根前面',
      meaning: '離開、偏離 (away from, off)',
      category: '空間/偏離',
      grammaticalRole: '前綴'
    },
    {
      type: 'root',
      label: '💎 字根',
      morpheme: 'norm',
      originalForm: 'norma (拉丁語)',
      variantNote: 'norma 原本是木匠用來確認直角的「角尺」，用來檢查東西是不是「合乎規矩」，後來引申為「標準、準則」',
      meaning: '準則、標準 (rule, standard)',
      category: '核心概念',
      grammaticalRole: '核心語義'
    },
    {
      type: 'suffix',
      label: '🏷️ 形容詞字尾',
      morpheme: '-al',
      originalForm: '-ālis (拉丁語)',
      variantNote: '加在名詞後面，把它變成形容詞，意思是「跟...有關的」',
      meaning: '...性質的 (relating to)',
      category: '形容詞化',
      grammaticalRole: '構成形容詞'
    }
  ],
  phonetic: {
    assimilationPath: 'ab- (偏離) + norma (準則) + -ālis ➔ abnormālis ➔ abnormal',
    phoneticAnalysis: '這是沒有明顯音變的透明拼接字，ab- 直接接上以子音 n 開頭的字根。這個字其實經過一次拼字改造：中古時期原本有個字 abnormous（直接來自拉丁文 abnormis），到了 19 世紀因為 normal 越來越常用，才被改拼成現在看起來更「配對」的 abnormal。',
    ruleKey: 'ab- 無同化直接拼接'
  },
  semantic: {
    prefixMeaning: '偏離 (ab-)',
    rootCoreAction: '準則、標準 (norm < norma)',
    suffixGrammar: '...性質的 (-al)',
    modernMeaning: '偏離了一般公認的標準或常態，用來形容數值、行為或狀態不符合預期的常規',
    formulaDisplay: '{ 偏離 (ab-) } + { 準則 (norm) } + { ...性質的 (-al) } = 異常的 (abnormal)',
    literalLogic: '字面上是「偏離了那把用來衡量對錯的尺」，引申為不符合一般標準、反常。'
  },
  familyTree: [
    { word: 'normal', formula: 'norma + -al', meaning: '正常的、常態的', level: 'Core', tags: ['TOEIC'] },
    { word: 'norm', formula: 'norma', meaning: '準則、規範、常態', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'normalize', formula: 'normal + -ize', meaning: '使正常化、標準化', level: 'TOEFL', tags: ['TOEFL'] },
    { word: 'subnormal', formula: 'sub- (低於) + normal', meaning: '低於正常標準的', level: 'GRE', tags: ['GRE'] },
    { word: 'enormous', formula: 'e- (超出) + norm + -ous', meaning: '巨大的（超出常規尺度的）', level: 'TOEIC', tags: ['TOEIC'] }
  ],
  memory: {
    cognatesDaily: 'abnormal behavior (異常行為), abnormal weather (異常天氣), abnormally high (異常地高)',
    oneSentenceMnemonic: 'ab (偏離) + norm (標準) + al (...的) ➔ 「偏離了那把量尺」就是 abnormal (異常的)！',
    etymologicalOrigin: '拉丁文 norma（原意是木匠的「角尺」）加上 ab- 「偏離」而成，19 世紀受 normal 影響重新拼寫定型',
    visualImagery: '想像木匠手上那把用來校正直角的角尺 (norma)，一旦東西「偏離 (ab-)」了這把尺量出來的標準，就是 abnormal。',
    commonCollocations: [
      'abnormal behavior/growth (異常行為/生長)',
      'nothing abnormal (沒有異常)',
      'abnormally cold (異常寒冷)'
    ],
    contrastiveTips: 'abnormal 語氣中性偏科學/醫學，描述「不符合常態」；weird、strange 語氣比較口語，帶有主觀「奇怪」的感覺。'
  },
  source: 'preset'
};
