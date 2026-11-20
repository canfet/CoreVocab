import { WordAnalysis } from '../../types';

export const benevolent: WordAnalysis = {
    word: 'benevolent',
    ipa: '/bəˈnevələnt/',
    partOfSpeech: 'adjective (形容詞)',
    chineseMeaning: '仁慈的、樂善好施的、善意的',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 性質前綴',
        morpheme: 'bene-',
        originalForm: 'bene (拉丁語)',
        variantNote: 'bene- 是拉丁文副詞 bene「好、良好地」直接當前綴使用，拼法固定，不會因後面接的字母而改變',
        meaning: '良好、善意地 (well, good)',
        category: '性質/評價',
        grammaticalRole: '性質前綴'
      },
      {
        type: 'root',
        label: '💎 核心字根',
        morpheme: 'vol',
        originalForm: 'velle / volens (拉丁語)',
        variantNote: 'vol- 來自拉丁動詞 velle「想要」的現在分詞 volens「正想要的」，vol- 這個詞根在英文裡常表示「意願」',
        meaning: '想要、意願 (to wish, to want)',
        category: '心理動作',
        grammaticalRole: '動作中心'
      },
      {
        type: 'suffix',
        label: '🏷️ 形容詞字尾',
        morpheme: '-ent',
        originalForm: '-ens/-entem (拉丁語現在分詞字尾)',
        variantNote: '拉丁文現在分詞字尾，加在動詞字根後面表示「正在...的」性質，變成形容詞',
        meaning: '...的 (正在...的性質)',
        category: '形容詞化',
        grammaticalRole: '形容詞字尾'
      }
    ],
    phonetic: {
      assimilationPath: 'bene (良好) + volens (想要的) ➔ 拉丁文 benevolens/benevolentem ➔ 英文 benevolent',
      phoneticAnalysis: 'bene- 是不會變形的透明前綴，母音弱化唸成輕聲 /bə-/。重音落在字根 vol 前面的音節 be-NEV-o-lent，字尾 -ent 因為不重讀，母音弱化成模糊的 /ənt/。',
      ruleKey: '透明前綴拼接 + 非重讀字尾母音弱化'
    },
    semantic: {
      prefixMeaning: '良好地 (bene-)',
      rootCoreAction: '意願、想要 (vol < velle)',
      suffixGrammar: '形容詞化 (-ent，正...的)',
      modernMeaning: '內心懷著善意、樂於幫助他人的性格或態度',
      formulaDisplay: '{ 良好 (bene-) } + { 意願 (vol) } + { ...的 (-ent) } = 仁慈的、樂善好施的 (benevolent)',
      literalLogic: '字面上是「懷著良好意願的」，也就是「一心想對別人好」，引申為仁慈、慷慨、樂善好施。'
    },
    familyTree: [
      { word: 'benevolence', formula: 'benevolent + -ence (名詞)', meaning: '仁慈、善意 (名詞)' },
      { word: 'malevolent', formula: 'male- (惡意) + vol + -ent', meaning: '心懷惡意的 (與 benevolent 相反)' },
      { word: 'volunteer', formula: 'volunt(voluntarius) + -eer', meaning: '志願者、自願做 (出於自己的意願)' },
      { word: 'voluntary', formula: 'volunt + -ary', meaning: '自願的、志願性的' },
      { word: 'benefactor', formula: 'bene- (良善) + fact (做) + -or', meaning: '施惠者、贊助人 (另一個 bene- 字，字根不同)' }
    ],
    memory: {
      cognatesDaily: 'a benevolent smile (慈祥的微笑), a benevolent society (慈善機構), benevolent dictator (仁慈的獨裁者)',
      oneSentenceMnemonic: 'bene (良好) + vol (想要) + ent (...的) ➔ 「一心只想對你好」就是 benevolent (仁慈的)！',
      etymologicalOrigin: '拉丁文 benevolens (bene- 「良好地」 + volens 「想要的」，velle 的現在分詞)',
      visualImagery: '想像一位老爺爺總是笑咪咪地想著要怎麼幫助鄰居，他心裡「良好的意願 (bene+vol)」寫在臉上。',
      commonCollocations: [
        'benevolent smile/gesture (慈祥的微笑/善意的舉動)',
        'benevolent organization (慈善組織)'
      ],
      contrastiveTips: 'benevolent 用拉丁字首 bene- 表示「善意」，意思幾乎等同於希臘字首 eu- 開頭的字（例如同一課的 eulogy 用 eu- 表示「良好」）；兩者字首意思一樣，只是一個來自拉丁文，一個來自希臘文。'
    },
    source: 'preset'
  };
