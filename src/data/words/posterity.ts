import { WordAnalysis } from '../../types';

export const posterity: WordAnalysis = {
    word: 'posterity',
    ipa: '/pɑːˈster.ə.t̬i/',
    partOfSpeech: 'noun (不可數名詞)',
    chineseMeaning: '後代、子孫、後世',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 時間前綴',
        morpheme: 'post-',
        originalForm: 'post (拉丁語)',
        meaning: '在...之後、後來 (after, behind)',
        category: '時間順序',
        grammaticalRole: '時間前綴'
      },
      {
        type: 'suffix',
        label: '🏷️ 比較級中綴',
        morpheme: '-er-',
        originalForm: '-terus',
        variantNote: '古拉丁文表示比較級的字尾，意思是「更...的」。',
        meaning: '更後面的 (further after)',
        category: '比較與層級',
        grammaticalRole: '層級修飾'
      },
      {
        type: 'suffix',
        label: '🏷️ 名詞字尾',
        morpheme: '-ity',
        originalForm: '-itās',
        variantNote: '這個字尾來自古拉丁文，加在形容詞後面會變成抽象名詞，表示一種狀態或性質',
        meaning: '狀態、集合體 (state, condition)',
        category: '抽象名詞',
        grammaticalRole: '集合名詞後綴'
      }
    ],
    phonetic: {
      assimilationPath: 'post (之後) + -terus (比較級) ➔ posterus (後來的) ➔ posteritas ➔ posterity',
      phoneticAnalysis: '加上 -ity 這個字尾以後，重音會跑到倒數第三個音節，原本拉長的音也跟著變短，所以唸起來是 /pɑːˈster.ə.t̬i/。',
      ruleKey: '三音節鬆音化 (-ity 牽引重音)'
    },
    semantic: {
      prefixMeaning: '在時間之後 (post-)',
      rootCoreAction: '更後來的人 (-er-)',
      suffixGrammar: '總體集合 (-ity)',
      modernMeaning: '在目前這代人之後出生的所有未來世代',
      formulaDisplay: '{ 之後 (post-) } + { 比較級 (-er-) } + { 集合體 (-ity) } = 後代、後世 (posterity)',
      literalLogic: '照字面意思是「排在時間更後面那一批人」，後來變成指所有的後代子孫。'
    },
    familyTree: [
      { word: 'posterior', formula: 'post- + -erior (比較級後綴)', meaning: '後部的、其次的' },
      { word: 'postpone', formula: 'post- + pon (放置) + -e', meaning: '延期、推遲 (往後放)' },
      { word: 'postscript', formula: 'post- + script (寫)', meaning: '附言、後記 (P.S.)' },
      { word: 'postgraduate', formula: 'post- + graduate', meaning: '研究生 (畢業之後的學生)' },
      { word: 'predecessor', formula: 'pre- + de + cess + -or', meaning: '前輩、前任 (與 post- 相對的 pre- 字首範例，但非 posterity 的真正反義詞)' },
      { word: 'ancestor', formula: 'ante- (在先) + cess + -or', meaning: '祖先、先人 (posterity 真正的反義詞)' }
    ],
    memory: {
      cognatesDaily: 'preserve for posterity (為後世保存下來), pass down to posterity (傳給後代)',
      oneSentenceMnemonic: 'post (之後) + ity (群體) ➔ 「活在我們之後的群體」就是 posterity (後代子孫)！',
      etymologicalOrigin: '來自古拉丁文 posteritās，這個字是從 posterus（後來的、未來的）變出來的。',
      visualImagery: '想像你把一封寫滿智慧的信放進時空膠囊裡埋起來，等待著在時間線「後面 (post)」出生的「群體 (-ity)」將它挖出來閱讀。',
      commonCollocations: [
        'preserve something for posterity (將某物保存給後代)',
        'leave a legacy for posterity (留給後世的遺產)'
      ],
      contrastiveTips: 'posterity 常用在正式、談「留給後世」的語境（如 preserve for posterity），語氣比較莊重；offspring 和 descendants 是中性字，泛指某個家族、某個人自己的直系子孫，日常語境也能用。'
    },
    source: 'preset'
  };
