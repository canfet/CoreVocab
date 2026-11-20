import { WordAnalysis } from '../../types';

export const automaton: WordAnalysis = {
  "word": "automaton",
  "ipa": "/ɔːˈtɑːmətɑːn/",
  "partOfSpeech": "noun (名詞)",
  "chineseMeaning": "自動機器人、自動機械裝置；呆板機械行事的人",
  "morphemes": [
    {
      "type": "prefix",
      "label": "🚩 希臘前綴",
      "morpheme": "auto-",
      "originalForm": "autos (希臘語)",
      "meaning": "自己、自發 (self)",
      "category": "自我/自發",
      "grammaticalRole": "自發前綴"
    },
    {
      "type": "root",
      "label": "💎 希臘字根",
      "morpheme": "maton",
      "originalForm": "matos / memona (希臘語)",
      "meaning": "心意、意願、行動 (willing, acting, moving)",
      "category": "核心動作",
      "grammaticalRole": "分詞詞幹"
    }
  ],
  "phonetic": {
    "assimilationPath": "autos (自己) + matos (移動/思考) ➔ 希臘語 automaton (自走裝置) ➔ automaton",
    "phoneticAnalysis": "重音在第二音節 /ɔːˈtɑːmətɑːn/。複數為 automata /ɔːˈtɑːmətə/ 或 automatons。",
    "ruleKey": "希臘自我字首 auto- + matos"
  },
  "semantic": {
    "prefixMeaning": "自己自發 (auto-)",
    "rootCoreAction": "自主運轉移動 (maton)",
    "suffixGrammar": "機械/哲學名詞",
    "modernMeaning": "依靠發條或齒輪內部動力自己運轉的古代自動機械人偶；比喻盲目重複例行工作如機器人般麻木的人",
    "formulaDisplay": "{ 自己 (auto-) } + { 運轉 (maton) } = 自動機器人、機械行事的人 (automaton)",
    "literalLogic": "古希臘水力發條鐘錶人偶，現代電腦科學中的「有限狀態自動機 (Automata Theory)」。"
  },
  "familyTree": [
    {
      "word": "automatic",
      "formula": "autos + matos + -ic",
      "meaning": "自動的、不假思索的",
      "level": "Core",
      "tags": [
        "TOEIC"
      ]
    },
    {
      "word": "automation",
      "formula": "automatic + -ion",
      "meaning": "自動化 (工業名詞)",
      "level": "TOEIC",
      "tags": [
        "TOEIC"
      ]
    },
    {
      "word": "automobile",
      "formula": "auto- + mobilis (移動)",
      "meaning": "汽車 (自己能走的車輛)",
      "level": "Core",
      "tags": [
        "TOEIC"
      ]
    }
  ],
  "memory": {
    "cognatesDaily": "clockwork automaton (發條人偶), cellular automata (細胞自動機), act like an automaton (像個機器人般機械麻木行事)",
    "oneSentenceMnemonic": "auto (自己) + maton (動起來) ➔ 「上緊發條自己動起來的人偶機器」就是 automaton (自動機器人)！",
    "etymologicalOrigin": "希臘語 automaton (\"自發行動之物\")",
    "visualImagery": "想像18世紀瑞士鐘錶大師製造的發條人偶，手握羽毛筆蘸墨水在紙上流暢寫字，動作精準如真人（automaton）。",
    "commonCollocations": [
      "work like an automaton (像個毫無靈魂的機器人般麻木工作)",
      "ancient mechanical automaton (古代機械自動人偶)",
      "theory of automata (自動機理論)"
    ],
    "contrastiveTips": "automaton (偏向古典發條機械裝置或比喻無靈魂的人) $leftrightarrow$ robot (現代程式控制的高科技機器人)。"
  },
  "source": "preset"
};
