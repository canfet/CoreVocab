import { WordAnalysis } from '../../types';

export const intractable: WordAnalysis = {
    word: 'intractable',
    ipa: '/ɪnˈtræk.tə.bəl/',
    partOfSpeech: 'adjective (形容詞)',
    chineseMeaning: '難以駕馭的、棘手的、難處理的（問題、人、疾病）',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 前綴',
        morpheme: 'in-',
        originalForm: 'in- (拉丁語)',
        meaning: '不、非 (not)',
        category: '否定',
        grammaticalRole: '否定前綴'
      },
      {
        type: 'root',
        label: '💎 核心字根',
        morpheme: 'tract',
        originalForm: 'trahere (拉丁語「拉、拖」)，完成分詞幹 tractus',
        meaning: '拉、拖、牽引 (to drag, pull, draw)',
        category: '核心動作',
        grammaticalRole: '分詞詞幹'
      },
      {
        type: 'suffix',
        label: '🏷️ 形容詞字尾',
        morpheme: '-able',
        originalForm: '-abilis (拉丁語)',
        variantNote: '加在動詞字根後面，表示「可以被...的」',
        meaning: '可以被...的 (able to be)',
        category: '形容詞化',
        grammaticalRole: '形容詞後綴'
      }
    ],
    phonetic: {
      assimilationPath: 'in- (不) + trahere ➔ 完成分詞 tractus (被拉的) ➔ tractabilis (可被拉動、可駕馭的) ➔ intractabilis ➔ intractable',
      phoneticAnalysis: 'in- 在 t 開頭的字前面不需要同化，直接拼接。字根 trahere（拉）的完成分詞是 tractus，衍生出常見形容詞 tractable（tract + able，可被拉/可駕馭的），intractable 就是它的否定形。',
      ruleKey: 'in- 無同化直接拼接 + trahere 完成分詞幹 tract'
    },
    semantic: {
      prefixMeaning: '不 (in-)',
      rootCoreAction: '拉、拖、牽引 (tract < trahere)',
      suffixGrammar: '可以被...的 (-able)',
      modernMeaning: '無法被拉動、牽引或說服的，形容問題、疾病或人難以處理、無法控制',
      formulaDisplay: '{ 不 (in-) } + { 拉/牽引 (tract) } + { 可以被...的 (-able) } = 難以駕馭的 (intractable)',
      literalLogic: '字面上是「不能被拉動、牽引的」，引申為「難以控制、難以解決」的問題或性格。'
    },
    familyTree: [
      { word: 'tractable', formula: 'tract (拉) + -able', meaning: '易於駕馭的、聽話的', level: 'GRE', tags: ['GRE'] },
      { word: 'attract', formula: 'ad- ➔ at- (朝向) + tract (拉)', meaning: '吸引', level: 'Core', tags: ['TOEIC'] },
      { word: 'extract', formula: 'ex- (向外) + tract (拉)', meaning: '萃取、提取', level: 'TOEFL', tags: ['TOEFL'] },
      { word: 'contract', formula: 'con- (共同) + tract (拉)', meaning: '合約、收縮（把雙方拉在一起訂約）', level: 'Core', tags: ['TOEIC'] },
      { word: 'distract', formula: 'dis- (分散) + tract (拉)', meaning: '使分心（把注意力拉散）', level: 'TOEIC', tags: ['TOEIC'] }
    ],
    memory: {
      cognatesDaily: 'an intractable problem (棘手的問題), an intractable disease (難以治癒的疾病), intractable conflict (難以化解的衝突)',
      oneSentenceMnemonic: 'in (不) + tract (拉得動) + able (可以) ➔ 「怎麼拉都拉不動」就是 intractable (難以駕馭的)！',
      etymologicalOrigin: '拉丁文 intractabilis（in- 不 + tractabilis 可駕馭的，tractabilis 又來自 trahere「拉、拖」）',
      visualImagery: '想像一頭倔驢，不管你怎麼用力拉繩子（tract）都拉不動它，這種「拉不動、無法駕馭」的畫面就是 intractable。',
      commonCollocations: [
        'an intractable problem/situation (棘手的問題/局面)',
        'prove intractable (證實難以處理)'
      ],
      contrastiveTips: 'intractable 語氣正式，常用在描述長期無解的問題（衝突、疾病、政策難題）；stubborn 則是形容「人固執」，範圍較窄，多用於個性描述。'
    },
    source: 'preset'
  };
