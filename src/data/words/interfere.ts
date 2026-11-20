import { WordAnalysis } from '../../types';

export const interfere: WordAnalysis = {
    word: 'interfere',
    ipa: '/ˌɪn.tɚˈfɪr/',
    partOfSpeech: 'verb (不及物動詞，常接 in/with)',
    chineseMeaning: '干涉、妨礙、介入',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 前綴',
        morpheme: 'inter-',
        originalForm: 'inter- (拉丁語)',
        meaning: '彼此之間、互相 (between, mutually)',
        category: '空間/方向',
        grammaticalRole: '前綴'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'fere',
        originalForm: 'ferire (拉丁語)',
        variantNote: '這裡的 fere 來自拉丁文 ferire「打、擊」，跟表示「攜帶、承受」的 fer（來自 ferre，出現在 suffer, transfer, offer, circumference）完全是不同的字根，拼法相似但字源不同，要特別注意分辨。',
        meaning: '打、擊、碰撞 (to strike, hit)',
        category: '核心動作',
        grammaticalRole: '動作中心'
      }
    ],
    phonetic: {
      assimilationPath: 'inter- (彼此之間) + ferire (打、擊) ➔ 古法語 entreferir ➔ interfere',
      phoneticAnalysis: '這個字從古法文 entreferir（entre- 彼此 + ferir 打，源自通俗拉丁文 *ferire）借入英文，字形被改寫成比較貼近拉丁文的拼法 inter-，重音落在最後一個音節 -FERE。',
      ruleKey: 'inter- + ferire (古法語借詞，拉丁化拼寫)'
    },
    semantic: {
      prefixMeaning: '彼此之間 (inter-)',
      rootCoreAction: '打、碰撞 (fere < ferire)',
      suffixGrammar: '不及物動詞',
      modernMeaning: '原意是雙方互相碰撞打鬥，後來引申為插手介入他人事務、妨礙進行中的事情',
      formulaDisplay: '{ 彼此之間 (inter-) } + { 碰撞、打 (fere) } = 干涉、妨礙 (interfere)',
      literalLogic: '字面上是「兩者互相碰撞打鬥」，後來慢慢變成「插手介入、妨礙別人的事」。'
    },
    familyTree: [
      { word: 'interference', formula: 'interfere + -ence', meaning: '干涉、干擾（名詞）', level: 'TOEFL', tags: ['TOEFL'] },
      { word: 'interfering', formula: 'interfere + -ing (形容詞)', meaning: '愛管閒事的', level: 'TOEIC', tags: ['TOEIC'] },
      { word: 'interferon', formula: 'interfere + -on (化學/生物字尾)', meaning: '干擾素（因能干擾病毒複製而得名，1957年命名）', level: 'GRE', tags: ['GRE'] }
    ],
    memory: {
      cognatesDaily: 'interfere with someone’s plans (妨礙某人的計畫), interfere in politics (干涉政治)',
      oneSentenceMnemonic: 'inter (彼此之間) + fere (碰撞、打) ➔ 「橫插進來互相碰撞」就是 interfere (干涉/妨礙)！',
      etymologicalOrigin: '古法文 entreferir（entre- 「彼此」 + ferir 「打」，源自通俗拉丁文 *ferire），與表示「攜帶」的 ferre（suffer, transfer, offer 的字根）並非同一個字',
      commonCollocations: [
        'interfere with something (妨礙某事的進行)',
        'interfere in someone’s affairs (干涉某人的私事)'
      ],
      contrastiveTips: 'interfere 帶有負面語氣，強調「不請自來地插手、造成妨礙」；intervene 語氣較中性甚至正面，常指「介入調停、阻止情況惡化」。'
    },
    source: 'preset'
  };
