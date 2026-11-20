import { WordAnalysis } from '../../types';

export const propel: WordAnalysis = {
    word: 'propel',
    ipa: '/prəˈpel/',
    partOfSpeech: 'verb (及物動詞)',
    chineseMeaning: '推進、驅使、推動',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 空間前綴',
        morpheme: 'pro-',
        originalForm: 'pro- (拉丁語)',
        meaning: '向前 (forward, onward)',
        category: '前向空間',
        grammaticalRole: '前綴'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'pel',
        originalForm: 'pellere / pulsus (拉丁語)',
        variantNote: '拉丁動詞 pellere「推、擊打」的過去分詞是 pulsus，英文裡的 pulse (脈搏)、impulse (衝動) 這些字用的就是這個分詞形式',
        meaning: '推、驅動 (to drive, push)',
        category: '核心動作',
        grammaticalRole: '動作中心'
      }
    ],
    phonetic: {
      assimilationPath: 'pro- (向前) + pellere (推) ➔ 分詞幹 pulsus ➔ propellere ➔ 英文 propel',
      phoneticAnalysis: '拉丁動詞 pellere 有兩種長相：原形 pel-，過去分詞是 puls-。propel 用的是原形 pel-，唸的時候重音在後面 proPEL。',
      dualStemInfo: {
        presentStem: 'pel- (如 compel 強迫, expel 驅逐, repel 擊退)',
        supineStem: 'puls- (如 pulse 脈搏, impulse 衝動, compulsion 強迫)',
        meaning: '推、驅動 (drive, push)'
      },
      ruleKey: 'pel/puls 雙詞幹'
    },
    semantic: {
      prefixMeaning: '向前 (pro-)',
      rootCoreAction: '推、驅動 (pel < pellere)',
      suffixGrammar: '及物動詞',
      modernMeaning: '用力量把物體、車輛或人往前推動、驅使前進',
      formulaDisplay: '{ 向前 (pro-) } + { 推 (pel) } = 推進、驅使 (propel)',
      literalLogic: '字面上就是「向前推」，用在機械上是推進，用在人的行為上是驅使、促使。'
    },
    familyTree: [
      { word: 'propeller', formula: 'propel + -er', meaning: '推進器、螺旋槳' },
      { word: 'compel', formula: 'com- (強力) + pel', meaning: '強迫' },
      { word: 'expel', formula: 'ex- (向外) + pel', meaning: '驅逐、開除' },
      { word: 'repel', formula: 're- (向後) + pel', meaning: '擊退、使反感' },
      { word: 'pulse', formula: 'puls (pellere 的分詞幹) + -e', meaning: '脈搏 (一下一下被推動的節奏)' }
    ],
    memory: {
      cognatesDaily: 'propel a boat (推動船隻前進), propel someone to fame (促使某人成名)',
      oneSentenceMnemonic: 'pro (向前) + pel (推) ➔ 「用力往前推」就是 propel (推進/驅使)！',
      etymologicalOrigin: '拉丁文 propellere (pro- + pellere「推」)',
      commonCollocations: [
        'be propelled by something (被某種力量推動)',
        'propel someone to success (推動某人邁向成功)'
      ],
      contrastiveTips: 'propel 常用於具體的機械推進（如螺旋槳推進船隻），也可以比喻性地用在「某個因素推動一個人邁向成功/名聲」；push 是最基礎、日常口語的「推」，propel 語氣更正式、更強調持續的推進力。'
    },
    source: 'preset'
  };
