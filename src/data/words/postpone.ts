import { WordAnalysis } from '../../types';

export const postpone: WordAnalysis = {
    word: 'postpone',
    ipa: '/poʊstˈpoʊn/',
    partOfSpeech: 'verb (及物動詞)',
    chineseMeaning: '延期、推遲（把原定時間往後移）',
    morphemes: [
      {
        type: 'prefix',
        label: '🚩 時間前綴',
        morpheme: 'post-',
        originalForm: 'post (拉丁語)',
        meaning: '在...之後 (after, behind)',
        category: '時間順序',
        grammaticalRole: '時間前綴'
      },
      {
        type: 'root',
        label: '💎 核心字根',
        morpheme: 'pon(e)',
        originalForm: 'pōnere / positus',
        variantNote: '古拉丁文動詞 pōnere（放置）有兩種長相：現在詞幹 pon- 和過去分詞詞幹 posit-。這個字用的是 pon- 這種寫法，字尾多加一個不發音的 e 是英文拼字習慣。',
        meaning: '放置、放 (to put, place)',
        category: '核心動作',
        grammaticalRole: '動作中心'
      }
    ],
    phonetic: {
      assimilationPath: 'post- (之後) + ponere (放置) ➔ postponere (放到之後) ➔ postpone',
      phoneticAnalysis: '這個字直接由 post- 加上 pōnere 的現在詞幹 pon- 組成，沒有經過額外的同化。pōnere 這個動詞很常見，除了 pon- 這種寫法，過去分詞詞幹是 posit-（例如 position, deposit），兩種寫法在很多相關字裡都會出現。',
      dualStemInfo: {
        presentStem: 'pon- (如 component, opponent, proponent)',
        supineStem: 'posit- (如 position, deposit, compose 的變體 compos-)',
        meaning: '放置 (put, place)'
      },
      ruleKey: 'pon/posit 雙詞幹詞族'
    },
    semantic: {
      prefixMeaning: '在...之後 (post-)',
      rootCoreAction: '放置 (pone)',
      suffixGrammar: '及物動詞',
      modernMeaning: '把原本安排好的時間往後移，讓事情較晚才發生',
      formulaDisplay: '{ 之後 (post-) } + { 放置 (pone) } = 延期、推遲 (postpone)',
      literalLogic: '字面意思是「放到後面」，也就是把一件原本排定的事情，改放到比較晚的時間點，就是「延期」。'
    },
    familyTree: [
      { word: 'position', formula: 'posit (放置) + -ion', meaning: '位置、職位' },
      { word: 'component', formula: 'con- (共同) + pon + -ent', meaning: '成分、組件' },
      { word: 'opponent', formula: 'ob- ➔ op- (對著) + pon + -ent', meaning: '對手、反對者' },
      { word: 'compose', formula: 'com- (共同) + pose (放置)', meaning: '組成、創作' },
      { word: 'postponement', formula: 'postpone + -ment', meaning: '延期、延緩 (名詞)' }
    ],
    memory: {
      cognatesDaily: 'position (位置), compose (創作), opponent (對手)',
      oneSentenceMnemonic: 'post (之後) + pone (放置) ➔ 「把事情放到之後」就是 postpone (延期)！',
      etymologicalOrigin: '來自拉丁文 postponere（post- 之後 + ponere 放置）。',
      commonCollocations: [
        'postpone a meeting/trip (延後會議/行程)',
        'postpone until further notice (延期至另行通知)',
        'be postponed indefinitely (無限期延後)'
      ],
      contrastiveTips: 'postpone 是正式用字，指「有計畫地延後到某個確定或未定的時間」；delay 語氣更中性廣泛，可以指任何造成的耽擱（不一定是刻意安排的）；cancel 則是「直接取消」，不是延期。'
    },
    source: 'preset'
  };
