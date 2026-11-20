import { WordAnalysis } from '../../types';

export const antibody: WordAnalysis = {
  "word": "antibody",
  "ipa": "/ˈæntibɑːdi/",
  "partOfSpeech": "noun (名詞)",
  "chineseMeaning": "抗體（免疫系統產生的防禦蛋白質）",
  "morphemes": [
    {
      "type": "prefix",
      "label": "🚩 希臘前綴",
      "morpheme": "anti-",
      "originalForm": "anti (希臘語 ἀντί)",
      "meaning": "對抗、防禦 (against, opposite)",
      "category": "對抗/相反",
      "grammaticalRole": "對抗前綴"
    },
    {
      "type": "root",
      "label": "💎 核心字根",
      "morpheme": "body",
      "originalForm": "bodig (古英語)",
      "meaning": "身體、物體 (substance, entity)",
      "category": "核心概念",
      "grammaticalRole": "名詞詞根"
    }
  ],
  "phonetic": {
    "assimilationPath": "anti- (對抗) + body (實體) ➔ antibody (仿德語 Antikörper)",
    "phoneticAnalysis": "重音在第一音節 /ˈæntibɑːdi/。德語醫學名詞 Antikörper 的仿造譯詞 (Calque)。",
    "ruleKey": "希臘對抗字首 anti-"
  },
  "semantic": {
    "prefixMeaning": "對抗病原體 (anti-)",
    "rootCoreAction": "免疫蛋白質實體 (body)",
    "suffixGrammar": "醫學生物名詞",
    "modernMeaning": "人體免疫系統針對外來病毒或細菌抗原所產生的防禦性抗體蛋白質",
    "formulaDisplay": "{ 對抗 (anti-) } + { 物質實體 (body) } = 抗體 (antibody)",
    "literalLogic": "字面上是「用來對抗外敵的防禦物質」，專指人體血液中的免疫抗體。"
  },
  "familyTree": [
    {
      "word": "antigen",
      "formula": "anti- + gen (產生)",
      "meaning": "抗原 (誘發抗體產生的物質)",
      "level": "TOEFL",
      "tags": [
        "TOEFL"
      ]
    },
    {
      "word": "antibiotic",
      "formula": "anti- + bio + -ic",
      "meaning": "抗生素",
      "level": "TOEIC",
      "tags": [
        "TOEIC"
      ]
    },
    {
      "word": "antidote",
      "formula": "anti- + dote (給予)",
      "meaning": "解毒劑",
      "level": "TOEFL",
      "tags": [
        "TOEFL",
        "GRE"
      ]
    }
  ],
  "memory": {
    "cognatesDaily": "antibody test (抗體檢測), produce antibodies (產生抗體), neutralizing antibodies (中和抗體)",
    "oneSentenceMnemonic": "anti (對抗) + body (實體) ➔ 「對抗病毒的免疫物質」就是 antibody (抗體)！",
    "etymologicalOrigin": "1901年仿造德語 Antikörper (Paul Ehrlich 所創)",
    "visualImagery": "想像顯微鏡下 Y 字形的抗體如同精銳衛兵，緊緊鎖定並包裹入侵的冠狀病毒（anti- + body）。",
    "commonCollocations": [
      "develop antibodies against COVID-19 (產生對抗新冠病毒的抗體)",
      "antibody levels / response (抗體濃度/反應)",
      "monoclonal antibody (單株抗體)"
    ],
    "contrastiveTips": "antibody (人體防禦抗體) $leftrightarrow$ antigen (誘發免疫反應的病毒抗原)。"
  },
  "source": "preset"
};
