import { WordAnalysis } from '../../types';

export const inspect: WordAnalysis = {
    word: 'inspect',
    ipa: '/ɪnˈspekt/',
    partOfSpeech: 'verb (及物動詞)',
    chineseMeaning: '仔細檢查、檢視、視察、審查',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 前綴',
        morpheme: 'in-',
        originalForm: 'in-',
        meaning: '向內、進入 (in, into)',
        category: '深入空間',
        grammaticalRole: '前綴'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'spect',
        originalForm: 'spectus',
        meaning: '看、注視 (to look)',
        category: '視覺動作',
        grammaticalRole: '概念中心'
      }
    ],
    phonetic: {
      assimilationPath: 'in- (深入) + spect ➔ inspect',
      phoneticAnalysis: 'in- 遇到 sp- 開頭的字，不會變身，維持原本的樣子。',
      ruleKey: 'in- + spect'
    },
    semantic: {
      prefixMeaning: '向內部 (in-)',
      rootCoreAction: '細看 (spect)',
      suffixGrammar: '及物動詞',
      modernMeaning: '深入物體內部或細節進行仔細查驗',
      formulaDisplay: '{ 往內部 (in-) } + { 細看 (spect) } = 檢查、視察 (inspect)',
      literalLogic: '往裡面深深地看進去的意思。'
    },
    familyTree: [
      { word: 'inspector', formula: 'inspect + -or', meaning: '督察、檢查員' },
      { word: 'inspection', formula: 'inspect + -ion', meaning: '檢查、視察' }
    ],
    memory: {
      cognatesDaily: 'safety inspection (安全檢查), police inspector (警督)',
      oneSentenceMnemonic: 'in (往裡) + spect (看) ➔ 「往裡面仔細看」就是 inspect (檢查)！',
      etymologicalOrigin: '來自古拉丁文 īnspicere。'
    },
    source: 'preset'
  };
