import { WordAnalysis } from '../../types';

export const prospect: WordAnalysis = {
    word: 'prospect',
    ipa: '/ˈprɑː.spekt/',
    partOfSpeech: 'noun / verb (名詞/動詞)',
    chineseMeaning: '前景、前途、期望；勘探（金礦/油田）',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 前綴',
        morpheme: 'pro-',
        originalForm: 'pro-',
        meaning: '向前、遠處 (forward, forth)',
        category: '前向空間',
        grammaticalRole: '前綴'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'spect',
        originalForm: 'spectus',
        meaning: '觀看、展望 (to look, view)',
        category: '視覺動作',
        grammaticalRole: '概念中心'
      }
    ],
    phonetic: {
      assimilationPath: 'pro- (向前) + spect ➔ prospect',
      phoneticAnalysis: 'pro- 不會變身，直接跟後面的字組合在一起。',
      ruleKey: 'pro- + spect'
    },
    semantic: {
      prefixMeaning: '向前 (pro-)',
      rootCoreAction: '望去 (spect)',
      suffixGrammar: '名詞/動詞',
      modernMeaning: '站在高處向前遠眺未來的景象與發展機會',
      formulaDisplay: '{ 向前 (pro-) } + { 望向 (spect) } = 前景、展望 (prospect)',
      literalLogic: '往前看可以看到的遠景的意思。'
    },
    familyTree: [
      { word: 'prospective', formula: 'prospect + -ive', meaning: '預期的、未來的' },
      { word: 'prospector', formula: 'prospect + -or', meaning: '探礦者、淘金者' }
    ],
    memory: {
      cognatesDaily: 'career prospects (職業前景), prospective students (準新生)',
      oneSentenceMnemonic: 'pro (向前) + spect (望) ➔ 「向前看」就是 prospect (前途/展望)！',
      etymologicalOrigin: '來自古拉丁文 prōspicere。'
    },
    source: 'preset'
  };
