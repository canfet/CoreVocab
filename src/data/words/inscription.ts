import { WordAnalysis } from '../../types';

export const inscription: WordAnalysis = {
    word: 'inscription',
    ipa: '/ɪnˈskrɪp.ʃən/',
    partOfSpeech: 'noun (名詞)',
    chineseMeaning: '銘刻、題詞、碑文、（書本的）題贈文字',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 前綴',
        morpheme: 'in-',
        originalForm: 'in- (拉丁語)',
        meaning: '向內、在...之上 (into, on)',
        category: '空間/方向',
        grammaticalRole: '方向前綴'
      },
      {
        type: 'root',
        label: '💎 核心字根',
        morpheme: 'script',
        originalForm: 'scribere (拉丁語「書寫」)，完成分詞幹 scriptus',
        meaning: '書寫、刻寫的東西 (to write, something written)',
        category: '核心動作',
        grammaticalRole: '分詞詞幹'
      },
      {
        type: 'suffix',
        label: '🏷️ 名詞字尾',
        morpheme: '-ion',
        originalForm: '-io / -ionem (拉丁語)',
        variantNote: '加在動詞完成分詞幹後面，把動作變成抽象名詞',
        meaning: '...的動作、結果 (act of, result of)',
        category: '抽象名詞',
        grammaticalRole: '名詞化後綴'
      }
    ],
    phonetic: {
      assimilationPath: 'in- (向內/之上) + scribere (書寫) ➔ 完成分詞 inscriptus (刻寫上去的) ➔ inscription',
      phoneticAnalysis: 'in- 在 s 開頭的字前面不需要同化，直接拼接。字根 scribere（書寫）有兩種長相：現在式的 scrib-（如 describe, subscribe）和完成分詞的 script-（如 description, manuscript），inscription 用的是後者。',
      ruleKey: 'in- 無同化直接拼接 + scribere 雙詞幹 (scrib/script)',
      dualStemInfo: {
        presentStem: 'scrib- (如 describe, subscribe)',
        supineStem: 'script- (如 description, manuscript)',
        meaning: '書寫'
      }
    },
    semantic: {
      prefixMeaning: '向內、刻在...上面 (in-)',
      rootCoreAction: '書寫、刻寫 (script < scribere)',
      suffixGrammar: '抽象名詞化 (-ion)',
      modernMeaning: '用刀、筆或工具把文字刻寫、書寫在某個表面上（如石碑、獎牌、書本扉頁）',
      formulaDisplay: '{ 向內/之上 (in-) } + { 書寫 (script) } + { ...的結果 (-ion) } = 銘刻、題詞 (inscription)',
      literalLogic: '字面上是「把文字刻寫到表面上」，所以引申為刻在石碑、金屬或書本上的文字。'
    },
    familyTree: [
      { word: 'inscribe', formula: 'in- (之上) + scribe (寫)', meaning: '銘刻、題寫（動詞）', level: 'TOEFL', tags: ['TOEFL', 'GRE'] },
      { word: 'describe', formula: 'de- (詳細) + scribe (寫)', meaning: '描述', level: 'Core', tags: ['TOEIC'] },
      { word: 'prescribe', formula: 'pre- (預先) + scribe (寫)', meaning: '開處方、規定', level: 'TOEFL', tags: ['TOEFL'] },
      { word: 'manuscript', formula: 'manu (手) + script (寫的東西)', meaning: '手稿', level: 'TOEFL', tags: ['TOEFL', 'GRE'] },
      { word: 'subscribe', formula: 'sub- (在下方) + scribe (寫)', meaning: '訂閱、簽署（在下面簽名）', level: 'TOEIC', tags: ['TOEIC'] }
    ],
    memory: {
      cognatesDaily: 'an inscription on a tombstone/ring (墓碑/戒指上的刻字), a book with a personal inscription (有親筆題字的書)',
      oneSentenceMnemonic: 'in (刻在上面) + script (書寫) + ion (結果) ➔ 「把文字刻寫在表面上」就是 inscription (銘刻/題詞)！',
      etymologicalOrigin: '拉丁文 inscriptio(n-)，來自動詞 inscribere（in- 之上 + scribere 書寫）',
      visualImagery: '想像工匠拿著鑿子，一筆一劃把文字刻進石碑表面，那些永久留下的文字就是 inscription。',
      commonCollocations: [
        'carve/engrave an inscription (雕刻銘文)',
        'a Latin inscription (拉丁文銘文)'
      ],
      contrastiveTips: 'inscription 通常指刻在堅硬表面（石頭、金屬、戒指）上的正式文字；caption 是圖片下方的說明文字，兩者用途不同，不要混淆。'
    },
    source: 'preset'
  };
