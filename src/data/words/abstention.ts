import { WordAnalysis } from '../../types';

export const abstention: WordAnalysis = {
  word: 'abstention',
  ipa: '/æbˈstɛn.ʃən/',
  partOfSpeech: 'noun (可數/不可數名詞)',
  chineseMeaning: '棄權（投票）；戒絕、節制（酒精/慾望等）',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 同化前綴',
      morpheme: 'abs-',
      originalForm: 'ab- (拉丁語)',
      variantNote: 'ab- 遇到 t 這個音，會變身成 abs- (ab- ➔ abs-)',
      meaning: '離開、遠離 (away, from)',
      category: '遠離極性',
      grammaticalRole: '前綴'
    },
    {
      type: 'root',
      label: '💎 字根',
      morpheme: 'tent',
      originalForm: 'tenēre / tentus (拉丁語)',
      variantNote: 'tenēre(握住)的動詞形態通常用 -tain（如 abstain），但變成名詞時改用過去分詞的形態 -tent，這跟 retain/retention 是同一套規律',
      meaning: '握住、持有 (to hold)',
      category: '核心動作',
      grammaticalRole: '分詞詞幹'
    },
    {
      type: 'suffix',
      label: '🏷️ 名詞字尾',
      morpheme: '-ion',
      originalForm: '-io, -ionis (拉丁語)',
      variantNote: '這個字尾加在動詞字根後面，會把動作變成名詞，表示「...的動作或狀態」',
      meaning: '動作、狀態 (act, state)',
      category: '抽象名詞化',
      grammaticalRole: '構成名詞'
    }
  ],
  phonetic: {
    assimilationPath: 'ab- (遠離) ➔ 同化為 abs- + tenēre (握) ➔ 過去分詞 tentus ➔ abstention',
    phoneticAnalysis: 'abstain 和 abstention 是同一個拉丁字根 tenēre 的兩種面貌：動詞用 -tain，名詞用 -tent，這跟 retain/retention 的規律一樣。',
    dualStemInfo: {
      presentStem: 'tain- (如 abstain)',
      supineStem: 'tent- (如 abstention, retention)',
      meaning: '握住、持有'
    },
    ruleKey: '拉丁雙詞幹 tain/tent + abs- 前綴同化'
  },
  semantic: {
    prefixMeaning: '遠離 (abs-)',
    rootCoreAction: '握住 (tent < tenēre)',
    suffixGrammar: '抽象名詞 (-ion)',
    modernMeaning: '主動把手縮回、不去握住某個選項，用在投票上就是刻意不表態，用在生活習慣上就是戒除',
    formulaDisplay: '{ 遠離 (abs-) } + { 握住 (tent) } + { 狀態 (-ion) } = 棄權、戒絕 (abstention)',
    literalLogic: '字面上是「把手從東西上移開、不去握它」的狀態，用在投票就是「棄權」，用在生活習慣上就是「戒除」。'
  },
  familyTree: [
    { word: 'abstain', formula: 'abs- + tain', meaning: '戒絕、棄權（動詞）', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'abstinence', formula: 'abs- + tin + -ence', meaning: '節制、禁慾', level: 'TOEFL', tags: ['TOEFL'] },
    { word: 'retention', formula: 're- + tent + -ion', meaning: '保留、記憶力', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'contain', formula: 'con- + tain', meaning: '包含、容納', level: 'Core', tags: ['TOEIC'] },
    { word: 'tenacious', formula: 'ten + -acious', meaning: '堅韌不拔的', level: 'GRE', tags: ['GRE'] }
  ],
  memory: {
    cognatesDaily: 'abstain from voting (投票棄權), abstention rate (棄權率), sexual abstention (禁慾)',
    oneSentenceMnemonic: 'abs (遠離) + tent (握住的狀態) + ion (...這件事) ➔ 「把手遠遠移開、不去握」就是 abstention (棄權/戒絕)！',
    etymologicalOrigin: '拉丁文 abstentio(n-)，源自動詞 abstinēre (abs- 「遠離」 + tenēre 「握住」) 的過去分詞 abstentus',
    visualImagery: '想像投票時大家都舉手表態，你卻把手縮回胸前、遠離投票箱，那個「刻意不伸手」的畫面就是 abstention。',
    commonCollocations: [
      'abstention from voting (投票棄權)',
      'a policy of abstention (禁慾/戒絕的原則)',
      '5 votes for, 2 against, 1 abstention (5票贊成、2票反對、1票棄權)'
    ],
    contrastiveTips: 'abstention 是名詞，指「棄權/戒絕」這個狀態或結果；abstain 是對應的動詞。投票時 voters abstain (動詞)，紀錄下來就是 an abstention (名詞)。'
  },
  source: 'preset'
};
