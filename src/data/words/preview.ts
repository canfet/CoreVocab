import { WordAnalysis } from '../../types';

export const preview: WordAnalysis = {
  word: 'preview',
  ipa: '/ˈpriː.vjuː/',
  partOfSpeech: 'noun (可數名詞) / verb (及物動詞)',
  chineseMeaning: '（名）預覽、試映、預演；（動）預先查看、試映',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 前綴',
      morpheme: 'pre-',
      originalForm: 'prae- (拉丁語)',
      variantNote: 'pre- 是最單純的前綴之一，不管接在什麼字前面都不會變形，永遠表示「在...之前」。',
      meaning: '在...之前、預先 (before)',
      category: '時間順序',
      grammaticalRole: '前綴'
    },
    {
      type: 'root',
      label: '💎 字根',
      morpheme: 'view',
      originalForm: 'veue (古法語，veoir「看」的過去分詞)',
      variantNote: '這個字源自古法文「看」的過去分詞形態，最後又能追溯到拉丁文 vidēre（看）。',
      meaning: '看、觀看 (to see, a look)',
      category: '視覺感知',
      grammaticalRole: '概念核心'
    }
  ],
  phonetic: {
    assimilationPath: 'pre- (預先) + veue (看) ➔ 英文 view ➔ preview',
    phoneticAnalysis: 'pre- 加在英文已經在用的名詞/動詞 view 前面，沒有任何音變，是很單純的拼接。',
    ruleKey: 'pre- + view (透明拼接)'
  },
  semantic: {
    prefixMeaning: '預先 (pre-)',
    rootCoreAction: '看 (view)',
    suffixGrammar: '名詞 / 及物動詞',
    modernMeaning: '在正式公開之前，先看過或先展示（電影、產品、報告等）的一部分內容',
    formulaDisplay: '{ 預先 (pre-) } + { 看 (view) } = 預覽、試映 (preview)',
    literalLogic: '在正式登場之前，先看一眼。'
  },
  familyTree: [
    { word: 'review', formula: 're- (再次) + view', meaning: '評論、回顧；再次查看', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'interview', formula: 'inter- (之間) + view', meaning: '面試、採訪', level: 'Core', tags: ['TOEIC'] },
    { word: 'viewpoint', formula: 'view + point', meaning: '觀點、看法', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'evident', formula: 'e- (向外) + vid + -ent', meaning: '明顯的（同源字根 vid「看」）', level: 'TOEFL', tags: ['TOEFL', 'GRE'] }
  ],
  memory: {
    cognatesDaily: 'movie preview (電影預告/試映), preview a document (預先查看文件)',
    oneSentenceMnemonic: 'pre (預先) + view (看) ➔ 「正式上映前先看一眼」就是 preview (預覽)！',
    etymologicalOrigin: 'view 源自古法文 veue，可追溯到拉丁文 vidēre（看）；pre- 是直接加在這個字前面組成的英文複合字。',
    visualImagery: '想像電影還沒上映，你受邀進場搶先看幾分鐘片段——這就是 preview。',
    commonCollocations: ['a movie/film preview (電影預告), preview a report (預先查看報告)', 'sneak preview (搶先看)'],
    contrastiveTips: 'preview 是「正式公開前搶先看一部分」；trailer 專指「電影的預告片」；review 則是「事後的評論或回顧」，時間點正好相反。'
  },
  source: 'preset'
};
