import { WordAnalysis } from '../../types';

export const recite: WordAnalysis = {
  word: 'recite',
  ipa: '/rɪˈsaɪt/',
  partOfSpeech: 'verb (及物/不及物動詞)',
  chineseMeaning: '背誦、朗誦；正式陳述、逐條列舉',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 前綴',
      morpheme: 're-',
      originalForm: 're- (拉丁語)',
      variantNote: '這裡的 re- 不是「重複做兩次」，而是有「大聲喊出來、公開講出來」的加強語氣，強調把記在心裡的內容「唸出來」。',
      meaning: '大聲',
      category: '強調/向外',
      grammaticalRole: '動詞前綴'
    },
    {
      type: 'root',
      label: '💎 字根',
      morpheme: 'cit',
      originalForm: 'citare (拉丁語)',
      variantNote: '拉丁文 citare 意思是「呼喚、召集、使人動起來」，是 ciere（引發、驅動）的加強說法，後來衍生出「大聲唸出來、引用」的意思。',
      meaning: '呼喚、召集、引發 (to call, summon, set in motion)',
      category: '言語動作',
      grammaticalRole: '動作中心'
    },
    {
      type: 'suffix',
      label: '🏷️ 動詞字尾',
      morpheme: '-e',
      originalForm: '-er (古法文動詞字尾)',
      variantNote: '這個不發音的 e 是英文從古法文借動詞時常見的痕跡，本身沒有意思，只是讓這個字看起來像英文動詞。',
      meaning: '（動詞標記，無實義）',
      category: '動詞化',
      grammaticalRole: '構成動詞'
    }
  ],
  phonetic: {
    assimilationPath: 're- + citare ➔ 古法文 reciter ➔ 英文 recite',
    phoneticAnalysis: '這個字經過古法文轉手，字尾的 -are 掉了變成不發音的 -e，重音落在第二音節 cite 上。',
    ruleKey: 're- + cit (拉丁動詞經法文簡化)'
  },
  semantic: {
    prefixMeaning: '大聲地 (re-)',
    rootCoreAction: '召喚、引發言語 (cit)',
    suffixGrammar: '及物/不及物動詞',
    modernMeaning: '把事先記住或準備好的內容，正式、完整地說出來給別人聽',
    formulaDisplay: '{ 大聲地 (re-) } + { 呼喚/引發 (cit) } = 背誦、朗誦、陳述 (recite)',
    literalLogic: '把原本存在腦海裡的東西「呼喚出來」，說給別人聽，就是背誦或陳述。'
  },
  familyTree: [
    { word: 'citation', formula: 'cit + -ation', meaning: '引用、傳票、（因表現優良獲得的）表揚', level: 'TOEFL', tags: ['TOEFL', 'GRE'] },
    { word: 'cite', formula: 'cit + -e', meaning: '引用、引述（出處/例子）', level: 'TOEIC', tags: ['TOEIC', 'TOEFL'] },
    { word: 'excite', formula: 'ex- (向外) + cit + -e', meaning: '使興奮、激起', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'incite', formula: 'in- (向內/使) + cit + -e', meaning: '煽動、激起（負面情緒或行動）', level: 'TOEFL', tags: ['TOEFL', 'GRE'] },
    { word: 'recital', formula: 'recite + -al', meaning: '獨奏會、詳細講述', level: 'TOEIC', tags: ['TOEIC'] }
  ],
  memory: {
    cognatesDaily: 'recite a poem (背誦一首詩), recite one\'s vows (唸出誓言)',
    oneSentenceMnemonic: 're (大聲地) + cit (呼喚) + e ➔ 「把記在心裡的東西大聲呼喚出來」就是 recite (背誦)！',
    etymologicalOrigin: '來自拉丁文 recitare（re- + citare「召喚、催促」），經古法文 reciter 進入英文。',
    visualImagery: '想像學生站在台上，把前一晚背好的課文一字不漏地大聲唸出來給全班聽。',
    commonCollocations: ['recite a poem / prayer (背誦詩/禱詞)', 'recite from memory (憑記憶背誦)', 'recite the facts (逐條陳述事實)'],
    contrastiveTips: 'recite 強調「憑記憶完整唸出來」，常用於詩、誓詞；quote 是「引用別人說過或寫過的一句話」；narrate 是「敘述一個故事或事件的經過」。'
  },
  source: 'preset'
};
