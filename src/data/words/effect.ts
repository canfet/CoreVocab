import { WordAnalysis } from '../../types';

export const effect: WordAnalysis = {
  word: 'effect',
  ipa: '/ɪˈfɛkt/',
  partOfSpeech: 'noun / verb (名詞/及物動詞)',
  chineseMeaning: '效果、影響、結果（名詞）；促成、實現（動詞）',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 同化前綴',
      morpheme: 'ef-',
      originalForm: 'ex- (拉丁語)',
      variantNote: 'ex- 遇到 f 開頭的字根時，最後的 x 會同化成 f，變成 ef-（ex- ➔ ef-）。',
      meaning: '向外、出來 (out, forth)',
      category: '空間/方向',
      grammaticalRole: '方向前綴'
    },
    {
      type: 'root',
      label: '💎 核心字根',
      morpheme: 'fect',
      originalForm: 'facere / factus (拉丁語)',
      variantNote: 'facere 是「做、製造」的意思，在複合字裡母音常會弱化，例如 ex- + facere 的組合會變成 efficere，完成被動分詞是 effectus，這正是 effect 這個字的直接來源。',
      meaning: '做、製造、完成 (to make, do)',
      category: '核心動作',
      grammaticalRole: '動作中心'
    }
  ],
  phonetic: {
    assimilationPath: 'ex- (向外) ➔ 同化為 ef- + facere/factus (做，弱化為 -ficere/-fectus) ➔ efficere ➔ effectus ➔ effect',
    phoneticAnalysis: 'ex- 的字尾 x 遇到 f 這個音，直接同化成 f，唸起來變成 ef-。facere 在複合字裡母音弱化成 fic-/fec-，而 effect 用的是完成被動分詞字幹 fect-（來自 factus 弱化後的 fectus）。',
    ruleKey: 'ex- ➔ ef- 前綴同化 (遇 f 全同化)',
    dualStemInfo: {
      presentStem: 'facere / fic- (現在式字幹，複合字中弱化)',
      supineStem: 'factus / fect- (完成被動分詞字幹，複合字中弱化)',
      meaning: '做、製造 (fect- 這個字幹也出現在 defect、perfect、infect 等字裡)'
    }
  },
  semantic: {
    prefixMeaning: '向外 (ef- < ex-)',
    rootCoreAction: '做出、製造出 (fect < facere)',
    suffixGrammar: '名詞/動詞',
    modernMeaning: '一個原因「做出來」向外顯現的結果，就是效果、影響；當動詞用時，則是主動「把某件事做出來」，也就是促成、實現',
    formulaDisplay: '{ 向外 (ef- < ex-) } + { 做出 (fect) } = 效果、促成 (effect)',
    literalLogic: '字面上是「做出來、顯現出來的東西」，某個原因造成的結果向外顯現，就是「效果」；作動詞時則是「把某件事情做出來、實現它」。'
  },
  familyTree: [
    { word: 'effective', formula: 'effect + -ive (形容詞)', meaning: '有效的、生效的', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'effectively', formula: 'effective + -ly (副詞)', meaning: '有效地；實際上', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'defect', formula: 'de- (缺、離) + fect (做)', meaning: '瑕疵、缺陷', level: 'TOEFL', tags: ['TOEFL'] },
    { word: 'perfect', formula: 'per- (完全) + fect (做)', meaning: '完美的（字面：完全做成的）', level: 'Core', tags: ['TOEIC'] },
    { word: 'infect', formula: 'in- (進入) + fect (做)', meaning: '感染', level: 'TOEIC', tags: ['TOEIC'] }
  ],
  memory: {
    cognatesDaily: 'have an effect on... (對...產生影響), side effect (副作用), take effect (生效)',
    oneSentenceMnemonic: 'ef (向外) + fect (做出) ➔ 一個原因「向外做出」的結果就是 effect (效果)！',
    etymologicalOrigin: '拉丁語 efficere（ex- 「向外」 + facere 「做」），完成被動分詞 effectus',
    visualImagery: '想像你把石頭丟進水裡，水面「向外做出」一圈圈漣漪，那些漣漪就是丟石頭這個動作的 effect。',
    commonCollocations: ['have a positive/negative effect (產生正面/負面影響)', 'side effect (副作用)', 'come into effect (開始生效)'],
    contrastiveTips: 'effect 多作名詞，指「結果、效果」；affect 多作動詞，指「影響（某人事物的狀態或情緒）」，兩者拼法相近但詞性不同，是常見的考題陷阱。'
  },
  source: 'preset'
};
