import { WordAnalysis } from '../../types';

export const assiduous: WordAnalysis = {
    word: 'assiduous',
    ipa: '/əˈsɪdʒ.u.əs/',
    partOfSpeech: 'adjective (形容詞)',
    chineseMeaning: '勤勉的、專心致志的、堅持不懈的',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 同化前綴',
        morpheme: 'as-',
        originalForm: 'ad- (拉丁語)',
        variantNote: 'ad- 遇到 s 這個音，會整個變身成 as- (ad- ➔ as-)',
        meaning: '朝向、靠近 (to, toward, at)',
        category: '空間/方向',
        grammaticalRole: '趨向前綴'
      },
      {
        type: 'root',
        label: '💎 核心字根',
        morpheme: 'sid',
        originalForm: 'sedere (拉丁語「坐」)',
        variantNote: 'sedere 放進複合字中間時，母音會弱化，e 變成 i，所以寫成 -sid-（跟 president, resident 的 -sid- 是同一種變化）',
        meaning: '坐、駐守 (to sit)',
        category: '核心動作',
        grammaticalRole: '核心語義'
      },
      {
        type: 'suffix',
        label: '🏷️ 形容詞字尾',
        morpheme: '-uous',
        originalForm: '-uus (拉丁語形容詞字尾)',
        variantNote: '這個字尾放在動詞字根後面，表示「不斷做某動作的」，進入英文變成 -uous（例如 continuous, strenuous）',
        meaning: '具有...性質、傾向的',
        category: '形容詞化',
        grammaticalRole: '形容詞後綴'
      }
    ],
    phonetic: {
      assimilationPath: 'ad- (朝向) ➔ 同化為 as- + sedere ➔ -sid- (坐) + -uus ➔ assiduus ➔ assiduous',
      phoneticAnalysis: 'ad- 遇到 s 開頭的字，字尾的 d 會換成 s，唸起來才順口（ad- + s... ➔ as-，像 assiduous, assist, assign 都是這樣）。字根 sedere（坐）放進複合字中間時，母音會從 e 弱化成 i，變成 -sid-。',
      ruleKey: 'ad- ➔ as- 語音同化 + sedere 母音弱化 (e➔i)'
    },
    semantic: {
      prefixMeaning: '朝向、靠近 (ad- ➔ as-)',
      rootCoreAction: '坐在旁邊、常駐 (sid < sedere)',
      suffixGrammar: '具有...性質的 (-uous)',
      modernMeaning: '像是長時間坐在某件事旁邊不離開一樣，形容一個人做事勤勉、堅持不懈',
      formulaDisplay: '{ 朝向/靠近 (as- < ad-) } + { 坐 (sid) } + { 具有...性質的 (-uous) } = 勤勉的 (assiduous)',
      literalLogic: '字面上是「一直坐在旁邊不走」，引申為做事情很專心、很勤勞，長時間堅持不懈。'
    },
    familyTree: [
      { word: 'assiduously', formula: 'assiduous + -ly', meaning: '勤勉地、不懈地', level: 'GRE', tags: ['GRE'] },
      { word: 'assiduity', formula: 'assiduous + -ity', meaning: '勤奮、專注', level: 'GRE', tags: ['GRE'] },
      { word: 'sedentary', formula: 'sedent (坐) + -ary', meaning: '久坐的、靜態的', level: 'TOEFL', tags: ['TOEFL', 'IELTS'] },
      { word: 'president', formula: 'prae- (在前) + sid (坐) + -ent', meaning: '總統、主席（坐在前面主持的人）', level: 'Core', tags: ['TOEIC'] },
      { word: 'reside', formula: 're- (一再) + side (坐)', meaning: '居住、定居', level: 'TOEIC', tags: ['TOEIC', 'IELTS'] }
    ],
    memory: {
      cognatesDaily: 'an assiduous worker/student (勤勉的員工/學生), assiduous effort (不懈的努力)',
      oneSentenceMnemonic: 'as (靠近) + sid (坐著) + uous (的) ➔ 「一直坐在旁邊不肯離開」就是 assiduous (勤勉的)！',
      etymologicalOrigin: '拉丁文 assiduus（來自 assidere：ad- 朝向 + sedere 坐，原意是「常常坐在某處」）',
      visualImagery: '想像一位學生從早到晚都坐在書桌前不起身，這種「坐著不動、持續努力」的畫面就是 assiduous 的精神。',
      commonCollocations: [
        'assiduous attention (孜孜不倦的關注)',
        'assiduous in one\'s studies (在學業上勤勉)',
        'assiduous efforts (不懈的努力)'
      ],
      contrastiveTips: 'assiduous 強調「持續、勤懇、堅持不懈」，語氣正式；diligent 也是「勤勉的」但更常用、更廣泛；industrious 強調「勤勞、有生產力」。'
    },
    source: 'preset'
  };
