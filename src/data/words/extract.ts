import { WordAnalysis } from '../../types';

export const extract: WordAnalysis = {
  word: 'extract',
  ipa: '/ɪkˈstrækt/ (動詞); /ˈɛkstrækt/ (名詞)',
  partOfSpeech: 'verb / noun (及物動詞/名詞)',
  chineseMeaning: '萃取、拔出、取出（動詞）；摘錄、萃取物（名詞）',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 空間前綴',
      morpheme: 'ex-',
      originalForm: 'ex- (拉丁語)',
      variantNote: 'ex- 在 tr 這個子音群前面不會變形，直接拼接成 extract-。',
      meaning: '向外、出來 (out)',
      category: '空間/方向',
      grammaticalRole: '方向前綴'
    },
    {
      type: 'root',
      label: '💎 核心字根',
      morpheme: 'tract',
      originalForm: 'trahere / tractus (拉丁語)',
      variantNote: 'trahere 是「拉、拖」的意思，現在式字幹是 trah-；extract 用的是它的完成被動分詞字幹 tractus，也就是 tract-。',
      meaning: '拉、拖 (to pull, draw)',
      category: '核心動作',
      grammaticalRole: '動作中心'
    }
  ],
  phonetic: {
    assimilationPath: 'ex- (向外) + trahere/tractus (拉) ➔ extrahere ➔ extractus ➔ extract',
    phoneticAnalysis: '這是沒有明顯音變的透明拼接字，ex- 直接接上以子音群 tr 開頭的字根。作動詞時重音在後面 ex-TRACT，作名詞時重音在前 EX-tract，是常見的名詞/動詞重音轉移模式。',
    dualStemInfo: {
      presentStem: 'trahere / trah- (現在式字幹)',
      supineStem: 'tractus / tract- (完成被動分詞字幹)',
      meaning: '拉、拖 (extract 用的是 tract- 這個字幹，同一字幹也出現在 attract、contract 等字裡)'
    }
  },
  semantic: {
    prefixMeaning: '向外 (ex-)',
    rootCoreAction: '拉、拖 (tract < trahere)',
    suffixGrammar: '及物動詞/名詞',
    modernMeaning: '把東西用力「向外拉出來」，可以是實體的（如拔牙、萃取精華），也可以是抽象的（如摘錄一段文字）',
    formulaDisplay: '{ 向外 (ex-) } + { 拉 (tract) } = 萃取、拔出 (extract)',
    literalLogic: '字面上是「用力向外拉出來」，用在物質上就是萃取精華，用在文字上就是摘錄一段，用在牙齒上就是拔牙。'
  },
  familyTree: [
    { word: 'extraction', formula: 'extract + -ion (名詞)', meaning: '萃取、拔出（的過程）', level: 'TOEFL', tags: ['TOEFL'] },
    { word: 'attract', formula: 'at- (朝向) + tract (拉)', meaning: '吸引', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'contract', formula: 'con- (一起) + tract (拉)', meaning: '合約；收縮', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'distract', formula: 'dis- (分散) + tract (拉)', meaning: '使分心', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'abstract', formula: 'abs- (離開) + tract (拉)', meaning: '摘要；抽象的', level: 'TOEFL', tags: ['TOEFL', 'GRE'] }
  ],
  memory: {
    cognatesDaily: 'extract information (取得資訊), tooth extraction (拔牙), vanilla extract (香草精)',
    oneSentenceMnemonic: 'ex (向外) + tract (拉) ➔ 用力「向外拉出」就是 extract (萃取、拔出)！',
    etymologicalOrigin: '拉丁語 extrahere（ex- 「向外」 + trahere 「拉」），完成被動分詞 extractus',
    visualImagery: '想像牙醫用鉗子牢牢夾住牙齒，用力向外一拔，那個「向外拉出」的瞬間就是 extract。',
    commonCollocations: ['extract information/data (取得資訊/資料)', 'extract a tooth (拔牙)', 'an extract from a book (書中的摘錄)'],
    contrastiveTips: 'extract 強調「用力或費工夫把東西拉出來」，帶有一點阻力感；remove 只是單純「移除、拿走」，沒有那種拉扯出來的力道感。'
  },
  source: 'preset'
};
