import { WordAnalysis } from '../../types';

export const bicycle: WordAnalysis = {
  "word": "bicycle",
  "ipa": "/ˈbaɪsɪkl/",
  "partOfSpeech": "noun 自行車、腳踏車 / verb 騎自行車",
  "chineseMeaning": "自行車、腳踏車、單車；騎自行車",
  "morphemes": [
    {
      "type": "prefix",
      "label": "🚩 前綴",
      "morpheme": "bi-",
      "originalForm": "bis (拉丁語)",
      "meaning": "二、兩個、雙 (two, twice)",
      "category": "數字/二",
      "grammaticalRole": "雙重前綴"
    },
    {
      "type": "root",
      "label": "💎 希臘字根",
      "morpheme": "cycle",
      "originalForm": "kyklos (希臘語 κύκλος)",
      "meaning": "圓輪、循環 (circle, wheel)",
      "category": "核心概念",
      "grammaticalRole": "名詞詞根"
    }
  ],
  "phonetic": {
    "assimilationPath": "bi- (二) + cycle (輪子) ➔ 1868 年法語 vélocipède 衍生的 bicycle",
    "phoneticAnalysis": "重音在第一音節 /ˈbaɪsɪkl/。口語常簡稱 bike。",
    "ruleKey": "雙輪交通工具 bi- + cycle"
  },
  "semantic": {
    "prefixMeaning": "前後兩個 (bi-)",
    "rootCoreAction": "旋轉圓輪 (cycle < kyklos)",
    "suffixGrammar": "交通工具名詞 / 動詞",
    "modernMeaning": "由人力踩踏驅動前後兩個輪子前進的綠色環保交通工具（自行車）",
    "formulaDisplay": "{ 兩個 (bi-) } + { 輪子 (cycle) } = 自行車、腳踏車 (bicycle)",
    "literalLogic": "字面上是「前後兩個輪子的車」，對照 tricycle (三輪車) 與 unicycle (獨輪車)。"
  },
  "familyTree": [
    {
      "word": "unicycle",
      "formula": "uni- (一) + cycle",
      "meaning": "獨輪車 (特技用)",
      "level": "TOEIC",
      "tags": [
        "TOEIC"
      ]
    },
    {
      "word": "tricycle",
      "formula": "tri- (三) + cycle",
      "meaning": "三輪車 (幼兒或貨運)",
      "level": "Core",
      "tags": [
        "TOEIC"
      ]
    },
    {
      "word": "motorcycle",
      "formula": "motor + cycle",
      "meaning": "摩托車、機車",
      "level": "Core",
      "tags": [
        "TOEIC"
      ]
    }
  ],
  "memory": {
    "cognatesDaily": "ride a bicycle (騎自行車), bicycle lane / path (自行車專用道), bicycle helmet (自行車安全帽)",
    "oneSentenceMnemonic": "bi (兩個) + cycle (輪子) ➔ 「前後有兩個輪子的交通工具」就是 bicycle (自行車)！",
    "etymologicalOrigin": "19世紀法語 bicycle (拉丁語 bi- \"雙\" + 希臘語 kyklos \"輪子\")",
    "visualImagery": "想像在阿姆斯特丹運河畔的清晨，市民們戴著耳機踩著兩輪自行車（bicycle）穿梭在專用車道上。",
    "commonCollocations": [
      "commute by bicycle (騎自行車通勤)",
      "rent a public bicycle (租借共享單車)",
      "bicycle maintenance (自行車保養維修)"
    ],
    "contrastiveTips": "unicycle (1個輪子) $\rightarrow$ bicycle (2個輪子) $\rightarrow$ tricycle (3個輪子)。"
  },
  "source": "preset"
};
