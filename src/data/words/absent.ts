import { WordAnalysis } from '../../types';

export const absent: WordAnalysis = {
  word: 'absent',
  ipa: '/ˈæb.sənt/ (形容詞); /æbˈsɛnt/ (動詞，反身用法 absent oneself)',
  partOfSpeech: 'adjective / verb (形容詞/及物動詞，反身用法)',
  chineseMeaning: '缺席的、不在場的（形容詞）；使缺席、自行迴避（動詞，常用 absent oneself）',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 前綴',
      morpheme: 'ab-',
      originalForm: 'ab- (拉丁語)',
      variantNote: 'ab- 在母音 e 前面沒有變形，直接拼接',
      meaning: '離開、不在 (away, off)',
      category: '空間/方向',
      grammaticalRole: '方向前綴'
    },
    {
      type: 'root',
      label: '💎 字根',
      morpheme: 'sent',
      originalForm: 'esse (拉丁語「是、存在」)，現在分詞 sont-',
      variantNote: 'esse(是、存在)這個動詞特別不規則，古典拉丁文裡幾乎沒有獨立的現在分詞，只殘留在 absent、present 這類複合字裡的 -sent 形式',
      meaning: '存在、在場 (being)',
      category: '核心概念',
      grammaticalRole: '分詞詞幹'
    }
  ],
  phonetic: {
    assimilationPath: 'ab- (離開) + esse (存在) ➔ 現在分詞 absens/absentem ➔ absent',
    phoneticAnalysis: '這是沒有音變的透明拼接字。esse(是、存在) 的現在分詞形式只殘留在少數複合字裡，absent(不在場)跟 present(在場)剛好是一組反義詞，都是用同一套「正在存在」的分詞形式組成的。',
    ruleKey: 'esse 分詞詞幹 -sent (罕見殘留形式)'
  },
  semantic: {
    prefixMeaning: '離開、不在 (ab-)',
    rootCoreAction: '存在、在場 (sent < esse)',
    suffixGrammar: '形容詞/反身動詞',
    modernMeaning: '人或東西「離開了應該存在的地方」，也就是不在場、缺席',
    formulaDisplay: '{ 離開 (ab-) } + { 存在 (sent) } = 缺席的、不在場的 (absent)',
    literalLogic: '字面上是「存在的狀態離開了」，也就是「不在場、缺席」。'
  },
  familyTree: [
    { word: 'absence', formula: 'absent + -ce', meaning: '缺席、不存在', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'present', formula: 'prae- (在前) + sent', meaning: '在場的、目前的（absent 的反義詞）', level: 'Core', tags: ['TOEIC'] },
    { word: 'absentee', formula: 'absent + -ee', meaning: '缺席者、缺勤者', level: 'TOEFL', tags: ['TOEFL'] },
    { word: 'absent-minded', formula: 'absent + minded', meaning: '心不在焉的', level: 'TOEIC', tags: ['TOEIC'] }
  ],
  memory: {
    cognatesDaily: 'absent from school (曠課), absent-minded (心不在焉的), absent without leave (擅離職守/AWOL)',
    oneSentenceMnemonic: 'ab (離開) + sent (存在) ➔ 「存在的狀態離開了」就是 absent (缺席的)！',
    etymologicalOrigin: '拉丁文 absens, absentis，是動詞 abesse (ab- 「離開」 + esse 「是、存在」) 的現在分詞',
    visualImagery: '想像教室裡點名時，某個座位空空如也，那個「應該在場卻不在」的空位就是 absent。',
    commonCollocations: [
      'absent from class/work (缺課/缺勤)',
      'absent-minded professor (心不在焉的教授)',
      'absent oneself from a meeting (自行缺席會議)'
    ],
    contrastiveTips: 'absent (形容詞) 語氣比 away 更正式，常用於書面或考勤紀錄；動詞用法 absent oneself 一定要加反身代名詞，不能單獨說 "he absented the meeting"。'
  },
  source: 'preset'
};
