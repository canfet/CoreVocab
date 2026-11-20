import { WordAnalysis } from '../../types';

export const nonfiction: WordAnalysis = {
    word: 'nonfiction',
    ipa: '/ˌnɑːnˈfɪk.ʃən/',
    partOfSpeech: 'noun (不可數名詞)',
    chineseMeaning: '非虛構文學（紀實文學）',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 客觀否定前綴',
        morpheme: 'non-',
        originalForm: 'non (拉丁語)',
        variantNote: 'non- 拼法固定不變，直接加在名詞前面表示「不是」',
        meaning: '不是、非 (not)',
        category: '否定極性',
        grammaticalRole: '否定前綴'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'fiction',
        originalForm: 'fictio(n-) (拉丁語) ← fingere',
        variantNote: '拉丁動詞 fingere 原意是「捏塑、塑形」，像捏陶土一樣，後來引申成「虛構、編造」',
        meaning: '虛構、編造出來的事物 (something invented)',
        category: '核心概念',
        grammaticalRole: '概念中心'
      }
    ],
    phonetic: {
      assimilationPath: 'non- (非) + fictio (虛構之物) ➔ nonfiction',
      phoneticAnalysis: 'non- 直接接在 fiction 前面，不需要變身，重音落在 fiction 的第一個音節 nonFICtion。',
      ruleKey: 'non- + fiction 直接拼接'
    },
    semantic: {
      prefixMeaning: '不是 (non-)',
      rootCoreAction: '虛構編造的事物 (fiction < fingere)',
      suffixGrammar: '不可數名詞',
      modernMeaning: '根據真實事件、事實所寫成的文字作品，與虛構小說相對',
      formulaDisplay: '{ 不是 (non-) } + { 虛構 (fiction) } = 非虛構文學 (nonfiction)',
      literalLogic: '字面上就是「不是編造出來的」，也就是根據事實寫成的作品。'
    },
    familyTree: [
      { word: 'fiction', formula: '字根本體', meaning: '小說、虛構文學' },
      { word: 'fictional', formula: 'fiction + -al', meaning: '虛構的、小說中的' },
      { word: 'fictitious', formula: 'fingere + -itious', meaning: '虛構的、假造的 (常用於假名、假身分)' },
      { word: 'figure', formula: 'fingere 同源字根', meaning: '人物、圖形、數字 (廣義上也跟「塑形」有關)' }
    ],
    memory: {
      cognatesDaily: 'nonfiction bestseller (暢銷非小說類作品), nonfiction section (圖書館的非小說區)',
      oneSentenceMnemonic: 'non (不是) + fiction (虛構) ➔ 「不是編出來的」就是 nonfiction (紀實文學)！',
      etymologicalOrigin: '拉丁文 fictio (源自動詞 fingere「捏塑、虛構」) 加上客觀否定前綴 non-',
      contrastiveTips: 'nonfiction 是圖書分類上與 fiction (小說) 相對的正式用詞，泛指傳記、歷史、科普等根據事實寫成的作品；documentary 則專指「紀錄片」這種影像形式，範圍比 nonfiction 窄。'
    },
    source: 'preset'
  };
