import { WordAnalysis } from '../../types';

export const differ: WordAnalysis = {
    word: 'differ',
    ipa: '/ˈdɪf.ɚ/',
    partOfSpeech: 'verb (不及物動詞)',
    chineseMeaning: '不同、相異、意見不一致',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 同化前綴',
        morpheme: 'dif-',
        originalForm: 'dis- (拉丁語)',
        variantNote: 'dis- 遇到 f 開頭的字，為了唸起來更順口，會把 s 換成 f，變成 dif- (dis- ➔ dif-)',
        meaning: '分開、往不同方向 (apart, in different directions)',
        category: '空間/方向',
        grammaticalRole: '方向前綴'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'fer',
        originalForm: 'ferre (拉丁語)',
        variantNote: '拉丁動詞 ferre 意思是「攜帶、搬運」，是一個很常見的字根，出現在 transfer, refer, offer 等很多字裡',
        meaning: '攜帶、搬運 (to carry, bear)',
        category: '核心動作',
        grammaticalRole: '動作中心'
      }
    ],
    phonetic: {
      assimilationPath: 'dis- (分開) ➔ 同化為 dif- + ferre (搬運) ➔ differre ➔ 英文 differ',
      phoneticAnalysis: 'dis- 遇到 f 開頭的字，s 會直接被 f 取代，變成 dif-，這樣兩個 f 唸起來才會更順（像 differ, different, diffuse 都是這樣）。',
      ruleKey: 'dis- ➔ dif- 語音同化 (前綴遇 f 全同化)'
    },
    semantic: {
      prefixMeaning: '往不同方向 (dis- ➔ dif-)',
      rootCoreAction: '攜帶、搬運 (fer)',
      suffixGrammar: '不及物動詞',
      modernMeaning: '兩件事物被搬往不同的方向，也就是彼此不一樣、有落差',
      formulaDisplay: '{ 分開 (dif- < dis-) } + { 搬運 (fer) } = 相異、不同 (differ)',
      literalLogic: '拉丁文 differre 字面上是「往不同方向搬運」，引申成「彼此不一樣」。'
    },
    familyTree: [
      { word: 'different', formula: 'differ + -ent', meaning: '不同的 (形容詞)' },
      { word: 'difference', formula: 'differ + -ence', meaning: '差異 (名詞)' },
      { word: 'defer', formula: 'de- (往下/延後) + fer', meaning: '延遲、順從 (與 differ 同源於拉丁文 differre 的另一個意思分支)' },
      { word: 'indifferent', formula: 'in- (不) + different', meaning: '漠不關心的、不在乎的' }
    ],
    memory: {
      cognatesDaily: 'differ from something (與某物不同), differ in opinion (意見不同), age differs (年齡不同)',
      oneSentenceMnemonic: 'dif (分開) + fer (搬運) ➔ 「被搬往不同的方向」就是 differ (相異)！',
      etymologicalOrigin: '拉丁文 differre (dis- + ferre「搬運」)，這個字在拉丁文裡同時有「不同」和「延後」兩個意思，後來分別演變成英文的 differ 和 defer',
      contrastiveTips: 'differ 意思是「不同」，differ from 常接名詞；defer 意思是「延遲」或「順從」，雖然同一個拉丁字根出來，但現代英文意思完全不同，不要搞混。'
    },
    source: 'preset'
  };
