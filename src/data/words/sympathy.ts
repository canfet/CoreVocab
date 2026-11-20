import { WordAnalysis } from '../../types';

export const sympathy: WordAnalysis = {
    word: 'sympathy',
    ipa: '/ˈsɪm.pə.θi/',
    partOfSpeech: 'noun (不可數名詞)',
    chineseMeaning: '同情心、贊同、慰問',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 前綴',
        morpheme: 'sym-',
        originalForm: 'syn- (σύν)',
        variantNote: 'syn- 遇到用嘴唇發音的 p，會偷偷換一個字母，變身成 sym-，唸起來才會更順。',
        meaning: '共同、一起 (together, with)',
        category: '群聚/共有',
        grammaticalRole: '構詞前綴'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'path',
        originalForm: 'pathos (πάθος)',
        variantNote: '來自古希臘文 pathos，意思是感受、痛苦、承受這些心情。',
        meaning: '感受、痛苦、疾病 (feeling, suffering)',
        category: '情感概念',
        grammaticalRole: '核心概念'
      },
      {
        type: 'suffix',
        label: '🏷️ 字尾',
        morpheme: '-y',
        originalForm: '-ia (希臘抽象名詞尾)',
        variantNote: '放在字尾，表示一種狀態或性質。',
        meaning: '狀態、性質、行為 (condition, quality)',
        category: '抽象名詞',
        grammaticalRole: '構成名詞'
      }
    ],
    phonetic: {
      assimilationPath: 'syn- + path- + -y ➔ [n] 遇雙唇音 [p] 變音同化為雙唇鼻音 [m] ➔ sympathy',
      phoneticAnalysis: '這是古希臘文的變身規則：/n/ 這個音，如果後面接著要閉嘴唇才能發出的 /p/、/b/、/m/，嘴巴會提早閉起來，讓 /n/ 偷偷換成 /m/，唸起來才會更順。',
      ruleKey: 'syn- 希臘同化規則'
    },
    semantic: {
      prefixMeaning: '共同 / 一起 (syn- ➔ sym-)',
      rootCoreAction: '感受 / 痛苦 (path)',
      suffixGrammar: '抽象心智狀態 (-y)',
      modernMeaning: '對他人遭遇之痛苦產生「感同身受」的慈悲心或情感共鳴',
      formulaDisplay: '{ 共同 (syn- ➔ sym-) } + { 情感/痛苦 (path) } + { 狀態 (-y) } = 同情心 (sympathy)',
      literalLogic: '古希臘文原本的意思是「和別人一起感受痛苦」，後來就變成了心裡的共鳴和同情。'
    },
    familyTree: [
      { word: 'empathy', formula: 'en- ➔ em- (在...之中) + path + -y', meaning: '神入、共情、同理心（深刻融入他人境遇）' },
      { word: 'apathy', formula: 'a- (無/非) + path + -y', meaning: '冷漠、無動於衷、缺乏興趣' },
      { word: 'antipathy', formula: 'anti- (反對/敵對) + path + -y', meaning: '反感、厭惡、強烈排斥' },
      { word: 'pathology', formula: 'path + -ology (學問)', meaning: '病理學、病變研究' },
      { word: 'telepathy', formula: 'tele- (遙遠) + path + -y', meaning: '心靈感應、傳心術' }
    ],
    memory: {
      cognatesDaily: 'pathetic (可憐的/差勁的), passion (熱情 - 來自拉丁同源 passio)',
      oneSentenceMnemonic: 'sym (一起) + path (感受) + y ➔ 和他人「一起感受痛苦」，就是同情 sympathy！',
      etymologicalOrigin: '來自古希臘文 συμπάθεια（sympátheia），syn 是「共同」，pathos 是「感受」。',
      contrastiveTips: 'sympathy 是「從旁邊同情、替對方的處境難過」(feel sorry FOR someone)，比較像是關心與慰問；empathy 則是「感同身受、彷彿親身經歷對方的感受」(feel WITH someone)，語感更深一層。兩者不可互換使用。'
    },
    source: 'preset'
  };
