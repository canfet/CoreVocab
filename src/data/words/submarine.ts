import { WordAnalysis } from '../../types';

export const submarine: WordAnalysis = {
  word: 'submarine',
  ipa: '/ˈsʌbməriːn/',
  partOfSpeech: 'noun / adjective (名詞/形容詞)',
  chineseMeaning: '潛水艇；海底的、水中的',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 空間前綴',
      morpheme: 'sub-',
      originalForm: 'sub- (拉丁語)',
      variantNote: 'sub- 在母音或 m 開頭的字前面通常不會變形，這裡直接拼接在 marine 前面。',
      meaning: '在下方、之下 (under, below)',
      category: '空間/方向',
      grammaticalRole: '方向前綴'
    },
    {
      type: 'root',
      label: '💎 核心字根',
      morpheme: 'marine',
      originalForm: 'mare / marinus (拉丁語)',
      variantNote: 'marine 來自拉丁文 mare「海」，加上形容詞字尾 -inus 變成 marinus「海的、屬於海的」，英文借入後拼成 marine。',
      meaning: '海洋的、與海有關的 (of the sea)',
      category: '自然/場所',
      grammaticalRole: '形容詞性字根'
    }
  ],
  phonetic: {
    assimilationPath: 'sub- (在下方) + marinus (海的) ➔ submarinus ➔ 英語 submarine',
    phoneticAnalysis: '這是一個沒有音變的透明拼接字：sub- 直接加在 marine 前面，唸法上兩個部分各自保留原音，重音落在第一個音節 SUB。',
  },
  semantic: {
    prefixMeaning: '在下方 (sub-)',
    rootCoreAction: '屬於海洋 (marine < mare)',
    suffixGrammar: '名詞/形容詞',
    modernMeaning: '在海面之下航行的船艦，或泛指「海底的、水中的」性質',
    formulaDisplay: '{ 在下方 (sub-) } + { 海洋的 (marine) } = 潛艇；海底的 (submarine)',
    literalLogic: '字面就是「在海面之下」，用來形容船艦時就是指能潛入海底航行的潛水艇。'
  },
  familyTree: [
    { word: 'marine', formula: 'mar (海) + -ine (形容詞)', meaning: '海的、海運的；海軍陸戰隊員', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'maritime', formula: 'mar (海) + -itime', meaning: '海事的、航海的', level: 'TOEFL', tags: ['TOEFL', 'IELTS'] },
    { word: 'mariner', formula: 'mar (海) + -iner (人)', meaning: '船員、水手', level: 'Core', tags: ['TOEIC'] },
    { word: 'aquamarine', formula: 'aqua (水) + marine (海)', meaning: '藍綠色的、海水綠', level: 'Core', tags: ['TOEIC'] }
  ],
  memory: {
    cognatesDaily: 'a nuclear submarine (核子潛艇), submarine warfare (潛艇戰), submarine cable (海底電纜)',
    oneSentenceMnemonic: 'sub (在下方) + marine (海洋的) ➔ 「潛在海面之下」的船艦就是 submarine (潛水艇)！',
    etymologicalOrigin: '拉丁語 submarinus（sub- 「之下」 + marinus 「海的」）',
    visualImagery: '想像一艘灰色鋼鐵巨獸悄悄潛入湛藍海面之下，只留下一串氣泡，那就是 submarine。',
    commonCollocations: ['a submarine sandwich (潛艇堡)', 'submarine cable (海底電纜)', 'nuclear-powered submarine (核動力潛艇)']
  },
  source: 'preset'
};
