import { WordAnalysis } from '../../types';

export const obstacle: WordAnalysis = {
  word: 'obstacle',
  ipa: '/ˈɑːbstəkəl/',
  partOfSpeech: 'noun (可數名詞)',
  chineseMeaning: '障礙物、阻礙',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 空間前綴',
      morpheme: 'ob-',
      originalForm: 'ob- (拉丁語)',
      variantNote: 'ob- 在 st 開頭的字根前面不會變形，直接拼接成 obst-。',
      meaning: '對著、擋在...面前 (against, in front of)',
      category: '空間/方向',
      grammaticalRole: '方向前綴'
    },
    {
      type: 'root',
      label: '💎 核心字根',
      morpheme: 'sta',
      originalForm: 'stare (拉丁語)',
      meaning: '站立、站著 (to stand)',
      category: '核心動作',
      grammaticalRole: '動作中心'
    },
    {
      type: 'suffix',
      label: '🏷️ 名詞字尾',
      morpheme: '-cle',
      originalForm: '-culum (拉丁語)',
      variantNote: '-culum 是拉丁文表示「工具、造成的結果」的名詞字尾，英文借入後常簡化拼成 -cle，同樣的字尾也出現在 spectacle（specere + culum）、tentacle（tenere + culum）裡。',
      meaning: '造成...的東西 (means/result of an action)',
      category: '名詞化',
      grammaticalRole: '工具/結果名詞後綴'
    }
  ],
  phonetic: {
    assimilationPath: 'ob- (擋在面前) + stare (站立) + -culum (...的東西) ➔ obstaculum ➔ 古法語 obstacle ➔ obstacle',
    phoneticAnalysis: '這個字沒有明顯的前綴音變，ob- 直接接上 st 開頭的字根。字尾 -culum 弱化成 -cle，這是拉丁文名詞字尾進入英文後常見的簡化拼寫。',
  },
  semantic: {
    prefixMeaning: '擋在...面前 (ob-)',
    rootCoreAction: '站立 (sta < stare)',
    suffixGrammar: '名詞 (-cle < -culum)',
    modernMeaning: '「站在路中間擋住去路的東西」，引申為任何阻擋前進的障礙物或困難',
    formulaDisplay: '{ 擋在面前 (ob-) } + { 站立 (sta) } + { ...的東西 (-cle) } = 障礙物 (obstacle)',
    literalLogic: '字面上就是「站在（你）面前的東西」，很自然地引申為「擋路的障礙物」，也可以是抽象的困難或阻力。'
  },
  familyTree: [
    { word: 'obstruct', formula: 'ob- (擋住) + struct (建造)', meaning: '阻擋、妨礙', level: 'TOEFL', tags: ['TOEFL', 'GRE'] },
    { word: 'obstinate', formula: 'ob- (對著) + stin (站) + -ate', meaning: '頑固的、固執的', level: 'GRE', tags: ['GRE'] },
    { word: 'stance', formula: 'sta (站) + -nce', meaning: '立場、姿勢', level: 'TOEFL', tags: ['TOEFL', 'IELTS'] },
    { word: 'stable', formula: 'sta (站) + -ble', meaning: '穩定的', level: 'Core', tags: ['TOEIC'] },
    { word: 'spectacle', formula: 'spect (看) + -acle', meaning: '奇觀、壯觀場面', level: 'GRE', tags: ['GRE', 'TOEFL'] }
  ],
  memory: {
    cognatesDaily: 'overcome an obstacle (克服障礙), obstacle course (障礙訓練場), a major obstacle (一大障礙)',
    oneSentenceMnemonic: 'ob (擋在面前) + sta (站立) + cle (...的東西) ➔ 「站在你面前擋路的東西」就是 obstacle (障礙物)！',
    etymologicalOrigin: '拉丁語 obstaculum（ob- 「擋在面前」 + stare 「站立」 + -culum 「...的工具/物」）',
    visualImagery: '想像賽跑路徑上突然立起一道柵欄，硬生生擋在你前進的路上，那就是 obstacle。',
    commonCollocations: ['overcome/remove an obstacle (克服/排除障礙)', 'a major obstacle to success (成功的一大障礙)', 'obstacle course (障礙賽)'],
    contrastiveTips: 'obstacle 通常指具體或明確存在的阻礙（有形或無形都可）；barrier 更常強調「隔開兩邊」的屏障，如語言障礙 language barrier。'
  },
  source: 'preset'
};
