import { WordAnalysis } from '../../types';

export const anarchy: WordAnalysis = {
  "word": "anarchy",
  "ipa": "/ˈænərki/",
  "partOfSpeech": "noun (名詞)",
  "chineseMeaning": "無政府狀態、混亂、無秩序",
  "morphemes": [
    {
      "type": "prefix",
      "label": "🚩 希臘前綴",
      "morpheme": "an-",
      "originalForm": "a- ➔ an- (希臘語)",
      "variantNote": "遇到母音或喉音字母時，a- 變體為 an-",
      "meaning": "無、缺乏 (without, not)",
      "category": "否定/缺乏",
      "grammaticalRole": "否定前綴"
    },
    {
      "type": "root",
      "label": "💎 希臘字根",
      "morpheme": "arch",
      "originalForm": "archein / archos (希臘語 ἄρχειν)",
      "meaning": "統治、領袖、開端 (to rule, leader, first)",
      "category": "核心概念",
      "grammaticalRole": "名詞詞根"
    },
    {
      "type": "suffix",
      "label": "🏷️ 名詞字尾",
      "morpheme": "-y",
      "originalForm": "-ia (希臘語)",
      "meaning": "體制、狀態 (state, system)",
      "category": "詞性標記",
      "grammaticalRole": "名詞後綴"
    }
  ],
  "phonetic": {
    "assimilationPath": "an- (無) + archein (統治) + -y ➔ 希臘語 anarchia ➔ anarchy",
    "phoneticAnalysis": "前綴 a- 遭遇母音 /ɑː/ 時增補鼻音 n 變為 an- (如 anarchy, anonymous, anesthesia)。",
    "ruleKey": "a- 遇母音同化為 an-"
  },
  "semantic": {
    "prefixMeaning": "沒有 (an-)",
    "rootCoreAction": "統治者與政府 (arch < archein)",
    "suffixGrammar": "體制/狀態名詞 (-y)",
    "modernMeaning": "社會沒有任何政府、法律或統治機關管理，陷入全面混亂無序的狀態",
    "formulaDisplay": "{ 無 (an-) } + { 統治者 (arch) } + { 狀態 (-y) } = 無政府狀態、混亂 (anarchy)",
    "literalLogic": "字面上是「沒有統治者的狀態」，引申為法治崩潰、陷入混亂。"
  },
  "familyTree": [
    {
      "word": "anarchist",
      "formula": "an- + arch + -ist",
      "meaning": "無政府主義者",
      "level": "TOEFL",
      "tags": [
        "TOEFL"
      ]
    },
    {
      "word": "monarchy",
      "formula": "mon- (單一) + arch + -y",
      "meaning": "君主制 (一人統治)",
      "level": "TOEFL",
      "tags": [
        "TOEFL"
      ]
    },
    {
      "word": "oligarchy",
      "formula": "olig- (少數) + arch + -y",
      "meaning": "寡頭政治",
      "level": "GRE",
      "tags": [
        "GRE"
      ]
    },
    {
      "word": "hierarchy",
      "formula": "hier- (神聖) + arch + -y",
      "meaning": "階級制度、層級體系",
      "level": "TOEIC",
      "tags": [
        "TOEIC"
      ]
    }
  ],
  "memory": {
    "cognatesDaily": "state of anarchy (無政府混亂狀態), lapse into anarchy (陷入無政府狀態)",
    "oneSentenceMnemonic": "an (沒有) + arch (統治者) + y ➔ 「沒有任何政府管束」就是 anarchy (無政府狀態、混亂)！",
    "etymologicalOrigin": "希臘語 anarchia (an- \"無\" + archos \"統治者\")",
    "visualImagery": "想像城市停電停水、警力崩潰，街道上紅綠燈熄滅，陷入徹底失控的無政府混亂（an- + arch- + y）。",
    "commonCollocations": [
      "threat of anarchy (無政府混亂的威脅)",
      "fall into total anarchy (陷入徹底混亂)",
      "anarchy and chaos (混亂與無秩序)"
    ],
    "contrastiveTips": "arch 統治家族：anarchy (無統治/無政府) $leftrightarrow$ monarchy (一人統治/君主制) $leftrightarrow$ hierarchy (階層統治)。"
  },
  "source": "preset"
};
