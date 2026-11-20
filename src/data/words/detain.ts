import { WordAnalysis } from '../../types';

export const detain: WordAnalysis = {
    word: 'detain',
    ipa: '/dɪˈteɪn/',
    partOfSpeech: 'verb (及物動詞)',
    chineseMeaning: '拘留、扣押、耽擱、留住',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 前綴',
        morpheme: 'de-',
        originalForm: 'de-',
        meaning: '向下、離開、阻止 (away, down, off)',
        category: '空間/阻礙',
        grammaticalRole: '動詞前綴'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'tain',
        originalForm: 'tenēre',
        meaning: '握住、持 (to hold)',
        category: '核心動作',
        grammaticalRole: '動作中心'
      }
    ],
    phonetic: {
      assimilationPath: 'de- (阻留) + tenēre ➔ detain (名詞: detention)',
      phoneticAnalysis: '動詞 detain 和名詞 detention 顯示這個字根會換成兩種長相：tain- 和 tent-。',
      ruleKey: 'de- + tenēre'
    },
    semantic: {
      prefixMeaning: '阻攔離開 (de-)',
      rootCoreAction: '握住不放 (tain)',
      suffixGrammar: '及物動詞',
      modernMeaning: '依法扣留某人限制自由；因事耽擱某人行程',
      formulaDisplay: '{ 阻攔 (de-) } + { 握住 (tain) } = 拘留、扣押 (detain)',
      literalLogic: '把想要離開的人用力握住不讓他走，後來變成「警察把人拘留」或「耽誤時間」的意思。'
    },
    familyTree: [
      { word: 'detention', formula: 'de- + tent + -ion', meaning: '拘留、扣留、留校察看' },
      { word: 'detainee', formula: 'detain + -ee', meaning: '被拘留者、被扣押者' }
    ],
    memory: {
      cognatesDaily: 'detention center (拘留所), detained at customs (被海關扣留)',
      oneSentenceMnemonic: 'de (阻攔) + tain (握住) ➔ 「抓住不讓走」就是 detain (拘留/耽擱)！',
      etymologicalOrigin: '古拉丁文 dētinēre (de- 「留住」 + tenēre 「握住」)'
    },
    source: 'preset'
  };
