import { WordAnalysis } from '../../types';

export const correlate: WordAnalysis = {
    word: 'correlate',
    ipa: '/ˈkɔːr.ə.leɪt/',
    partOfSpeech: 'verb (及物/不及物動詞); also noun/adjective (較少用)',
    chineseMeaning: '（使）相互關聯、有相關性',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 同化前綴',
        morpheme: 'cor-',
        originalForm: 'con- (拉丁語)',
        variantNote: 'con- 遇到 r 這個音，會整個變身成 cor- (con- ➔ cor-)',
        meaning: '共同、相互 (together, mutually)',
        category: '空間/共同',
        grammaticalRole: '聚合前綴'
      },
      {
        type: 'root',
        label: '💎 核心字根',
        morpheme: 'relate',
        originalForm: 'relatus (拉丁語，由 re- 「回」 + latus 「帶、拿」組成)',
        variantNote: '拉丁文動詞 ferre（帶、拿）的完成分詞不是 fer 開頭而是完全不同的字 latus，這是拉丁文的「異幹」現象；relate/translate/legislate 這些字裡的 -late 都是這個 latus',
        meaning: '帶回、敘述、連結 (to bring back, relate)',
        category: '核心動作',
        grammaticalRole: '分詞詞幹'
      }
    ],
    phonetic: {
      assimilationPath: 'con- (共同) ➔ 同化為 cor- + relate (< re- + latus「帶」) ➔ correlate',
      phoneticAnalysis: 'con- 遇到 r 開頭的字，字尾的 n 會換成 r，唸起來才順口（con- + r... ➔ cor-，像 correlate, correct, correspond 都是這樣）。',
      ruleKey: 'con- ➔ cor- 語音同化 (前綴遇 r 全同化)'
    },
    semantic: {
      prefixMeaning: '共同、相互 (con- ➔ cor-)',
      rootCoreAction: '帶回來連結、敘述關聯 (relate < latus)',
      suffixGrammar: '及物/不及物動詞',
      modernMeaning: '兩個或多個事物之間彼此牽動、有著可以互相對應的關係',
      formulaDisplay: '{ 相互 (cor- < con-) } + { 連結、帶回 (relate) } = 使相互關聯 (correlate)',
      literalLogic: '字面上是「把兩件事情相互連結、帶到一起」，引申為統計或邏輯上「彼此有關聯」。'
    },
    familyTree: [
      { word: 'correlation', formula: 'correlate + -ion', meaning: '相關性、關聯（名詞）', level: 'TOEFL', tags: ['TOEFL', 'IELTS'] },
      { word: 'relate', formula: 're- (回) + late (帶)', meaning: '使有關聯、講述', level: 'TOEIC', tags: ['TOEIC'] },
      { word: 'relative', formula: 'relate + -ive', meaning: '相對的；親戚', level: 'Core', tags: ['TOEIC'] },
      { word: 'translate', formula: 'trans- (跨越) + late (帶)', meaning: '翻譯（把意思帶到另一種語言）', level: 'Core', tags: ['TOEIC'] },
      { word: 'legislate', formula: 'leg (法律) + is + late (帶)', meaning: '立法（把法律條文帶出來）', level: 'GRE', tags: ['GRE', 'TOEFL'] }
    ],
    memory: {
      cognatesDaily: 'correlate with (與...相關), positively/negatively correlated (正相關/負相關), a strong correlation (強烈的相關性)',
      oneSentenceMnemonic: 'cor (相互) + relate (連結、帶到一起) ➔ 「把兩件事互相連結在一起」就是 correlate (相互關聯)！',
      etymologicalOrigin: '中世紀拉丁文 correlatus（con- 共同/相互 + relatus，relatus 是 referre「帶回、陳述」的完成分詞）',
      visualImagery: '想像把兩條分開的線用一條繩子綁在一起，只要一條線動，另一條也會跟著晃動，這種「互相牽動」的畫面就是 correlate。',
      commonCollocations: [
        'correlate closely/strongly (高度相關)',
        'correlate variables (使變數相互關聯)',
        'a direct correlation between A and B (A 和 B 之間有直接的相關性)'
      ],
      contrastiveTips: 'correlate 強調「統計上兩者一起變化」，不一定是因果關係；cause 則明確表示「導致」，兩者常被提醒不要混淆——"correlation does not imply causation"（相關不等於因果）。'
    },
    source: 'preset'
  };
