import { WordAnalysis } from '../../types';

export const approximate: WordAnalysis = {
    word: 'approximate',
    ipa: '/əˈprɑːk.sɪ.mət/ (形容詞) | /əˈprɑːk.sɪ.meɪt/ (動詞)',
    partOfSpeech: 'adjective / verb (形容詞/及物動詞)',
    chineseMeaning: '近似的、大約的（形容詞）；使接近、估計、約計（動詞）',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 同化前綴',
        morpheme: 'ap-',
        originalForm: 'ad- (拉丁語)',
        variantNote: 'ad- 遇到 p 這個音，會整個變身成 ap- (ad- ➔ ap-)',
        meaning: '朝向、接近 (to, toward)',
        category: '空間/方向',
        grammaticalRole: '趨向前綴'
      },
      {
        type: 'root',
        label: '💎 核心字根',
        morpheme: 'proxim',
        originalForm: 'proximus (拉丁語，prope「靠近」的最高級)',
        variantNote: 'proximus 原本是「最靠近的」，直接被英文借用當作字根使用',
        meaning: '最接近的 (nearest, next)',
        category: '核心概念',
        grammaticalRole: '核心語義'
      },
      {
        type: 'suffix',
        label: '🏷️ 動詞/形容詞字尾',
        morpheme: '-ate',
        originalForm: '-ātus (拉丁語)',
        variantNote: '這個字尾加在字根後面，可以把字變成動詞（做...動作）或形容詞（...的狀態）',
        meaning: '使...、做...動作 / 具有...性質',
        category: '動詞化/形容詞化',
        grammaticalRole: '動詞化後綴 (兼形容詞)'
      }
    ],
    phonetic: {
      assimilationPath: 'ad- (朝向) ➔ 同化為 ap- + proximus (最近的) ➔ approximate',
      phoneticAnalysis: 'ad- 遇到 p 開頭的字，會把字尾的 d 換成 p，唸起來才順口（ad- + p... ➔ ap-，像 approximate, apply, appoint 都是這樣）。這個字當形容詞時重音在 prox，字尾 -ate 唸輕音；當動詞時字尾 -ate 要唸重一點，這是英文裡「名詞/形容詞輕、動詞重」的常見規律（跟 moderate, separate, duplicate 一樣）。',
      ruleKey: 'ad- ➔ ap- 語音同化 + -ate 動詞/形容詞變音'
    },
    semantic: {
      prefixMeaning: '朝向、往...靠近 (ad- ➔ ap-)',
      rootCoreAction: '最接近的程度 (proxim < proximus)',
      suffixGrammar: '動詞化/形容詞化 (-ate)',
      modernMeaning: '雖然沒有完全到達，但已經非常靠近真實數值、事實或狀態',
      formulaDisplay: '{ 朝向 (ap- < ad-) } + { 最近的 (proxim) } + { 做...動作/...的 (-ate) } = 使接近、大約的 (approximate)',
      literalLogic: '字面上是「朝著最近的地方靠過去」，所以引申為數字或狀態雖然不是完全精確，但已經非常接近真實值。'
    },
    familyTree: [
      { word: 'approximately', formula: 'approximate + -ly (副詞)', meaning: '大約地、近似地', level: 'TOEIC', tags: ['TOEIC'] },
      { word: 'approximation', formula: 'approximate + -ion (名詞)', meaning: '近似值、估計', level: 'TOEFL', tags: ['TOEFL'] },
      { word: 'proximity', formula: 'proxim + -ity (名詞)', meaning: '接近、鄰近', level: 'GRE', tags: ['GRE', 'TOEFL'] },
      { word: 'proximate', formula: 'proxim + -ate (形容詞)', meaning: '最接近的、直接的（原因）', level: 'GRE', tags: ['GRE'] },
      { word: 'approach', formula: 'ap- (< ad-) + prope (靠近，approximate 的同源親戚字)', meaning: '接近、靠近、方法、途徑', level: 'Core', tags: ['TOEIC'] }
    ],
    memory: {
      cognatesDaily: 'approximate value (近似值), approximate cost (大約的費用), approximately 100 people (大約100人)',
      oneSentenceMnemonic: 'ap (朝向) + proxim (最近) + ate (的/做) ➔ 「朝著最靠近的地方接近」就是 approximate (大約的/使接近)！',
      etymologicalOrigin: '拉丁文 approximare（ad- 朝向 + proximare 靠近，而 proximare 又來自 proximus「最近的」）',
      visualImagery: '想像你把飛鏢射向靶心，雖然沒有正中紅心，但已經非常靠近中心點了，那個「很接近但不完全精確」的位置就是 approximate。',
      commonCollocations: [
        'approximate figure/amount (大約的數字/金額)',
        'approximate location (大概的位置)',
        'approximately equal to (大約等於)'
      ],
      contrastiveTips: 'approximate 強調「數字上很接近但不精確」；exact/precise 強調「完全精確」；close 是口語常見的同義字，但比較沒有「數學上估算」的味道。'
    },
    source: 'preset'
  };
