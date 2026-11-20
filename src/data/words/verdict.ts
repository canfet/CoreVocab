import { WordAnalysis } from '../../types';

export const verdict: WordAnalysis = {
    word: 'verdict',
    ipa: '/ˈvɝː.dɪkt/',
    partOfSpeech: 'noun (可數名詞)',
    chineseMeaning: '（陪審團的）裁決、判決；定論、評價',
    morphemes: [
      {
        type: 'root',
        label: '💎 修飾字根',
        morpheme: 'ver',
        originalForm: 'vērus',
        meaning: '真實、真正 (true, truth)',
        category: '真實屬性',
        grammaticalRole: '前置修飾'
      },
      {
        type: 'root',
        label: '💎 動作字根',
        morpheme: 'dict',
        originalForm: 'dictum',
        meaning: '說話、宣告 (spoken, saying)',
        category: '言語動作',
        grammaticalRole: '核心名詞'
      }
    ],
    phonetic: {
      assimilationPath: 'vērus (真實) + dictum (宣告) ➔ Anglo-French verdit ➔ verdict',
      phoneticAnalysis: '由古拉丁文的 vēre dictum（真的說出的話）變來的。',
      ruleKey: 'ver (真) + dict (說)'
    },
    semantic: {
      prefixMeaning: '真實 (ver)',
      rootCoreAction: '宣告 (dict)',
      suffixGrammar: '名詞幹',
      modernMeaning: '陪審團在法庭上依據客觀事實宣告的最終正式裁決',
      formulaDisplay: '{ 真實 (ver) } + { 宣告 (dict) } = 裁決、定論 (verdict)',
      literalLogic: '發誓之後，說出真實的話的意思。'
    },
    familyTree: [
      { word: 'verify', formula: 'ver + -ify', meaning: '證實、核對' },
      { word: 'veracity', formula: 'ver + -acity', meaning: '真實性、誠實' }
    ],
    memory: {
      cognatesDaily: 'guilty verdict (有罪判決), reach a verdict (達成裁決)',
      oneSentenceMnemonic: 'ver (真實) + dict (說話) ➔ 「說出實話」就是 verdict (裁決/定論)！',
      etymologicalOrigin: '來自古拉丁文 vēre dictum。'
    },
    source: 'preset'
  };
