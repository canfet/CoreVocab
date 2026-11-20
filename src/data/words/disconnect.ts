import { WordAnalysis } from '../../types';

export const disconnect: WordAnalysis = {
    word: 'disconnect',
    ipa: '/ˌdɪs.kəˈnekt/',
    partOfSpeech: 'verb (及物/不及物動詞)',
    chineseMeaning: '切斷連接、使分離、斷開',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 否定前綴',
        morpheme: 'dis-',
        originalForm: 'dis- (拉丁語)',
        variantNote: 'dis- 加在動詞前面，表示「把原本連接的動作反過來」',
        meaning: '分離、相反 (apart, reverse of)',
        category: '否定極性',
        grammaticalRole: '否定前綴'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'connect',
        originalForm: 'connectere (拉丁語) ← com- + nectere',
        variantNote: 'connect 本身就是 con- (共同、一起) + nectere (綁、繫) 組成的字，意思是「綁在一起」',
        meaning: '連接、綁在一起 (to join, bind together)',
        category: '核心動作',
        grammaticalRole: '動作中心'
      }
    ],
    phonetic: {
      assimilationPath: 'dis- (分離) + connectere (連結、綁在一起) ➔ disconnect',
      phoneticAnalysis: 'dis- 直接接在 connect 前面，不需要變身，唸的時候重音落在最後一個音節 disconNECT。',
      ruleKey: 'dis- + connect 直接拼接'
    },
    semantic: {
      prefixMeaning: '分離 (dis-)',
      rootCoreAction: '連接、綁在一起 (connect)',
      suffixGrammar: '及物/不及物動詞',
      modernMeaning: '把原本相連、相通的兩個東西（電線、關係、想法）拆開',
      formulaDisplay: '{ 分離 (dis-) } + { 連接 (connect) } = 斷開 (disconnect)',
      literalLogic: '就是把「連接」整個反過來，變成「切斷」。'
    },
    familyTree: [
      { word: 'connect', formula: '字根本體', meaning: '連接、與...有關聯' },
      { word: 'connection', formula: 'connect + -ion', meaning: '連結、人脈 (名詞)' },
      { word: 'disconnected', formula: 'disconnect + -ed', meaning: '中斷連接的、脫節的 (形容詞)' },
      { word: 'interconnect', formula: 'inter- (彼此之間) + connect', meaning: '使互相連接' }
    ],
    memory: {
      cognatesDaily: 'disconnect the cable (拔掉電線), disconnect from social media (脫離社群媒體), feel disconnected (感覺脫節)',
      oneSentenceMnemonic: 'dis (分離) + connect (連接) ➔ 「把連接的線剪斷」就是 disconnect (斷開)！',
      etymologicalOrigin: '拉丁文 connectere (con- 「一起」 + nectere「綁、繫」) 加上否定前綴 dis-',
      commonCollocations: [
        'disconnect the power supply (切斷電源)',
        'disconnect a call (掛斷電話)'
      ],
      contrastiveTips: 'disconnect 強調「切斷原本存在的連接」；detach 則是「使某個附加的部分分離」，不一定原本是「連接」關係，也可以是「拆下」某個附件。'
    },
    source: 'preset'
  };
