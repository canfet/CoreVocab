import { WordAnalysis } from '../../types';

export const forefather: WordAnalysis = {
    word: 'forefather',
    ipa: '/ˈfɔːrˌfɑː.ðɚ/',
    partOfSpeech: 'noun (名詞，通常用複數 forefathers)',
    chineseMeaning: '祖先、先人、前輩',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 原生時間前綴',
        morpheme: 'fore-',
        originalForm: 'fore (古英文)',
        variantNote: 'fore- 是英文本土的字首，意思和拉丁文的 ante- 相近，但完全是不同語言系統演變出來的字。',
        meaning: '在...之前、事先 (before)',
        category: '時間順序',
        grammaticalRole: '原生前綴'
      },
      {
        type: 'root',
        label: '💎 核心語詞',
        morpheme: 'father',
        originalForm: 'fæder (古英文)',
        variantNote: 'father 和拉丁文的 pater（父親）、希臘文的 patēr 其實系出同源，都能追溯到更古老的原始印歐語詞根 *pəter-。日耳曼語言經歷了「格林定律」這個規律的音變，把原本的 p 音變成了 f 音，所以同一個老祖先詞根，拉丁文和希臘文保留了 p（pater, patēr），英文和德文則變成了 f（father, Vater）。這是格林定律最經典的例子之一。',
        meaning: '父親 (father)',
        category: '親屬稱謂',
        grammaticalRole: '名詞中心'
      }
    ],
    phonetic: {
      assimilationPath: 'fore- (在前) + father (父親) ➔ 直接複合，無音變 ➔ forefather',
      phoneticAnalysis: 'fore- 和 father 都是英文本土詞彙，直接組合，中間沒有音變。值得注意的是 father 本身內部經歷過遠古的日耳曼語音變（格林定律 p➔f），但那是很久以前、在拉丁文 pater 和英文 father 分家時就已經發生的事，跟 forefather 這個組合字本身的形成無關。',
    },
    semantic: {
      prefixMeaning: '在...之前 (fore-)',
      rootCoreAction: '父親 (father)',
      suffixGrammar: '複合名詞',
      modernMeaning: '在自己出生之前的男性祖先，泛指祖先、前人',
      formulaDisplay: '{ 之前 (fore-) } + { 父親 (father) } = 祖先、先人 (forefather)',
      literalLogic: '字面就是「在（自己）父親之前的父親」，也就是更早的男性祖先，引申泛指所有祖先或前人。'
    },
    familyTree: [
      { word: 'ancestor', formula: 'ante- (在先) + cess (走) + -or', meaning: '祖先、先人 (拉丁字根版的同義詞)' },
      { word: 'forebear', formula: 'fore- (之前) + bear (存在、生存)', meaning: '祖先、祖宗 (與 forefather 同義)' },
      { word: 'patriarch', formula: 'patr- (父，希臘語 pater 同源字根) + arch (統治者)', meaning: '族長、家長' },
      { word: 'paternal', formula: 'pater- (父) + -al', meaning: '父親的、父系的' },
      { word: 'fatherland', formula: 'father + land', meaning: '祖國、故土' }
    ],
    memory: {
      cognatesDaily: 'ancestor (祖先), fatherland (祖國), patriarch (族長)',
      oneSentenceMnemonic: 'fore (之前) + father (父親) ➔ 「比父親更早的父親輩」就是 forefather (祖先)！',
      etymologicalOrigin: '古英文本土組合字，fore（之前）+ fæder（父親），從中古英文時期就已經這樣使用。',
      commonCollocations: [
        'our forefathers (我們的祖先)',
        'the forefathers of this nation (這個國家的先人/開國元老)'
      ],
      contrastiveTips: 'forefather 是英文本土字，語氣莊重、常用於談論民族或國家的先人（如美國開國先賢常被稱為 Founding Fathers 的呼應說法）；ancestor 是拉丁字根的字，用法更中性、廣泛，可以指任何人或物種的祖先。'
    },
    source: 'preset'
  };
