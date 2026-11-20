import { WordAnalysis } from '../../types';

export const benediction: WordAnalysis = {
  "word": "benediction",
  "ipa": "/ˌbenɪˈdɪkʃn/",
  "partOfSpeech": "noun (名詞)",
  "chineseMeaning": "祝福、祈禱祝福、祝禱（宗教/彌撒結束時）",
  "morphemes": [
    {
      "type": "prefix",
      "label": "🚩 拉丁前綴",
      "morpheme": "bene-",
      "originalForm": "bene (拉丁語)",
      "meaning": "好、善 (well, good)",
      "category": "善良/美好",
      "grammaticalRole": "良好前綴"
    },
    {
      "type": "root",
      "label": "💎 核心字根",
      "morpheme": "dict",
      "originalForm": "dīcere / dictus (拉丁語)",
      "meaning": "說話、宣講 (to speak, say)",
      "category": "核心動作",
      "grammaticalRole": "分詞詞幹"
    },
    {
      "type": "suffix",
      "label": "🏷️ 名詞字尾",
      "morpheme": "-ion",
      "originalForm": "-tiō (拉丁語)",
      "meaning": "行動、儀式 (action, ritual)",
      "category": "詞性標記",
      "grammaticalRole": "名詞後綴"
    }
  ],
  "phonetic": {
    "assimilationPath": "bene (善) + dīcere/dictus (說) + -tiō ➔ 拉丁語 benedictiō (祝福) ➔ benediction",
    "phoneticAnalysis": "重音落在第三音節 /ˌbenɪˈdɪkʃn/。反義詞 malediction (詛咒)。",
    "dualStemInfo": {
      "presentStem": "dict (如 benediction, contradict, predict)",
      "supineStem": "dict (如 dictate, dictionary)",
      "meaning": "說出善言"
    },
    "ruleKey": "bene- 善 + dict 說話"
  },
  "semantic": {
    "prefixMeaning": "說出美好的善意話語 (bene)",
    "rootCoreAction": "開口宣講祈禱 (dict < dicere)",
    "suffixGrammar": "宗教儀式名詞 (-ion)",
    "modernMeaning": "牧師或神父在禮拜結束時舉起雙手為信眾所做的平安祝福祝禱，或長輩賜予的深切祝福",
    "formulaDisplay": "{ 善言 (bene-) } + { 說出 (dict) } + { 儀式 (-ion) } = 祝福、祝禱 (benediction)",
    "literalLogic": "字面上是「說出美好的吉利話」，反義詞為 malediction (詛咒惡言)。"
  },
  "familyTree": [
    {
      "word": "malediction",
      "formula": "male (惡) + dict + -ion",
      "meaning": "詛咒、惡毒咒罵 (反義詞)",
      "level": "GRE",
      "tags": [
        "GRE"
      ]
    },
    {
      "word": "benign",
      "formula": "bene + genus",
      "meaning": "良性的、仁慈和藹的",
      "level": "TOEFL",
      "tags": [
        "TOEFL",
        "GRE"
      ]
    },
    {
      "word": "predict",
      "formula": "pre- (前) + dict",
      "meaning": "預言、預測",
      "level": "Core",
      "tags": [
        "TOEIC"
      ]
    }
  ],
  "memory": {
    "cognatesDaily": "pronounce a benediction (宣告祝福), papal benediction (教宗的降福祝禱), give one’s benediction (賜予祝福許可)",
    "oneSentenceMnemonic": "bene (善) + dict (說好話) + ion ➔ 「神父舉手說出平安善言」就是 benediction (祝福、祝禱)！",
    "etymologicalOrigin": "拉丁語 benedictio (bene \"好\" + dicere \"說\")",
    "visualImagery": "想像莊嚴的教堂彌撒尾聲，神父走到祭壇前舉起雙手，向所有虔誠低頭的會眾賜予平安祝禱（benediction）。",
    "commonCollocations": [
      "receive the priest’s benediction (領受神父的祝禱)",
      "give their benediction to the marriage (為這樁婚事賜予祝福與認可)",
      "a closing benediction (閉會祝禱)"
    ],
    "contrastiveTips": "benediction (善言 $\rightarrow$ 祝福) $leftrightarrow$ malediction (惡言 $\rightarrow$ 詛咒)。"
  },
  "source": "preset"
};
