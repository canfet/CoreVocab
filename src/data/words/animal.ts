import { WordAnalysis } from '../../types';

export const animal: WordAnalysis = {
  "word": "animal",
  "ipa": "/ˈænɪml/",
  "partOfSpeech": "noun 動物、牲畜 / adj. 動物的、肉體本能的",
  "chineseMeaning": "動物、牲畜、野獸；動物的、肉體本能的、野蠻的",
  "morphemes": [
    {
      "type": "prefix",
      "label": "💎 核心字根",
      "morpheme": "anim",
      "originalForm": "anima (拉丁語)",
      "meaning": "氣息、呼吸、靈魂 (breath, soul, life)",
      "category": "生命/呼吸",
      "grammaticalRole": "名詞詞根"
    },
    {
      "type": "suffix",
      "label": "🏷️ 形容詞/名詞字尾",
      "morpheme": "-al",
      "originalForm": "-ālis (拉丁語)",
      "meaning": "具有...生命特質的 (living being)",
      "category": "詞性標記",
      "grammaticalRole": "後綴"
    }
  ],
  "phonetic": {
    "assimilationPath": "anima (呼吸氣息) + -ālis ➔ 拉丁語 animāl (有呼吸的生命體) ➔ animal",
    "phoneticAnalysis": "重音在第一音節 /ˈænɪml/。",
    "ruleKey": "擁有呼吸氣息之活物 anima"
  },
  "semantic": {
    "prefixMeaning": "擁有呼吸氣息與靈動生命 (anim < anima)",
    "rootCoreAction": "能自主呼吸活動",
    "suffixGrammar": "生物名詞 / 形容詞",
    "modernMeaning": "相對於植物而言，具有神經感知、能自主移動與呼吸的動物生命體；或人類未受文明約束的原始動物本能",
    "formulaDisplay": "{ 呼吸氣息 (anim) } + { 生命物體 (-al) } = 動物、有呼吸之活物 (animal)",
    "literalLogic": "古羅馬人將有呼吸 (anima) 能動的生物稱為 animal，無呼吸的稱為植物與礦物。"
  },
  "familyTree": [
    {
      "word": "animal instinct",
      "formula": "phrase",
      "meaning": "動物本能 (原始直覺)",
      "level": "Core",
      "tags": [
        "TOEIC"
      ]
    },
    {
      "word": "animal kingdom",
      "formula": "phrase",
      "meaning": "動物界 (生物分類)",
      "level": "Core",
      "tags": [
        "TOEIC"
      ]
    },
    {
      "word": "animate",
      "formula": "anima + -ate",
      "meaning": "賦予生命、有生命的",
      "level": "Core",
      "tags": [
        "TOEIC"
      ]
    }
  ],
  "memory": {
    "cognatesDaily": "wild animals (野生動物), animal welfare / rights (動物福利/權益), party animal (派對狂人/社交達人)",
    "oneSentenceMnemonic": "anim (呼吸氣息) + al ➔ 「擁有呼吸與生命、能跑能跳的活物」就是 animal (動物)！",
    "etymologicalOrigin": "拉丁語 animal (源自 anima \"呼吸/靈魂\")",
    "visualImagery": "想像非洲大草原上奔馳的角馬群、優雅覓食的長頸鹿和伏擊的獵豹，展現動物界勃勃生機（animal kingdom）。",
    "commonCollocations": [
      "animal behavior (動物行為學)",
      "protect endangered animals (保護瀕危動物)",
      "animal cruelty (虐待動物)"
    ],
    "contrastiveTips": "plant (植物，光合生長) $leftrightarrow$ animal (動物，自主呼吸移動) $leftrightarrow$ mineral (礦物)。"
  },
  "source": "preset"
};
