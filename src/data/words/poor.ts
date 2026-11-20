import { WordAnalysis } from '../../types';

export const poor: WordAnalysis = {
    word: 'poor',
    ipa: '/pʊr/',
    partOfSpeech: 'adjective (形容詞)',
    chineseMeaning: '貧窮的、貧困的、劣質的、可憐的',
    morphemes: [
      {
        type: 'root',
        label: '💎 古法語/拉丁語源',
        morpheme: 'poor',
        originalForm: '古法語 povre / 拉丁語 pauper',
        variantNote: '來自古拉丁文的老組合字 pau-（少）加上 parere（生產、產出）。',
        meaning: '產出極少、收成微薄的 (producing little, scanty)',
        category: '古典語源',
        grammaticalRole: '語義核心本體'
      }
    ],
    phonetic: {
      assimilationPath: '拉丁語 pauper (pau- 少 + parere 生產) ➔ 古法語 povre / poure ➔ 中古英語 poor',
      phoneticAnalysis: 'poor 這個字不是用現代英文的字首加字根拼出來的，而是直接從古法語借過來的一整個字。它原本的古拉丁文長相是 pauper，是很久很久以前的語言裡「少、小」(*pau-) 和「生產、生育」(*per-) 兩個字合起來的，原本的意思是「產出很少的」。古羅馬時代用來形容農作物收成很差、窮困的樣子，後來變成古法語的 povre，母音變得比較輕，再進入中古英文變成 poor。',
      ruleKey: '古法語單純借詞 & 拉丁語 pauper 語源'
    },
    semantic: {
      prefixMeaning: '無現代派生前綴 (源自古拉丁複合 pau- 少 + parere 產出)',
      rootCoreAction: '產出微薄 / 匱乏 (*pau- + *per-)',
      suffixGrammar: '形容詞本體',
      modernMeaning: '缺乏金錢、物資或財富；品質低劣；令人同情可憐的',
      formulaDisplay: '拉丁語 { pau- (少) } + { parere (生產) } = pauper ➔ 古法語 povre ➔ poor (貧窮的)',
      literalLogic: '字面上的意思是「產出很少、收成很少的」。在古羅馬那個以農業為主的社會，專門用來形容收成很差的窮苦農夫，後來就變成泛指「缺東缺西、貧窮」，也用來說「讓人覺得可憐」。'
    },
    familyTree: [
      { word: 'pauper', formula: '拉丁語原型 pauper', meaning: '貧民、赤貧者、靠救濟度日者' },
      { word: 'poverty', formula: 'povre + -ty (名詞尾)', meaning: '貧窮、貧困、物資匱乏' },
      { word: 'impoverish', formula: 'in- (使動) + pover + -ish', meaning: '使貧困、使枯竭、削弱' },
      { word: 'paucity', formula: 'paucus (少) + -ity', meaning: '少數、缺乏、稀少性' }
    ],
    memory: {
      cognatesDaily: 'poverty (貧窮), impoverish (使貧困), pauper (貧民), paucity (缺乏)',
      oneSentenceMnemonic: '【Poor】源自拉丁語 pauper（少 pau + 生產 par）➔ 產出極少就是「貧窮的」！同源於 poverty 與 impoverish！',
      etymologicalOrigin: '古拉丁文 pauper ➔ 古法語 povre ➔ 中古英語 poor',
      visualImagery: '想像古羅馬農夫在貧瘠的土地上辛勤耕作，收成卻只有寥寥數顆麥穗（pau- 少 + parere 產出）。',
      commonCollocations: ['poor quality (劣質)', 'poor health (健康狀況欠佳)', 'poor judgment (判斷失誤)'],
      contrastiveTips: 'poor 是形容詞；它的名詞是 poverty（貧窮）；如果要說「讓...變窮」這個動作，就用動詞 impoverish。'
    },
    source: 'preset',
    isAssembled: false
  };
