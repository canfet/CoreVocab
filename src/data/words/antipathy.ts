import { WordAnalysis } from '../../types';

export const antipathy: WordAnalysis = {
  "word": "antipathy",
  "ipa": "/ænˈtɪpəθi/",
  "partOfSpeech": "noun (名詞)",
  "chineseMeaning": "反感、厭惡、強烈不喜歡",
  "morphemes": [
    {
      "type": "prefix",
      "label": "🚩 希臘前綴",
      "morpheme": "anti-",
      "originalForm": "anti (希臘語)",
      "meaning": "對抗、相反 (against, opposite)",
      "category": "對抗/相反",
      "grammaticalRole": "對抗前綴"
    },
    {
      "type": "root",
      "label": "💎 希臘字根",
      "morpheme": "path",
      "originalForm": "pathos (希臘語 πάθος)",
      "meaning": "感覺、情感 (feeling, passion)",
      "category": "核心概念",
      "grammaticalRole": "名詞詞根"
    },
    {
      "type": "suffix",
      "label": "🏷️ 名詞字尾",
      "morpheme": "-y",
      "originalForm": "-ia (希臘語)",
      "meaning": "狀態、情感 (state, quality)",
      "category": "詞性標記",
      "grammaticalRole": "名詞後綴"
    }
  ],
  "phonetic": {
    "assimilationPath": "anti- (相反) + pathos (情感) + -y ➔ 希臘語 antipatheia ➔ antipathy",
    "phoneticAnalysis": "重音落在第二音節 /ænˈtɪpəθi/。",
    "ruleKey": "希臘對抗字首 anti-"
  },
  "semantic": {
    "prefixMeaning": "互相排斥相反 (anti-)",
    "rootCoreAction": "內心情感 (path < pathos)",
    "suffixGrammar": "情感名詞 (-y)",
    "modernMeaning": "內心深處對某人某物自然產生的強烈排斥感與厭惡感",
    "formulaDisplay": "{ 相反排斥 (anti-) } + { 情感 (path) } + { 狀態 (-y) } = 反感、厭惡 (antipathy)",
    "literalLogic": "字面上是「情感上的互相排斥」，引申為本能的厭惡。"
  },
  "familyTree": [
    {
      "word": "sympathy",
      "formula": "syn- ➔ sym- + path + -y",
      "meaning": "同情 (感受相投)",
      "level": "Core",
      "tags": [
        "TOEIC"
      ]
    },
    {
      "word": "apathy",
      "formula": "a- + path + -y",
      "meaning": "冷漠 (毫無感覺)",
      "level": "TOEFL",
      "tags": [
        "TOEFL",
        "GRE"
      ]
    },
    {
      "word": "empathy",
      "formula": "en- ➔ em- + path + -y",
      "meaning": "同理心 (感同身受)",
      "level": "TOEIC",
      "tags": [
        "TOEIC"
      ]
    }
  ],
  "memory": {
    "cognatesDaily": "feel deep antipathy towards... (對...感到深惡痛絕), natural antipathy (本能的排斥反感)",
    "oneSentenceMnemonic": "anti (反抗對立) + path (情緒) + y ➔ 「情緒強烈對立反感」就是 antipathy (厭惡、反感)！",
    "etymologicalOrigin": "希臘語 antipatheia (anti- \"反對\" + pathos \"感受\")",
    "visualImagery": "想像兩隻公貓在圍牆上相遇，彼此弓起背、炸開毛、發出低吼，展現出與生俱來的強烈反感（anti- + path-）。",
    "commonCollocations": [
      "have / feel an antipathy toward(s) sb (對某人深感反感)",
      "mutual antipathy (彼此互看不順眼/互相反感)",
      "deep-seated antipathy (根深蒂固的厭惡)"
    ],
    "contrastiveTips": "path (情感) 譜系：sympathy (同情) $leftrightarrow$ empathy (同理) $leftrightarrow$ apathy (冷漠) $leftrightarrow$ antipathy (反感厭惡)。"
  },
  "source": "preset"
};
