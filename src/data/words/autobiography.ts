import { WordAnalysis } from '../../types';

export const autobiography: WordAnalysis = {
  "word": "autobiography",
  "ipa": "/ˌɔːtəbaɪˈɑːɡrəfi/",
  "partOfSpeech": "noun (名詞)",
  "chineseMeaning": "自傳（作者親筆撰寫的生平傳記）",
  "morphemes": [
    {
      "type": "prefix",
      "label": "🚩 希臘前綴",
      "morpheme": "auto-",
      "originalForm": "autos (希臘語)",
      "meaning": "自己、本人 (self)",
      "category": "自我/本人",
      "grammaticalRole": "本人前綴"
    },
    {
      "type": "root",
      "label": "💎 希臘字根",
      "morpheme": "bio",
      "originalForm": "bios (希臘語)",
      "meaning": "生命、生平 (life)",
      "category": "核心概念",
      "grammaticalRole": "名詞詞根"
    },
    {
      "type": "suffix",
      "label": "🏷️ 希臘字尾",
      "morpheme": "-graphy",
      "originalForm": "graphein (希臘語 γράφειν)",
      "meaning": "書寫、記錄 (writing, description)",
      "category": "詞性標記",
      "grammaticalRole": "書寫後綴"
    }
  ],
  "phonetic": {
    "assimilationPath": "auto- (自己) + bio (生命) + -graphy (記錄) ➔ 1797 年由英國詩人 Southey 普及 autobiography",
    "phoneticAnalysis": "重音落在第四音節 /ˌɔːtəbaɪˈɑːɡrəfi/。形容詞 autobiographical。",
    "ruleKey": "三字素複合：auto- + bio + graphy"
  },
  "semantic": {
    "prefixMeaning": "自己親筆 (auto-)",
    "rootCoreAction": "一生的生命歷程 (bio)",
    "suffixGrammar": "文學書寫體裁 (-graphy)",
    "modernMeaning": "名人或作家親自將自己從小到大的真實生平經歷與內心心路歷程記錄成書的「自傳」",
    "formulaDisplay": "{ 自己 (auto-) } + { 生平生命 (bio) } + { 書寫記錄 (-graphy) } = 自傳 (autobiography)",
    "literalLogic": "字面上是「自己寫自己的生平」，對照他人寫的傳記 biography。"
  },
  "familyTree": [
    {
      "word": "biography",
      "formula": "bio + -graphy",
      "meaning": "傳記 (他人寫的傳記)",
      "level": "Core",
      "tags": [
        "TOEIC"
      ]
    },
    {
      "word": "autobiographical",
      "formula": "autobiography + -al",
      "meaning": "自傳性質的",
      "level": "TOEIC",
      "tags": [
        "TOEIC",
        "TOEFL"
      ]
    },
    {
      "word": "memoir",
      "formula": "memoria (拉丁語)",
      "meaning": "回憶錄 (側重特定時期回憶)",
      "level": "TOEFL",
      "tags": [
        "TOEFL"
      ]
    }
  ],
  "memory": {
    "cognatesDaily": "publish an autobiography (出版自傳), read the autobiography of Steve Jobs (閱讀賈伯斯自傳), write one’s autobiography (撰寫自傳)",
    "oneSentenceMnemonic": "auto (自己) + bio (一生生命) + graphy (寫作) ➔ 「自己親筆寫自己一生的故事」就是 autobiography (自傳)！",
    "etymologicalOrigin": "18世紀希臘詞素組合 (autos \"自己\" + bios \"生命\" + graphein \"寫\")",
    "visualImagery": "想像富蘭克林晚年坐在書桌前，在燭光下提筆寫下回顧自己發明家與政治家一生的《富蘭克林自傳》（autobiography）。",
    "commonCollocations": [
      "bestselling autobiography (暢銷自傳)",
      "autobiography entitled... (題為...的自傳)",
      "reveal in his autobiography (在他的自傳中透露)"
    ],
    "contrastiveTips": "autobiography (自己寫自己的一生自傳) $leftrightarrow$ biography (他人為某人寫的傳記) $leftrightarrow$ memoir (回憶錄，著重特定重大事件)。"
  },
  "source": "preset"
};
