import { WordAnalysis } from '../../types';

export const spark: WordAnalysis = {
    word: 'spark',
    ipa: '/spɑːrk/',
    partOfSpeech: 'noun / verb (名詞/動詞)',
    chineseMeaning: '火花、火星、微光；引發、觸發、激勵（靈感/衝突）',
    morphemes: [
      {
        type: 'root',
        label: '💎 本族語根',
        morpheme: 'spark',
        originalForm: '古英語 *spearca / 印歐語 *(s)p(h)er-g-',
        variantNote: 'spark 是英文自己土生土長的字，不是用古拉丁文的字首加字根拼出來的。',
        meaning: '散發、迸發火星 (to scatter, burst into light, sparkle)',
        category: '原始印歐語根 (PIE)',
        grammaticalRole: '核心語意載體'
      }
    ],
    phonetic: {
      assimilationPath: '原始印歐語 *(s)perg- (散射) ➔ 原始日耳曼語 *sparkō ➔ 古英語 spearca ➔ 現代英語 spark',
      phoneticAnalysis: '很久很久以前的語言裡有一個字，開頭的 s 有時候有、有時候沒有，意思都是「散開、迸出」。這個字後來在日耳曼語那邊變成古英文的 spearca (spark)；在古拉丁文那邊變成 spargere (散開)，後來又變出英文的 disperse (驅散) 和 sparse (稀疏的)。（雖然荷蘭文的 vonk、德文的 Funke 也是「火花」的意思，拼法看起來很像，但其實是從另一個字根 *funkô- 來的，跟 spark 沒有關係。）',
      ruleKey: '印歐語根 *(s)perg- 與日耳曼語演化'
    },
    semantic: {
      prefixMeaning: '無前綴 (原始印歐獨立字根)',
      rootCoreAction: '迸發火星 / 散射光芒 (*(s)perg-)',
      suffixGrammar: '名詞/及物/不及物動詞同形',
      modernMeaning: '燃燒時迸出的微小火星；引申為微小的希望、靈感火花，或觸發重大歷史事件的導火線',
      formulaDisplay: '{ 原始印歐散射/迸裂 (*(s)perg-) } = 火花、激發 (spark)',
      literalLogic: '很久以前的日耳曼語用這個字描述木頭燒起來時噼哩啪啦、四處飛濺的火星，後來也拿來說「靈感忽然冒出來」或「吵架突然被引爆」。'
    },
    familyTree: [
      { word: 'sparkle', formula: 'spark + -le (反覆/微小頻動後綴)', meaning: '閃爍、閃耀、閃閃發光 (發出連續細小火花)' },
      { word: 'sparky', formula: 'spark + -y (形容詞後綴)', meaning: '精力充沛的、充滿生氣的；(英口語) 電工' },
      { word: 'sparking', formula: 'spark + -ing (分詞/名詞)', meaning: '冒出火花、火花放電' },
      { word: 'disperse', formula: 'dis- (分離) + spargere (散播/同源拉丁根)', meaning: '驅散、分散、擴散 (同源拉丁詞)' },
      { word: 'sparse', formula: 'spargere (散播) ➔ sparsus', meaning: '稀疏的、稀少分散的 (同源拉丁詞)' }
    ],
    memory: {
      cognatesDaily: 'spark plug (汽車火星塞), a spark of hope (一線希望), sparkling water (氣泡水), a spark of creativity (靈感火花)',
      oneSentenceMnemonic: '燃燒時向外「散射 (scatter)」出的亮光就是 spark (火花)，火花閃閃跳動加 -le 就是 sparkle！',
      etymologicalOrigin: '古英文 spearca（名詞）／spearcian（動詞），來自很久很久以前的語言裡意思是「散開、火花」的字。',
      visualImagery: '想像在漆黑寒夜裡敲擊打火石，瞬間迸裂散射出金黃色的耀眼微小火星（spark），點燃乾柴引發燎原大火。',
      commonCollocations: [
        'spark controversy / debate (引發爭議 / 激起辯論)',
        'spark an interest in science (激發對科學的濃厚興趣)',
        'a tiny spark of genius (一點天才的靈感火花)'
      ],
      contrastiveTips: 'spark 當動詞用的時候，是說「像火花一樣，一下子就點燃了一件大事或強烈的情緒」；trigger 比較像「按下開關，啟動一連串反應」；cause 只是單純講「因為這樣所以那樣」，沒有特別的感覺。'
    },
    source: 'preset'
  };
