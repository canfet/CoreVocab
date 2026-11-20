import { WordAnalysis } from '../../types';

export const autonomy: WordAnalysis = {
  "word": "autonomy",
  "ipa": "/ɔːˈtɑːnəmi/",
  "partOfSpeech": "noun (名詞)",
  "chineseMeaning": "自治、自治權；自主性、個人自主決策權",
  "morphemes": [
    {
      "type": "prefix",
      "label": "🚩 希臘前綴",
      "morpheme": "auto-",
      "originalForm": "autos (希臘語 αὐτός)",
      "meaning": "自己、自我 (self)",
      "category": "自我/獨立",
      "grammaticalRole": "自我前綴"
    },
    {
      "type": "root",
      "label": "💎 希臘字根",
      "morpheme": "nom",
      "originalForm": "nomos (希臘語 νόμος)",
      "meaning": "法律、法則、規律 (law, rule)",
      "category": "法則/規範",
      "grammaticalRole": "名詞詞根"
    },
    {
      "type": "suffix",
      "label": "🏷️ 抽象名詞字尾",
      "morpheme": "-y",
      "originalForm": "-ia (希臘語)",
      "meaning": "狀態、權利 (state, condition)",
      "category": "詞性標記",
      "grammaticalRole": "名詞後綴"
    }
  ],
  "phonetic": {
    "assimilationPath": "autos (自己) + nomos (法律) + -ia ➔ 希臘語 autonomia ➔ autonomy",
    "phoneticAnalysis": "重音在第二音節 /ɔːˈtɑːnəmi/。形容詞 autonomous /ɔːˈtɑːnəməs/ (自治的/自主的)。",
    "ruleKey": "自己給自己定法律 autos + nomos"
  },
  "semantic": {
    "prefixMeaning": "由自己獨立做主 (auto-)",
    "rootCoreAction": "制定並遵循法則 (nom < nomos)",
    "suffixGrammar": "政治/哲學名詞 (-y)",
    "modernMeaning": "某地區擁有的政治高度自治權；或現代職場員工所擁有的獨立自主安排工作的權利 (workplace autonomy)",
    "formulaDisplay": "{ 自己 (auto-) } + { 法律法則 (nom) } + { 狀態 (-y) } = 自治、自主權 (autonomy)",
    "literalLogic": "古希臘城邦「自己給自己立法的獨立狀態」，現代涵蓋政治自治與個人自主。"
  },
  "familyTree": [
    {
      "word": "autonomous",
      "formula": "autonomy + -ous",
      "meaning": "自治的；自駕的 (如 autonomous driving 自動駕駛)",
      "level": "TOEIC",
      "tags": [
        "TOEIC",
        "TOEFL"
      ]
    },
    {
      "word": "autonomous region",
      "formula": "phrase",
      "meaning": "自治區 (行政區劃)",
      "level": "TOEIC",
      "tags": [
        "TOEIC"
      ]
    },
    {
      "word": "astronomy",
      "formula": "astron (星辰) + nomos (法則)",
      "meaning": "天文學 (星辰運行的法則)",
      "level": "Core",
      "tags": [
        "TOEIC"
      ]
    }
  ],
  "memory": {
    "cognatesDaily": "greater autonomy for teachers (給予教師更大的自主權), regional autonomy (區域自治), autonomous vehicle / car (自駕車)",
    "oneSentenceMnemonic": "auto (自己) + nom (立法) + y ➔ 「不受外人干涉、自己給自己做主的獨立權力」就是 autonomy (自治、自主權)！",
    "etymologicalOrigin": "希臘語 autonomia (autos \"自己\" + nomos \"法律\")",
    "visualImagery": "想像自治區議會大廈前懸掛著地方代表旗幟，居民有權自主投票決定地方稅收與教育政策（regional autonomy）。",
    "commonCollocations": [
      "enjoy high degree of autonomy (享有高度自治權)",
      "grant / demand autonomy (賦予/要求自主權)",
      "bodily autonomy (身體自主權)"
    ],
    "contrastiveTips": "autonomy (名詞：自治權/自主性) $\rightarrow$ autonomous (形容詞：自治的/自駕的)。"
  },
  "source": "preset"
};
