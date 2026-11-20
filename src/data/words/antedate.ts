import { WordAnalysis } from '../../types';

export const antedate: WordAnalysis = {
    word: 'antedate',
    ipa: '/ˈæn.t̬iˌdeɪt/',
    partOfSpeech: 'verb (及物動詞)',
    chineseMeaning: '早於（某事發生）、比實際日期更早；把日期填得比實際更早（倒填日期）',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 時間前綴',
        morpheme: 'ante-',
        originalForm: 'ante (拉丁語)',
        meaning: '在...之前 (before, earlier than)',
        category: '時間順序',
        grammaticalRole: '時間前綴'
      },
      {
        type: 'root',
        label: '💎 核心語詞',
        morpheme: 'date',
        originalForm: 'data (拉丁語, "給定的" ➔ datum 的陰性分詞，原指信件上寫的「給予日期」)',
        variantNote: 'date 這個字本身也是從拉丁文借來的，原意是書信上寫「於某日給出」的日期格式，後來直接變成英文的「日期」一詞，這裡再加上 ante- 組成新字。',
        meaning: '日期 (date, day given)',
        category: '時間標記',
        grammaticalRole: '動詞化名詞'
      }
    ],
    phonetic: {
      assimilationPath: 'ante- (之前) + date (日期) ➔ 直接複合，無音變 ➔ antedate',
      phoneticAnalysis: '這個字是把英文原有的名詞 date 直接動詞化，再加上拉丁字首 ante-，兩部分各自唸自己原本的音，中間沒有經過同化。',
    },
    semantic: {
      prefixMeaning: '早於、在...之前 (ante-)',
      rootCoreAction: '標上日期 (date)',
      suffixGrammar: '及物動詞',
      modernMeaning: '在時間上比某個事件更早發生，或是把文件上的日期故意寫得比實際簽署日更早',
      formulaDisplay: '{ 之前 (ante-) } + { 日期 (date) } = 早於...、倒填日期 (antedate)',
      literalLogic: '字面意思是「標上比較早的日期」，所以可以指「這件事其實比那件事早發生」，也可以指「故意把文件日期寫得比實際更早」。'
    },
    familyTree: [
      { word: 'update', formula: 'up- (向上/更新) + date', meaning: '更新、最新資訊' },
      { word: 'outdated', formula: 'out- (過時) + date + -ed', meaning: '過時的、舊式的' },
      { word: 'postdate', formula: 'post- (之後) + date', meaning: '晚於...、把日期填得比實際更晚 (與 antedate 相對)' },
      { word: 'antebellum', formula: 'ante- (之前) + bellum (戰爭)', meaning: '戰前的' }
    ],
    memory: {
      cognatesDaily: 'update (更新), outdated (過時的), postdate a check (把支票填晚一點的日期)',
      oneSentenceMnemonic: 'ante (之前) + date (日期) ➔ 「把日期寫得更早」就是 antedate (早於實際日期)！',
      etymologicalOrigin: '由拉丁字首 ante- 加上已經融入英文的 date（源自拉丁文 data）組合而成。',
      commonCollocations: [
        'antedate an event by decades (比某事件早了幾十年)',
        'antedate a check/document (把支票或文件倒填日期)'
      ],
      contrastiveTips: 'antedate 是「比實際更早」，postdate 是「比實際更晚」，兩個字剛好相反，很適合放在一起記。'
    },
    source: 'preset'
  };
