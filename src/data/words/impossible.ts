import { WordAnalysis } from '../../types';

export const impossible: WordAnalysis = {
    word: 'impossible',
    ipa: '/ɪmˈpɑː.sə.bəl/',
    partOfSpeech: 'adjective (形容詞)',
    chineseMeaning: '不可能的、辦不到的',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 同化前綴',
        morpheme: 'im-',
        originalForm: 'in- (拉丁語)',
        variantNote: 'in- 遇到 p 這個音，會整個變身成 im- (in- ➔ im-)',
        meaning: '不 (not)',
        category: '否定',
        grammaticalRole: '否定前綴'
      },
      {
        type: 'root',
        label: '💎 核心字根',
        morpheme: 'possib',
        originalForm: 'posse (拉丁語「能夠」，由 potis「有能力的」+ esse「是」組成)',
        meaning: '能夠、有能力 (to be able)',
        category: '核心概念',
        grammaticalRole: '核心語義'
      },
      {
        type: 'suffix',
        label: '🏷️ 形容詞字尾',
        morpheme: '-ible',
        originalForm: '-ibilis (拉丁語)',
        variantNote: '加在動詞字根後面，表示「可以被...的」，跟 -able 是同一組字尾的不同拼法',
        meaning: '可以...的 (able to be)',
        category: '形容詞化',
        grammaticalRole: '形容詞後綴'
      }
    ],
    phonetic: {
      assimilationPath: 'in- (不) ➔ 同化為 im- + posse (能夠) ➔ possibilis (可能的) ➔ impossibilis ➔ impossible',
      phoneticAnalysis: 'in- 遇到 p、b、m 開頭的字，字尾的 n 會換成 m，唸起來才順口（in- + p... ➔ im-，像 impossible, impatient, immature 都是這樣）。',
      ruleKey: 'in- ➔ im- 語音同化 (前綴遇 b/m/p 全同化)'
    },
    semantic: {
      prefixMeaning: '不 (in- ➔ im-)',
      rootCoreAction: '能夠、有能力 (posse)',
      suffixGrammar: '可以...的 (-ible)',
      modernMeaning: '完全沒有能力、沒有辦法做到某件事',
      formulaDisplay: '{ 不 (im- < in-) } + { 能夠 (possib < posse) } + { 可以...的 (-ible) } = 不可能的 (impossible)',
      literalLogic: '字面上是「不可能被做到的」，直接對應現代的「不可能」。'
    },
    familyTree: [
      { word: 'possible', formula: 'possib (能夠) + -ible', meaning: '可能的', level: 'Core', tags: ['TOEIC'] },
      { word: 'possibility', formula: 'possible + -ity', meaning: '可能性', level: 'Core', tags: ['TOEIC'] },
      { word: 'impossibility', formula: 'impossible + -ity', meaning: '不可能性', level: 'TOEIC', tags: ['TOEIC'] },
      { word: 'potential', formula: 'potent (有能力) + -ial', meaning: '潛在的、潛力', level: 'TOEFL', tags: ['TOEFL'] },
      { word: 'power', formula: '來自古法文 poeir，與 posse 同源', meaning: '力量、權力', level: 'Core', tags: ['TOEIC'] }
    ],
    memory: {
      cognatesDaily: 'mission impossible (不可能的任務), it\'s impossible to say (很難說/不可能說), an impossible situation (棘手的處境)',
      oneSentenceMnemonic: 'im (不) + possib (能夠) + le ➔ 「完全沒辦法做到」就是 impossible (不可能的)！',
      etymologicalOrigin: '拉丁文 impossibilis（in- 不 + possibilis「可能的」，possibilis 又來自 posse「能夠」）',
      visualImagery: '想像一道完全無法打開的鎖住的門，不管怎麼推、怎麼拉都打不開，那種「完全辦不到」的感覺就是 impossible。',
      commonCollocations: [
        'virtually/practically impossible (幾乎不可能)',
        'make it impossible to do sth (使某事變得不可能)'
      ],
      contrastiveTips: 'impossible 是「完全不可能」，語氣絕對；difficult/hard 只是「困難」，不代表做不到——兩者程度差很多，不要混用。'
    },
    source: 'preset'
  };
