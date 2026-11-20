import { WordAnalysis } from '../../types';

export const contact: WordAnalysis = {
    word: 'contact',
    ipa: '/ˈkɑːn.tækt/',
    partOfSpeech: 'noun / verb (名詞/及物動詞)',
    chineseMeaning: '接觸、聯繫；聯絡人；(動詞) 聯絡、聯繫',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 前綴',
        morpheme: 'con-',
        originalForm: 'con- (拉丁語)',
        meaning: '共同、一起 (together, with)',
        category: '空間/共同',
        grammaticalRole: '強調前綴'
      },
      {
        type: 'root',
        label: '💎 核心字根',
        morpheme: 'tact',
        originalForm: 'tangere (拉丁語「觸碰」)，完成分詞幹 tactus',
        variantNote: 'tangere（觸碰）的完成分詞是 tactus，contact 用的正是這個完成分詞幹，跟 attain 用的 tangere 現在式弱化形 tain 是同一個字根家族的不同分身',
        meaning: '觸碰、接觸 (to touch)',
        category: '核心動作',
        grammaticalRole: '分詞詞幹'
      }
    ],
    phonetic: {
      assimilationPath: 'con- (共同) + tangere ➔ 完成分詞 tactus (被觸碰過的) ➔ contactus ➔ contact',
      phoneticAnalysis: 'con- 在 t 開頭的字前面不需要同化，直接拼接。字根 tangere（觸碰）的完成分詞是 tactus，這裡直接借用這個分詞形式，跟 tangible, intact, tactile 是同一家族。',
      ruleKey: 'con- 無同化直接拼接 + tangere 完成分詞幹 tact'
    },
    semantic: {
      prefixMeaning: '共同、一起 (con-)',
      rootCoreAction: '觸碰 (tact < tangere)',
      suffixGrammar: '名詞/及物動詞',
      modernMeaning: '兩個人或物體彼此靠近到互相碰觸，或引申為互相聯繫、溝通',
      formulaDisplay: '{ 共同 (con-) } + { 觸碰 (tact) } = 接觸、聯繫 (contact)',
      literalLogic: '字面上是「兩個東西碰在一起」，引申為人與人之間的「聯繫、聯絡」。'
    },
    familyTree: [
      { word: 'contactless', formula: 'contact + -less', meaning: '無接觸的（如感應支付）', level: 'TOEIC', tags: ['TOEIC'] },
      { word: 'tangible', formula: 'tang (觸碰) + -ible', meaning: '有形的、可觸摸的', level: 'GRE', tags: ['GRE', 'TOEFL'] },
      { word: 'intact', formula: 'in- (不) + tact (觸碰)', meaning: '完好無損的（沒有被碰過的）', level: 'TOEFL', tags: ['TOEFL', 'GRE'] },
      { word: 'tactile', formula: 'tact + -ile', meaning: '觸覺的', level: 'GRE', tags: ['GRE'] },
      { word: 'attain', formula: 'ad- ➔ at- (朝向) + tain (觸及/握住)', meaning: '達到、獲得', level: 'TOEFL', tags: ['TOEFL', 'GRE'] }
    ],
    memory: {
      cognatesDaily: 'contact information (聯絡資訊), stay in contact (保持聯絡), contact lenses (隱形眼鏡)',
      oneSentenceMnemonic: 'con (一起) + tact (碰觸) ➔ 「兩個東西碰在一起」就是 contact (接觸/聯繫)！',
      etymologicalOrigin: '拉丁文 contactus，是動詞 contingere（con- 共同 + tangere 觸碰）的完成分詞',
      visualImagery: '想像兩根手指輕輕碰在一起（con- 一起 + tact 觸碰），電流通過，這就是 contact 的畫面——不管是實際的碰觸，還是人與人之間的聯繫。',
      commonCollocations: [
        'make contact with (與...建立聯繫)',
        'lose contact (失去聯絡)',
        'contact us (聯絡我們)'
      ],
      contrastiveTips: 'contact（動詞）是正式用語，意思是「聯絡」，後面直接加受詞（contact us，不需要 with）；get in touch with 是比較口語的說法，意思相同。'
    },
    source: 'preset'
  };
