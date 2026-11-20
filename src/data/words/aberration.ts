import { WordAnalysis } from '../../types';

export const aberration: WordAnalysis = {
  word: 'aberration',
  ipa: '/ˌæb.əˈreɪ.ʃən/',
  partOfSpeech: 'noun (可數名詞)',
  chineseMeaning: '越軌、脫離常軌的行為；（光學）像差；（統計）異常值',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 前綴',
      morpheme: 'ab-',
      originalForm: 'ab- (拉丁語)',
      variantNote: 'ab- 在母音前面沒有變形，直接拼接',
      meaning: '離開、偏離 (away, off)',
      category: '空間/方向',
      grammaticalRole: '方向前綴'
    },
    {
      type: 'root',
      label: '💎 核心字根',
      morpheme: 'err',
      originalForm: 'errāre (拉丁語)',
      variantNote: 'errāre 是「漫遊、迷路、犯錯」的意思，過去分詞是 errātus，這個字根也出現在 error、erratic 裡',
      meaning: '漫遊、偏離正軌 (to wander, stray)',
      category: '核心動作',
      grammaticalRole: '動作中心'
    },
    {
      type: 'suffix',
      label: '🏷️ 名詞字尾',
      morpheme: '-ation',
      originalForm: '-atio, -ationis (拉丁語)',
      variantNote: '加在動詞字根後面，把動作變成抽象名詞',
      meaning: '動作、狀態、結果 (act, result of)',
      category: '抽象名詞化',
      grammaticalRole: '構成名詞'
    }
  ],
  phonetic: {
    assimilationPath: 'ab- (偏離) + errāre (漫遊) ➔ aberrāre ➔ aberrātus ➔ aberration',
    phoneticAnalysis: '這是沒有音變的透明拼接字，ab- 直接接上以母音開頭的字根 err-。',
    ruleKey: 'ab- 無同化直接拼接'
  },
  semantic: {
    prefixMeaning: '偏離 (ab-)',
    rootCoreAction: '漫遊、迷失方向 (err < errāre)',
    suffixGrammar: '抽象名詞 (-ation)',
    modernMeaning: '從原本應該遵循的正常路徑或標準上「偏離、迷失」出去，形成一次性、不尋常的偏差',
    formulaDisplay: '{ 偏離 (ab-) } + { 漫遊 (err) } + { 狀態 (-ation) } = 越軌、偏差 (aberration)',
    literalLogic: '字面上是「偏離正常路線到處漫遊」，引申為偶發的、不正常的偏差行為或現象。'
  },
  familyTree: [
    { word: 'error', formula: 'err + -or', meaning: '錯誤', level: 'Core', tags: ['TOEIC'] },
    { word: 'erratic', formula: 'err + -atic', meaning: '古怪的、不穩定的', level: 'GRE', tags: ['GRE'] },
    { word: 'erroneous', formula: 'err + -oneous', meaning: '錯誤的、謬誤的', level: 'TOEFL', tags: ['TOEFL'] },
    { word: 'aberrant', formula: 'ab- + err + -ant', meaning: '越軌的、異常的（形容詞）', level: 'GRE', tags: ['GRE'] }
  ],
  memory: {
    cognatesDaily: 'a temporary aberration (一時的脫序行為), statistical aberration (統計異常值), optical aberration (光學像差)',
    oneSentenceMnemonic: 'ab (偏離) + err (漫遊迷路) + ation (狀態) ➔ 「偏離正軌到處亂走」就是 aberration (越軌、偏差)！',
    etymologicalOrigin: '拉丁文 aberratio(n-)，源自動詞 aberrāre (ab- 「偏離」 + errāre 「漫遊、犯錯」)',
    visualImagery: '想像一支箭原本應該直直射向靶心，卻突然「偏離」軌道飛向奇怪的方向，那個脫離常軌的軌跡就是 aberration。',
    commonCollocations: [
      'a temporary/statistical aberration (一時的/統計上的異常)',
      'a mental aberration (精神上的錯亂)',
      'genetic aberration (基因異常)'
    ],
    contrastiveTips: 'aberration 強調「單一、偶發、脫離常態」的偏差，語氣偏學術（常用於統計、光學、心理學）；mistake 泛指日常生活中的「錯誤」，語氣更口語。'
  },
  source: 'preset'
};
