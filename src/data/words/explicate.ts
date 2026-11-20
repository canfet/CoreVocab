import { WordAnalysis } from '../../types';

export const explicate: WordAnalysis = {
  word: 'explicate',
  ipa: '/ˈɛksplɪkeɪt/',
  partOfSpeech: 'verb (及物動詞)',
  chineseMeaning: '詳細解釋、闡明（尤指理論、文本的意涵）',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 空間前綴',
      morpheme: 'ex-',
      originalForm: 'ex- (拉丁語)',
      variantNote: 'ex- 在 pl 這個子音群前面不會變形，直接拼接成 explic-。',
      meaning: '向外、展開 (out, forth)',
      category: '空間/方向',
      grammaticalRole: '方向前綴'
    },
    {
      type: 'root',
      label: '💎 核心字根',
      morpheme: 'plic',
      originalForm: 'plicare (拉丁語)',
      variantNote: 'plicare 是「摺疊」的意思，這個字根在英文裡有 plic-、ply-、pli- 等好幾種拼法（如 apply, comply, reply），都跟「摺疊、交疊」有關。',
      meaning: '摺疊 (to fold)',
      category: '核心動作',
      grammaticalRole: '動作中心'
    },
    {
      type: 'suffix',
      label: '🏷️ 動詞字尾',
      morpheme: '-ate',
      originalForm: '-atus (拉丁語過去分詞字尾)',
      variantNote: '-atus 原本是拉丁文動詞的過去分詞字尾，英文借入大量這類字之後，反過來把 -ate 當成一個能自由拼接、表示「使...、做...」的動詞字尾。',
      meaning: '使...、進行... (to make, to do)',
      category: '動詞化',
      grammaticalRole: '動詞後綴'
    }
  ],
  phonetic: {
    assimilationPath: 'ex- (向外) + plicare (摺疊) + -ate (使...) ➔ explicare ➔ explicate',
    phoneticAnalysis: '這個字前綴沒有明顯音變，ex- 直接接上以子音群 pl 開頭的字根，字尾 -ate 唸成 /eɪt/，是拉丁文動詞常見的英文化拼寫。',
  },
  semantic: {
    prefixMeaning: '向外、展開 (ex-)',
    rootCoreAction: '摺疊 (plic < plicare)',
    suffixGrammar: '及物動詞 (-ate)',
    modernMeaning: '把原本摺疊、糾結在一起的意涵「向外展開攤平」，引申為把複雜的道理或文本詳細解釋清楚',
    formulaDisplay: '{ 向外展開 (ex-) } + { 摺疊 (plic) } + { 使... (-ate) } = 詳細解釋 (explicate)',
    literalLogic: '字面上是「把摺起來的東西攤開」，用在道理或文本上，就是把原本隱藏、糾結的意涵一層層攤開解釋清楚。'
  },
  familyTree: [
    { word: 'explicit', formula: 'ex- (向外) + plic (摺疊) + -it', meaning: '明確的、清楚說明的', level: 'TOEFL', tags: ['TOEFL', 'GRE'] },
    { word: 'implicate', formula: 'im- (向內) + plic (摺疊) + -ate', meaning: '牽連、暗示涉及', level: 'GRE', tags: ['GRE'] },
    { word: 'complicate', formula: 'com- (一起) + plic (摺疊) + -ate', meaning: '使複雜化（字面：摺疊在一起）', level: 'TOEFL', tags: ['TOEFL'] },
    { word: 'apply', formula: 'ap- (朝向) + ply (摺疊)', meaning: '應用；申請', level: 'Core', tags: ['TOEIC'] },
    { word: 'multiply', formula: 'multi- (多) + ply (摺疊)', meaning: '乘、使增加（字面：摺疊多次）', level: 'Core', tags: ['TOEIC'] }
  ],
  memory: {
    cognatesDaily: 'explicate a theory (闡明一項理論), explicate the meaning of a poem (剖析一首詩的意涵)',
    oneSentenceMnemonic: 'ex (向外展開) + plic (摺疊) + ate (使...) ➔ 把摺起來的道理「向外攤開」就是 explicate (詳細解釋)！',
    etymologicalOrigin: '拉丁語 explicare（ex- 「向外」 + plicare 「摺疊」），原意是「把摺疊的東西攤開」',
    visualImagery: '想像一張摺得密密麻麻的地圖，你一層層把它攤平在桌上，原本看不懂的路線一目瞭然，那就是 explicate 的畫面。',
    commonCollocations: ['explicate a theory/concept (闡明理論/概念)', 'explicate the text (剖析文本)'],
    contrastiveTips: 'explicate 語氣正式、學術，強調「把複雜的意涵一層層攤開分析」；explain 是日常最常用的「解釋」，適用範圍廣得多。'
  },
  source: 'preset'
};
