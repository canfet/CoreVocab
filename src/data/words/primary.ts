import { WordAnalysis } from '../../types';

export const primary: WordAnalysis = {
    word: 'primary',
    ipa: '/ˈpraɪˌmer.i/',
    partOfSpeech: 'adjective / noun (形容詞/名詞)',
    chineseMeaning: '首要的、主要的；最初的、基本的；（美式）初選',
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
        type: 'suffix',
        label: '🏷️ 形容詞字尾',
        morpheme: '-ary',
        originalForm: '-arius (拉丁語)',
        variantNote: '這是拉丁文很常見的形容詞/名詞字尾，表示「與...有關的、屬於...的」，很多英文常見字都用這個字尾（像 ordinary, military）。',
        meaning: '與...有關的、屬於...的 (pertaining to, connected with)',
        category: '形容詞化',
        grammaticalRole: '形容詞後綴'
      }
    ],
    phonetic: {
      assimilationPath: 'primus (第一) ➔ primarius (第一位的、首要的) ➔ 古法文 primaire ➔ primary',
      phoneticAnalysis: '這個字直接由 primus 加上形容詞字尾 -arius 組成，沒有經過子音同化，是很規則的拼接方式。',
    },
    semantic: {
      prefixMeaning: '（無獨立前綴，prim- 本身即為字根）',
      rootCoreAction: '第一、最初 (prim)',
      suffixGrammar: '形容詞 (-ary)',
      modernMeaning: '在順序、重要性或時間上排在第一位的事物',
      formulaDisplay: '{ 第一/最初 (prim) } + { 與...有關的 (-ary) } = 首要的、主要的 (primary)',
      literalLogic: '字面就是「屬於第一位的」，所以可以指「最重要的（primary concern）」，也可以指「最初階段的（primary school 小學）」。'
    },
    familyTree: [
      { word: 'primitive', formula: 'prim (第一) + -itive', meaning: '原始的、簡陋的' },
      { word: 'prime', formula: 'prim (第一) + -e', meaning: '首要的、最好的；質數' },
      { word: 'primarily', formula: 'primary + -ly', meaning: '主要地、首要地' },
      { word: 'primordial', formula: 'prim (最初) + ordi (開始) + -al', meaning: '原始的、初生的' },
      { word: 'elementary', formula: 'element (基本要素) + -ary', meaning: '基本的、初級的' }
    ],
    memory: {
      cognatesDaily: 'prime minister (首相), primary school (小學), primarily (主要地)',
      oneSentenceMnemonic: 'prim (第一) + ary (與...有關的) ➔ 「排在第一位的」就是 primary (首要的)！',
      etymologicalOrigin: '來自拉丁文 primarius，由 primus（第一）加上形容詞字尾組成。',
      commonCollocations: [
        'primary concern/goal (首要考量/目標)',
        'primary school (小學，英式)',
        'presidential primary (總統初選，美式選舉制度)'
      ],
      contrastiveTips: 'primary 強調「順序上第一、最重要」，是廣泛的正式用字；principal 也表示「主要的」，但更常用於指「最重要的一個」（例如 principal reason），兩者常可互換但語感略有不同。'
    },
    source: 'preset'
  };
