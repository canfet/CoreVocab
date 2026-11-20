import { WordAnalysis } from '../../types';

export const unhappy: WordAnalysis = {
  word: 'unhappy',
  ipa: '/ʌnˈhæp.i/',
  partOfSpeech: 'adjective (形容詞)',
  chineseMeaning: '不快樂的、不高興的；不滿意的',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 否定前綴',
      morpheme: 'un-',
      originalForm: 'un- (古英文，日耳曼否定字根)',
      variantNote: '這個 un- 是純粹表示「不」的否定前綴，古英文就有了，來自更古老、日耳曼語共同的否定字根，跟表示「反轉動作」的另一個 un-（像 unlock 那個）雖然長得一樣，但其實是不同來源。這個「不」的 un- 主要加在形容詞前面。',
      meaning: '不、非 (not)',
      category: '否定極性',
      grammaticalRole: '形容詞前綴'
    },
    {
      type: 'root',
      label: '💎 字根',
      morpheme: 'happy',
      originalForm: 'hap (中古英文) + -y',
      variantNote: '中古英文的 hap 意思是「運氣、機緣」，源自古諾斯語 happ，本來 happy 是指「運氣好的」，後來意思才慢慢固定成「快樂的」。',
      meaning: '（原意）幸運的 ➔ 快樂的 (lucky ➔ happy)',
      category: '核心概念',
      grammaticalRole: '概念核心'
    }
  ],
  phonetic: {
    assimilationPath: 'un- (不) + hap (運氣) + -y ➔ happy ➔ unhappy',
    phoneticAnalysis: 'un- 直接加在形容詞 happy 前面，不會有任何拼寫或發音上的變化，重音維持在 happy 上。',
    ruleKey: 'un- (純否定) + 原生英文形容詞'
  },
  semantic: {
    prefixMeaning: '不 (un-)',
    rootCoreAction: '快樂的 (happy)',
    suffixGrammar: '形容詞',
    modernMeaning: '心情低落、不滿意目前的狀況，缺乏快樂的感覺',
    formulaDisplay: '{ 不 (un-) } + { 快樂的 (happy) } = 不快樂的 (unhappy)',
    literalLogic: '字面上就是「快樂」的反面，直接否定掉。'
  },
  familyTree: [
    { word: 'happiness', formula: 'happy + -ness', meaning: '快樂、幸福（名詞）', level: 'Core', tags: ['TOEIC'] },
    { word: 'happily', formula: 'happy + -ly', meaning: '快樂地；幸運地', level: 'Core', tags: ['TOEIC'] },
    { word: 'mishap', formula: 'mis- (不好地) + hap', meaning: '不幸的小事故、意外', level: 'TOEFL', tags: ['TOEFL', 'GRE'] },
    { word: 'perhaps', formula: 'per- (經由) + haps', meaning: '也許、可能（憑機緣而定）', level: 'Core', tags: ['TOEIC'] }
  ],
  memory: {
    cognatesDaily: 'unhappy customers (不滿意的顧客), feel unhappy about something (對某事感到不高興)',
    oneSentenceMnemonic: 'un (不) + happy (快樂的) ➔ 「不快樂」就是 unhappy！',
    etymologicalOrigin: 'happy 源自中古英文 hap（運氣，來自古諾斯語 happ）加上 -y；un- 是古英文就有的純否定前綴。',
    visualImagery: '想像一張原本上揚的笑臉，被輕輕抹掉笑容，變成低垂的嘴角——這就是加上 un- 之後的 unhappy。',
    commonCollocations: ['unhappy customers/employees (不滿意的顧客/員工)', 'feel unhappy about (對...感到不高興)', 'an unhappy childhood (不快樂的童年)'],
    contrastiveTips: 'unhappy 語氣比較溫和、日常，泛指「不開心、不滿意」；miserable 語氣強烈得多，指「非常痛苦、悲慘」；dissatisfied 更正式、客觀，常用於評價服務或成果，不一定牽涉情緒。'
  },
  source: 'preset'
};
