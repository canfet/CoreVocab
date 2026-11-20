import { WordAnalysis } from '../../types';

export const sustain: WordAnalysis = {
    word: 'sustain',
    ipa: '/səˈsteɪn/',
    partOfSpeech: 'verb (及物動詞)',
    chineseMeaning: '維持、支撐、遭受（損失/傷害）、確認（異議成立）',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 前綴',
        morpheme: 'sus-',
        originalForm: 'sub-',
        variantNote: 'sub- 遇到 t 這個音，會變身成 sus-',
        meaning: '在...下方、從下往上托起 (under, from below)',
        category: '空間/支撐',
        grammaticalRole: '方位前綴'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'tain',
        originalForm: 'tenēre',
        meaning: '握住、承受 (to hold, support)',
        category: '核心動作',
        grammaticalRole: '動作本體'
      }
    ],
    phonetic: {
      assimilationPath: 'sub- (在下) ➔ sus- + tenēre ➔ sustain (名詞: sustenance / sustainability)',
      phoneticAnalysis: 'sub- 遇到 t 這個音的時候，會變身成 sus-（像 sustain, suspect, suspend 都是這樣）。',
      ruleKey: 'sub- ➔ sus- 同化'
    },
    semantic: {
      prefixMeaning: '從下方 (sub- ➔ sus-)',
      rootCoreAction: '握住/托起 (tain)',
      suffixGrammar: '及物動詞',
      modernMeaning: '在下方給予支撐使之不崩塌；承受生命所需的養分；承受外力重擊',
      formulaDisplay: '{ 從下方 (sus-) } + { 托住 (tain) } = 支撐、維持、遭受 (sustain)',
      literalLogic: '古拉丁文的意思是「在很重的東西下面，用雙手穩穩地托住」，後來變出現代講的「永續發展 (sustainability)」。'
    },
    familyTree: [
      { word: 'sustainable', formula: 'sustain + -able', meaning: '可持續的、永續的 (如 sustainable development)' },
      { word: 'sustenance', formula: 'sustain + -ance', meaning: '生計、食物、維持生命的養分' },
      { word: 'sustainability', formula: 'sustainable + -ity', meaning: '永續性、可維持度' }
    ],
    memory: {
      cognatesDaily: 'sustainable energy (永續能源), sustained injuries (遭受創傷)',
      oneSentenceMnemonic: 'sus (從下面) + tain (托住) ➔ 「從底下全力托住」就是 sustain (支撐/維持)！',
      etymologicalOrigin: '古拉丁文 sustinēre (sub- 「在下面」 + tenēre 「握住」)'
    },
    source: 'preset'
  };
