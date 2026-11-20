import { WordAnalysis } from '../../types';

export const anteroom: WordAnalysis = {
    word: 'anteroom',
    ipa: '/ˈæn.t̬iˌruːm/',
    partOfSpeech: 'noun (名詞)',
    chineseMeaning: '接待室、前廳、候見室（通往主要房間之前的小房間）',
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
        type: 'root',
        label: '💎 核心語詞',
        morpheme: 'room',
        originalForm: 'rūm (古英文)',
        variantNote: '這個字本身就是完整的英文單字，直接跟拉丁字首 ante- 黏在一起組成新字，中間沒有經過任何音變。',
        meaning: '房間、空間 (room, space)',
        category: '空間場所',
        grammaticalRole: '名詞中心'
      }
    ],
    phonetic: {
      assimilationPath: 'ante- (之前) + room (房間) ➔ 直接複合，無音變 ➔ anteroom',
      phoneticAnalysis: '這是一個很直接的組合字：拉丁文字首 ante- 直接加在英文原生單字 room 前面，兩個部分各自唸自己原本的音，中間沒有任何同化或省略。',
    },
    semantic: {
      prefixMeaning: '在主要房間之前 (ante-)',
      rootCoreAction: '房間、空間 (room)',
      suffixGrammar: '複合名詞',
      modernMeaning: '進入主要房間、辦公室或會議室之前，用來等候或緩衝的小房間',
      formulaDisplay: '{ 之前 (ante-) } + { 房間 (room) } = 接待室、前廳 (anteroom)',
      literalLogic: '字面就是「在（正式房間）之前的房間」，所以引申為進門後、正廳之前的緩衝空間，像是等候室或接待室。'
    },
    familyTree: [
      { word: 'antechamber', formula: 'ante- + chamber (房間，法文借詞)', meaning: '前廳、接待室 (與 anteroom 幾乎同義)' },
      { word: 'antenatal', formula: 'ante- (之前) + natal (出生的)', meaning: '產前的' },
      { word: 'antebellum', formula: 'ante- (之前) + bellum (戰爭)', meaning: '戰前的（尤指美國南北戰爭前）' },
      { word: 'anteroom', formula: 'ante- + room', meaning: '接待室、前廳' }
    ],
    memory: {
      cognatesDaily: 'antenatal (產前的), antebellum (戰前的), waiting room (等候室)',
      oneSentenceMnemonic: 'ante (之前) + room (房間) ➔ 「正式房間之前的那個房間」就是 anteroom (接待室)！',
      etymologicalOrigin: '拉丁字首 ante- 直接加上英文本土單字 room 組合而成，屬於較晚期（19世紀）才出現的複合字。',
      visualImagery: '想像走進一棟豪宅，大廳的門還沒打開之前，你先被帶進一間放著沙發、讓你稍作等候的小房間——那就是 anteroom。',
      commonCollocations: [
        'wait in the anteroom (在接待室等候)',
        'the anteroom to the main hall (通往主廳的前廳)'
      ],
      contrastiveTips: 'anteroom 和 antechamber 意思幾乎一樣，都指「正廳之前的小房間」；antechamber 語氣更古典、常用在描述宮殿或古老建築，anteroom 則較常用於一般辦公室或現代場合。'
    },
    source: 'preset'
  };
