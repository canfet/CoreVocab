import { WordAnalysis } from '../../types';

export const incessant: WordAnalysis = {
    word: 'incessant',
    ipa: '/ɪnˈses.ənt/',
    partOfSpeech: 'adjective (形容詞)',
    chineseMeaning: '連續不斷的、不停的、無休止的',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 前綴',
        morpheme: 'in-',
        originalForm: 'in- (拉丁語)',
        meaning: '不 (not)',
        category: '否定',
        grammaticalRole: '否定前綴'
      },
      {
        type: 'root',
        label: '💎 核心字根',
        morpheme: 'cess',
        originalForm: 'cedere (拉丁語「走、讓步」)，完成分詞幹 cessus',
        variantNote: 'cedere（走、讓步）的完成分詞是 cessus，由此衍生出反覆動詞 cessare（不斷停下、停止），incessant 用的正是 cessare 的字根 cess',
        meaning: '停止、止息 (to stop, cease)',
        category: '核心動作',
        grammaticalRole: '分詞詞幹'
      },
      {
        type: 'suffix',
        label: '🏷️ 形容詞字尾',
        morpheme: '-ant',
        originalForm: '-antem (拉丁語現在分詞字尾)',
        variantNote: '加在動詞字根後面，表示「正在做...動作的」',
        meaning: '正在...的 (doing, being)',
        category: '形容詞化',
        grammaticalRole: '形容詞後綴'
      }
    ],
    phonetic: {
      assimilationPath: 'in- (不) + cedere ➔ 完成分詞 cessus (停止過的) ➔ 反覆動詞 cessare (不斷停止) ➔ incessare ➔ incessant',
      phoneticAnalysis: 'in- 在 c 開頭的字前面不需要同化，直接拼接。字根 cedere（走、讓步）的完成分詞是 cessus，再變成表示「反覆動作」的動詞 cessare（不斷地停），incessant 字面上就是「不會停下來的」。',
      ruleKey: 'in- 無同化直接拼接 + cedere 完成分詞幹 cess'
    },
    semantic: {
      prefixMeaning: '不 (in-)',
      rootCoreAction: '停止 (cess < cedere / cessare)',
      suffixGrammar: '正在...的 (-ant)',
      modernMeaning: '事情持續發生，完全沒有停下來的跡象',
      formulaDisplay: '{ 不 (in-) } + { 停止 (cess) } + { 正在...的 (-ant) } = 連續不斷的 (incessant)',
      literalLogic: '字面上是「不停止的」，引申為聲音、抱怨或雨勢等「一直持續、沒有間斷」。'
    },
    familyTree: [
      { word: 'incessantly', formula: 'incessant + -ly', meaning: '不斷地、不停地', level: 'GRE', tags: ['GRE'] },
      { word: 'cease', formula: 'cedere 的英語化形式', meaning: '停止', level: 'TOEIC', tags: ['TOEIC'] },
      { word: 'ceaseless', formula: 'cease + -less', meaning: '不停的、不斷的', level: 'GRE', tags: ['GRE'] },
      { word: 'proceed', formula: 'pro- (向前) + ceed (走)', meaning: '前進、繼續進行', level: 'TOEIC', tags: ['TOEIC'] },
      { word: 'succeed', formula: 'suc- (在下方接續) + ceed (走)', meaning: '成功、繼任', level: 'Core', tags: ['TOEIC'] }
    ],
    memory: {
      cognatesDaily: 'incessant rain/noise (不停的雨/噪音), incessant complaints (不斷的抱怨)',
      oneSentenceMnemonic: 'in (不) + cess (停止) + ant (正在...的) ➔ 「完全不會停下來的」就是 incessant (連續不斷的)！',
      etymologicalOrigin: '拉丁文 incessans / incessantem（in- 不 + cessare「不斷停止」，源自 cedere「走、讓步」）',
      visualImagery: '想像窗外的雨一直下、一直下，完全沒有要停的意思，那種「怎麼等都不停」的煩躁感就是 incessant 的語感。',
      commonCollocations: [
        'incessant rain/chatter/demands (不停的雨/喋喋不休/要求)',
        'talk incessantly (不停地說話)'
      ],
      contrastiveTips: 'incessant 帶有負面、令人厭煩的語氣，常用來形容噪音、抱怨等惱人的持續狀態；continuous/constant 語氣較中性，不一定帶有負面情緒。'
    },
    source: 'preset'
  };
