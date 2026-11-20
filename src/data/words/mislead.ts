import { WordAnalysis } from '../../types';

export const mislead: WordAnalysis = {
    word: 'mislead',
    ipa: '/mɪsˈliːd/',
    partOfSpeech: 'verb (及物動詞)',
    chineseMeaning: '誤導、使人產生錯誤的想法',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 負面前綴',
        morpheme: 'mis-',
        originalForm: 'mis- (古英語)',
        variantNote: '英文本土前綴，直接加在動詞前面，沒有音變',
        meaning: '錯誤地 (wrongly)',
        category: '性質判斷',
        grammaticalRole: '負面前綴'
      },
      {
        type: 'root',
        label: '💎 核心字根',
        morpheme: 'lead',
        originalForm: 'lædan (古英語)',
        variantNote: '古英文的「引導」，是動詞 līðan（行走、前進）的使役形式，意思是「讓...跟著走」',
        meaning: '引導、帶領 (to guide)',
        category: '核心動作',
        grammaticalRole: '動作核心'
      }
    ],
    phonetic: {
      assimilationPath: 'mis- (錯誤) + lædan (引導，古英語) ➔ mislead',
      phoneticAnalysis: 'mis- 是零音變前綴。過去式是不規則變化 misled（不是 misleaded），跟 lead-led 的變化規則一致：/mɪsˈliːd/ ➔ /mɪsˈlɛd/。',
      ruleKey: 'mis- 零音變前綴 + 不規則動詞 lead'
    },
    semantic: {
      prefixMeaning: '錯誤地 (mis-)',
      rootCoreAction: '引導、帶領 (lead)',
      suffixGrammar: '及物動詞',
      modernMeaning: '故意或無意地讓別人朝錯誤的方向理解或行動',
      formulaDisplay: '{ 錯誤地 (mis-) } + { 引導 (lead) } = 誤導 (mislead)',
      literalLogic: '字面上是「帶錯路」，原本可能真的指帶人走錯方向，後來也用來指用言語或資訊讓人產生錯誤想法。'
    },
    familyTree: [
      { word: 'misleading', formula: 'mislead + -ing', meaning: '會誤導人的', level: 'TOEIC', tags: ['TOEIC'] },
      { word: 'leader', formula: 'lead + -er', meaning: '領導者', level: 'Core', tags: ['TOEIC'] },
      { word: 'misinform', formula: 'mis- + inform', meaning: '誤傳錯誤資訊', level: 'TOEFL', tags: ['TOEFL'] },
      { word: 'mistake', formula: 'mis- + take', meaning: '錯誤', level: 'Core', tags: ['TOEIC'] }
    ],
    memory: {
      cognatesDaily: 'mislead the public (誤導大眾), misleading advertisement (誤導性廣告), deliberately mislead (刻意誤導)',
      oneSentenceMnemonic: 'mis (錯誤) + lead (帶領) ➔ 「帶錯路」就是 mislead (誤導)！',
      etymologicalOrigin: '源自古英文 mislǣdan（mis- 錯誤 + lædan 引導），是英文本土組成的字，不是從拉丁文借來的。',
      visualImagery: '想像一位導遊故意帶著遊客走進錯誤的巷子，讓大家迷路——這就是 mislead 的畫面。',
      commonCollocations: [
        'mislead investors (誤導投資人)',
        'be misled by false information (被錯誤資訊誤導)'
      ],
      contrastiveTips: 'mislead 強調「讓人產生錯誤的認知或方向」，常常帶有刻意的意味；deceive（欺騙）語氣更強烈，通常明確是故意說謊。'
    },
    source: 'preset'
  };
