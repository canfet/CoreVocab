import { WordAnalysis } from '../../types';

export const contain: WordAnalysis = {
    word: 'contain',
    ipa: '/kənˈteɪn/',
    partOfSpeech: 'verb (及物動詞)',
    chineseMeaning: '包含、容納、抑制、克制（情感/擴散）',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 前綴',
        morpheme: 'con-',
        originalForm: 'com- / con-',
        variantNote: '這個開頭的意思是「大家在一起、完全包住」',
        meaning: '共同、一起、完全包圍 (together, completely, enclosed)',
        category: '空間/聚集',
        grammaticalRole: '動詞空間強化'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'tain',
        originalForm: 'tenēre (拉丁字根)',
        variantNote: 'ten- 在古法文裡唸重音的時候會變身，唸起來就變成 -tain',
        meaning: '握住、持有、容納 (to hold, keep, grasp)',
        category: '核心動作',
        grammaticalRole: '動作概念中心'
      }
    ],
    phonetic: {
      assimilationPath: 'con- (完全聚攏) + tenēre ➔ 重音音變 -tain ➔ contain',
      phoneticAnalysis: '古拉丁文的字根 tenēre (握住) 會換好幾種不同的長相：① 唸重音時變成 -tain (像 contain, maintain, retain, sustain)；② 唸得比較輕時變成 -tin (像 continent, pertinent)；③ 換一種寫法時變成 -tent (像 content, retention, detention)。要注意：attention 雖然也有 -tent-，但它其實是從另一個古拉丁文動詞 attendere (ad- + tendere「伸展」) 來的，跟 tenēre 沒有關係，只是長得很像而已。',
      dualStemInfo: {
        presentStem: 'ten- / -tain (如 maintain, retain, tenacious)',
        supineStem: 'tent- (如 content, retention, attention)',
        meaning: '握住、持、容納 (to hold, keep)'
      },
      ruleKey: '拉丁詞根交替 (ten / tain / tent)'
    },
    semantic: {
      prefixMeaning: '聚攏 / 完全包圍 (con-)',
      rootCoreAction: '握住 / 容納 (tain / tenēre)',
      suffixGrammar: '動詞本體',
      modernMeaning: '將多個事物保持在同一邊界之內；或將感情、疫情、危機控制在一定範圍中',
      formulaDisplay: '{ 完全聚攏 (con-) } + { 握住/容納 (tain) } = 包含、容納、抑制 (contain)',
      literalLogic: '古拉丁文原本的意思是「把所有東西全部握在一起，不讓它溢出散落」，所以後來變出實體空間的「容納/包含」，也變出抽象概念的「控制/抑制擴散」。'
    },
    familyTree: [
      { word: 'maintain', formula: 'manu (手) + tain (握住)', meaning: '維持、保養、堅持主張 (親手握住不放)' },
      { word: 'retain', formula: 're- (再次) + tain (握住)', meaning: '保留、保持、記住 (握住留下來)' },
      { word: 'sustain', formula: 'sub- ➔ sus- (在下方) + tain (握住)', meaning: '維持、支撐、遭受 (從下方托住)' },
      { word: 'obtain', formula: 'ob- (朝向/到手) + tain (握住)', meaning: '獲得、取得、通用 (握到了手裡)' },
      { word: 'detain', formula: 'de- (阻留/向下) + tain (握住)', meaning: '拘留、扣押、耽擱 (把人扣住不放行)' },
      { word: 'abstain', formula: 'abs- (離開/遠離) + tain (握住)', meaning: '戒除、棄權 (手放開不碰、自我克制)' },
      { word: 'pertain', formula: 'per- (貫穿/徹底) + tain (關聯)', meaning: '屬於、關於、切合 (與之緊密相連)' },
      { word: 'content', formula: 'con- (完全) + tent (握住之物)', meaning: '內容、容量；滿意的 (已被裝滿的)' },
      { word: 'continent', formula: 'con- (一起) + tin (連貫) + -ent', meaning: '大陸 (連綿不絕的陸地)；克制的' },
      { word: 'tenacious', formula: 'ten (握住) + -acious (強烈)', meaning: '頑強的、執著的、堅忍不拔的' }
    ],
    memory: {
      cognatesDaily: 'container (貨櫃/保鮮盒/容器), content (內容/容量), maintain (維持), tennis (網球 - 源自法語 tenez "接球/拿好")',
      oneSentenceMnemonic: 'con (一起聚攏) + tain (握住) ➔ 「全部握在同一個盒子裡」就是 contain (包含/容納/控制)！',
      etymologicalOrigin: '古拉丁文 continēre (con- 「一起」 + tenēre 「握住」)',
      visualImagery: '想像雙手緊緊合抱住一個大箱子（con- 聚攏 + tain 握住），把所有零散的物品甚至劇烈波動的情緒全部穩穩鎖在箱內不讓其溢出。',
      commonCollocations: [
        'contain the outbreak / wildfire (控制疫情擴散 / 圍堵野火)',
        'contain one’s excitement / anger (抑制內心的興奮 / 怒火)',
        'this document contains confidential data (這份文件包含機密資料)'
      ],
      contrastiveTips: 'contain 是「把東西關在一個範圍裡面」；include 是「把某個東西算進整個名單裡」。'
    },
    source: 'preset'
  };
