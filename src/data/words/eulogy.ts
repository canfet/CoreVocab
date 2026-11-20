import { WordAnalysis } from '../../types';

export const eulogy: WordAnalysis = {
    word: 'eulogy',
    ipa: '/ˈjuːlədʒi/',
    partOfSpeech: 'noun (名詞)',
    chineseMeaning: '頌詞、悼詞、讚揚的話',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 性質前綴',
        morpheme: 'eu-',
        originalForm: 'eu- (希臘語)',
        variantNote: 'eu- 是希臘文副詞 eu「好」，直接當前綴使用，拼法固定，不會因後面字母改變',
        meaning: '良好、美好地 (well, good)',
        category: '性質/評價',
        grammaticalRole: '性質前綴'
      },
      {
        type: 'root',
        label: '💎 核心字根',
        morpheme: 'log',
        originalForm: 'logos (λόγος, 希臘語)',
        variantNote: 'logos 原意是「話語、道理」，這個詞根在英文裡常縮寫成 log- 或 -logue',
        meaning: '言詞、話語 (word, speech)',
        category: '言語溝通',
        grammaticalRole: '概念中心'
      },
      {
        type: 'suffix',
        label: '🏷️ 名詞字尾',
        morpheme: '-y',
        originalForm: '-ia (希臘語)',
        variantNote: '希臘文名詞字尾 -ia，經拉丁文、法文傳入英文後常簡化拼成 -y',
        meaning: '構成抽象名詞',
        category: '名詞化',
        grammaticalRole: '名詞字尾'
      }
    ],
    phonetic: {
      assimilationPath: 'eu (良好) + logia (言詞) ➔ 希臘文 eulogia ➔ 拉丁文 eulogium ➔ 英文 eulogy',
      phoneticAnalysis: 'eu- 這個希臘雙母音在英文裡固定唸成 /juː/（就像 Europe, euphoria 一樣），重音落在第一音節 YU-lo-ji，字尾 -y 唸成輕鬆的 /i/。',
      ruleKey: '希臘雙母音 eu- ➔ 英文 /juː/'
    },
    semantic: {
      prefixMeaning: '良好地 (eu-)',
      rootCoreAction: '說話、言詞 (log < logos)',
      suffixGrammar: '抽象名詞化 (-y)',
      modernMeaning: '對某人（通常是逝者）表達讚美與懷念的正式演說或文章',
      formulaDisplay: '{ 良好 (eu-) } + { 言詞 (log) } + { 名詞 (-y) } = 頌詞、悼詞 (eulogy)',
      literalLogic: '字面上是「說得很好的話」，後來專指在告別式或典禮上，講述某人優點與貢獻的讚美之詞。'
    },
    familyTree: [
      { word: 'eulogize', formula: 'eulogy + -ize (動詞化)', meaning: '頌揚、致悼詞 (動詞)' },
      { word: 'euphemism', formula: 'eu- (良好) + phem (說話) + -ism', meaning: '委婉語 (同課的 eu- 字，字根不同)' },
      { word: 'eugenics', formula: 'eu- (良好) + gen (生育/基因) + -ics', meaning: '優生學' },
      { word: 'dialogue', formula: 'dia- (彼此之間) + logue (言詞)', meaning: '對話 (與 eulogy 共用 log 字根)' },
      { word: 'prologue', formula: 'pro- (在...之前) + logue (言詞)', meaning: '序言、開場白 (與 eulogy 共用 log 字根)' }
    ],
    memory: {
      cognatesDaily: 'deliver a eulogy (致悼詞), write a eulogy for someone (為某人寫頌詞)',
      oneSentenceMnemonic: 'eu (良好) + log (言詞) + y (名詞) ➔ 「說出來的一番好話」就是 eulogy (頌詞/悼詞)！',
      etymologicalOrigin: '希臘文 eulogia (eu- 「好」 + logos 「話語」) ➔ 拉丁文 eulogium ➔ 英文 eulogy',
      visualImagery: '想像在告別式上，好友站上台，用最誠懇的言詞 (log)，說出對逝者最良好 (eu) 的回憶與讚美。',
      commonCollocations: [
        'deliver/give a eulogy (致悼詞)',
        'a eulogy for/to someone (給某人的頌詞)'
      ],
      contrastiveTips: 'eulogy 用希臘字首 eu- 表示「良好」，和拉丁字首 bene- 意思一樣（例如同一課的 benevolent）；差別只在語言來源，eu- 開頭的字通常帶有比較學術、正式的味道。'
    },
    source: 'preset'
  };
