import { WordAnalysis } from '../../types';

export const abstain: WordAnalysis = {
    word: 'abstain',
    ipa: '/æbˈsteɪn/',
    partOfSpeech: 'verb (不及物動詞)',
    chineseMeaning: '戒絕、戒除（酒/煙/慾望）；棄權（投票）',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 前綴',
        morpheme: 'abs-',
        originalForm: 'ab- (拉丁)',
        variantNote: 'ab- 遇到 s 或 t 開頭的字，會變身成 abs-',
        meaning: '離開、遠離、免除 (away, from, off)',
        category: '遠離極性',
        grammaticalRole: '前綴'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'tain',
        originalForm: 'tenēre',
        meaning: '握住、持 (to hold)',
        category: '核心動作',
        grammaticalRole: '動作中心'
      }
    ],
    phonetic: {
      assimilationPath: 'abs- (遠離) + tenēre ➔ abstain (名詞: abstinence)',
      phoneticAnalysis: 'ab- 變身成 abs- 之後，加上 tenēre，就組成了 abstain。名詞的寫法是 abstinence。',
      ruleKey: 'abs- + tenēre'
    },
    semantic: {
      prefixMeaning: '遠離 (abs-)',
      rootCoreAction: '握住/拿取 (tain)',
      suffixGrammar: '不及物動詞',
      modernMeaning: '刻意把手縮回、不碰誘惑事物，自我克制或在投票中放棄表態',
      formulaDisplay: '{ 遠離 (abs-) } + { 握拿 (tain) } = 戒絕、棄權 (abstain)',
      literalLogic: '把手從東西上移開、不去握住它，後來變成「戒掉壞習慣」和「投票棄權」的意思。'
    },
    familyTree: [
      { word: 'abstinence', formula: 'abs- + tin + -ence', meaning: '節制、禁慾、戒酒' },
      { word: 'abstention', formula: 'abs- + tent + -ion', meaning: '棄權、戒絕 (名詞)' }
    ],
    memory: {
      cognatesDaily: 'abstain from voting (投票棄權), abstain from alcohol (戒酒)',
      oneSentenceMnemonic: 'abs (離開) + tain (握住) ➔ 「手放開、離遠一點」就是 abstain (戒除/棄權)！',
      etymologicalOrigin: '古拉丁文 abstinēre (abs- 「離開」 + tenēre 「握住」)'
    },
    source: 'preset'
  };
