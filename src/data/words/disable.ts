import { WordAnalysis } from '../../types';

export const disable: WordAnalysis = {
    word: 'disable',
    ipa: '/dɪsˈeɪ.bəl/',
    partOfSpeech: 'verb (及物動詞)',
    chineseMeaning: '使失去能力、使殘障、停用（功能）',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 否定前綴',
        morpheme: 'dis-',
        originalForm: 'dis- (拉丁語)',
        variantNote: 'dis- 加在形容詞化的字根前面，表示「拿走、使失去」',
        meaning: '拿走、使失去 (remove, deprive of)',
        category: '否定極性',
        grammaticalRole: '否定前綴'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'able',
        originalForm: 'habilis (拉丁語)',
        variantNote: '拉丁文 habilis 源自動詞 habere「握有、拿著」，原意是「拿得住、好操作的」，後來變成「有能力做某事的」',
        meaning: '能夠、有能力 (capable of)',
        category: '核心概念',
        grammaticalRole: '概念中心'
      }
    ],
    phonetic: {
      assimilationPath: 'dis- (使失去) + habilis (有能力的) ➔ 古法語 (h)able ➔ 英文 disable',
      phoneticAnalysis: 'dis- 直接接在 able 前面，不需要變身，唸的時候重音落在第二個音節 disABLE。',
      ruleKey: 'dis- + able 直接拼接'
    },
    semantic: {
      prefixMeaning: '拿走、使失去 (dis-)',
      rootCoreAction: '有能力做某事 (able)',
      suffixGrammar: '及物動詞',
      modernMeaning: '拿走一個人身體上的能力，或讓一項機器功能無法運作',
      formulaDisplay: '{ 拿走 (dis-) } + { 能力 (able) } = 使失能、停用 (disable)',
      literalLogic: '把「有能力」整個拿走，就是「失去能力」。'
    },
    familyTree: [
      { word: 'able', formula: '字根本體', meaning: '能夠、有能力的' },
      { word: 'ability', formula: 'able + -ity', meaning: '能力 (名詞)' },
      { word: 'disability', formula: 'disable + -ity', meaning: '身心障礙、失能狀態 (名詞)' },
      { word: 'enable', formula: 'en- (使成為) + able', meaning: '使能夠、啟用 (反義動作)' },
      { word: 'unable', formula: 'un- (不) + able', meaning: '不能夠的 (形容詞，非同一構詞邏輯的近義詞)' }
    ],
    memory: {
      cognatesDaily: 'disable a device (停用裝置), disabled parking (身心障礙者停車位), disable a feature (關閉某功能)',
      oneSentenceMnemonic: 'dis (拿走) + able (能力) ➔ 「把能力拿走」就是 disable (使失能/停用)！',
      etymologicalOrigin: '拉丁文 habilis「有能力的、好操作的」，源自動詞 habere「握有」，加上否定前綴 dis-',
      commonCollocations: [
        'disable the alarm (關閉警報器)',
        'people with disabilities (身心障礙者)'
      ],
      contrastiveTips: 'disable 當動詞時，日常科技語境常指「停用（某功能/裝置）」；disabled 當形容詞描述人時，是中性且常用的說法，指「身心障礙的」。'
    },
    source: 'preset'
  };
