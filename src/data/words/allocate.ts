import { WordAnalysis } from '../../types';

export const allocate: WordAnalysis = {
    word: 'allocate',
    ipa: '/ˈæl.ə.keɪt/',
    partOfSpeech: 'verb (及物動詞)',
    chineseMeaning: '撥出、分配、配置（資金、時間、空間等資源）',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 前綴',
        morpheme: 'al-',
        originalForm: 'ad-',
        variantNote: 'ad- 遇到 l 這個音，會變身成 al-',
        meaning: '朝向、加強、指向 (to, toward, intensive)',
        category: '空間/指向',
        grammaticalRole: '動詞方向修飾'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'loc',
        originalForm: 'locus / locāre',
        variantNote: '古拉丁文的 locus（地方）變成 locāre（放置）',
        meaning: '地方、場所、定位 (place, spot, locate)',
        category: '核心概念',
        grammaticalRole: '動作概念中心'
      },
      {
        type: 'suffix',
        label: '🏷️ 字尾',
        morpheme: '-ate',
        originalForm: '-ātus (拉丁過去分詞後綴)',
        variantNote: '這個字尾會把字變成動詞',
        meaning: '使成為、做、執行 (to make, to cause)',
        category: '致使動詞',
        grammaticalRole: '構成及物動詞'
      }
    ],
    phonetic: {
      assimilationPath: 'ad- + loc- + -ate ➔ [d] 遭遇 [l] 舌尖邊音同化為 al- ➔ allocate',
      phoneticAnalysis: '古拉丁文開頭 ad-（朝向）遇到 l 開頭的字根 locus，會偷偷把 d 換成 l，唸起來才會更順，所以中間會出現兩個 l（ll）。',
      ruleKey: 'ad- 同化規則'
    },
    semantic: {
      prefixMeaning: '朝向 / 指向 (ad- ➔ al-)',
      rootCoreAction: '場所 / 位置 (loc)',
      suffixGrammar: '執行使動 (-ate)',
      modernMeaning: '在預算、資源或任務中，將特定份額指定給特定目標/場所',
      formulaDisplay: '{ 往/指向 (ad- ➔ al-) } + { 場所/定位 (loc) } + { 致使動詞 (-ate) } = 分配、撥給 (allocate)',
      literalLogic: '古羅馬人原本的意思是「把某個東西放到它該去的位置」，後來變成現代講的「分配資源、撥預算」。'
    },
    familyTree: [
      { word: 'dislocate', formula: 'dis- (分離/相反) + loc + -ate', meaning: '使脫臼、擾亂秩序、使離開原位' },
      { word: 'relocate', formula: 're- (再次/重新) + loc + -ate', meaning: '重新安置、遷移 (公司/住處)' },
      { word: 'collocate', formula: 'con- ➔ col- (共同) + loc + -ate', meaning: '(詞彙) 搭配使用、並置' },
      { word: 'location', formula: 'loc + -ation (名詞)', meaning: '位置、地點、外景拍攝地' },
      { word: 'local', formula: 'loc + -al (形容詞)', meaning: '當地的、局部的、本地人' }
    ],
    memory: {
      cognatesDaily: 'local (當地的), location (位置), locate (找到位置), locus (幾何軌跡/基因位點)',
      oneSentenceMnemonic: 'al (朝向) + loc (位置) + ate (動詞) ➔ 把資源送至指定「location」，就是「撥款分配 (allocate)」！',
      etymologicalOrigin: '古拉丁文 adlocāre (ad- 「朝向」 + locāre 「放置」)',
      visualImagery: '想像專案經理在作戰地圖上，拿著代表預算與人力的旗子，精準地把資源插到各個部門專屬的位置 (loc) 上。',
      commonCollocations: [
        'allocate funds / budget (撥款 / 分配預算)',
        'allocate resources to projects (將資源配置至專案)',
        'allocate time evenly (平均分配時間)'
      ],
      contrastiveTips: 'allocate 是「特別指定要給誰、要做什麼用」；distribute 是「發給很多人、廣泛地分出去」。'
    },
    source: 'preset'
  };
