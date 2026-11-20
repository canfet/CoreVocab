import { WordAnalysis } from '../../types';

export const autocrat: WordAnalysis = {
  "word": "autocrat",
  "ipa": "/ˈɔːtəkræt/",
  "partOfSpeech": "noun (名詞)",
  "chineseMeaning": "獨裁者、專制君主、專橫霸道的人",
  "morphemes": [
    {
      "type": "prefix",
      "label": "🚩 希臘前綴",
      "morpheme": "auto-",
      "originalForm": "autos (希臘語 αὐτός)",
      "meaning": "自己、獨自 (self, one’s own)",
      "category": "自我/獨自",
      "grammaticalRole": "獨自前綴"
    },
    {
      "type": "root",
      "label": "💎 希臘字根",
      "morpheme": "crat",
      "originalForm": "kratos (希臘語 κράτος)",
      "meaning": "權力、統治 (power, rule)",
      "category": "核心概念",
      "grammaticalRole": "名詞詞根"
    }
  ],
  "phonetic": {
    "assimilationPath": "autos (自己) + kratos (統治) ➔ 希臘語 autokratēs ➔ autocrat",
    "phoneticAnalysis": "重音在第一音節 /ˈɔːtəkræt/。形容詞 autocratic /ˌɔːtəˈkrætɪk/，名詞 autocracy /ɔːˈtɑːkrəsi/。",
    "ruleKey": "希臘自我字首 auto- + kratos 統治"
  },
  "semantic": {
    "prefixMeaning": "一人獨攬大權 (auto-)",
    "rootCoreAction": "統治掌控 (crat < kratos)",
    "suffixGrammar": "政治名詞",
    "modernMeaning": "一人獨掌全部國家權力不受任何憲法或法律制衡的獨裁統治者",
    "formulaDisplay": "{ 自己一人 (auto-) } + { 權力統治 (crat) } = 獨裁者 (autocrat)",
    "literalLogic": "字面上是「僅憑自己一人掌控政權者」，沙皇與專制暴君的統稱。"
  },
  "familyTree": [
    {
      "word": "autocracy",
      "formula": "auto- + crat + -y",
      "meaning": "獨裁政體、專制政治 (名詞)",
      "level": "TOEFL",
      "tags": [
        "TOEFL",
        "GRE"
      ]
    },
    {
      "word": "autocratic",
      "formula": "autocrat + -ic",
      "meaning": "獨裁的、專斷的",
      "level": "TOEFL",
      "tags": [
        "TOEFL",
        "GRE"
      ]
    },
    {
      "word": "democrat",
      "formula": "demos (人民) + crat",
      "meaning": "民主主義者 (對照詞)",
      "level": "Core",
      "tags": [
        "TOEIC"
      ]
    },
    {
      "word": "bureaucrat",
      "formula": "bureau (辦公室) + crat",
      "meaning": "官僚、公務員",
      "level": "TOEIC",
      "tags": [
        "TOEIC"
      ]
    }
  ],
  "memory": {
    "cognatesDaily": "ruthless autocrat (殘暴的獨裁者), rule like an autocrat (像獨裁者一樣統治), autocratic regime (獨裁政權)",
    "oneSentenceMnemonic": "auto (自己一人) + crat (統治權力) ➔ 「一個人獨攬統治大權」就是 autocrat (獨裁者)！",
    "etymologicalOrigin": "希臘語 autokrates (autos \"自己\" + kratos \"權力\")",
    "visualImagery": "想像古代暴君端坐在金碧輝煌的王座上，大臣們跪伏在地不敢抬頭，一切決策全由他一人說了算（auto- + crat）。",
    "commonCollocations": [
      "an absolute autocrat (絕對的獨裁者)",
      "overthrow the autocrat (推翻獨裁者)",
      "behave like an autocrat in the office (在辦公室像個獨裁者般跋扈)"
    ],
    "contrastiveTips": "autocrat (強調個人一人獨裁掌權) $leftrightarrow$ dictator (強調以武力暴力強行專政)。"
  },
  "source": "preset"
};
