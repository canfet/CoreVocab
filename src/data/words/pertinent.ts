import { WordAnalysis } from '../../types';

export const pertinent: WordAnalysis = {
    word: 'pertinent',
    ipa: '/ˈpɜːr.tən.ənt/',
    partOfSpeech: 'adjective (形容詞)',
    chineseMeaning: '相關的、切題的、恰當的、中肯的',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 前綴',
        morpheme: 'per-',
        originalForm: 'per- (拉丁語)',
        meaning: '貫穿、徹底 (through, thoroughly)',
        category: '程度/空間',
        grammaticalRole: '前綴'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'tin',
        originalForm: 'tenēre',
        variantNote: '古拉丁文唸輕音的時候，ten 會變成 tin（像 continent, pertinent, abstinence 都是這樣）',
        meaning: '握住、連貫 (to hold, reach)',
        category: '核心動作',
        grammaticalRole: '語義中心'
      },
      {
        type: 'suffix',
        label: '🏷️ 詞性字尾',
        morpheme: '-ent',
        originalForm: '-ens / -entem (拉丁分詞)',
        variantNote: '這個字尾來自古拉丁文動詞「正在做」的形式，加在字根後面會把它變成形容詞，表示「有...性質的」',
        meaning: '具有...特性的 (形容詞)',
        category: '分詞修飾',
        grammaticalRole: '構成形容詞'
      }
    ],
    phonetic: {
      assimilationPath: 'per- + tenēre ➔ 拉丁 pertinens / pertinent- ➔ pertinent',
      phoneticAnalysis: '古拉丁文有個現象：沒有重音的 e，在開頭後面會變輕變成 i（ten- ➔ tin-）。',
      ruleKey: '拉丁元音弱化 ten- ➔ tin-'
    },
    semantic: {
      prefixMeaning: '貫穿深入 (per-)',
      rootCoreAction: '牽連握持 (tin)',
      suffixGrammar: '形容詞後綴 (-ent)',
      modernMeaning: '言論或證據能直接貫穿觸及主題核心、緊密相關且中肯切題',
      formulaDisplay: '{ 貫穿 (per-) } + { 牽連 (tin) } + { 的 (-ent) } = 相關的、切題的 (pertinent)',
      literalLogic: '原本的意思是「一路貫通、緊緊抓住主題不放」，後來變成「說到重點、非常相關」的意思。'
    },
    familyTree: [
      { word: 'pertain', formula: 'per- + tain', meaning: '關於、屬於 (動詞)' },
      { word: 'pertinence', formula: 'per- + tin + -ence', meaning: '相關性、適切性 (名詞)' },
      { word: 'impertinent', formula: 'im- + pertinent', meaning: '不切題的、粗魯無禮的' },
      { word: 'continent', formula: 'con- + tin + -ent', meaning: '大陸 (連綿不絕的陸地)' }
    ],
    memory: {
      cognatesDaily: 'pertinent questions (切中要害的問題), pertinent details (相關細節)',
      oneSentenceMnemonic: 'per (貫穿) + tin (握住) + ent (的) ➔ 「直插核心、抓緊主題」就是 pertinent (切題相關的)！',
      etymologicalOrigin: '古拉丁文 pertinēns（是 pertinēre「有關聯」這個字換了一種寫法）'
    },
    source: 'preset'
  };
