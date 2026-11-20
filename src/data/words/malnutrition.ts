import { WordAnalysis } from '../../types';

export const malnutrition: WordAnalysis = {
    word: 'malnutrition',
    ipa: '/ˌmæl.nuːˈtrɪʃ.ən/',
    partOfSpeech: 'noun (不可數名詞)',
    chineseMeaning: '營養不良、營養失調',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 負面前綴',
        morpheme: 'mal-',
        originalForm: 'malus (拉丁語)',
        variantNote: '零音變前綴，直接加在字根前面',
        meaning: '不好、不良 (bad, poor)',
        category: '性質判斷',
        grammaticalRole: '負面前綴'
      },
      {
        type: 'root',
        label: '💎 核心字根',
        morpheme: 'nutri',
        originalForm: 'nutrire (拉丁語)',
        variantNote: '拉丁文「餵養、哺育」，nutrition, nourish, nurse 這些字都跟它同源',
        meaning: '滋養、餵養 (to nourish)',
        category: '核心動作',
        grammaticalRole: '動作核心'
      },
      {
        type: 'suffix',
        label: '🏷️ 名詞字尾',
        morpheme: '-tion',
        originalForm: '-tio / -tionis (拉丁語)',
        variantNote: '把動詞變成名詞的字尾，表示「...的動作或過程」',
        meaning: '...的過程、狀態',
        category: '抽象名詞',
        grammaticalRole: '名詞化後綴'
      }
    ],
    phonetic: {
      assimilationPath: 'malus (壞) ➔ mal- + nutrire (滋養) ➔ nutri + -tion (名詞化) ➔ malnutrition',
      phoneticAnalysis: 'mal- 不會因為後面接母音或子音而改變拼法。這是個四音節的長字，主重音落在 -tri-：/ˌmæl.nuːˈtrɪʃ.ən/。',
      ruleKey: 'mal- 零音變前綴直接複合'
    },
    semantic: {
      prefixMeaning: '不良地 (mal-)',
      rootCoreAction: '滋養、餵養 (nutri)',
      suffixGrammar: '名詞化 (-tion)',
      modernMeaning: '因為吃得不夠或營養不均衡，導致身體缺乏必要的養分',
      formulaDisplay: '{ 不良 (mal-) } + { 滋養 (nutri) } + { 的狀態 (-tion) } = 營養不良 (malnutrition)',
      literalLogic: '字面上是「餵養得不好」，可能是吃太少，也可能是吃了不均衡的食物，兩種情況都會造成營養不良。'
    },
    familyTree: [
      { word: 'nutrition', formula: 'nutri + -tion', meaning: '營養', level: 'Core', tags: ['TOEIC'] },
      { word: 'nutritious', formula: 'nutri + -tious', meaning: '有營養的', level: 'TOEIC', tags: ['TOEIC'] },
      { word: 'malnourished', formula: 'mal- + nourish + -ed', meaning: '營養不良的（形容詞）', level: 'TOEFL', tags: ['TOEFL'] },
      { word: 'malpractice', formula: 'mal- + practice', meaning: '醫療過失', level: 'TOEFL', tags: ['TOEFL'] }
    ],
    memory: {
      cognatesDaily: 'suffer from malnutrition (罹患營養不良), childhood malnutrition (兒童營養不良)',
      oneSentenceMnemonic: 'mal (不好) + nutrition (營養) ➔ 「營養補充得不好」就是 malnutrition (營養不良)！',
      etymologicalOrigin: '19世紀由 mal- 加上原本就存在的 nutrition（源自拉丁文 nutrire「滋養」）組合而成，是相對晚近的醫學用詞。',
      visualImagery: '想像一株因為缺水缺肥料而枯黃萎縮的植物，對照人體因為缺乏營養而消瘦、發育不良的樣子。',
      commonCollocations: [
        'severe malnutrition (嚴重營養不良)',
        'malnutrition rates (營養不良比例)'
      ],
      contrastiveTips: 'malnutrition 泛指「營養不足或不均衡」，可能吃很多但吃錯了；starvation（飢餓）specifically 指「食物量嚴重不足」，程度更極端。'
    },
    source: 'preset'
  };
