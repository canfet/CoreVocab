import { WordAnalysis } from '../../types';

export const offend: WordAnalysis = {
  word: 'offend',
  ipa: '/əˈfɛnd/',
  partOfSpeech: 'verb (及物/不及物動詞)',
  chineseMeaning: '冒犯、觸怒；違反（法律、規定）',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 同化前綴',
      morpheme: 'of-',
      originalForm: 'ob- (拉丁語)',
      variantNote: 'ob- 遇到 f 開頭的字根時，最後的 b 會同化成 f，變成 of-（ob- ➔ of-）。',
      meaning: '對著、衝著 (against, toward)',
      category: '空間/方向',
      grammaticalRole: '方向前綴'
    },
    {
      type: 'root',
      label: '💎 核心字根',
      morpheme: 'fend',
      originalForm: 'fendere (拉丁語)',
      variantNote: 'fendere「打擊、撞擊」這個動詞在古典拉丁文裡沒有單獨使用的紀錄，只出現在 offendere、defendere 這類複合字裡，但學者根據這些複合字推斷出它的原始意思。',
      meaning: '打擊、撞擊 (to strike, hit)',
      category: '核心動作',
      grammaticalRole: '動作中心'
    }
  ],
  phonetic: {
    assimilationPath: 'ob- (對著) ➔ 同化為 of- + fendere (打擊) ➔ offendere (迎面撞擊) ➔ offend',
    phoneticAnalysis: 'ob- 的字尾 b 遇到 f 這個音，直接同化成 f，唸起來變成 of-，跟後面的 fend 連在一起發音更順口。',
    ruleKey: 'ob- ➔ of- 前綴同化 (遇 f 全同化)'
  },
  semantic: {
    prefixMeaning: '對著、衝著某人 (of- < ob-)',
    rootCoreAction: '打擊、撞擊 (fend < fendere)',
    suffixGrammar: '及物/不及物動詞',
    modernMeaning: '言語或行為像是「迎面撞擊」對方的感受，引申為冒犯、觸怒對方；也可以指行為「撞上」規範，也就是違反法規',
    formulaDisplay: '{ 對著 (of- < ob-) } + { 打擊 (fend) } = 冒犯、觸怒 (offend)',
    literalLogic: '字面上是「迎面撞擊」對方，用在情感上就是說了或做了讓對方不舒服、生氣的事，也就是冒犯；用在規則上，就是撞上了法律的紅線，也就是違法。'
  },
  familyTree: [
    { word: 'offense', formula: 'offend + -se (名詞)', meaning: '冒犯；犯罪、違規', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'offensive', formula: 'offense + -ive (形容詞)', meaning: '冒犯的；攻擊性的', level: 'TOEIC', tags: ['TOEIC', 'IELTS'] },
    { word: 'offender', formula: 'offend + -er (人)', meaning: '違法者、犯罪者', level: 'TOEFL', tags: ['TOEFL'] },
    { word: 'defend', formula: 'de- (向下、遠離) + fend (打擊)', meaning: '防衛、辯護', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'defense', formula: 'de- + fend + -se', meaning: '防禦、辯護', level: 'TOEIC', tags: ['TOEIC'] }
  ],
  memory: {
    cognatesDaily: 'offend someone (冒犯某人), no offense (無意冒犯), a criminal offense (刑事罪行)',
    oneSentenceMnemonic: 'of (衝著、對著) + fend (撞擊) ➔ 一句話「迎面撞上」對方的感受就是 offend (冒犯)！',
    etymologicalOrigin: '拉丁語 offendere（ob- 「對著」 + fendere 「打擊」）',
    visualImagery: '想像一句話像一顆球，直直朝著對方臉上飛去，讓對方感到受傷或生氣，那個「迎面撞擊」的畫面就是 offend。',
    commonCollocations: ['offend someone\'s feelings (傷害某人的感情)', 'no offense intended (無意冒犯)', 'commit an offense (犯罪、違規)'],
    contrastiveTips: 'offend 偏向「讓人感到被冒犯、不悅」；insult 語氣更強烈、更直接，通常是刻意的侮辱；offend 也可以是無心的。'
  },
  source: 'preset'
};
