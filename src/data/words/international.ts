import { WordAnalysis } from '../../types';

export const international: WordAnalysis = {
    word: 'international',
    ipa: '/ˌɪn.tɚˈnæʃ.ə.nəl/',
    partOfSpeech: 'adjective (形容詞)',
    chineseMeaning: '國際的、國與國之間的',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 前綴',
        morpheme: 'inter-',
        originalForm: 'inter- (拉丁語)',
        meaning: '在...之間 (between)',
        category: '空間/方向',
        grammaticalRole: '前綴'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'nation',
        originalForm: 'natio / nationem (拉丁語)',
        variantNote: '來自拉丁文動詞 nasci（出生）的名詞形式，原意是「出生、血緣群體」，後來才變成「國家、民族」的意思。',
        meaning: '國家、民族 (nation, birth-group)',
        category: '核心概念',
        grammaticalRole: '名詞字根'
      },
      {
        type: 'suffix',
        label: '🏷️ 形容詞字尾',
        morpheme: '-al',
        originalForm: '-alis (拉丁語)',
        variantNote: '放在名詞後面，把它變成「與...有關的」形容詞。',
        meaning: '與...有關的 (relating to)',
        category: '形容詞化',
        grammaticalRole: '形容詞後綴'
      }
    ],
    phonetic: {
      assimilationPath: 'inter- (之間) + natio (出生/民族) + -alis ➔ national ➔ international',
      phoneticAnalysis: '這個字是18世紀哲學家邊沁 (Jeremy Bentham) 直接把 inter- 加在既有的形容詞 national 前面所創造，沒有經過音變，是透明拼接字。',
      ruleKey: 'inter- + national (透明拼接)'
    },
    semantic: {
      prefixMeaning: '在...之間 (inter-)',
      rootCoreAction: '國家、民族 (nation < natio)',
      suffixGrammar: '與...有關的 (-al)',
      modernMeaning: '牽涉到兩個以上國家之間的事務或關係',
      formulaDisplay: '{ 之間 (inter-) } + { 國家 (nation) } + { ...的 (-al) } = 國際的 (international)',
      literalLogic: '字面上就是「在各個國家之間的」，用來形容跨越國界、涉及多國的事物。'
    },
    familyTree: [
      { word: 'nationality', formula: 'nation + -ality', meaning: '國籍', level: 'TOEIC', tags: ['TOEIC'] },
      { word: 'nationwide', formula: 'nation + wide', meaning: '全國性的、遍及全國的', level: 'TOEIC', tags: ['TOEIC'] },
      { word: 'internationalize', formula: 'international + -ize', meaning: '使國際化', level: 'TOEFL', tags: ['TOEFL'] },
      { word: 'multinational', formula: 'multi- (多) + national', meaning: '跨國的、多國的', level: 'TOEIC', tags: ['TOEIC'] },
      { word: 'native', formula: 'nat (出生) + -ive', meaning: '本地的、與生俱來的', level: 'Core', tags: ['TOEIC'] }
    ],
    memory: {
      cognatesDaily: 'international students (國際學生), international trade (國際貿易)',
      oneSentenceMnemonic: 'inter (國與國之間) + national (國家的) ➔ 「在各國之間」就是 international (國際的)！',
      etymologicalOrigin: '18世紀哲學家邊沁 (Jeremy Bentham) 創造，把 inter- 加在 national 前面；nation 源自拉丁文 natio（出生、族群）',
      commonCollocations: [
        'international relations (國際關係)',
        'go international (走向國際化)'
      ],
      contrastiveTips: 'international 強調「國與國之間」的關係或往來；global 則強調「全球性、遍及全世界」的規模，不一定聚焦在國家之間的互動。'
    },
    source: 'preset'
  };
