import { WordAnalysis } from '../../types';

export const elucidate: WordAnalysis = {
    word: 'elucidate',
    ipa: '/ɪˈluː.sə.deɪt/',
    partOfSpeech: 'verb (及物/不及物動詞)',
    chineseMeaning: '闡明、詳細解釋、使清晰明瞭',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 前綴',
        morpheme: 'e-',
        originalForm: 'ex-',
        variantNote: 'ex- 遇到 l 開頭的字，會把後面的音丟掉，變成 e-。',
        meaning: '徹底、引出、朝向外界 (out, thoroughly)',
        category: '空間/強化',
        grammaticalRole: '動詞強化前綴'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'luc',
        originalForm: 'lux / lūcēre',
        variantNote: '來自很久很久以前的語言裡意思是「發光」的字 *leuk-。',
        meaning: '光、照亮、清晰 (light, shine, clear)',
        category: '核心概念',
        grammaticalRole: '核心語義'
      },
      {
        type: 'suffix',
        label: '🏷️ 形容詞中綴',
        morpheme: '-id',
        originalForm: '-idus',
        variantNote: '這個字尾放在字根後面，會把它變成形容詞，表示「呈現這種狀態的」',
        meaning: '呈現...狀態的 (state of)',
        category: '狀態中綴',
        grammaticalRole: '狀態標記'
      },
      {
        type: 'suffix',
        label: '🏷️ 動詞字尾',
        morpheme: '-ate',
        originalForm: '-āre',
        variantNote: '這個字尾放在字根後面，會把它變成動詞，意思是「讓它變成...、去做這件事」',
        meaning: '使成為、致使 (to cause to be)',
        category: '動詞化',
        grammaticalRole: '及物動詞後綴'
      }
    ],
    phonetic: {
      assimilationPath: 'ex- ➔ e- (在 l 前脫落) + luc (光) + -id + -ate ➔ elucidate',
      phoneticAnalysis: 'ex- 遇到 l 開頭的字，會把中間的音丟掉，變身成 e-（像 elect、eliminate、elongate、elucidate 都是這樣）。很久很久以前的語言裡有一個字 *leuk-，意思是「發光」，後來在古拉丁文變成 lux (光)，在古希臘文變成 leukos (白色，像白血球 leukemia 這個字也是從這裡來的)。',
      ruleKey: 'ex- 前綴弱化為 e-'
    },
    semantic: {
      prefixMeaning: '徹底照向外界 (e- / ex-)',
      rootCoreAction: '光明照亮 (luc)',
      suffixGrammar: '使之成為 (-ate)',
      modernMeaning: '將原本晦澀昏暗的理論或問題，透過光線般清晰的論述闡述透徹',
      formulaDisplay: '{ 徹底/引出 (e-) } + { 光明/照亮 (luc) } + { 使之 (-ate) } = 闡明、解釋 (elucidate)',
      literalLogic: '古拉丁文原本的意思是「把光線引出來，照進黑暗的地方」，後來變成用清楚的話，把難懂的問題講得一清二楚。'
    },
    familyTree: [
      { word: 'lucid', formula: 'luc + -id', meaning: '清晰的、頭腦清醒的、易懂的' },
      { word: 'pellucid', formula: 'per- ➔ pel- (徹底) + luc + -id', meaning: '清澈透明的、極其明晰的' },
      { word: 'luminary', formula: 'lumin (光) + -ary', meaning: '傑出人物、名宿、發光體' },
      { word: 'translucent', formula: 'trans- (穿過) + luc + -ent', meaning: '半透明的 (光能穿過的)' },
      { word: 'illuminate', formula: 'il- (使) + lumin (光，luc 之同源變體) + -ate', meaning: '照亮、闡明；使容光煥發' }
    ],
    memory: {
      cognatesDaily: 'lucid (清晰的), luxury (奢華/閃耀), illuminate (照亮), light (光)',
      oneSentenceMnemonic: 'e (引出) + luc (光) + ate (做) ➔ 「把光線照亮黑暗」就是 elucidate (闡明/解釋透徹)！',
      etymologicalOrigin: '古拉丁文 ēlūcidāre（ē- 表示「出」加上 lūcidus「明亮」）',
      visualImagery: '想像在一間黑漆漆的教室裡，老師突然打開一盞超亮的聚光燈（luc），所有複雜的公式立刻變得一清二楚。',
      commonCollocations: [
        'elucidate the complex theory (闡明複雜的理論)',
        'further research is needed to elucidate this mechanism (需要進一步研究來闡明此機制)'
      ],
      contrastiveTips: 'elucidate 比 explain 聽起來更正式、更深入，專門用在「把原本模糊不清的事情講清楚」。'
    },
    source: 'preset'
  };
