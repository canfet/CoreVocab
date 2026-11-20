import { WordAnalysis } from '../../types';

export const disease: WordAnalysis = {
    word: 'disease',
    ipa: '/dɪˈziːz/',
    partOfSpeech: 'noun (可數/不可數名詞)',
    chineseMeaning: '疾病、病症',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 否定前綴',
        morpheme: 'dis-',
        originalForm: 'dis- (拉丁語)',
        variantNote: 'dis- 加在名詞前面，表示「失去、剝奪掉某個狀態」',
        meaning: '失去、剝奪、相反 (lack of, away from)',
        category: '否定極性',
        grammaticalRole: '否定前綴'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'ease',
        originalForm: 'aise (古法語)',
        variantNote: '這個字直接來自古法語 aise「舒適、安逸」，再往上的語源不很確定，一般認為跟「便利、鄰近」的概念有關',
        meaning: '舒適、安逸 (comfort, ease)',
        category: '核心概念',
        grammaticalRole: '概念中心'
      }
    ],
    phonetic: {
      assimilationPath: 'dis- (失去) + aise (舒適) ➔ 古法語 desaise ➔ 英文 disease',
      phoneticAnalysis: 'dis- 加在 ease 前面完全不用變身，直接拼在一起，唸的時候重音落在第二個音節 disEASE。',
      ruleKey: 'dis- + ease 直接拼接'
    },
    semantic: {
      prefixMeaning: '失去、剝奪 (dis-)',
      rootCoreAction: '舒適安逸的狀態 (ease)',
      suffixGrammar: '不可數/可數名詞',
      modernMeaning: '身體失去原本舒適、正常運作的狀態，也就是生病、患病',
      formulaDisplay: '{ 失去 (dis-) } + { 舒適 (ease) } = 疾病 (disease)',
      literalLogic: '字面上就是「不舒服、失去了安逸的狀態」，後來變成專指生病這件事。'
    },
    familyTree: [
      { word: 'diseased', formula: 'disease + -ed', meaning: '患病的、有病的 (形容詞)' },
      { word: 'ease', formula: '字根本體', meaning: '舒適、輕鬆、緩解' },
      { word: 'uneasy', formula: 'un- (不) + easy (輕鬆的)', meaning: '不自在的、心神不寧的' },
      { word: 'malaise', formula: 'mal- (不好) + aise (舒適)', meaning: '不適、萎靡不振 (跟 disease 是同一種構詞邏輯的法文借字)' }
    ],
    memory: {
      cognatesDaily: 'heart disease (心臟病), infectious disease (傳染病), disease prevention (疾病預防)',
      oneSentenceMnemonic: 'dis (失去) + ease (舒適) ➔ 「身體失去了原本的舒適」就是 disease (疾病)！',
      etymologicalOrigin: '古法語 desaise (dis- + aise「舒適」)，中古英文借入後拼成 disease',
      visualImagery: '想像身體原本安穩地躺在舒服的沙發上 (ease)，突然被病痛拉走 (dis-)，再也坐不住了。',
      commonCollocations: [
        'chronic disease (慢性病)',
        'contract a disease (感染上疾病)',
        'disease outbreak (疫情爆發)'
      ],
      contrastiveTips: 'disease 通常指有明確病理原因、可被診斷的「疾病」；illness 比較口語，泛指任何身體不舒服的狀態，範圍更廣、也可能沒有明確病因。'
    },
    source: 'preset'
  };
