import { WordAnalysis } from '../../types';

export const antidote: WordAnalysis = {
  "word": "antidote",
  "ipa": "/ˈæntidoʊt/",
  "partOfSpeech": "noun (名詞)",
  "chineseMeaning": "解毒劑、解藥；矯正方法、良方",
  "morphemes": [
    {
      "type": "prefix",
      "label": "🚩 希臘前綴",
      "morpheme": "anti-",
      "originalForm": "anti (希臘語)",
      "meaning": "對抗、抵抗 (against)",
      "category": "對抗/相反",
      "grammaticalRole": "對抗前綴"
    },
    {
      "type": "root",
      "label": "💎 希臘字根",
      "morpheme": "dote",
      "originalForm": "didonai / dotos (希臘語 δίδωμι)",
      "meaning": "給予 (given, to give)",
      "category": "核心動作",
      "grammaticalRole": "分詞詞幹"
    }
  ],
  "phonetic": {
    "assimilationPath": "anti- (對抗) + didonai/dotos (給予) ➔ 希臘語 antidoton ➔ antidote",
    "phoneticAnalysis": "重音在第一音節 /ˈæntidoʊt/。",
    "ruleKey": "希臘對抗字首 anti-"
  },
  "semantic": {
    "prefixMeaning": "對抗毒素 (anti-)",
    "rootCoreAction": "給予服用的藥物 (dote < dotos)",
    "suffixGrammar": "名詞",
    "modernMeaning": "抵抗蛇毒或毒藥的特效解藥，引申為消除焦慮、無聊或危機的良方",
    "formulaDisplay": "{ 對抗 (anti-) } + { 給予服藥 (dote) } = 解毒劑、消除良方 (antidote)",
    "literalLogic": "字面上是「給予用來對抗毒素的良藥」，引申為排解任何負面情緒的良策。"
  },
  "familyTree": [
    {
      "word": "dose",
      "formula": "dosis < didonai",
      "meaning": "劑量 (一次給予的量)",
      "level": "Core",
      "tags": [
        "TOEIC"
      ]
    },
    {
      "word": "anecdote",
      "formula": "an- (不) + ec- (出) + dote",
      "meaning": "軼事、趣聞 (未公開給予的秘辛)",
      "level": "TOEFL",
      "tags": [
        "TOEFL",
        "GRE"
      ]
    }
  ],
  "memory": {
    "cognatesDaily": "antidote to poison / venom (毒藥/蛇毒解藥), perfect antidote to stress (紓解壓力的完美良方)",
    "oneSentenceMnemonic": "anti (對抗) + dote (給藥) ➔ 「給病人吃來對抗毒素」就是 antidote (解毒劑、良方)！",
    "etymologicalOrigin": "希臘語 antidoton (anti- \"對抗\" + dotos \"給予的\")",
    "visualImagery": "想像被毒蛇咬傷的探險家奄奄一息，醫生及時給他注射一劑透明的解毒血清，轉危為安（anti- + dote）。",
    "commonCollocations": [
      "the only known antidote (唯一已知的解藥)",
      "an antidote to boredom / fatigue (排解無聊/消除疲勞的良方)",
      "administer an antidote (注射/給予解藥)"
    ],
    "contrastiveTips": "antidote 特指「中和毒性或消除特定負面狀態的解藥」；remedy 是一般的「治療法/補救措施」。"
  },
  "source": "preset"
};
