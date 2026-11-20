import { WordAnalysis } from '../../types';

export const unfold: WordAnalysis = {
  word: 'unfold',
  ipa: '/ʌnˈfoʊld/',
  partOfSpeech: 'verb (及物/不及物動詞)',
  chineseMeaning: '展開、攤開（摺疊物）；（事情）逐漸顯露、開展',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 反轉前綴',
      morpheme: 'un-',
      originalForm: 'un- (古英文 on-/un-)',
      variantNote: '這個 un- 是「把動作反過來做」的用法，跟表示「不」的 un- 拼法一樣但來源不同。這裡的意思是「把已經摺起來的東西，反過來打開」。',
      meaning: '反轉、解除 (reverse an action)',
      category: '動作反轉',
      grammaticalRole: '動詞前綴'
    },
    {
      type: 'root',
      label: '💎 字根',
      morpheme: 'fold',
      originalForm: 'fealdan (古英文)',
      variantNote: '這是道地的古英文字，本身跟拉丁文沒有借用關係，意思一直都是「摺疊」。',
      meaning: '摺疊、彎折 (to bend over, fold)',
      category: '核心動作',
      grammaticalRole: '動作中心'
    }
  ],
  phonetic: {
    assimilationPath: 'un- (反轉) + fold (摺疊) ➔ unfold',
    phoneticAnalysis: 'fold 是英文原生詞，un- 加上去完全不會變形。',
    ruleKey: 'un- (反轉義) + 原生英文詞根'
  },
  semantic: {
    prefixMeaning: '反轉、解除 (un-)',
    rootCoreAction: '摺疊 (fold)',
    suffixGrammar: '及物/不及物動詞',
    modernMeaning: '把原本摺起來的東西打開攤平，或是指事情像展開的紙張一樣，一步一步呈現出全貌',
    formulaDisplay: '{ 反轉 (un-) } + { 摺疊 (fold) } = 展開、逐漸顯露 (unfold)',
    literalLogic: '把「摺疊」這個動作反過來做，就是「展開」，用在抽象的事情上就是「逐漸顯露」。'
  },
  familyTree: [
    { word: 'fold', formula: '（字根本身）', meaning: '摺疊（動詞）；摺痕、褶層（名詞）', level: 'Core', tags: ['TOEIC'] },
    { word: 'folder', formula: 'fold + -er', meaning: '文件夾、資料夾', level: 'Core', tags: ['TOEIC'] },
    { word: 'manifold', formula: 'mani- (許多) + fold', meaning: '多種的、多方面的', level: 'GRE', tags: ['GRE'] },
    { word: 'twofold', formula: 'two + fold', meaning: '兩倍的、雙重的', level: 'TOEFL', tags: ['TOEFL', 'IELTS'] }
  ],
  memory: {
    cognatesDaily: 'unfold a map (攤開地圖), events unfold (事情逐漸展開)',
    oneSentenceMnemonic: 'un (反轉) + fold (摺疊) ➔ 「把摺起來的東西打開」就是 unfold (展開)！',
    etymologicalOrigin: 'fold 源自古英文 fealdan，是道地的英文原生詞；un- 是英文本身的反轉前綴。',
    visualImagery: '想像把一張摺成八摺的地圖，一層一層打開攤平在桌上，路線圖才完整呈現在你眼前——這就是 unfold 的畫面。',
    commonCollocations: ['unfold a map / newspaper (攤開地圖/報紙)', 'events unfold (事情逐漸展開)', 'the story unfolds (故事逐漸開展)'],
    contrastiveTips: 'unfold 強調「像打開摺疊物一樣，一層一層地展開或顯露」；develop 泛指「發展、演變」，範圍更廣；reveal 是「主動揭露某個具體資訊」，比較不強調逐步展開的過程感。'
  },
  source: 'preset'
};
