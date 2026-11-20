import { WordAnalysis } from '../../types';

export const pseudonym: WordAnalysis = {
    word: 'pseudonym',
    ipa: '/ˈsuː.də.nɪm/',
    partOfSpeech: 'noun (名詞)',
    chineseMeaning: '假名、化名、筆名',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 負面前綴',
        morpheme: 'pseudo-',
        originalForm: 'pseudēs (古希臘語)',
        variantNote: '這是希臘文的前綴，直接加在字根前面，沒有音變',
        meaning: '虛假、偽裝的 (false, fake)',
        category: '性質判斷',
        grammaticalRole: '負面前綴'
      },
      {
        type: 'root',
        label: '💎 核心字根',
        morpheme: '-onym',
        originalForm: 'onyma / onoma (古希臘語)',
        variantNote: '這是希臘文表示「名字」的字根，在英文裡通常放在字尾當作結合形式，像 anonymous, synonym 都用到它',
        meaning: '名字 (name)',
        category: '核心概念',
        grammaticalRole: '核心名詞字根'
      }
    ],
    phonetic: {
      assimilationPath: 'pseudēs (虛假) ➔ pseudo- + onoma (名字) ➔ -onym ➔ pseudonym',
      phoneticAnalysis: 'pseudo- 開頭的字母組合 ps 在英文裡通常唸成 /s/，p 不發音。重音落在第一音節：/ˈsuː.də.nɪm/。',
      ruleKey: '希臘語前綴 + 希臘語字根組合'
    },
    semantic: {
      prefixMeaning: '虛假的 (pseudo-)',
      rootCoreAction: '名字 (onym)',
      suffixGrammar: '名詞',
      modernMeaning: '作者、藝人或網路使用者為了隱藏真實身分而使用的假名字',
      formulaDisplay: '{ 虛假 (pseudo-) } + { 名字 (onym) } = 假名、筆名 (pseudonym)',
      literalLogic: '字面上就是「假的名字」，古希臘文兩個字根直接拼在一起，19世紀被英文借來當作專有名詞使用。'
    },
    familyTree: [
      { word: 'synonym', formula: 'syn- (相同) + onym (名字)', meaning: '同義詞', level: 'Core', tags: ['TOEIC'] },
      { word: 'antonym', formula: 'ant- (相反) + onym (名字)', meaning: '反義詞', level: 'Core', tags: ['TOEIC'] },
      { word: 'anonymous', formula: 'an- (無) + onym + -ous', meaning: '匿名的', level: 'TOEIC', tags: ['TOEIC'] },
      { word: 'pseudoscience', formula: 'pseudo- + science', meaning: '偽科學', level: 'GRE', tags: ['GRE'] }
    ],
    memory: {
      cognatesDaily: 'write under a pseudonym (用筆名寫作), online pseudonym (網路化名)',
      oneSentenceMnemonic: 'pseudo (假的) + onym (名字) ➔ 「假的名字」就是 pseudonym (筆名/化名)！',
      etymologicalOrigin: '源自古希臘文 pseudēs（假的）與 onoma（名字），19世紀初被英文直接借用來指作家使用的假名。',
      visualImagery: '想像一位小說家戴著面具在書封上簽下另一個名字，讀者永遠不知道面具底下真正的作者是誰。',
      commonCollocations: [
        'publish under a pseudonym (以筆名出版)',
        'adopt a pseudonym (採用化名)'
      ],
      contrastiveTips: 'pseudonym 通常是「特地取的假名」，帶有隱藏身分的目的；nickname（綽號）通常是別人幫你取的暱稱，沒有隱藏身分的用意；alias 則常用在法律或警方語境，指某人（尤其是嫌疑人）使用的別名。'
    },
    source: 'preset'
  };
