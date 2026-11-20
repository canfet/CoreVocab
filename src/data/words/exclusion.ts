import { WordAnalysis } from '../../types';

export const exclusion: WordAnalysis = {
  word: 'exclusion',
  ipa: '/ɪkˈskluːʒən/',
  partOfSpeech: 'noun (不可數/可數名詞)',
  chineseMeaning: '排除、排斥；不包括在內',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 空間前綴',
      morpheme: 'ex-',
      originalForm: 'ex- (拉丁語)',
      variantNote: 'ex- 在 cl 這個子音群前面不會變形，直接拼接成 exclus-。',
      meaning: '向外、離開 (out, away from)',
      category: '空間/方向',
      grammaticalRole: '方向前綴'
    },
    {
      type: 'root',
      label: '💎 核心字根',
      morpheme: 'clus',
      originalForm: 'claudere / clausus (拉丁語)',
      variantNote: 'claudere 是「關閉」的意思。在 ex- 這類複合字裡，claudere 會變成 -cludere（如 excludere），它的完成被動分詞字幹也從 clausus 弱化成 clusus，exclusion 用的正是這個 clus- 字幹。',
      meaning: '關閉、關上 (to close, shut)',
      category: '核心動作',
      grammaticalRole: '動作中心'
    },
    {
      type: 'suffix',
      label: '🏷️ 名詞字尾',
      morpheme: '-ion',
      originalForm: '-io / -ionis (拉丁語)',
      meaning: '...的動作、過程 (act or result of)',
      category: '抽象名詞',
      grammaticalRole: '名詞化後綴'
    }
  ],
  phonetic: {
    assimilationPath: 'ex- (向外) + claudere/clausus (關閉，弱化為 -cludere/-clusus) + -ion (動作) ➔ exclusio ➔ exclusion',
    phoneticAnalysis: '這個字前綴沒有明顯音變，ex- 直接接上以子音群 cl 開頭的字根。字根本身的完成被動分詞從 clausus 弱化成 clusus，這種母音弱化在複合動詞裡很常見。',
    dualStemInfo: {
      presentStem: 'claudere / clud- (現在式字幹，複合字中弱化)',
      supineStem: 'clausus / clus- (完成被動分詞字幹，複合字中弱化)',
      meaning: '關閉 (clus- 這個字幹也出現在 conclusion、seclusion 等字裡)'
    }
  },
  semantic: {
    prefixMeaning: '向外 (ex-)',
    rootCoreAction: '關閉、關上門 (clus < claudere)',
    suffixGrammar: '名詞 (-ion)',
    modernMeaning: '把某人或某物「關在門外」的動作，引申為將其排除在群體、資格或計算範圍之外',
    formulaDisplay: '{ 向外 (ex-) } + { 關閉 (clus) } + { ...的動作 (-ion) } = 排除 (exclusion)',
    literalLogic: '字面上是「把門關起來，讓外面的人進不來」，引申為把某人或某事排除在範圍、資格、討論之外。'
  },
  familyTree: [
    { word: 'exclude', formula: 'ex- (向外) + clude (關閉)', meaning: '排除、不包括（動詞）', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'exclusive', formula: 'exclude + -ive (形容詞)', meaning: '獨家的、排他的', level: 'TOEIC', tags: ['TOEIC', 'IELTS'] },
    { word: 'conclude', formula: 'con- (完全) + clude (關閉)', meaning: '總結、下結論（字面：把討論關起來）', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'conclusion', formula: 'con- + clus (關閉) + -ion', meaning: '結論、結尾', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'include', formula: 'in- (向內) + clude (關閉)', meaning: '包含（字面：關在裡面）', level: 'Core', tags: ['TOEIC'] }
  ],
  memory: {
    cognatesDaily: 'social exclusion (社會排斥), exclusion from a club (被俱樂部排除在外), exclusion criteria (排除條件)',
    oneSentenceMnemonic: 'ex (向外) + clus (關閉) + ion (...的動作) ➔ 把門「向外關上」不讓某人進來的動作就是 exclusion (排除)！',
    etymologicalOrigin: '拉丁語 exclusio（ex- 「向外」 + claudere 「關閉」），完成被動分詞 clusus',
    visualImagery: '想像一扇厚重的門在你面前「碰」一聲關上，把你關在門外，那個被拒於門外的畫面就是 exclusion。',
    commonCollocations: ['social exclusion (社會排斥)', 'exclusion clause (排除條款)', 'to the exclusion of (排除...之外)'],
    contrastiveTips: 'exclusion 是「把...排除在外」的名詞，強調阻擋在外；elimination 則是「完全消除、淘汰」，強調徹底去除，語感更強烈。'
  },
  source: 'preset'
};
