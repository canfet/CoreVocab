import { WordAnalysis } from '../../types';

export const evaporate: WordAnalysis = {
  word: 'evaporate',
  ipa: '/ɪˈvæpəreɪt/',
  partOfSpeech: 'verb (不及物/及物動詞)',
  chineseMeaning: '蒸發；（逐漸）消散、消失',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 弱化前綴',
      morpheme: 'e-',
      originalForm: 'ex- (拉丁語)',
      variantNote: 'ex- 在 v 這類濁輔音前面，字尾的 x 會直接省略簡化成 e-。',
      meaning: '向外、出來 (out, forth)',
      category: '空間/方向',
      grammaticalRole: '方向前綴'
    },
    {
      type: 'root',
      label: '💎 核心字根',
      morpheme: 'vapor',
      originalForm: 'vapor (拉丁語)',
      meaning: '蒸氣、水氣 (steam, vapor)',
      category: '自然現象',
      grammaticalRole: '核心名詞字根'
    },
    {
      type: 'suffix',
      label: '🏷️ 動詞字尾',
      morpheme: '-ate',
      originalForm: '-atus (拉丁語過去分詞字尾)',
      meaning: '使...、變成... (to make, to become)',
      category: '動詞化',
      grammaticalRole: '動詞後綴'
    }
  ],
  phonetic: {
    assimilationPath: 'ex- (向外) ➔ 弱化為 e- + vapor (蒸氣) + -ate (變成...) ➔ evaporare ➔ evaporate',
    phoneticAnalysis: 'ex- 在 v 這種濁輔音前面會簡化省略成 e-，讓發音更順口。字根 vapor 直接保留原本拼法，加上動詞字尾 -ate 唸成 /eɪt/。',
    ruleKey: 'ex- ➔ e- 前綴弱化 (遇濁輔音省略 x)'
  },
  semantic: {
    prefixMeaning: '向外 (e- < ex-)',
    rootCoreAction: '變成蒸氣 (vapor)',
    suffixGrammar: '不及物/及物動詞 (-ate)',
    modernMeaning: '液體「變成蒸氣向外散去」，也就是蒸發；引申用在抽象事物上，指某種感覺、希望或資金逐漸消散、消失不見',
    formulaDisplay: '{ 向外 (e- < ex-) } + { 蒸氣 (vapor) } + { 變成... (-ate) } = 蒸發、消散 (evaporate)',
    literalLogic: '字面上是「變成蒸氣向外飄散」，用在水或液體上就是蒸發；用在抽象事物（如信心、希望、金錢）上，就是引申為逐漸消散、化為烏有。'
  },
  familyTree: [
    { word: 'evaporation', formula: 'evaporate + -ion (名詞)', meaning: '蒸發（現象/過程）', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'vapor', formula: 'vapor (拉丁語，蒸氣)', meaning: '水氣、蒸氣', level: 'Core', tags: ['TOEIC'] },
    { word: 'vaporize', formula: 'vapor + -ize (使...)', meaning: '使汽化、使蒸發', level: 'TOEFL', tags: ['TOEFL'] },
    { word: 'condense', formula: 'con- (一起) + dense (濃縮)', meaning: '凝結、濃縮（evaporate 的相對過程）', level: 'TOEFL', tags: ['TOEFL', 'IELTS'] }
  ],
  memory: {
    cognatesDaily: 'water evaporates in the sun (水在陽光下蒸發), the savings evaporated (積蓄化為烏有), evaporate quickly (迅速消散)',
    oneSentenceMnemonic: 'e (向外) + vapor (蒸氣) + ate (變成) ➔ 水「變成蒸氣向外飄走」就是 evaporate (蒸發)！',
    etymologicalOrigin: '拉丁語 evaporare（ex- 「向外」 + vapor 「蒸氣」）',
    visualImagery: '想像一灘水漬在豔陽下漸漸縮小，最後化成一縷輕煙般的水氣消失在空氣中，那個畫面就是 evaporate。',
    commonCollocations: ['water evaporates (水蒸發)', 'evaporate into thin air (完全消失、化為烏有)', 'hopes evaporated (希望破滅)'],
    contrastiveTips: 'evaporate 常帶有「逐漸、悄悄地消散」的意味，也可用於抽象事物（信心、資金）；disappear 只是單純「不見了」，沒有「像蒸氣一樣慢慢散去」的畫面感。'
  },
  source: 'preset'
};
