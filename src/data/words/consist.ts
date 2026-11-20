import { WordAnalysis } from '../../types';

export const consist: WordAnalysis = {
    word: 'consist',
    ipa: '/kənˈsɪst/',
    partOfSpeech: 'verb (不及物動詞，不用進行式)',
    chineseMeaning: '由...組成、在於（本質是）',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 前綴',
        morpheme: 'con-',
        originalForm: 'con- (拉丁語)',
        meaning: '共同、一起 (together, with)',
        category: '空間/共同',
        grammaticalRole: '聚合前綴'
      },
      {
        type: 'root',
        label: '💎 核心字根',
        morpheme: 'sist',
        originalForm: 'sistere (拉丁語，是 stare「站立」的使役形式)',
        meaning: '站立、存在 (to stand, exist)',
        category: '核心動作',
        grammaticalRole: '核心語義'
      }
    ],
    phonetic: {
      assimilationPath: 'con- (共同) + sistere (使站立，來自 stare「站」) ➔ consistere ➔ consist',
      phoneticAnalysis: 'con- 在 s 開頭的字前面不需要同化，直接拼接（con- + sist ➔ consist，跟 assist 的 as- + sist 不同，因為 assist 的前綴是 ad- 才需要變身）。',
      ruleKey: 'con- 無同化直接拼接'
    },
    semantic: {
      prefixMeaning: '共同、一起 (con-)',
      rootCoreAction: '站立、存在 (sist < sistere < stare)',
      suffixGrammar: '不及物動詞 (狀態動詞，不用進行式)',
      modernMeaning: '各個部分共同站立、組合在一起，形成一個整體的本質內容',
      formulaDisplay: '{ 共同 (con-) } + { 站立 (sist) } = 由...組成、在於 (consist)',
      literalLogic: '字面上是「大家一起站在那裡」，引申為「整體是由這些部分共同組成、構成」。'
    },
    familyTree: [
      { word: 'consistent', formula: 'consist + -ent', meaning: '一致的、前後連貫的', level: 'TOEIC', tags: ['TOEIC'] },
      { word: 'consistency', formula: 'consistent + -y', meaning: '一致性、連貫性', level: 'TOEFL', tags: ['TOEFL'] },
      { word: 'assist', formula: 'ad- ➔ as- (朝向) + sist (站立)', meaning: '協助（站在旁邊扶著）', level: 'TOEIC', tags: ['TOEIC'] },
      { word: 'resist', formula: 're- (反抗) + sist (站立)', meaning: '抵抗（站著頂住）', level: 'TOEIC', tags: ['TOEIC'] },
      { word: 'persist', formula: 'per- (自始至終) + sist (站立)', meaning: '堅持、持續存在', level: 'TOEFL', tags: ['TOEFL', 'GRE'] }
    ],
    memory: {
      cognatesDaily: 'consist of (由...組成), a team consisting of five members (由五名成員組成的團隊)',
      oneSentenceMnemonic: 'con (一起) + sist (站立) ➔ 「各個部分一起站在那裡」就是 consist (由...組成)！',
      etymologicalOrigin: '拉丁文 consistere（con- 共同 + sistere 使站立，而 sistere 是 stare「站」的使役形式）',
      visualImagery: '想像一支隊伍由好幾名成員一起站在同一排，這排隊伍「是由」這些人「共同站立組成」的，這就是 consist of 的畫面。',
      commonCollocations: [
        'consist of (由...組成，固定搭配 of)',
        'the committee consists of ten members (委員會由十名成員組成)'
      ],
      contrastiveTips: 'consist of 是主動語態、不能改成被動（不能說 is consisted of）；comprise 是「整體 comprise 部分」；compose 則是「部分 compose 整體」，被動式 is composed of 才是正確用法——三者的主受詞方向要小心分辨。'
    },
    source: 'preset'
  };
