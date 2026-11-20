import { WordAnalysis } from '../../types';

export const prelude: WordAnalysis = {
  word: 'prelude',
  ipa: '/ˈprel.juːd/',
  partOfSpeech: 'noun (可數名詞)',
  chineseMeaning: '前奏（曲）、序幕；（重大事件前的）前兆、開端',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 前綴',
      morpheme: 'pre-',
      originalForm: 'prae- (拉丁語)',
      variantNote: 'pre- 沒有音變，直接接在字根前面。',
      meaning: '在...之前 (before)',
      category: '時間順序',
      grammaticalRole: '前綴'
    },
    {
      type: 'root',
      label: '💎 字根',
      morpheme: 'lude',
      originalForm: 'ludere (拉丁語)',
      variantNote: '拉丁文動詞 ludere 意思是「玩、演奏、表演」，跟名詞 ludus（遊戲、比賽）是同一家族，英文裡不少跟「玩耍、演出」有關的字都藏著這個字根。',
      meaning: '玩、演奏 (to play)',
      category: '核心動作',
      grammaticalRole: '動作中心'
    }
  ],
  phonetic: {
    assimilationPath: 'prae- (之前) + ludere (演奏) ➔ 拉丁文 praeludere ➔ 名詞 praeludium ➔ 英文 prelude',
    phoneticAnalysis: '這個字經過拉丁文名詞形態 praeludium 轉手進入英文，美式發音常見 /ˈprel.juːd/，也有人唸成 /ˈpreɪ.luːd/。',
    ruleKey: 'pre- + lude (拉丁動詞名詞化借入)'
  },
  semantic: {
    prefixMeaning: '在...之前 (pre-)',
    rootCoreAction: '玩、演奏 (lude)',
    suffixGrammar: '名詞',
    modernMeaning: '在正式演出或重大事件開始之前，先進行的一小段演奏或鋪陳，也引申指「預示接下來會發生什麼」的前兆',
    formulaDisplay: '{ 之前 (pre-) } + { 演奏 (lude) } = 前奏、序幕 (prelude)',
    literalLogic: '字面上是「在正式演出之前先玩/演奏一段」，後來引申成任何重大事件之前的鋪陳。'
  },
  familyTree: [
    { word: 'interlude', formula: 'inter- (中間) + lude', meaning: '幕間曲、插曲、間奏', level: 'GRE', tags: ['GRE', 'TOEFL'] },
    { word: 'elude', formula: 'e- (向外) + lude', meaning: '躲避、逃脫（玩著玩著就溜走了）', level: 'GRE', tags: ['GRE', 'TOEFL'] },
    { word: 'allude', formula: 'al- (ad- 朝向) + lude', meaning: '暗示、影射（拐個彎提到）', level: 'GRE', tags: ['GRE', 'TOEFL'] },
    { word: 'illusion', formula: 'il- (in- 向內) + lus (lude 變體) + -ion', meaning: '幻覺、錯覺（玩弄視覺的把戲）', level: 'TOEFL', tags: ['TOEFL', 'GRE'] }
  ],
  memory: {
    cognatesDaily: 'a piano prelude (鋼琴前奏曲), a prelude to war (戰爭的前兆)',
    oneSentenceMnemonic: 'pre (之前) + lude (演奏) ➔ 「正式登場前先演奏一段」就是 prelude (前奏、序幕)！',
    etymologicalOrigin: '來自拉丁文 praeludium（praeludere「事先演奏」，prae- + ludere「玩、演奏」）。',
    visualImagery: '想像交響樂團在正式曲目開始之前，先演奏一小段輕柔的旋律暖場——這就是 prelude 的畫面。',
    commonCollocations: ['a prelude to war/disaster (戰爭/災難的前兆)', 'play a prelude (演奏一首前奏曲)', 'serve as a prelude to (作為...的序幕)'],
    contrastiveTips: 'prelude 強調「正式登場前的鋪陳，本身也可能很重要」；introduction 泛指「開場介紹」，範圍更廣；overture 專指「歌劇或音樂劇正式開演前的序曲」，用法較侷限於音樂領域。'
  },
  source: 'preset'
};
