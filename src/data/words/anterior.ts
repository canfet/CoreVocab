import { WordAnalysis } from '../../types';

export const anterior: WordAnalysis = {
    word: 'anterior',
    ipa: '/ænˈtɪr.i.ɚ/',
    partOfSpeech: 'adjective (形容詞，常用於解剖學/正式文體)',
    chineseMeaning: '前面的、前方的（尤指解剖學上人體或器官的前側）；（時間上）較早的',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 時間/空間前綴',
        morpheme: 'ante-',
        originalForm: 'ante (拉丁語)',
        meaning: '在...之前、在前方 (before, in front of)',
        category: '時間/空間順序',
        grammaticalRole: '空間前綴'
      },
      {
        type: 'suffix',
        label: '🏷️ 比較級字尾',
        morpheme: '-erior',
        originalForm: '-ior (拉丁比較級字尾)',
        variantNote: '古拉丁文表示「更...的」比較級字尾，直接加在 ante- 後面變成 anterior，整個字是從拉丁文原封不動借進英文的，構詞方式和 posterior（post- + -erior）完全對稱。',
        meaning: '更...的 (comparative degree)',
        category: '比較與層級',
        grammaticalRole: '比較級形容詞化'
      }
    ],
    phonetic: {
      assimilationPath: 'ante- (之前) + -ior (比較級) ➔ anterior (更前面的) ➔ 拉丁文整字借入英文',
      phoneticAnalysis: '這個字在拉丁文裡本來就是一個完整的比較級形容詞，整個直接被英文借用，發音也是照英文拼字規則唸，沒有經過額外的音變。',
      ruleKey: '拉丁比較級整字借用'
    },
    semantic: {
      prefixMeaning: '在前方 (ante-)',
      rootCoreAction: '（無獨立字根，前綴與比較級字尾直接構成整字）',
      suffixGrammar: '比較級形容詞 (-erior)',
      modernMeaning: '相對於另一個部位或時間點，位置更靠前方，或時間上更早發生',
      formulaDisplay: '{ 前方 (ante-) } + { 更...的 (-erior) } = 前面的、前方的 (anterior)',
      literalLogic: '字面意思就是「更靠前面的」，在解剖學上專門用來說「身體或器官比較靠前的那一側」，和說「比較靠後面」的 posterior 剛好相對。'
    },
    familyTree: [
      { word: 'posterior', formula: 'post- (在後) + -erior (更...的)', meaning: '後面的、後側的 (anterior 的反義詞)' },
      { word: 'anteroom', formula: 'ante- (之前) + room (房間)', meaning: '接待室、前廳' },
      { word: 'antecedent', formula: 'ante- (之前) + ced (走) + -ent', meaning: '前事、先例' },
      { word: 'interior', formula: 'inter- ➔ in- (裡面) + -erior', meaning: '內部的' },
      { word: 'exterior', formula: 'exter- (外面) + -ior', meaning: '外部的' }
    ],
    memory: {
      cognatesDaily: 'interior (內部的), exterior (外部的), posterior (後方的)',
      oneSentenceMnemonic: 'ante (之前) + erior (更...的) ➔ 「更靠前面的」就是 anterior (前方的)！',
      etymologicalOrigin: '直接借自拉丁文 anterior，是 ante（之前）的比較級形式。',
      commonCollocations: [
        'the anterior part of the brain (大腦前部)',
        'anterior to (在...之前、位於...前方)'
      ],
      contrastiveTips: 'anterior 是比較正式、常用於解剖學或學術文體的用字；日常口語要說「前面的」通常直接用 front。anterior 和 posterior 是一組固定的解剖學反義詞，最好一起記。'
    },
    source: 'preset'
  };
