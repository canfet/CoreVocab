import { WordAnalysis } from '../../types';

export const addict: WordAnalysis = {
    word: 'addict',
    ipa: '/ˈæd.ɪkt/ (n) / /əˈdɪkt/ (v)',
    partOfSpeech: 'noun / verb (名詞/及物動詞)',
    chineseMeaning: '成癮者、沉溺於...的人；使沉溺、使成癮',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 前綴',
        morpheme: 'ad-',
        originalForm: 'ad-',
        meaning: '朝向、指向 (to, toward)',
        category: '空間/趨向',
        grammaticalRole: '趨向引導'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'dict',
        originalForm: 'dicere ➔ dictus',
        meaning: '宣佈、法律判決 (to declare, assign)',
        category: '核心概念',
        grammaticalRole: '核心概念'
      }
    ],
    phonetic: {
      assimilationPath: 'ad- + dictus ➔ addict',
      phoneticAnalysis: '這個字當名詞唸的時候，重音在第一個音節 /ˈæd.ɪkt/；當動詞唸的時候，重音跑到第二個音節 /əˈdɪkt/。',
      ruleKey: '名詞/動詞重音移位交替'
    },
    semantic: {
      prefixMeaning: '向著某事物 (ad-)',
      rootCoreAction: '判決奉獻 (dict)',
      suffixGrammar: '名詞/動詞同形',
      modernMeaning: '完全臣服並沉迷於某項嗜好或毒品的人',
      formulaDisplay: '{ 指向 (ad-) } + { 判決 (dict) } = 成癮者 (addict)',
      literalLogic: '古羅馬的法官依照法律，把欠錢還不出來的人判給債主（addicere），後來變成形容「整個人被某種東西控制住」的人。'
    },
    familyTree: [
      { word: 'addictive', formula: 'ad- + dict + -ive', meaning: '使人上癮的' },
      { word: 'addiction', formula: 'ad- + dict + -ion', meaning: '癮頭、成癮症' }
    ],
    memory: {
      cognatesDaily: 'drug addict (吸毒者), book addict (書蟲/書痴)',
      oneSentenceMnemonic: '把自己的身心判給了 (dict) 某樣東西 (ad) ➔ addict (成癮者)！',
      etymologicalOrigin: '古拉丁文 addīcere'
    },
    source: 'preset'
  };
