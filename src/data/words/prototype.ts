import { WordAnalysis } from '../../types';

export const prototype: WordAnalysis = {
    word: 'prototype',
    ipa: '/ˈproʊ.t̬əˌtaɪp/',
    partOfSpeech: 'noun (名詞)',
    chineseMeaning: '原型、雛形（用來測試或展示的第一個版本）',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 順序前綴',
        morpheme: 'proto-',
        originalForm: 'prōtos (希臘語)',
        meaning: '第一、最初、原始 (first, original)',
        category: '順序/等級',
        grammaticalRole: '希臘語前綴'
      },
      {
        type: 'root',
        label: '💎 核心字根',
        morpheme: 'type',
        originalForm: 'typos (希臘語)',
        variantNote: '希臘文 typos 原意是「打出來的印記、模子」，源自動詞 typtein（打、擊），因為古代的印記、雕像模型都是用敲打的方式做出來的，所以才有「印記、樣式」的意思。',
        meaning: '印記、模型、樣式 (mark, model, form)',
        category: '核心概念',
        grammaticalRole: '概念中心'
      }
    ],
    phonetic: {
      assimilationPath: 'protos (第一) + typos (印記/模型) ➔ prototypon (最初的模型) ➔ prototype',
      phoneticAnalysis: '這個字直接由希臘文 protos 加上 typos 組成，兩個部分都保留完整拼寫，沒有經過子音同化，是很透明的希臘語複合字。',
    },
    semantic: {
      prefixMeaning: '第一、最初 (proto-)',
      rootCoreAction: '模型、樣式 (type)',
      suffixGrammar: '名詞',
      modernMeaning: '在正式量產或完成之前，最先做出來用來測試、展示的樣品或模型',
      formulaDisplay: '{ 最初 (proto-) } + { 模型/樣式 (type) } = 原型、雛形 (prototype)',
      literalLogic: '字面就是「最初的模型」，也就是後續所有正式產品的第一個版本或範本。'
    },
    familyTree: [
      { word: 'type', formula: 'typos (印記) 縮寫進入英文', meaning: '類型、樣式' },
      { word: 'typical', formula: 'typ (樣式) + -ical', meaning: '典型的、代表性的' },
      { word: 'stereotype', formula: 'stereo- (固體、立體) + type (印記)', meaning: '刻板印象' },
      { word: 'protagonist', formula: 'proto- (首要) + agonist (競爭者)', meaning: '主角' },
      { word: 'protocol', formula: 'proto- (最初) + col (膠著)', meaning: '協議、規範' }
    ],
    memory: {
      cognatesDaily: 'type (類型), typical (典型的), stereotype (刻板印象)',
      oneSentenceMnemonic: 'proto (最初) + type (模型) ➔ 「最先做出來的模型」就是 prototype (原型)！',
      etymologicalOrigin: '來自希臘文 prōtotypon（prōtos 第一 + typos 模型），經由法文/拉丁文進入英文。',
      visualImagery: '想像工程師做出一台還沒上市的手機測試機，用來檢查功能、外觀有沒有問題——這台獨一無二的測試機，就是 prototype。',
      commonCollocations: [
        'build/develop a prototype (打造原型)',
        'a working prototype (可運作的原型機)',
        'prototype testing (原型測試)'
      ],
      contrastiveTips: 'prototype 是「用來測試、驗證概念」的第一個實體版本；model（模型）範圍更廣，可以只是縮小比例的展示品，不一定具備完整功能。'
    },
    source: 'preset'
  };
