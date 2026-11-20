import { WordAnalysis } from '../../types';

export const abstract: WordAnalysis = {
  word: 'abstract',
  ipa: '/ˈæb.strækt/ (名詞/形容詞); /æbˈstrækt/ (動詞)',
  partOfSpeech: 'noun / adjective / verb (名詞/形容詞/及物動詞)',
  chineseMeaning: '（名詞）摘要、概要；（形容詞）抽象的；（動詞）抽取、提煉、摘錄',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 同化前綴',
      morpheme: 'abs-',
      originalForm: 'ab- (拉丁語)',
      variantNote: 'ab- 遇到 t 這個音，會變身成 abs- (ab- ➔ abs-)，跟 abstain, abstention 是同一種變化',
      meaning: '離開、抽離 (away, off)',
      category: '遠離極性',
      grammaticalRole: '前綴'
    },
    {
      type: 'root',
      label: '💎 核心字根',
      morpheme: 'tract',
      originalForm: 'trahere / tractus (拉丁語)',
      variantNote: 'trahere(拉、拖)的現在式字幹是 trah-，完成被動分詞字幹是 tractus；abstract 用的正是這個分詞字幹',
      meaning: '拉、拖 (to pull, draw)',
      category: '核心動作',
      grammaticalRole: '分詞詞幹'
    }
  ],
  phonetic: {
    assimilationPath: 'ab- (離開) ➔ 同化為 abs- + trahere/tractus (拉) ➔ abstractus ➔ abstract',
    phoneticAnalysis: 'ab- 遇到 t 開頭的字根，加上 s 才唸得順口，變成 abs-。當名詞（摘要）或形容詞（抽象的）時，重音在前 AB-stract；當動詞（抽取）時，重音在後 ab-STRACT，這是常見的名動重音位移。',
    dualStemInfo: {
      presentStem: 'trahere / trah- (現在式字幹)',
      supineStem: 'tractus / tract- (完成被動分詞字幹，abstract 用這個)',
      meaning: '拉、拖'
    },
    ruleKey: 'ab- ➔ abs- 前綴同化 + 名動重音位移'
  },
  semantic: {
    prefixMeaning: '離開、抽離 (abs- < ab-)',
    rootCoreAction: '拉、拖 (tract < trahere)',
    suffixGrammar: '名詞/形容詞/動詞',
    modernMeaning: '把某個概念或重點「從具體事物中抽拉出來」，脫離了實體形式，就變成抽象的想法；用在論文上，就是把全文重點「抽取」出來寫成摘要',
    formulaDisplay: '{ 抽離 (abs-) } + { 拉 (tract) } = 抽取、摘要、抽象的 (abstract)',
    literalLogic: '字面上是「把東西從原本的地方拉開、抽離出來」，抽離了具體形體剩下的概念就是「抽象的」，抽離了全文重點寫成一段就是「摘要」。'
  },
  familyTree: [
    { word: 'abstraction', formula: 'abstract + -ion', meaning: '抽象化、抽象概念', level: 'GRE', tags: ['GRE'] },
    { word: 'extract', formula: 'ex- (向外) + tract', meaning: '萃取、拔出', level: 'TOEFL', tags: ['TOEFL'] },
    { word: 'attract', formula: 'at- (朝向) + tract', meaning: '吸引', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'contract', formula: 'con- (一起) + tract', meaning: '合約；收縮', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'subtract', formula: 'sub- (在下方) + tract', meaning: '減去', level: 'TOEIC', tags: ['TOEIC'] }
  ],
  memory: {
    cognatesDaily: 'an abstract concept (抽象概念), write an abstract (寫摘要), abstract art (抽象藝術)',
    oneSentenceMnemonic: 'abs (抽離) + tract (拉) ➔ 「把重點從整體裡抽拉出來」就是 abstract (摘要/抽象的)！',
    etymologicalOrigin: '拉丁文 abstractus，是動詞 abstrahere (abs- 「離開」 + trahere 「拉」) 的完成被動分詞',
    visualImagery: '想像從一篇長長的論文裡，用鑷子把最精華的幾句話「抽拉」出來，濃縮成一段摘要，那個「抽離濃縮」的動作就是 abstract。',
    commonCollocations: [
      'write/submit an abstract (寫/繳交摘要)',
      'in the abstract (抽象而論、理論上)',
      'abstract thinking (抽象思考)'
    ],
    contrastiveTips: 'abstract 當名詞（AB-stract，摘要）跟形容詞（AB-stract，抽象的）重音在前；當動詞（ab-STRACT，抽取）重音在後，這種重音位移在 extract, contract, permit 等字也很常見，是常考的重音辨識題。'
  },
  source: 'preset'
};
