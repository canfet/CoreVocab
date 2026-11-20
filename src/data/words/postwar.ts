import { WordAnalysis } from '../../types';

export const postwar: WordAnalysis = {
    word: 'postwar',
    ipa: '/ˌpoʊstˈwɔːr/',
    partOfSpeech: 'adjective (形容詞)',
    chineseMeaning: '戰後的（發生在某場戰爭結束之後的）',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 時間前綴',
        morpheme: 'post-',
        originalForm: 'post (拉丁語)',
        meaning: '在...之後 (after)',
        category: '時間順序',
        grammaticalRole: '時間前綴'
      },
      {
        type: 'root',
        label: '💎 核心語詞',
        morpheme: 'war',
        originalForm: 'werre (古法語/古高地德語)',
        variantNote: 'war 這個字進入英文的時間比較晚（中古英文時期，經由法語 werre 借入），本身不是拉丁字根，但這裡直接和拉丁字首 post- 組合成新字，中間沒有音變。',
        meaning: '戰爭 (war)',
        category: '事件狀態',
        grammaticalRole: '名詞中心'
      }
    ],
    phonetic: {
      assimilationPath: 'post- (之後) + war (戰爭) ➔ 直接複合，無音變 ➔ postwar',
      phoneticAnalysis: 'post- 直接加在英文詞 war 前面，兩部分各自唸自己原本的音，沒有經過同化。',
    },
    semantic: {
      prefixMeaning: '在...之後 (post-)',
      rootCoreAction: '戰爭 (war)',
      suffixGrammar: '形容詞',
      modernMeaning: '描述某場戰爭結束之後的時期、社會或事物',
      formulaDisplay: '{ 之後 (post-) } + { 戰爭 (war) } = 戰後的 (postwar)',
      literalLogic: '字面就是「戰爭之後的」，常用來形容一段歷史時期，例如二戰後的重建與經濟成長。'
    },
    familyTree: [
      { word: 'prewar', formula: 'pre- (之前) + war', meaning: '戰前的 (postwar 的反義詞)' },
      { word: 'wartime', formula: 'war + time', meaning: '戰時' },
      { word: 'postgraduate', formula: 'post- (之後) + graduate (畢業)', meaning: '研究生' },
      { word: 'postmodern', formula: 'post- (之後) + modern (現代的)', meaning: '後現代的' }
    ],
    memory: {
      cognatesDaily: 'prewar (戰前的), wartime (戰時), postmodern (後現代的)',
      oneSentenceMnemonic: 'post (之後) + war (戰爭) ➔ 「戰爭結束之後」就是 postwar (戰後的)！',
      etymologicalOrigin: '拉丁字首 post- 加上英文詞 war 直接組合而成，屬於20世紀常用的複合形容詞。',
      commonCollocations: [
        'postwar reconstruction (戰後重建)',
        'postwar economic boom (戰後經濟繁榮)',
        'postwar era/period (戰後時期)'
      ],
      contrastiveTips: 'postwar 和 prewar 是一組意思相反的固定搭配，常一起出現在歷史或經濟的討論中，例如比較「戰前」與「戰後」的社會狀況。'
    },
    source: 'preset'
  };
