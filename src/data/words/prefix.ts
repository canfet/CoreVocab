import { WordAnalysis } from '../../types';

export const prefix: WordAnalysis = {
  word: 'prefix',
  ipa: '名詞 /ˈpriː.fɪks/；動詞 /ˌpriːˈfɪks/',
  partOfSpeech: 'noun (可數名詞) / verb (及物動詞)',
  chineseMeaning: '前綴、字首；（動）在...前面加上',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 前綴',
      morpheme: 'pre-',
      originalForm: 'prae- (拉丁語)',
      variantNote: '這個字本身就是用「前綴」這個概念造出來的，pre- 沒有音變，直接接在字根前面，非常適合拿來記住「前綴」這個詞彙本身的意思。',
      meaning: '在...之前 (before)',
      category: '時間/空間順序',
      grammaticalRole: '前綴'
    },
    {
      type: 'root',
      label: '💎 字根',
      morpheme: 'fix',
      originalForm: 'figere / fixus (拉丁語)',
      variantNote: '拉丁文動詞 figere（釘、固定）的過去分詞是 fixus，意思是「已經固定住的」，英文直接借用這個分詞形態當作字根。',
      meaning: '固定、釘住 (to fasten, fix)',
      category: '核心動作',
      grammaticalRole: '動作中心'
    }
  ],
  phonetic: {
    assimilationPath: 'prae- (之前) + figere ➔ 過去分詞 fixus ➔ 晚期拉丁文 praefixum ➔ 英文 prefix',
    phoneticAnalysis: '名詞用法重音在前面 /ˈpriː.fɪks/，動詞用法（在...前面加上）重音則常挪到後面 /priːˈfɪks/，是英文常見的「名詞前重音、動詞後重音」現象。',
    ruleKey: 'pre- + fix (名詞/動詞重音轉移)'
  },
  semantic: {
    prefixMeaning: '在...之前 (pre-)',
    rootCoreAction: '固定 (fix)',
    suffixGrammar: '名詞 / 及物動詞',
    modernMeaning: '固定加在一個字最前面、用來改變或增添意思的一小段拼字單位，也可以當動詞指「加在前面」這個動作',
    formulaDisplay: '{ 之前 (pre-) } + { 固定 (fix) } = 前綴、字首 (prefix)',
    literalLogic: '字面上就是「固定在前面的東西」，正好精準地描述了它自己的功能。'
  },
  familyTree: [
    { word: 'affix', formula: 'af- (ad- 朝向) + fix', meaning: '附加、黏貼；詞綴（前綴+後綴的統稱）', level: 'TOEFL', tags: ['TOEFL', 'GRE'] },
    { word: 'suffix', formula: 'suf- (sub- 在下方) + fix', meaning: '後綴、字尾（固定在後面的東西）', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'fixture', formula: 'fix + -ture', meaning: '固定裝置；（球賽）賽程', level: 'TOEFL', tags: ['TOEFL', 'IELTS'] },
    { word: 'fixed', formula: 'fix + -ed', meaning: '固定的、不變的', level: 'Core', tags: ['TOEIC'] }
  ],
  memory: {
    cognatesDaily: 'add a prefix (加上前綴), prefix a word with re- (在字前面加上 re-)',
    oneSentenceMnemonic: 'pre (在前面) + fix (固定) ➔ 「固定在字最前面的東西」就是 prefix (前綴)！',
    etymologicalOrigin: '來自晚期拉丁文 praefixum（prae- + figere「固定、釘」的過去分詞 fixus）。',
    visualImagery: '想像把一塊小磁鐵（pre-）固定貼在一個大字塊的最前端，組成一個新的意思——這就是 prefix 這個字自己在示範的畫面。',
    commonCollocations: ['add a prefix to a word (在字前加上前綴)', 'a common prefix (常見的前綴)', 'prefix and suffix (前綴與後綴)'],
    contrastiveTips: 'prefix 專指「加在字首的詞綴」；suffix 是「加在字尾的詞綴」，兩者位置正好相反；root（字根）則是承載核心意義的中心部分，前綴和後綴都是依附在字根上。'
  },
  source: 'preset'
};
