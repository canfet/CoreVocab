import { WordAnalysis } from '../../types';

export const protagonist: WordAnalysis = {
    word: 'protagonist',
    ipa: '/proʊˈtæɡ.ə.nɪst/',
    partOfSpeech: 'noun (名詞)',
    chineseMeaning: '主角（小說、戲劇、電影的主要人物）；（引申）倡導者、主要推動者',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 順序前綴',
        morpheme: 'proto-',
        originalForm: 'prōtos (希臘語)',
        meaning: '第一、首要 (first, foremost)',
        category: '順序/等級',
        grammaticalRole: '希臘語前綴'
      },
      {
        type: 'root',
        label: '💎 核心字根',
        morpheme: 'agonist',
        originalForm: 'agōnistēs (希臘語)',
        variantNote: '希臘文 agōnistēs 原意是「參加競賽/演出的人」，源自 agōn（競賽、鬥爭、集會），這個字根後來也進入英文變成 agony（極度痛苦，原指競賽時的掙扎）。',
        meaning: 'competitor, actor (競爭者、演出者)',
        category: '人物角色',
        grammaticalRole: '名詞中心'
      }
    ],
    phonetic: {
      assimilationPath: 'protos (第一) + agonistes (演出者/競爭者) ➔ protagonistes (第一個演員) ➔ protagonist',
      phoneticAnalysis: '這個字直接由希臘文 protos 加上 agonistes 組成，兩部分保留完整拼寫，沒有經過子音同化。在古希臘戲劇裡，protagonistes 原本專指「第一位演員」，因為早期希臘悲劇通常只有一到三位演員輪流扮演不同角色，其中資深、戲份最重的那位就叫 protagonistes。',
    },
    semantic: {
      prefixMeaning: '第一、首要 (proto-)',
      rootCoreAction: '演出者、競爭者 (agonist)',
      suffixGrammar: '名詞',
      modernMeaning: '故事中戲份最重、推動情節發展的主要角色，或現實中某項理念/行動的主要推動者',
      formulaDisplay: '{ 第一 (proto-) } + { 演出者 (agonist) } = 主角 (protagonist)',
      literalLogic: '字面就是「第一位演員」，古希臘戲劇裡指戲份最重的主要演員，後來擴大用來指任何故事的「主角」。'
    },
    familyTree: [
      { word: 'antagonist', formula: 'anti- (對抗) + agonist (競爭者)', meaning: '反派、對手（protagonist 的反義詞）' },
      { word: 'agony', formula: 'agon (競賽/掙扎) + -y', meaning: '極度痛苦、苦惱' },
      { word: 'agonize', formula: 'agon (掙扎) + -ize', meaning: '苦惱、為難（動詞）' },
      { word: 'prototype', formula: 'proto- (最初) + type (印記)', meaning: '原型、雛形' },
      { word: 'protocol', formula: 'proto- (最初) + col (膠著)', meaning: '協議、規範' }
    ],
    memory: {
      cognatesDaily: 'antagonist (反派), agony (極度痛苦), agonize (苦惱)',
      oneSentenceMnemonic: 'proto (第一) + agonist (演出者) ➔ 「戲份第一多的演員」就是 protagonist (主角)！',
      etymologicalOrigin: '來自希臘文 prōtagōnistēs（prōtos 第一 + agōnistēs 演出者/競爭者），古希臘戲劇的專有名詞。',
      commonCollocations: [
        'the protagonist of the novel/film (小說/電影的主角)',
        'the main protagonist (主要主角)'
      ],
      contrastiveTips: 'protagonist 和 antagonist 是一組固定的反義詞：protagonist 是「主角」，antagonist 是「與主角對立的反派/對手」；hero 也可以指主角，但 hero 通常帶有「正面、英雄式」的語感，protagonist 則是中性的敘事學術語，不代表這個角色一定是好人。'
    },
    source: 'preset'
  };
