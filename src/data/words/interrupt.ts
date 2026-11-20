import { WordAnalysis } from '../../types';

export const interrupt: WordAnalysis = {
    word: 'interrupt',
    ipa: '/ˌɪn.təˈrʌpt/',
    partOfSpeech: 'verb (及物/不及物動詞)',
    chineseMeaning: '打斷、中斷、干擾',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 前綴',
        morpheme: 'inter-',
        originalForm: 'inter- (拉丁語)',
        meaning: '在...之間、中間 (between)',
        category: '空間/方向',
        grammaticalRole: '前綴'
      },
      {
        type: 'root',
        label: '💎 核心字根',
        morpheme: 'rupt',
        originalForm: 'rumpere (拉丁語)，完成分詞幹 ruptus',
        variantNote: '拉丁文動詞 rumpere（弄破、折斷）的現在式字幹是 rump-，完成分詞字幹是 ruptus，interrupt 用的正是 rupt- 這個字幹。',
        meaning: '打破、折斷 (to break, burst)',
        category: '核心動作',
        grammaticalRole: '分詞詞幹'
      }
    ],
    phonetic: {
      assimilationPath: 'inter- (在中間) + rumpere/ruptus (打斷) ➔ interrumpere ➔ interruptus ➔ interrupt',
      phoneticAnalysis: '古拉丁文動詞 rumpere 也有雙詞幹：現在式 rump-（較少見）跟完成分詞 ruptus 變出來的 rupt-（如 disrupt, erupt, corrupt, bankrupt）。interrupt 就是直接借用 rupt- 這個字幹，接在 inter- 後面。',
      dualStemInfo: {
        presentStem: 'rump- (較罕見，如 rupture)',
        supineStem: 'rupt- (如 interrupt, disrupt, erupt, corrupt)',
        meaning: '打破、折斷 (to break, burst)'
      },
      ruleKey: '拉丁雙詞幹 rump/rupt'
    },
    semantic: {
      prefixMeaning: '在中間 (inter-)',
      rootCoreAction: '打斷、弄破 (rupt < rumpere)',
      suffixGrammar: '及物/不及物動詞',
      modernMeaning: '在一件事情進行到一半時，從中間硬生生把它打斷',
      formulaDisplay: '{ 在中間 (inter-) } + { 打斷 (rupt) } = 打斷、中斷 (interrupt)',
      literalLogic: '字面上是「在中間把它弄破」，用在說話或活動上，就是從中間硬生生打斷、使其中止。'
    },
    familyTree: [
      { word: 'interruption', formula: 'interrupt + -ion', meaning: '打斷、中斷（名詞）', level: 'TOEIC', tags: ['TOEIC'] },
      { word: 'disrupt', formula: 'dis- (分開) + rupt (打斷)', meaning: '擾亂、使中斷', level: 'TOEFL', tags: ['TOEFL', 'GRE'] },
      { word: 'erupt', formula: 'e- (向外) + rupt (打斷)', meaning: '爆發（火山/情緒）', level: 'TOEFL', tags: ['TOEFL'] },
      { word: 'corrupt', formula: 'cor- (完全) + rupt (打破)', meaning: '貪腐的、腐敗的', level: 'TOEFL', tags: ['TOEFL', 'GRE'] },
      { word: 'bankrupt', formula: 'bank + rupt (打破)', meaning: '破產的', level: 'TOEIC', tags: ['TOEIC'] }
    ],
    memory: {
      cognatesDaily: 'interrupt a conversation (打斷對話), sorry to interrupt (抱歉打斷一下)',
      oneSentenceMnemonic: 'inter (在中間) + rupt (打斷) ➔ 「從中間硬生生弄破」就是 interrupt (打斷)！',
      etymologicalOrigin: '拉丁文 interrumpere（inter- 「中間」 + rumpere 「打破」），完成分詞 interruptus',
      visualImagery: '想像一條原本連貫的隊伍，突然有人從中間硬生生插進來把隊伍截成兩半，那個「從中間弄斷」的畫面就是 interrupt。',
      commonCollocations: [
        'interrupt someone (打斷某人說話)',
        'without interruption (不間斷地)'
      ],
      contrastiveTips: 'interrupt 強調「打斷正在進行的動作或談話」；disturb 則泛指「打擾、使人分心」，不一定是中途打斷正在做的事。'
    },
    source: 'preset'
  };
