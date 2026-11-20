import { WordAnalysis } from '../../types';

export const disorder: WordAnalysis = {
    word: 'disorder',
    ipa: '/dɪsˈɔːr.dɚ/',
    partOfSpeech: 'noun (可數/不可數名詞); verb (及物動詞)',
    chineseMeaning: '混亂、失調、（生理/心理）疾患',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 否定前綴',
        morpheme: 'dis-',
        originalForm: 'dis- (拉丁語)',
        variantNote: 'dis- 加在名詞前面，表示「破壞、去掉原本的狀態」',
        meaning: '破壞、失去 (lack of, undo)',
        category: '否定極性',
        grammaticalRole: '否定前綴'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'order',
        originalForm: 'ordinem / ordo (拉丁語)',
        variantNote: '拉丁文 ordo 原本指「一排、一列」，後來引申成「秩序、規則」',
        meaning: '秩序、排列 (order, arrangement)',
        category: '核心概念',
        grammaticalRole: '概念中心'
      }
    ],
    phonetic: {
      assimilationPath: 'dis- (破壞) + ordo/ordinem (秩序) ➔ 古法語 ordre ➔ 英文 disorder',
      phoneticAnalysis: 'dis- 直接接在 order 前面，不需要變身，唸的時候重音落在第二個音節 disORder。',
      ruleKey: 'dis- + order 直接拼接'
    },
    semantic: {
      prefixMeaning: '破壞、失去 (dis-)',
      rootCoreAction: '排列整齊的秩序 (order)',
      suffixGrammar: '名詞/動詞',
      modernMeaning: '原本該有的排列、規則、身心機能被打亂，變得混亂或失調',
      formulaDisplay: '{ 破壞 (dis-) } + { 秩序 (order) } = 混亂、失調 (disorder)',
      literalLogic: '把原本排得好好的秩序打亂，就變成混亂；用在身體或心理上，就是機能失調的疾患。'
    },
    familyTree: [
      { word: 'order', formula: '字根本體', meaning: '秩序、順序、命令' },
      { word: 'orderly', formula: 'order + -ly', meaning: '整齊的、有條理的' },
      { word: 'disorderly', formula: 'disorder + -ly', meaning: '混亂的、擾亂治安的 (如 disorderly conduct)' },
      { word: 'ordain', formula: 'ordin- (排列) + -ain', meaning: '命令、任命、注定 (與 order 同源)' }
    ],
    memory: {
      cognatesDaily: 'eating disorder (飲食失調), public disorder (社會動亂), sleep disorder (睡眠障礙)',
      oneSentenceMnemonic: 'dis (破壞) + order (秩序) ➔ 「把秩序打亂」就是 disorder (混亂/失調)！',
      etymologicalOrigin: '古法語 desordre (dis- + ordre，源自拉丁文 ordo「排列、秩序」)',
      visualImagery: '想像一整排排得整整齊齊的書 (order)，被人一把推倒散落一地 (dis-)，就是 disorder 的畫面。',
      commonCollocations: [
        'mental disorder (精神疾患)',
        'in disorder (處於混亂狀態)',
        'cause disorder (造成混亂)'
      ],
      contrastiveTips: 'disorder 當醫學用語時，語氣比 disease 中性，較常指功能上的「失調」而非明確的病理疾病；chaos 則單純強調「一團混亂」，不特別用在醫學語境。'
    },
    source: 'preset'
  };
