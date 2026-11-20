import { WordAnalysis } from '../../types';

export const archetype: WordAnalysis = {
  "word": "archetype",
  "ipa": "/ˈɑːrkitaɪp/",
  "partOfSpeech": "noun (名詞)",
  "chineseMeaning": "原型、典型、原始模型（心理學/文學）",
  "morphemes": [
    {
      "type": "prefix",
      "label": "🚩 希臘前綴",
      "morpheme": "arch-",
      "originalForm": "arkhi- (希臘語)",
      "meaning": "原始、最初、首要 (original, primitive, chief)",
      "category": "順序/最初",
      "grammaticalRole": "最初前綴"
    },
    {
      "type": "root",
      "label": "💎 希臘字根",
      "morpheme": "type",
      "originalForm": "typos (希臘語 τύπος)",
      "meaning": "模型、印記、印模 (model, impression, pattern)",
      "category": "核心概念",
      "grammaticalRole": "名詞詞根"
    }
  ],
  "phonetic": {
    "assimilationPath": "arkhi- (原始) + typos (印模) ➔ 希臘語 arkhetypon ➔ archetype",
    "phoneticAnalysis": "重音在第一音節 /ˈɑːrkitaɪp/。形容詞 archetypal /ˌɑːrkɪˈtaɪpl/。",
    "ruleKey": "原始模型 arkhi- + typos"
  },
  "semantic": {
    "prefixMeaning": "最初最原始 (arch-)",
    "rootCoreAction": "印鑄的模型樣板 (type < typos)",
    "suffixGrammar": "哲學/心理學/文學名詞",
    "modernMeaning": "所有後續衍生物所依循的最初原始模版；榮格心理學中人類集體潛意識深處代代相傳的原始意象（如英雄原型、母親原型）",
    "formulaDisplay": "{ 原始 (arch-) } + { 模板印樣 (type) } = 原型、典型代表 (archetype)",
    "literalLogic": "字面上是「最初造出來的模具印樣」，引申為文學或心理學上的經典原型。"
  },
  "familyTree": [
    {
      "word": "archetypal",
      "formula": "archetype + -al",
      "meaning": "典型的、原型的 (如 the archetypal villain)",
      "level": "TOEFL",
      "tags": [
        "TOEFL",
        "GRE"
      ]
    },
    {
      "word": "prototype",
      "formula": "proto- + type",
      "meaning": "原型機、樣機 (工藝工程同義詞)",
      "level": "TOEIC",
      "tags": [
        "TOEIC",
        "TOEFL"
      ]
    },
    {
      "word": "type",
      "formula": "typos (希臘語)",
      "meaning": "類型；打字",
      "level": "Core",
      "tags": [
        "TOEIC"
      ]
    }
  ],
  "memory": {
    "cognatesDaily": "Jungian archetypes (榮格心理學原型), archetypal hero (經典英雄原型), archetype of a dictator (獨裁者的典型化身)",
    "oneSentenceMnemonic": "arch (原始古老) + type (模型) ➔ 「集體潛意識深處的原始模型」就是 archetype (原型、典型)！",
    "etymologicalOrigin": "拉丁語 archetypum (希臘語 arkhetypon \"原始模型\")",
    "visualImagery": "想像世界各國神話中都存在「屠龍救公主的英雄」以及「睿智的白鬍子智者」，這就是跨文化的集體原型（archetype）。",
    "commonCollocations": [
      "the archetype of the mad scientist (瘋狂科學家的典型代表)",
      "literary archetypes (文學原型)",
      "an archetypal English country village (典型的英格蘭鄉村村莊)"
    ],
    "contrastiveTips": "archetype (文學/神話/心理學深層的「意象原型」) $leftrightarrow$ prototype (工業/科技產品的「首台樣機/原型機」)。"
  },
  "source": "preset"
};
