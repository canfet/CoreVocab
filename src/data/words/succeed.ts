import { WordAnalysis } from '../../types';

export const succeed: WordAnalysis = {
  word: 'succeed',
  ipa: '/səkˈsiːd/',
  partOfSpeech: 'verb (不及物/及物動詞)',
  chineseMeaning: '成功；繼任、接續',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 同化前綴',
      morpheme: 'suc-',
      originalForm: 'sub- (拉丁語)',
      variantNote: 'sub- 遇到 c 開頭的字根時，最後的 b 會同化成 c，變成 suc-（sub- ➔ suc-），兩個子音才唸得順。',
      meaning: '在下方、緊接在後 (under, close after)',
      category: '空間/方向',
      grammaticalRole: '方向前綴'
    },
    {
      type: 'root',
      label: '💎 核心字根',
      morpheme: 'ceed',
      originalForm: 'cedere / cessus (拉丁語)',
      variantNote: 'cedere 是「走、前進、讓步」的意思。這個字根進入英文後有兩種拼法：-cede（如 precede, concede）和 -ceed（如 succeed, proceed, exceed），這只是歷史上不同時期借入時拼法上的差異，意思都是同一個字根。',
      meaning: '走、前進、跟上去 (to go, move, yield)',
      category: '核心動作',
      grammaticalRole: '動作中心'
    }
  ],
  phonetic: {
    assimilationPath: 'sub- (在下方) ➔ 同化為 suc- + cedere (走、前進) ➔ succedere ➔ 古法語 succeder ➔ succeed',
    phoneticAnalysis: 'sub- 的字尾 b 遇到 c 這個音，直接同化成 c，唸起來變成 suc-。字根 cedere 進入英文後拼成 -ceed，跟同字根但拼成 -cede 的字（如 precede）在意思上是相通的。',
    ruleKey: 'sub- ➔ suc- 前綴同化 (遇 c 全同化)'
  },
  semantic: {
    prefixMeaning: '緊跟在後、由下而上 (suc- < sub-)',
    rootCoreAction: '走、前進 (ceed < cedere)',
    suffixGrammar: '不及物/及物動詞',
    modernMeaning: '從底下一步步往前走、往上爬，最後順利抵達目標，引申為「成功」；也指緊跟在某人之後接手位置，引申為「繼任」',
    formulaDisplay: '{ 緊跟在後 (suc- < sub-) } + { 走、前進 (ceed) } = 成功；繼任 (succeed)',
    literalLogic: '字面上是「順著往前走、跟上去」，一路走到終點就是「成功」；如果是跟在某人後面接手他的位置，就是「繼任」。'
  },
  familyTree: [
    { word: 'success', formula: 'suc- + cess (走，供性字幹) + -0', meaning: '成功（名詞）', level: 'Core', tags: ['TOEIC'] },
    { word: 'successful', formula: 'success + -ful (充滿...的)', meaning: '成功的', level: 'Core', tags: ['TOEIC'] },
    { word: 'succession', formula: 'suc- + cess + -ion', meaning: '連續；繼承、繼任', level: 'TOEFL', tags: ['TOEFL', 'GRE'] },
    { word: 'successor', formula: 'suc- + cess + -or (人)', meaning: '繼任者、接班人', level: 'TOEFL', tags: ['TOEFL'] },
    { word: 'proceed', formula: 'pro- (向前) + ceed (走)', meaning: '前進、繼續進行', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'exceed', formula: 'ex- (超出) + ceed (走)', meaning: '超過、超出', level: 'TOEIC', tags: ['TOEIC'] }
  ],
  memory: {
    cognatesDaily: 'succeed in doing something (成功做到某件事), succeed to the throne (繼承王位), a successful career (成功的事業)',
    oneSentenceMnemonic: 'suc (緊跟著) + ceed (往前走) ➔ 一步步「緊跟著往前走」，最終抵達終點就是 succeed (成功)！',
    etymologicalOrigin: '拉丁語 succedere（sub- 「在下方/緊接著」 + cedere 「走、前進」）',
    visualImagery: '想像接力賽跑者緊跟在前一棒後面，順利接下棒子往前衝向終點，那個「接續往前」的畫面就是 succeed。',
    commonCollocations: ['succeed in (成功做到...)', 'succeed as a leader (成功地擔任領導者)', 'succeed one\'s father (繼承父親的位子)'],
    contrastiveTips: 'succeed 及物用法（succeed someone/something）是「繼任、接續」；不及物用法（succeed in something）才是「成功」，兩種意思要看句型分辨。'
  },
  source: 'preset'
};
