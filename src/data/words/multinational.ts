import { WordAnalysis } from '../../types';

export const multinational: WordAnalysis = {
  word: 'multinational',
  ipa: '/ˌmʌltiˈnæʃənəl/',
  partOfSpeech: 'adjective (形容詞) / noun (名詞，跨國公司)',
  chineseMeaning: '跨國的、多國的；(名詞) 跨國公司',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 數量前綴',
      morpheme: 'multi-',
      originalForm: 'multus (拉丁語)',
      variantNote: 'multi- 是透明前綴，不管後面接子音或母音開頭的字，都直接連接、不會變形',
      meaning: '多、眾多 (many, much)',
      category: '數量',
      grammaticalRole: '數量前綴'
    },
    {
      type: 'root',
      label: '💎 核心字根',
      morpheme: 'nation',
      originalForm: 'natio, nation- (拉丁語)',
      variantNote: 'natio 源自動詞 nasci「出生」，原意是「同一次出生的一群人」，後來變成「民族、國家」的意思',
      meaning: '民族、國家 (nation)',
      category: '核心概念',
      grammaticalRole: '名詞字根'
    },
    {
      type: 'suffix',
      label: '🏷️ 形容詞字尾',
      morpheme: '-al',
      originalForm: '-alis (拉丁語)',
      variantNote: '這是把名詞變成形容詞的常見字尾，像 national, natural, cultural 都有它',
      meaning: '...的 (relating to)',
      category: '詞性轉換',
      grammaticalRole: '形容詞化字尾'
    }
  ],
  phonetic: {
    assimilationPath: 'multus (多) + natio (國家/民族) + -alis (...的) ➔ national ➔ multinational',
    phoneticAnalysis: 'multi- 直接加在 national 前面，不會有音變，唸的時候重音落在 na- 這個音節：mul-ti-NA-tion-al。',
    ruleKey: '透明前綴直接複合 (無音變)'
  },
  semantic: {
    prefixMeaning: '眾多 (multi-)',
    rootCoreAction: '同一民族/國家 (nation < natio)',
    suffixGrammar: '形容詞化 (-al)',
    modernMeaning: '業務或組織範圍橫跨許多不同國家',
    formulaDisplay: '{ 眾多 (multi-) } + { 國家 (nation) } + { ...的 (-al) } = 跨國的 (multinational)',
    literalLogic: '字面上是「牽涉很多個國家的」，用來形容一間公司或一個組織的業務遍布許多國家。'
  },
  familyTree: [
    { word: 'multicultural', formula: 'multi- + cultur(e) + -al', meaning: '多元文化的', level: 'TOEFL', tags: ['TOEFL'] },
    { word: 'multitask', formula: 'multi- + task', meaning: '一心多用、同時處理多項任務', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'international', formula: 'inter- (之間) + national', meaning: '國際的（國與國之間的）', level: 'Core', tags: ['TOEIC'] },
    { word: 'nationality', formula: 'nation + -al + -ity', meaning: '國籍', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'multiply', formula: 'multi- + ply (摺疊)', meaning: '乘、增加、繁殖', level: 'TOEIC', tags: ['TOEIC'] }
  ],
  memory: {
    cognatesDaily: 'multinational company (跨國公司), multinational corporation (跨國企業)',
    oneSentenceMnemonic: 'multi (很多) + national (國家的) ➔ 「跟很多國家都有關係的」就是 multinational (跨國的)！',
    etymologicalOrigin: '拉丁文 multus（多）加上 natio（國家、民族）組合而成，是英語裡直接複合、沒有音變的典型例子。',
    visualImagery: '想像一間公司的招牌上同時掛著好幾個國家的國旗，代表它的生意「橫跨很多 (multi) 國家 (national)」。',
    commonCollocations: ['a multinational company/corporation (跨國公司)', 'multinational forces (多國部隊)'],
    contrastiveTips: 'multinational 強調「公司或組織的業務跨越很多國家」；international 強調「兩個以上國家之間的往來、關係」，範圍不一定像 multinational 那麼廣泛。'
  },
  source: 'preset'
};
