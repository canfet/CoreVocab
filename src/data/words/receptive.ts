import { WordAnalysis } from '../../types';

export const receptive: WordAnalysis = {
  word: 'receptive',
  ipa: '/rɪˈsep.tɪv/',
  partOfSpeech: 'adjective (形容詞)',
  chineseMeaning: '樂於接受的、願意接納（意見/新事物）的；感受性強的',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 前綴',
      morpheme: 're-',
      originalForm: 're- (拉丁語)',
      variantNote: 're- 在這裡不是「重複」，而是「回頭接住」的意思，把對方送過來的東西接回自己這邊。',
      meaning: '回、向後 (back)',
      category: '空間/回返',
      grammaticalRole: '形容詞前綴'
    },
    {
      type: 'root',
      label: '💎 字根',
      morpheme: 'cept',
      originalForm: 'capere / ceptus (拉丁語)',
      variantNote: '拉丁文動詞 capere（拿、抓）放進 re- 這種複合字時，字母 a 會弱化變成 i（capere ➔ recipere），而它的過去分詞形態則是 ceptus，這就是 -cept- 的由來。同一個動詞，因此在英文裡留下 -cip-（如 recipient）和 -cept-（如 receptive）兩種長相。',
      meaning: '拿、接住、抓取 (to take, seize)',
      category: '核心動作',
      grammaticalRole: '動作中心'
    },
    {
      type: 'suffix',
      label: '🏷️ 字尾',
      morpheme: '-ive',
      originalForm: '-ivus (拉丁語)',
      variantNote: '這個字尾加在動詞字根後面，會把它變成形容詞，意思是「有...傾向的、能夠...的」。',
      meaning: '有...傾向的 (tending to, having the quality of)',
      category: '形容詞化',
      grammaticalRole: '構成形容詞'
    }
  ],
  phonetic: {
    assimilationPath: 're- (回) + capere ➔ 母音弱化 recipere ➔ 過去分詞 receptus ➔ receptive',
    phoneticAnalysis: '拉丁文的 capere 放在字中間時，開頭的短母音 a 常常會弱化變成 i 或 e，這是拉丁文很常見的內部母音變化規則，跟英文的音變無關，是很久以前拉丁文自己發生的事。',
    dualStemInfo: {
      presentStem: 'cip- (如 recipient, participate)',
      supineStem: 'cept- (如 receptive, accept, concept)',
      meaning: '拿、接住 (take, seize)'
    },
    ruleKey: '拉丁雙詞幹 cip/cept'
  },
  semantic: {
    prefixMeaning: '回、向後 (re-)',
    rootCoreAction: '拿、接住 (cept)',
    suffixGrammar: '形容詞 (-ive)',
    modernMeaning: '對別人送來的想法、建議或刺激，抱持願意接住、不排斥的態度',
    formulaDisplay: '{ 回 (re-) } + { 接住 (cept) } + { 有...傾向的 (-ive) } = 樂於接受的 (receptive)',
    literalLogic: '把對方丟過來的東西「接回自己這邊」，引申成心態上願意接納新的想法或意見。'
  },
  familyTree: [
    { word: 'receive', formula: 're- + ceive (cept 變體)', meaning: '收到、接收', level: 'Core', tags: ['TOEIC'] },
    { word: 'reception', formula: 're- + cept + -ion', meaning: '接待（處）、招待會、接收（訊號）', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'accept', formula: 'ac- (ad- 朝向) + cept', meaning: '接受', level: 'Core', tags: ['TOEIC'] },
    { word: 'concept', formula: 'con- (共同) + cept', meaning: '概念（把想法整個抓在一起）', level: 'TOEIC', tags: ['TOEIC', 'TOEFL'] },
    { word: 'capture', formula: 'cap (抓) + -ture', meaning: '捕捉、攻佔', level: 'TOEIC', tags: ['TOEIC'] }
  ],
  memory: {
    cognatesDaily: 'receptive audience (願意接納的聽眾), receptive to feedback (樂於接受回饋)',
    oneSentenceMnemonic: 're (回) + cept (接住) + ive (有...傾向的) ➔ 「隨時準備把東西接回來」就是 receptive (樂於接受的)！',
    etymologicalOrigin: '來自拉丁文 recipere（re- + capere「拿、抓」），過去分詞形態 receptus 是 -cept- 的來源。',
    visualImagery: '想像一個人張開雙臂，不管別人丟過來的是什麼意見或建議，都願意伸手接住，而不是轉身閃避。',
    commonCollocations: ['receptive to new ideas (樂於接受新想法)', 'a receptive audience (一群樂於接納的聽眾)', 'remain receptive (保持開放的態度)'],
    contrastiveTips: 'receptive 強調「心態上樂於接納、願意傾聽」；open-minded 更廣泛地指「心胸開放、不預設立場」；responsive 則是「反應靈敏、迅速回應」，不一定跟接不接納有關。'
  },
  source: 'preset'
};
