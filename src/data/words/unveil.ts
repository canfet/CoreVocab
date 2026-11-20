import { WordAnalysis } from '../../types';

export const unveil: WordAnalysis = {
  word: 'unveil',
  ipa: '/ʌnˈveɪl/',
  partOfSpeech: 'verb (及物動詞)',
  chineseMeaning: '掀開面紗、揭幕；首次公開（新產品/計畫等）',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 反轉前綴',
      morpheme: 'un-',
      originalForm: 'un- (古英文 on-/un-)',
      variantNote: '這個 un- 是「把動作反過來做」的用法，跟表示「不」的 un- 拼法一樣但來源不同，這裡表示「把蓋上面紗這個動作反過來做」。',
      meaning: '反轉、解除 (reverse an action)',
      category: '動作反轉',
      grammaticalRole: '動詞前綴'
    },
    {
      type: 'root',
      label: '💎 字根',
      morpheme: 'veil',
      originalForm: 'vēlum (拉丁語) ➔ voile (古法語)',
      variantNote: '拉丁文 vēlum 原本指「船帆、布幔」，也用來指遮蓋用的布，經古法文借入英文後專指「面紗、遮蓋物」。',
      meaning: '面紗、遮蓋物 (veil, covering cloth)',
      category: '核心概念',
      grammaticalRole: '概念核心'
    }
  ],
  phonetic: {
    assimilationPath: 'vēlum (布幔、帆) ➔ 古法語 voile ➔ 英文 veil ➔ un- + veil ➔ unveil',
    phoneticAnalysis: 'un- 直接加在借自法文的名詞/動詞 veil 前面，不會有任何拼寫變化，重音落在後面的 veil 上。',
    ruleKey: 'un- (反轉義) + 借用詞根'
  },
  semantic: {
    prefixMeaning: '反轉、解除 (un-)',
    rootCoreAction: '面紗、遮蓋 (veil)',
    suffixGrammar: '及物動詞',
    modernMeaning: '把遮蓋住的布或面紗拿掉，讓底下的東西第一次呈現在大家眼前，常用於正式的公開場合',
    formulaDisplay: '{ 反轉 (un-) } + { 面紗 (veil) } = 掀開面紗、揭幕 (unveil)',
    literalLogic: '把「蓋上面紗」這個動作反過來做，就是掀開、揭曉。'
  },
  familyTree: [
    { word: 'veil', formula: '（字根本身）', meaning: '面紗、遮蓋物（名詞）；遮蓋（動詞）', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'reveal', formula: 're- (反轉、解除) + veal (veil 變體)', meaning: '揭露、透露（同樣源自拉丁文 vēlum，字面是「解除遮蓋」）', level: 'TOEIC', tags: ['TOEIC', 'TOEFL'] },
    { word: 'revelation', formula: 'reveal + -ation', meaning: '揭露、被揭露的事實；（宗教）啟示', level: 'TOEFL', tags: ['TOEFL', 'GRE'] },
    { word: 'veiled', formula: 'veil + -ed', meaning: '被面紗遮住的；（言語）含蓄的、隱晦的', level: 'GRE', tags: ['GRE'] }
  ],
  memory: {
    cognatesDaily: 'unveil a statue (為雕像揭幕), unveil a new product (發表新產品)',
    oneSentenceMnemonic: 'un (反轉) + veil (面紗) ➔ 「掀開面紗」就是 unveil (揭幕、公開)！',
    etymologicalOrigin: 'veil 源自拉丁文 vēlum（布幔、船帆），經古法文 voile 進入英文；un- 是英文本身的反轉前綴。',
    visualImagery: '想像揭幕典禮上，主辦人一把拉下蓋在雕像上的紅布，讓眾人第一次看見它的真面目——這就是 unveil 的畫面。',
    commonCollocations: ['unveil a statue / monument (為雕像/紀念碑揭幕)', 'unveil a new product / plan (發表新產品/計畫)', 'officially unveiled (正式公開)'],
    contrastiveTips: 'unveil 強調「以正式、公開的儀式感首次展示」，常用於新產品發表或雕像揭幕；reveal 泛指「透露、揭露」任何資訊，不一定有儀式感；launch 專指「正式推出（產品、計畫）上市」，重點在啟動而非揭曉本身。'
  },
  source: 'preset'
};
