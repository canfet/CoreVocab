import { WordAnalysis } from '../../types';

export const oblige: WordAnalysis = {
  word: 'oblige',
  ipa: '/əˈblaɪdʒ/',
  partOfSpeech: 'verb (及物動詞)',
  chineseMeaning: '迫使、責成（義務上）；施恩、幫忙',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 空間前綴',
      morpheme: 'ob-',
      originalForm: 'ob- (拉丁語)',
      variantNote: 'ob- 在 l 開頭的字根前面不會變形，直接拼接成 oblig-。',
      meaning: '朝向、對著、加在...之上 (toward, upon, against)',
      category: '空間/方向',
      grammaticalRole: '方向前綴'
    },
    {
      type: 'root',
      label: '💎 核心字根',
      morpheme: 'lig',
      originalForm: 'ligare / ligatus (拉丁語)',
      variantNote: 'ligare 是「綁、捆」的意思，完成被動分詞是 ligatus，這個字根也出現在 ligament（韌帶）、religion（宗教，字面上是「重新綁在一起」）等字裡。',
      meaning: '綁、捆、連結 (to bind, tie)',
      category: '核心動作',
      grammaticalRole: '動作中心'
    }
  ],
  phonetic: {
    assimilationPath: 'ob- (朝向/加諸於) + ligare (綁) ➔ obligare (綁在...身上) ➔ 古法語 obliger ➔ oblige',
    phoneticAnalysis: '這是一個沒有明顯音變的透明拼接字，ob- 直接接上 lig，字尾的 -e 是法語動詞借入英文後常見的拼寫方式（如 arrange, oblige, engage）。',
  },
  semantic: {
    prefixMeaning: '加諸在...身上 (ob-)',
    rootCoreAction: '綁、捆住 (lig < ligare)',
    suffixGrammar: '及物動詞',
    modernMeaning: '把一條「繩索」綁在某人身上，使他必須遵守某種責任或義務；也可以指主動幫忙對方，讓對方感覺「欠了人情」',
    formulaDisplay: '{ 加諸於 (ob-) } + { 綁住 (lig) } = 迫使、施恩 (oblige)',
    literalLogic: '字面上是「把義務的繩子綁在某人身上」，因此衍生出「使負有義務、必須做」的意思；如果是別人主動幫你這個忙，也會用 oblige 表示「施恩、幫忙」。'
  },
  familyTree: [
    { word: 'obligation', formula: 'oblige + -ation (名詞)', meaning: '義務、責任', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'obligatory', formula: 'oblige + -atory (形容詞)', meaning: '義務的、必須的', level: 'TOEFL', tags: ['TOEFL', 'GRE'] },
    { word: 'obliged', formula: 'oblige + -ed (形容詞)', meaning: '感激的；有義務的', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'ligament', formula: 'lig (綁) + -ament', meaning: '韌帶', level: 'GRE', tags: ['GRE'] },
    { word: 'religion', formula: 're- (再次) + lig (綁) + -ion', meaning: '宗教（字面：把人與信仰重新綁在一起）', level: 'Core', tags: ['TOEIC'] }
  ],
  memory: {
    cognatesDaily: 'be obliged to do something (有義務做某事), much obliged (非常感激), oblige a friend (幫朋友的忙)',
    oneSentenceMnemonic: 'ob (加諸於) + lig (綁住) ➔ 把責任的繩子「綁在身上」就是 oblige (使負有義務)！',
    etymologicalOrigin: '拉丁語 obligare（ob- 「加諸於」 + ligare 「綁」）',
    visualImagery: '想像一條無形的繩子把「義務」緊緊綁在你身上，讓你不得不去完成某件事，那就是 oblige 的畫面。',
    commonCollocations: ['be obliged to do (被迫要做)', 'legally obliged (法律上有義務)', 'happy to oblige (樂意幫忙)'],
    contrastiveTips: 'oblige 常用被動語態 be obliged to (有義務要)；force 語氣更強硬、帶有強迫的意味；require 則較中性，常用在規定或條件上。'
  },
  source: 'preset'
};
