import { WordAnalysis } from '../../types';

export const obtain: WordAnalysis = {
    word: 'obtain',
    ipa: '/əbˈteɪn/',
    partOfSpeech: 'verb (及物/不及物動詞)',
    chineseMeaning: '獲得、取得、買到；（習俗/規則）通用、流行',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 前綴',
        morpheme: 'ob-',
        originalForm: 'ob-',
        variantNote: '這個開頭的意思是「朝著目標前進」',
        meaning: '朝向、前往、到手 (toward, in front of)',
        category: '指向/取得',
        grammaticalRole: '前綴修飾'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'tain',
        originalForm: 'tenēre',
        meaning: '握住、持 (to hold, grasp)',
        category: '核心動作',
        grammaticalRole: '動作中心'
      }
    ],
    phonetic: {
      assimilationPath: 'ob- (朝向) + tenēre ➔ obtain',
      phoneticAnalysis: 'ob- 遇到 t 這個音的時候，不會變身，還是維持原來的樣子。',
      ruleKey: 'ob- + tenēre'
    },
    semantic: {
      prefixMeaning: '朝向/到手 (ob-)',
      rootCoreAction: '握住 (tain)',
      suffixGrammar: '動詞幹',
      modernMeaning: '經過努力或交易將某物握入手中，獲得擁有權',
      formulaDisplay: '{ 朝向 (ob-) } + { 握住 (tain) } = 獲得、取得 (obtain)',
      literalLogic: '伸手朝目標前進，然後牢牢握住，後來變成「取得資格、得到成果」的意思。'
    },
    familyTree: [
      { word: 'obtainable', formula: 'obtain + -able', meaning: '可獲得的、能買到的' },
      { word: 'contain', formula: 'con- + tain', meaning: '包含、容納' },
      { word: 'retain', formula: 're- + tain', meaning: '保留、保持' }
    ],
    memory: {
      cognatesDaily: 'obtain permission (獲得許可), easily obtainable (容易取得的)',
      oneSentenceMnemonic: 'ob (朝向) + tain (握住) ➔ 「朝著目標握到手中」就是 obtain (獲得)！',
      etymologicalOrigin: '古拉丁文 obtinēre (ob- 「朝向」 + tenēre 「握住」)'
    },
    source: 'preset'
  };
