import { WordAnalysis } from '../../types';

export const apathy: WordAnalysis = {
    word: 'apathy',
    ipa: '/ˈæp.ə.θi/',
    partOfSpeech: 'noun (不可數名詞)',
    chineseMeaning: '冷漠、漠不關心、無動於衷、缺乏興趣',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 否定前綴',
        morpheme: 'a-',
        originalForm: 'a- (希臘否定前綴 Alpha Privative)',
        meaning: '無、沒有、缺乏 (without, lacking)',
        category: '否定極性',
        grammaticalRole: '前綴'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'path',
        originalForm: 'pathos',
        meaning: '感受、情感、激情 (feeling, passion)',
        category: '情感概念',
        grammaticalRole: '核心概念'
      },
      {
        type: 'suffix',
        label: '🏷️ 字尾',
        morpheme: '-y',
        originalForm: '-ia',
        variantNote: '這個字尾來自古希臘文，加在字根後面會變成抽象名詞，像 empathy、apathy、sympathy 都有這個字尾',
        meaning: '抽象狀態 (state)',
        category: '抽象名詞',
        grammaticalRole: '名詞後綴'
      }
    ],
    phonetic: {
      assimilationPath: 'a- + path + -y ➔ apathy',
      phoneticAnalysis: '古希臘文表示「沒有」的開頭 a-，後面接子音就維持 a-，接母音就變成 an-。',
      ruleKey: 'a- (無) + path'
    },
    semantic: {
      prefixMeaning: '缺乏/無 (a-)',
      rootCoreAction: '情感 (path)',
      suffixGrammar: '心理狀態 (-y)',
      modernMeaning: '對周遭環境、他人痛苦或公共事務完全提不起情感波動與興趣',
      formulaDisplay: '{ 無 (a-) } + { 情感/感受 (path) } + { 狀態 (-y) } = 冷漠無感 (apathy)',
      literalLogic: '完全沒有任何感覺的意思。'
    },
    familyTree: [
      { word: 'apathetic', formula: 'apathy + -ic (形容詞)', meaning: '冷漠的、無動於衷的' },
      { word: 'sympathy', formula: 'sym- + path + -y', meaning: '同情心' }
    ],
    memory: {
      cognatesDaily: 'voter apathy (選民冷漠投票率低)',
      oneSentenceMnemonic: 'a (沒有) + path (感覺) ➔ 「完全沒有感覺」就是 apathy (冷漠)！',
      etymologicalOrigin: '來自古希臘文 ἀπάθεια（apátheia），a- 是「沒有」，pathos 是「情感」。',
      contrastiveTips: 'apathy（冷漠、毫無感覺）剛好跟 sympathy（同情）、empathy（感同身受）相反：後兩者都是「對別人的感受有反應」，apathy 卻是「完全沒有反應、不關心」。'
    },
    source: 'preset'
  };
