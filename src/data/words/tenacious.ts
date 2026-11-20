import { WordAnalysis } from '../../types';

export const tenacious: WordAnalysis = {
    word: 'tenacious',
    ipa: '/təˈneɪ.ʃəs/',
    partOfSpeech: 'adjective (形容詞)',
    chineseMeaning: '頑強的、堅持不懈的、緊握不放的、堅韌不拔的',
    morphemes: [
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'ten',
        originalForm: 'tenēre',
        meaning: '握住、持 (to hold)',
        category: '核心動作',
        grammaticalRole: '概念本質'
      },
      {
        type: 'suffix',
        label: '🏷️ 傾向字尾',
        morpheme: '-acious',
        originalForm: '-āx + -ōsus',
        variantNote: '這是古拉丁文兩個字尾黏在一起，專門用來說「很愛做某件事、傾向很強烈」，像 tenacious（很愛抓住不放）、voracious（很愛吃）都有這個字尾',
        meaning: '強烈具有...傾向的 (strongly inclined to)',
        category: '性向修飾',
        grammaticalRole: '構成形容詞'
      }
    ],
    phonetic: {
      assimilationPath: 'ten- + -acious ➔ tenacious (名詞: tenacity)',
      phoneticAnalysis: '直接用古拉丁文的 ten- 加上表示「很喜歡這樣做」的字尾 -āx (-acious)。',
      ruleKey: 'ten- + -acious'
    },
    semantic: {
      prefixMeaning: '無前綴 (字根直接派生)',
      rootCoreAction: '握住 (ten)',
      suffixGrammar: '極強烈傾向 (-acious)',
      modernMeaning: '像鷹爪或膠水一樣牢牢握住、絕不輕易放棄的性格或物理黏性',
      formulaDisplay: '{ 握住 (ten) } + { 極度善於...的 (-acious) } = 頑強的、堅韌的 (tenacious)',
      literalLogic: '原本是說「死死抓緊不放手的人」，後來變成形容一個人「很頑強、不輕易放棄」。'
    },
    familyTree: [
      { word: 'tenacity', formula: 'ten + -acity (名詞)', meaning: '頑強、堅韌、固執' },
      { word: 'contain', formula: 'con- + tain', meaning: '包含、容納' }
    ],
    memory: {
      cognatesDaily: 'tenacious memory (過目不忘的記憶力), tenacity (堅韌毅力)',
      oneSentenceMnemonic: 'ten (握住) + acious (強烈) ➔ 「死抓不放」就是 tenacious (頑強堅韌)！',
      etymologicalOrigin: '古拉丁文 tenāx (tenēre 「握住」 + -āx 「很擅長」)'
    },
    source: 'preset'
  };
