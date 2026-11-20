import { WordAnalysis } from '../../types';

export const prepare: WordAnalysis = {
  word: 'prepare',
  ipa: '/prɪˈper/',
  partOfSpeech: 'verb (及物/不及物動詞)',
  chineseMeaning: '準備、預備（人/事物）',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 前綴',
      morpheme: 'pre-',
      originalForm: 'prae- (拉丁語)',
      variantNote: 'pre- 沒有音變，直接接在字根前面。',
      meaning: '事先、預先 (before, beforehand)',
      category: '時間順序',
      grammaticalRole: '動詞前綴'
    },
    {
      type: 'root',
      label: '💎 字根',
      morpheme: 'par',
      originalForm: 'parare (拉丁語)',
      variantNote: '拉丁文動詞 parare 意思是「使...就緒、備妥」，是一個很能生的字根，還衍生出 repair（修理，原意「重新備妥」）、apparatus（裝置）等字。',
      meaning: '使準備好、備妥 (to make ready)',
      category: '核心動作',
      grammaticalRole: '動作中心'
    }
  ],
  phonetic: {
    assimilationPath: 'prae- (事先) + parare (備妥) ➔ 拉丁文 praeparare ➔ 英文 prepare',
    phoneticAnalysis: '這個字整個從拉丁文借進英文，拼法和發音都沒有太大改變，重音落在中間的 pare 上。',
    ruleKey: 'pre- + par (拉丁動詞直接借入)'
  },
  semantic: {
    prefixMeaning: '事先 (pre-)',
    rootCoreAction: '備妥、使準備好 (par)',
    suffixGrammar: '及物/不及物動詞',
    modernMeaning: '在事情發生之前，把需要的條件、心態或物品都安排妥當',
    formulaDisplay: '{ 事先 (pre-) } + { 備妥 (par) } = 準備 (prepare)',
    literalLogic: '「事先把東西弄好」，就是準備。'
  },
  familyTree: [
    { word: 'preparation', formula: 'prepare + -ation', meaning: '準備、預備工作', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'repair', formula: 're- (重新) + pair (par 變體)', meaning: '修理、修復（重新使備妥）', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'separate', formula: 'se- (分開) + par + -ate', meaning: '使分開、分離的（獨立分開備妥）', level: 'TOEIC', tags: ['TOEIC', 'IELTS'] },
    { word: 'apparatus', formula: 'ap- (ad- 朝向) + par + -atus', meaning: '裝置、器械', level: 'TOEFL', tags: ['TOEFL', 'GRE'] }
  ],
  memory: {
    cognatesDaily: 'prepare a meal (準備一頓飯), prepare for an exam (準備考試)',
    oneSentenceMnemonic: 'pre (事先) + par (備妥) + e ➔ 「事先把東西弄好」就是 prepare (準備)！',
    etymologicalOrigin: '來自拉丁文 praeparare（prae- + parare「備妥」）。',
    visualImagery: '想像廚師在客人上門之前，把所有食材都事先切好、擺放整齊——這就是 prepare 的畫面。',
    commonCollocations: ['prepare for an exam / interview (準備考試/面試)', 'prepare a meal (準備一頓飯)', 'be well prepared (準備充分)'],
    contrastiveTips: 'prepare 泛指「一般性的準備動作」；arrange 偏向「安排細節、時間或順序」；equip 則是「配備工具或技能」，強調給予具體的裝備或能力。'
  },
  source: 'preset'
};
