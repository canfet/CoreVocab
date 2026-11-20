import { WordAnalysis } from '../../types';

export const postgraduate: WordAnalysis = {
    word: 'postgraduate',
    ipa: '/ˌpoʊstˈɡrædʒ.u.ət/',
    partOfSpeech: 'noun / adjective (名詞/形容詞)',
    chineseMeaning: 'n. 研究生 adj. 研究生的、大學畢業後進修的',
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
        label: '💎 核心字根',
        morpheme: 'grad',
        originalForm: 'gradus / gradī',
        variantNote: '拉丁文 gradus 原意是「一步、階梯的一階」，graduate 這個字就是從這個字根加上動詞化字尾組成，字面是「一步一步往上走、拿到學位的那一步」。',
        meaning: '步伐、階級、學位等級 (step, degree)',
        category: '核心動作',
        grammaticalRole: '動作中心'
      },
      {
        type: 'suffix',
        label: '🏷️ 名詞/形容詞字尾',
        morpheme: '-ate',
        originalForm: '-atus (拉丁過去分詞字尾)',
        variantNote: '這個字尾放在字根後面，可以把字變成動詞、名詞或形容詞，這裡表示「已完成某個階段/取得學位的人」。',
        meaning: '已完成...的（人/狀態）',
        category: '名詞化',
        grammaticalRole: '名詞/形容詞化'
      }
    ],
    phonetic: {
      assimilationPath: 'post- (之後) + gradus (階梯/步伐) ➔ graduate (取得學位的人) ➔ postgraduate',
      phoneticAnalysis: 'post- 直接加在已經是完整英文單字的 graduate 前面，兩部分沒有經過音變，直接複合。',
    },
    semantic: {
      prefixMeaning: '在...之後 (post-)',
      rootCoreAction: '完成學位階段的人 (graduate)',
      suffixGrammar: '名詞/形容詞',
      modernMeaning: '在取得大學學士學位之後，繼續攻讀碩士或博士學位的人，或形容這類進修課程',
      formulaDisplay: '{ 之後 (post-) } + { 已取得學位的人 (graduate) } = 研究生、研究所的 (postgraduate)',
      literalLogic: '字面就是「大學畢業之後（繼續念書的人）」，所以指研究生或研究所階段。'
    },
    familyTree: [
      { word: 'graduate', formula: 'grad (階梯/步伐) + -ate', meaning: '畢業生；畢業' },
      { word: 'undergraduate', formula: 'under- (在下) + graduate', meaning: '大學部學生、大學生' },
      { word: 'gradual', formula: 'grad (階梯) + -ual', meaning: '逐漸的、漸進的' },
      { word: 'degree', formula: 'de- (向下) + gree (階梯，grad 的變體)', meaning: '學位；程度' },
      { word: 'postwar', formula: 'post- (之後) + war (戰爭)', meaning: '戰後的' }
    ],
    memory: {
      cognatesDaily: 'graduate (畢業生), undergraduate (大學生), gradual (逐漸的)',
      oneSentenceMnemonic: 'post (之後) + graduate (畢業生) ➔ 「大學畢業之後還在念書的人」就是 postgraduate (研究生)！',
      etymologicalOrigin: '拉丁字首 post- 加上源自拉丁文 gradus（階梯、步伐）的 graduate 組合而成。',
      commonCollocations: [
        'postgraduate studies/program (研究所課程)',
        'postgraduate degree (研究所學位)',
        'pursue postgraduate education (攻讀研究所)'
      ],
      contrastiveTips: 'postgraduate（英式常用）大致等於美式英文常說的 graduate student；undergraduate 則是指「還沒拿到學士學位」的大學部學生，兩者剛好是求學階段前後的對照。'
    },
    source: 'preset'
  };
