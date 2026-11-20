import { WordAnalysis } from '../../types';

export const conducive: WordAnalysis = {
    word: 'conducive',
    ipa: '/kənˈduː.sɪv/',
    partOfSpeech: 'adj (形容詞)',
    chineseMeaning: '有助於...的、促成...的、有益的',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 前綴',
        morpheme: 'con-',
        originalForm: 'com-',
        meaning: '共同、朝向同一目標 (together, toward)',
        category: '方向聚集',
        grammaticalRole: '聚集強化'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'duc',
        originalForm: 'dūcere',
        variantNote: '來自很久很久以前的語言裡意思是「拉、帶領」的字 *deuk-。',
        meaning: '引導、帶領 (to lead, bring)',
        category: '核心動作',
        grammaticalRole: '核心動作'
      },
      {
        type: 'suffix',
        label: '🏷️ 後綴',
        morpheme: '-ive',
        originalForm: '-īvus',
        variantNote: '這個字尾放在字根後面，會把它變成形容詞，表示「有這種傾向或功能的」',
        meaning: '具有...傾向或功能的 (tending to)',
        category: '形容詞化',
        grammaticalRole: '形容詞後綴'
      }
    ],
    phonetic: {
      assimilationPath: 'con- (朝同向) + duc- (引領) + -ive ➔ conducive',
      phoneticAnalysis: '古拉丁文的字根 dūcere (引導) 有兩種長相：一種是 duc-（用在 conduct、produce、reduce、seduce 這些字裡），另一種是換了寫法的 duct-（用在 deduction、ductile、aqueduct 這些字裡）。',
      dualStemInfo: {
        presentStem: 'duc- (如 conducive, produce)',
        supineStem: 'duct- (如 conductor, deduction)',
        meaning: '引導、帶領'
      },
      ruleKey: 'duc / duct 雙詞幹'
    },
    semantic: {
      prefixMeaning: '朝著共同目標 (con-)',
      rootCoreAction: '引導帶路 (duc)',
      suffixGrammar: '具有...特性的 (-ive)',
      modernMeaning: '創造良好條件，引導環境或事物朝著積極結果發展',
      formulaDisplay: '{ 朝同目標 (con-) } + { 引導 (duc) } + { 具有特性 (-ive) } = 有助於...的 (conducive)',
      literalLogic: '古拉丁文原本的意思是「大家一起把事情引導到目標」，所以後來變成「有幫助的、有益的」。'
    },
    familyTree: [
      { word: 'conduct', formula: 'con- + duct', meaning: '引導、指揮、實施、品行' },
      { word: 'deduce', formula: 'de- (向下) + duce', meaning: '演繹、推斷 (從前提往下引出結論)' },
      { word: 'induce', formula: 'in- (進入) + duce', meaning: '引誘、引起、歸納' },
      { word: 'produce', formula: 'pro- (向前) + duce', meaning: '生產、製造 (往前引出成品)' }
    ],
    memory: {
      cognatesDaily: 'conduct (指揮), educate (教育 - e 向外 + duc 引導), produce (生產)',
      oneSentenceMnemonic: 'con (共同) + duc (引導) + ive (的) ➔ 「一起往好方向引導」就是 conducive (有助於/有益的)！',
      etymologicalOrigin: '古拉丁文 condūcere（con- 加上 dūcere「引導」）',
      commonCollocations: [
        'conducive to learning / studying (有助於學習的環境)',
        'an atmosphere conducive to creativity (有利於激發創造力的氛圍)'
      ]
    },
    source: 'preset'
  };
