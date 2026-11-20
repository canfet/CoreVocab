import { WordAnalysis } from '../../types';

export const foretell: WordAnalysis = {
    word: 'foretell',
    ipa: '/fɔːrˈtel/',
    partOfSpeech: 'verb (及物/不及物動詞，不規則動詞：foretell - foretold - foretold)',
    chineseMeaning: '預言、預告（尤指憑直覺、徵兆或超自然能力預先說出將發生的事）',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 原生時間前綴',
        morpheme: 'fore-',
        originalForm: 'fore (古英文)',
        variantNote: 'fore- 是英文本土的字首，和拉丁文的 ante-、pre- 意思相近，但來源完全不同。',
        meaning: '事先、預先 (beforehand, in advance)',
        category: '時間順序',
        grammaticalRole: '原生前綴'
      },
      {
        type: 'root',
        label: '💎 核心動詞',
        morpheme: 'tell',
        originalForm: 'tellan (古英文)',
        variantNote: '古英文的 tellan 原本的意思比較廣，包含「數、算」和「講述、陳述」，後來「數、算」的意思漸漸只留在 teller（銀行的出納員，原意是「數錢的人」），日常的 tell 則只剩下「說、告知」的意思。',
        meaning: '說、講述、告知 (to say, relate, narrate)',
        category: '言語溝通',
        grammaticalRole: '動作中心'
      }
    ],
    phonetic: {
      assimilationPath: 'fore- (事先) + tell (說) ➔ 直接複合，無音變 ➔ foretell',
      phoneticAnalysis: '兩個部分都是英文固有詞彙，直接拼接，沒有經過音變。',
    },
    semantic: {
      prefixMeaning: '事先、預先 (fore-)',
      rootCoreAction: '說、講述 (tell)',
      suffixGrammar: '及物/不及物動詞',
      modernMeaning: '在事情發生之前就先說出來，通常帶有預言、占卜或憑徵兆猜測的意味',
      formulaDisplay: '{ 事先 (fore-) } + { 說 (tell) } = 預言、預告 (foretell)',
      literalLogic: '字面就是「事先說出來」，語氣比中性的 predict 更帶有一點命運、占卜的味道。'
    },
    familyTree: [
      { word: 'fortune-teller', formula: 'fortune (命運) + tell + -er', meaning: '算命師' },
      { word: 'teller', formula: 'tell + -er (人)', meaning: '（銀行）出納員；講述者' },
      { word: 'foresee', formula: 'fore- (事先) + see (看)', meaning: '預見、預知' },
      { word: 'forecast', formula: 'fore- (事先) + cast (盤算)', meaning: '預測' }
    ],
    memory: {
      cognatesDaily: 'fortune-teller (算命師), tell a story (講故事), tell the truth (說實話)',
      oneSentenceMnemonic: 'fore (事先) + tell (說) ➔ 「事情發生前就先說出來」就是 foretell (預言)！',
      etymologicalOrigin: '古英文本土組合字，fore（事先）+ tellan（講述），從古英文時期就已存在。',
      commonCollocations: [
        'foretell the future (預言未來)',
        'foretell disaster/doom (預言災難)',
        'as legend foretold (正如傳說所預言的)'
      ],
      contrastiveTips: 'foretell 語氣比較古典、帶有預言色彩，常見於文學、傳說或先知的語境；predict 是中性、科學化的日常用字，foresee 則強調「看出來」而不一定「說出來」。'
    },
    source: 'preset'
  };
