import { WordAnalysis } from '../../types';

export const assist: WordAnalysis = {
    word: 'assist',
    ipa: '/əˈsɪst/',
    partOfSpeech: 'verb (及物/不及物動詞)',
    chineseMeaning: '協助、幫助、援助',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 同化前綴',
        morpheme: 'as-',
        originalForm: 'ad- (拉丁語)',
        variantNote: 'ad- 遇到 s 這個音，會整個變身成 as- (ad- ➔ as-)',
        meaning: '朝向、在旁邊 (to, toward, near)',
        category: '空間/方向',
        grammaticalRole: '趨向前綴'
      },
      {
        type: 'root',
        label: '💎 核心字根',
        morpheme: 'sist',
        originalForm: 'sistere (拉丁語，是 stare「站立」的重複詞幹使役形式)',
        variantNote: 'sistere 是把 stare（站立）的字首音節重複一次所造出來的「使役動詞」，意思是「讓...站立、使...站穩」',
        meaning: '站立、使站立 (to stand, cause to stand)',
        category: '核心動作',
        grammaticalRole: '核心語義'
      }
    ],
    phonetic: {
      assimilationPath: 'ad- (朝向) ➔ 同化為 as- + sistere (使站立，來自 stare「站」) ➔ assist',
      phoneticAnalysis: 'ad- 遇到 s 開頭的字，字尾的 d 會換成 s，唸起來才順口（ad- + s... ➔ as-，像 assist, assign, assure 都是這樣）。字根 sistere 是拉丁文 stare（站立）的「使役」形式，意思是「讓某人／某物站起來、站穩」。',
      ruleKey: 'ad- ➔ as- 語音同化'
    },
    semantic: {
      prefixMeaning: '朝向、在旁邊 (ad- ➔ as-)',
      rootCoreAction: '使站立、站穩 (sist < sistere < stare)',
      suffixGrammar: '及物/不及物動詞',
      modernMeaning: '站在對方旁邊，扶著、撐著，讓對方能順利站穩或完成一件事',
      formulaDisplay: '{ 在旁邊 (as- < ad-) } + { 使站立 (sist) } = 協助 (assist)',
      literalLogic: '字面上是「站在旁邊扶著對方」，引申為在別人需要的時候提供協助、支援。'
    },
    familyTree: [
      { word: 'assistant', formula: 'assist + -ant (人)', meaning: '助理、助手', level: 'TOEIC', tags: ['TOEIC'] },
      { word: 'assistance', formula: 'assist + -ance (名詞)', meaning: '協助、援助', level: 'TOEIC', tags: ['TOEIC'] },
      { word: 'consist', formula: 'con- (共同) + sist (站立)', meaning: '由...組成、在於（大家一起站在一起）', level: 'TOEFL', tags: ['TOEFL'] },
      { word: 'resist', formula: 're- (反抗) + sist (站立)', meaning: '抵抗、反抗（站著頂住不動）', level: 'TOEIC', tags: ['TOEIC'] },
      { word: 'insist', formula: 'in- (堅持) + sist (站立)', meaning: '堅持（站穩立場不退讓）', level: 'TOEIC', tags: ['TOEIC'] }
    ],
    memory: {
      cognatesDaily: 'assist someone with something (協助某人做某事), assist in the investigation (協助調查), a helpful assistant (得力的助理)',
      oneSentenceMnemonic: 'as (在旁邊) + sist (扶著站穩) ➔ 「站在旁邊扶對方一把」就是 assist (協助)！',
      etymologicalOrigin: '拉丁文 assistere（ad- 朝向/在旁 + sistere 使站立，而 sistere 又是 stare「站」的使役形式）',
      visualImagery: '想像一位教練站在學員旁邊，一手扶著他，讓他能穩穩地站起來完成動作，這種「站在旁邊扶持」的畫面就是 assist。',
      commonCollocations: [
        'assist with/in (協助...)',
        'financial assistance (財務援助)',
        'assist customers (協助顧客)'
      ],
      contrastiveTips: 'assist 語氣比 help 更正式，常用在專業或制式場合（如醫療、客服）；help 是最普遍常用的字，日常對話中更常見。'
    },
    source: 'preset'
  };
