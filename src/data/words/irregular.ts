import { WordAnalysis } from '../../types';

export const irregular: WordAnalysis = {
    word: 'irregular',
    ipa: '/ɪˈreɡ.jə.lər/',
    partOfSpeech: 'adjective (形容詞)',
    chineseMeaning: '不規則的、不規律的、不整齊的',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 同化前綴',
        morpheme: 'ir-',
        originalForm: 'in- (拉丁語)',
        variantNote: 'in- 遇到 r 這個音，會整個變身成 ir- (in- ➔ ir-)',
        meaning: '不 (not)',
        category: '否定',
        grammaticalRole: '否定前綴'
      },
      {
        type: 'root',
        label: '💎 核心字根',
        morpheme: 'regul',
        originalForm: 'regula (拉丁語「規則、尺」，來自動詞 regere「統治、引導、使筆直」)',
        meaning: '規則、準繩 (rule, standard)',
        category: '核心概念',
        grammaticalRole: '核心語義'
      },
      {
        type: 'suffix',
        label: '🏷️ 形容詞字尾',
        morpheme: '-ar',
        originalForm: '-āris (拉丁語)',
        variantNote: '加在名詞字根後面，把它變成形容詞，表示「與...有關的」',
        meaning: '與...有關的 (relating to)',
        category: '形容詞化',
        grammaticalRole: '形容詞後綴'
      }
    ],
    phonetic: {
      assimilationPath: 'in- (不) ➔ 同化為 ir- + regula (規則) ➔ regularis (規則的) ➔ irregularis ➔ irregular',
      phoneticAnalysis: 'in- 遇到 r 開頭的字，字尾的 n 會換成 r，唸起來才順口（in- + r... ➔ ir-，像 irregular, irrational, irresponsible 都是這樣）。',
      ruleKey: 'in- ➔ ir- 語音同化 (前綴遇 r 全同化)'
    },
    semantic: {
      prefixMeaning: '不 (in- ➔ ir-)',
      rootCoreAction: '規則、準繩 (regul < regula)',
      suffixGrammar: '與...有關的 (-ar)',
      modernMeaning: '不符合固定規則、模式或標準，顯得不整齊、不穩定',
      formulaDisplay: '{ 不 (ir- < in-) } + { 規則 (regul) } + { 與...有關的 (-ar) } = 不規則的 (irregular)',
      literalLogic: '字面上是「不符合規則的」，引申為形狀、頻率或行為上的「不規律、不整齊」。'
    },
    familyTree: [
      { word: 'regular', formula: 'regul (規則) + -ar', meaning: '規則的、定期的', level: 'Core', tags: ['TOEIC'] },
      { word: 'regulate', formula: 'regul (規則) + -ate', meaning: '管制、調節', level: 'TOEIC', tags: ['TOEIC'] },
      { word: 'regulation', formula: 'regulate + -ion', meaning: '法規、規定', level: 'TOEIC', tags: ['TOEIC'] },
      { word: 'rule', formula: 'regula 的英語化形式', meaning: '規則', level: 'Core', tags: ['TOEIC'] },
      { word: 'ruler', formula: 'rule + -er', meaning: '尺、統治者', level: 'Core', tags: ['TOEIC'] }
    ],
    memory: {
      cognatesDaily: 'irregular verbs (不規則動詞), irregular heartbeat (心律不整), an irregular shape (不規則的形狀)',
      oneSentenceMnemonic: 'ir (不) + regul (規則) + ar (與...有關的) ➔ 「不符合規則」就是 irregular (不規則的)！',
      etymologicalOrigin: '拉丁文 irregularis（in- 不 + regularis「規則的」，regularis 又來自 regula「規則、尺」）',
      visualImagery: '想像一把彎彎曲曲的尺，量出來的線條完全不直、不整齊，那種「偏離標準、不整齊」的樣子就是 irregular。',
      commonCollocations: [
        'irregular verbs/patterns (不規則動詞/模式)',
        'at irregular intervals (間隔不固定地)'
      ],
      contrastiveTips: 'irregular 強調「不遵循固定模式或頻率」（形狀、心跳、動詞變化）；abnormal 強調「不正常、異常」，語氣更偏向醫療或統計上的偏差，兩者常可互換但語境略有不同。'
    },
    source: 'preset'
  };
