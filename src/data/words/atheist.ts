import { WordAnalysis } from '../../types';

export const atheist: WordAnalysis = {
  "word": "atheist",
  "ipa": "/ˈeɪθiɪst/",
  "partOfSpeech": "noun (名詞)",
  "chineseMeaning": "無神論者",
  "morphemes": [
    {
      "type": "prefix",
      "label": "🚩 希臘前綴",
      "morpheme": "a-",
      "originalForm": "a- (希臘語)",
      "meaning": "無、非 (without, not)",
      "category": "否定/缺乏",
      "grammaticalRole": "否定前綴"
    },
    {
      "type": "root",
      "label": "💎 希臘字根",
      "morpheme": "the",
      "originalForm": "theos (希臘語 θεός)",
      "meaning": "神、神明 (god)",
      "category": "核心概念",
      "grammaticalRole": "名詞詞根"
    },
    {
      "type": "suffix",
      "label": "🏷️ 人物字尾",
      "morpheme": "-ist",
      "originalForm": "-istēs (希臘語)",
      "meaning": "...信奉者、人 (person who believes)",
      "category": "詞性標記",
      "grammaticalRole": "名詞後綴"
    }
  ],
  "phonetic": {
    "assimilationPath": "a- (無) + theos (神) + -ist ➔ 希臘語 atheos ➔ atheist",
    "phoneticAnalysis": "希臘語 atheos (a- \"無\" + theos \"神\")，進入英語加上 -ist 後綴，發音為 /ˈeɪθiɪst/。",
    "ruleKey": "希臘否定前綴 a-"
  },
  "semantic": {
    "prefixMeaning": "沒有、不信 (a-)",
    "rootCoreAction": "神明 (the < theos)",
    "suffixGrammar": "人物後綴 (-ist)",
    "modernMeaning": "不相信任何神明、上帝或超自然主宰存在的人",
    "formulaDisplay": "{ 無 (a-) } + { 神 (the) } + { 人 (-ist) } = 無神論者 (atheist)",
    "literalLogic": "字面上是「心中沒有神明的人」，哲學上指主張神不存在者。"
  },
  "familyTree": [
    {
      "word": "atheism",
      "formula": "a- + the + -ism",
      "meaning": "無神論 (主義/思潮)",
      "level": "TOEFL",
      "tags": [
        "TOEFL"
      ]
    },
    {
      "word": "theology",
      "formula": "the + -o- + -logy",
      "meaning": "神學",
      "level": "TOEFL",
      "tags": [
        "TOEFL"
      ]
    },
    {
      "word": "monotheism",
      "formula": "mono- (一) + the + -ism",
      "meaning": "一神教",
      "level": "GRE",
      "tags": [
        "GRE"
      ]
    },
    {
      "word": "polytheism",
      "formula": "poly- (多) + the + -ism",
      "meaning": "多神教",
      "level": "GRE",
      "tags": [
        "GRE"
      ]
    }
  ],
  "memory": {
    "cognatesDaily": "avowed atheist (公開承認的無神論者), atheist beliefs (無神論觀點)",
    "oneSentenceMnemonic": "a (沒有) + the (神) + ist (人) ➔ 「不相信有神的人」就是 atheist (無神論者)！",
    "etymologicalOrigin": "希臘語 atheos (a- \"無\" + theos \"神\")",
    "visualImagery": "想像古希臘神廟前，哲學家仰望星空，堅定地用科學與理性思考宇宙而非歸因於諸神（a- + the- + ist）。",
    "commonCollocations": [
      "staunch / confirmed atheist (堅定的無神論者)",
      "agnostic vs atheist (不可知論者對比無神論者)"
    ],
    "contrastiveTips": "atheist (無神論者：認定神不存在) $leftrightarrow$ agnostic (不可知論者：認為神存不存在無法被證實) $leftrightarrow$ theist (有神論者)。"
  },
  "source": "preset"
};
