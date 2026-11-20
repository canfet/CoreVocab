import { WordAnalysis } from '../../types';

export const oppose: WordAnalysis = {
  word: 'oppose',
  ipa: '/əˈpoʊz/',
  partOfSpeech: 'verb (及物動詞)',
  chineseMeaning: '反對、對抗',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 同化前綴',
      morpheme: 'op-',
      originalForm: 'ob- (拉丁語)',
      variantNote: 'ob- 遇到 p 開頭的字根時，最後的 b 會同化成 p，變成 op-（ob- ➔ op-）。',
      meaning: '對著、相對 (against, opposite)',
      category: '空間/方向',
      grammaticalRole: '方向前綴'
    },
    {
      type: 'root',
      label: '💎 核心字根',
      morpheme: 'pose',
      originalForm: '古法語 poser (< 通俗拉丁語 pausare)',
      variantNote: '這裡要特別小心一個常見的誤解：oppose 看起來很像是「ob- + ponere（放置）」組成的，但其實不是。oppose 的字根是古法語 poser「放置」，而 poser 本身是從通俗拉丁語 pausare「停下、休息」演變來的（跟英文 pause 同源），跟 ponere 沒有直接的字源關係。中世紀法語裡 poser 因為意思相近，漸漸取代了很多本來該用 ponere 衍生詞的位置，才讓兩者看起來很像親戚，但實際上是兩個不同的字源家族。',
      meaning: '放置、擺放 (to place, put)',
      category: '核心動作',
      grammaticalRole: '動作中心'
    }
  ],
  phonetic: {
    assimilationPath: 'ob- (對著) ➔ 同化為 op- + poser (放置，源自通俗拉丁語 pausare) ➔ 古法語 opposer ➔ oppose',
    phoneticAnalysis: 'ob- 的字尾 b 遇到 p 這個音，直接同化成 p，唸起來變成 op-。字根部分則是法語的 poser，跟看起來很像的拉丁字根 ponere（position, compose 那個家族）其實是不同的來源，唸法和拼法上容易混淆但字源不同。',
    ruleKey: 'ob- ➔ op- 前綴同化 (遇 p 全同化)'
  },
  semantic: {
    prefixMeaning: '對著、面對面 (op- < ob-)',
    rootCoreAction: '放置、擺放 (pose < 古法語 poser)',
    suffixGrammar: '及物動詞',
    modernMeaning: '把自己「放在對方的對面」，引申為站在相反的立場上、表示反對或對抗',
    formulaDisplay: '{ 對著 (op- < ob-) } + { 放置 (pose) } = 反對、對抗 (oppose)',
    literalLogic: '字面上是「把（自己或某個立場）放在對方的正對面」，也就是站在對立的一方，引申為反對、對抗。'
  },
  familyTree: [
    { word: 'opposite', formula: 'oppose + -ite (形容詞)', meaning: '相反的、對面的', level: 'Core', tags: ['TOEIC'] },
    { word: 'opposition', formula: 'oppose + -ition (名詞)', meaning: '反對、反對派', level: 'TOEIC', tags: ['TOEIC', 'IELTS'] },
    { word: 'opponent', formula: 'ob- (對著) + ponent (放置者，來自 ponere)', meaning: '對手、反對者', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'compose', formula: 'com- (一起) + pose (放置)', meaning: '組成、創作', level: 'Core', tags: ['TOEIC'] },
    { word: 'propose', formula: 'pro- (向前) + pose (放置)', meaning: '提議、求婚', level: 'TOEIC', tags: ['TOEIC'] }
  ],
  memory: {
    cognatesDaily: 'oppose a plan/proposal (反對一項計畫/提案), strongly oppose (強烈反對), oppose each other (互相對立)',
    oneSentenceMnemonic: 'op (對著) + pose (放置) ➔ 把自己「放在對方正對面」就是 oppose (反對)！',
    etymologicalOrigin: '古法語 opposer（ob- 「對著」 + poser 「放置」），poser 源自通俗拉丁語 pausare「停下」，跟拉丁語 ponere「放置」是不同字源，只是後來意思和拼寫上重疊了。',
    visualImagery: '想像辯論場上兩人隔著講台正面對峙，各自「站在對面」堅持己見，那個對峙的畫面就是 oppose。',
    commonCollocations: ['oppose a bill/policy (反對法案/政策)', 'strongly oppose (強烈反對)', 'as opposed to (相對於、而不是)'],
    contrastiveTips: '常見誤解：很多人以為 oppose 和 position、propose、compose 一樣都來自拉丁 ponere，其實 oppose 的字根是法語 poser（源自 pausare），跟 ponere 家族不是同一個字源，只是長得很像；真正屬於 ponere 家族、直接保留 ob- + ponere 的字反而是 opponent。'
  },
  source: 'preset'
};
