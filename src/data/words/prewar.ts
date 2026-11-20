import { WordAnalysis } from '../../types';

export const prewar: WordAnalysis = {
  word: 'prewar',
  ipa: '/ˌpriːˈwɔːr/',
  partOfSpeech: 'adjective (形容詞)',
  chineseMeaning: '戰前的、戰前時期的',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 前綴',
      morpheme: 'pre-',
      originalForm: 'prae- (拉丁語)',
      variantNote: 'pre- 直接加在英文名詞 war 前面組成形容詞，不會變形。',
      meaning: '在...之前 (before)',
      category: '時間順序',
      grammaticalRole: '形容詞前綴'
    },
    {
      type: 'root',
      label: '💎 字根',
      morpheme: 'war',
      originalForm: 'werre (古北法語) / guerre (古法語)',
      variantNote: '英文的 war 是從古法文借來的，但那個字本身源頭其實是日耳曼語，意思接近「混亂、爭鬥」，跟拉丁文完全無關。',
      meaning: '戰爭 (war, armed conflict)',
      category: '核心概念',
      grammaticalRole: '概念核心'
    }
  ],
  phonetic: {
    assimilationPath: 'pre- (之前) + war (戰爭) ➔ prewar',
    phoneticAnalysis: 'pre- 直接加在 war 前面組成形容詞，沒有音變，重音落在後面的 war 上。',
    ruleKey: 'pre- + 原生/借用英文詞根 (零音變)'
  },
  semantic: {
    prefixMeaning: '在...之前 (pre-)',
    rootCoreAction: '戰爭 (war)',
    suffixGrammar: '形容詞',
    modernMeaning: '用來形容某段時期、某種狀態或某樣事物，是發生在某場戰爭爆發之前的',
    formulaDisplay: '{ 之前 (pre-) } + { 戰爭 (war) } = 戰前的 (prewar)',
    literalLogic: '字面上就是「戰爭之前」，常用來描述時代背景。'
  },
  familyTree: [
    { word: 'postwar', formula: 'post- (之後) + war', meaning: '戰後的', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'wartime', formula: 'war + time', meaning: '戰時、戰爭期間', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'warfare', formula: 'war + fare (行動、進程)', meaning: '戰爭行為、作戰方式', level: 'TOEFL', tags: ['TOEFL', 'IELTS'] }
  ],
  memory: {
    cognatesDaily: 'prewar Europe (戰前的歐洲), prewar economy (戰前經濟)',
    oneSentenceMnemonic: 'pre (之前) + war (戰爭) ➔ 「戰爭爆發之前」就是 prewar (戰前的)！',
    etymologicalOrigin: 'war 源自古法文 guerre，最終來自日耳曼語，跟拉丁文無關；pre- 是直接加上去的英文複合詞。',
    visualImagery: '想像一張黑白老照片，標註著「戰前」的城市街景，跟戰後滿目瘡痍的畫面形成對比。',
    commonCollocations: ['prewar era (戰前時代)', 'prewar economy (戰前經濟)', 'prewar buildings (戰前的建築物)'],
    contrastiveTips: 'prewar 專指「某場特定戰爭爆發之前」，常見於歷史語境（如 prewar Japan）；peacetime 泛指「非戰爭的和平時期」，不限定在某場戰爭之前。'
  },
  source: 'preset'
};
