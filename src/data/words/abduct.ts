import { WordAnalysis } from '../../types';

export const abduct: WordAnalysis = {
  word: 'abduct',
  ipa: '/æbˈdʌkt/',
  partOfSpeech: 'verb (及物動詞)',
  chineseMeaning: '誘拐、綁架、拐走；（生理學）外展（肌肉將肢體帶離身體中線）',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 前綴',
      morpheme: 'ab-',
      originalForm: 'ab- (拉丁語)',
      variantNote: 'ab- 在子音 d 前面沒有變形，直接拼接',
      meaning: '離開、遠離 (away, off)',
      category: '空間/方向',
      grammaticalRole: '方向前綴'
    },
    {
      type: 'root',
      label: '💎 核心字根',
      morpheme: 'duct',
      originalForm: 'dūcere / ductus (拉丁語)',
      variantNote: 'dūcere(引導、帶領)的現在式字幹是 duc-，完成被動分詞字幹是 ductus；abduct 這個字直接借用了完成被動分詞的形式',
      meaning: '引導、帶領 (to lead)',
      category: '核心動作',
      grammaticalRole: '分詞詞幹'
    }
  ],
  phonetic: {
    assimilationPath: 'ab- (遠離) + dūcere/ductus (帶領) ➔ abductus ➔ abduct',
    phoneticAnalysis: '這是沒有音變的透明拼接字。dūcere 這個字根有兩種長相：現在式字幹 duc-（用在 conducive, produce, reduce）跟完成被動分詞字幹 duct-（用在 abduct, conduct, product）。',
    dualStemInfo: {
      presentStem: 'duc- (如 conducive, produce, reduce)',
      supineStem: 'duct- (如 abduct, conduct, product)',
      meaning: '引導、帶領'
    },
    ruleKey: 'duc / duct 雙詞幹'
  },
  semantic: {
    prefixMeaning: '遠離 (ab-)',
    rootCoreAction: '帶領、引導 (duct < dūcere)',
    suffixGrammar: '及物動詞',
    modernMeaning: '違反某人意願，把他強行「帶離」原本所在的地方，也就是綁架、拐走',
    formulaDisplay: '{ 遠離 (ab-) } + { 帶領 (duct) } = 誘拐、綁架 (abduct)',
    literalLogic: '字面上是「把人強行帶離開」，引申為綁架、誘拐；在解剖學上則指把身體部位「帶離」身體中線的動作，也就是外展。'
  },
  familyTree: [
    { word: 'abduction', formula: 'abduct + -ion', meaning: '誘拐、綁架（名詞）；外展（動作）', level: 'TOEFL', tags: ['TOEFL'] },
    { word: 'conduct', formula: 'con- (共同) + duct', meaning: '引導、指揮、實施；品行', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'induce', formula: 'in- (向內) + duce', meaning: '引誘、引起', level: 'TOEFL', tags: ['TOEFL'] },
    { word: 'produce', formula: 'pro- (向前) + duce', meaning: '生產、製造', level: 'Core', tags: ['TOEIC'] },
    { word: 'aqueduct', formula: 'aqua (水) + duct', meaning: '引水道、渡槽', level: 'GRE', tags: ['GRE'] }
  ],
  memory: {
    cognatesDaily: 'abduct a child (綁架小孩), alien abduction (外星人綁架), abductor muscle (外展肌)',
    oneSentenceMnemonic: 'ab (遠離) + duct (帶領) ➔ 「強行把人帶離開」就是 abduct (誘拐、綁架)！',
    etymologicalOrigin: '拉丁文 abductus，是動詞 abdūcere (ab- 「遠離」 + dūcere 「帶領」) 的完成被動分詞',
    visualImagery: '想像有人硬是抓住某人的手臂，強行把他「帶離」原本站的地方拖走，那個畫面就是 abduct。',
    commonCollocations: [
      'abduct a child/hostage (綁架小孩/人質)',
      'be abducted by aliens (被外星人綁架)'
    ],
    contrastiveTips: 'abduct 語氣正式、常見於新聞和法律用語，強調「強行帶離」；kidnap 是更日常口語的說法，原意特指「拐走小孩」(kid + nap「抓走」)。'
  },
  source: 'preset'
};
