import { WordAnalysis } from '../../types';

export const antibiotic: WordAnalysis = {
  "word": "antibiotic",
  "ipa": "/ˌæntibaɪˈɑːtɪk/",
  "partOfSpeech": "noun 抗生素 / adj. 抗菌的、抗生的",
  "chineseMeaning": "抗生素、抗菌藥物（如青黴素/盤尼西林）；抗菌的",
  "morphemes": [
    {
      "type": "prefix",
      "label": "🚩 希臘前綴",
      "morpheme": "anti-",
      "originalForm": "anti- (希臘語 ἀντί-)",
      "meaning": "對抗、反對 (against, opposing)",
      "category": "相反/對抗",
      "grammaticalRole": "對抗前綴"
    },
    {
      "type": "root",
      "label": "💎 希臘字根",
      "morpheme": "bio",
      "originalForm": "bios (希臘語)",
      "meaning": "微生物生命 (microbial life)",
      "category": "生命/微生物",
      "grammaticalRole": "名詞詞根"
    },
    {
      "type": "suffix",
      "label": "🏷️ 形容詞/名詞字尾",
      "morpheme": "-tic",
      "originalForm": "-tikos (希臘語)",
      "meaning": "屬於...特性的 (pertaining to)",
      "category": "詞性標記",
      "grammaticalRole": "後綴"
    }
  ],
  "phonetic": {
    "assimilationPath": "anti- (抗) + bios (微生物) + -tic ➔ 1899 年法語 antibiotique ➔ 1942 年 Waksman 普及 antibiotic",
    "phoneticAnalysis": "重音落在第四音節 /ˌæntibaɪˈɑːtɪk/。常用複數 antibiotics。",
    "ruleKey": "抗擊有害微生物 anti- + bios"
  },
  "semantic": {
    "prefixMeaning": "殺滅抑制 (anti-)",
    "rootCoreAction": "細菌微生物生命 (bio < bios)",
    "suffixGrammar": "醫藥名詞 / 形容詞",
    "modernMeaning": "能抑制或殺死致病細菌生長、治療細菌感染的強效藥物（如盤尼西林）；抗生素對病毒無效",
    "formulaDisplay": "{ 對抗 (anti-) } + { 微生物生命 (bio) } + { 藥物 (-tic) } = 抗生素、抗菌藥 (antibiotic)",
    "literalLogic": "字面上是「對抗微生物生命的藥物」，現代醫學最重要的里程碑之一。"
  },
  "familyTree": [
    {
      "word": "antibiotic resistance",
      "formula": "phrase",
      "meaning": "抗生素抗藥性 (超級細菌危機)",
      "level": "TOEIC",
      "tags": [
        "TOEIC",
        "TOEFL"
      ]
    },
    {
      "word": "probiotic",
      "formula": "pro- (有益) + bio + -tic",
      "meaning": "益生菌 (對腸道有益的菌)",
      "level": "Core",
      "tags": [
        "TOEIC"
      ]
    },
    {
      "word": "antibody",
      "formula": "anti- + body",
      "meaning": "抗體 (免疫系統製造)",
      "level": "Core",
      "tags": [
        "TOEIC"
      ]
    }
  ],
  "memory": {
    "cognatesDaily": "take a course of antibiotics (服用一整個療程的抗生素), antibiotic resistance (抗生素抗藥性), prescribe antibiotics (開抗生素處方)",
    "oneSentenceMnemonic": "anti (對抗殺死) + bio (細菌生命) + tic ➔ 「精準殺滅有害病菌生命的特效藥」就是 antibiotic (抗生素)！",
    "etymologicalOrigin": "20世紀醫學名詞 (希臘語 anti- \"抗\" + bios \"生命\")",
    "visualImagery": "想像弗萊明爵士在培養皿中發現青黴菌周圍的葡萄球菌全部溶解死亡，人類歷史上第一種抗生素誕生了（penicillin antibiotic）。",
    "commonCollocations": [
      "overuse of antibiotics (抗生素濫用)",
      "finish the full course of antibiotics (服完整個抗生素療程)",
      "superbugs resistant to antibiotics (對抗生素產生耐藥性的超級細菌)"
    ],
    "contrastiveTips": "antibiotic (抗生素，專門殺滅「細菌」bacteria) $leftrightarrow$ antiviral (抗病毒藥，針對「病毒」virus)。"
  },
  "source": "preset"
};
