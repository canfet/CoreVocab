import { WordAnalysis } from '../../types';

export const suggest: WordAnalysis = {
  word: 'suggest',
  ipa: '/səgˈdʒɛst/',
  partOfSpeech: 'verb (及物動詞)',
  chineseMeaning: '建議、提議；暗示、表明',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 同化前綴',
      morpheme: 'sug-',
      originalForm: 'sub- (拉丁語)',
      variantNote: 'sub- 遇到 g 開頭的字根時，最後的 b 會同化成 g，變成 sug-（sub- ➔ sug-），發音才會更順口。',
      meaning: '在下方、由下而上 (under, up from below)',
      category: '空間/方向',
      grammaticalRole: '方向前綴'
    },
    {
      type: 'root',
      label: '💎 核心字根',
      morpheme: 'gest',
      originalForm: 'gerere / gestus (拉丁語)',
      variantNote: 'gerere 是「攜帶、進行」的意思，現在式字幹是 ger-；它的完成被動分詞（supine）字幹是 gestus，suggest 這個字就是從這個 gest- 字幹演變來的。',
      meaning: '攜帶、帶來、提出 (to carry, bring)',
      category: '核心動作',
      grammaticalRole: '動作中心'
    }
  ],
  phonetic: {
    assimilationPath: 'sub- (在下方) ➔ 同化為 sug- + gerere/gestus (帶來) ➔ suggerere ➔ suggestus ➔ suggest',
    phoneticAnalysis: 'sub- 的字尾 b 遇到 g 這個音，會直接同化成 g，唸起來變成 sug-。字根部分則是用完成被動分詞字幹 gest-，而不是現在式字幹 ger-。',
    ruleKey: 'sub- ➔ sug- 前綴同化 (遇 g 全同化)'
  },
  semantic: {
    prefixMeaning: '由下往上、悄悄地 (sub- ➔ sug-)',
    rootCoreAction: '攜帶、帶來 (gest < gerere)',
    suffixGrammar: '及物動詞',
    modernMeaning: '把想法「從下面帶上來」放到別人面前，引申為提出建議或委婉地暗示某件事',
    formulaDisplay: '{ 由下而上 (sug- < sub-) } + { 攜帶、帶來 (gest) } = 建議、暗示 (suggest)',
    literalLogic: '字面上是「把某個想法悄悄帶到檯面上」，後來就演變成「提出建議」或「間接暗示」的意思。'
  },
  familyTree: [
    { word: 'suggestion', formula: 'suggest + -ion (名詞)', meaning: '建議、提議；暗示', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'suggestive', formula: 'suggest + -ive (形容詞)', meaning: '暗示性的、引人聯想的', level: 'TOEFL', tags: ['TOEFL', 'GRE'] },
    { word: 'digest', formula: 'di- (分開) + gest (帶)', meaning: '消化；摘要', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'gesture', formula: 'gest (帶、動作) + -ure', meaning: '手勢、姿態', level: 'Core', tags: ['TOEIC'] },
    { word: 'congestion', formula: 'con- (一起) + gest (帶) + -ion', meaning: '壅塞、擁擠', level: 'TOEFL', tags: ['TOEFL', 'IELTS'] }
  ],
  memory: {
    cognatesDaily: 'suggest an idea (提出想法), suggest a solution (建議解決方案), suggest that... (暗示、表明...)',
    oneSentenceMnemonic: 'sug (由下而上帶來) + gest (攜帶) ➔ 把想法「悄悄帶到檯面上」就是 suggest (建議)！',
    etymologicalOrigin: '拉丁語 suggerere（sub- 「在下方」 + gerere 「攜帶」），完成被動分詞 suggestus',
    visualImagery: '想像會議中你把寫好的紙條悄悄從桌子底下遞出來，那個「由下而上遞出想法」的動作就是 suggest。',
    commonCollocations: ['suggest a plan/idea (提出計畫/想法)', 'strongly suggest (強烈建議)', 'the evidence suggests that... (證據顯示...)'],
    contrastiveTips: 'suggest 語氣比較委婉、間接；propose 則較正式，常用於正式提案；recommend 帶有「推薦、認可」的意味。'
  },
  source: 'preset'
};
