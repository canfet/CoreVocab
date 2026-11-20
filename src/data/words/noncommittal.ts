import { WordAnalysis } from '../../types';

export const noncommittal: WordAnalysis = {
    word: 'noncommittal',
    ipa: '/ˌnɑːn.kəˈmɪt.əl/',
    partOfSpeech: 'adjective (形容詞)',
    chineseMeaning: '不明確表態的、模稜兩可的',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 客觀否定前綴',
        morpheme: 'non-',
        originalForm: 'non (拉丁語)',
        variantNote: 'non- 拼法固定不變，直接加在形容詞前面表示「不」',
        meaning: '不 (not)',
        category: '否定極性',
        grammaticalRole: '否定前綴'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'commit',
        originalForm: 'committere (拉丁語) ← com- + mittere',
        variantNote: 'committere 是 com- (完全、一起) + mittere (發送、放出) 組成的字，字面是「把自己完全交付出去」',
        meaning: '交付、承諾 (to entrust, pledge oneself)',
        category: '核心動作',
        grammaticalRole: '動作中心'
      },
      {
        type: 'suffix',
        label: '🏷️ 字尾',
        morpheme: '-al',
        originalForm: '-alis (拉丁語)',
        variantNote: '這個字尾加在名詞或動詞字根後面，會把它變成形容詞，意思是「與...有關的」',
        meaning: '與...有關的 (relating to)',
        category: '形容詞化',
        grammaticalRole: '構成形容詞'
      }
    ],
    phonetic: {
      assimilationPath: 'non- (不) + committere (交付承諾) ➔ committal + -al ➔ noncommittal',
      phoneticAnalysis: 'non- 直接接在 committal 前面，不需要變身，重音落在中間音節 nonCOMmittal。',
      ruleKey: 'non- + committal 直接拼接'
    },
    semantic: {
      prefixMeaning: '不 (non-)',
      rootCoreAction: '交付、承諾 (commit < committere)',
      suffixGrammar: '形容詞 (-al)',
      modernMeaning: '說話或態度上不願意明確承諾或表態，留有餘地',
      formulaDisplay: '{ 不 (non-) } + { 承諾 (commit) } + { ...的 (-al) } = 不表態的 (noncommittal)',
      literalLogic: '字面上是「不願意把自己交付承諾出去」，也就是講話模糊、不肯明確表態。'
    },
    familyTree: [
      { word: 'commit', formula: '字根本體', meaning: '承諾、投入、犯下（罪行）' },
      { word: 'commitment', formula: 'commit + -ment', meaning: '承諾、投入 (名詞)' },
      { word: 'committee', formula: 'commit + -ee', meaning: '委員會' },
      { word: 'dismiss', formula: 'dis- (往外) + miss (mittere 的分詞幹)', meaning: '解僱、駁回 (同樣源自 mittere 家族)' }
    ],
    memory: {
      cognatesDaily: 'a noncommittal answer (模稜兩可的答案), remain noncommittal (保持不表態)',
      oneSentenceMnemonic: 'non (不) + committal (承諾表態) ➔ 「不願意做出承諾」就是 noncommittal (不明確表態的)！',
      etymologicalOrigin: '拉丁文 committere (com- + mittere「發送」) 加上客觀否定前綴 non-',
      commonCollocations: [
        'give a noncommittal reply (給出模稜兩可的回覆)',
        'a noncommittal shrug (聳肩表示不置可否)'
      ],
      contrastiveTips: 'noncommittal 強調「刻意不表態、不承諾」，帶有一點小心翼翼、保留態度的意味；ambiguous 則泛指「意義本身不清楚、可能有多種解讀」，不一定是故意的。'
    },
    source: 'preset'
  };
