import { WordAnalysis } from '../../types';

export const archbishop: WordAnalysis = {
  "word": "archbishop",
  "ipa": "/ˌɑːrtʃˈbɪʃəp/",
  "partOfSpeech": "noun (名詞)",
  "chineseMeaning": "大主教、總主教（管轄整個教省的最高主教）",
  "morphemes": [
    {
      "type": "prefix",
      "label": "🚩 希臘前綴",
      "morpheme": "arch-",
      "originalForm": "arkhi- (希臘語 ἀρχι-)",
      "meaning": "首席、最高、統治 (chief, highest, principal)",
      "category": "地位/最高",
      "grammaticalRole": "首席前綴"
    },
    {
      "type": "root",
      "label": "💎 宗教字根",
      "morpheme": "bishop",
      "originalForm": "episkopos (希臘語 ἐπίσκοπος)",
      "meaning": "主教、監管者 (overseer)",
      "category": "核心概念",
      "grammaticalRole": "名詞詞根"
    }
  ],
  "phonetic": {
    "assimilationPath": "arkhi- (首席) + episkopos (主教) ➔ 晚期拉丁語 archiepiscopus ➔ 古英語 arcebiscop ➔ archbishop",
    "phoneticAnalysis": "重音落在第二音節 /ˌɑːrtʃˈbɪʃəp/。前綴 arch- 讀作 /ɑːrtʃ/。",
    "ruleKey": "希臘首席統治字首 arch-"
  },
  "semantic": {
    "prefixMeaning": "教區最高首領 (arch-)",
    "rootCoreAction": "監督教區的主教 (bishop < episkopos)",
    "suffixGrammar": "宗教名詞",
    "modernMeaning": "基督教/天主教教階制度中管轄整個大教區（Archdiocese）的最高級別主教",
    "formulaDisplay": "{ 首席/最高 (arch-) } + { 主教 (bishop) } = 大主教、總主教 (archbishop)",
    "literalLogic": "字面上是「首席大主教」，如坎特伯里大主教 (Archbishop of Canterbury)。"
  },
  "familyTree": [
    {
      "word": "bishop",
      "formula": "episkopos (希臘語)",
      "meaning": "主教 (教區監督者)",
      "level": "Core",
      "tags": [
        "TOEIC"
      ]
    },
    {
      "word": "archdiocese",
      "formula": "arch- + diocese (教區)",
      "meaning": "大總教區",
      "level": "TOEFL",
      "tags": [
        "TOEFL"
      ]
    },
    {
      "word": "monarch",
      "formula": "monos (單一) + arch (統治)",
      "meaning": "君主、國王",
      "level": "TOEFL",
      "tags": [
        "TOEFL"
      ]
    }
  ],
  "memory": {
    "cognatesDaily": "Archbishop of Canterbury (坎特伯里大主教), appoint an archbishop (任命大主教), Archbishop of York (約克大主教)",
    "oneSentenceMnemonic": "arch (首席首領) + bishop (主教) ➔ 「管轄所有主教的最高大主教」就是 archbishop (總主教、大主教)！",
    "etymologicalOrigin": "古英語 arcebiscop (希臘語 arkhi- \"首席\" + episkopos \"主教\")",
    "visualImagery": "想像在西敏寺大教堂的宏偉加冕典禮上，身穿金絲華貴祭袍的大主教將純金皇冠戴在國王頭上（arch- + bishop）。",
    "commonCollocations": [
      "the newly appointed archbishop (新任命的大主教)",
      "consecrated as archbishop (被祝聖為大主教)",
      "archbishop’s official residence (大主教官邸)"
    ],
    "contrastiveTips": "arch- (首領/最高)：archbishop (大主教), architect (總建築師), archenemy (頭號死敵)。"
  },
  "source": "preset"
};
