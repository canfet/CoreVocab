import { WordAnalysis } from '../../types';

export const benefit: WordAnalysis = {
  "word": "benefit",
  "ipa": "/ˈbenɪfɪt/",
  "partOfSpeech": "noun 好處、利益、福利 / verb 受益、得益",
  "chineseMeaning": "好處、利益、員工福利、保險津貼；使受益、得益於",
  "morphemes": [
    {
      "type": "prefix",
      "label": "🚩 拉丁前綴",
      "morpheme": "bene-",
      "originalForm": "bene (拉丁語)",
      "meaning": "好、良好 (well, good)",
      "category": "善良/美好",
      "grammaticalRole": "良好前綴"
    },
    {
      "type": "root",
      "label": "💎 核心字根",
      "morpheme": "fit",
      "originalForm": "facere / factum (拉丁/法語 fait)",
      "meaning": "做、成就、恩惠 (to do, deed)",
      "category": "核心動作",
      "grammaticalRole": "動詞詞根"
    }
  ],
  "phonetic": {
    "assimilationPath": "bene (好) + factum ➔ 古法語 bienfait (善行/恩惠) ➔ benefit",
    "phoneticAnalysis": "重音在第一音節 /ˈbenɪfɪt/。形容詞 beneficial /ˌbenɪˈfɪʃl/。",
    "ruleKey": "拉丁行善字首 bene- + factum"
  },
  "semantic": {
    "prefixMeaning": "良好的 (bene)",
    "rootCoreAction": "善舉或成果 (fit < fait < factum)",
    "suffixGrammar": "名詞 / 及物不及物動詞 (常接 from)",
    "modernMeaning": "帶來的實際好處、健康益處，或公司提供給員工的保險退休金等福利津貼",
    "formulaDisplay": "{ 良好 (bene-) } + { 善舉收穫 (fit) } = 好處、福利、獲益 (benefit)",
    "literalLogic": "字面上是「做出來的好成果」，包含物質福利與抽象好處。"
  },
  "familyTree": [
    {
      "word": "beneficial",
      "formula": "benefit + -ial",
      "meaning": "有益的、有利的 (如 beneficial to health)",
      "level": "Core",
      "tags": [
        "TOEIC"
      ]
    },
    {
      "word": "fringe benefits",
      "formula": "phrase",
      "meaning": "額外福利 (如公司配車、健身房)",
      "level": "TOEIC",
      "tags": [
        "TOEIC"
      ]
    },
    {
      "word": "unemployment benefit",
      "formula": "phrase",
      "meaning": "失業救濟金",
      "level": "TOEIC",
      "tags": [
        "TOEIC"
      ]
    }
  ],
  "memory": {
    "cognatesDaily": "benefit from... (從...中獲益), employee benefits (員工福利), for the benefit of... (為了...的利益)",
    "oneSentenceMnemonic": "bene (好) + fit (成果) ➔ 「得到大大的好處與福利」就是 benefit (好處、福利、獲益)！",
    "etymologicalOrigin": "古法語 bienfait (拉丁語 benefactum \"善舉\")",
    "visualImagery": "想像員工拿到錄取通知書，上面寫滿了健康保險、年終獎金、帶薪休假等優渥的員工福利（benefits）。",
    "commonCollocations": [
      "health benefits of exercise (運動帶來的健康益處)",
      "benefit greatly / enormously from (從...中獲益匪淺)",
      "mutual benefit (互利共贏)"
    ],
    "contrastiveTips": "benefit from sth (從某事物中獲益)；benefit sb (使某人受益)。"
  },
  "source": "preset"
};
