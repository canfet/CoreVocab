import { WordAnalysis } from '../../types';

export const undo: WordAnalysis = {
  word: 'undo',
  ipa: '/ʌnˈduː/',
  partOfSpeech: 'verb (及物動詞)',
  chineseMeaning: '撤銷、復原（動作/設定）；解開（綁好的東西）；（文學用法）使毀滅',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 反轉前綴',
      morpheme: 'un-',
      originalForm: 'un- (古英文 on-/un-)',
      variantNote: '這個 un- 是「把動作反過來做」的用法，跟表示「不」的 un- 拼法一樣但來源不同，這裡表示「把已經做過的動作倒回去」。',
      meaning: '反轉、解除 (reverse an action)',
      category: '動作反轉',
      grammaticalRole: '動詞前綴'
    },
    {
      type: 'root',
      label: '💎 字根',
      morpheme: 'do',
      originalForm: 'dōn (古英文)',
      variantNote: '這是英文裡最基本的原生動詞之一，意思就是「做」，跟德文的 tun（做）是同一個日耳曼語系的家族成員。',
      meaning: '做 (to do, perform)',
      category: '核心動作',
      grammaticalRole: '動作中心'
    }
  ],
  phonetic: {
    assimilationPath: 'un- (反轉) + do (做) ➔ undo',
    phoneticAnalysis: 'do 是英文最基本的原生動詞，un- 加上去完全不會變形。',
    ruleKey: 'un- (反轉義) + 原生英文詞根'
  },
  semantic: {
    prefixMeaning: '反轉、解除 (un-)',
    rootCoreAction: '做 (do)',
    suffixGrammar: '及物動詞',
    modernMeaning: '把已經完成的動作或設定倒回去，讓一切回到還沒做之前的樣子',
    formulaDisplay: '{ 反轉 (un-) } + { 做 (do) } = 撤銷、復原 (undo)',
    literalLogic: '把「做」這個動作反過來，就是把已完成的事情逆轉回去。'
  },
  familyTree: [
    { word: 'redo', formula: 're- (重新) + do', meaning: '重做', level: 'Core', tags: ['TOEIC'] },
    { word: 'overdo', formula: 'over- (過度) + do', meaning: '做得過火、過度', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'outdo', formula: 'out- (超越) + do', meaning: '勝過、超越', level: 'TOEFL', tags: ['TOEFL', 'IELTS'] },
    { word: 'undoing', formula: 'undo + -ing', meaning: '（導致失敗或毀滅的）致命傷、根源', level: 'GRE', tags: ['GRE'] }
  ],
  memory: {
    cognatesDaily: 'undo a mistake (撤銷一個錯誤), press Ctrl+Z to undo (按 Ctrl+Z 復原)',
    oneSentenceMnemonic: 'un (反轉) + do (做) ➔ 「把做過的事情倒回去」就是 undo (撤銷)！',
    etymologicalOrigin: 'do 源自古英文 dōn，是英文最基本的原生動詞；un- 是英文本身的反轉前綴。',
    visualImagery: '想像在電腦上打錯字後，按下 Ctrl+Z，畫面瞬間倒退回打錯之前的樣子——這就是 undo 最直覺的畫面。',
    commonCollocations: ['undo a mistake (撤銷錯誤)', 'undo the damage (彌補損害)', 'press Ctrl+Z to undo (按下復原快捷鍵)'],
    contrastiveTips: 'undo 強調「把已完成的動作逆轉回原本的狀態」，常見於電腦操作或補救錯誤；cancel 是「取消尚未發生或正在進行的事」，不一定牽涉逆轉已完成的動作；reverse 泛指「使方向或順序相反」，用法範圍更廣。'
  },
  source: 'preset'
};
