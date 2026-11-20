import { WordAnalysis } from '../../types';

export const nonexistent: WordAnalysis = {
    word: 'nonexistent',
    ipa: '/ˌnɑːn.ɪɡˈzɪs.tənt/',
    partOfSpeech: 'adjective (形容詞)',
    chineseMeaning: '不存在的、根本沒有的',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 客觀否定前綴',
        morpheme: 'non-',
        originalForm: 'non (拉丁語)',
        variantNote: 'non- 是最直接、最沒有感情色彩的否定前綴，拼法不管接什麼字都不會變',
        meaning: '不、沒有 (not)',
        category: '否定極性',
        grammaticalRole: '否定前綴'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'exist',
        originalForm: 'existere / exsistere (拉丁語)',
        variantNote: 'exsistere 是 ex- (出來) + sistere (站立、使站立) 組成的字，字面是「站出來、顯現出來」',
        meaning: '存在、顯現 (to stand forth, to be)',
        category: '核心動作',
        grammaticalRole: '動作中心'
      },
      {
        type: 'suffix',
        label: '🏷️ 字尾',
        morpheme: '-ent',
        originalForm: '-entem (拉丁語現在分詞)',
        variantNote: '這個字尾來自拉丁文動詞「正在做」的形式，加在動詞後面會變成形容詞',
        meaning: '正在...的 (現在分詞性質)',
        category: '形容詞化',
        grammaticalRole: '構成形容詞'
      }
    ],
    phonetic: {
      assimilationPath: 'non- (不) + exsistere (存在) + -ent ➔ nonexistent',
      phoneticAnalysis: 'non- 直接接在 existent 前面，完全不用變身，唸的時候原本 existent 的重音 /ɪɡˈzɪs.tənt/ 保持不變，non- 只是輕輕帶過。',
      ruleKey: 'non- + existent 直接拼接'
    },
    semantic: {
      prefixMeaning: '不 (non-)',
      rootCoreAction: '存在、顯現 (exist < exsistere)',
      suffixGrammar: '形容詞 (-ent)',
      modernMeaning: '完全沒有出現、根本不存在的事物或狀態',
      formulaDisplay: '{ 不 (non-) } + { 存在 (exist) } + { ...的 (-ent) } = 不存在的 (nonexistent)',
      literalLogic: '字面上就是「不存在的」，是最直接的否定說法。'
    },
    familyTree: [
      { word: 'exist', formula: '字根本體', meaning: '存在' },
      { word: 'existence', formula: 'exist + -ence', meaning: '存在 (名詞)' },
      { word: 'coexist', formula: 'co- (共同) + exist', meaning: '共存' },
      { word: 'persist', formula: 'per- (貫穿始終) + sist', meaning: '堅持、持續存在 (同源字根 sistere)' }
    ],
    memory: {
      cognatesDaily: 'nonexistent problem (根本不存在的問題), practically nonexistent (幾乎等於不存在)',
      oneSentenceMnemonic: 'non (不) + existent (存在的) ➔ 「完全不存在」就是 nonexistent！',
      etymologicalOrigin: '拉丁文 exsistere (ex- + sistere「站立」) 加上客觀否定前綴 non-',
      contrastiveTips: 'nonexistent 語氣中性客觀，只是陳述「沒有這個東西」；nonexistent 常和 virtually/practically 連用，強調「幾乎不存在」，比 not existing 更常見於書面正式語境。'
    },
    source: 'preset'
  };
