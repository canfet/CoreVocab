import { WordAnalysis } from '../../types';

export const occupy: WordAnalysis = {
  word: 'occupy',
  ipa: '/ˈɑːkjəpaɪ/',
  partOfSpeech: 'verb (及物動詞)',
  chineseMeaning: '佔用、佔據；使忙碌、使有事做',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 同化前綴',
      morpheme: 'oc-',
      originalForm: 'ob- (拉丁語)',
      variantNote: 'ob- 遇到 c 開頭的字根時，最後的 b 會同化成 c，變成 oc-（ob- ➔ oc-）。',
      meaning: '朝向、對著、上前 (toward, upon)',
      category: '空間/方向',
      grammaticalRole: '方向前綴'
    },
    {
      type: 'root',
      label: '💎 核心字根',
      morpheme: 'cup',
      originalForm: 'capere / captus (拉丁語)',
      variantNote: 'capere 是「拿取、抓住」的意思。在許多複合字裡，capere 的母音會弱化，拼法也跟著改變，例如 oc- + capere 就變成 occupare（cap 弱化成 cup），這種母音弱化在 in- + capere ➔ incipere（開始）這類字裡也看得到。',
      meaning: '拿取、抓住、佔有 (to take, seize)',
      category: '核心動作',
      grammaticalRole: '動作中心'
    }
  ],
  phonetic: {
    assimilationPath: 'ob- (朝向) ➔ 同化為 oc- + capere (拿取，母音弱化為 -cupare) ➔ occupare ➔ 古法語 occuper ➔ occupy',
    phoneticAnalysis: 'ob- 的字尾 b 遇到 c 這個音，直接同化成 c，唸起來變成 oc-；字根 capere 在這個複合字裡母音弱化成 cup。字尾的 -y 是英文從古法語動詞字尾 -ier/-er 轉化而來的常見拼法（同樣的模式也出現在 copy、multiply）。',
    ruleKey: 'ob- ➔ oc- 前綴同化 (遇 c 全同化)',
    dualStemInfo: {
      presentStem: 'capere / cap- (現在式字幹，複合字中常弱化為 -cip-/-cup-)',
      supineStem: 'captus / capt- (完成被動分詞字幹)',
      meaning: '拿取、抓住 (capt- 這個字幹出現在 capture、captive 等字裡)'
    }
  },
  semantic: {
    prefixMeaning: '上前、朝向 (oc- < ob-)',
    rootCoreAction: '拿取、抓住 (cup < capere)',
    suffixGrammar: '及物動詞',
    modernMeaning: '上前把一個空間或位置「抓在手裡」，引申為佔用某個地方；把時間或心思「抓住」，就是使人忙碌、使有事可做',
    formulaDisplay: '{ 上前 (oc- < ob-) } + { 抓取 (cup) } = 佔用、佔據 (occupy)',
    literalLogic: '字面上是「上前把某個空間抓在手裡」，也就是佔據；如果抓住的是時間或注意力，就變成讓某人忙著做某件事。'
  },
  familyTree: [
    { word: 'occupation', formula: 'occupy + -ation (名詞)', meaning: '職業；佔領', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'occupied', formula: 'occupy + -ed (形容詞)', meaning: '被佔用的、忙碌的', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'capture', formula: 'cap (抓) + -ture', meaning: '捕獲、捕捉', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'capable', formula: 'cap (抓、掌握) + -able', meaning: '有能力的', level: 'Core', tags: ['TOEIC'] },
    { word: 'preoccupy', formula: 'pre- (事先) + occupy', meaning: '使全神貫注、佔據心思', level: 'GRE', tags: ['GRE', 'TOEFL'] }
  ],
  memory: {
    cognatesDaily: 'occupy a seat (佔用座位), occupy oneself with... (忙於...), an occupied territory (被佔領的領土)',
    oneSentenceMnemonic: 'oc (上前) + cup (抓住) ➔ 上前把位置「抓在手裡」就是 occupy (佔用)！',
    etymologicalOrigin: '拉丁語 occupare（ob- 「上前」 + capere 「拿取」，母音弱化為 -cupare）',
    visualImagery: '想像一個人一屁股坐上唯一的空位，兩隻手緊緊抓住扶手不放，那個「上前佔住位置」的動作就是 occupy。',
    commonCollocations: ['occupy a position/seat (佔據職位/座位)', 'keep oneself occupied (讓自己保持忙碌)', 'military occupation (軍事佔領)'],
    contrastiveTips: 'occupy 強調「佔用一個空間或位置」，可中性也可指軍事佔領；busy 只是形容「忙碌的狀態」，沒有「佔據空間」的意味。'
  },
  source: 'preset'
};
