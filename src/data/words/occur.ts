import { WordAnalysis } from '../../types';

export const occur: WordAnalysis = {
  word: 'occur',
  ipa: '/əˈkɜːr/',
  partOfSpeech: 'verb (不及物動詞)',
  chineseMeaning: '發生、出現；（想法）浮現於腦海',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 同化前綴',
      morpheme: 'oc-',
      originalForm: 'ob- (拉丁語)',
      variantNote: 'ob- 遇到 c 開頭的字根時，最後的 b 會同化成 c，變成 oc-（ob- ➔ oc-），子音才唸得順口。',
      meaning: '朝向、迎面而來 (toward, against, to meet)',
      category: '空間/方向',
      grammaticalRole: '方向前綴'
    },
    {
      type: 'root',
      label: '💎 核心字根',
      morpheme: 'cur',
      originalForm: 'currere / cursus (拉丁語)',
      variantNote: 'currere 是「跑」的意思，現在式字幹是 curr-，occur 用的正是這個現在式字幹；它的完成被動分詞字幹 cursus 則出現在 course、excursion 這類字裡。',
      meaning: '跑、跑動 (to run)',
      category: '核心動作',
      grammaticalRole: '動作中心'
    }
  ],
  phonetic: {
    assimilationPath: 'ob- (朝向) ➔ 同化為 oc- + currere (跑) ➔ occurrere (跑去迎面遇上) ➔ occur',
    phoneticAnalysis: 'ob- 的字尾 b 遇到 c 這個音，直接同化成 c，唸起來變成 oc-，跟後面重複的 rr 連在一起發音更順。',
    ruleKey: 'ob- ➔ oc- 前綴同化 (遇 c 全同化)',
    dualStemInfo: {
      presentStem: 'currere / curr- (現在式字幹)',
      supineStem: 'cursus / curs- (完成被動分詞字幹)',
      meaning: '跑、奔走 (occur 用 curr- 字幹，course、cursory 等字則用 curs- 字幹)'
    }
  },
  semantic: {
    prefixMeaning: '朝向、迎面而來 (oc- < ob-)',
    rootCoreAction: '跑、發生 (cur < currere)',
    suffixGrammar: '不及物動詞',
    modernMeaning: '事情「跑到」眼前來，引申為發生、出現；想法「跑進」腦海裡，就是靈光乍現、突然想到',
    formulaDisplay: '{ 朝向、迎面而來 (oc- < ob-) } + { 跑 (cur) } = 發生、浮現 (occur)',
    literalLogic: '字面上是「跑到面前來」，用在事件上就是「發生」；用在念頭上，就是「這個想法突然跑進我的腦海」。'
  },
  familyTree: [
    { word: 'occurrence', formula: 'occur + -ence (名詞)', meaning: '發生的事、事件', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'concur', formula: 'con- (一起) + cur (跑)', meaning: '同時發生；同意', level: 'TOEFL', tags: ['TOEFL', 'GRE'] },
    { word: 'recur', formula: 're- (再次) + cur (跑)', meaning: '再次發生、復發', level: 'TOEFL', tags: ['TOEFL', 'IELTS'] },
    { word: 'incur', formula: 'in- (向內) + cur (跑)', meaning: '招致、招惹（損失、費用）', level: 'GRE', tags: ['GRE', 'TOEFL'] },
    { word: 'current', formula: 'cur (跑) + -rent (形容詞)', meaning: '目前的；水流、電流', level: 'Core', tags: ['TOEIC'] }
  ],
  memory: {
    cognatesDaily: 'the accident occurred (意外發生了), it occurred to me that... (我突然想到...), occur naturally (自然發生)',
    oneSentenceMnemonic: 'oc (迎面而來) + cur (跑) ➔ 事情「跑到眼前」就是 occur (發生)！',
    etymologicalOrigin: '拉丁語 occurrere（ob- 「朝向」 + currere 「跑」），原意是「跑去迎面遇上」',
    visualImagery: '想像一個念頭像小人一樣，突然從你腦海深處「跑」到你面前，那個瞬間就是 occur to you。',
    commonCollocations: ['it occurred to me (我突然想到)', 'occur frequently (經常發生)', 'a rare occurrence (罕見的事件)'],
    contrastiveTips: 'occur 較正式、常用於書面語描述事件發生；happen 較口語、日常對話中更常用，兩者意思相近但語域不同。'
  },
  source: 'preset'
};
