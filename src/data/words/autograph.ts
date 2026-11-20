import { WordAnalysis } from '../../types';

export const autograph: WordAnalysis = {
  "word": "autograph",
  "ipa": "/ˈɔːtəɡræf/",
  "partOfSpeech": "noun 親筆簽名 / verb 在...上親筆簽名",
  "chineseMeaning": "（名人的）親筆簽名、手稿；在...上親筆簽名",
  "morphemes": [
    {
      "type": "prefix",
      "label": "🚩 希臘前綴",
      "morpheme": "auto-",
      "originalForm": "autos (希臘語 αὐτός)",
      "meaning": "自己、親自 (self, by oneself)",
      "category": "自我/親自",
      "grammaticalRole": "親自前綴"
    },
    {
      "type": "root",
      "label": "💎 希臘字根",
      "morpheme": "graph",
      "originalForm": "graphein / gramma (希臘語 γράφειν)",
      "meaning": "書寫、簽寫 (to write)",
      "category": "書寫/文字",
      "grammaticalRole": "動詞詞根"
    }
  ],
  "phonetic": {
    "assimilationPath": "autos (自己) + graphein (寫) ➔ 希臘語 autographon (親手寫之物) ➔ autograph",
    "phoneticAnalysis": "重音在第一音節 /ˈɔːtəɡræf/。專指明星/名人的親筆簽名。",
    "ruleKey": "名人親手書寫簽名 auto- + graph"
  },
  "semantic": {
    "prefixMeaning": "自己親手 (auto-)",
    "rootCoreAction": "提筆書寫 (graph < graphein)",
    "suffixGrammar": "名詞 / 及物動詞",
    "modernMeaning": "球迷或影迷請崇拜的體育球星、歌星或作家親手簽在照片、球衣或書本上的「親筆簽名」",
    "formulaDisplay": "{ 親自自己 (auto-) } + { 寫字 (graph) } = 親筆簽名 (autograph)",
    "literalLogic": "字面上是「自己親手寫的字」，對照一般事務性簽署 signature。"
  },
  "familyTree": [
    {
      "word": "signature",
      "formula": "sign + -ature",
      "meaning": "簽名 (合約/刷卡的事務性簽字)",
      "level": "Core",
      "tags": [
        "TOEIC"
      ]
    },
    {
      "word": "autograph session",
      "formula": "phrase",
      "meaning": "簽書會、簽名會",
      "level": "TOEIC",
      "tags": [
        "TOEIC"
      ]
    },
    {
      "word": "paragraph",
      "formula": "para- (在旁) + graph",
      "meaning": "段落 (在旁做標記處)",
      "level": "Core",
      "tags": [
        "TOEIC"
      ]
    }
  ],
  "memory": {
    "cognatesDaily": "ask for an autograph (索要親筆簽名), autographed copy / photo (親筆簽名本/簽名照), autograph book (簽名紀念冊)",
    "oneSentenceMnemonic": "auto (自己親手) + graph (寫字) ➔ 「明星偶像親手簽給粉絲的紀念字跡」就是 autograph (親筆簽名)！",
    "etymologicalOrigin": "希臘語 autographos (autos \"自己\" + graphein \"寫\")",
    "visualImagery": "想像球星走出球場時，被狂熱的球迷們團團圍住，紛紛遞上球衣和簽字筆索要親筆簽名（asking for his autograph）。",
    "commonCollocations": [
      "sign autographs for fans (為粉絲簽名)",
      "an autographed jersey (一件親筆簽名球衣)",
      "collector of famous autographs (名人親筆簽名收藏家)"
    ],
    "contrastiveTips": "autograph (名人在球衣/書上的「偶像親筆紀念簽名」) $leftrightarrow$ signature (在合約/支票/文件上的「正式法律簽字」)。"
  },
  "source": "preset"
};
