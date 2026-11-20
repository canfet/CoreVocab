import { WordAnalysis } from '../../types';

export const attain: WordAnalysis = {
    word: 'attain',
    ipa: '/əˈteɪn/',
    partOfSpeech: 'verb (及物/不及物動詞)',
    chineseMeaning: '達到、獲得、實現（目標/成就/年齡/地位）',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 同化前綴',
        morpheme: 'at-',
        originalForm: 'ad- (拉丁語)',
        variantNote: 'ad- 遇到 t 這個音，會整個變身成 at- (ad- ➔ at-)',
        meaning: '朝向、去、達到 (to, toward, reach to)',
        category: '空間/方向',
        grammaticalRole: '趨向前綴'
      },
      {
        type: 'root',
        label: '💎 核心字根',
        morpheme: 'tain',
        originalForm: 'tangere (拉丁語) / tenēre',
        variantNote: '來自古拉丁文 attingere (ad- + tangere「觸碰／到達」)，經過古法文 ataindre / ateindre 慢慢變成 attain；意思也受到 tenēre (握住) 的影響',
        meaning: '碰觸、達到、握取 (to touch, reach, grasp)',
        category: '核心動作',
        grammaticalRole: '動作中心'
      }
    ],
    phonetic: {
      assimilationPath: 'ad- (朝向) ➔ 同化為 at- + tangere (觸及) / tenēre (握持) ➔ 古法語 ataindre ➔ attain',
      phoneticAnalysis: '古拉丁文的開頭 ad- 遇到 t 開頭的字，會偷偷把最後一個字母換成 t，唸起來才會更順（ad- + t... ➔ at-，像 attain, attend, attract, attempt 都是這樣）。到了古法文時期，-tang-/-ting- 這樣的拼法也慢慢變身成 -tain。',
      ruleKey: 'ad- ➔ at- 語音同化 (前綴遇 t 全同化)'
    },
    semantic: {
      prefixMeaning: '朝向目標 (ad- ➔ at-)',
      rootCoreAction: '觸摸到達並握取 (tain < tangere / tenēre)',
      suffixGrammar: '及物動詞',
      modernMeaning: '經過持續努力與時間積累，最終成功觸及並實現預期目標或年齡/地位',
      formulaDisplay: '{ 朝向 (at- < ad-) } + { 觸及/掌握 (tain) } = 達到、獲得、實現 (attain)',
      literalLogic: '古拉丁文 attingere 原本的意思是「伸手去碰到目標的東西」。後來進到法文和英文裡，多了「握在手上」的意思，就變成「努力達成目標、獲得成就」。'
    },
    familyTree: [
      { word: 'attainment', formula: 'attain + -ment (名詞)', meaning: '達成、成就、造詣 (名詞)', level: 'TOEFL', tags: ['TOEFL', 'GRE'] },
      { word: 'attainable', formula: 'attain + -able (可...的)', meaning: '可達到的、可實現的', level: 'TOEIC', tags: ['TOEIC', 'IELTS'] },
      { word: 'unattainable', formula: 'un- (不) + attainable', meaning: '高不可攀的、無法實現的', level: 'TOEFL', tags: ['TOEFL', 'GRE'] },
      { word: 'obtain', formula: 'ob- (朝向) + tain (握住)', meaning: '獲得、取得 (握到了手裡)', level: 'TOEIC', tags: ['TOEIC'] },
      { word: 'contain', formula: 'con- (完全) + tain (握住)', meaning: '包含、容納、抑制', level: 'Core', tags: ['TOEIC'] },
      { word: 'maintain', formula: 'manu (手) + tain (握住)', meaning: '維持、保養 (親手握持)', level: 'TOEIC', tags: ['TOEIC', 'IELTS'] },
      { word: 'retain', formula: 're- (再次) + tain (握住)', meaning: '保留、保持、記住', level: 'TOEIC', tags: ['TOEIC', 'TOEFL'] },
      { word: 'sustain', formula: 'sub- ➔ sus- (在下方) + tain', meaning: '維持、支撐、永續', level: 'TOEFL', tags: ['TOEFL', 'IELTS'] },
      { word: 'tangible', formula: 'tang (觸碰) + -ible', meaning: '有形的、實質的、可觸摸的', level: 'GRE', tags: ['GRE', 'TOEFL'] },
      { word: 'contact', formula: 'con- (共同) + tact (觸碰)', meaning: '接觸、聯繫、聯絡', level: 'Core', tags: ['TOEIC'] }
    ],
    memory: {
      cognatesDaily: 'attain one’s goal (達成目標), attain success (取得成功), attain maturity (達到成熟), attainable goals (可實現的目標)',
      oneSentenceMnemonic: 'at (朝向目標) + tain (伸手觸及握住) ➔ 「朝著目標伸手並牢牢握在手中」就是 attain (達到/實現)！',
      etymologicalOrigin: '古拉丁文 attingere (ad- 「朝向」 + tangere 「碰觸」) ➔ 古法文 ataindre (「到達／達成」) ➔ 英文 attain',
      visualImagery: '想像登山者一步步向上攀爬，最後伸出手（at- 朝向 + tain 觸碰握緊）終於抓住了山頂的旗幟，成功實現了登頂的目標。',
      commonCollocations: [
        'attain a goal / objective (實現目標 / 宗旨)',
        'attain a high level of proficiency (達到高度熟練水準)',
        'attain the age of 18 (年滿 18 歲)'
      ],
      contrastiveTips: 'attain 是「努力很久才達到很高的目標或年紀」；obtain 是「一般般地拿到或買到東西」；achieve 是「克服困難完成一件了不起的大事」。'
    },
    source: 'preset'
  };
