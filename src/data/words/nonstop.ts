import { WordAnalysis } from '../../types';

export const nonstop: WordAnalysis = {
    word: 'nonstop',
    ipa: '/ˈnɑːnˌstɑːp/',
    partOfSpeech: 'adjective (形容詞); adverb (副詞)',
    chineseMeaning: '直達的、不停的、不間斷地',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 客觀否定前綴',
        morpheme: 'non-',
        originalForm: 'non (拉丁語)',
        variantNote: 'non- 拼法固定不變，直接加在英文固有詞前面表示「不」',
        meaning: '不 (not)',
        category: '否定極性',
        grammaticalRole: '否定前綴'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'stop',
        originalForm: 'stoppian (古英語)',
        variantNote: 'stop 是英文自己原本就有的日耳曼語字，古英文 stoppian 意思是「堵住、塞住」，後來才發展出「停止」的意思',
        meaning: '停止、堵住 (to halt, plug up)',
        category: '核心動作',
        grammaticalRole: '動作中心'
      }
    ],
    phonetic: {
      assimilationPath: 'non- (不) + stop (停止) ➔ nonstop',
      phoneticAnalysis: 'non- 是少數可以直接加在英文固有詞（非拉丁字根）前面的拉丁前綴，拼法完全不變，兩個音節唸起來一樣重 NON-STOP。',
      ruleKey: 'non- + stop 直接拼接'
    },
    semantic: {
      prefixMeaning: '不 (non-)',
      rootCoreAction: '停止 (stop)',
      suffixGrammar: '形容詞/副詞',
      modernMeaning: '從頭到尾都不中斷、不停下來的狀態',
      formulaDisplay: '{ 不 (non-) } + { 停 (stop) } = 不停的、直達的 (nonstop)',
      literalLogic: '字面上就是「不停」，用在班機、火車上就是「直達、中途不停靠」。'
    },
    familyTree: [
      { word: 'stop', formula: '字根本體', meaning: '停止' },
      { word: 'stoppage', formula: 'stop + -age', meaning: '停頓、停工 (名詞)' },
      { word: 'unstoppable', formula: 'un- (不) + stop + -able', meaning: '無法阻擋的' },
      { word: 'stopover', formula: 'stop + over', meaning: '中途停留 (名詞，與 nonstop 概念相反)' }
    ],
    memory: {
      cognatesDaily: 'nonstop flight (直飛班機), talk nonstop (講個不停), work nonstop (不停歇地工作)',
      oneSentenceMnemonic: 'non (不) + stop (停) ➔ 「完全不停下來」就是 nonstop (直達的/不停的)！',
      etymologicalOrigin: '古英文 stoppian「堵住、塞住」加上拉丁語客觀否定前綴 non-',
      commonCollocations: [
        'nonstop flight/train (直達班機/列車)',
        'talk nonstop (滔滔不絕地講)'
      ],
      contrastiveTips: 'nonstop 強調「途中完全不停靠、不中斷」，常用於交通工具；continuous 泛指「持續不斷」，不一定完全沒有間斷，語意範圍更廣。'
    },
    source: 'preset'
  };
