import { WordAnalysis } from '../../types';

export const accept: WordAnalysis = {
    word: 'accept',
    ipa: '/əkˈsept/',
    partOfSpeech: 'verb (及物動詞)',
    chineseMeaning: '接受、同意、承認',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 同化前綴',
        morpheme: 'ac-',
        originalForm: 'ad- (拉丁語)',
        variantNote: 'ad- 遇到 c 這個音，會整個變身成 ac- (ad- ➔ ac-)',
        meaning: '朝向、對著 (to, toward)',
        category: '空間/方向',
        grammaticalRole: '趨向前綴'
      },
      {
        type: 'root',
        label: '💎 核心字根',
        morpheme: 'cept',
        originalForm: 'capere (拉丁語「拿、抓取」)，完成分詞幹 captus',
        variantNote: 'capere 放進複合字中間時，母音會弱化：現在式變成 -cipere，完成分詞變成 -ceptus，所以英文裡看到的是 cept',
        meaning: '拿取、抓住 (to take, seize)',
        category: '核心動作',
        grammaticalRole: '分詞詞幹'
      }
    ],
    phonetic: {
      assimilationPath: 'ad- (朝向) ➔ 同化為 ac- + capere ➔ -cipere (現在式) / -ceptus (完成式) ➔ accept',
      phoneticAnalysis: 'ad- 遇到 c 開頭的字，字尾的 d 會換成 c，唸起來才順口（ad- + c... ➔ ac-，像 accept, accord, account 都是這樣）。capere（拿）這個字根放進複合字中間時，母音會弱化，才會變成 cept 這個長相（跟 except, concept, receive 是同一家族）。',
      ruleKey: 'ad- ➔ ac- 語音同化 + capere 母音弱化 (a➔e/i)'
    },
    semantic: {
      prefixMeaning: '朝向、對著 (ad- ➔ ac-)',
      rootCoreAction: '拿取、抓住 (cept < capere)',
      suffixGrammar: '及物動詞',
      modernMeaning: '把對方遞過來的東西、提議或說法伸手拿過來、收下',
      formulaDisplay: '{ 朝向 (ac- < ad-) } + { 拿取 (cept) } = 接受 (accept)',
      literalLogic: '字面上是「朝著某樣東西伸手把它拿過來」，引申為「接受」對方給的東西、提議或事實。'
    },
    familyTree: [
      { word: 'acceptable', formula: 'accept + -able', meaning: '可接受的、令人滿意的', level: 'TOEIC', tags: ['TOEIC'] },
      { word: 'acceptance', formula: 'accept + -ance', meaning: '接受、認可', level: 'TOEIC', tags: ['TOEIC'] },
      { word: 'except', formula: 'ex- (向外) + cept (拿)', meaning: '除了...之外（把它拿出去，不算在內）', level: 'Core', tags: ['TOEIC'] },
      { word: 'concept', formula: 'con- (共同) + cept (拿)', meaning: '概念（把想法一起抓在一起）', level: 'TOEFL', tags: ['TOEFL'] },
      { word: 'receive', formula: 're- (回) + ceive (拿)', meaning: '收到、接收', level: 'Core', tags: ['TOEIC'] }
    ],
    memory: {
      cognatesDaily: 'accept an offer/invitation (接受提議/邀請), accept responsibility (承擔責任), widely accepted (被廣泛接受的)',
      oneSentenceMnemonic: 'ac (朝向) + cept (伸手拿住) ➔ 「朝對方伸手把東西拿過來」就是 accept (接受)！',
      etymologicalOrigin: '拉丁文 acceptare（accipere 的加強形式，accipere 又由 ad- 朝向 + capere 拿取 組成）',
      visualImagery: '想像有人遞給你一份禮物，你伸出雙手朝它靠過去、把它接了過來，那個「伸手接住」的動作就是 accept。',
      commonCollocations: [
        'accept an invitation/offer/apology (接受邀請/提議/道歉)',
        'generally accepted (普遍被接受的)'
      ],
      contrastiveTips: 'accept 是主動、正式地「接受」；receive 只是單純「收到」某樣東西，不一定表示同意或願意；agree 是「同意」某個意見或說法，不一定涉及拿取東西。'
    },
    source: 'preset'
  };
