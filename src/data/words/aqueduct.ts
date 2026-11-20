import { WordAnalysis } from '../../types';

export const aqueduct: WordAnalysis = {
  "word": "aqueduct",
  "ipa": "/ˈækwɪdʌkt/",
  "partOfSpeech": "noun (名詞)",
  "chineseMeaning": "高架引水橋、渡槽、導水管（古羅馬偉大水利工程奇蹟）",
  "morphemes": [
    {
      "type": "prefix",
      "label": "💎 拉丁字根",
      "morpheme": "aque-",
      "originalForm": "aqua (拉丁語)",
      "meaning": "水、泉水 (water)",
      "category": "水/液體",
      "grammaticalRole": "名詞詞根"
    },
    {
      "type": "root",
      "label": "💎 核心字根",
      "morpheme": "duct",
      "originalForm": "dūcere / ductus (拉丁語)",
      "meaning": "引導、輸送 (to lead, guide, channel)",
      "category": "引導/輸送",
      "grammaticalRole": "分詞詞幹"
    }
  ],
  "phonetic": {
    "assimilationPath": "aqua (水) + dūcere/ductus (引導) ➔ 拉丁語 aquaeductus (引水道) ➔ aqueduct",
    "phoneticAnalysis": "重音在第一音節 /ˈækwɪdʌkt/。",
    "dualStemInfo": {
      "presentStem": "duc (如 produce, deduce)",
      "supineStem": "duct (如 aqueduct, conduct, product, duct)",
      "meaning": "引導、輸送"
    },
    "ruleKey": "將清泉引導輸送至城市 aqua + ducere"
  },
  "semantic": {
    "prefixMeaning": "高山清澈泉水 (aque < aqua)",
    "rootCoreAction": "以重力引導輸送 (duct < ducere)",
    "suffixGrammar": "水利建築名詞",
    "modernMeaning": "古羅馬工程師建造的跨越峽谷的宏偉高架拱橋水道，利用重力將數十公里外的高山水源引入城市浴場與噴泉",
    "formulaDisplay": "{ 水 (aque-) } + { 引導輸送 (duct) } = 高架引水渠、渡槽 (aqueduct)",
    "literalLogic": "字面上是「引水的管道/橋樑」，羅馬文明工程奇蹟的象徵。"
  },
  "familyTree": [
    {
      "word": "Pont du Gard",
      "formula": "Proper Noun",
      "meaning": "加爾橋 (法國最著名的古羅馬三層渡槽高架引水橋)",
      "level": "TOEFL",
      "tags": [
        "TOEFL"
      ]
    },
    {
      "word": "conduct",
      "formula": "con- + duct",
      "meaning": "引導、導電、組織實施",
      "level": "Core",
      "tags": [
        "TOEIC"
      ]
    },
    {
      "word": "air duct",
      "formula": "phrase",
      "meaning": "通風管道 (空調風管)",
      "level": "Core",
      "tags": [
        "TOEIC"
      ]
    }
  ],
  "memory": {
    "cognatesDaily": "Roman aqueduct (古羅馬高架輸水渠), ancient aqueduct system (古代渡槽水利系統), modern aqueduct (現代輸水明渠)",
    "oneSentenceMnemonic": "aque (水) + duct (引導) ➔ 「跨越山谷將清泉引導進城的高架水橋」就是 aqueduct (引水渠、渡槽)！",
    "etymologicalOrigin": "拉丁語 aquaeductus (aquae \"水的\" + ductus \"引導\")",
    "visualImagery": "想像法國南部宏偉的三層石拱加爾橋渡槽（Pont du Gard aqueduct），歷經兩千年風雨依然巍然屹立跨越河流。",
    "commonCollocations": [
      "ruins of the Roman aqueduct (古羅馬引水道遺跡)",
      "supply fresh water via aqueducts (透過渡槽供應淡水)",
      "stone arch aqueduct (石拱高架引水橋)"
    ],
    "contrastiveTips": "aqueduct (引水渠/高架渡槽) $leftrightarrow$ viaduct (高架鐵路/公路橋，via 道路 + duct)。"
  },
  "source": "preset"
};
