import { WordAnalysis } from '../../types';

export const promote: WordAnalysis = {
    word: 'promote',
    ipa: '/prəˈmoʊt/',
    partOfSpeech: 'verb (及物動詞)',
    chineseMeaning: '促進、晉升、推廣、宣傳',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 空間前綴',
        morpheme: 'pro-',
        originalForm: 'pro- (拉丁語)',
        meaning: '向前 (forward, ahead)',
        category: '前向空間',
        grammaticalRole: '前綴'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'mot',
        originalForm: 'movere / motus (拉丁語)',
        variantNote: '拉丁動詞 movere「移動」的過去分詞是 motus，英文裡的 -mote/-motion 這種拼法就是從這個分詞形式來的',
        meaning: '移動、推動 (to move)',
        category: '核心動作',
        grammaticalRole: '動作中心'
      }
    ],
    phonetic: {
      assimilationPath: 'pro- (向前) + movere (移動) ➔ 分詞幹 motus ➔ promotus ➔ 英文 promote',
      phoneticAnalysis: '拉丁動詞 movere 有兩種長相：原形 mov-，過去分詞是 mot-。promote 用的是分詞形式 mot-，唸的時候重音在後面 proMOTE。',
      dualStemInfo: {
        presentStem: 'mov- (如 move 移動, movable 可移動的, movie 電影)',
        supineStem: 'mot- (如 motion 動作/議案, motive 動機, emotion 情感)',
        meaning: '移動、推動 (move)'
      },
      ruleKey: 'mov/mot 雙詞幹'
    },
    semantic: {
      prefixMeaning: '向前 (pro-)',
      rootCoreAction: '移動、推動 (mot < movere)',
      suffixGrammar: '及物動詞',
      modernMeaning: '把一個人、產品或想法往前推，使它獲得更高的地位或更多人的關注',
      formulaDisplay: '{ 向前 (pro-) } + { 推動 (mot) } = 促進、晉升 (promote)',
      literalLogic: '字面上是「往前推動」，用在人身上是晉升，用在產品或想法上是宣傳推廣。'
    },
    familyTree: [
      { word: 'promotion', formula: 'promote + -ion', meaning: '晉升、促銷、宣傳 (名詞)' },
      { word: 'motion', formula: 'mot + -ion', meaning: '動作、提案' },
      { word: 'motive', formula: 'mot + -ive', meaning: '動機' },
      { word: 'emotion', formula: 'e- (往外) + mot + -ion', meaning: '情感、情緒 (被往外推動出來的感受)' },
      { word: 'remote', formula: 're- (向後) + mot + -e', meaning: '遙遠的、偏僻的 (被推到很遠的地方)' }
    ],
    memory: {
      cognatesDaily: 'get promoted (獲得升遷), promote a product (推廣產品), promote peace (促進和平)',
      oneSentenceMnemonic: 'pro (向前) + mote (推動) ➔ 「往前推一把」就是 promote (促進/晉升)！',
      etymologicalOrigin: '拉丁文 promotus，源自動詞 promovere (pro- + movere「移動」)',
      commonCollocations: [
        'promote a new product (推廣新產品)',
        'be promoted to manager (被晉升為經理)'
      ],
      contrastiveTips: 'promote 用於「晉升職位」時是被動語態居多（be promoted）；用於「宣傳」時則是主動，強調積極把某件事物往外推廣讓更多人知道。'
    },
    source: 'preset'
  };
