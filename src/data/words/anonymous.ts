import { WordAnalysis } from '../../types';

export const anonymous: WordAnalysis = {
  "word": "anonymous",
  "ipa": "/əˈnɑːnɪməs/",
  "partOfSpeech": "adj. (形容詞)",
  "chineseMeaning": "匿名的、無名的、不知姓名的",
  "morphemes": [
    {
      "type": "prefix",
      "label": "🚩 希臘前綴",
      "morpheme": "an-",
      "originalForm": "a- ➔ an- (希臘語)",
      "variantNote": "遇母音字母 o- 變體為 an-",
      "meaning": "無、沒有 (without)",
      "category": "否定/缺乏",
      "grammaticalRole": "否定前綴"
    },
    {
      "type": "root",
      "label": "💎 希臘字根",
      "morpheme": "onym",
      "originalForm": "onoma / onyma (希臘語 ὄνομα)",
      "meaning": "名字、名稱 (name)",
      "category": "核心概念",
      "grammaticalRole": "名詞詞根"
    },
    {
      "type": "suffix",
      "label": "🏷️ 形容詞字尾",
      "morpheme": "-ous",
      "originalForm": "-os / -ous (拉丁/英語化)",
      "meaning": "具有...特徵的 (characterized by)",
      "category": "詞性標記",
      "grammaticalRole": "形容詞後綴"
    }
  ],
  "phonetic": {
    "assimilationPath": "an- (無) + onoma/onyma (名字) + -ous ➔ 希臘語 anōnymos ➔ anonymous",
    "phoneticAnalysis": "重音落在第二音節 /əˈnɑːnɪməs/。字根 onym 與拉丁語 nōmen (name) 同源。",
    "ruleKey": "a- 遇母音同化為 an-"
  },
  "semantic": {
    "prefixMeaning": "沒有 (an-)",
    "rootCoreAction": "署名名字 (onym < onoma)",
    "suffixGrammar": "形容詞後綴 (-ous)",
    "modernMeaning": "不公開真實姓名、沒有署名的捐款、舉報或著作",
    "formulaDisplay": "{ 無 (an-) } + { 名字 (onym) } + { 的 (-ous) } = 匿名的、不知名的 (anonymous)",
    "literalLogic": "字面上是「沒有名字的」，引申為匿名信、匿名善心人士。"
  },
  "familyTree": [
    {
      "word": "anonymously",
      "formula": "anonymous + -ly",
      "meaning": "匿名地 (副詞)",
      "level": "TOEIC",
      "tags": [
        "TOEIC"
      ]
    },
    {
      "word": "anonymity",
      "formula": "anonym + -ity",
      "meaning": "匿名性、不知名 (名詞)",
      "level": "TOEFL",
      "tags": [
        "TOEFL"
      ]
    },
    {
      "word": "pseudonym",
      "formula": "pseudo- (假) + nym",
      "meaning": "假名、筆名",
      "level": "TOEFL",
      "tags": [
        "TOEFL",
        "GRE"
      ]
    },
    {
      "word": "synonym",
      "formula": "syn- (同) + onym",
      "meaning": "同義詞",
      "level": "Core",
      "tags": [
        "TOEIC"
      ]
    },
    {
      "word": "antonym",
      "formula": "anti- + onym",
      "meaning": "反義詞",
      "level": "Core",
      "tags": [
        "TOEIC"
      ]
    }
  ],
  "memory": {
    "cognatesDaily": "anonymous donor (匿名捐款人), stay anonymous (保持匿名), anonymous tip (匿名線報)",
    "oneSentenceMnemonic": "an (沒有) + onym (名字) + ous ➔ 「連名字都不留」就是 anonymous (匿名的)！",
    "etymologicalOrigin": "希臘語 anonymos (an- \"無\" + onoma \"名字\")",
    "visualImagery": "想像一位神祕的好心人把裝滿獎學金支票的信封留在校長室門口，署名欄只畫了一顆愛心（an- + onym-）。",
    "commonCollocations": [
      "anonymous donation / gift (匿名捐贈/禮物)",
      "remain / stay anonymous (保持匿名)",
      "anonymous letter / source (匿名信/匿名消息來源)"
    ],
    "contrastiveTips": "onym (名字) 家族：anonymous (無名/匿名) $leftrightarrow$ pseudonym (假名/筆名) $leftrightarrow$ synonym (同義詞) $leftrightarrow$ antonym (反義詞)。"
  },
  "source": "preset"
};
