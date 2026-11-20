import { WordAnalysis } from '../../types';

export const revert: WordAnalysis = {
  word: 'revert',
  ipa: '/rɪˈvɜːrt/',
  partOfSpeech: 'verb (不及物動詞，常接 to)',
  chineseMeaning: '恢復原狀、恢復（舊習慣/舊制度）；（生物）返祖',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 前綴',
      morpheme: 're-',
      originalForm: 're- (拉丁語)',
      variantNote: 're- 在這裡沒有音變，單純表示「往回」的方向，跟後面的 vert（轉）搭配，變成「轉回去」。',
      meaning: '回、向後 (back)',
      category: '空間/回返',
      grammaticalRole: '動詞前綴'
    },
    {
      type: 'root',
      label: '💎 字根',
      morpheme: 'vert',
      originalForm: 'vertere / versus (拉丁語)',
      variantNote: '拉丁文動詞 vertere（轉動）也有兩種常見長相：動詞形態常用 -vert（如 revert, convert），但變成名詞時常會改用過去分詞的形態 -vers（如 reverse, version）。',
      meaning: '轉、翻轉 (to turn)',
      category: '核心動作',
      grammaticalRole: '動作中心'
    }
  ],
  phonetic: {
    assimilationPath: 're- (回) + vertere (轉) ➔ 拉丁文 revertere ➔ 英文 revert',
    phoneticAnalysis: 'revert 和 reverse 是同一個拉丁動詞 vertere 的兩種面貌：動詞常用 -vert（revert, convert, invert），名詞/形容詞常用 -vers（reverse, version, diverse）。',
    dualStemInfo: {
      presentStem: 'vert- (如 revert, convert, invert)',
      supineStem: 'vers- (如 reverse, version, universe)',
      meaning: '轉、翻轉 (turn)'
    },
    ruleKey: '拉丁雙詞幹 vert/vers'
  },
  semantic: {
    prefixMeaning: '回 (re-)',
    rootCoreAction: '轉、翻轉 (vert)',
    suffixGrammar: '不及物動詞',
    modernMeaning: '從目前改變過的狀態，轉回原本、更早之前的狀態或做法',
    formulaDisplay: '{ 回 (re-) } + { 轉 (vert) } = 恢復原狀、返祖 (revert)',
    literalLogic: '把方向「轉回去」，回到原本的樣子。'
  },
  familyTree: [
    { word: 'convert', formula: 'con- (完全) + vert', meaning: '轉換、改變信仰', level: 'TOEIC', tags: ['TOEIC', 'IELTS'] },
    { word: 'avert', formula: 'a- (ab- 離開) + vert', meaning: '避免、轉移（目光/危機）', level: 'TOEFL', tags: ['TOEFL', 'GRE'] },
    { word: 'reverse', formula: 're- (回) + verse (vert 變體)', meaning: '相反的；倒車、翻轉', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'version', formula: 'vers + -ion', meaning: '版本；說法', level: 'Core', tags: ['TOEIC'] },
    { word: 'diverse', formula: 'di- (分開) + verse (vert 變體)', meaning: '多樣的、各異的', level: 'TOEIC', tags: ['TOEIC', 'IELTS'] }
  ],
  memory: {
    cognatesDaily: 'revert to old habits (回到舊習慣), revert back to the original plan (恢復原本的計畫)',
    oneSentenceMnemonic: 're (回) + vert (轉) ➔ 「把方向轉回去」就是 revert (恢復原狀)！',
    etymologicalOrigin: '來自拉丁文 revertere（re- + vertere「轉」）。',
    visualImagery: '想像把一個已經調過的旋鈕，一格一格轉回它原本的刻度——這就是 revert 的畫面。',
    commonCollocations: ['revert to old habits (故態復萌)', 'revert to the original plan (恢復原本的計畫)', 'revert to default settings (恢復預設值)'],
    contrastiveTips: 'revert 強調「主動或自然地回到先前的狀態」，常用於習慣、制度、設定；return 泛指「回去」，可以是地點也可以是狀態；restore 則偏向「刻意把某物恢復到良好的狀態」，語氣較正式。'
  },
  source: 'preset'
};
