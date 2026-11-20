import { WordAnalysis } from '../../types';

export const automatic: WordAnalysis = {
  "word": "automatic",
  "ipa": "/ˌɔːtəˈmætɪk/",
  "partOfSpeech": "adj. 自動的、機械自動化的；不假思索的、下意識的 / noun 自動武器",
  "chineseMeaning": "自動的、自動化的；無意識的、不假思索的；自動擋汽車；自動手槍",
  "morphemes": [
    {
      "type": "prefix",
      "label": "🚩 希臘前綴",
      "morpheme": "auto-",
      "originalForm": "autos (希臘語 αὐτός)",
      "meaning": "自己、自我 (self)",
      "category": "自我/獨立",
      "grammaticalRole": "自我前綴"
    },
    {
      "type": "root",
      "label": "💎 希臘字根",
      "morpheme": "mat",
      "originalForm": "matos / maesthai (希臘語 \"思想、行動、想要\")",
      "meaning": "自發動作、自願 (acting on own will)",
      "category": "動作/意志",
      "grammaticalRole": "詞根"
    },
    {
      "type": "suffix",
      "label": "🏷️ 形容詞字尾",
      "morpheme": "-ic",
      "originalForm": "-ikos",
      "meaning": "具有...特性的 (pertaining to)",
      "category": "詞性標記",
      "grammaticalRole": "形容詞後綴"
    }
  ],
  "phonetic": {
    "assimilationPath": "autos (自己) + matos (動作) + -ic ➔ 希臘語 automatos ➔ automatic",
    "phoneticAnalysis": "重音落在第三音節 /ˌɔːtəˈmætɪk/。副詞 automatically /ˌɔːtəˈmætɪkli/。",
    "ruleKey": "自己自發運作 automatos"
  },
  "semantic": {
    "prefixMeaning": "無需人工干預 (auto-)",
    "rootCoreAction": "機器自發動作運轉 (mat < matos)",
    "suffixGrammar": "科技/心理形容詞 (-ic)",
    "modernMeaning": "機器設備無需人力推動即可自行感應運轉（自動門、自動洗衣機）；或人面對危險時不假思索的本能反射動作",
    "formulaDisplay": "{ 自己 (auto-) } + { 動作運轉 (mat) } + { 的 (-ic) } = 自動的、不假思索的 (automatic)",
    "literalLogic": "古希臘語 automatos 字面為「自己會動的」，現代工業與 AI 時代核心概念。"
  },
  "familyTree": [
    {
      "word": "automatically",
      "formula": "automatic + -ly",
      "meaning": "自動地、不假思索地 (高頻副詞)",
      "level": "Core",
      "tags": [
        "TOEIC"
      ]
    },
    {
      "word": "automation",
      "formula": "automatic + -tion",
      "meaning": "自動化、自動化技術 (名詞)",
      "level": "Core",
      "tags": [
        "TOEIC"
      ]
    },
    {
      "word": "ATM (Automated Teller Machine)",
      "formula": "Abbr.",
      "meaning": "自動櫃員機 (提款機)",
      "level": "Core",
      "tags": [
        "TOEIC"
      ]
    }
  ],
  "memory": {
    "cognatesDaily": "automatic door / transmission (自動門/自動擋變速箱), automatic response (下意識本能反應), save automatically (自動存檔)",
    "oneSentenceMnemonic": "auto (自己) + mat (動起來) + ic ➔ 「感應到人走近就自己開門的機器」就是 automatic (自動的)！",
    "etymologicalOrigin": "希臘語 automatos (autos \"自己\" + matos \"想動\")",
    "visualImagery": "想像走進便利超商，玻璃自動感應門向兩側滑開（automatic doors），收銀台電子發票自動列印出來。",
    "commonCollocations": [
      "automatic pilot / autopilot (自動駕駛儀)",
      "automatic renewal of subscription (訂閱自動續費)",
      "an almost automatic reaction (幾乎是不假思索的下意識反應)"
    ],
    "contrastiveTips": "automatic (自動的) $leftrightarrow$ manual (手動的/人工的)。"
  },
  "source": "preset"
};
