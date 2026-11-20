import { WordAnalysis } from '../../types';

export const continent: WordAnalysis = {
    word: 'continent',
    ipa: '/ˈkɑːn.tɪ.nənt/',
    partOfSpeech: 'noun (名詞，大陸); also adjective (較正式/少用，有節制的)',
    chineseMeaning: '大陸、洲；(形容詞，較少用) 有節制的、克制情慾的',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 前綴',
        morpheme: 'con-',
        originalForm: 'con- (拉丁語)',
        meaning: '共同、完全連貫 (together, completely)',
        category: '空間/共同',
        grammaticalRole: '強調前綴'
      },
      {
        type: 'root',
        label: '💎 核心字根',
        morpheme: 'tin',
        originalForm: 'tenēre (拉丁語「握住、保持」)',
        variantNote: 'tenēre（握住）放進複合字中間時，母音會弱化，e 變成 i，寫成 -tin-；這裡是直接從拉丁文現在分詞形式 continens/continentem 借入英文，所以沒有像 contain/attain 那樣經過古法文變成 -tain 的拼法',
        meaning: '握住、連接不斷 (to hold, keep connected)',
        category: '核心動作',
        grammaticalRole: '分詞詞幹'
      },
      {
        type: 'suffix',
        label: '🏷️ 名詞字尾',
        morpheme: '-ent',
        originalForm: '-ens/-entem (拉丁語現在分詞字尾)',
        variantNote: '加在動詞現在分詞幹後面，表示「正在...的狀態」',
        meaning: '...的東西、...的狀態',
        category: '名詞化',
        grammaticalRole: '分詞名詞化後綴'
      }
    ],
    phonetic: {
      assimilationPath: 'con- (一起/完全) + tenere ➔ 現在分詞 continens/continentem (連續握住不放的) ➔ continent',
      phoneticAnalysis: 'con- 在 t 開頭的字前面不需要同化，直接拼接。字根 tenere（握住）放進複合字中間時，母音從 e 弱化成 i，寫成 -tin-；因為是直接從拉丁文的現在分詞形式借入英文，所以沒有經過古法文變成 -tain 的拼法。',
      ruleKey: 'con- 無同化直接拼接 + tenere 母音弱化 (e➔i)'
    },
    semantic: {
      prefixMeaning: '共同、完全連貫 (con-)',
      rootCoreAction: '握住、連接不斷 (tin < tenēre)',
      suffixGrammar: '名詞化 (-ent，正在...的東西/狀態)',
      modernMeaning: '一大片彼此相連、連貫不間斷的陸地',
      formulaDisplay: '{ 完全 (con-) } + { 連接不斷 (tin < tenēre) } + { ...的東西 (-ent) } = 大陸 (continent)',
      literalLogic: '拉丁文原本的講法是 terra continens，字面意思是「連成一片、連貫不斷的土地」，後來這個形容詞被單獨拿來當名詞用，就變成「大陸」。'
    },
    familyTree: [
      { word: 'continental', formula: 'continent + -al', meaning: '大陸的、洲際的', level: 'TOEIC', tags: ['TOEIC'] },
      { word: 'continue', formula: 'con- (完全) + tin (連接) + -ue', meaning: '繼續、持續（不間斷地連下去）', level: 'Core', tags: ['TOEIC'] },
      { word: 'continuous', formula: 'continue + -ous', meaning: '連續不斷的', level: 'TOEIC', tags: ['TOEIC'] },
      { word: 'contain', formula: 'con- (完全) + tain (握住)', meaning: '包含、容納', level: 'Core', tags: ['TOEIC'] },
      { word: 'content', formula: 'con- (完全) + tent (被握住的)', meaning: '內容；滿足的', level: 'Core', tags: ['TOEIC'] }
    ],
    memory: {
      cognatesDaily: 'seven continents (七大洲), the African continent (非洲大陸), continental breakfast (歐陸式早餐)',
      oneSentenceMnemonic: 'con (完全) + tin (連著不放) + ent (...的東西) ➔ 「整片土地完全連在一起」就是 continent (大陸)！',
      etymologicalOrigin: '拉丁文片語 terra continens（「連貫不斷的土地」），continens 是動詞 continere（con- 完全 + tenere 握住）的現在分詞',
      visualImagery: '想像從外太空俯瞰地球，看到一大片陸地完全連在一起、中間沒有被海洋切斷，那一整塊「連貫的土地」就是 continent。',
      commonCollocations: [
        'the Asian continent (亞洲大陸)',
        'across the continent (橫跨整個大陸)',
        'continental climate (大陸性氣候)'
      ],
      contrastiveTips: 'continent 是「大陸」，指地理上一整塊相連的陸地（如亞洲、非洲）；country 是「國家」，是政治上劃分的單位；不要把兩者搞混，一個大陸裡通常包含很多個國家。'
    },
    source: 'preset'
  };
