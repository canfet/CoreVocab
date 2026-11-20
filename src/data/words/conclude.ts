import { WordAnalysis } from '../../types';

export const conclude: WordAnalysis = {
    word: 'conclude',
    ipa: '/kənˈkluːd/',
    partOfSpeech: 'verb (及物/不及物動詞)',
    chineseMeaning: '總結、下結論、結束',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 前綴',
        morpheme: 'con-',
        originalForm: 'con- (拉丁語)',
        meaning: '完全、徹底 (completely, thoroughly)',
        category: '強調程度',
        grammaticalRole: '強調前綴'
      },
      {
        type: 'root',
        label: '💎 核心字根',
        morpheme: 'clude',
        originalForm: 'claudere (拉丁語「關閉」)',
        variantNote: 'claudere（關閉）放進複合字中間時，拼法會弱化，au 變成 u，所以寫成 -clude-（跟 include, exclude, preclude 是同一家族）',
        meaning: '關閉、關上 (to close, shut)',
        category: '核心動作',
        grammaticalRole: '分詞詞幹'
      }
    ],
    phonetic: {
      assimilationPath: 'con- (完全) + claudere (關閉) ➔ 弱化為 -cludere ➔ concludere ➔ conclude',
      phoneticAnalysis: 'con- 在 cl 開頭的字前面不需要同化，直接拼接。字根 claudere（關閉）放進複合字中間時，拼法從 au 弱化成 u，變成 -clude-。',
      ruleKey: 'con- 無同化直接拼接 + claudere 弱化為 clude'
    },
    semantic: {
      prefixMeaning: '完全、徹底 (con-)',
      rootCoreAction: '關閉、關上 (clude < claudere)',
      suffixGrammar: '及物/不及物動詞',
      modernMeaning: '把討論、思考或事件徹底關閉起來，得出最終的結果或看法',
      formulaDisplay: '{ 完全 (con-) } + { 關閉 (clude) } = 總結、下結論 (conclude)',
      literalLogic: '字面上是「把事情徹底關起來」，引申為「把一段討論或推理收尾、得出結論」。'
    },
    familyTree: [
      { word: 'conclusion', formula: 'conclude + -sion', meaning: '結論、結尾（名詞）', level: 'Core', tags: ['TOEIC'] },
      { word: 'include', formula: 'in- (向內) + clude (關)', meaning: '包括、包含（把東西關在裡面）', level: 'Core', tags: ['TOEIC'] },
      { word: 'exclude', formula: 'ex- (向外) + clude (關)', meaning: '排除（把東西關在外面）', level: 'TOEFL', tags: ['TOEFL'] },
      { word: 'preclude', formula: 'pre- (預先) + clude (關)', meaning: '排除、防止（預先就把可能性關起來）', level: 'GRE', tags: ['GRE'] },
      { word: 'close', formula: 'claudere 的英語化形式', meaning: '關閉、靠近', level: 'Core', tags: ['TOEIC'] }
    ],
    memory: {
      cognatesDaily: 'conclude a meeting (結束會議), researchers conclude that... (研究人員得出結論...), in conclusion (總結來說)',
      oneSentenceMnemonic: 'con (完全) + clude (關上) ➔ 「把整件事完全關起來收尾」就是 conclude (下結論/結束)！',
      etymologicalOrigin: '拉丁文 concludere（con- 完全 + claudere 關閉）',
      visualImagery: '想像開完一場會議後，主席把厚厚的資料夾「啪」一聲完全闔上，這個「關閉收尾」的動作就是 conclude。',
      commonCollocations: [
        'conclude that... (得出...的結論)',
        'conclude a deal/contract (完成一項交易/合約)',
        'to conclude (最後總結)'
      ],
      contrastiveTips: 'conclude 強調「經過推理、討論後得出結論」，語氣正式；finish/end 只是單純表示「結束」，不一定涉及推理判斷。'
    },
    source: 'preset'
  };
