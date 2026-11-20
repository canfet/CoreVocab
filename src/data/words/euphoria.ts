import { WordAnalysis } from '../../types';

export const euphoria: WordAnalysis = {
    word: 'euphoria',
    ipa: '/juːˈfɔːriə/',
    partOfSpeech: 'noun (不可數名詞)',
    chineseMeaning: '欣快感、極度興奮的快感',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 性質前綴',
        morpheme: 'eu-',
        originalForm: 'eu- (希臘語)',
        variantNote: '拼法固定的透明前綴，不因後面字母改變',
        meaning: '良好地 (well)',
        category: '性質/評價',
        grammaticalRole: '性質前綴'
      },
      {
        type: 'root',
        label: '💎 核心字根',
        morpheme: 'phor',
        originalForm: 'pherein (φέρειν, 希臘語)',
        variantNote: '希臘動詞 pherein「承受、攜帶」加上表示狀態的字尾 -ia，變成 euphoria 這個醫學希臘字',
        meaning: '承受、攜帶 (to bear, to carry)',
        category: '身心狀態',
        grammaticalRole: '動作中心'
      },
      {
        type: 'suffix',
        label: '🏷️ 狀態名詞字尾',
        morpheme: '-ia',
        originalForm: '-ia (希臘語)',
        variantNote: '希臘文常見的抽象名詞字尾，常用在描述身心狀態或病症的醫學詞彙',
        meaning: '狀態、病症',
        category: '抽象名詞',
        grammaticalRole: '名詞字尾'
      }
    ],
    phonetic: {
      assimilationPath: 'eu (良好) + pherein (承受) ➔ 希臘文 euphoria (原意「容易承受、健康」) ➔ 19 世紀被英文醫學界借用，轉指「極度興奮的快感」',
      phoneticAnalysis: 'eu- 唸成 /juː/，重音落在字根 phor 上（yoo-FOR-ee-ə），字尾 -ia 弱化成模糊的 /ə/。',
      ruleKey: '希臘雙母音 eu- ➔ /juː/ + 重音落於字根音節'
    },
    semantic: {
      prefixMeaning: '良好地 (eu-)',
      rootCoreAction: '承受、感受 (phor < pherein)',
      suffixGrammar: '狀態名詞化 (-ia)',
      modernMeaning: '一種強烈、短暫的極度快樂或興奮感，有時伴隨藥物或成就而生',
      formulaDisplay: '{ 良好 (eu-) } + { 承受 (phor) } + { 狀態 (-ia) } = 欣快感 (euphoria)',
      literalLogic: '希臘文原意是「容易承受得住、健康的狀態」，後來被英文借去專門用來形容「感覺好到飄飄然」的強烈快感。'
    },
    familyTree: [
      { word: 'euphoric', formula: 'euphoria + -ic (形容詞)', meaning: '欣快的、興高采烈的' },
      { word: 'dysphoria', formula: 'dys- (不良) + phor + -ia', meaning: '煩躁不安感 (與 euphoria 相反)' },
      { word: 'metaphor', formula: 'meta- (轉換) + phor (承載)', meaning: '隱喻 (與 euphoria 共用 pher 字根)' },
      { word: 'semaphore', formula: 'sema (信號) + phore (承載)', meaning: '旗語、信號系統 (共用 pher 字根)' },
      { word: 'euphemism', formula: 'eu- (良好) + phem (說話) + -ism', meaning: '委婉語 (同一課的 eu- 字，字根不同)' }
    ],
    memory: {
      cognatesDaily: 'a feeling of euphoria (欣快感), euphoria washed over her (一股欣快感湧上她心頭)',
      oneSentenceMnemonic: 'eu (良好) + phor (承受) + ia (狀態) ➔ 「感覺一切都好到承受不住」就是 euphoria (欣快感)！',
      etymologicalOrigin: '希臘文 euphoria (eu- 「良好」 + pherein 「承受、攜帶」)，原本是醫學用語，指病人「狀況良好、容易康復」',
      visualImagery: '想像運動員衝過終點線那一刻，全身湧上一股輕飄飄、幾乎要飛起來的快感，那就是 euphoria。',
      commonCollocations: [
        'a sense/feeling of euphoria (一種欣快感)',
        'euphoria over/at something (對某事感到欣喜若狂)'
      ],
      contrastiveTips: 'euphoria 強調短暫、強烈、近乎失控的極度興奮，常帶有一點「過頭」的意味；happiness 則是比較平穩、一般性的快樂。'
    },
    source: 'preset'
  };
