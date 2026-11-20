import { WordAnalysis } from '../../types';

export const protocol: WordAnalysis = {
    word: 'protocol',
    ipa: '/ˈproʊ.t̬əˌkɑːl/',
    partOfSpeech: 'noun (名詞)',
    chineseMeaning: '協議、議定書；正式禮儀規範；（電腦）通訊協定',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 順序前綴',
        morpheme: 'proto-',
        originalForm: 'prōtos (希臘語)',
        meaning: '第一、最初 (first)',
        category: '順序/等級',
        grammaticalRole: '希臘語前綴'
      },
      {
        type: 'root',
        label: '💎 核心字根',
        morpheme: 'col',
        originalForm: 'kolla (希臘語)',
        variantNote: '希臘文 kolla 意思是「膠」。在古代，一份正式文件（如條約手稿）最前面會黏上一張記載內容摘要與簽署資訊的封頁，這張「黏在第一頁的紙」希臘文叫 prōtokollon，protocol 就是從這個說法演變來的。',
        meaning: '膠、黏貼 (glue, to glue)',
        category: '核心概念',
        grammaticalRole: '名詞中心'
      }
    ],
    phonetic: {
      assimilationPath: 'protos (第一) + kolla (膠) ➔ 希臘文 prōtokollon (黏在手稿最前面的第一頁) ➔ 中古拉丁文 protocollum (草稿) ➔ protocol',
      phoneticAnalysis: '這個字由希臘文 protos 加上 kolla 組成，中間的 k 音在拉丁化過程中變成了 c，拼寫上更接近拉丁文寫法，但基本結構沒有改變。',
    },
    semantic: {
      prefixMeaning: '第一、最初 (proto-)',
      rootCoreAction: '黏貼、膠合 (col < kolla)',
      suffixGrammar: '名詞',
      modernMeaning: '事先訂定好、大家都要遵守的正式規則或程序，可以是外交禮儀、實驗步驟，也可以是電腦之間溝通的通訊規範',
      formulaDisplay: '{ 第一 (proto-) } + { 黏貼 (col) } = 議定書、協議、規範 (protocol)',
      literalLogic: '字面是「黏在文件最前面的第一頁」，古代用來記錄手稿的來源與簽署資訊，後來慢慢引申成「正式文件的草稿／原始版本」，再擴大變成今天「正式規範、程序」的意思。'
    },
    familyTree: [
      { word: 'collage', formula: 'col(ler) (黏貼，法文) + -age', meaning: '拼貼畫' },
      { word: 'prototype', formula: 'proto- (最初) + type (印記)', meaning: '原型、雛形' },
      { word: 'protagonist', formula: 'proto- (首要) + agonist (演出者)', meaning: '主角' },
      { word: 'diplomatic protocol', formula: 'diplomatic + protocol', meaning: '外交禮節' }
    ],
    memory: {
      cognatesDaily: 'collage (拼貼畫), network protocol (網路通訊協定), medical protocol (醫療處置流程)',
      oneSentenceMnemonic: 'proto (第一) + col (膠) ➔ 「黏在文件最前面的第一頁」就是 protocol (協議、規範)！',
      etymologicalOrigin: '來自希臘文 prōtokollon（prōtos 第一 + kolla 膠），經中古拉丁文 protocollum 進入英文。',
      visualImagery: '想像古代的官方文件，第一頁被特別黏上一張記載內容摘要與蓋印的封面，用來證明這份文件正式、可信——這就是 protocol 最早的樣子。',
      commonCollocations: [
        'follow/violate protocol (遵守/違反規範)',
        'diplomatic protocol (外交禮節)',
        'network/security protocol (網路/安全通訊協定)'
      ],
      contrastiveTips: 'protocol 強調「一套事先訂好、大家都要遵守的正式程序或禮儀」；procedure 泛指「做事的步驟」，語氣較中性、不一定正式；在電腦領域，protocol 特指「通訊雙方都要遵守的資料交換規則」（如 HTTP, TCP/IP）。'
    },
    source: 'preset'
  };
