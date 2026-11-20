import { WordAnalysis } from '../../types';

export const atypical: WordAnalysis = {
  "word": "atypical",
  "ipa": "/eɪˈtɪpɪkl/",
  "partOfSpeech": "adj. (形容詞)",
  "chineseMeaning": "非典型的、不尋常的、異常的",
  "morphemes": [
    {
      "type": "prefix",
      "label": "🚩 希臘前綴",
      "morpheme": "a-",
      "originalForm": "a- (希臘語 ἀ-)",
      "variantNote": "希臘否定前綴：遇子音用 a-，遇母音用 an-",
      "meaning": "非、無、不 (not, without)",
      "category": "否定/缺乏",
      "grammaticalRole": "否定前綴"
    },
    {
      "type": "root",
      "label": "💎 希臘字根",
      "morpheme": "typ",
      "originalForm": "typos (希臘語 τύπος)",
      "meaning": "型態、印記、代表 (type, model)",
      "category": "核心概念",
      "grammaticalRole": "名詞詞根"
    },
    {
      "type": "suffix",
      "label": "🏷️ 形容詞字尾",
      "morpheme": "-ical",
      "originalForm": "-ikos + -alis",
      "meaning": "具有...特徵的 (adjective formative)",
      "category": "詞性標記",
      "grammaticalRole": "形容詞後綴"
    }
  ],
  "phonetic": {
    "assimilationPath": "a- (非) + typical (典型的) ➔ atypical",
    "phoneticAnalysis": "希臘否定前綴 a- 在輔音 /t/ 前維持 a-，讀作長音 /eɪ/ (如 atypical, amoral, asymmetry)。",
    "ruleKey": "希臘否定前綴 a-"
  },
  "semantic": {
    "prefixMeaning": "不是、非 (a-)",
    "rootCoreAction": "典型模範 (typical < typos)",
    "suffixGrammar": "形容詞",
    "modernMeaning": "不符合標準常規或典型範例的特例，即非典型的",
    "formulaDisplay": "{ 非/不 (a-) } + { 典型的 (typical) } = 非典型的 (atypical)",
    "literalLogic": "字面上是「不屬於常規類型的」，常用於醫學症狀或統計異常值。"
  },
  "familyTree": [
    {
      "word": "typical",
      "formula": "type + -ical",
      "meaning": "典型的、代表性的 (反義詞)",
      "level": "Core",
      "tags": [
        "TOEIC"
      ]
    },
    {
      "word": "prototype",
      "formula": "proto- (第一) + type",
      "meaning": "原型、樣品",
      "level": "TOEIC",
      "tags": [
        "TOEIC"
      ]
    },
    {
      "word": "archetype",
      "formula": "arch- (首要) + type",
      "meaning": "典型、原始模範",
      "level": "GRE",
      "tags": [
        "GRE"
      ]
    }
  ],
  "memory": {
    "cognatesDaily": "atypical symptoms (非典型症狀), atypical behavior (異常行為), atypical pneumonia (非典型肺炎/SARS)",
    "oneSentenceMnemonic": "a (不) + typical (典型) ➔ 「不屬於常見典型」就是 atypical (非典型的)！",
    "etymologicalOrigin": "19世紀英語構詞 (希臘語 a- \"無\" + typical)",
    "visualImagery": "想像一整窩小白兔中突然誕生了一隻長著藍色斑點的小兔子，顯得格外非典型（a- + typical）。",
    "commonCollocations": [
      "atypical case / example (非典型案例/範例)",
      "atypical response / reaction (不尋常的反應)",
      "highly atypical (非常不典型)"
    ],
    "contrastiveTips": "atypical 是客觀中立的「不符合典型模式」；abnormal 帶有「偏離健康或正軌的異常」含義。"
  },
  "source": "preset"
};
