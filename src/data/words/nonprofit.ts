import { WordAnalysis } from '../../types';

export const nonprofit: WordAnalysis = {
    word: 'nonprofit',
    ipa: '/ˌnɑːnˈprɑː.fɪt/',
    partOfSpeech: 'adjective (形容詞); noun (名詞)',
    chineseMeaning: '非營利的、非營利組織',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 客觀否定前綴',
        morpheme: 'non-',
        originalForm: 'non (拉丁語)',
        variantNote: 'non- 拼法固定不變，直接加在名詞前面表示「不是、非」',
        meaning: '不是、非 (not)',
        category: '否定極性',
        grammaticalRole: '否定前綴'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'profit',
        originalForm: 'profectus / proficere (拉丁語)',
        variantNote: 'proficere 是 pro- (向前) + facere (做) 組成的字，字面是「向前推進、做出成果」，名詞 profectus 就是「進展、獲益」',
        meaning: '獲益、利潤 (gain, advantage)',
        category: '核心概念',
        grammaticalRole: '概念中心'
      }
    ],
    phonetic: {
      assimilationPath: 'non- (非) + proficere (獲益) ➔ profectus ➔ 英文 profit ➔ nonprofit',
      phoneticAnalysis: 'non- 直接接在 profit 前面，不需要變身，重音落在 profit 的第一個音節 nonPROfit。',
      ruleKey: 'non- + profit 直接拼接'
    },
    semantic: {
      prefixMeaning: '不是 (non-)',
      rootCoreAction: '獲益、利潤 (profit < proficere)',
      suffixGrammar: '形容詞/名詞',
      modernMeaning: '不以賺取利潤為目的、把收入用於宗旨本身的組織或活動',
      formulaDisplay: '{ 不是 (non-) } + { 利潤 (profit) } = 非營利的 (nonprofit)',
      literalLogic: '字面上就是「不是為了賺錢」，用來形容以公益為目的的組織。'
    },
    familyTree: [
      { word: 'profit', formula: '字根本體', meaning: '利潤、獲益' },
      { word: 'profitable', formula: 'profit + -able', meaning: '有利可圖的' },
      { word: 'proficient', formula: 'pro- + fic (facere 的變體) + -ent', meaning: '熟練的、精通的 (同源於 proficere)' },
      { word: 'deficit', formula: 'de- (缺少) + fic + -it', meaning: '赤字、不足 (與 profit 意義相對)' }
    ],
    memory: {
      cognatesDaily: 'nonprofit organization (非營利組織), work for a nonprofit (在非營利機構工作)',
      oneSentenceMnemonic: 'non (不是) + profit (利潤) ➔ 「不是為了賺錢」就是 nonprofit (非營利的)！',
      etymologicalOrigin: '拉丁文 proficere (pro- + facere「做」) 加上客觀否定前綴 non-',
      commonCollocations: [
        'nonprofit organization / NPO (非營利組織)',
        'nonprofit sector (非營利部門)'
      ],
      contrastiveTips: 'nonprofit 是美式用語，強調組織「不以營利為目的」；英式英語較常用 not-for-profit 或 charity 來表達類似概念。'
    },
    source: 'preset'
  };
