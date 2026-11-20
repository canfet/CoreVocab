import { WordAnalysis } from '../../types';

export const indigenous: WordAnalysis = {
    word: 'indigenous',
    ipa: '/ɪnˈdɪdʒ.ə.nəs/',
    partOfSpeech: 'adj (形容詞)',
    chineseMeaning: '土生土長的、本土的、當地的、原產的',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 前綴',
        morpheme: 'indi-',
        originalForm: 'indu- / endo-',
        meaning: '在內部、居於其內 (within, in)',
        category: '內部空間',
        grammaticalRole: '方位前綴'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'gen',
        originalForm: 'gignere / genus',
        meaning: '出生、產生、種族 (to be born, produce)',
        category: '核心概念',
        grammaticalRole: '核心語義'
      },
      {
        type: 'suffix',
        label: '🏷️ 後綴',
        morpheme: '-ous',
        originalForm: '-ōsus',
        variantNote: '這個字尾放在字根後面，會把它變成形容詞，表示「有這種性質的」',
        meaning: '具...性質的 (having quality of)',
        category: '形容詞化',
        grammaticalRole: '形容詞後綴'
      }
    ],
    phonetic: {
      assimilationPath: 'indu- (內部) + gen (出生) + -ous ➔ indigenous',
      phoneticAnalysis: '古拉丁文的字首 indu-（跟古希臘文的 endo- 是同一個老祖先字變出來的）加上很久很久以前的語言裡意思是「出生、起源」的字 *gene-，組合出很多跟「起源」有關的英文字。',
      ruleKey: 'gen / gener 出生起源根'
    },
    semantic: {
      prefixMeaning: '土地內部 (indi-)',
      rootCoreAction: '繁衍誕生 (gen)',
      suffixGrammar: '形容詞性質 (-ous)',
      modernMeaning: '在特定地理區域或生態系中原生繁衍，而非外來引進',
      formulaDisplay: '{ 內部 (indi-) } + { 誕生 (gen) } + { 的 (-ous) } = 本土原生的 (indigenous)',
      literalLogic: '意思就是「在這塊土地上面出生的」。'
    },
    familyTree: [
      { word: 'generate', formula: 'gen + -er + -ate', meaning: '產生、發電、引起' },
      { word: 'genus', formula: 'genus', meaning: '【生物】屬、種屬、類' },
      { word: 'heterogeneous', formula: 'hetero- (異) + gen + -eous', meaning: '異質的、混雜的多種成分' },
      { word: 'homogeneous', formula: 'homo- (同) + gen + -eous', meaning: '同質的、均勻純一的' }
    ],
    memory: {
      cognatesDaily: 'generation (世代), genuine (真正的/純種的), genius (天才 - 天生之才)',
      oneSentenceMnemonic: 'indi (內部) + gen (出生) + ous (的) ➔ 「在本土內部出生」就是 indigenous (原產/土生土長的)！',
      etymologicalOrigin: '古拉丁文 indigenus（indu 表示「在裡面」加上 gen 表示「出生」）',
      commonCollocations: [
        'indigenous species / plants (本土物種/原生植物)',
        'indigenous culture / people (原住民文化/原住民族)'
      ]
    },
    source: 'preset'
  };
