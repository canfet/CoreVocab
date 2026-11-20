import { WordAnalysis } from '../../types';

export const misconduct: WordAnalysis = {
    word: 'misconduct',
    ipa: '/mɪsˈkɑːn.dʌkt/',
    partOfSpeech: 'noun (不可數名詞，也可作動詞 /ˌmɪs.kənˈdʌkt/)',
    chineseMeaning: '不當行為、行為不檢、瀆職、失職',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 負面前綴',
        morpheme: 'mis-',
        originalForm: 'mis- (古英語)',
        variantNote: '這是英文自己土生土長的前綴，不是從拉丁文借來的，直接加在單字前面表示「做錯了」',
        meaning: '錯誤地、不當地 (wrongly, badly)',
        category: '性質判斷',
        grammaticalRole: '負面前綴'
      },
      {
        type: 'root',
        label: '💎 核心字根',
        morpheme: 'conduct',
        originalForm: 'conducere (拉丁語: con- 共同 + ducere 帶領)',
        variantNote: 'conduct 這個字整個從拉丁文借進英文，本來的意思是「帶領、引導」，後來變成「行為舉止、處理事情的方式」，這裡不再拆開，直接當作一個字根使用',
        meaning: '行為、舉止、處理方式 (behavior, way of managing)',
        category: '核心動作',
        grammaticalRole: '動作核心'
      }
    ],
    phonetic: {
      assimilationPath: 'mis- (錯誤) + conduct (行為) ➔ misconduct',
      phoneticAnalysis: 'mis- 是零音變前綴，加在任何字前面發音都不會變。當名詞時重音在第一音節 /ˈmɪs.kɑːn.dʌkt/，當動詞時重音會往後移到 con- /kənˈdʌkt/。',
      ruleKey: 'mis- 零音變前綴直接複合'
    },
    semantic: {
      prefixMeaning: '錯誤地、不當地 (mis-)',
      rootCoreAction: '行為、處理方式 (conduct)',
      suffixGrammar: '名詞/動詞同形',
      modernMeaning: '違反規範、職責或專業倫理的不當行為，常用在職場、法律或體育場合',
      formulaDisplay: '{ 錯誤地 (mis-) } + { 行為舉止 (conduct) } = 不當行為、失職 (misconduct)',
      literalLogic: 'conduct 本來是「一個人帶領自己的方式」，也就是行為舉止；misconduct 就是「帶錯方向的行為」，也就是不當、違規的行為。'
    },
    familyTree: [
      { word: 'conduct', formula: 'con- + duct', meaning: '行為；引導、實施', level: 'Core', tags: ['TOEIC'] },
      { word: 'misbehave', formula: 'mis- + behave', meaning: '行為不端', level: 'TOEIC', tags: ['TOEIC'] },
      { word: 'misdemeanor', formula: 'mis- + demeanor', meaning: '輕罪、不當行為', level: 'GRE', tags: ['GRE'] },
      { word: 'conductor', formula: 'conduct + -or', meaning: '指揮、車掌、導體', level: 'Core', tags: ['TOEIC'] }
    ],
    memory: {
      cognatesDaily: 'professional misconduct (專業失職), sexual misconduct (性騷擾行為), misconduct in office (瀆職)',
      oneSentenceMnemonic: 'mis (錯誤) + conduct (行為) ➔ 「做錯的行為」就是 misconduct (不當行為)！',
      etymologicalOrigin: 'conduct 源自拉丁文 conducere（con- 共同 + ducere 帶領），中古英文開始加上本地前綴 mis- 組成 misconduct，最早指「管理不當」。',
      visualImagery: '想像一位法官在審理一名員工挪用公款的案件，判決書上寫著大大的 misconduct（不當行為）。',
      commonCollocations: [
        'accuse someone of misconduct (指控某人行為不當)',
        'a case of misconduct (一起瀆職案件)'
      ],
      contrastiveTips: 'misconduct 語氣正式，常用在職業、法律規範被違反的場合；mistake 只是單純「犯錯」，不一定牽涉到違反規則或道德責任。'
    },
    source: 'preset'
  };
