import { WordAnalysis } from '../../types';

export const precede: WordAnalysis = {
  word: 'precede',
  ipa: '/prɪˈsiːd/',
  partOfSpeech: 'verb (及物/不及物動詞)',
  chineseMeaning: '領先、在...之前發生、優先於',
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
      morpheme: 'cede',
      originalForm: 'cedere / cessus (拉丁語)',
      variantNote: '拉丁文動詞 cedere（走、讓步）有兩種常見長相：現在詞幹是 ced-（如 precede, recede, concede），過去分詞詞幹則是 cess-（如 access, process, success）。',
      meaning: '走、移動、發生 (to go, move, happen)',
      category: '核心動作',
      grammaticalRole: '動作中心'
    }
  ],
  phonetic: {
    assimilationPath: 'prae- (之前) + cedere (走) ➔ 拉丁文 praecedere ➔ 英文 precede',
    phoneticAnalysis: '這個字直接從拉丁文借入，拼法保留了 -cede 的寫法，跟它的過去分詞 -cess 是同一個動詞的兩張臉。',
    dualStemInfo: {
      presentStem: 'ced- (如 precede, recede, concede)',
      supineStem: 'cess- (如 access, process, success, excess)',
      meaning: '走、讓步 (go, yield)'
    },
    ruleKey: '拉丁雙詞幹 ced/cess'
  },
  semantic: {
    prefixMeaning: '在...之前 (pre-)',
    rootCoreAction: '走、發生 (cede)',
    suffixGrammar: '及物/不及物動詞',
    modernMeaning: '在時間、順序或地位上，走在別的人事物的前面',
    formulaDisplay: '{ 之前 (pre-) } + { 走 (cede) } = 領先、在先 (precede)',
    literalLogic: '字面上就是「走在前面」，可以指時間順序，也可以指地位高低。'
  },
  familyTree: [
    { word: 'precedent', formula: 'pre- + ced + -ent', meaning: '先例、判例', level: 'GRE', tags: ['GRE', 'TOEFL'] },
    { word: 'proceed', formula: 'pro- (向前) + ceed (ced 變體)', meaning: '繼續進行、前進', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'succeed', formula: 'suc- (sub- 在下方) + ceed', meaning: '成功；繼承', level: 'Core', tags: ['TOEIC'] },
    { word: 'recede', formula: 're- (向後) + cede', meaning: '後退、消退', level: 'TOEFL', tags: ['TOEFL', 'GRE'] },
    { word: 'concede', formula: 'con- (完全) + cede', meaning: '讓步、承認', level: 'TOEFL', tags: ['TOEFL', 'GRE'] }
  ],
  memory: {
    cognatesDaily: 'precede the main event (在主要活動之前發生), the year preceding the war (戰爭前一年)',
    oneSentenceMnemonic: 'pre (之前) + cede (走) ➔ 「走在別人前面」就是 precede (領先、在先)！',
    etymologicalOrigin: '來自拉丁文 praecedere（prae- + cedere「走」）。',
    visualImagery: '想像遊行隊伍裡，開路的旗手總是走在隊伍最前頭——這就是 precede 的畫面。',
    commonCollocations: ['precede an event (在某事件之前發生)', 'be preceded by (在...之前有)', 'the preceding chapter (前一章)'],
    contrastiveTips: 'precede 強調「時間或順序上走在前面」，主詞通常是事件或事物；lead 泛指「帶領、領先」，可以用在人身上；precede 較正式，常見於書面語。'
  },
  source: 'preset'
};
