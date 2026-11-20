import { WordAnalysis } from '../../types';

export const anesthesia: WordAnalysis = {
  "word": "anesthesia",
  "ipa": "/ˌænəsˈθiːʒə/",
  "partOfSpeech": "noun (名詞)",
  "chineseMeaning": "麻醉、麻木、感覺喪失",
  "morphemes": [
    {
      "type": "prefix",
      "label": "🚩 希臘前綴",
      "morpheme": "an-",
      "originalForm": "a- ➔ an- (希臘語)",
      "variantNote": "遇母音字母 a- 變體為 an-",
      "meaning": "無、喪失 (without, loss of)",
      "category": "否定/缺乏",
      "grammaticalRole": "否定前綴"
    },
    {
      "type": "root",
      "label": "💎 希臘字根",
      "morpheme": "esthes",
      "originalForm": "aisthēsis (希臘語 αἴσθησις)",
      "meaning": "感覺、知覺 (feeling, sensation)",
      "category": "核心概念",
      "grammaticalRole": "名詞詞根"
    },
    {
      "type": "suffix",
      "label": "🏷️ 醫學名詞字尾",
      "morpheme": "-ia",
      "originalForm": "-ia (希臘語 -ία)",
      "meaning": "疾病、生理狀態 (medical condition)",
      "category": "詞性標記",
      "grammaticalRole": "名詞後綴"
    }
  ],
  "phonetic": {
    "assimilationPath": "an- (無) + aisthēsis (感覺) + -ia ➔ 希臘語 anaisthesia ➔ anesthesia",
    "phoneticAnalysis": "希臘語 aisthēsis (感知，如 aesthetic 美學的) 加上 an-，發音為 /ˌænəsˈθiːʒə/ (英式拼寫常用 anaesthesia)。",
    "ruleKey": "a- 遇母音同化為 an-"
  },
  "semantic": {
    "prefixMeaning": "失去、無 (an-)",
    "rootCoreAction": "身體感覺知覺 (esthes < aisthesis)",
    "suffixGrammar": "醫學名詞 (-ia)",
    "modernMeaning": "透過藥物使神經暫時喪失知覺與痛感，以便進行外科手術",
    "formulaDisplay": "{ 失去 (an-) } + { 感覺 (esthes) } + { 狀態 (-ia) } = 麻醉 (anesthesia)",
    "literalLogic": "字面上是「完全沒有感覺的狀態」，醫學專指手術麻醉。"
  },
  "familyTree": [
    {
      "word": "anesthetic",
      "formula": "an- + esthet + -ic",
      "meaning": "麻醉劑；麻醉的",
      "level": "TOEFL",
      "tags": [
        "TOEFL"
      ]
    },
    {
      "word": "anesthesiologist",
      "formula": "anesthesia + -ologist",
      "meaning": "麻醉科醫師",
      "level": "TOEFL",
      "tags": [
        "TOEFL",
        "GRE"
      ]
    },
    {
      "word": "aesthetic",
      "formula": "aisthēsis + -ic",
      "meaning": "美學的、有美感的 (感覺敏銳)",
      "level": "TOEFL",
      "tags": [
        "TOEFL",
        "GRE"
      ]
    }
  ],
  "memory": {
    "cognatesDaily": "general anesthesia (全身麻醉), local anesthesia (局部麻醉), under anesthesia (處於麻醉狀態中)",
    "oneSentenceMnemonic": "an (無) + esthes (感覺) + ia ➔ 「完全失去痛覺」就是 anesthesia (麻醉)！",
    "etymologicalOrigin": "希臘語 anaisthesia (an- \"無\" + aisthesis \"感覺\")",
    "visualImagery": "想像手術室中麻醉醫師戴上呼吸面罩，病人深呼吸幾口後溫和地進入無痛的沉睡中（an- + esthes-）。",
    "commonCollocations": [
      "under general / local anesthesia (在全身/局部麻醉下)",
      "administer anesthesia (實施麻醉)",
      "recover from anesthesia (從麻醉中甦醒恢復)"
    ],
    "contrastiveTips": "aesthetic (對美有深刻感覺 $\rightarrow$ 美學的) 與 anesthesia (失去所有感覺 $\rightarrow$ 麻醉) 同出一源。"
  },
  "source": "preset"
};
