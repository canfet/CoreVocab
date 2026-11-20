import { WordAnalysis } from '../../types';

export const euphemism: WordAnalysis = {
    word: 'euphemism',
    ipa: '/ˈjuːfəmɪzəm/',
    partOfSpeech: 'noun (名詞)',
    chineseMeaning: '委婉語、婉轉的說法',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 性質前綴',
        morpheme: 'eu-',
        originalForm: 'eu- (希臘語)',
        variantNote: '拼法固定的透明前綴',
        meaning: '良好地 (well)',
        category: '性質/評價',
        grammaticalRole: '性質前綴'
      },
      {
        type: 'root',
        label: '💎 核心字根',
        morpheme: 'phem',
        originalForm: 'phēmē / phanai (φημί, 希臘語)',
        variantNote: '來自希臘動詞 phanai「說」的相關名詞 phēmē「話語、名聲」',
        meaning: '說、言語 (to speak, saying)',
        category: '言語溝通',
        grammaticalRole: '動作中心'
      },
      {
        type: 'suffix',
        label: '🏷️ 現象名詞字尾',
        morpheme: '-ism',
        originalForm: '-ismos (希臘語)',
        variantNote: '希臘文常見字尾，表示一種做法、現象或體系',
        meaning: '構成表示行為/現象的名詞',
        category: '名詞化',
        grammaticalRole: '名詞字尾'
      }
    ],
    phonetic: {
      assimilationPath: 'eu (良好) + phemē (言語) ➔ 希臘文動詞 euphemizein「用好聽的話說」 ➔ euphemismos ➔ 英文 euphemism',
      phoneticAnalysis: 'eu- 唸 /juː/，重音在第一音節 YOO-fə-mi-zəm，中間的 phe 因不重讀而弱化成模糊的 /fə/。',
      ruleKey: '希臘雙母音 eu- ➔ /juː/ + 非重讀音節母音弱化'
    },
    semantic: {
      prefixMeaning: '良好地 (eu-)',
      rootCoreAction: '說、言語 (phem < phēmē)',
      suffixGrammar: '現象/行為名詞化 (-ism)',
      modernMeaning: '用比較溫和、好聽的字詞取代原本刺耳、尷尬或忌諱的說法',
      formulaDisplay: '{ 良好 (eu-) } + { 說話 (phem) } + { 現象 (-ism) } = 委婉語 (euphemism)',
      literalLogic: '字面上是「說得好聽一點」，古希臘人在祭典時特別忌諱說出不吉利的話，於是用好話代替，後來變成語言學上「用溫和說法代替尖銳說法」的通稱。'
    },
    familyTree: [
      { word: 'euphemistic', formula: 'euphemism + -ic (形容詞)', meaning: '委婉的 (形容詞)' },
      { word: 'blaspheme', formula: 'blas- (傷害) + pheme (言語)', meaning: '褻瀆、說瀆神的話 (與 euphemism 共用 phe 字根，用法相反)' },
      { word: 'prophet', formula: 'pro- (事先) + phet (說，phanai)', meaning: '先知 (共用 phanai 字根)' },
      { word: 'euphony', formula: 'eu- (良好) + phon (聲音) + -y', meaning: '悅耳的聲音 (同課的 eu- 字，但字根是 phon「聲音」不是 phem「言語」，容易混淆)' },
      { word: 'euphoria', formula: 'eu- (良好) + phor (承受) + -ia', meaning: '欣快感 (同一課的 eu- 字，字根不同)' }
    ],
    memory: {
      cognatesDaily: '"pass away" is a euphemism for "die" ("過世"是"死"的委婉語), a euphemism for being fired (被解雇的委婉說法)',
      oneSentenceMnemonic: 'eu (良好) + phem (說話) + ism (說法) ➔ 「說得比較好聽的方式」就是 euphemism (委婉語)！',
      etymologicalOrigin: '希臘文 euphemismos，來自動詞 euphemizein (eu- 「好」 + phēmē 「話語」)，原指祭典時避開不吉利字眼、改說吉祥話',
      visualImagery: '想像有人不想直接說「你被開除了」，而是說「公司要幫你尋找下一個舞台」，這種把刺耳事實包上一層糖衣的說法，就是 euphemism。',
      commonCollocations: [
        'a euphemism for (是...的委婉說法)',
        'use a euphemism (使用委婉語)'
      ],
      contrastiveTips: '注意 euphemism 的字根是 phem(-e)「言語」，不要和同一課的 euphony（字根是 phon「聲音」）搞混，兩個字根長得像但意思不同。'
    },
    source: 'preset'
  };
