import { WordAnalysis } from '../../types';

export const unlock: WordAnalysis = {
  word: 'unlock',
  ipa: '/ʌnˈlɑːk/',
  partOfSpeech: 'verb (及物/不及物動詞)',
  chineseMeaning: '開鎖、解鎖；（比喻）解開、釋放（潛力/秘密等）',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 反轉前綴',
      morpheme: 'un-',
      originalForm: 'un- (古英文 on-/un-)',
      variantNote: '這個 un- 是「把動作反過來做」的用法，跟表示「不」的 un- 拼法一樣但來源不同，這裡表示「把鎖上這個動作反過來做」。',
      meaning: '反轉、解除 (reverse an action)',
      category: '動作反轉',
      grammaticalRole: '動詞前綴'
    },
    {
      type: 'root',
      label: '💎 字根',
      morpheme: 'lock',
      originalForm: 'loc (古英文)',
      variantNote: '這是道地的古英文字，意思是「鎖、閂、栓」，跟拉丁文沒有關係，是日耳曼語系自己的詞。',
      meaning: '鎖、閂 (a fastening device)',
      category: '核心概念',
      grammaticalRole: '概念核心'
    }
  ],
  phonetic: {
    assimilationPath: 'un- (反轉) + lock (鎖) ➔ unlock',
    phoneticAnalysis: 'lock 是英文原生詞，un- 加上去完全不會變形。',
    ruleKey: 'un- (反轉義) + 原生英文詞根'
  },
  semantic: {
    prefixMeaning: '反轉、解除 (un-)',
    rootCoreAction: '鎖 (lock)',
    suffixGrammar: '及物/不及物動詞',
    modernMeaning: '把鎖住的東西打開，讓原本被鎖住、限制住的事物可以自由使用或釋放出來',
    formulaDisplay: '{ 反轉 (un-) } + { 鎖 (lock) } = 開鎖、解鎖 (unlock)',
    literalLogic: '把「鎖上」這個動作反過來做，就是「打開」。'
  },
  familyTree: [
    { word: 'lock', formula: '（字根本身）', meaning: '鎖（名詞）；鎖上（動詞）', level: 'Core', tags: ['TOEIC'] },
    { word: 'locker', formula: 'lock + -er', meaning: '置物櫃、更衣室櫃子', level: 'Core', tags: ['TOEIC'] },
    { word: 'padlock', formula: 'pad + lock', meaning: '掛鎖', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'deadlock', formula: 'dead + lock', meaning: '僵局、僵持不下', level: 'TOEFL', tags: ['TOEFL', 'IELTS'] }
  ],
  memory: {
    cognatesDaily: 'unlock the door (開門鎖), unlock one\'s potential (釋放潛力)',
    oneSentenceMnemonic: 'un (反轉) + lock (鎖) ➔ 「把鎖打開」就是 unlock (解鎖)！',
    etymologicalOrigin: 'lock 源自古英文 loc，是道地的英文原生詞；un- 是英文本身的反轉前綴，直接加在前面。',
    visualImagery: '想像拿著鑰匙插進鎖孔，輕輕一轉，「喀」的一聲把門鎖打開——這就是 unlock 的畫面。',
    commonCollocations: ['unlock the door (開門鎖)', 'unlock a phone (解鎖手機)', 'unlock one\'s potential (釋放潛力)'],
    contrastiveTips: 'unlock 強調「把鎖住的東西打開」，可以是實體的鎖，也可以是抽象的潛力或限制；open 泛指「打開」，不限定原本是被鎖住的；release 則偏向「釋放、放開」，不一定跟「鎖」有關。'
  },
  source: 'preset'
};
