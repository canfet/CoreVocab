import { WordAnalysis } from '../../types';

export const benefactor: WordAnalysis = {
  "word": "benefactor",
  "ipa": "/ˈbenɪfæktər/",
  "partOfSpeech": "noun (名詞)",
  "chineseMeaning": "行善者、恩人、捐助人、贊助者",
  "morphemes": [
    {
      "type": "prefix",
      "label": "🚩 拉丁前綴/副詞",
      "morpheme": "bene-",
      "originalForm": "bene (拉丁語)",
      "meaning": "好、善、優 (well, good)",
      "category": "善良/美好",
      "grammaticalRole": "行善前綴"
    },
    {
      "type": "root",
      "label": "💎 核心字根",
      "morpheme": "fact",
      "originalForm": "facere / factus (拉丁語)",
      "meaning": "做、行事、創造 (to do, make)",
      "category": "核心動作",
      "grammaticalRole": "分詞詞幹"
    },
    {
      "type": "suffix",
      "label": "🏷️ 人物字尾",
      "morpheme": "-or",
      "originalForm": "-or (拉丁語)",
      "meaning": "做...的人 (one who does)",
      "category": "詞性標記",
      "grammaticalRole": "人物後綴"
    }
  ],
  "phonetic": {
    "assimilationPath": "bene (善) + facere/factus (做) + -or ➔ 晚期拉丁語 benefactor (行善者) ➔ benefactor",
    "phoneticAnalysis": "重音在第一音節 /ˈbenɪfæktər/。女性捐助人為 benefactress。",
    "dualStemInfo": {
      "presentStem": "fic / fac (如 beneficial, manufacture)",
      "supineStem": "fact (如 benefactor, factory, satisfaction)",
      "meaning": "行善、做事"
    },
    "ruleKey": "拉丁行善字首 bene- + facere"
  },
  "semantic": {
    "prefixMeaning": "善事好事 (bene)",
    "rootCoreAction": "付諸實行 (fact < facere)",
    "suffixGrammar": "人物名詞 (-or)",
    "modernMeaning": "慷慨解囊捐款資助學校、醫院或在困境中對人施予大恩大德的「恩人、贊助者」",
    "formulaDisplay": "{ 行善 (bene-) } + { 做事 (fact) } + { 人 (-or) } = 恩人、捐助者 (benefactor)",
    "literalLogic": "字面上是「行善做好事的人」，受惠者稱為 beneficiary。"
  },
  "familyTree": [
    {
      "word": "beneficiary",
      "formula": "bene- + fic + -ary",
      "meaning": "受益人、受惠者 (反向對照)",
      "level": "TOEIC",
      "tags": [
        "TOEIC",
        "TOEFL"
      ]
    },
    {
      "word": "beneficent",
      "formula": "bene- + fic + -ent",
      "meaning": "慈善的、行善仁慈的",
      "level": "TOEFL",
      "tags": [
        "TOEFL",
        "GRE"
      ]
    },
    {
      "word": "malefactor",
      "formula": "male (惡) + fact + -or",
      "meaning": "作惡者、罪犯 (反義詞)",
      "level": "GRE",
      "tags": [
        "GRE"
      ]
    }
  ],
  "memory": {
    "cognatesDaily": "generous benefactor (慷慨的捐助者), anonymous benefactor (匿名大恩人), major benefactor of the university (大學的主要捐資人)",
    "oneSentenceMnemonic": "bene (做好事) + fact (做) + or (人) ➔ 「慷慨解囊行善的大好人」就是 benefactor (恩人、捐助者)！",
    "etymologicalOrigin": "晚期拉丁語 benefactor (bene \"好\" + factor \"做事者\")",
    "visualImagery": "想像一位匿名慈善家簽下一張千萬支票捐建偏鄉兒童圖書館，被全校師生視為大恩人（benefactor）。",
    "commonCollocations": [
      "a generous benefactor to the arts (藝術界的慷慨贊助人)",
      "acknowledge one’s benefactor (向恩人致謝)",
      "funded by an anonymous benefactor (由一位匿名恩人出資贊助)"
    ],
    "contrastiveTips": "benefactor (出資行善的恩人/捐贈者) $leftrightarrow$ beneficiary (領受遺產/保險金的受惠人)。"
  },
  "source": "preset"
};
