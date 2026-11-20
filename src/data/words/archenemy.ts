import { WordAnalysis } from '../../types';

export const archenemy: WordAnalysis = {
    word: 'archenemy',
    ipa: '/ˌɑːrtʃˈen.ə.mi/',
    partOfSpeech: 'noun (可數名詞)',
    chineseMeaning: '頭號敵人、宿敵、大敵',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 極致前綴',
        morpheme: 'arch-',
        originalForm: 'arkhi- / arkhos (古希臘語)',
        variantNote: '來自古希臘文 arkhein「掌權、居首」。這個字首除了表示「首席、最高」，也常帶有「最厲害、程度最深」的意味，尤其常用在負面的字上，例如 archenemy、archvillain。',
        meaning: '首要的、最...的 (chief, principal, extreme degree)',
        category: '程度/層級',
        grammaticalRole: '強調前綴'
      },
      {
        type: 'root',
        label: '💎 核心字根',
        morpheme: 'enemy',
        originalForm: 'inimicus (拉丁語)',
        variantNote: '來自拉丁文 inimicus（in-「不是」+ amicus「朋友」），意思是「不是朋友的人」，經古法文 enemi 進入英文。',
        meaning: '敵人 (foe, hostile person)',
        category: '核心概念',
        grammaticalRole: '名詞主體'
      }
    ],
    phonetic: {
      assimilationPath: 'arkhi- (首要) + enemy (敵人) ➔ archenemy',
      phoneticAnalysis: 'arch- 在這個字裡唸成 /ɑːrtʃ/，這是它「英語化」後的唸法，出現在 archbishop、archduke 這類日常詞裡；而在 architect、archetype 這種比較學術、直接借用希臘拼法的詞裡，arch- 則唸成 /ɑːrk/。',
      ruleKey: 'arch- 雙重讀音 (原生化詞唸 /ɑːrtʃ/)'
    },
    semantic: {
      prefixMeaning: '首要、之最 (arch- < arkhi-)',
      rootCoreAction: '敵人 (enemy < inimicus)',
      suffixGrammar: '複合名詞',
      modernMeaning: '在所有敵人中最主要、最難纏、最具代表性的那一個對手',
      formulaDisplay: '{ 首要/最...的 (arch-) } + { 敵人 (enemy) } = 頭號敵人、宿敵 (archenemy)',
      literalLogic: '字面上就是「敵人裡的老大」。這個字最早常用來稱呼「the archenemy」（頭號惡魔、撒旦），後來才泛指任何人的頭號對手。'
    },
    familyTree: [
      { word: 'archangel', formula: 'arch- (首要) + angel (信使/天使)', meaning: '大天使', level: 'TOEIC', tags: ['TOEIC'] },
      { word: 'archrival', formula: 'arch- (首要) + rival (對手)', meaning: '頭號競爭對手', level: 'TOEFL', tags: ['TOEFL'] },
      { word: 'monarchy', formula: 'mon- (單一) + arch (統治) + -y', meaning: '君主制', level: 'TOEFL', tags: ['TOEFL', 'IELTS'] },
      { word: 'anarchy', formula: 'an- (無) + arch (統治) + -y', meaning: '無政府狀態、混亂', level: 'GRE', tags: ['GRE', 'TOEFL'] },
      { word: 'hierarchy', formula: 'hier- (神聖) + arch (統治) + -y', meaning: '階層制度、位階', level: 'TOEFL', tags: ['TOEFL', 'IELTS'] }
    ],
    memory: {
      cognatesDaily: 'architect (建築師), archive (檔案室), monarchy (君主制), hierarchy (階層制度)',
      oneSentenceMnemonic: 'arch (首要/最...) + enemy (敵人) ➔ 「敵人裡的頭號人物」就是 archenemy（頭號敵人）！',
      etymologicalOrigin: '源自古希臘文 arkhein（掌權、居首）。中世紀英文常用「the archenemy」專指撒旦，後來才泛化指任何人的頭號敵人。',
      visualImagery: '想像超級英雄漫畫裡，主角身邊圍繞著一群小嘍囉，但站在最前面、氣場最強的那一個，就是他的 archenemy。',
      commonCollocations: ["sb.'s archenemy (某人的頭號敵人)", 'become archenemies (成為死對頭)'],
      contrastiveTips: 'archenemy 語氣比 enemy 強烈許多，通常指「長期、命中注定」的頭號對手（像超級英雄跟反派）；rival 單純指「競爭對手」，不一定帶敵意。'
    },
    source: 'preset'
  };
