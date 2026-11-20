import { WordAnalysis } from '../../types';

export const mistake: WordAnalysis = {
    word: 'mistake',
    ipa: '/mɪˈsteɪk/',
    partOfSpeech: 'noun / verb (名詞/動詞)',
    chineseMeaning: '錯誤、過失（名詞）；弄錯、誤解（動詞）',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 負面前綴',
        morpheme: 'mis-',
        originalForm: 'mis- (古英語/古諾斯語)',
        variantNote: '這個字其實整個是從古諾斯語 mistaka 借進英文的，本身就已經包含 mis- 這個前綴',
        meaning: '錯誤地 (wrongly)',
        category: '性質判斷',
        grammaticalRole: '負面前綴'
      },
      {
        type: 'root',
        label: '💎 核心字根',
        morpheme: 'take',
        originalForm: 'taka (古諾斯語)',
        variantNote: '古諾斯語的「拿、取」，維京人入侵英國時帶進英文，後來慢慢取代了古英文原本表示「拿」的字 niman',
        meaning: '拿、取 (to take)',
        category: '核心動作',
        grammaticalRole: '動作核心'
      }
    ],
    phonetic: {
      assimilationPath: 'mis- (錯誤) + taka (拿取，古諾斯語) ➔ mistaka ➔ mistake',
      phoneticAnalysis: 'mistake 整個字是從古諾斯語借進英文的完整單字，不是英文自己後來拼裝的。重音在第二音節：/mɪˈsteɪk/。',
      ruleKey: '古諾斯語借詞 (mis- 已內建於原字)'
    },
    semantic: {
      prefixMeaning: '錯誤地 (mis-)',
      rootCoreAction: '拿取、抓取 (take)',
      suffixGrammar: '名詞/動詞同形',
      modernMeaning: '因為判斷或理解錯誤而做出不正確的行為或想法',
      formulaDisplay: '{ 錯誤地 (mis-) } + { 拿取 (take) } = 錯誤 (mistake)',
      literalLogic: '字面上是「拿錯了」，原本可能真的指伸手拿錯東西，後來擴大用來指任何判斷或行為上的錯誤。'
    },
    familyTree: [
      { word: 'mistaken', formula: 'mistake + -en (過去分詞)', meaning: '弄錯的、誤解的', level: 'Core', tags: ['TOEIC'] },
      { word: 'undertake', formula: 'under- (承擔) + take', meaning: '承擔、著手進行', level: 'TOEIC', tags: ['TOEIC'] },
      { word: 'overtake', formula: 'over- (超過) + take', meaning: '超車、趕上', level: 'TOEIC', tags: ['TOEIC'] },
      { word: 'mislead', formula: 'mis- + lead', meaning: '誤導', level: 'TOEIC', tags: ['TOEIC'] }
    ],
    memory: {
      cognatesDaily: 'make a mistake (犯錯), by mistake (不小心、誤觸), a common mistake (常見的錯誤)',
      oneSentenceMnemonic: 'mis (錯誤) + take (拿取) ➔ 「拿錯了」就是 mistake (錯誤)！',
      etymologicalOrigin: '源自古諾斯語 mistaka（mis- 錯誤 + taka 拿取），中古英文時期借入，字面意思是「拿錯、抓錯」。',
      visualImagery: '想像在自助餐檯上伸手夾了別人的餐盤，才發現自己拿錯了——這個「拿錯」的畫面就是 mistake 最原始的意思。',
      commonCollocations: [
        'make the mistake of doing something (犯了做某事的錯)',
        'correct a mistake (改正錯誤)'
      ],
      contrastiveTips: 'mistake 通常是「不是故意」的判斷或認知錯誤；error 語氣更正式、中性，常用在數據、系統或技術上；fault 則常強調「該負責的人」，帶有責任歸屬的意味。'
    },
    source: 'preset'
  };
