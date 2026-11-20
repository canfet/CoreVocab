import { WordAnalysis } from '../../types';

export const empathy: WordAnalysis = {
    word: 'empathy',
    ipa: '/ˈem.pə.θi/',
    partOfSpeech: 'noun (不可數名詞)',
    chineseMeaning: '同理心、神入、共情（設身處地感受他人內心）',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 前綴',
        morpheme: 'em-',
        originalForm: 'en- (希臘語)',
        variantNote: 'en- 遇到 p，會偷偷換一個字母，變身成 em-，唸起來才會更順。',
        meaning: '在...內部、深入 (in, into)',
        category: '深入空間',
        grammaticalRole: '前綴'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'path',
        originalForm: 'pathos',
        meaning: '情感、感受 (feeling)',
        category: '核心情感',
        grammaticalRole: '概念中心'
      },
      {
        type: 'suffix',
        label: '🏷️ 字尾',
        morpheme: '-y',
        originalForm: '-ia',
        variantNote: '這個字尾來自古希臘文，加在字根後面會變成抽象名詞，像 empathy、apathy、sympathy 都有這個字尾',
        meaning: '名詞狀態 (state)',
        category: '抽象名詞',
        grammaticalRole: '構成名詞'
      }
    ],
    phonetic: {
      assimilationPath: 'en- + path + -y ➔ em- + pathy ➔ empathy',
      phoneticAnalysis: '古希臘文的開頭 en-，遇到用嘴唇發音的 p，會偷偷換一個字母變成 em-，唸起來才會更順。',
      ruleKey: 'en- ➔ em- 同化'
    },
    semantic: {
      prefixMeaning: '深入內部 (em-)',
      rootCoreAction: '感受 (path)',
      suffixGrammar: '心智狀態 (-y)',
      modernMeaning: '將自己的意識完全投射至對方情境中產生深度心理共鳴',
      formulaDisplay: '{ 走入內部 (em-) } + { 情感 (path) } + { 狀態 (-y) } = 同理共情 (empathy)',
      literalLogic: '走進對方的心裡，去感受他的快樂和痛苦。'
    },
    familyTree: [
      { word: 'sympathy', formula: 'syn- ➔ sym- + path + -y', meaning: '同情心' },
      { word: 'apathy', formula: 'a- + path + -y', meaning: '冷漠' }
    ],
    memory: {
      cognatesDaily: 'empathize (產生同理心), empathic listener (同理傾聽者)',
      oneSentenceMnemonic: 'em (走進去) + path (感受) ➔ 「走進對方心裡去感受」就是 empathy (同理心)！',
      etymologicalOrigin: '來自古希臘文 ἐμπάθεια（empátheia）。',
      contrastiveTips: 'empathy 是「站在對方立場、感同身受」(feel WITH someone)；sympathy 是「同情、替對方的遭遇難過」(feel sorry FOR someone)，是比較從外部旁觀的關懷，語感較淺。前者強調親身感受，後者強調同情慰問。'
    },
    source: 'preset'
  };
