import { WordAnalysis } from '../../types';

export const content: WordAnalysis = {
    word: 'content',
    ipa: '/ˈkɑːn.tent/ (名詞) | /kənˈtent/ (形容詞)',
    partOfSpeech: 'noun / adjective (名詞/形容詞)',
    chineseMeaning: '內容、含量、目錄；滿意的、心滿意足的',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 前綴',
        morpheme: 'con-',
        originalForm: 'con-',
        meaning: '共同、完全聚攏 (together, completely)',
        category: '空間/全體',
        grammaticalRole: '前綴'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'tent',
        originalForm: 'tentus (tenēre 完成分詞幹)',
        variantNote: 'tenēre（握住）換了一種寫法，變成 tent-',
        meaning: '被握住、被容納 (held, contained)',
        category: '核心概念',
        grammaticalRole: '分詞詞幹'
      }
    ],
    phonetic: {
      assimilationPath: 'con- + tentus ➔ content',
      phoneticAnalysis: '古拉丁文的 tent- 是這個字換了一種長相（像 content, intent, attent, extent 都有這個部分）。',
      ruleKey: '拉丁 Supine 幹 tent'
    },
    semantic: {
      prefixMeaning: '全部 (con-)',
      rootCoreAction: '被容納之物 (tent)',
      suffixGrammar: '名詞/形容詞',
      modernMeaning: '容器或文章中容納的一切內容；欲望已被完全裝滿而感到滿足',
      formulaDisplay: '{ 全部 (con-) } + { 被握住 (tent) } = 內容 / 滿足的 (content)',
      literalLogic: '原本的意思是「全部被裝在裡面的東西」，後來變成文章的「內容」，也變成心情被裝滿的「滿足、知足」。'
    },
    familyTree: [
      { word: 'contentment', formula: 'content + -ment', meaning: '滿足、知足' },
      { word: 'contain', formula: 'con- + tain', meaning: '包含、容納' }
    ],
    memory: {
      cognatesDaily: 'table of contents (目錄), content creator (內容創作者)',
      oneSentenceMnemonic: 'con (全) + tent (裝住) ➔ 「全部裝滿了」就是 content (內容/心滿意足)！',
      etymologicalOrigin: '古拉丁文 contentus（意思是「被裝在裡面的」）'
    },
    source: 'preset'
  };
