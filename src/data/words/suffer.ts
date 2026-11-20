import { WordAnalysis } from '../../types';

export const suffer: WordAnalysis = {
  word: 'suffer',
  ipa: '/ˈsʌfər/',
  partOfSpeech: 'verb (及物/不及物動詞)',
  chineseMeaning: '遭受、忍受、受苦',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 同化前綴',
      morpheme: 'suf-',
      originalForm: 'sub- (拉丁語)',
      variantNote: 'sub- 遇到 f 開頭的字根時，最後的 b 會同化成 f，變成 suf-（sub- ➔ suf-），這樣兩個子音才唸得順。',
      meaning: '在下方、承受著 (under, bearing under)',
      category: '空間/方向',
      grammaticalRole: '方向前綴'
    },
    {
      type: 'root',
      label: '💎 核心字根',
      morpheme: 'fer',
      originalForm: 'ferre (拉丁語)',
      variantNote: 'ferre 是拉丁文裡意思是「承受、攜帶」的動詞，是一個不規則動詞，但在 suffer 這個字裡就單純保留 fer- 這個字幹。',
      meaning: '承受、攜帶、忍受 (to bear, carry)',
      category: '核心動作',
      grammaticalRole: '動作中心'
    }
  ],
  phonetic: {
    assimilationPath: 'sub- (在下方) ➔ 同化為 suf- + ferre (承受) ➔ sufferre ➔ suffer',
    phoneticAnalysis: 'sub- 的字尾 b 遇到 f 這個音，直接同化成 f，唸起來變成 suf-，跟後面的 fer 連在一起唸起來更順口。',
    ruleKey: 'sub- ➔ suf- 前綴同化 (遇 f 全同化)'
  },
  semantic: {
    prefixMeaning: '在下方、承受著重量 (sub- ➔ suf-)',
    rootCoreAction: '承受、忍耐 (fer < ferre)',
    suffixGrammar: '及物/不及物動詞',
    modernMeaning: '把重量或痛苦「承受在身體下方」，引申為忍受痛苦、遭受不幸或損失',
    formulaDisplay: '{ 在下方承受 (suf- < sub-) } + { 承受、攜帶 (fer) } = 遭受、忍受 (suffer)',
    literalLogic: '字面上是「把重擔背在身體下方」，後來演變成「承受痛苦或損失」的意思。'
  },
  familyTree: [
    { word: 'suffering', formula: 'suffer + -ing (名詞)', meaning: '痛苦、苦難', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'sufferer', formula: 'suffer + -er (人)', meaning: '受害者、患者', level: 'TOEFL', tags: ['TOEFL'] },
    { word: 'offer', formula: 'of- (朝向) + fer (帶)', meaning: '提供、提議', level: 'Core', tags: ['TOEIC'] },
    { word: 'transfer', formula: 'trans- (跨越) + fer (帶)', meaning: '轉移、調動', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'prefer', formula: 'pre- (在前) + fer (帶)', meaning: '偏好、更喜歡', level: 'Core', tags: ['TOEIC'] },
    { word: 'fertile', formula: 'fer (承載、產出) + -tile', meaning: '肥沃的、多產的', level: 'TOEFL', tags: ['TOEFL', 'IELTS'] }
  ],
  memory: {
    cognatesDaily: 'suffer from a disease (罹患疾病), suffer losses (遭受損失), suffer pain (忍受痛苦)',
    oneSentenceMnemonic: 'suf (在下方承受) + fer (背負) ➔ 把痛苦重擔「背在身體下方」就是 suffer (遭受、忍受)！',
    etymologicalOrigin: '拉丁語 sufferre（sub- 「在下方」 + ferre 「承受、攜帶」）',
    visualImagery: '想像一個人彎腰背著沉重的行囊，咬牙撐著往前走，那份「承受在下方」的重量感就是 suffer。',
    commonCollocations: ['suffer from an illness (罹患疾病)', 'suffer a loss/defeat (遭受損失/失敗)', 'suffer in silence (默默忍受)'],
    contrastiveTips: 'suffer 強調「承受痛苦或不幸」；endure 強調「撐過艱難、堅持下去」，語氣較偏向意志力。'
  },
  source: 'preset'
};
