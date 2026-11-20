import { WordAnalysis } from '../../types';

export const react: WordAnalysis = {
  word: 'react',
  ipa: '/riˈækt/',
  partOfSpeech: 'verb (不及物動詞，常接 to)',
  chineseMeaning: '反應、回應；（化學）起反應',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 前綴',
      morpheme: 're-',
      originalForm: 're- (拉丁語)',
      variantNote: 're- 在這裡表示「回應」的意思，強調這個動作是針對前面已經發生的事情所做出的回饋，而不是憑空發生的。',
      meaning: '回、對...做出回應 (back, in response)',
      category: '回應/反饋',
      grammaticalRole: '動詞前綴'
    },
    {
      type: 'root',
      label: '💎 字根',
      morpheme: 'act',
      originalForm: 'actus (拉丁語，agere 的過去分詞)',
      variantNote: '拉丁文動詞 agere（做、驅動、行動）的過去分詞是 actus，英文借用這個分詞形態做成名詞、動詞用的字根 act，出現在很多常見字裡。',
      meaning: '做、行動 (to do, to act)',
      category: '核心動作',
      grammaticalRole: '動作中心'
    }
  ],
  phonetic: {
    assimilationPath: 're- (回應) + actus (行動) ➔ react',
    phoneticAnalysis: 'react 是比較晚才出現的字（17世紀前後，先用在科學和哲學領域），是直接用 re- 加在英文已經很熟悉的 act 前面組成的，沒有經過拉丁文或法文轉手，所以拼法非常單純。',
    ruleKey: 're- + act (透明拼接)'
  },
  semantic: {
    prefixMeaning: '回、回應 (re-)',
    rootCoreAction: '行動、做 (act)',
    suffixGrammar: '不及物動詞',
    modernMeaning: '針對外界的刺激、事件或言論，做出言語、動作或身體上的回應',
    formulaDisplay: '{ 回應 (re-) } + { 行動 (act) } = 反應、回應 (react)',
    literalLogic: '先有一個外部的刺激，然後「回頭做出動作」，就是 react。'
  },
  familyTree: [
    { word: 'reaction', formula: 'react + -ion', meaning: '反應（名詞）', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'action', formula: 'act + -ion', meaning: '行動、行為', level: 'Core', tags: ['TOEIC'] },
    { word: 'interact', formula: 'inter- (彼此之間) + act', meaning: '互動、互相影響', level: 'TOEIC', tags: ['TOEIC', 'IELTS'] },
    { word: 'enact', formula: 'en- (使...) + act', meaning: '制定（法律）；扮演', level: 'TOEFL', tags: ['TOEFL', 'GRE'] },
    { word: 'proactive', formula: 'pro- (向前) + act + -ive', meaning: '主動的、先發制人的', level: 'TOEFL', tags: ['TOEFL', 'IELTS'] }
  ],
  memory: {
    cognatesDaily: 'react to criticism (對批評做出反應), chemical reaction (化學反應)',
    oneSentenceMnemonic: 're (回應) + act (行動) ➔ 「針對發生的事情做出動作」就是 react (反應)！',
    etymologicalOrigin: 'react 是英文用拉丁文前綴 re- 直接加在拉丁字根 act 上，自行組成的新字，不是繼承自古拉丁文原詞。',
    visualImagery: '想像有人朝你丟了一顆球，你反射性地伸手接住——這個「接住」的動作就是對外部刺激的 react。',
    commonCollocations: ['react to news / criticism (對新聞/批評做出反應)', 'react quickly / calmly (反應迅速/冷靜地反應)', 'chemicals react with each other (化學物質互相起反應)'],
    contrastiveTips: 'react 強調「被動地對刺激做出回應」，通常較快速、直接；respond 語感較正式、經過思考；act 則是主動採取行動，不一定有前面的刺激。'
  },
  source: 'preset'
};
