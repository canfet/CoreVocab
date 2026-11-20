import { WordAnalysis } from '../../types';

export const asymmetrical: WordAnalysis = {
  "word": "asymmetrical",
  "ipa": "/ˌeɪsɪˈmetrɪkl/",
  "partOfSpeech": "adj. (形容詞)",
  "chineseMeaning": "不對稱的、不均勻的",
  "morphemes": [
    {
      "type": "prefix",
      "label": "🚩 希臘前綴",
      "morpheme": "a-",
      "originalForm": "a- (希臘語)",
      "meaning": "不、非 (not, without)",
      "category": "否定/缺乏",
      "grammaticalRole": "否定前綴"
    },
    {
      "type": "prefix",
      "label": "🚩 希臘同化前綴",
      "morpheme": "sym-",
      "originalForm": "syn- (希臘語)",
      "meaning": "共同、相同 (together, same)",
      "category": "關係/相同",
      "grammaticalRole": "協同前綴"
    },
    {
      "type": "root",
      "label": "💎 希臘字根",
      "morpheme": "metr",
      "originalForm": "metron (希臘語)",
      "meaning": "度量、尺度 (measure)",
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
    "assimilationPath": "a- (不) + syn- ➔ sym- (同) + metron (度量) + -ical ➔ asymmetrical",
    "phoneticAnalysis": "否定字首 a- 加上 symmetric。發音時首音節為 /ˌeɪ/。",
    "ruleKey": "希臘否定前綴 a-"
  },
  "semantic": {
    "prefixMeaning": "缺乏、不 (a-)",
    "rootCoreAction": "度量相同對稱 (symmetrical < syn + metron)",
    "suffixGrammar": "形容詞",
    "modernMeaning": "兩側在形狀、大小或排列上度量不均等、缺乏中心對稱",
    "formulaDisplay": "{ 不 (a-) } + { 共同 (sym-) } + { 度量 (metr) } + { 的 (-ical) } = 不對稱的 (asymmetrical)",
    "literalLogic": "字面上是「兩邊度量不相等的」，常用於設計美學或軍事「不對稱作戰」。"
  },
  "familyTree": [
    {
      "word": "asymmetry",
      "formula": "a- + symmetry",
      "meaning": "不對稱性 (名詞)",
      "level": "TOEFL",
      "tags": [
        "TOEFL"
      ]
    },
    {
      "word": "symmetrical",
      "formula": "sym- + metr + -ical",
      "meaning": "對稱的 (反義詞)",
      "level": "Core",
      "tags": [
        "TOEIC"
      ]
    },
    {
      "word": "symmetry",
      "formula": "sym- + metr + -y",
      "meaning": "對稱性",
      "level": "TOEIC",
      "tags": [
        "TOEIC"
      ]
    }
  ],
  "memory": {
    "cognatesDaily": "asymmetrical warfare (不對稱作戰), asymmetrical design (不對稱設計), asymmetrical haircut (不對稱髮型)",
    "oneSentenceMnemonic": "a (不) + symmetry (對稱) + cal ➔ 「兩邊長得不對稱」就是 asymmetrical (不對稱的)！",
    "etymologicalOrigin": "希臘語 asymmetros (a- \"無\" + syn \"同\" + metron \"度量\")",
    "visualImagery": "想像一件前衛的時尚晚禮服，左肩有高聳的荷葉邊，右肩卻完全露肩，展現極具張力的不對稱美感（a- + sym- + metr-）。",
    "commonCollocations": [
      "asymmetrical shape / pattern (不對稱的形狀/圖案)",
      "asymmetrical threat / conflict (不對稱的威脅/衝突)",
      "facial asymmetry (臉部不對稱)"
    ],
    "contrastiveTips": "symmetrical (兩側完全鏡射對稱) $leftrightarrow$ asymmetrical (兩側不對稱、不均勻)。"
  },
  "source": "preset"
};
