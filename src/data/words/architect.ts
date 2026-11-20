import { WordAnalysis } from '../../types';

export const architect: WordAnalysis = {
  "word": "architect",
  "ipa": "/ˈɑːrkɪtekt/",
  "partOfSpeech": "noun 建築師；策劃者 / verb 規劃設計",
  "chineseMeaning": "建築師；（重大計畫的）締造者、策劃者；設計架構",
  "morphemes": [
    {
      "type": "prefix",
      "label": "🚩 希臘前綴",
      "morpheme": "archi-",
      "originalForm": "arkhi- (希臘語)",
      "meaning": "首席、總、主任 (chief, master)",
      "category": "地位/最高",
      "grammaticalRole": "首席前綴"
    },
    {
      "type": "root",
      "label": "💎 希臘字根",
      "morpheme": "tect",
      "originalForm": "tektōn (希臘語 τέκτων)",
      "meaning": "建造者、工匠 (builder, craftsman, carpenter)",
      "category": "核心動作",
      "grammaticalRole": "名詞詞根"
    }
  ],
  "phonetic": {
    "assimilationPath": "arkhi- (首席) + tektōn (工匠) ➔ 希臘語 arkhitektōn (總工匠) ➔ architect",
    "phoneticAnalysis": "重音在第一音節 /ˈɑːrkɪtekt/。ch 讀作 /k/。名詞 architecture。",
    "ruleKey": "總建造工匠 arkhi- + tekton"
  },
  "semantic": {
    "prefixMeaning": "首席統領 (archi-)",
    "rootCoreAction": "施工建造工匠 (tect < tekton)",
    "suffixGrammar": "職業名詞 / 比喻策劃者",
    "modernMeaning": "負責繪製藍圖並指導整體施工的總建築師；比喻歷史變革或和平協議的幕後策劃締造者",
    "formulaDisplay": "{ 首席/總 (archi-) } + { 建造工匠 (tect) } = 總建築師、計畫締造者 (architect)",
    "literalLogic": "字面上是「工匠的頭領、總建造師」，現代涵蓋建築設計師與軟體架構師 (Software Architect)。"
  },
  "familyTree": [
    {
      "word": "architecture",
      "formula": "architect + -ure",
      "meaning": "建築學、建築風格、架構 (名詞)",
      "level": "Core",
      "tags": [
        "TOEIC"
      ]
    },
    {
      "word": "architectural",
      "formula": "architecture + -al",
      "meaning": "建築上的、建築學的",
      "level": "TOEIC",
      "tags": [
        "TOEIC"
      ]
    },
    {
      "word": "tectonic",
      "formula": "tektōn + -ic",
      "meaning": "構造的、地殼構造的 (如 tectonic plates 板塊)",
      "level": "TOEFL",
      "tags": [
        "TOEFL"
      ]
    }
  ],
  "memory": {
    "cognatesDaily": "software architect (軟體架構師), chief architect (總建築師/主要締造者), architect of the peace agreement (和平協議的締造者)",
    "oneSentenceMnemonic": "archi (總首長) + tect (工匠) ➔ 「統領所有工匠設計藍圖的大師」就是 architect (建築師、策劃者)！",
    "etymologicalOrigin": "希臘語 arkhitekton (arkhi- \"總\" + tekton \"建造工匠\")",
    "visualImagery": "想像建築師站在大圖紙桌前，手持丁字尺繪製摩天大樓結構藍圖，或者軟體架構師在白板上勾勒系統架構圖（archi- + tect）。",
    "commonCollocations": [
      "licensed / renowned architect (註冊/知名建築師)",
      "the architect of modern Singapore (現代新加坡的締造者)",
      "architect a robust database (架構一套穩健的資料庫)"
    ],
    "contrastiveTips": "architect (負責設計與美學結構的建築師) $leftrightarrow$ civil engineer (負責力學與施工實施的土木工程師)。"
  },
  "source": "preset"
};
