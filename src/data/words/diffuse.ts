import { WordAnalysis } from '../../types';

export const diffuse: WordAnalysis = {
    word: 'diffuse',
    ipa: '/dɪˈfjuːz/',
    partOfSpeech: 'verb (及物/不及物動詞); adjective (形容詞)',
    chineseMeaning: '（使）擴散、散布、傳播；(形容詞) 分散的、冗長的',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 同化前綴',
        morpheme: 'dif-',
        originalForm: 'dis- (拉丁語)',
        variantNote: 'dis- 遇到 f 開頭的字，s 會被 f 取代，變成 dif- (dis- ➔ dif-)',
        meaning: '向四面八方、分散 (apart, in every direction)',
        category: '空間/方向',
        grammaticalRole: '方向前綴'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'fuse',
        originalForm: 'fundere / fusus (拉丁語)',
        variantNote: '拉丁動詞 fundere「傾倒、注入」的過去分詞是 fusus，很多英文字用的其實是這個分詞形式，拼成 fuse',
        meaning: '傾倒、注入、流淌 (to pour, spread)',
        category: '核心動作',
        grammaticalRole: '動作中心'
      }
    ],
    phonetic: {
      assimilationPath: 'dis- (四散) ➔ 同化為 dif- + fundere (傾倒) ➔ 分詞幹 fusus ➔ diffusus ➔ 英文 diffuse',
      phoneticAnalysis: 'dis- 遇到 f 開頭的字會同化成 dif-。拉丁動詞 fundere 的過去分詞 fusus，就是英文裡 -fuse 這個拼法的來源。當形容詞唸的時候，字尾的 s 唸成無聲的 /s/（/dɪˈfjuːs/）；當動詞唸的時候，字尾 s 唸成有聲的 /z/（/dɪˈfjuːz/）。',
      dualStemInfo: {
        presentStem: 'fund- (如 confound 使困惑, refund 退款「把錢倒回去」)',
        supineStem: 'fus- (如 confuse 混淆, infuse 注入, profuse 大量的)',
        meaning: '傾倒、流淌 (pour, spread)'
      },
      ruleKey: 'dis- ➔ dif- 同化 + fund/fus 雙詞幹'
    },
    semantic: {
      prefixMeaning: '向四面八方 (dif- < dis-)',
      rootCoreAction: '傾倒、流淌 (fuse < fundere)',
      suffixGrammar: '及物/不及物動詞、形容詞',
      modernMeaning: '把液體、氣體、光線、知識往四面八方倒出去、散布開來',
      formulaDisplay: '{ 向四方 (dif- < dis-) } + { 傾倒 (fuse) } = 擴散、散布 (diffuse)',
      literalLogic: '字面上是「把東西往四面八方倒出去」，引申成光線、氣體、知識的擴散。'
    },
    familyTree: [
      { word: 'diffusion', formula: 'diffuse + -ion', meaning: '擴散、傳播 (名詞)' },
      { word: 'confuse', formula: 'con- (一起) + fuse', meaning: '使困惑、混淆 (把東西倒在一起分不清)' },
      { word: 'infuse', formula: 'in- (進入) + fuse', meaning: '注入、灌輸' },
      { word: 'profuse', formula: 'pro- (向前) + fuse', meaning: '大量的、豐富的 (不斷往外流淌)' },
      { word: 'refund', formula: 're- (回) + fund', meaning: '退款 (字面是「把錢倒回去」)' }
    ],
    memory: {
      cognatesDaily: 'diffuse light (柔和散射的光線), diffuse knowledge (傳播知識), diffuse tension (緩解緊張氣氛)',
      oneSentenceMnemonic: 'dif (四散) + fuse (傾倒) ➔ 「往四面八方倒出去」就是 diffuse (擴散)！',
      etymologicalOrigin: '拉丁文 diffundere (dis- + fundere「傾倒」)，過去分詞 diffusus',
      commonCollocations: [
        'diffuse gas/light (氣體/光線擴散)',
        'diffuse responsibility (責任分散)'
      ],
      contrastiveTips: 'diffuse 強調「緩慢、均勻地向四周散開」；spread 是更常見、中性的「散布」說法，diffuse 語氣更正式、常用於科學或抽象語境（如光線、氣味、知識的擴散）。'
    },
    source: 'preset'
  };
