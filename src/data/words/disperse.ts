import { WordAnalysis } from '../../types';

export const disperse: WordAnalysis = {
    word: 'disperse',
    ipa: '/dɪˈspɝːs/',
    partOfSpeech: 'verb (及物/不及物動詞)',
    chineseMeaning: '驅散、散開、分散、傳播（種子/知識）',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 前綴',
        morpheme: 'dis-',
        originalForm: 'dis-',
        meaning: '四處、分離、向各個方向 (apart, in every direction)',
        category: '擴散/分離',
        grammaticalRole: '方向前綴'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'sperse',
        originalForm: 'spargere / sparsus',
        variantNote: 'spargere (散開) 變成 -sperse，跟英文的 spark 是同一個很久以前的老祖先字變出來的。',
        meaning: '散播、灑落 (to scatter, sprinkle)',
        category: '核心動作',
        grammaticalRole: '動作中心'
      }
    ],
    phonetic: {
      assimilationPath: 'dis- (四處) + spargere (散播) ➔ disperse',
      phoneticAnalysis: '古拉丁文的 spargere 和英文的 spark，其實是同一個很久很久以前的語言裡的老祖先字變出來的，意思都跟「散開」有關。',
      ruleKey: 'dis- + spargere'
    },
    semantic: {
      prefixMeaning: '向四面八方 (dis-)',
      rootCoreAction: '撒開 (spargere ➔ sperse)',
      suffixGrammar: '及物動詞',
      modernMeaning: '使原本聚集在一起的人群、光線、種子或氣體向各方向散開',
      formulaDisplay: '{ 向四方 (dis-) } + { 撒落/散播 (sperse) } = 驅散、分散 (disperse)',
      literalLogic: '意思就是「往四面八方撒開去」。'
    },
    familyTree: [
      { word: 'dispersion', formula: 'disperse + -ion', meaning: '散佈、色散、消散' },
      { word: 'sparse', formula: 'spargere ➔ sparsus', meaning: '稀疏的、稀少的' },
      { word: 'spark', formula: '*(s)perg-', meaning: '火花 (同源日耳曼字)' }
    ],
    memory: {
      cognatesDaily: 'police dispersed the crowd (警方驅散人群), light dispersion (光線色散)',
      oneSentenceMnemonic: 'dis (四處) + sperse (撒) ➔ 「向四處撒開」就是 disperse (驅散/傳播)！',
      etymologicalOrigin: '古拉丁文 dispergere（dis- 表示「四處」加上 spargere「散開」）'
    },
    source: 'preset'
  };
