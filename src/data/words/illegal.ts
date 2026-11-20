import { WordAnalysis } from '../../types';

export const illegal: WordAnalysis = {
    word: 'illegal',
    ipa: '/ɪˈliː.ɡəl/',
    partOfSpeech: 'adjective (形容詞)',
    chineseMeaning: '違法的、不合法的',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 同化前綴',
        morpheme: 'il-',
        originalForm: 'in- (拉丁語)',
        variantNote: 'in- 遇到 l 這個音，會整個變身成 il- (in- ➔ il-)',
        meaning: '不 (not)',
        category: '否定',
        grammaticalRole: '否定前綴'
      },
      {
        type: 'root',
        label: '💎 核心字根',
        morpheme: 'leg',
        originalForm: 'lex / legis (拉丁語「法律」)',
        meaning: '法律 (law)',
        category: '核心概念',
        grammaticalRole: '核心語義'
      },
      {
        type: 'suffix',
        label: '🏷️ 形容詞字尾',
        morpheme: '-al',
        originalForm: '-ālis (拉丁語)',
        variantNote: '加在名詞字根後面，把它變成形容詞，表示「與...有關的」',
        meaning: '與...有關的 (relating to)',
        category: '形容詞化',
        grammaticalRole: '形容詞後綴'
      }
    ],
    phonetic: {
      assimilationPath: 'in- (不) ➔ 同化為 il- + lex/legis (法律) ➔ legalis (合法的) ➔ illegalis ➔ illegal',
      phoneticAnalysis: 'in- 遇到 l 開頭的字，字尾的 n 會換成 l，唸起來才順口（in- + l... ➔ il-，像 illegal, illegible, illogical 都是這樣）。',
      ruleKey: 'in- ➔ il- 語音同化 (前綴遇 l 全同化)'
    },
    semantic: {
      prefixMeaning: '不 (in- ➔ il-)',
      rootCoreAction: '法律 (leg < lex)',
      suffixGrammar: '與...有關的 (-al)',
      modernMeaning: '與現行法律牴觸、不被法律允許的行為或事物',
      formulaDisplay: '{ 不 (il- < in-) } + { 法律 (leg) } + { 與...有關的 (-al) } = 違法的 (illegal)',
      literalLogic: '字面上是「不合乎法律的」，直接對應現代的「違法的」。'
    },
    familyTree: [
      { word: 'legal', formula: 'leg (法律) + -al', meaning: '合法的、法律上的', level: 'Core', tags: ['TOEIC'] },
      { word: 'legislation', formula: 'leg (法律) + is + -lation', meaning: '立法、法規', level: 'TOEFL', tags: ['TOEFL'] },
      { word: 'legitimate', formula: 'leg (法律) + -itimate', meaning: '合法的、正當的', level: 'GRE', tags: ['GRE', 'TOEFL'] },
      { word: 'privilege', formula: 'privi (私人的) + leg (法律) + -e', meaning: '特權（私人專屬的法律）', level: 'TOEFL', tags: ['TOEFL'] },
      { word: 'loyal', formula: '來自古法文 loial，與 leg/lex 同源', meaning: '忠誠的（原意是「守法的」）', level: 'TOEIC', tags: ['TOEIC'] }
    ],
    memory: {
      cognatesDaily: 'illegal drugs/immigrants (違禁毒品/非法移民), it is illegal to... (...是違法的)',
      oneSentenceMnemonic: 'il (不) + leg (法律) + al (與...有關的) ➔ 「和法律不符」就是 illegal (違法的)！',
      etymologicalOrigin: '拉丁文 illegalis（in- 不 + legalis「合法的」，legalis 又來自 lex「法律」）',
      visualImagery: '想像一個大大的紅色禁止符號蓋在法律條文上，代表這件事「不符合法律」，那就是 illegal 的畫面。',
      commonCollocations: [
        'illegal activity/immigration/parking (非法活動/移民/停車)',
        'declare something illegal (宣告某事違法)'
      ],
      contrastiveTips: 'illegal 是「違反法律」；illegitimate 常用在「不合正統、不被承認」（如私生、非法取得的權力），語意範圍不完全相同；immoral 則是「不道德的」，跟法律無關，三者不要混用。'
    },
    source: 'preset'
  };
