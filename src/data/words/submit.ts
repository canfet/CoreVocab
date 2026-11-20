import { WordAnalysis } from '../../types';

export const submit: WordAnalysis = {
  word: 'submit',
  ipa: '/səbˈmɪt/',
  partOfSpeech: 'verb (及物/不及物動詞)',
  chineseMeaning: '提交、呈交；屈服、順從',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 空間前綴',
      morpheme: 'sub-',
      originalForm: 'sub- (拉丁語)',
      variantNote: 'sub- 在這個字裡沒有變形，直接接在 m 開頭的字根前面。要注意的是，同樣是 sub- 加 m 開頭的字，在別的字裡卻會同化（例如 summon 就是 sub- 變成 sum- 的例子），所以同一個前綴在不同的字裡不一定會用同一種變化方式。',
      meaning: '在下方、往下 (under, below)',
      category: '空間/方向',
      grammaticalRole: '方向前綴'
    },
    {
      type: 'root',
      label: '💎 核心字根',
      morpheme: 'mit',
      originalForm: 'mittere / missus (拉丁語)',
      variantNote: 'mittere 是「送出」的意思，現在式字幹是 mitt-；它的完成被動分詞（supine）字幹是 missus，後來很多英文字都是從這個 miss- 字幹變出來的，例如 mission、permission。',
      meaning: '送出、投送 (to send, let go)',
      category: '核心動作',
      grammaticalRole: '動作中心'
    }
  ],
  phonetic: {
    assimilationPath: 'sub- (在下方) + mittere (送出) ➔ submittere (送到下面、呈上) ➔ submit',
    phoneticAnalysis: 'sub- 在這個字裡保持原形，沒有跟著後面的 m 變化。真正的變化發生在字根本身：mittere 的現在式字幹是 mitt-，但完成被動分詞字幹是 miss-，這兩個字幹會分別出現在不同的英文衍生字裡（-mit 系列 vs -miss 系列）。',
    ruleKey: 'mit / miss 雙字幹交替'
  },
  semantic: {
    prefixMeaning: '往下、朝下 (sub-)',
    rootCoreAction: '送出、遞交 (mit < mittere)',
    suffixGrammar: '及物/不及物動詞',
    modernMeaning: '把文件或請求「送到」上級或權威者手中，引申為正式提交；也指把自己放低「送到」對方之下，引申為屈服讓步',
    formulaDisplay: '{ 在下方 (sub-) } + { 送出 (mit) } = 提交、屈服 (submit)',
    literalLogic: '字面上是「把東西送到某人下面」，也就是恭敬地呈交上去；用在人身上，就變成「把自己放低送到對方之下」，也就是屈服、順從。'
  },
  familyTree: [
    { word: 'submission', formula: 'submit + -ion (名詞)', meaning: '提交；順從、屈服', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'submissive', formula: 'submit + -ive (形容詞)', meaning: '順從的、逆來順受的', level: 'TOEFL', tags: ['TOEFL'] },
    { word: 'permit', formula: 'per- (通過) + mit (送)', meaning: '允許；許可證', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'transmit', formula: 'trans- (穿越) + mit (送)', meaning: '傳送、傳輸', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'emit', formula: 'e- (向外) + mit (送)', meaning: '發出、散發（光、聲音、氣體）', level: 'TOEFL', tags: ['TOEFL'] },
    { word: 'mission', formula: 'miss (送、派遣) + -ion', meaning: '任務、使命', level: 'Core', tags: ['TOEIC'] }
  ],
  memory: {
    cognatesDaily: 'submit an application (提交申請), submit a report (交報告), submit to pressure (向壓力屈服)',
    oneSentenceMnemonic: 'sub (在下方) + mit (送出) ➔ 把文件「往下送」給上級，就是 submit (提交)！',
    etymologicalOrigin: '拉丁語 submittere（sub- 「在下方」 + mittere 「送」），原意是「送到某人之下」',
    visualImagery: '想像你把寫好的報告，恭敬地遞給坐在高位的主管，那個「往下呈遞」的動作就是 submit。',
    commonCollocations: ['submit an application/report (提交申請/報告)', 'submit to authority (向權威屈服)', 'submit a proposal (提交提案)'],
    contrastiveTips: 'submit 強調「正式送交」或「屈服讓步」；send 只是單純寄送，沒有「呈交給上級」的正式感。'
  },
  source: 'preset'
};
