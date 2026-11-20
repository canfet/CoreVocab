import { WordAnalysis } from '../../types';

export const preempt: WordAnalysis = {
  word: 'preempt',
  ipa: '/priˈempt/',
  partOfSpeech: 'verb (及物動詞)',
  chineseMeaning: '先發制人、搶先阻止；（廣播）取代原定節目時段',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 前綴',
      morpheme: 'pre-',
      originalForm: 'prae- (拉丁語)',
      variantNote: 'pre- 沒有音變，直接接在字根前面。',
      meaning: '在...之前 (before)',
      category: '時間順序',
      grammaticalRole: '動詞前綴'
    },
    {
      type: 'root',
      label: '💎 字根',
      morpheme: 'empt',
      originalForm: 'emere / emptus (拉丁語)',
      variantNote: '拉丁文動詞 emere 原意是「拿、取得」，後來專指「買」，過去分詞形態是 emptus，英文借用這個分詞形態做字根，出現在 exempt（免除）、redeem（贖回）等字裡。',
      meaning: '拿取、購買 (to take, buy)',
      category: '核心動作',
      grammaticalRole: '動作中心'
    }
  ],
  phonetic: {
    assimilationPath: 'prae- (之前) + emere (買) ➔ 過去分詞 emptus ➔ 拉丁文 praeemptio (先買) ➔ 英文 preempt (由 preemption 反推的動詞)',
    phoneticAnalysis: 'preempt 這個動詞其實是後來從名詞 preemption（優先購買權）反推造出來的，比名詞晚出現，這種「先有名詞、後造動詞」的現象在英文中並不少見。',
    ruleKey: 'pre- + empt (由名詞反推的動詞)'
  },
  semantic: {
    prefixMeaning: '在...之前 (pre-)',
    rootCoreAction: '拿取、購買 (empt)',
    suffixGrammar: '及物動詞',
    modernMeaning: '在別人採取行動之前，自己先搶先一步取得或行動，讓對方的行動變得沒有意義',
    formulaDisplay: '{ 之前 (pre-) } + { 拿取 (empt) } = 先發制人、搶先取得 (preempt)',
    literalLogic: '字面上是「比別人先買到、先拿到」，引申成任何領域裡「搶先一步、讓對手來不及」的行動。'
  },
  familyTree: [
    { word: 'exempt', formula: 'ex- (向外) + empt', meaning: '被豁免的、免除（把某人從義務中拿出去）', level: 'TOEFL', tags: ['TOEFL', 'GRE'] },
    { word: 'redeem', formula: 're- (回) + deem (empt 變體)', meaning: '贖回、彌補（把東西買回來）', level: 'TOEFL', tags: ['TOEFL', 'GRE'] },
    { word: 'premium', formula: 'prae- (事先) + emium (empt 變體)', meaning: '保費；優質的（事先取得的獎賞）', level: 'TOEIC', tags: ['TOEIC', 'TOEFL'] },
    { word: 'example', formula: 'ex- (向外) + ample (empt 變體)', meaning: '例子（從整體中拿出來的樣本）', level: 'Core', tags: ['TOEIC'] }
  ],
  memory: {
    cognatesDaily: 'preempt a crisis (搶先化解危機), preempt criticism (先發制人避免批評)',
    oneSentenceMnemonic: 'pre (之前) + empt (拿取) ➔ 「比別人先拿到、先出手」就是 preempt (先發制人)！',
    etymologicalOrigin: '來自晚期拉丁文 praeemptio（prae- + emere「拿取、購買」的過去分詞 emptus），preempt 是後來從這個名詞反推造出的動詞。',
    visualImagery: '想像商場限量商品剛上架，你比其他顧客早一步衝上前搶先買下——這就是 preempt 的畫面。',
    commonCollocations: ['preempt a crisis / attack (搶先化解危機/攻擊)', 'preempt criticism (先發制人避免批評)', 'a preemptive strike (先發制人的攻擊)'],
    contrastiveTips: 'preempt 強調「搶在對方或事情發生之前先採取行動，讓對方失去意義」；prevent 是單純「阻止某事發生」，不一定牽涉搶先的競爭關係；anticipate 只是「預料到」，不一定會採取行動。'
  },
  source: 'preset'
};
