import { WordAnalysis } from '../../types';

export const aquarium: WordAnalysis = {
  "word": "aquarium",
  "ipa": "/əˈkweriəm/",
  "partOfSpeech": "noun (名詞)",
  "chineseMeaning": "水族館、水族箱、養魚缸（拉丁水字根 aqua-）",
  "morphemes": [
    {
      "type": "prefix",
      "label": "💎 拉丁字根",
      "morpheme": "aqua",
      "originalForm": "aqua (拉丁語)",
      "meaning": "水、水體 (water)",
      "category": "水/液體",
      "grammaticalRole": "名詞詞根"
    },
    {
      "type": "suffix",
      "label": "🏷️ 容器/場所字尾",
      "morpheme": "-arium",
      "originalForm": "-ārium (拉丁語)",
      "meaning": "...的場所、容器 (place for, vessel)",
      "category": "詞性標記",
      "grammaticalRole": "場所後綴"
    }
  ],
  "phonetic": {
    "assimilationPath": "aqua (水) + -ārium (場所) ➔ 1853 年英國博物學家 Gosse 普及 aquarium (複數 aquariums / aquaria)",
    "phoneticAnalysis": "重音在第二音節 /əˈkweriəm/。水瓶座為 Aquarius。",
    "ruleKey": "盛水養魚之場所 aqua + -arium"
  },
  "semantic": {
    "prefixMeaning": "蔚藍水世界 (aqua)",
    "rootCoreAction": "容納海洋生物",
    "suffixGrammar": "場所/容器名詞 (-arium)",
    "modernMeaning": "供大眾參觀鯊魚海龜等海洋生物的大型海洋水族館；或客廳裡飼養熱帶魚的玻璃水族箱",
    "formulaDisplay": "{ 水 (aqua) } + { 場所容器 (-arium) } = 水族館、養魚箱 (aquarium)",
    "literalLogic": "字面上是「盛裝水與水生生物的場所」，對照 terrarium (陸生植物玻璃生態缸)。"
  },
  "familyTree": [
    {
      "word": "Aquarius",
      "formula": "aqua + -arius",
      "meaning": "水瓶座 (寶瓶座)",
      "level": "Core",
      "tags": [
        "TOEIC"
      ]
    },
    {
      "word": "terrarium",
      "formula": "terra (大地) + -arium",
      "meaning": "玻璃生態箱 (植物/陸生爬蟲)",
      "level": "TOEFL",
      "tags": [
        "TOEFL"
      ]
    },
    {
      "word": "planetarium",
      "formula": "planet + -arium",
      "meaning": "天文館、天象儀",
      "level": "TOEFL",
      "tags": [
        "TOEFL"
      ]
    }
  ],
  "memory": {
    "cognatesDaily": "visit the national aquarium (參觀國立海洋水族館), tropical fish in an aquarium (水族箱裡的熱帶魚), clean the aquarium tank (清洗魚缸)",
    "oneSentenceMnemonic": "aqua (水) + arium (場所) ➔ 「充滿清澈海水與海洋生物的夢幻世界」就是 aquarium (水族館、水族箱)！",
    "etymologicalOrigin": "19世紀英語 (拉丁語 aqua \"水\" + -arium \"場所\")",
    "visualImagery": "想像站在巨大的壓克力海底隧道下方，巨大的鯨鯊、魟魚和成群熱帶魚在藍色水族館水體中優雅遊過（giant aquarium）。",
    "commonCollocations": [
      "public aquarium (公立大型水族館)",
      "marine aquarium (海洋水族館)",
      "aquarium glass tank (玻璃魚缸)"
    ],
    "contrastiveTips": "aquarium (水生動物館) $leftrightarrow$ planetarium (天文館) $leftrightarrow$ oceanarium (大型海洋世界)。"
  },
  "source": "preset"
};
