import { WordAnalysis } from '../../types';

export const foresee: WordAnalysis = {
    word: 'foresee',
    ipa: '/fɔːrˈsiː/',
    partOfSpeech: 'verb (及物動詞，不規則動詞：foresee - foresaw - foreseen)',
    chineseMeaning: '預見、預知（在事情發生之前就看出來會發生）',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 原生時間前綴',
        morpheme: 'fore-',
        originalForm: 'fore (古英文)',
        variantNote: 'fore- 不是拉丁字首，而是英文自己（日耳曼語系）原本就有的字，來自古英文的 fore，意思和 before、for 有關。它跟拉丁文的 ante-、pre- 意思很像，但是完全不同的語言來源。',
        meaning: '事先、預先 (beforehand, in advance)',
        category: '時間順序',
        grammaticalRole: '原生前綴'
      },
      {
        type: 'root',
        label: '💎 核心動詞',
        morpheme: 'see',
        originalForm: 'sēon (古英文)',
        meaning: '看見、看到 (to see, perceive)',
        category: '感官知覺',
        grammaticalRole: '動作中心'
      }
    ],
    phonetic: {
      assimilationPath: 'fore- (事先) + see (看見) ➔ 直接複合，無音變 ➔ foresee',
      phoneticAnalysis: 'fore- 和 see 都是英文本來就有的字，直接組合在一起，沒有經過拉丁文常見的那種音變或同化。有趣的是，fore- 這個字追溯到很古老的原始印歐語詞根 *per-（向前），拉丁文的 pro-、per- 其實也是從同一個老祖先詞根分出來的，只是各自演變成完全不同的字。',
    },
    semantic: {
      prefixMeaning: '事先、預先 (fore-)',
      rootCoreAction: '看見 (see)',
      suffixGrammar: '及物動詞',
      modernMeaning: '在事情實際發生之前，就憑判斷或直覺看出它將會發生',
      formulaDisplay: '{ 事先 (fore-) } + { 看見 (see) } = 預見、預知 (foresee)',
      literalLogic: '字面意思就是「事先看到」，也就是還沒發生就先看出來，所以是「預見」。'
    },
    familyTree: [
      { word: 'foresight', formula: 'fore- (事先) + sight (視力/看見)', meaning: '先見之明、遠見' },
      { word: 'foreseeable', formula: 'foresee + -able (可...的)', meaning: '可預見的（常用於 in the foreseeable future）' },
      { word: 'unforeseen', formula: 'un- (不) + foreseen', meaning: '未預見到的、意料之外的' },
      { word: 'forecast', formula: 'fore- (事先) + cast (投擲/推算)', meaning: '預測' },
      { word: 'foretell', formula: 'fore- (事先) + tell (說)', meaning: '預言' }
    ],
    memory: {
      cognatesDaily: 'foresight (遠見), foreseeable future (可預見的未來), unforeseen circumstances (未能預見的情況)',
      oneSentenceMnemonic: 'fore (事先) + see (看見) ➔ 「事情發生之前就先看到」就是 foresee (預見)！',
      etymologicalOrigin: '古英文本土組合字，fore（事先）+ sēon（看），從中古英文時期就已經這樣使用。',
      commonCollocations: [
        'foresee a problem/risk (預見問題/風險)',
        'in the foreseeable future (在可預見的未來)',
        'no one could have foreseen it (沒有人能預見這件事)'
      ],
      contrastiveTips: 'ante- 是拉丁字首，常出現在比較正式、書面的字裡（像 antecedent, anterior）；fore- 是英文原生字首，出現在很多日常動詞裡（像 foresee, forecast, foretell），意思相近但來源完全不同，用起來也比 ante- 更生活化、更口語。'
    },
    source: 'preset'
  };
