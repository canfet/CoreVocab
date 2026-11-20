import { WordAnalysis } from '../../types';

export const progress: WordAnalysis = {
    word: 'progress',
    ipa: '/ˈprɑː.ɡres/',
    partOfSpeech: 'noun (不可數名詞); verb (不及物動詞)',
    chineseMeaning: '進步、進展、前進',
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
        morpheme: 'gress',
        originalForm: 'gradi / gressus (拉丁語)',
        variantNote: '拉丁動詞 gradi「行走、跨步」的過去分詞是 gressus，英文裡的 -gress 這個拼法就是從這裡來的',
        meaning: '行走、跨步 (to walk, step)',
        category: '核心動作',
        grammaticalRole: '動作中心'
      }
    ],
    phonetic: {
      assimilationPath: 'pro- (向前) + gradi (行走) ➔ 分詞幹 gressus ➔ progressus ➔ 英文 progress',
      phoneticAnalysis: '拉丁動詞 gradi 的過去分詞 gressus，是很多英文字 -gress 拼法的來源。這個字當名詞時重音在前面 PROgress，當動詞時重音移到後面 proGRESS。',
      dualStemInfo: {
        presentStem: 'grad- (如 gradual 逐漸的, graduate 畢業)',
        supineStem: 'gress- (如 congress 國會, aggressive 積極的/挑釁的, digress 離題)',
        meaning: '行走、跨步 (walk, step)'
      },
      ruleKey: '名動重音位移 + grad/gress 雙詞幹'
    },
    semantic: {
      prefixMeaning: '向前 (pro-)',
      rootCoreAction: '行走、跨步 (gress < gradi)',
      suffixGrammar: '名詞/不及物動詞',
      modernMeaning: '一步一步向前邁進，朝著更好的狀態發展',
      formulaDisplay: '{ 向前 (pro-) } + { 行走 (gress) } = 進步、進展 (progress)',
      literalLogic: '字面上是「向前走」，引申成事情或能力上的進步。'
    },
    familyTree: [
      { word: 'gradual', formula: 'grad + -ual', meaning: '逐漸的' },
      { word: 'graduate', formula: 'grad + -ate', meaning: '畢業、畢業生' },
      { word: 'congress', formula: 'con- (一起) + gress', meaning: '國會、代表大會 (一起走到一處集會)' },
      { word: 'aggressive', formula: 'ad- ➔ ag- (朝向) + gress + -ive', meaning: '積極的、有攻擊性的 (朝對方走過去)' },
      { word: 'digress', formula: 'di- (分開) + gress', meaning: '離題 (走偏了方向)' }
    ],
    memory: {
      cognatesDaily: 'make progress (取得進展), work in progress (進行中的工作), progress report (進度報告)',
      oneSentenceMnemonic: 'pro (向前) + gress (走) ➔ 「一步步向前走」就是 progress (進步)！',
      etymologicalOrigin: '拉丁文 progressus，源自動詞 progredi (pro- + gradi「行走」)',
      commonCollocations: [
        'make significant progress (取得重大進展)',
        'progress towards a goal (朝目標邁進)'
      ],
      contrastiveTips: 'progress 當名詞用時是不可數名詞，不能說 a progress；當動詞用時重音要移到後面 proGRESS，這種名詞前重音、動詞後重音的模式在 project, permit, record 等字也很常見。'
    },
    source: 'preset'
  };
