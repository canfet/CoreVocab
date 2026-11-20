import { WordAnalysis } from '../../types';

export const rebuild: WordAnalysis = {
  word: 'rebuild',
  ipa: '/ˌriːˈbɪld/',
  partOfSpeech: 'verb (及物/不及物動詞)',
  chineseMeaning: '重建、改建、復原（建築物/組織/信任等）',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 前綴',
      morpheme: 're-',
      originalForm: 're- (拉丁語)',
      variantNote: 're- 本來是拉丁文的前綴，但它很早就被英文借用，而且用得非常廣，連 build 這種道地的英文字都能直接加上去，不需要理會原本的拉丁字。',
      meaning: '再次、重新 (again, anew)',
      category: '重複/回返',
      grammaticalRole: '動詞前綴'
    },
    {
      type: 'root',
      label: '💎 字根',
      morpheme: 'build',
      originalForm: 'byldan (古英文)',
      variantNote: '這是一個道地的古英文字，跟拉丁文完全沒有關係，本來的意思是「蓋房子」，字源可能跟「bold」（古字，指「住宅」）有關。',
      meaning: '建造、蓋、建立 (to construct)',
      category: '核心動作',
      grammaticalRole: '動作中心'
    }
  ],
  phonetic: {
    assimilationPath: 're- (重新) + build (建造) ➔ rebuild (無音變，直接拼接)',
    phoneticAnalysis: 'build 是英文自己的字，不是拉丁字根，所以 re- 加上去的時候完全不會變形，唸法也很單純：re 唸輕音節 /ri/，build 保留原本的重音。',
    ruleKey: 're- + 原生英文詞根 (零音變)'
  },
  semantic: {
    prefixMeaning: '重新、再一次 (re-)',
    rootCoreAction: '建造 (build)',
    suffixGrammar: '及物/不及物動詞',
    modernMeaning: '把已經損壞、拆除或失去的東西，重新建立起來',
    formulaDisplay: '{ 重新 (re-) } + { 建造 (build) } = 重建、復原 (rebuild)',
    literalLogic: '字面上就是「再蓋一次」，可以是實體建築，也可以是抽象的關係或信任。'
  },
  familyTree: [
    { word: 'building', formula: 'build + -ing', meaning: '建築物；建造（動名詞）', level: 'Core', tags: ['TOEIC'] },
    { word: 'builder', formula: 'build + -er', meaning: '建造者、建築商', level: 'Core', tags: ['TOEIC'] },
    { word: 'rebuilding', formula: 'rebuild + -ing', meaning: '重建工程（名詞化）', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'reconstruct', formula: 're- (重新) + con- (共同) + struct (建造)', meaning: '重建、重新構築（較正式，常用於抽象重組）', level: 'TOEFL', tags: ['TOEFL', 'IELTS'] }
  ],
  memory: {
    cognatesDaily: 'rebuild trust (重建信任), rebuild a house (重建房子), rebuild an economy (重振經濟)',
    oneSentenceMnemonic: 're (重新) + build (蓋) ➔ 「把倒塌的東西再蓋一次」就是 rebuild (重建)！',
    etymologicalOrigin: 'build 源自古英文 byldan；re- 是拉丁文借來的前綴，直接加在這個英文原生動詞前面。',
    visualImagery: '想像地震後的房子倒塌了，工人們拿著磚塊，一磚一瓦把它重新蓋起來。',
    commonCollocations: ['rebuild a city / house (重建城市/房子)', 'rebuild trust / relationships (重建信任/關係)', 'rebuild an economy (重振經濟)'],
    contrastiveTips: 'rebuild 強調「照原樣或更好地重新蓋起來」；renovate 是「翻新、整修既有建築的內部或外觀」，通常東西沒有全毀；restore 則偏向「恢復到原本的樣子（常用於古蹟、藝術品）」。'
  },
  source: 'preset'
};
