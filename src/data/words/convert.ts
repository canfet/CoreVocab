import { WordAnalysis } from '../../types';

export const convert: WordAnalysis = {
    word: 'convert',
    ipa: '/kənˈvɜːrt/ (動詞) | /ˈkɑːn.vɜːrt/ (名詞)',
    partOfSpeech: 'verb / noun (動詞/名詞)',
    chineseMeaning: '轉換、兌換、使皈依；(名詞) 皈依者、轉變信仰的人',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 前綴',
        morpheme: 'con-',
        originalForm: 'con- (拉丁語)',
        meaning: '完全、徹底 (completely, thoroughly)',
        category: '強調程度',
        grammaticalRole: '強調前綴'
      },
      {
        type: 'root',
        label: '💎 核心字根',
        morpheme: 'vert',
        originalForm: 'vertere (拉丁語「轉、翻轉」)',
        meaning: '轉、翻轉 (to turn)',
        category: '核心動作',
        grammaticalRole: '核心語義'
      }
    ],
    phonetic: {
      assimilationPath: 'con- (完全) + vertere (轉) ➔ convertere ➔ convert',
      phoneticAnalysis: 'con- 在這個字裡沒有同化，因為 v 不需要變身，直接拼接就好唸；重音在動詞時落在後面 con-VERT，當名詞時則移到前面 CON-vert，這是英文裡常見的「動詞後重音、名詞前重音」規律。',
      ruleKey: 'con- 無同化直接拼接 + 動詞/名詞重音轉移'
    },
    semantic: {
      prefixMeaning: '完全、徹底 (con-)',
      rootCoreAction: '轉、翻轉 (vert < vertere)',
      suffixGrammar: '及物/不及物動詞',
      modernMeaning: '把某樣東西整個轉變成另一種形式、狀態或用途',
      formulaDisplay: '{ 完全 (con-) } + { 轉 (vert) } = 轉換 (convert)',
      literalLogic: '字面上是「把某個東西整個轉過來」，引申為「把一種形式、貨幣或信仰整個轉變成另一種」。'
    },
    familyTree: [
      { word: 'conversion', formula: 'convert + -ion', meaning: '轉換、皈依（名詞）', level: 'TOEIC', tags: ['TOEIC'] },
      { word: 'revert', formula: 're- (回) + vert (轉)', meaning: '恢復、回復原狀', level: 'TOEFL', tags: ['TOEFL', 'GRE'] },
      { word: 'divert', formula: 'di- (分開) + vert (轉)', meaning: '使轉向、使分心', level: 'TOEFL', tags: ['TOEFL'] },
      { word: 'invert', formula: 'in- (反) + vert (轉)', meaning: '使顛倒、反轉', level: 'GRE', tags: ['GRE'] },
      { word: 'versatile', formula: 'vers (轉) + -atile', meaning: '多才多藝的、多功能的', level: 'GRE', tags: ['GRE', 'TOEFL'] }
    ],
    memory: {
      cognatesDaily: 'convert dollars to euros (把美金換成歐元), convert data into a new format (把資料轉換成新格式)',
      oneSentenceMnemonic: 'con (完全) + vert (轉) ➔ 「把東西整個轉過去」就是 convert (轉換)！',
      etymologicalOrigin: '拉丁文 convertere（con- 完全 + vertere 轉）',
      visualImagery: '想像轉動一個萬花筒（vert 轉），圖案整個（con- 完全）變成另一種全新的樣子，這就是 convert 的畫面。',
      commonCollocations: [
        'convert A into/to B (把 A 轉換成 B)',
        'religious convert (宗教皈依者)',
        'currency converter (貨幣兌換器)'
      ],
      contrastiveTips: 'convert 強調「整個形式、性質的轉變」；change 是最普遍的字，泛指任何改變；transform 強調「外觀或本質上大幅度的變化」，語氣比 convert 更戲劇化。'
    },
    source: 'preset'
  };
