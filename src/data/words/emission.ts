import { WordAnalysis } from '../../types';

export const emission: WordAnalysis = {
  word: 'emission',
  ipa: '/ɪˈmɪʃən/',
  partOfSpeech: 'noun (可數/不可數名詞)',
  chineseMeaning: '排放、散發；排放物',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 弱化前綴',
      morpheme: 'e-',
      originalForm: 'ex- (拉丁語)',
      variantNote: 'ex- 在 m 這類濁輔音（發音時聲帶會振動的子音）前面，字尾的 x 會直接省略簡化成 e-。',
      meaning: '向外、出來 (out, forth)',
      category: '空間/方向',
      grammaticalRole: '方向前綴'
    },
    {
      type: 'root',
      label: '💎 核心字根',
      morpheme: 'miss',
      originalForm: 'mittere / missus (拉丁語)',
      variantNote: 'mittere 是「送出」的意思，emission 用的是它的完成被動分詞字幹 missus，也就是 miss-。',
      meaning: '送出、發射 (to send)',
      category: '核心動作',
      grammaticalRole: '動作中心'
    },
    {
      type: 'suffix',
      label: '🏷️ 名詞字尾',
      morpheme: '-ion',
      originalForm: '-io / -ionis (拉丁語)',
      variantNote: '這是拉丁文常見的抽象名詞字尾，加在動詞的分詞字幹後面，表示「...的動作或結果」。',
      meaning: '...的動作、過程 (act or result of)',
      category: '抽象名詞',
      grammaticalRole: '名詞化後綴'
    }
  ],
  phonetic: {
    assimilationPath: 'ex- (向外) ➔ 弱化為 e- + mittere/missus (送出) + -ion (動作) ➔ emissio ➔ emission',
    phoneticAnalysis: 'ex- 在 m 這種濁輔音前面會簡化省略成 e-，讓兩個子音不用硬碰硬。字根用的是 mittere 的完成被動分詞字幹 miss-，再加上名詞字尾 -ion。',
    ruleKey: 'ex- ➔ e- 前綴弱化 (遇濁輔音省略 x)',
    dualStemInfo: {
      presentStem: 'mittere / mitt- (現在式字幹)',
      supineStem: 'missus / miss- (完成被動分詞字幹)',
      meaning: '送出、發射 (emission 用的是 miss- 這個字幹)'
    }
  },
  semantic: {
    prefixMeaning: '向外 (e- < ex-)',
    rootCoreAction: '送出、發射 (miss < mittere)',
    suffixGrammar: '名詞 (-ion)',
    modernMeaning: '把氣體、光線或聲音等「送到外面」去的動作或結果，也就是排放、散發（或指排放出來的東西本身）',
    formulaDisplay: '{ 向外 (e- < ex-) } + { 送出 (miss) } + { ...的動作 (-ion) } = 排放 (emission)',
    literalLogic: '字面上是「把東西送到外面去」的動作，用在工廠或車輛上，就是排放廢氣；用在光或聲音上，就是散發、發射。'
  },
  familyTree: [
    { word: 'emit', formula: 'e- (向外) + mit (送)', meaning: '發出、散發（動詞）', level: 'TOEFL', tags: ['TOEFL'] },
    { word: 'transmission', formula: 'trans- (穿越) + miss (送) + -ion', meaning: '傳輸、傳送', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'permission', formula: 'per- (完全) + miss (送) + -ion', meaning: '許可、允許', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'mission', formula: 'miss (派送) + -ion', meaning: '任務、使命', level: 'Core', tags: ['TOEIC'] },
    { word: 'submission', formula: 'sub- (在下) + miss (送) + -ion', meaning: '提交；屈服', level: 'TOEIC', tags: ['TOEIC'] }
  ],
  memory: {
    cognatesDaily: 'carbon emissions (碳排放), reduce emissions (減少排放), emission standards (排放標準)',
    oneSentenceMnemonic: 'e (向外) + miss (送出) + ion (...的動作) ➔ 把廢氣「向外送出」的動作就是 emission (排放)！',
    etymologicalOrigin: '拉丁語 emissio（ex- 「向外」 + mittere 「送出」），完成被動分詞 missus',
    visualImagery: '想像工廠的煙囪不停把黑煙「向外送出」，飄向天空，那個持續冒出的畫面就是 emission。',
    commonCollocations: ['reduce carbon emissions (減少碳排放)', 'emission standards/limits (排放標準/限制)', 'gas emissions (氣體排放)'],
    contrastiveTips: 'emission 較常用於正式或科學語境，指氣體、輻射、光線等的排放；discharge 則更廣泛，也能指液體或責任的「解除、卸下」。'
  },
  source: 'preset'
};
