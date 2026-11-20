import { WordAnalysis } from '../../types';

export const disagree: WordAnalysis = {
    word: 'disagree',
    ipa: '/ˌdɪs.əˈɡriː/',
    partOfSpeech: 'verb (不及物動詞)',
    chineseMeaning: '不同意、意見相左、不一致',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 否定前綴',
        morpheme: 'dis-',
        originalForm: 'dis- (拉丁語)',
        variantNote: 'dis- 加在動詞前面，表示「相反的動作」',
        meaning: '相反、不 (opposite of, not)',
        category: '否定極性',
        grammaticalRole: '否定前綴'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'agree',
        originalForm: 'agreer (古法語) ← a gré (拉丁語 gratum)',
        variantNote: '古法語 agreer 字面是「照著心意去做」，agré 這部分來自拉丁文 gratum「令人愉快的」',
        meaning: '同意、依照心意 (to consent, to please)',
        category: '核心動作',
        grammaticalRole: '動作中心'
      }
    ],
    phonetic: {
      assimilationPath: 'dis- (相反) + agree (同意) ➔ disagree',
      phoneticAnalysis: 'dis- 直接接在 agree 前面，不需要變身，唸的時候重音在最後一個音節 disaGREE。',
      ruleKey: 'dis- + agree 直接拼接'
    },
    semantic: {
      prefixMeaning: '相反 (dis-)',
      rootCoreAction: '同意、照著心意 (agree)',
      suffixGrammar: '不及物動詞',
      modernMeaning: '對某個看法、做法抱持相反的意見，無法達成一致',
      formulaDisplay: '{ 相反 (dis-) } + { 同意 (agree) } = 不同意 (disagree)',
      literalLogic: '就是把「同意」整個反過來，變成「不同意」。'
    },
    familyTree: [
      { word: 'agree', formula: '字根本體', meaning: '同意、贊成' },
      { word: 'agreement', formula: 'agree + -ment', meaning: '協議、同意 (名詞)' },
      { word: 'disagreement', formula: 'disagree + -ment', meaning: '意見不合、爭執 (名詞)' },
      { word: 'agreeable', formula: 'agree + -able', meaning: '令人愉快的、隨和的' }
    ],
    memory: {
      cognatesDaily: 'agree to disagree (同意保留各自的意見), strongly disagree (強烈反對)',
      oneSentenceMnemonic: 'dis (相反) + agree (同意) ➔ 「把同意整個反過來」就是 disagree (不同意)！',
      etymologicalOrigin: '古法語 agreer (a gré「順著心意」，來自拉丁文 gratum「令人愉快的」) 加上否定前綴 dis-',
      commonCollocations: [
        'disagree with someone (不同意某人的看法)',
        'disagree on/about something (在某件事上意見不合)'
      ],
      contrastiveTips: 'disagree 是正式表達「意見不同」的中性說法；argue 帶有「爭執、爭吵」的情緒色彩，語氣更強烈。'
    },
    source: 'preset'
  };
