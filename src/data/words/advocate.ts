import { WordAnalysis } from '../../types';

export const advocate: WordAnalysis = {
  "word": "advocate",
  "ipa": "/ˈædvəkeɪt/",
  "partOfSpeech": "verb 提倡、主張 (/ˈædvəkeɪt/) / noun 擁護者、倡導者 (/ˈædvəkət/)",
  "chineseMeaning": "提倡、主張、擁護；提倡者、倡導者、辯護律師",
  "morphemes": [
    {
      "type": "prefix",
      "label": "🚩 前綴",
      "morpheme": "ad-",
      "originalForm": "ad- (拉丁語)",
      "meaning": "朝向、去 (to, toward)",
      "category": "方向/朝向",
      "grammaticalRole": "方向前綴"
    },
    {
      "type": "root",
      "label": "💎 核心字根",
      "morpheme": "voc",
      "originalForm": "vocāre / vocātus (拉丁語)",
      "meaning": "呼喊、召喚、說話 (to call, voice)",
      "category": "聲音/呼喊",
      "grammaticalRole": "動詞詞根"
    },
    {
      "type": "suffix",
      "label": "🏷️ 動詞/名詞字尾",
      "morpheme": "-ate",
      "originalForm": "-ātus (拉丁語)",
      "meaning": "使成為... (to act, person)",
      "category": "詞性標記",
      "grammaticalRole": "後綴"
    }
  ],
  "phonetic": {
    "assimilationPath": "ad- (去) + vocāre (呼喚) + -ātus ➔ 拉丁語 advocātus (被召來替人辯護者) ➔ advocate",
    "phoneticAnalysis": "動詞讀作 /ˈædvəkeɪt/，名詞讀作 /ˈædvəkət/。名詞 advocacy。",
    "ruleKey": "去為某人呼籲發聲 ad- + vocare"
  },
  "semantic": {
    "prefixMeaning": "挺身站出來 (ad-)",
    "rootCoreAction": "高聲呼喊發聲 (voc < vocare)",
    "suffixGrammar": "及物動詞 / 人物名詞",
    "modernMeaning": "在公共論壇上公開支持並提倡環保、平權等政策；或法庭上為當事人維權辯護的律師",
    "formulaDisplay": "{ 去朝向 (ad-) } + { 呼喚發聲 (voc) } + { 行動 (-ate) } = 提倡、倡導者、代言人 (advocate)",
    "literalLogic": "古羅馬法庭上「被召喚前來為被告發聲辯護的律師」，現代指各類公益政策倡導者。"
  },
  "familyTree": [
    {
      "word": "advocacy",
      "formula": "advocate + -cy",
      "meaning": "倡導、擁護、辯護 (名詞，如 advocacy group 倡議團體)",
      "level": "TOEIC",
      "tags": [
        "TOEIC",
        "TOEFL"
      ]
    },
    {
      "word": "Devil's advocate",
      "formula": "idiom",
      "meaning": "故意持反對意見以激發辯論的人",
      "level": "TOEIC",
      "tags": [
        "TOEIC",
        "TOEFL"
      ]
    },
    {
      "word": "provoke",
      "formula": "pro- (向前) + voc (喊)",
      "meaning": "挑釁、激怒 (在面前挑釁大喊)",
      "level": "Core",
      "tags": [
        "TOEIC"
      ]
    }
  ],
  "memory": {
    "cognatesDaily": "advocate for human rights (倡導人權), environmental advocate (環保倡導者), play Devil’s advocate (扮演反方辯友)",
    "oneSentenceMnemonic": "ad (去) + voc (發聲呼喊) + ate ➔ 「站出來為弱勢族群大聲發聲呼籲」就是 advocate (提倡、擁護者)！",
    "etymologicalOrigin": "拉丁語 advocatus (ad- \"去\" + vocare \"召喚/發聲\")",
    "visualImagery": "想像環保領袖在聯合國氣候大會講台上，激情澎湃地呼籲各國領袖減少碳排放（advocating for green energy）。",
    "commonCollocations": [
      "strongly advocate a ban on... (強烈主張全面禁止...)",
      "a staunch advocate of free trade (自由貿易的堅定擁護者)",
      "patient advocate (病患權益維護代表)"
    ],
    "contrastiveTips": "動詞音 /-keɪt/ (提倡主張) $leftrightarrow$ 名詞音 /-kət/ (倡導者/代言人)。advocate 直接接名詞/V-ing (不接 that 子句)。"
  },
  "source": "preset"
};
