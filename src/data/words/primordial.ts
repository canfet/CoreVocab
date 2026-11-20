import { WordAnalysis } from '../../types';

export const primordial: WordAnalysis = {
    word: 'primordial',
    ipa: '/praɪˈmɔːr.di.əl/',
    partOfSpeech: 'adjective (形容詞)',
    chineseMeaning: '原始的、最初的、初生的（尤指宇宙、地球或生命最早期的狀態）',
    morphemes: [
      {
        type: 'root',
        label: '💎 核心字根',
        morpheme: 'prim',
        originalForm: 'primus (拉丁語)',
        meaning: '第一、最初 (first)',
        category: '順序/等級',
        grammaticalRole: '概念中心'
      },
      {
        type: 'root',
        label: '💎 次要字根',
        morpheme: 'ordi',
        originalForm: 'ordīrī (拉丁語)',
        variantNote: '拉丁文動詞 ordiri 意思是「開始」，原本帶有「在織布機上牽第一條經線」的意象（織布前要先排好直線的線，才能開始織），這個字也跟英文的 order（順序、排列）系出同源。',
        meaning: '開始、起頭 (to begin)',
        category: '核心動作',
        grammaticalRole: '動作中心'
      },
      {
        type: 'suffix',
        label: '🏷️ 形容詞字尾',
        morpheme: '-al',
        originalForm: '-alis (拉丁語)',
        variantNote: '這是拉丁文很常見的形容詞字尾，加在名詞後面表示「與...有關的」。',
        meaning: '與...有關的 (pertaining to)',
        category: '形容詞化',
        grammaticalRole: '形容詞後綴'
      }
    ],
    phonetic: {
      assimilationPath: 'primus (第一) + ordiri (開始) ➔ primordium (最初的起頭、起源) ➔ primordialis ➔ primordial',
      phoneticAnalysis: '這個字由 primus 和 ordiri 的詞幹組合成名詞 primordium（起源），再加上形容詞字尾 -alis 變成 primordialis，最後進入英文。整個過程是規則的拼接，沒有子音同化。',
    },
    semantic: {
      prefixMeaning: '（無獨立前綴，prim- 為第一個字根）',
      rootCoreAction: '第一 (prim) + 開始 (ordi)',
      suffixGrammar: '形容詞 (-al)',
      modernMeaning: '存在於萬事萬物最初、最早期階段的狀態，常用於描述宇宙誕生、地球形成或生命起源時的原始狀態',
      formulaDisplay: '{ 第一 (prim) } + { 開始 (ordi) } + { 與...有關的 (-al) } = 原始的、初生的 (primordial)',
      literalLogic: '字面意思是「與最初的開端有關的」，也就是萬物「第一次開始」時的那個原始狀態，所以常用來形容宇宙誕生之初、地球形成初期或生命最早期的樣貌。'
    },
    familyTree: [
      { word: 'primitive', formula: 'prim (第一) + -itive', meaning: '原始的、簡陋的' },
      { word: 'primeval', formula: 'prim (最初) + aevum (時代)', meaning: '太古的、遠古的' },
      { word: 'order', formula: 'ordo/ordin- (排列，與 ordiri 同源)', meaning: '順序、命令' },
      { word: 'primordium', formula: 'primordial 的名詞原形 (醫學/生物學用語)', meaning: '原基、始基（器官發育最初的組織）' },
      { word: 'primary', formula: 'prim (第一) + -ary', meaning: '首要的、主要的' }
    ],
    memory: {
      cognatesDaily: 'primitive (原始的), order (順序), primary (首要的)',
      oneSentenceMnemonic: 'prim (第一) + ordi (開始) + al (...的) ➔ 「與萬物最初開端有關的」就是 primordial (原始的)！',
      etymologicalOrigin: '來自晚期拉丁文 primordialis，源自拉丁文 primordium（primus 第一 + ordiri 的詞幹，開始），字面意思接近「最初的起源」。',
      commonCollocations: [
        'primordial soup (原始湯，指生命起源前的化學物質混合體)',
        'primordial universe (原初宇宙)',
        'primordial instinct/fear (原始本能/恐懼)'
      ],
      contrastiveTips: 'primordial 語氣比 primitive 更宏大、更接近「宇宙級/生命起源級」的最初狀態，常見於科學或哲學語境（如 primordial soup 原始湯）；primitive 則更常用於形容「技術簡陋、未開化」，帶有比較評價性的語氣。'
    },
    source: 'preset'
  };
