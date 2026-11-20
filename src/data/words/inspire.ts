import { WordAnalysis } from '../../types';

export const inspire: WordAnalysis = {
    word: 'inspire',
    ipa: '/ɪnˈspaɪər/',
    partOfSpeech: 'verb (及物/不及物動詞)',
    chineseMeaning: '激勵、啟發、賦予靈感；（較古老/字面）吸氣、吸入',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 前綴',
        morpheme: 'in-',
        originalForm: 'in- (拉丁語)',
        meaning: '向內、進入 (into)',
        category: '空間/方向',
        grammaticalRole: '方向前綴'
      },
      {
        type: 'root',
        label: '💎 核心字根',
        morpheme: 'spir',
        originalForm: 'spirare (拉丁語「呼吸」)',
        meaning: '呼吸 (to breathe)',
        category: '核心動作',
        grammaticalRole: '核心語義'
      }
    ],
    phonetic: {
      assimilationPath: 'in- (向內) + spirare (呼吸) ➔ inspirare ➔ inspire',
      phoneticAnalysis: 'in- 在 s 開頭的字前面不需要同化，直接拼接。字根 spirare（呼吸）在英文裡保留完整拼法，跟 expire, respire, aspire, conspire, perspire 是同一家族。',
      ruleKey: 'in- 無同化直接拼接'
    },
    semantic: {
      prefixMeaning: '向內 (in-)',
      rootCoreAction: '呼吸 (spir < spirare)',
      suffixGrammar: '及物/不及物動詞',
      modernMeaning: '像是把一口氣吹進某人心裡一樣，賦予對方靈感、勇氣或動力',
      formulaDisplay: '{ 向內 (in-) } + { 呼吸 (spir) } = 激勵、啟發 (inspire)',
      literalLogic: '古人相信靈感和情緒是被神明「吹進」人的體內，字面上是「把氣息吸/吹進去」，引申為「賦予靈感、啟發」。'
    },
    familyTree: [
      { word: 'inspiration', formula: 'inspire + -ation', meaning: '靈感、啟發（名詞）', level: 'TOEIC', tags: ['TOEIC'] },
      { word: 'expire', formula: 'ex- (向外) + spire (呼吸)', meaning: '到期、斷氣、失效', level: 'TOEIC', tags: ['TOEIC'] },
      { word: 'respire', formula: 're- (一再) + spire (呼吸)', meaning: '呼吸', level: 'TOEFL', tags: ['TOEFL'] },
      { word: 'aspire', formula: 'ad- ➔ a- (朝向) + spire (呼吸)', meaning: '渴望、立志（朝著目標呼吸/嚮往）', level: 'TOEFL', tags: ['TOEFL', 'GRE'] },
      { word: 'conspire', formula: 'con- (共同) + spire (呼吸)', meaning: '密謀、共謀（一起同一口氣密商）', level: 'GRE', tags: ['GRE'] }
    ],
    memory: {
      cognatesDaily: 'inspire someone to do something (激勵某人做某事), a great source of inspiration (很棒的靈感來源), inspiring story (激勵人心的故事)',
      oneSentenceMnemonic: 'in (向內) + spire (呼吸) ➔ 「把一口氣吹進某人心裡」就是 inspire (激勵、啟發)！',
      etymologicalOrigin: '拉丁文 inspirare（in- 向內 + spirare 呼吸），原本帶有「神靈將智慧或情感吹入人心」的宗教意涵',
      visualImagery: '想像一陣清新的風輕輕吹進你的胸口，讓你突然充滿動力和靈感，這種「氣息吹入」的畫面就是 inspire 的由來。',
      commonCollocations: [
        'inspire confidence/hope (激發信心/希望)',
        'be inspired by (受到...的啟發)',
        'inspire someone to do sth (激勵某人做某事)'
      ],
      contrastiveTips: 'inspire 強調「激發內在的靈感、動力」；motivate 強調「提供外在誘因，驅使行動」（如獎金）；encourage 則是「鼓勵、打氣」，語氣較平實，三者常見但語感略有差異。'
    },
    source: 'preset'
  };
