import { WordAnalysis } from '../../types';

export const premonition: WordAnalysis = {
  word: 'premonition',
  ipa: '/ˌpriː.məˈnɪʃ.ən/',
  partOfSpeech: 'noun (可數名詞)',
  chineseMeaning: '預感、預兆（通常指不好的事要發生）',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 前綴',
      morpheme: 'pre-',
      originalForm: 'prae- (拉丁語)',
      variantNote: 'pre- 沒有音變，直接接在字根前面。',
      meaning: '在...之前 (before)',
      category: '時間順序',
      grammaticalRole: '前綴'
    },
    {
      type: 'root',
      label: '💎 字根',
      morpheme: 'mon',
      originalForm: 'monēre / monitus (拉丁語)',
      variantNote: '拉丁文動詞 monēre 意思是「提醒、警告」，過去分詞形態是 monitus，英文很多跟「警告、監督」有關的字都來自這個字根。',
      meaning: '提醒、警告 (to remind, warn)',
      category: '言語/認知動作',
      grammaticalRole: '動作中心'
    },
    {
      type: 'suffix',
      label: '🏷️ 字尾',
      morpheme: '-ition',
      originalForm: '-itio, -itionis (拉丁語)',
      variantNote: '這個字尾加在動詞的過去分詞詞幹後面，把動作變成名詞，表示「...的動作或結果」。',
      meaning: '動作、狀態 (act, state of)',
      category: '抽象名詞化',
      grammaticalRole: '構成名詞'
    }
  ],
  phonetic: {
    assimilationPath: 'prae- (之前) + monēre (警告) ➔ 過去分詞 monitus ➔ 拉丁文 praemonitio ➔ 英文 premonition',
    phoneticAnalysis: '這個字保留了拉丁文過去分詞詞幹 monit- 再加上名詞字尾 -ion，中間的 t 因為字尾發音關係唸成 /ʃ/，是英文 -tion/-sion 常見的讀法。',
    ruleKey: 'pre- + monit + -ion (拉丁過去分詞名詞化)'
  },
  semantic: {
    prefixMeaning: '在...之前 (pre-)',
    rootCoreAction: '提醒、警告 (mon)',
    suffixGrammar: '抽象名詞 (-ition)',
    modernMeaning: '在事情實際發生之前，心裡先有一種說不出來由、但很強烈的「快要發生不好的事」的感覺',
    formulaDisplay: '{ 之前 (pre-) } + { 警告 (mon) } + { 狀態 (-ition) } = 預感、預兆 (premonition)',
    literalLogic: '字面上是「事先得到的警告」，即使沒有人真的開口說，內心也會有這種感覺。'
  },
  familyTree: [
    { word: 'monitor', formula: 'mon + -itor', meaning: '監視器；監督者（動詞：監控）', level: 'Core', tags: ['TOEIC'] },
    { word: 'admonish', formula: 'ad- (朝向) + monish (mon 變體)', meaning: '告誡、勸誡', level: 'GRE', tags: ['GRE', 'TOEFL'] },
    { word: 'monument', formula: 'mon + -ument', meaning: '紀念碑（用來提醒後人的建物）', level: 'TOEIC', tags: ['TOEIC', 'IELTS'] },
    { word: 'summon', formula: 'sum- (sub- 在下方) + mon', meaning: '召喚、傳喚', level: 'TOEFL', tags: ['TOEFL', 'GRE'] }
  ],
  memory: {
    cognatesDaily: 'have a premonition (有預感), a premonition of danger (危險的預兆)',
    oneSentenceMnemonic: 'pre (之前) + mon (警告) + ition (狀態) ➔ 「事發前內心先接到的警告」就是 premonition (預感)！',
    etymologicalOrigin: '來自拉丁文 praemonitio（praemonere「事先警告」，prae- + monēre「警告、提醒」）。',
    visualImagery: '想像出門前，心裡莫名浮現一股不安的感覺，好像有什麼不好的事要發生——這種說不清楚來源的警覺，就是 premonition。',
    commonCollocations: ['have a premonition (有種預感)', 'a premonition of danger/disaster (危險/災難的預兆)', 'ignore a premonition (無視預感)'],
    contrastiveTips: 'premonition 強調「一種說不出原因、直覺式的不祥預感」；prediction 是「根據證據或邏輯所做的理性預測」；hunch 語氣更口語，泛指「直覺、感覺」，不一定跟不好的事有關。'
  },
  source: 'preset'
};
