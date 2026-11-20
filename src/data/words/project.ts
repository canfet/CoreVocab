import { WordAnalysis } from '../../types';

export const project: WordAnalysis = {
    word: 'project',
    ipa: '/ˈprɑː.dʒekt/',
    partOfSpeech: 'noun (名詞); verb (及物/不及物動詞)',
    chineseMeaning: '（名詞）企劃、專案、工程；（動詞）投射、投影、突出',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 空間前綴',
        morpheme: 'pro-',
        originalForm: 'pro- (拉丁語)',
        meaning: '向前 (forward, ahead)',
        category: '前向空間',
        grammaticalRole: '前綴'
      },
      {
        type: 'root',
        label: '💎 字根',
        morpheme: 'ject',
        originalForm: 'jacere / jectus (拉丁語)',
        variantNote: '拉丁動詞 jacere「投擲」放進字的中間時，母音常常會弱化，過去分詞則變成 jectus，英文裡的 -ject 這個拼法就是從分詞形式來的',
        meaning: '投擲、拋出 (to throw)',
        category: '核心動作',
        grammaticalRole: '動作中心'
      }
    ],
    phonetic: {
      assimilationPath: 'pro- (向前) + jacere (投擲) ➔ 分詞幹 jectus ➔ projectus ➔ 英文 project',
      phoneticAnalysis: '拉丁動詞 jacere 的過去分詞是 jectus，很多英文字用的都是這個分詞形式，拼成 -ject。這個字當名詞時重音在前 PROject，當動詞時重音在後 proJECT。',
      dualStemInfo: {
        presentStem: 'jac- (如 adjacent 相鄰的，字面是「躺在旁邊」)',
        supineStem: 'ject- (如 eject 逐出, inject 注射, object 物體/反對, reject 拒絕)',
        meaning: '投擲、拋出 (throw)'
      },
      ruleKey: '名動重音位移 + jac/ject 雙詞幹'
    },
    semantic: {
      prefixMeaning: '向前 (pro-)',
      rootCoreAction: '投擲、拋出 (ject < jacere)',
      suffixGrammar: '名詞/動詞',
      modernMeaning: '把想法往前拋出去、規劃出一項工作藍圖；或是把光線、影像往前方投射出去',
      formulaDisplay: '{ 向前 (pro-) } + { 投擲 (ject) } = 企劃、投射 (project)',
      literalLogic: '字面上是「向前拋出去」，抽象化以後變成「把構想丟出來規劃」，具體用法則是「把影像/光線投射出去」。'
    },
    familyTree: [
      { word: 'projection', formula: 'project + -ion', meaning: '投射、預測 (名詞)' },
      { word: 'eject', formula: 'e- (往外) + ject', meaning: '逐出、彈出' },
      { word: 'inject', formula: 'in- (向內) + ject', meaning: '注射、注入' },
      { word: 'object', formula: 'ob- (面對) + ject', meaning: '物體、反對' },
      { word: 'reject', formula: 're- (往回) + ject', meaning: '拒絕、退回' }
    ],
    memory: {
      cognatesDaily: 'a research project (研究專案), project a movie (投影電影), project confidence (展現出自信)',
      oneSentenceMnemonic: 'pro (向前) + ject (丟出) ➔ 「把構想往前丟出去」就是 project (企劃/投射)！',
      etymologicalOrigin: '拉丁文 projectus，源自動詞 proicere / proiectare (pro- + jacere「投擲」)',
      commonCollocations: [
        'launch/complete a project (啟動/完成一項專案)',
        'project an image onto the screen (把影像投影到螢幕上)'
      ],
      contrastiveTips: '當名詞（企劃）唸重音在前 PROject，當動詞（投射）唸重音在後 proJECT，這種名動重音位移在 progress, permit, record 等字也很常見，是很多考試會考的重音辨識題。'
    },
    source: 'preset'
  };
