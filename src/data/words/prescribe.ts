import { WordAnalysis } from '../../types';

export const prescribe: WordAnalysis = {
  word: 'prescribe',
  ipa: '/prɪˈskraɪb/',
  partOfSpeech: 'verb (及物動詞)',
  chineseMeaning: '開處方、開藥；規定、指示（正式建議或要求）',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 前綴',
      morpheme: 'pre-',
      originalForm: 'prae- (拉丁語)',
      variantNote: 'pre- 沒有音變，直接接在字根前面。',
      meaning: '在...之前 (before)',
      category: '時間順序',
      grammaticalRole: '動詞前綴'
    },
    {
      type: 'root',
      label: '💎 字根',
      morpheme: 'scribe',
      originalForm: 'scribere / scriptus (拉丁語)',
      variantNote: '拉丁文動詞 scribere（寫）有兩種常見長相：現在詞幹是 scrib-（如 prescribe, describe, subscribe），過去分詞詞幹則是 script-（如 prescription, description, script）。',
      meaning: '寫 (to write)',
      category: '書寫動作',
      grammaticalRole: '動作中心'
    }
  ],
  phonetic: {
    assimilationPath: 'prae- (之前) + scribere (寫) ➔ 拉丁文 praescribere ➔ 英文 prescribe',
    phoneticAnalysis: '這個字直接從拉丁文借入，保留了 -scribe 的寫法；它的名詞形態改用過去分詞的 -script，是同一個動詞的兩張臉。',
    dualStemInfo: {
      presentStem: 'scrib- (如 prescribe, describe, subscribe)',
      supineStem: 'script- (如 prescription, description, manuscript)',
      meaning: '寫 (write)'
    },
    ruleKey: '拉丁雙詞幹 scrib/script'
  },
  semantic: {
    prefixMeaning: '在...之前 (pre-)',
    rootCoreAction: '寫 (scribe)',
    suffixGrammar: '及物動詞',
    modernMeaning: '在事情發生前，用書面正式寫下該怎麼做，可以是醫師開的藥方，也可以是法規要求',
    formulaDisplay: '{ 之前 (pre-) } + { 寫 (scribe) } = 開處方、規定 (prescribe)',
    literalLogic: '字面上是「事先寫下來」，醫生把藥方事先寫好交給病人，就是 prescribe。'
  },
  familyTree: [
    { word: 'prescription', formula: 'pre- + script + -ion', meaning: '處方、藥方；規定', level: 'TOEIC', tags: ['TOEIC', 'TOEFL'] },
    { word: 'describe', formula: 'de- (完全) + scribe', meaning: '描述、形容（把細節完全寫出來）', level: 'Core', tags: ['TOEIC'] },
    { word: 'subscribe', formula: 'sub- (在下方) + scribe', meaning: '訂閱、簽署同意（在文件下方簽名）', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'inscribe', formula: 'in- (在...之上) + scribe', meaning: '刻寫、銘刻', level: 'TOEFL', tags: ['TOEFL', 'GRE'] },
    { word: 'manuscript', formula: 'manu (手) + script', meaning: '手稿、原稿', level: 'TOEFL', tags: ['TOEFL', 'GRE'] }
  ],
  memory: {
    cognatesDaily: 'prescribe medication (開藥), prescribed by law (法律規定的)',
    oneSentenceMnemonic: 'pre (事先) + scribe (寫) ➔ 「事先寫下該怎麼做」就是 prescribe (開處方、規定)！',
    etymologicalOrigin: '來自拉丁文 praescribere（prae- + scribere「寫」）。',
    visualImagery: '想像醫生在看診結束後，拿起筆在處方箋上寫下藥名和劑量——這就是 prescribe 的畫面。',
    commonCollocations: ['prescribe medication / antibiotics (開藥/開抗生素)', 'prescribed by law (依法規定)', 'a prescribed method (規定的方法)'],
    contrastiveTips: 'prescribe 強調「以權威身份正式指定該怎麼做」，常見於醫療或法規語境；recommend 只是「建議」，沒有強制性；require 泛指「要求」，不限定是誰以何種身份提出。'
  },
  source: 'preset'
};
