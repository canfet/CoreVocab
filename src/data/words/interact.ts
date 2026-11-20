import { WordAnalysis } from '../../types';

export const interact: WordAnalysis = {
    word: 'interact',
    ipa: '/ˌɪn.tɚˈrækt/',
    partOfSpeech: 'verb (不及物動詞，常接 with)',
    chineseMeaning: '互動、互相影響、交流',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 前綴',
        morpheme: 'inter-',
        originalForm: 'inter- (拉丁語)',
        meaning: '在...之間、互相 (between, mutually)',
        category: '空間/方向',
        grammaticalRole: '前綴'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'act',
        originalForm: 'actus (拉丁語，agere 的過去分詞)',
        variantNote: '和 react 一樣，直接借用拉丁文動詞 agere（做、驅動）的過去分詞 actus 當作字根。',
        meaning: '做、行動 (to do, act)',
        category: '核心動作',
        grammaticalRole: '動作中心'
      }
    ],
    phonetic: {
      assimilationPath: 'inter- (彼此之間) + actus (行動) ➔ interact',
      phoneticAnalysis: 'inter- 遇到母音開頭的 act，不需要同化，直接拼接；跟 react 一樣，屬於用拉丁前綴直接加在 act 這個字根上、比較晚期（17世紀後）才組成的英文字。',
      ruleKey: 'inter- + act (透明拼接)'
    },
    semantic: {
      prefixMeaning: '彼此之間 (inter-)',
      rootCoreAction: '行動 (act)',
      suffixGrammar: '不及物動詞',
      modernMeaning: '兩個或多個對象之間互相做出動作、互相影響對方的行為',
      formulaDisplay: '{ 彼此之間 (inter-) } + { 行動 (act) } = 互動 (interact)',
      literalLogic: '字面上是「在...之間行動」，也就是雙方之間互相來回做出動作、互相影響。'
    },
    familyTree: [
      { word: 'interaction', formula: 'interact + -ion', meaning: '互動（名詞）', level: 'TOEIC', tags: ['TOEIC'] },
      { word: 'interactive', formula: 'interact + -ive', meaning: '互動式的', level: 'TOEIC', tags: ['TOEIC'] },
      { word: 'react', formula: 're- (回應) + act (行動)', meaning: '反應、回應', level: 'Core', tags: ['TOEIC'] },
      { word: 'enact', formula: 'en- (使...) + act', meaning: '制定（法律）；扮演', level: 'TOEFL', tags: ['TOEFL', 'GRE'] },
      { word: 'proactive', formula: 'pro- (向前) + act + -ive', meaning: '主動的、先發制人的', level: 'TOEFL', tags: ['TOEFL', 'IELTS'] }
    ],
    memory: {
      cognatesDaily: 'interact with customers (與顧客互動), social interaction (社交互動)',
      oneSentenceMnemonic: 'inter (彼此之間) + act (行動) ➔ 「在彼此之間做出動作」就是 interact (互動)！',
      etymologicalOrigin: '由拉丁前綴 inter- 加上字根 act 在英文裡直接組合而成的字',
      commonCollocations: [
        'interact with each other (彼此互動)',
        'human-computer interaction (人機互動)'
      ],
      contrastiveTips: 'interact 強調「雙向的互相影響」；communicate 著重「傳遞訊息」，不一定雙向；react 則是單方面對刺激做出反應，不必然牽涉互動關係。'
    },
    source: 'preset'
  };
