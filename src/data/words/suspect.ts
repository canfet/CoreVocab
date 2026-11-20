import { WordAnalysis } from '../../types';

export const suspect: WordAnalysis = {
  word: 'suspect',
  ipa: '/səˈspɛkt/ (動詞); /ˈsʌspɛkt/ (名詞/形容詞)',
  partOfSpeech: 'verb / noun / adjective (動詞/名詞/形容詞)',
  chineseMeaning: '懷疑、猜想（動詞）；嫌疑犯（名詞）；可疑的（形容詞）',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 同化前綴',
      morpheme: 'sus-',
      originalForm: 'sub- (拉丁語)',
      variantNote: 'sub- 遇到 sp、st、c 這類字根時，常常會弱化簡省成 sus-（sub- ➔ subs- ➔ sus-），這裡的字根 specere 就是以 sp 開頭，所以觸發了這個變化，跟 sustain（sub- + tenere）是同一種模式。',
      meaning: '在下方、從底下偷偷地 (under, secretly from below)',
      category: '空間/方向',
      grammaticalRole: '方向前綴'
    },
    {
      type: 'root',
      label: '💎 核心字根',
      morpheme: 'spect',
      originalForm: 'specere / spectus (拉丁語)',
      variantNote: 'specere 是「看」的意思，現在式字幹是 spec-；完成被動分詞（supine）字幹是 spectus，suspect 這個字用的正是 spect- 這個字幹。',
      meaning: '看、注視 (to look, watch)',
      category: '核心動作',
      grammaticalRole: '動作中心'
    }
  ],
  phonetic: {
    assimilationPath: 'sub- (在下方) ➔ 弱化為 sus- + specere/spectus (看) ➔ suspicere ➔ suspectus ➔ suspect',
    phoneticAnalysis: 'sub- 在 sp 這類字根前面會弱化省略中間的 b，變成 sus-。動詞重音在後面 -SPECT，名詞和形容詞重音則移到前面 SUS-，這是英文裡常見的「動詞後重音、名詞前重音」變化模式。',
    ruleKey: 'sub- ➔ sus- 前綴弱化 (遇 sp/st/c 弱化)',
    dualStemInfo: {
      presentStem: 'specere / spec- (現在式字幹)',
      supineStem: 'spectus / spect- (完成被動分詞字幹)',
      meaning: '看、注視 (spect- 這個字幹衍生出 spectacle, inspect, respect 等大量英文字)'
    }
  },
  semantic: {
    prefixMeaning: '在下方、暗中 (sus- < sub-)',
    rootCoreAction: '看、注視 (spect < specere)',
    suffixGrammar: '動詞/名詞/形容詞',
    modernMeaning: '從底下偷偷「窺看」某人，引申為心裡懷疑對方；被懷疑的那個人就是「嫌疑犯」',
    formulaDisplay: '{ 暗中、在下方 (sus- < sub-) } + { 看 (spect) } = 懷疑；嫌疑犯 (suspect)',
    literalLogic: '字面上是「偷偷從底下看」，帶著不信任的眼光觀察，後來就變成「懷疑」某人或某事，而被懷疑的對象就是嫌疑犯。'
  },
  familyTree: [
    { word: 'suspicion', formula: 'suspect + -ion (名詞，拼法變化)', meaning: '懷疑、疑心', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'suspicious', formula: 'suspicion + -ous (形容詞)', meaning: '可疑的；多疑的', level: 'TOEIC', tags: ['TOEIC', 'IELTS'] },
    { word: 'inspect', formula: 'in- (向內) + spect (看)', meaning: '檢查、視察', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'respect', formula: 're- (一再) + spect (看)', meaning: '尊重、敬重', level: 'Core', tags: ['TOEIC'] },
    { word: 'spectacle', formula: 'spect (看) + -acle', meaning: '奇觀、壯觀場面', level: 'GRE', tags: ['GRE', 'TOEFL'] },
    { word: 'prospect', formula: 'pro- (向前) + spect (看)', meaning: '前景、可能性', level: 'TOEFL', tags: ['TOEFL', 'GRE'] }
  ],
  memory: {
    cognatesDaily: 'suspect someone of lying (懷疑某人說謊), a murder suspect (謀殺案嫌疑犯), suspect behavior (可疑的行為)',
    oneSentenceMnemonic: 'sus (暗中) + spect (看) ➔ 「暗中窺看」某人的一舉一動，心裡就開始 suspect (懷疑) 他！',
    etymologicalOrigin: '拉丁語 suspicere（sub- 「暗中/從下方」 + specere 「看」），完成被動分詞 suspectus',
    visualImagery: '想像偵探瞇著眼睛，從陰影裡偷偷觀察一個人的一舉一動，那份「暗中打量」的眼神就是 suspect。',
    commonCollocations: ['suspect that... (懷疑...)', 'be arrested as a suspect (以嫌疑犯身分被逮捕)', 'suspect motives (可疑的動機)'],
    contrastiveTips: 'suspect 是「心裡覺得很可能是這樣，但沒有確切證據」；doubt 則是「不太相信某件事是真的」，兩者懷疑的方向常常相反：I suspect he is guilty（我猜他有罪）vs I doubt he is guilty（我不太相信他有罪）。'
  },
  source: 'preset'
};
