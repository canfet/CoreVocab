import { WordAnalysis } from '../../types';

export const intercept: WordAnalysis = {
    word: 'intercept',
    ipa: '/ˌɪn.tɚˈsept/',
    partOfSpeech: 'verb (及物動詞)',
    chineseMeaning: '攔截、截獲（球/訊息/敵機等）',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 前綴',
        morpheme: 'inter-',
        originalForm: 'inter- (拉丁語)',
        meaning: '在...之間、中途 (between)',
        category: '空間/方向',
        grammaticalRole: '前綴'
      },
      {
        type: 'root',
        label: '💎 核心字根',
        morpheme: 'cept',
        originalForm: 'capere (拉丁語「拿、抓取」)，完成分詞幹 captus',
        variantNote: '跟 accept 一樣，capere 放進複合字中間時母音會弱化：現在式變成 -cipere，完成分詞變成 -ceptus，英文字根就變成 cept。',
        meaning: '拿取、抓住 (to take, seize)',
        category: '核心動作',
        grammaticalRole: '分詞詞幹'
      }
    ],
    phonetic: {
      assimilationPath: 'inter- (中途) + capere ➔ -cipere (現在式) / -ceptus (完成式) ➔ intercept',
      phoneticAnalysis: '這裡的音變規則跟 accept 一樣：capere 放進字中間時母音會弱化，完成分詞字幹則變成 cept。inter- 本身不需要同化，直接接在字根前面。',
      ruleKey: 'inter- + capere 母音弱化 (a➔i/e)'
    },
    semantic: {
      prefixMeaning: '在...之間、中途 (inter-)',
      rootCoreAction: '拿取、抓住 (cept < capere)',
      suffixGrammar: '及物動詞',
      modernMeaning: '在物體或訊息還沒到達目的地前，中途把它攔截抓住',
      formulaDisplay: '{ 中途/之間 (inter-) } + { 抓取 (cept) } = 攔截 (intercept)',
      literalLogic: '字面上是「在半路上把東西抓住」，不管是攔截一顆球、一通訊息，還是一架敵機，概念都是「還沒到達目的地就先攔下來」。'
    },
    familyTree: [
      { word: 'interception', formula: 'intercept + -ion', meaning: '攔截（名詞）', level: 'TOEFL', tags: ['TOEFL'] },
      { word: 'accept', formula: 'ac- (朝向) + cept (拿)', meaning: '接受', level: 'Core', tags: ['TOEIC'] },
      { word: 'except', formula: 'ex- (向外) + cept (拿)', meaning: '除了...之外', level: 'Core', tags: ['TOEIC'] },
      { word: 'concept', formula: 'con- (共同) + cept (拿)', meaning: '概念（把想法一起抓在一起）', level: 'TOEFL', tags: ['TOEFL'] },
      { word: 'receive', formula: 're- (回) + ceive (拿)', meaning: '收到、接收', level: 'Core', tags: ['TOEIC'] }
    ],
    memory: {
      cognatesDaily: 'intercept a pass (攔截傳球), intercept a message (截獲訊息)',
      oneSentenceMnemonic: 'inter (中途) + cept (抓住) ➔ 「在半路上把它抓住」就是 intercept (攔截)！',
      etymologicalOrigin: '拉丁文 intercipere（inter- 「之間」 + capere 「拿取」）',
      visualImagery: '想像美式足球比賽中，防守球員突然衝到傳球路線中間，硬生生把球從半空中攔下來，那個「中途抓住」的畫面就是 intercept。',
      commonCollocations: [
        'intercept a pass/ball (在運動比賽中攔截傳球)',
        'intercept enemy communications (截獲敵方通訊)'
      ],
      contrastiveTips: 'intercept 強調「東西還在途中就被半路攔下」；catch 只是單純「接住/抓到」，不特別強調中途攔截的動作。'
    },
    source: 'preset'
  };
