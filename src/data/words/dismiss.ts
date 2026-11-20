import { WordAnalysis } from '../../types';

export const dismiss: WordAnalysis = {
    word: 'dismiss',
    ipa: '/dɪsˈmɪs/',
    partOfSpeech: 'verb (及物動詞)',
    chineseMeaning: '解僱、解散、駁回、摒除（念頭）',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 前綴',
        morpheme: 'dis-',
        originalForm: 'dis- (拉丁語)',
        variantNote: '這裡的 dis- 強調「往外、分開送走」的方向感',
        meaning: '離開、分散 (apart, away)',
        category: '空間/方向',
        grammaticalRole: '方向前綴'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'miss',
        originalForm: 'mittere / missus (拉丁語)',
        variantNote: '拉丁動詞 mittere「發送」有兩種長相：字典寫法用 mitt-，但變化成過去分詞時會變成 miss-，dismiss 用的就是 miss- 這個分詞形式',
        meaning: '發送、放出 (to send, let go)',
        category: '核心動作',
        grammaticalRole: '動作中心'
      }
    ],
    phonetic: {
      assimilationPath: 'dis- (往外) + mittere ➔ 分詞幹 missus ➔ dismissus ➔ 英文 dismiss',
      phoneticAnalysis: '拉丁動詞 mittere（發送）的過去分詞是 missus，很多英文字用的其實是這個分詞形式，拼成 miss，而不是原本的 mitt。',
      dualStemInfo: {
        presentStem: 'mitt- (如 transmit 傳送, submit 提交, commit 承諾/犯下)',
        supineStem: 'miss- (如 mission 任務, permission 許可, dismiss 解僱)',
        meaning: '發送、放出 (send, let go)'
      },
      ruleKey: 'mitt/miss 雙詞幹'
    },
    semantic: {
      prefixMeaning: '往外、離開 (dis-)',
      rootCoreAction: '發送、放走 (miss < mittere)',
      suffixGrammar: '及物動詞',
      modernMeaning: '把人送離開原本的職位或場合，或是把某個念頭、意見放到一邊不予理會',
      formulaDisplay: '{ 往外 (dis-) } + { 送走 (miss) } = 解僱、駁回 (dismiss)',
      literalLogic: '字面上是「把人或事往外送走」，用在職場上就是解僱，用在法庭或想法上就是駁回、不予理會。'
    },
    familyTree: [
      { word: 'dismissal', formula: 'dismiss + -al', meaning: '解僱、開除 (名詞)' },
      { word: 'mission', formula: 'miss + -ion', meaning: '任務、使命' },
      { word: 'transmit', formula: 'trans- (跨越) + mit', meaning: '傳送、傳播' },
      { word: 'commit', formula: 'com- (完全) + mit', meaning: '承諾、犯下 (罪行)' },
      { word: 'missile', formula: 'miss + -ile', meaning: '飛彈 (被發射出去的東西)' }
    ],
    memory: {
      cognatesDaily: 'dismiss an employee (解僱員工), dismiss a case (駁回案件), dismiss an idea (不予理會這個想法)',
      oneSentenceMnemonic: 'dis (往外) + miss (送走) ➔ 「把人往外送走」就是 dismiss (解僱/駁回)！',
      etymologicalOrigin: '中世紀拉丁文 dismissus，源自拉丁文 dimittere (dis- + mittere「發送」)',
      commonCollocations: [
        'dismiss someone from a job (將某人開除)',
        'the judge dismissed the case (法官駁回此案)',
        'dismiss a suggestion (不理會某個建議)'
      ],
      contrastiveTips: 'dismiss 是正式用詞，可以指「開除」也可以指「不予理會（想法、可能性）」；fire 是比較口語、專門用在「開除員工」的說法。'
    },
    source: 'preset'
  };
