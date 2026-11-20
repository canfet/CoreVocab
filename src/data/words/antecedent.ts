import { WordAnalysis } from '../../types';

export const antecedent: WordAnalysis = {
    word: 'antecedent',
    ipa: '/ˌæn.t̬əˈsiː.dənt/',
    partOfSpeech: 'noun / adjective (名詞/形容詞)',
    chineseMeaning: 'n. 前事、先例、前身；(文法) 先行詞；(pl.) 家世背景 adj. 先前的、在先的',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 時間前綴',
        morpheme: 'ante-',
        originalForm: 'ante (拉丁語)',
        meaning: '在...之前 (before, in front of)',
        category: '時間順序',
        grammaticalRole: '時間前綴'
      },
      {
        type: 'root',
        label: '💎 核心字根',
        morpheme: 'ced',
        originalForm: 'cēdere / cessus',
        variantNote: '古拉丁文動詞 cēdere（走、讓步）有兩種長相：現在詞幹 ced- 和過去分詞詞幹 cess-。這個字用的是 ced- 這種寫法。',
        meaning: '走、前進、發生 (to go, move, happen)',
        category: '核心動作',
        grammaticalRole: '動作中心'
      },
      {
        type: 'suffix',
        label: '🏷️ 分詞字尾',
        morpheme: '-ent',
        originalForm: '-entem (拉丁現在分詞)',
        variantNote: '這個字尾來自古拉丁文動詞「正在做」的形式，會把動詞變成形容詞或名詞。',
        meaning: '...的、正在...的 (現在分詞性質)',
        category: '形容詞/名詞化',
        grammaticalRole: '構成分詞'
      }
    ],
    phonetic: {
      assimilationPath: 'ante- (之前) + cedere (走) ➔ antecedere (走在前面) ➔ 現在分詞 antecedens/antecedentem ➔ antecedent',
      phoneticAnalysis: '這個字是三段直接拼接組成，沒有音變。cēdere 這個動詞很常見，除了 ced- 這個寫法，過去分詞會變成 cess-（例如 access, success, process），兩種寫法在很多相關字裡都會出現，是個很值得記住的詞族。',
      dualStemInfo: {
        presentStem: 'ced- (如 precede, exceed, recede, concede)',
        supineStem: 'cess- (如 access, success, process, excess)',
        meaning: '走、讓步、前進 (go, move, yield)'
      },
      ruleKey: 'ced/cess 雙詞幹詞族'
    },
    semantic: {
      prefixMeaning: '在...之前 (ante-)',
      rootCoreAction: '走、發生 (ced)',
      suffixGrammar: '現在分詞形容詞/名詞 (-ent)',
      modernMeaning: '在某件事、某句話之前就已經存在或發生的事物；文法上指代名詞回頭指的那個名詞',
      formulaDisplay: '{ 之前 (ante-) } + { 走 (ced) } + { ...的 (-ent) } = 先前的事、先例 (antecedent)',
      literalLogic: '字面意思是「走在前面的（東西）」，引申成「發生在前面的事、可以參考的先例」。在文法上，代名詞指的那個名詞就是「先出現、走在前面」的字，所以叫做「先行詞」。'
    },
    familyTree: [
      { word: 'precede', formula: 'pre- (先) + cede (走)', meaning: '先於、在...之前發生' },
      { word: 'proceed', formula: 'pro- (向前) + ceed (走)', meaning: '繼續進行、前進' },
      { word: 'exceed', formula: 'ex- (超出) + ceed (走)', meaning: '超過、超出' },
      { word: 'recede', formula: 're- (向後) + cede (走)', meaning: '後退、逐漸消退' },
      { word: 'unprecedented', formula: 'un- (不) + pre- (先) + ced + -ented', meaning: '史無前例的' }
    ],
    memory: {
      cognatesDaily: 'proceed (進行), succeed (成功), process (過程)',
      oneSentenceMnemonic: 'ante (之前) + ced (走) + ent (...的) ➔ 「已經走在前面的」就是 antecedent (前事、先例)！',
      etymologicalOrigin: '來自拉丁文 antecedens，是動詞 antecedere（ante- 之前 + cedere 走）的現在分詞。',
      commonCollocations: [
        'a historical antecedent (歷史上的先例)',
        'without antecedent (前所未有)',
        'the antecedent of a pronoun (代名詞的先行詞)'
      ],
      contrastiveTips: 'antecedent 語氣較正式、學術，常用在文法或歷史脈絡；precedent 專指「可以拿來當依據的先例」（尤其法律判例），兩者意思相近但用法場合不同。'
    },
    source: 'preset'
  };
