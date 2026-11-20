import { WordAnalysis } from '../../types';

export const prepay: WordAnalysis = {
  word: 'prepay',
  ipa: '/ˌpriːˈpeɪ/',
  partOfSpeech: 'verb (及物動詞)',
  chineseMeaning: '預付、預先支付（費用）',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 前綴',
      morpheme: 'pre-',
      originalForm: 'prae- (拉丁語)',
      variantNote: 'pre- 直接加在動詞 pay 前面，不會變形。',
      meaning: '預先、事先 (before, in advance)',
      category: '時間順序',
      grammaticalRole: '動詞前綴'
    },
    {
      type: 'root',
      label: '💎 字根',
      morpheme: 'pay',
      originalForm: 'pacare (拉丁語) ➔ paiier (古法語)',
      variantNote: '拉丁文 pacare 本來的意思是「使...平息、安撫」（跟 pax「和平」是同一家族），因為古時候「付清欠款」就能讓債主消氣、平息紛爭，所以這個字後來就演變成「付款」的意思。',
      meaning: '（原意）安撫、平息 ➔ 付款 (to appease ➔ to pay)',
      category: '核心動作',
      grammaticalRole: '動作中心'
    }
  ],
  phonetic: {
    assimilationPath: 'pacare (平息) ➔ 古法文 paiier ➔ 英文 pay ➔ prepay',
    phoneticAnalysis: 'pay 進入英文後已經完全定型，pre- 加在前面完全不會改變拼法或音節結構。',
    ruleKey: 'pre- + pay (透明拼接)'
  },
  semantic: {
    prefixMeaning: '預先 (pre-)',
    rootCoreAction: '付款 (pay)',
    suffixGrammar: '及物動詞',
    modernMeaning: '在商品或服務尚未真正提供之前，就先把費用付清',
    formulaDisplay: '{ 預先 (pre-) } + { 付款 (pay) } = 預付 (prepay)',
    literalLogic: '字面上就是「事先付款」，還沒享受服務就先付清了。'
  },
  familyTree: [
    { word: 'payment', formula: 'pay + -ment', meaning: '付款、款項', level: 'Core', tags: ['TOEIC'] },
    { word: 'repay', formula: 're- (回) + pay', meaning: '償還、回報', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'payee', formula: 'pay + -ee (被動接受者)', meaning: '收款人', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'payable', formula: 'pay + -able', meaning: '應付的、可支付的', level: 'TOEIC', tags: ['TOEIC'] }
  ],
  memory: {
    cognatesDaily: 'prepay one\'s rent (預付房租), prepaid card (預付卡)',
    oneSentenceMnemonic: 'pre (預先) + pay (付款) ➔ 「還沒用就先付了」就是 prepay (預付)！',
    etymologicalOrigin: '來自拉丁文 pacare（使平息，與 pax「和平」同源），經古法文 paiier 進入英文，字義從「安撫債主」演變成「付款」。',
    visualImagery: '想像你在超商買一張儲值卡，錢先付清了，之後才慢慢把裡面的金額用掉——這就是 prepay 的概念。',
    commonCollocations: ['prepay the rent / fees (預付房租/費用)', 'a prepaid card (預付卡)', 'prepay for services (預先支付服務費用)'],
    contrastiveTips: 'prepay 強調「服務或商品尚未提供就先付款」；deposit 是「先付一部分訂金，之後再付清尾款」；reimburse 則是「事後把別人已經先墊付的錢還給對方」，方向完全相反。'
  },
  source: 'preset'
};
