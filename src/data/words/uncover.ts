import { WordAnalysis } from '../../types';

export const uncover: WordAnalysis = {
  word: 'uncover',
  ipa: '/ʌnˈkʌv.ər/',
  partOfSpeech: 'verb (及物動詞)',
  chineseMeaning: '掀開、打開蓋子；揭露、發現（秘密/真相）',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 反轉前綴',
      morpheme: 'un-',
      originalForm: 'un- (古英文 on-/un-)',
      variantNote: '這個 un- 跟表示「不」的 un-（像 unhappy 那個）其實是兩個不同來源、後來拼法變得一樣的字：這個是「把動作反過來做」的 un-，來自古英文的 on-/un-，本來的意思跟「相反、對抗」有關；而「不」的 un- 則是另一個更古老、獨立的否定字根。兩者長得一樣，用法卻不同：這個 un- 只加在動詞前面，表示「把某個動作倒過來做」。',
      meaning: '反轉、解除 (reverse an action)',
      category: '動作反轉',
      grammaticalRole: '動詞前綴'
    },
    {
      type: 'root',
      label: '💎 字根',
      morpheme: 'cover',
      originalForm: 'covrir (古法語) ➔ cooperire (晚期拉丁語)',
      variantNote: '這個字經由古法文借入英文，最早可以追溯到拉丁文 co-（加強語氣）+ operire（關閉、覆蓋），原意是「完全蓋住」。',
      meaning: '覆蓋、蓋住 (to cover, close over)',
      category: '核心動作',
      grammaticalRole: '動作中心'
    }
  ],
  phonetic: {
    assimilationPath: 'un- (反轉) + cover (覆蓋) ➔ uncover',
    phoneticAnalysis: 'un- 直接接在英文動詞 cover 前面，不會有任何拼寫或發音上的變化。',
    ruleKey: 'un- (反轉義) + 已借用詞根'
  },
  semantic: {
    prefixMeaning: '反轉、解除 (un-)',
    rootCoreAction: '覆蓋 (cover)',
    suffixGrammar: '及物動詞',
    modernMeaning: '把原本蓋住、遮住的東西打開，讓底下的事物或真相顯露出來',
    formulaDisplay: '{ 反轉 (un-) } + { 覆蓋 (cover) } = 揭露、掀開 (uncover)',
    literalLogic: '把「蓋住」這個動作反過來做，就是「掀開、揭露」。'
  },
  familyTree: [
    { word: 'discover', formula: 'dis- (移除) + cover', meaning: '發現（移除掉遮蔽物，看見原本被藏住的東西）', level: 'Core', tags: ['TOEIC'] },
    { word: 'recover', formula: 're- (回) + cover', meaning: '恢復、康復；找回', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'coverage', formula: 'cover + -age', meaning: '涵蓋範圍、（保險）保障', level: 'TOEIC', tags: ['TOEIC', 'IELTS'] },
    { word: 'covert', formula: 'cover 的過去分詞形態 + -t', meaning: '祕密的、隱蔽的（原意就是「被蓋住的」）', level: 'GRE', tags: ['GRE'] }
  ],
  memory: {
    cognatesDaily: 'uncover the truth (揭露真相), uncover a plot (揭發陰謀)',
    oneSentenceMnemonic: 'un (反轉) + cover (蓋住) ➔ 「把蓋子掀開」就是 uncover (揭露)！',
    etymologicalOrigin: 'cover 源自古法文 covrir，可追溯至晚期拉丁文 cooperire；un- 是英文本身的反轉前綴，直接加在借用詞根前面。',
    visualImagery: '想像考古學家小心翼翼地掀開覆蓋在文物上的布，讓塵封已久的寶藏重見天日——這就是 uncover 的畫面。',
    commonCollocations: ['uncover the truth (揭露真相)', 'uncover a scandal / plot (揭發醜聞/陰謀)', 'uncover evidence (發現證據)'],
    contrastiveTips: 'uncover 強調「把遮蔽的東西掀開，讓底下顯露出來」；discover 泛指「發現」，不一定有先前被遮蓋的動作；reveal 更偏向「主動公開、揭示」原本隱藏的資訊。'
  },
  source: 'preset'
};
