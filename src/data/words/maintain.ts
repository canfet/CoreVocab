import { WordAnalysis } from '../../types';

export const maintain: WordAnalysis = {
    word: 'maintain',
    ipa: '/meɪnˈteɪn/',
    partOfSpeech: 'verb (及物動詞)',
    chineseMeaning: '維持、保持、保養、維修、堅稱主張',
    morphemes: [
      {
        type: 'root',
        label: '🚩 複合詞根',
        morpheme: 'main-',
        originalForm: 'manus (拉丁語)',
        variantNote: '古拉丁文的 manus（手）後來變成 main',
        meaning: '手、親手 (hand)',
        category: '工具/身體',
        grammaticalRole: '動作方式'
      },
      {
        type: 'root',
        label: '💎 核心字根',
        morpheme: 'tain',
        originalForm: 'tenēre (拉丁語)',
        variantNote: '古拉丁文的 tenēre 後來變成 tain',
        meaning: '握住、持 (to hold)',
        category: '核心動作',
        grammaticalRole: '動作本體'
      }
    ],
    phonetic: {
      assimilationPath: 'manus (手) + tenēre (握住) ➔ main + tain ➔ maintain',
      phoneticAnalysis: '古拉丁文把兩個字合起來 manu tenēre（用手握住），後來進到古法文變成 maintenir，最後變成現在的英文 maintain。',
      ruleKey: '手 (manu) + 握 (tenēre)'
    },
    semantic: {
      prefixMeaning: '親手 (manus ➔ main)',
      rootCoreAction: '握住不放 (tain)',
      suffixGrammar: '及物動詞',
      modernMeaning: '保持某種狀態不使其下降或惡化；定期檢修設備；堅定表達某一觀點',
      formulaDisplay: '{ 親手 (main) } + { 握住/持 (tain) } = 維持、保養 (maintain)',
      literalLogic: '字面上是「用手一直握穩某個東西，不讓它掉下去」，後來變成「維持運轉、保養器材、堅持立場」的意思。'
    },
    familyTree: [
      { word: 'maintenance', formula: 'maintain + -ance (名詞)', meaning: '維護、保養、維修費' },
      { word: 'contain', formula: 'con- + tain', meaning: '包含、容納、克制' },
      { word: 'retain', formula: 're- + tain', meaning: '保留、保持' },
      { word: 'sustain', formula: 'sus- + tain', meaning: '支撐、維持' }
    ],
    memory: {
      cognatesDaily: 'manual (手冊/手工的), manufacture (製造), manipulate (操縱)',
      oneSentenceMnemonic: 'main (手) + tain (握住) ➔ 「親手握緊不放」就是 maintain (維持/保養)！',
      etymologicalOrigin: '古拉丁文 manu tenēre（意思是「用手握住」）'
    },
    source: 'preset'
  };
