import { WordAnalysis } from '../../types';

export const educate: WordAnalysis = {
  word: 'educate',
  ipa: '/ˈɛdʒʊkeɪt/',
  partOfSpeech: 'verb (及物動詞)',
  chineseMeaning: '教育、培育、訓練',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 弱化前綴',
      morpheme: 'e-',
      originalForm: 'ex- (拉丁語)',
      variantNote: 'ex- 在 d 這類濁輔音前面，字尾的 x 會直接省略簡化成 e-。',
      meaning: '向外 (out, forth)',
      category: '空間/方向',
      grammaticalRole: '方向前綴'
    },
    {
      type: 'root',
      label: '💎 核心字根',
      morpheme: 'duc',
      originalForm: 'ducare (拉丁語，與 ducere「引導」同源)',
      variantNote: '拉丁文動詞 educare（教養、養育）一般被認為是 educere（ex- 「向外」 + ducere 「引導」）的頻繁體（表示反覆進行的動作），兩者字源上關係密切，都跟「引導」這個核心動作有關。',
      meaning: '引導、帶領 (to lead)',
      category: '核心動作',
      grammaticalRole: '動作中心'
    },
    {
      type: 'suffix',
      label: '🏷️ 動詞字尾',
      morpheme: '-ate',
      originalForm: '-atus (拉丁語過去分詞字尾)',
      meaning: '使...、進行... (to make, to do)',
      category: '動詞化',
      grammaticalRole: '動詞後綴'
    }
  ],
  phonetic: {
    assimilationPath: 'ex- (向外) ➔ 弱化為 e- + ducare (引導/養育) + -ate (使...) ➔ educare ➔ educate',
    phoneticAnalysis: 'ex- 在 d 這種濁輔音前面會簡化省略成 e-，讓發音更順口。字根 duc 保留了「引導」這個核心意涵，加上動詞字尾 -ate 唸成 /eɪt/。',
    ruleKey: 'ex- ➔ e- 前綴弱化 (遇濁輔音省略 x)'
  },
  semantic: {
    prefixMeaning: '向外 (e- < ex-)',
    rootCoreAction: '引導、帶領 (duc < ducere/ducare)',
    suffixGrammar: '及物動詞 (-ate)',
    modernMeaning: '一步步「引導」一個人往外走出無知，培養他的知識與能力，就是教育',
    formulaDisplay: '{ 向外 (e- < ex-) } + { 引導 (duc) } + { 使... (-ate) } = 教育、培育 (educate)',
    literalLogic: '字面上跟「引導」這個動作密切相關，可以理解為老師一步步「帶領」學生走出蒙昧、邁向知識，也就是教育、培養。'
  },
  familyTree: [
    { word: 'education', formula: 'educate + -ion (名詞)', meaning: '教育、教養', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'educated', formula: 'educate + -ed (形容詞)', meaning: '受過教育的、有教養的', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'educator', formula: 'educate + -or (人)', meaning: '教育工作者', level: 'TOEFL', tags: ['TOEFL'] },
    { word: 'conduct', formula: 'con- (一起) + duct (引導)', meaning: '引導進行；行為', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'introduce', formula: 'intro- (向內) + duce (引導)', meaning: '介紹、引進', level: 'Core', tags: ['TOEIC'] }
  ],
  memory: {
    cognatesDaily: 'educate the public (教育大眾), a well-educated person (受過良好教育的人), educate children (教育孩子)',
    oneSentenceMnemonic: 'e (向外) + duc (引導) + ate (使...) ➔ 一步步「向外引導」出孩子的潛能就是 educate (教育)！',
    etymologicalOrigin: '拉丁語 educare，一般認為是 educere（ex- 「向外」 + ducere 「引導」）的頻繁體，兩者都與「引導」有關',
    visualImagery: '想像老師牽著學生的手，一步步帶領他走出黑暗的洞穴，走向光亮開闊的知識世界，那個「引導向外」的畫面就是 educate。',
    commonCollocations: ['educate the public about... (教育大眾關於...)', 'well-educated (受過良好教育的)', 'educate children/students (教育孩童/學生)'],
    contrastiveTips: 'educate 較正式，強調長期、系統性的教育培養；teach 較口語通用，可以只是教一個具體的技能或知識點。'
  },
  source: 'preset'
};
