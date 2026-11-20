import { WordAnalysis } from '../../types';

export const uncertain: WordAnalysis = {
  word: 'uncertain',
  ipa: '/ʌnˈsɜːr.tən/',
  partOfSpeech: 'adjective (形容詞)',
  chineseMeaning: '不確定的、不肯定的；（天氣/局勢）多變的',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 否定前綴',
      morpheme: 'un-',
      originalForm: 'un- (古英文，日耳曼否定字根)',
      variantNote: '這個 un- 是純粹表示「不」的否定前綴，直接加在借自法文的形容詞 certain 前面，是英文自己組成的字，並不是從拉丁文整個繼承下來的。',
      meaning: '不、非 (not)',
      category: '否定極性',
      grammaticalRole: '形容詞前綴'
    },
    {
      type: 'root',
      label: '💎 字根',
      morpheme: 'certain',
      originalForm: 'certus (拉丁語) ➔ certain (古法語)',
      variantNote: '拉丁文 certus（確定的）本來是動詞 cernere（篩選、辨別、決定）的舊式過去分詞，意思是「已經篩選過、確定下來的」，經古法文借入英文。',
      meaning: '確定的、篩選出來的 (determined, sifted out)',
      category: '核心概念',
      grammaticalRole: '概念核心'
    }
  ],
  phonetic: {
    assimilationPath: 'cernere (篩選、辨別) ➔ 過去分詞 certus ➔ 古法語 certain ➔ un- + certain ➔ uncertain',
    phoneticAnalysis: 'un- 直接加在形容詞 certain 前面，不會有任何拼寫變化，重音維持在第二音節 -cer- 上。',
    ruleKey: 'un- (純否定) + 借用形容詞'
  },
  semantic: {
    prefixMeaning: '不 (un-)',
    rootCoreAction: '確定的 (certain)',
    suffixGrammar: '形容詞',
    modernMeaning: '對某件事情沒有把握，無法肯定它是真的、會發生，或該怎麼做',
    formulaDisplay: '{ 不 (un-) } + { 確定的 (certain) } = 不確定的 (uncertain)',
    literalLogic: '字面上就是「確定」的反面，還沒有篩選、辨別清楚。'
  },
  familyTree: [
    { word: 'certainty', formula: 'certain + -ty', meaning: '確定性、必然的事', level: 'TOEIC', tags: ['TOEIC', 'IELTS'] },
    { word: 'certify', formula: 'cert + -ify', meaning: '證明、認證', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'ascertain', formula: 'a- (ad- 朝向) + certain', meaning: '查明、確定（把事情弄清楚）', level: 'GRE', tags: ['GRE', 'TOEFL'] },
    { word: 'discern', formula: 'dis- (分開) + cern (辨別)', meaning: '辨別、識別（同源字根 cern）', level: 'GRE', tags: ['GRE', 'TOEFL'] },
    { word: 'concern', formula: 'con- (完全) + cern (辨別)', meaning: '關心、擔憂；事務（同源字根 cern）', level: 'Core', tags: ['TOEIC'] }
  ],
  memory: {
    cognatesDaily: 'uncertain future (不確定的未來), feel uncertain about something (對某事感到不確定)',
    oneSentenceMnemonic: 'un (不) + certain (確定的) ➔ 「還沒篩選清楚、不確定」就是 uncertain！',
    etymologicalOrigin: 'certain 源自拉丁文 certus（cernere「篩選、辨別」的過去分詞），經古法文進入英文；un- 是純否定前綴。',
    visualImagery: '想像一條分岔路口立著一個模糊不清的路標，讓人猶豫不決、無法篩選出正確方向——這就是 uncertain 的感覺。',
    commonCollocations: ['an uncertain future (不確定的未來)', 'feel uncertain about (對...感到不確定)', 'in uncertain times (在動盪不安的時期)'],
    contrastiveTips: 'uncertain 強調「對事實或結果沒有把握」；doubtful 語氣更強，帶有「懷疑、覺得不太可能」的意味；ambiguous 則是指「本身模稜兩可、可以有多種解讀」，重點在事物本身而非人的心理狀態。'
  },
  source: 'preset'
};
