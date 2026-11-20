import { WordAnalysis } from '../../types';

export const forecast: WordAnalysis = {
    word: 'forecast',
    ipa: '/ˈfɔːrˌkæst/',
    partOfSpeech: 'noun / verb (名詞/動詞，尤指天氣或趨勢預測)',
    chineseMeaning: '預測、預報（尤指天氣預報、經濟預測）',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 原生時間前綴',
        morpheme: 'fore-',
        originalForm: 'fore (古英文)',
        variantNote: 'fore- 是英文本土的字首，不是從拉丁文借來的，意思和 before 相近。',
        meaning: '事先、預先 (beforehand, in advance)',
        category: '時間順序',
        grammaticalRole: '原生前綴'
      },
      {
        type: 'root',
        label: '💎 核心動詞',
        morpheme: 'cast',
        originalForm: 'kasta (古諾斯語)',
        variantNote: 'cast 原意是「投擲、丟」，這個字是中古英文從古諾斯語（維京人的語言）借來的。這裡的用法是引申義：「投擲、拋出」慢慢延伸成「盤算、推算」（就像中文說「盤算」也不是真的在算盤子），才會有「forecast＝事先盤算、預測」的意思。',
        meaning: '投擲、拋出；（引申）盤算、推算 (to throw; to calculate, reckon)',
        category: '核心動作',
        grammaticalRole: '動作中心'
      }
    ],
    phonetic: {
      assimilationPath: 'fore- (事先) + cast (投擲/盤算) ➔ 直接複合，無音變 ➔ forecast',
      phoneticAnalysis: 'fore- 和 cast 都是英文（或借入英文很久）的固有詞彙，直接組合，沒有拉丁文那種前綴同化現象。',
    },
    semantic: {
      prefixMeaning: '事先、預先 (fore-)',
      rootCoreAction: '推算、盤算 (cast)',
      suffixGrammar: '名詞/動詞',
      modernMeaning: '根據現有資料，事先推算並說出未來（天氣、經濟、趨勢等）可能會發生的情況',
      formulaDisplay: '{ 事先 (fore-) } + { 盤算、推算 (cast) } = 預測、預報 (forecast)',
      literalLogic: '字面是「事先就推算好」，最早的意思是「事先計畫、盤算」，後來才慢慢變成專門用於「天氣預報」等預測。'
    },
    familyTree: [
      { word: 'weather forecast', formula: 'weather + forecast', meaning: '天氣預報' },
      { word: 'forecaster', formula: 'forecast + -er (人)', meaning: '預報員、預測者' },
      { word: 'broadcast', formula: 'broad- (廣泛) + cast (投擲)', meaning: '廣播、播送' },
      { word: 'overcast', formula: 'over- (在上方) + cast', meaning: '多雲的、陰天的' },
      { word: 'foresee', formula: 'fore- (事先) + see (看見)', meaning: '預見、預知' }
    ],
    memory: {
      cognatesDaily: 'weather forecast (天氣預報), broadcast (廣播), cast a vote (投票)',
      oneSentenceMnemonic: 'fore (事先) + cast (盤算) ➔ 「事先盤算出來的結果」就是 forecast (預測)！',
      etymologicalOrigin: '英文本土字首 fore- 加上源自古諾斯語 kasta 的 cast 組合而成，14世紀就已出現「事先計畫」的用法。',
      commonCollocations: [
        'weather forecast (天氣預報)',
        'sales/economic forecast (銷售/經濟預測)',
        'forecast a rise/fall in prices (預測物價上漲/下跌)'
      ],
      contrastiveTips: 'forecast 通常指依據數據做出的專業、系統性預測（天氣、經濟），predict 用法更廣泛，可以是任何形式的預測（包含直覺猜測）。'
    },
    source: 'preset'
  };
