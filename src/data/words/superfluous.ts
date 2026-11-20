import { WordAnalysis } from '../../types';

export const superfluous: WordAnalysis = {
    word: 'superfluous',
    ipa: '/suːˈpɝː.flu.əs/',
    partOfSpeech: 'adj (形容詞)',
    chineseMeaning: '多餘的、過剩的、不必要的、累贅的',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 前綴',
        morpheme: 'super-',
        originalForm: 'super',
        meaning: '在上方、超過、過量 (above, over, excessive)',
        category: '程度/空間',
        grammaticalRole: '程度強化'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'flu',
        originalForm: 'fluere',
        meaning: '流動、湧出 (to flow)',
        category: '核心動作',
        grammaticalRole: '核心動作'
      },
      {
        type: 'suffix',
        label: '🏷️ 後綴',
        morpheme: '-ous',
        originalForm: '-ōsus',
        variantNote: '這個字尾放在字根後面，會把它變成形容詞，表示「充滿這個東西的」',
        meaning: '充滿...的 (full of)',
        category: '形容詞化',
        grammaticalRole: '形容詞後綴'
      }
    ],
    phonetic: {
      assimilationPath: 'super- (過量) + fluere ➔ flu (流動) + -ous ➔ superfluous',
      phoneticAnalysis: '古拉丁文的字根 fluere (流動) 變出一整個「flu / flux」家族的字。這個字比較長，重音會唸在第二個音節 /suːˈpɝː.flu.əs/。',
      ruleKey: 'flu / flux 流動詞族'
    },
    semantic: {
      prefixMeaning: '溢出杯緣 (super-)',
      rootCoreAction: '水流奔湧 (flu)',
      suffixGrammar: '充滿狀態的 (-ous)',
      modernMeaning: '數量多到超過所需極限，變成完全沒必要的累贅',
      formulaDisplay: '{ 過量/溢出 (super-) } + { 流動 (flu) } + { 的 (-ous) } = 多餘過剩的 (superfluous)',
      literalLogic: '古拉丁文原本的意思是「水滿到從碗邊滿出來」，後來也用來說任何多出來、不需要的東西。'
    },
    familyTree: [
      { word: 'fluent', formula: 'flu + -ent', meaning: '流利的、流暢的' },
      { word: 'affluent', formula: 'ad- ➔ af- (向) + flu + -ent', meaning: '富裕的 (財富滾滾湧來)' },
      { word: 'influence', formula: 'in- (進入) + flu + -ence', meaning: '影響力 (如液體注入心靈)' },
      { word: 'fluctuate', formula: 'fluct (波動) + -uate', meaning: '波動、起伏不定' }
    ],
    memory: {
      cognatesDaily: 'fluid (流體), fluent (流利的), influence (影響)',
      oneSentenceMnemonic: 'super (超過) + flu (流) + ous ➔ 「水多到滿溢流出來」就是 superfluous (多餘/累贅的)！',
      etymologicalOrigin: '古拉丁文 superfluus（super- 加上 fluere「流動」）',
      commonCollocations: [
        'superfluous details / words (多餘累贅的細節/贅詞)',
        'superfluous words / information (贅字贅詞、多餘的資訊)'
      ]
    },
    source: 'preset'
  };
