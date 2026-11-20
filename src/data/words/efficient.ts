import { WordAnalysis } from '../../types';

export const efficient: WordAnalysis = {
  word: 'efficient',
  ipa: '/ɪˈfɪʃənt/',
  partOfSpeech: 'adjective (形容詞)',
  chineseMeaning: '有效率的、能有效運作的',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 同化前綴',
      morpheme: 'ef-',
      originalForm: 'ex- (拉丁語)',
      variantNote: 'ex- 遇到 f 開頭的字根時，最後的 x 會同化成 f，變成 ef-（ex- ➔ ef-），跟 effect 是同一種變化模式。',
      meaning: '向外、出來 (out, forth)',
      category: '空間/方向',
      grammaticalRole: '方向前綴'
    },
    {
      type: 'root',
      label: '💎 核心字根',
      morpheme: 'fic',
      originalForm: 'facere (拉丁語)',
      variantNote: 'facere 是「做、製造」的意思，在複合字裡母音常會弱化拼成 -ficere；efficient 用的正是 efficere（ex- + facere 的複合形）現在分詞字幹 -ficient-。',
      meaning: '做、製造出成果 (to make, do)',
      category: '核心動作',
      grammaticalRole: '動作中心'
    },
    {
      type: 'suffix',
      label: '🏷️ 形容詞字尾',
      morpheme: '-ent',
      originalForm: '-ens / -entis (拉丁語現在分詞字尾)',
      variantNote: '-ent 是拉丁文現在分詞常見的字尾，表示「正在做...的」，加在動詞字幹後面把它變成形容詞。',
      meaning: '正在...的 (doing, characterized by)',
      category: '形容詞化',
      grammaticalRole: '現在分詞形容詞後綴'
    }
  ],
  phonetic: {
    assimilationPath: 'ex- (向外) ➔ 同化為 ef- + facere (做，弱化為 -ficere) + -ent (...的) ➔ efficiens ➔ efficient',
    phoneticAnalysis: 'ex- 的字尾 x 遇到 f 這個音，直接同化成 f，唸起來變成 ef-。字根 facere 在複合字裡母音弱化成 fic-，再加上現在分詞字尾 -ent，變成形容詞「能做出成果的」。',
    ruleKey: 'ex- ➔ ef- 前綴同化 (遇 f 全同化)'
  },
  semantic: {
    prefixMeaning: '向外 (ef- < ex-)',
    rootCoreAction: '做出成果 (fic < facere)',
    suffixGrammar: '形容詞 (-ent)',
    modernMeaning: '用最少的力氣或資源，就能「向外做出」最大的成果，也就是有效率的',
    formulaDisplay: '{ 向外 (ef- < ex-) } + { 做出成果 (fic) } + { ...的 (-ent) } = 有效率的 (efficient)',
    literalLogic: '字面上是「能夠向外做出成果的」，強調投入和產出之間的比例，用最少資源達成最大效果，就是有效率的。'
  },
  familyTree: [
    { word: 'efficiency', formula: 'efficient + -cy (名詞)', meaning: '效率', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'efficiently', formula: 'efficient + -ly (副詞)', meaning: '有效率地', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'effect', formula: 'ef- (向外) + fect (做出)', meaning: '效果、結果', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'sufficient', formula: 'suf- (在下方) + fic (做) + -ent', meaning: '足夠的', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'deficient', formula: 'de- (缺乏) + fic (做) + -ent', meaning: '不足的、有缺陷的', level: 'TOEFL', tags: ['TOEFL', 'GRE'] }
  ],
  memory: {
    cognatesDaily: 'an efficient way to do something (有效率的做事方法), energy-efficient (節能的), work efficiently (有效率地工作)',
    oneSentenceMnemonic: 'ef (向外) + fic (做出成果) + ent (...的) ➔ 能「向外做出」大量成果的，就是 efficient (有效率的)！',
    etymologicalOrigin: '拉丁語 efficiens（efficere 的現在分詞，ex- 「向外」 + facere 「做」）',
    visualImagery: '想像一台機器只用一點點電力，就能快速產出大量成品，那種「投入少、產出多」的畫面就是 efficient。',
    commonCollocations: ['an efficient system/process (有效率的系統/流程)', 'energy-efficient (節能的)', 'cost-efficient (符合成本效益的)'],
    contrastiveTips: 'efficient 強調「用最少資源達到最大效果」，重視過程的節省；effective 強調「有效、達到預期目的」，重視結果本身，不一定跟資源多寡有關。'
  },
  source: 'preset'
};
