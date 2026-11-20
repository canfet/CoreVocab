import { WordAnalysis } from '../../types';

export const primitive: WordAnalysis = {
    word: 'primitive',
    ipa: '/ˈprɪm.ə.tɪv/',
    partOfSpeech: 'adjective / noun (形容詞/名詞)',
    chineseMeaning: '原始的、早期的；簡陋的、粗糙的（含貶義）',
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
        morpheme: '-itive',
        originalForm: '-itivus (拉丁語)',
        variantNote: '-ivus 是拉丁文很常見的形容詞字尾，表示「具有...性質的」；中間的 -it- 是連接音，這種 -itivus 的組合方式在很多拉丁文形容詞裡都看得到（像 sensitive, positive）。',
        meaning: '具有...性質的 (pertaining to, of the nature of)',
        category: '形容詞化',
        grammaticalRole: '形容詞後綴'
      }
    ],
    phonetic: {
      assimilationPath: 'primus (第一) ➔ primitivus (最初的、原本的) ➔ 古法文 primitif ➔ primitive',
      phoneticAnalysis: '這個字從拉丁文的 primus（第一）直接加上形容詞字尾 -itivus 組成，中間沒有子音同化，是很規則的拼接方式。',
    },
    semantic: {
      prefixMeaning: '（無獨立前綴，prim- 本身即為字根）',
      rootCoreAction: '第一、最初 (prim)',
      suffixGrammar: '形容詞 (-itive)',
      modernMeaning: '屬於最早、最初階段的狀態，引申指技術或方式簡單、未經開化或發展',
      formulaDisplay: '{ 第一/最初 (prim) } + { 具有...性質的 (-itive) } = 原始的、簡陋的 (primitive)',
      literalLogic: '字面就是「屬於最初階段的」，所以可以形容「最原始的社會/生物」，也可以帶一點負面語氣說「簡陋、沒有現代化」。'
    },
    familyTree: [
      { word: 'primary', formula: 'prim (第一) + -ary', meaning: '首要的、主要的' },
      { word: 'primal', formula: 'prim (最初) + -al', meaning: '原始的、根本的（強調本能）' },
      { word: 'prime', formula: 'prim (第一) + -e', meaning: '首要的、最好的；質數' },
      { word: 'primordial', formula: 'prim (最初) + ordi (開始) + -al', meaning: '原始的、初生的' },
      { word: 'prototype', formula: 'proto- (最初，希臘語) + type (印記)', meaning: '原型、雛形' }
    ],
    memory: {
      cognatesDaily: 'prime (最好的), primary school (小學), primal instinct (原始本能)',
      oneSentenceMnemonic: 'prim (第一/最初) + itive (...的) ➔ 「屬於最初階段的」就是 primitive (原始的)！',
      etymologicalOrigin: '來自拉丁文 primitivus，由 primus（第一）加上形容詞字尾組成，經古法文 primitif 進入英文。',
      commonCollocations: [
        'primitive society/tribe (原始社會/部落)',
        'primitive tools/conditions (簡陋的工具/條件)',
        'primitive instinct (原始本能)'
      ],
      contrastiveTips: 'primitive 常帶有「未開化、落後」的貶義色彩，使用時要注意語境（尤其談論人類文化時容易顯得不禮貌）；描述「最初的、根本的」若要保持中性，可以用 original 或 early 代替。'
    },
    source: 'preset'
  };
