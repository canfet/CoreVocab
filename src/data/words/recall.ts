import { WordAnalysis } from '../../types';

export const recall: WordAnalysis = {
  word: 'recall',
  ipa: '動詞 /rɪˈkɔːl/；名詞 /ˈriːkɔːl/',
  partOfSpeech: 'verb (及物動詞) / noun (可數名詞)',
  chineseMeaning: '（動）回想、想起；召回、撤回；（名）召回（產品/公職人員）、記憶力',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 前綴',
      morpheme: 're-',
      originalForm: 're- (拉丁語)',
      variantNote: 're- 在這裡表示「叫回來」的方向，不管是把記憶叫回腦中，還是把瑕疵商品叫回工廠，邏輯都是一樣的。',
      meaning: '回、往回 (back)',
      category: '空間/回返',
      grammaticalRole: '動詞前綴'
    },
    {
      type: 'root',
      label: '💎 字根',
      morpheme: 'call',
      originalForm: 'kalla (古諾斯語)',
      variantNote: 'call 不是拉丁字根，而是從古諾斯語（維京人的語言）借進古英文的字，意思就是「大聲喊叫」。re- 是拉丁前綴，call 是北歐借字，這是一個混血組合。',
      meaning: '喊、叫 (to call, to cry out)',
      category: '核心動作',
      grammaticalRole: '動作中心'
    }
  ],
  phonetic: {
    assimilationPath: 're- (回) + kalla (喊) ➔ 英文 call ➔ recall',
    phoneticAnalysis: 'call 本身已經是英文裡道地的詞，re- 直接加上去不會有任何拼寫或發音上的變化。',
    ruleKey: 're- + call (透明拼接)'
  },
  semantic: {
    prefixMeaning: '回、往回 (re-)',
    rootCoreAction: '喊、叫 (call)',
    suffixGrammar: '及物動詞 / 名詞',
    modernMeaning: '把過去的記憶重新叫回腦海裡，或是要求把發出去的東西（商品、人員）叫回來',
    formulaDisplay: '{ 回 (re-) } + { 喊/叫 (call) } = 回想、召回 (recall)',
    literalLogic: '字面上就是「把...喊回來」，用在腦袋裡就是想起，用在商品或人員上就是召回。'
  },
  familyTree: [
    { word: 'caller', formula: 'call + -er', meaning: '打電話的人、來電者', level: 'Core', tags: ['TOEIC'] },
    { word: 'recollect', formula: 're- (重新) + col- (共同) + lect (收集)', meaning: '回想起（字根不同，但意思相近的「回想」）', level: 'GRE', tags: ['GRE', 'TOEFL'] },
    { word: 'miscall', formula: 'mis- (錯誤地) + call', meaning: '叫錯名字、誤稱', level: 'Core', tags: ['TOEIC'] }
  ],
  memory: {
    cognatesDaily: 'recall a memory (想起一段記憶), product recall (產品召回)',
    oneSentenceMnemonic: 're (回) + call (喊) ➔ 「把它喊回來」，不管是記憶還是瑕疵商品，都是 recall！',
    etymologicalOrigin: 'call 源自古諾斯語 kalla，經古英文進入英文；re- 是拉丁前綴，兩者結合是英文自己造出的字，並非繼承自拉丁文。',
    visualImagery: '想像汽車廠發現某批車子有瑕疵，於是打電話「把它們全部喊回」工廠檢修——這正是 recall 的畫面。',
    commonCollocations: ['recall a memory / event (回想起一段記憶/事件)', 'issue a recall (發布召回令)', 'total recall (完全的記憶力)'],
    contrastiveTips: 'recall 是「主動努力地把記憶叫回來」；remember 泛指「記得」，不一定需要努力；remind 是「別人提醒你」，主詞不是自己。'
  },
  source: 'preset'
};
