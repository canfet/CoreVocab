import { WordAnalysis } from '../../types';

export const archive: WordAnalysis = {
  "word": "archive",
  "ipa": "/ˈɑːrkaɪv/",
  "partOfSpeech": "noun 檔案館、歷史檔案 / verb 存檔、歸檔",
  "chineseMeaning": "歷史檔案、文獻卷宗；檔案館；存檔、封存歸檔",
  "morphemes": [
    {
      "type": "prefix",
      "label": "💎 希臘字根",
      "morpheme": "arch",
      "originalForm": "arkhē / arkheion (希臘語 ἀρχεῖον)",
      "meaning": "政府官署、起源、開端 (magistracy, public office, origin)",
      "category": "核心概念",
      "grammaticalRole": "名詞詞根"
    },
    {
      "type": "suffix",
      "label": "🏷️ 名詞字尾",
      "morpheme": "-ive",
      "originalForm": "-ivus / -ium",
      "meaning": "場所/文獻 (place / record)",
      "category": "詞性標記",
      "grammaticalRole": "名詞後綴"
    }
  ],
  "phonetic": {
    "assimilationPath": "arkheion (政府官署公文保管所) ➔ 拉丁語 archīvum ➔ 法語 archives ➔ archive",
    "phoneticAnalysis": "重音在第一音節 /ˈɑːrkaɪv/。ch 讀作 /k/，ive 讀作 /aɪv/。",
    "ruleKey": "古希臘市政官署檔案"
  },
  "semantic": {
    "prefixMeaning": "政府官署所保存的 (arch < arkheion)",
    "rootCoreAction": "歷史公文典藏",
    "suffixGrammar": "名詞 (常作複數 archives) / 動詞",
    "modernMeaning": "保存具有長遠歷史價值之官方公文、手稿資料庫；在電腦中指壓縮封存的資料夾",
    "formulaDisplay": "{ 官署公文 (arch) } + { 典藏場所 (-ive) } = 檔案館、歷史檔案、歸檔 (archive)",
    "literalLogic": "古希臘市政廳 (arkheion) 保存法律與歷史公文的地方，現代泛指所有歷史卷宗或數位壓縮包。"
  },
  "familyTree": [
    {
      "word": "archivist",
      "formula": "archive + -ist",
      "meaning": "檔案管理員、文獻學家",
      "level": "TOEFL",
      "tags": [
        "TOEFL"
      ]
    },
    {
      "word": "archival",
      "formula": "archive + -al",
      "meaning": "檔案的、典藏級的 (如 archival quality)",
      "level": "TOEFL",
      "tags": [
        "TOEFL"
      ]
    },
    {
      "word": "archaeology",
      "formula": "arkhaios (古老) + -logy",
      "meaning": "考古學",
      "level": "TOEIC",
      "tags": [
        "TOEIC",
        "TOEFL"
      ]
    }
  ],
  "memory": {
    "cognatesDaily": "national archives (國家檔案館), archive emails / files (將郵件/檔案存檔歸檔), search historical archives (檢索歷史檔案)",
    "oneSentenceMnemonic": "arch (古老官署) + ive ➔ 「官署保存歷史文獻的地方與存檔」就是 archive (檔案館、歸檔)！",
    "etymologicalOrigin": "希臘語 arkheion (\"市政廳、公文處\")",
    "visualImagery": "想像國家圖書館深處恆溫恆濕的地下保險庫裡，一排排移動鐵架上整齊存放著百年前泛黃的珍貴手稿檔案（archive）。",
    "commonCollocations": [
      "stored in the national archives (保存在國家檔案館中)",
      "archive the completed project (將已結案的專案歸檔)",
      "archival research (文獻檔案研究)"
    ],
    "contrastiveTips": "archive (長期封存的歷史檔案/資料庫) $leftrightarrow$ file (日常工作中的即時文件)。"
  },
  "source": "preset"
};
