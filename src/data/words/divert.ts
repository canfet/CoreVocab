import { WordAnalysis } from '../../types';

export const divert: WordAnalysis = {
    word: 'divert',
    ipa: '/dɪˈvɝːrt/',
    partOfSpeech: 'verb (及物動詞)',
    chineseMeaning: '轉向、轉移（注意力/資金/交通）；使消遣、娛樂',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 同化前綴',
        morpheme: 'di-',
        originalForm: 'dis- (拉丁語)',
        variantNote: 'dis- 遇到 v 這種濁音開頭的字，常常會把後面的 s 省略掉，簡化成 di- (dis- ➔ di-)',
        meaning: '分開、往不同方向 (apart, aside)',
        category: '空間/方向',
        grammaticalRole: '方向前綴'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'vert',
        originalForm: 'vertere / versus (拉丁語)',
        variantNote: '拉丁動詞 vertere 意思是「轉、翻轉」，是很多字的核心字根，像 convert, revert, invert 都用到它',
        meaning: '轉、翻轉 (to turn)',
        category: '核心動作',
        grammaticalRole: '動作中心'
      }
    ],
    phonetic: {
      assimilationPath: 'dis- (分開) ➔ 簡化為 di- + vertere (轉) ➔ divertere ➔ 英文 divert',
      phoneticAnalysis: 'dis- 遇到 v 這類濁輔音開頭的字，常常會把 s 拿掉、簡化成 di-，唸起來更輕巧（像 divert, divide, diverge 都是這樣）。',
      ruleKey: 'dis- ➔ di- 簡化 (前綴遇濁輔音省略 s)'
    },
    semantic: {
      prefixMeaning: '往不同方向 (di- < dis-)',
      rootCoreAction: '轉、翻轉 (vert)',
      suffixGrammar: '及物動詞',
      modernMeaning: '把原本前進的方向、注意力或資源，轉往另一個不同的方向',
      formulaDisplay: '{ 分開 (di- < dis-) } + { 轉 (vert) } = 轉向、轉移 (divert)',
      literalLogic: '字面上是「轉到不同的方向去」，用在交通上是繞道、改道，用在注意力上是分散、轉移。'
    },
    familyTree: [
      { word: 'diversion', formula: 'divert + -ion', meaning: '轉移、繞道、消遣娛樂 (名詞)' },
      { word: 'convert', formula: 'con- (完全) + vert', meaning: '轉換、使皈依' },
      { word: 'revert', formula: 're- (回) + vert', meaning: '恢復、回復原狀' },
      { word: 'avert', formula: 'a- (離開) + vert', meaning: '避免、防止 (轉開視線/危險)' },
      { word: 'invert', formula: 'in- (向內) + vert', meaning: '顛倒、倒轉' }
    ],
    memory: {
      cognatesDaily: 'divert traffic (交通改道), divert attention (轉移注意力), divert funds (挪用資金)',
      oneSentenceMnemonic: 'di (分開) + vert (轉) ➔ 「轉往另一個方向」就是 divert (轉向/轉移)！',
      etymologicalOrigin: '拉丁文 divertere (di- + vertere「轉」)',
      commonCollocations: [
        'divert attention from something (把注意力從某事上移開)',
        'divert a flight (班機改降)'
      ],
      contrastiveTips: 'divert 強調「讓原本朝著某方向前進的東西，轉往另一個方向」；distract 專指「分散注意力」，語意範圍比 divert 窄，不能用在交通或資金上。'
    },
    source: 'preset'
  };
