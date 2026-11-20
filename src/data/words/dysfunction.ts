import { WordAnalysis } from '../../types';

export const dysfunction: WordAnalysis = {
    word: 'dysfunction',
    ipa: '/dɪsˈfʌŋk.ʃən/',
    partOfSpeech: 'noun (名詞)',
    chineseMeaning: '功能障礙、失調、失能',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 負面前綴',
        morpheme: 'dys-',
        originalForm: 'dys- (古希臘語)',
        variantNote: '這是希臘文的前綴，常常用在醫學和心理學的專業用字裡，表示狀態「不正常、有困難」',
        meaning: '異常、困難、不良 (abnormal, difficult, bad)',
        category: '性質判斷',
        grammaticalRole: '負面前綴'
      },
      {
        type: 'root',
        label: '💎 核心字根',
        morpheme: 'funct',
        originalForm: 'fungi / functus (拉丁語)',
        variantNote: '跟 malfunction 用的是同一個拉丁字根，意思是「執行、運作」',
        meaning: '執行、運作 (to perform, execute)',
        category: '核心動作',
        grammaticalRole: '動作核心'
      },
      {
        type: 'suffix',
        label: '🏷️ 名詞字尾',
        morpheme: '-ion',
        originalForm: '-io / -ionis (拉丁語)',
        variantNote: '把動詞變成名詞的字尾',
        meaning: '...的狀態',
        category: '抽象名詞',
        grammaticalRole: '名詞化後綴'
      }
    ],
    phonetic: {
      assimilationPath: 'dys- (異常，希臘語) + fungi/functus (執行，拉丁語) ➔ funct + -ion (名詞化) ➔ dysfunction',
      phoneticAnalysis: 'dysfunction 是希臘字首加拉丁字根拼成的「混血字」，這種組合在醫學用語裡很常見。dys- 唸 /dɪs/，重音落在 -func-：/dɪsˈfʌŋk.ʃən/。',
      ruleKey: '希臘字首 + 拉丁字根混合複合詞'
    },
    semantic: {
      prefixMeaning: '異常、困難地 (dys-)',
      rootCoreAction: '執行、運作 (funct)',
      suffixGrammar: '名詞化 (-ion)',
      modernMeaning: '器官、系統或關係沒辦法照正常方式運作，出現障礙或失調',
      formulaDisplay: '{ 異常 (dys-) } + { 運作 (funct) } + { 的狀態 (-ion) } = 功能障礙 (dysfunction)',
      literalLogic: '字面上是「不正常地運作」，跟 malfunction「運作得不好」意思很接近，但 dysfunction 更常用在身體器官、心理或人際關係上。'
    },
    familyTree: [
      { word: 'malfunction', formula: 'mal- (不良) + funct + -ion', meaning: '(機器) 故障', level: 'TOEIC', tags: ['TOEIC'] },
      { word: 'dyslexia', formula: 'dys- + lexia (文字/閱讀)', meaning: '失讀症、閱讀障礙', level: 'GRE', tags: ['GRE'] },
      { word: 'dystopia', formula: 'dys- + topia (地方)', meaning: '反烏托邦', level: 'GRE', tags: ['GRE'] },
      { word: 'function', formula: 'funct + -ion', meaning: '功能', level: 'Core', tags: ['TOEIC'] }
    ],
    memory: {
      cognatesDaily: 'family dysfunction (家庭失能), sexual dysfunction (性功能障礙), organ dysfunction (器官功能障礙)',
      oneSentenceMnemonic: 'dys (異常) + function (運作) ➔ 「運作不正常」就是 dysfunction (功能障礙)！',
      etymologicalOrigin: 'dys- 源自古希臘文，本來就有「壞、難」的意思，19世紀末開始被醫學界拿來跟拉丁字根組成新的專業術語，dysfunction 就是其中之一。',
      visualImagery: '想像一個原本運轉順暢的齒輪機構，其中一顆齒輪卡住轉不動，導致整台機器的功能都亂了套。',
      commonCollocations: [
        'cognitive dysfunction (認知功能障礙)',
        'a dysfunctional family (失能的家庭)'
      ],
      contrastiveTips: 'malfunction 多半形容「機器」壞掉；dysfunction 更常形容「人體器官、心理狀態或人際關係」運作失調，較少用在單純機械故障。'
    },
    source: 'preset'
  };
