import { WordAnalysis } from '../../types';

export const recount: WordAnalysis = {
  word: 'recount',
  ipa: '/rɪˈkaʊnt/',
  partOfSpeech: 'verb (及物動詞)；也可作 noun (名詞，指「重新計票」時重音改在前面 /ˈriːkaʊnt/)',
  chineseMeaning: '詳述、敘述（一段經過）；重新計算（票數等）',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 前綴',
      morpheme: 're-',
      originalForm: 're- (拉丁語)',
      variantNote: 're- 在這裡有兩種用法：一種是「重新」（重新算一次票），一種是「回過頭」（把經過從頭講一遍），兩個意思都合理。',
      meaning: '重新、回頭 (again, back)',
      category: '重複/回返',
      grammaticalRole: '動詞前綴'
    },
    {
      type: 'root',
      label: '💎 字根',
      morpheme: 'count',
      originalForm: 'computare (拉丁語) ➔ conter (古法語)',
      variantNote: '拉丁文 computare（計算）經過古法文分裂成兩支：一支變成 compter「數數字」，另一支變成 conter「敘述、講故事」。英文的 count 主要繼承「數數字」這支，但 recount 剛好把「敘述」的古老意思也保留下來了。',
      meaning: '計算；講述、敘述 (to reckon; to tell)',
      category: '核心動作',
      grammaticalRole: '動作中心'
    }
  ],
  phonetic: {
    assimilationPath: 're- + computare ➔ 古法文 c(o)unter ➔ 英文 count ➔ recount',
    phoneticAnalysis: '當動詞用的時候重音在第二音節 recount /rɪˈkaʊnt/；但指「重新計票」這個結果的名詞時，很多人會把重音挪到前面唸成 /ˈriːkaʊnt/，這是英文裡常見的「動詞後重音、名詞前重音」現象。',
    ruleKey: 're- + count (動詞/名詞重音轉移)'
  },
  semantic: {
    prefixMeaning: '重新、回頭 (re-)',
    rootCoreAction: '計算、敘述 (count)',
    suffixGrammar: '及物動詞 / 名詞',
    modernMeaning: '把事情的經過從頭到尾講一遍，或是把數量重新算一次以確認正確性',
    formulaDisplay: '{ 重新/回頭 (re-) } + { 計算/敘述 (count) } = 詳述、重新計算 (recount)',
    literalLogic: '把事情「重新數過一遍」，可以是數字上的重新計算，也可以是把經過一件一件講出來。'
  },
  familyTree: [
    { word: 'account', formula: 'ac- (ad- 朝向) + count', meaning: '帳戶、描述、解釋（説明原因）', level: 'Core', tags: ['TOEIC'] },
    { word: 'discount', formula: 'dis- (減去) + count', meaning: '折扣；不重視、輕忽（動詞）', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'counter', formula: 'count + -er', meaning: '櫃檯；計數器', level: 'Core', tags: ['TOEIC'] },
    { word: 'accountable', formula: 'account + -able', meaning: '負有責任的、需說明的', level: 'TOEFL', tags: ['TOEFL', 'IELTS'] }
  ],
  memory: {
    cognatesDaily: 'recount the events (敘述事情經過), a vote recount (重新計票)',
    oneSentenceMnemonic: 're (重新/回頭) + count (數/講) ➔ 「把票重新數一遍」或「把經過重新講一遍」都是 recount！',
    etymologicalOrigin: '來自拉丁文 computare，經古法文分裂成「數數字」與「講故事」兩支意思，recount 保留了兩者。',
    visualImagery: '想像選舉開票爭議後，工作人員把每一張選票攤在桌上，一張一張重新數過確認結果。',
    commonCollocations: ['recount the story / events (敘述經過)', 'a recount of the votes (重新計票)', 'demand a recount (要求重新計票)'],
    contrastiveTips: 'recount 偏向「有條理地把經過講出來」；relate 也有敘述的意思但更口語；tally 專門指「計算票數或分數的總和」。'
  },
  source: 'preset'
};
