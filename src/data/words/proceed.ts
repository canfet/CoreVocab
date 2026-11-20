import { WordAnalysis } from '../../types';

export const proceed: WordAnalysis = {
    word: 'proceed',
    ipa: '/proʊˈsiːd/',
    partOfSpeech: 'verb (不及物動詞)',
    chineseMeaning: '前進、繼續進行、著手',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 空間前綴',
        morpheme: 'pro-',
        originalForm: 'pro- (拉丁語)',
        meaning: '向前 (forward, onward)',
        category: '前向空間',
        grammaticalRole: '前綴'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'ceed',
        originalForm: 'cedere / cessus (拉丁語)',
        variantNote: '拉丁動詞 cedere「走、行進、讓步」的過去分詞是 cessus，proceed 這個字進入英文時拼法變成 -ceed（跟 exceed, succeed 一樣），跟同一字根的 -cede (precede, concede) 拼法不太一樣，但意思相通',
        meaning: '走、行進 (to go, move)',
        category: '核心動作',
        grammaticalRole: '動作中心'
      }
    ],
    phonetic: {
      assimilationPath: 'pro- (向前) + cedere (走) ➔ 分詞幹 cessus ➔ 古法語 proceder ➔ 英文 proceed',
      phoneticAnalysis: '拉丁動詞 cedere 的過去分詞是 cessus。proceed, exceed, succeed 這三個字拼成 -ceed，其他同字根的字像 precede, concede, recede 則拼成 -cede，這只是拼寫上歷史演變的差異，意思都跟「走、行進」有關。',
      dualStemInfo: {
        presentStem: 'ced- (如 precede 先於, concede 讓步, recede 後退)',
        supineStem: 'cess- (如 process 過程, success 成功, access 進入)',
        meaning: '走、讓步 (go, yield)'
      },
      ruleKey: 'ced/cess 雙詞幹'
    },
    semantic: {
      prefixMeaning: '向前 (pro-)',
      rootCoreAction: '走、行進 (ceed < cedere)',
      suffixGrammar: '不及物動詞',
      modernMeaning: '在做完某件事或得到許可之後，繼續往下一步前進',
      formulaDisplay: '{ 向前 (pro-) } + { 行進 (ceed) } = 前進、繼續進行 (proceed)',
      literalLogic: '字面上就是「向前走」，引申成程序、計畫上的「繼續進行」。'
    },
    familyTree: [
      { word: 'procedure', formula: 'pro- + ced + -ure', meaning: '程序、步驟' },
      { word: 'precede', formula: 'pre- (在先) + cede', meaning: '先於、領先' },
      { word: 'succeed', formula: 'sub- (接續) + ceed', meaning: '成功、繼承' },
      { word: 'process', formula: 'pro- + cess', meaning: '過程、加工' },
      { word: 'exceed', formula: 'ex- (超出) + ceed', meaning: '超過、超越' }
    ],
    memory: {
      cognatesDaily: 'proceed with caution (謹慎前進), proceed to the next step (進行下一步), please proceed (請繼續)',
      oneSentenceMnemonic: 'pro (向前) + ceed (走) ➔ 「繼續向前走」就是 proceed (前進/繼續進行)！',
      etymologicalOrigin: '拉丁文 procedere (pro- + cedere「走」)',
      commonCollocations: [
        'proceed to do something (接著去做某事)',
        'proceed with the plan (按計畫繼續進行)'
      ],
      contrastiveTips: 'proceed 是正式用詞，強調「按部就班、依程序繼續下去」，常用於書面或正式場合；continue 是中性、日常都能用的「繼續」，語域比 proceed 廣。'
    },
    source: 'preset'
  };
