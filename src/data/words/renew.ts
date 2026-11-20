import { WordAnalysis } from '../../types';

export const renew: WordAnalysis = {
  word: 'renew',
  ipa: '/rɪˈnuː/',
  partOfSpeech: 'verb (及物/不及物動詞)',
  chineseMeaning: '更新、續訂（合約/會員）；使恢復活力、重新開始',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 前綴',
      morpheme: 're-',
      originalForm: 're- (拉丁語)',
      variantNote: 're- 本來是拉丁前綴，但很早就被英文借用，直接加在道地英文字 new 前面，完全不需要音變。',
      meaning: '再次、重新 (again, anew)',
      category: '重複',
      grammaticalRole: '動詞前綴'
    },
    {
      type: 'root',
      label: '💎 字根',
      morpheme: 'new',
      originalForm: 'nīwe (古英文)',
      variantNote: '這是道地的古英文字，本身跟拉丁文沒有借用關係，但很巧的是，英文 new 和拉丁文 novus（新的）其實是同一個更古老的原始印歐語字根演變出來的遠親，只是各自獨立傳下來，不是互相借用的。',
      meaning: '新的 (new)',
      category: '核心概念',
      grammaticalRole: '概念核心'
    }
  ],
  phonetic: {
    assimilationPath: 're- (重新) + new (新的) ➔ renew (無音變，直接拼接)',
    phoneticAnalysis: 'new 是英文自己的字，re- 加上去完全不會變形，唸法單純。',
    ruleKey: 're- + 原生英文詞根 (零音變)'
  },
  semantic: {
    prefixMeaning: '重新 (re-)',
    rootCoreAction: '新的 (new)',
    suffixGrammar: '及物/不及物動詞',
    modernMeaning: '讓已經到期或變舊的東西，重新變得像新的一樣，或延長它的有效期限',
    formulaDisplay: '{ 重新 (re-) } + { 新的 (new) } = 更新、續訂 (renew)',
    literalLogic: '字面上就是「讓它重新變新」，可以是合約續約，也可以是精神上重新振作。'
  },
  familyTree: [
    { word: 'renewal', formula: 'renew + -al', meaning: '更新、續訂（名詞）', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'novel', formula: 'nov (新) + -el', meaning: '小說；新奇的（形容詞，源自拉丁文 novus）', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'innovate', formula: 'in- (使) + nov (新) + -ate', meaning: '創新、革新', level: 'TOEFL', tags: ['TOEFL', 'IELTS'] },
    { word: 'novice', formula: 'nov (新) + -ice', meaning: '新手、初學者', level: 'TOEFL', tags: ['TOEFL', 'GRE'] }
  ],
  memory: {
    cognatesDaily: 'renew a contract (續約), renew one\'s passport (換發護照), renewable energy (可再生能源)',
    oneSentenceMnemonic: 're (重新) + new (新的) ➔ 「讓它重新變新」就是 renew (更新、續訂)！',
    etymologicalOrigin: 'new 源自古英文 nīwe，是道地的英文原生詞；renew 是拉丁前綴 re- 直接加在這個英文字上組成的。',
    visualImagery: '想像護照快過期了，你到window口重新申請一本，蓋上新的日期章，一切又變得「新」的了。',
    commonCollocations: ['renew a contract / membership (續約/續會員資格)', 'renew one\'s passport (換發護照)', 'renew one\'s energy (恢復活力)'],
    contrastiveTips: 'renew 強調「延長效期或讓舊東西重新變新」，常用於合約、證件；refresh 偏向「短暫地恢復精神或更新畫面資料」；revive 則是「讓已經衰弱、幾乎消失的東西重新活過來」，語氣更強烈。'
  },
  source: 'preset'
};
