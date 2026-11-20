import { WordAnalysis } from '../../types';

export const sparkle: WordAnalysis = {
    word: 'sparkle',
    ipa: '/ˈspɑːr.kəl/',
    partOfSpeech: 'verb / noun (動詞/名詞)',
    chineseMeaning: '閃爍、閃耀、閃閃發光；神采飛揚、氣泡（飲料）',
    morphemes: [
      {
        type: 'root',
        label: '💎 本族語根',
        morpheme: 'spark',
        originalForm: '古英語 spearca',
        meaning: '火花、火星 (spark)',
        category: '原始日耳曼根',
        grammaticalRole: '概念基底'
      },
      {
        type: 'suffix',
        label: '🏷️ 頻動後綴',
        morpheme: '-le',
        originalForm: '-elen / -le (Frequentative)',
        variantNote: '這個字尾放在字根後面，表示動作一直反覆、連續發生，像 sparkle、twinkle、crackle 都有這個字尾',
        meaning: '微小、反覆、頻繁連續 (small, frequent, repeated)',
        category: '語法體態',
        grammaticalRole: '構成頻動動詞/名詞'
      }
    ],
    phonetic: {
      assimilationPath: 'spark + -le (日耳曼頻動反覆後綴) ➔ sparkle (比較: twinkle, trickle, crackle)',
      phoneticAnalysis: '英文裡有一種字尾叫 -le，加在後面表示「這個動作一直重複、連續發生」。像 spark (火花) 加上 -le 就變成 sparkle (連續閃閃發光)；drip (滴水) 加上 -le 變成 dribble (一直滴)；prick (刺一下) 加上 -le 變成 prickle (刺刺的感覺)。',
      ruleKey: '日耳曼 Frequentative 後綴 -le'
    },
    semantic: {
      prefixMeaning: '無前綴',
      rootCoreAction: '火花 (spark)',
      suffixGrammar: '連續反覆頻動 (-le)',
      modernMeaning: '不斷散發細小跳動的光芒；飲料中不斷冒出微小氣泡',
      formulaDisplay: '{ 火花 (spark) } + { 反覆/連續 (-le) } = 閃爍、閃閃發光 (sparkle)',
      literalLogic: '意思就是「不斷冒出一點一點的小火花」，後來也用來說寶石、星星或眼睛閃閃發亮的樣子。'
    },
    familyTree: [
      { word: 'spark', formula: 'spearca', meaning: '火花、觸發' },
      { word: 'sparkling', formula: 'sparkle + -ing', meaning: '閃閃發光的、起泡的 (如 sparkling wine)' },
      { word: 'twinkle', formula: 'twink + -le', meaning: '眨眼、閃爍 (同類頻動後綴)' }
    ],
    memory: {
      cognatesDaily: 'sparkling water (氣泡水), eyes sparkle with joy (眼裡閃爍著喜悅)',
      oneSentenceMnemonic: 'spark (火星) + le (連續) ➔ 連續跳出小火星就是 sparkle (閃爍發光)！',
      etymologicalOrigin: '中古英文 sparklen，是古英文 spearcian 加上表示「一直重複」的字尾 -le 組成的。'
    },
    source: 'preset'
  };
