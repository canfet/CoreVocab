import { WordAnalysis } from '../../types';

export const retrospect: WordAnalysis = {
    word: 'retrospect',
    ipa: '/ˈret.rə.spekt/',
    partOfSpeech: 'noun (名詞，幾乎只用於片語 in retrospect；動詞用法罕見)',
    chineseMeaning: '回顧、回想、追溯往事',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 前綴',
        morpheme: 'retro-',
        originalForm: 'retro-',
        variantNote: '古拉丁文的副詞 retrō，意思是「向後、往回」。',
        meaning: '向後、倒退 (backward, behind)',
        category: '時間/空間方向',
        grammaticalRole: '副詞性前綴'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'spect',
        originalForm: 'specere / spectus',
        variantNote: '古拉丁文動詞 specere（看），這個字換了一種寫法，變成 spect-。',
        meaning: '觀看、注視、審視 (to look, to see)',
        category: '視覺感知',
        grammaticalRole: '視覺概念核心'
      }
    ],
    phonetic: {
      assimilationPath: 'retro- + spect ➔ 直接結合保留雙詞幹 spect ➔ retrospect',
      phoneticAnalysis: '古拉丁文動詞 specere（看）有兩種長相：spec- 和 spect-。這個字很久很久以前的老祖先意思是「觀察」，後來變成了英文的 spy（偵察，經過古法文 espier 傳進英文）；spy 跟 spect 是親戚，但要注意 speak（說話）其實是完全不同的字，跟「看」沒有關係喔！',
      dualStemInfo: {
        presentStem: 'spec- (如 species, conspicuous)',
        supineStem: 'spect- (如 inspect, prospect, respect)',
        meaning: '看、望 (look, behold)'
      },
      ruleKey: '拉丁雙詞幹 spect/spec'
    },
    semantic: {
      prefixMeaning: '向後 / 回溯往昔 (retro-)',
      rootCoreAction: '觀看 / 凝視 (spect)',
      suffixGrammar: '名詞/動詞',
      modernMeaning: '回頭審視過去發生的事情與經歷',
      formulaDisplay: '{ 往回/回溯 (retro-) } + { 觀看/望向 (spect) } = 回顧、回想 (retrospect)',
      literalLogic: '照字面意思就是「轉身往後看」，用在時間上就是「回想過去發生的事」。'
    },
    familyTree: [
      { word: 'prospect', formula: 'pro- (向前) + spect', meaning: '前景、前途、期望、探勘' },
      { word: 'inspect', formula: 'in- (向內) + spect', meaning: '仔細檢查、視察、審查' },
      { word: 'circumspect', formula: 'circum- (四周) + spect', meaning: '慎重的、面面俱到的、謹小慎微的' },
      { word: 'spectator', formula: 'spect + -ator (人物後綴)', meaning: '觀眾、旁觀者' },
      { word: 'conspicuous', formula: 'con- (完全) + spic + -uous', meaning: '顯眼的、引人注目的' }
    ],
    memory: {
      cognatesDaily: 'retro (復古風), spectacle (眼鏡/奇觀), suspect (嫌疑犯)',
      oneSentenceMnemonic: 'retro (向後、倒退) + spect (看) ➔ 「往後回頭看」就是「回顧往昔」！',
      etymologicalOrigin: '來自古拉丁文 retrōspicere，retrō 是「向後」，spicere 是「看」。'
    },
    source: 'preset'
  };
