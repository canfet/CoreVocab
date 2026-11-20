import { WordAnalysis } from '../../types';

export const postscript: WordAnalysis = {
    word: 'postscript',
    ipa: '/ˈpoʊstˌskrɪpt/',
    partOfSpeech: 'noun (名詞，常縮寫為 P.S.)',
    chineseMeaning: '附言、後記（信件簽名之後補寫的話；也泛指主要內容之後的附加說明）',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 時間前綴',
        morpheme: 'post-',
        originalForm: 'post (拉丁語)',
        meaning: '在...之後 (after, behind)',
        category: '時間順序',
        grammaticalRole: '時間前綴'
      },
      {
        type: 'root',
        label: '💎 核心字根',
        morpheme: 'script',
        originalForm: 'scrībere / scrīptus',
        variantNote: '古拉丁文動詞 scrībere（寫）有兩種長相：現在詞幹 scrib- 和過去分詞詞幹 script-。這個字用的是 script- 這種寫法。',
        meaning: '書寫、寫下的東西 (to write, something written)',
        category: '核心動作',
        grammaticalRole: '動作中心'
      }
    ],
    phonetic: {
      assimilationPath: 'post- (之後) + scribere (寫) ➔ 過去分詞 scriptus ➔ postscriptum (之後寫的東西) ➔ postscript',
      phoneticAnalysis: '這個字直接由 post- 加上 scrībere 的過去分詞詞幹 script- 組成，沒有經過額外的同化。scrībere 這個動詞很常見，除了 script- 這種寫法，現在詞幹是 scrib-（例如 describe, subscribe），兩種寫法在很多相關字裡都會出現。',
      dualStemInfo: {
        presentStem: 'scrib- (如 describe, subscribe, prescribe)',
        supineStem: 'script- (如 inscription, manuscript, transcript)',
        meaning: '寫、寫下 (write)'
      },
      ruleKey: 'scrib/script 雙詞幹詞族'
    },
    semantic: {
      prefixMeaning: '在...之後 (post-)',
      rootCoreAction: '寫下的東西 (script)',
      suffixGrammar: '複合名詞',
      modernMeaning: '在信件正文與簽名寫完之後，額外補充的一段話',
      formulaDisplay: '{ 之後 (post-) } + { 寫下的東西 (script) } = 附言、後記 (postscript)',
      literalLogic: '字面意思是「（正文）之後寫的東西」，所以就是信件簽名後補上的附言，也可以泛指任何主要內容結束後的補充。'
    },
    familyTree: [
      { word: 'manuscript', formula: 'manu (手) + script (寫)', meaning: '手稿' },
      { word: 'transcript', formula: 'trans- (轉換) + script', meaning: '文字紀錄、成績單' },
      { word: 'describe', formula: 'de- (完全) + scribe (寫)', meaning: '描述' },
      { word: 'subscribe', formula: 'sub- (在下) + scribe (寫)', meaning: '訂閱、簽署 (在下方簽名)' },
      { word: 'inscription', formula: 'in- (刻入) + script + -ion', meaning: '銘刻、題詞、碑文' }
    ],
    memory: {
      cognatesDaily: 'manuscript (手稿), describe (描述), subscribe (訂閱)',
      oneSentenceMnemonic: 'post (之後) + script (寫的東西) ➔ 「正文之後寫的東西」就是 postscript (附言)！',
      etymologicalOrigin: '來自拉丁文 postscriptum，是 postscribere（post- 之後 + scribere 寫）的過去分詞。',
      visualImagery: '想像寫完一封信、簽好名字後，突然想到還有一件事沒講，於是在信紙最下方又加了一行「P.S. 對了，別忘了...」，這行字就是 postscript。',
      commonCollocations: [
        'add a postscript (加上附言)',
        'as a postscript to (作為...的後記/補充)',
        'P.S. (postscript 的縮寫)'
      ],
      contrastiveTips: 'postscript 常縮寫成 P.S.，是「信件簽名之後」加的話；appendix（附錄）則是加在書本或報告「正文結束後」的補充資料，兩者都是「事後補充」，但使用的文體場合不同。'
    },
    source: 'preset'
  };
