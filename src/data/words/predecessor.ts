import { WordAnalysis } from '../../types';

export const predecessor: WordAnalysis = {
  word: 'predecessor',
  ipa: '/ˈpred.əˌses.ər/',
  partOfSpeech: 'noun (可數名詞)',
  chineseMeaning: '前任、前輩；被取代的事物（舊型號、舊版本等）',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 前綴',
      morpheme: 'pre-',
      originalForm: 'prae- (拉丁語)',
      variantNote: 'pre- 沒有音變，直接接在後面的整個 decessor 前面。',
      meaning: '在...之前 (before)',
      category: '時間順序',
      grammaticalRole: '前綴'
    },
    {
      type: 'prefix',
      label: '🚩 前綴',
      morpheme: 'de-',
      originalForm: 'de- (拉丁語)',
      variantNote: '這裡的 de- 表示「離開、往下」，跟 cess（走）搭配，意思是「走開、退下」，暗示這個人已經卸任離開了。',
      meaning: '離開、往下 (down, away)',
      category: '空間/方向',
      grammaticalRole: '內層前綴'
    },
    {
      type: 'root',
      label: '💎 字根',
      morpheme: 'cess',
      originalForm: 'cedere / cessus (拉丁語)',
      variantNote: '拉丁文動詞 cedere（走、讓步）的過去分詞詞幹是 cess-，跟 precede、access 是同一家族。',
      meaning: '走、退下 (to go, withdraw)',
      category: '核心動作',
      grammaticalRole: '動作中心'
    },
    {
      type: 'suffix',
      label: '🏷️ 字尾',
      morpheme: '-or',
      originalForm: '-or',
      variantNote: '這個字尾加在動詞後面，表示「做這件事的人或物」。',
      meaning: '執行者、做...的人 (one who does)',
      category: '行為者名詞化',
      grammaticalRole: '構成名詞'
    }
  ],
  phonetic: {
    assimilationPath: 'de- (離開) + cedere (走) ➔ decessor (退下的人) ➔ pre- (之前) + decessor ➔ praedecessor ➔ predecessor',
    phoneticAnalysis: '這個字是一層一層疊起來的：先有 de- + cess + -or 組成「卸任退下的人」，再加上 pre-，變成「在你之前就已經卸任退下的人」，也就是前任。',
    dualStemInfo: {
      presentStem: 'ced- (如 precede, recede, concede)',
      supineStem: 'cess- (如 predecessor, access, process)',
      meaning: '走、讓步 (go, yield)'
    },
    ruleKey: '多層構詞 pre- + de- + cess + -or'
  },
  semantic: {
    prefixMeaning: '之前 (pre-) + 離開 (de-)',
    rootCoreAction: '走、退下 (cess)',
    suffixGrammar: '行為者名詞 (-or)',
    modernMeaning: '在你接手某個職位、角色或型號之前，先坐在那個位置上、後來離開的人或事物',
    formulaDisplay: '{ 之前 (pre-) } + { 離開 (de-) } + { 走 (cess) } + { 的人 (-or) } = 前任、前輩 (predecessor)',
    literalLogic: '字面上是「在你之前就已經走開、卸任的人」，也就是你的前任。'
  },
  familyTree: [
    { word: 'successor', formula: 'suc- (sub- 在下方) + cess + -or', meaning: '繼任者、接班人（predecessor 的反義詞）', level: 'TOEFL', tags: ['TOEFL', 'GRE'] },
    { word: 'precede', formula: 'pre- + cede', meaning: '領先、在...之前發生', level: 'TOEFL', tags: ['TOEFL', 'GRE'] },
    { word: 'proceed', formula: 'pro- (向前) + ceed', meaning: '繼續進行、前進', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'ancestor', formula: 'ante- (在先) + cess + -or', meaning: '祖先、先人', level: 'TOEIC', tags: ['TOEIC'] }
  ],
  memory: {
    cognatesDaily: 'my predecessor (我的前任), the predecessor model (前一代機型)',
    oneSentenceMnemonic: 'pre (之前) + de (離開) + cess (走) + or (人) ➔ 「在你之前就已經退下離開的人」就是 predecessor (前任)！',
    etymologicalOrigin: '來自晚期拉丁文 praedecessor（prae- + decessor「退下的人」，decessor 又來自 decedere「離開、退下」）。',
    visualImagery: '想像一間辦公室的椅子，前一位主管起身離開後，你才走進來坐下——那位起身離開的人就是你的 predecessor。',
    commonCollocations: ['one\'s predecessor (某人的前任)', 'the predecessor company (前身公司)', 'follow in the footsteps of one\'s predecessor (追隨前任的腳步)'],
    contrastiveTips: 'predecessor 強調「你之前那個位置上的人或物」，帶有時間先後的對照；ancestor 是「血緣上的祖先」；forerunner 則泛指「在某個領域先驅性地開路的人或事物」，不一定有職位交接的關係。'
  },
  source: 'preset'
};
