import { WordAnalysis } from '../../types';

export const arrive: WordAnalysis = {
    word: 'arrive',
    ipa: '/əˈraɪv/',
    partOfSpeech: 'verb (不及物動詞)',
    chineseMeaning: '到達、抵達',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 同化前綴',
        morpheme: 'ar-',
        originalForm: 'ad- (拉丁語)',
        variantNote: 'ad- 遇到 r 這個音，會整個變身成 ar- (ad- ➔ ar-)',
        meaning: '朝向、到 (to, toward)',
        category: '空間/方向',
        grammaticalRole: '趨向前綴'
      },
      {
        type: 'root',
        label: '💎 核心字根',
        morpheme: 'riv',
        originalForm: 'ripa (拉丁語「河岸」)',
        variantNote: '通俗拉丁文把 ad ripam（到河岸）組合成動詞 adripare，riv 就是 ripa（岸）變化來的字根',
        meaning: '岸、河岸 (shore, riverbank)',
        category: '核心概念',
        grammaticalRole: '核心語義'
      }
    ],
    phonetic: {
      assimilationPath: 'ad- (朝向) ➔ 同化為 ar- + ripa (河岸) ➔ 通俗拉丁文 adripare ➔ 古法文 ariver ➔ arrive',
      phoneticAnalysis: 'ad- 遇到 r 開頭的字，字尾的 d 會換成 r，唸起來才順口（ad- + r... ➔ ar-，像 arrive 就是這樣變身的）。',
      ruleKey: 'ad- ➔ ar- 語音同化'
    },
    semantic: {
      prefixMeaning: '朝向、到達 (ad- ➔ ar-)',
      rootCoreAction: '抵達岸邊 (riv < ripa)',
      suffixGrammar: '不及物動詞',
      modernMeaning: '從遠方而來，最終抵達目的地（不論是真正的港口，或是抽象的地點、時間、結論）',
      formulaDisplay: '{ 朝向 (ar- < ad-) } + { 岸邊 (riv) } = 到達 (arrive)',
      literalLogic: '這個字最早是航海用語，字面意思是「船終於靠岸了」，後來擴大用在任何「到達」某個地方、時間點或結論。'
    },
    familyTree: [
      { word: 'arrival', formula: 'arrive + -al (名詞)', meaning: '到達、抵達（名詞）', level: 'TOEIC', tags: ['TOEIC'] },
      { word: 'river', formula: '通俗拉丁文 riparia (河岸) 演變而來', meaning: '河流', level: 'Core', tags: ['TOEIC'] },
      { word: 'riparian', formula: 'rip (岸) + -arian (形容詞)', meaning: '河岸的、與河岸有關的', level: 'GRE', tags: ['GRE'] }
    ],
    memory: {
      cognatesDaily: 'arrive at the airport/station (抵達機場/車站), arrive at a conclusion/decision (得出結論/做出決定), newly arrived (新抵達的)',
      oneSentenceMnemonic: 'ar (朝向) + rive (河岸) ➔ 「朝著河岸靠過去」就是 arrive (到達)！',
      etymologicalOrigin: '通俗拉丁文 adripare（ad- 朝向 + ripa 河岸，原意是「讓船靠岸」）➔ 古法文 ariver ➔ 英文 arrive',
      visualImagery: '想像一艘帆船經過長途航行，終於看到岸邊（riv < ripa），緩緩朝著（ar- < ad-）岸邊靠泊，這就是 arrive 最初的畫面。',
      commonCollocations: [
        'arrive at/in a place (抵達某地：小地方用 at，城市/國家用 in)',
        'arrive on time (準時抵達)',
        'arrive at a conclusion (得出結論)'
      ],
      contrastiveTips: 'arrive 是不及物動詞，後面要接介系詞（arrive at/in），不能直接加地點受詞（不能說 arrive the airport）；reach 則是及物動詞，可以直接接受詞（reach the airport）。'
    },
    source: 'preset'
  };
