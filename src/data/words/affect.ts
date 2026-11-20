import { WordAnalysis } from '../../types';

export const affect: WordAnalysis = {
    word: 'affect',
    ipa: '/əˈfekt/',
    partOfSpeech: 'verb (及物動詞)',
    chineseMeaning: '影響、使受到影響；(較少見) 假裝、故作姿態',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 同化前綴',
        morpheme: 'af-',
        originalForm: 'ad- (拉丁語)',
        variantNote: 'ad- 遇到 f 這個音，會整個變身成 af- (ad- ➔ af-)',
        meaning: '朝向、對著 (to, toward)',
        category: '空間/方向',
        grammaticalRole: '趨向前綴'
      },
      {
        type: 'root',
        label: '💎 核心字根',
        morpheme: 'fect',
        originalForm: 'facere (拉丁語「做、製造」)，完成分詞幹 factus',
        variantNote: 'facere 放進複合字中間時，母音會弱化：現在式變成 -ficere，完成分詞變成 -fectus，所以英文裡看到的是 fect',
        meaning: '做、造成 (to do, make)',
        category: '核心動作',
        grammaticalRole: '分詞詞幹'
      }
    ],
    phonetic: {
      assimilationPath: 'ad- (朝向) ➔ 同化為 af- + facere ➔ -ficere (現在式) / -fectus (完成式) ➔ affect',
      phoneticAnalysis: 'ad- 遇到 f 開頭的字，字尾的 d 會換成 f，唸起來才順口（ad- + f... ➔ af-，像 affect, afford, affirm 都是這樣）。facere（做）這個字根放進複合字中間時，母音會弱化，才會變成 fect 這個長相（跟 effect, perfect, defect 是同一家族）。',
      ruleKey: 'ad- ➔ af- 語音同化 + facere 母音弱化 (a➔e/i)'
    },
    semantic: {
      prefixMeaning: '朝向、對著 (ad- ➔ af-)',
      rootCoreAction: '做、造成作用 (fect < facere)',
      suffixGrammar: '及物動詞',
      modernMeaning: '對某個對象施加作用，使它產生變化或反應',
      formulaDisplay: '{ 朝向 (af- < ad-) } + { 做/造成 (fect) } = 影響 (affect)',
      literalLogic: '字面上是「對著某個對象做一件事」，引申為「對它造成作用、產生影響」。'
    },
    familyTree: [
      { word: 'effect', formula: 'ex- (向外) + fect (做出)', meaning: '效果、結果（做出來的東西）', level: 'Core', tags: ['TOEIC'] },
      { word: 'affection', formula: 'affect + -ion', meaning: '情感、喜愛', level: 'TOEFL', tags: ['TOEFL'] },
      { word: 'affectation', formula: 'affect + -ation', meaning: '矯揉造作', level: 'GRE', tags: ['GRE'] },
      { word: 'perfect', formula: 'per- (徹底) + fect (做)', meaning: '完美的（徹底做完的）', level: 'Core', tags: ['TOEIC'] },
      { word: 'defect', formula: 'de- (缺少) + fect (做)', meaning: '缺陷（沒做好的部分）', level: 'TOEFL', tags: ['TOEFL', 'GRE'] }
    ],
    memory: {
      cognatesDaily: 'affect one\'s health (影響健康), be affected by (受到...影響), directly affect (直接影響)',
      oneSentenceMnemonic: 'af (朝向) + fect (施加作用) ➔ 「朝著對方施加作用」就是 affect (影響)！',
      etymologicalOrigin: '拉丁文 afficere（ad- 朝向 + facere 做），其完成分詞 affectus 進入英文變成 affect',
      visualImagery: '想像一顆石頭丟進水面（af- 朝向），激起的漣漪（fect 造成的作用）一圈圈往外擴散，影響到整個水面。',
      commonCollocations: [
        'affect the outcome/decision (影響結果/決定)',
        'be adversely affected (受到不利影響)'
      ],
      contrastiveTips: 'affect（動詞）是「影響」；effect（名詞為主，意思是「效果、結果」）是最常見的混淆點——可以記成「af-fect 是動作 (Action)，e-ffect 是最終結果 (End result)」。'
    },
    source: 'preset'
  };
