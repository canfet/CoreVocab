import { CurriculumStage, CurriculumWordItem, StudyLevel } from '../types';
import { PRESET_WORDS } from './presetWords';
import { shortGloss } from '../utils/wordGloss';

// 一字首一 Level 架構：每個 Level 只練習「一個字首家族」的單字，
// 內容完全來自本機資料庫
// （src/data/rulesData.ts 的字首/同化規則 + 手工精選例字）
//
// 前 5 級（re- / pre- / un- / dis- / non-）為零音變基礎範圍；
// 其餘 30 級依 dimension 分組對應 rulesData.ts 的六大語義維度。

const FOUNDATION_COLOR = { color: 'border-emerald-500 text-emerald-700', badgeBg: 'bg-emerald-100 text-emerald-800 border-emerald-300' };
const TIME_COLOR = { color: 'border-sky-500 text-sky-700', badgeBg: 'bg-sky-100 text-sky-800 border-sky-300' };
const SPACE_COLOR = { color: 'border-violet-500 text-violet-700', badgeBg: 'bg-violet-100 text-violet-800 border-violet-300' };
const NEGATION_COLOR = { color: 'border-rose-500 text-rose-700', badgeBg: 'bg-rose-100 text-rose-800 border-rose-300' };
const DEGREE_COLOR = { color: 'border-amber-500 text-amber-700', badgeBg: 'bg-amber-100 text-amber-800 border-amber-300' };
const RELATION_COLOR = { color: 'border-fuchsia-500 text-fuchsia-700', badgeBg: 'bg-fuchsia-100 text-fuchsia-800 border-fuchsia-300' };
const NUMBER_COLOR = { color: 'border-teal-500 text-teal-700', badgeBg: 'bg-teal-100 text-teal-800 border-teal-300' };

type RawWordItem = string | CurriculumWordItem;
interface RawCurriculumStage extends Omit<CurriculumStage, 'words'> {
  words: RawWordItem[];
}

// A word already fully authored in presetWords.ts only needs to be listed by name here —
// its focus/meaning/keyRule are derived from that single canonical entry instead of being
// re-typed, so editing the word once keeps the daily-study quiz in sync automatically.
// Words not yet in presetWords.ts keep their full { word, focus, meaning, keyRule } literal.
function resolveWordItem(item: RawWordItem): CurriculumWordItem {
  if (typeof item !== 'string') return item;
  const preset = PRESET_WORDS[item.toLowerCase()];
  if (!preset) {
    throw new Error(`curriculum word "${item}" has no PRESET_WORDS entry — provide a full { word, focus, meaning, keyRule } object instead`);
  }
  return {
    word: item,
    focus: preset.morphemes.map((m) => `${m.morpheme} (${shortGloss(m.meaning, 1)})`).join(' + '),
    meaning: preset.chineseMeaning,
    keyRule: preset.phonetic.ruleKey || preset.phonetic.assimilationPath
  };
}

const RAW_CURRICULUM_STAGES: RawCurriculumStage[] = [
  // ========================= 基礎入門：零音變基礎字首 (5) =========================
  {
    id: 'RE', levelNumber: 1, dimension: 'foundation',
    name: 'Level 1: re- 重複與回返', englishTitle: 'Re- : Again, Back, Repeatedly', ...FOUNDATION_COLOR,
    subtitle: '第一課：不管接什麼字都不會變形',
    description: 're- 的意思是「再一次」、「重新」或「回去」。它是英文裡最常用的開頭之一，不管接在哪個字前面都不會變形，是最好上手的第一課！',
    words: [
      'relocate',
      'rebuild',
      'recite',
      'recount',
      'record',
      'react',
      'recall',
      'retain',
      'receptive',
      'retention',
      'revert',
      'renew',
      'retrospect',
    ]
  },
  {
    id: 'PRE', levelNumber: 2, dimension: 'foundation',
    name: 'Level 2: pre- 事前與預先', englishTitle: 'Pre- : Before, In Advance', ...FOUNDATION_COLOR,
    subtitle: '意思是「事先」，永遠長得一樣',
    description: 'pre- 的意思是「在...之前」、「事先」。不管接在什麼字前面，拼法都不會改變，是最容易認出來的開頭之一。',
    words: [
      'predict',
      'preview',
      'prewar',
      'prepay',
      'prepare',
      'prevent',
      'precede',
      'prescribe',
      'predecessor',
      'prefix',
      'prelude',
      'premonition',
      'preempt'
    ]
  },
  {
    id: 'UN', levelNumber: 3, dimension: 'foundation',
    name: 'Level 3: un- 純否定與逆轉', englishTitle: 'Un- : Not, Reverse Action', ...FOUNDATION_COLOR,
    subtitle: '最常見的「不」，也不會變形',
    description: 'un- 的意思是「不」，也可以表示「把動作反過來做」。它從古英文就有了，不管接什麼字都不會變形，超級好認！',
    words: [
      'uncover',
      'unfold',
      'unhappy',
      'unlock',
      'uncertain',
      'undo',
      'unveil',
      'unprecedented'
    ]
  },
  {
    id: 'DIS', levelNumber: 4, dimension: 'foundation',
    name: 'Level 4: dis- 分離與相反', englishTitle: 'Dis- : Apart, Away, Not', ...FOUNDATION_COLOR,
    subtitle: '意思是「分開」，偶爾會悄悄變身',
    description: 'dis- 的意思是「分開」、「相反」、「拿掉」。大部分時候長得一樣，但遇到 f 開頭的字會變成 dif-，遇到某些字母會變成 di-，唸起來才會更順口。',
    words: [
      'disease',
      'dislocate',
      'disagree',
      'disorder',
      'dismiss',
      'disperse',
      'disconnect',
      'disable',
      'differ',
      'diffuse',
      'divert'
    ]
  },
  {
    id: 'NON', levelNumber: 5, dimension: 'foundation',
    name: 'Level 5: non- 客觀否定', englishTitle: 'Non- : Not, Lack Of', ...FOUNDATION_COLOR,
    subtitle: '基礎關卡的最後一關：最直接的「不」',
    description: 'non- 的意思就是「不」，是最直接、最沒有感情色彩的說法，拼法永遠不變。',
    words: [
      'nonexistent',
      'nonsense',
      'nonfiction',
      'nonstop',
      'nonprofit',
      'noncommittal'
    ]
  },

  // ========================= 時間與順序 (4) =========================
  {
    id: 'PRO', levelNumber: 6, dimension: 'time',
    name: 'Level 6: pro- 向前與支持', englishTitle: 'Pro- : Forward, In Favor Of', ...TIME_COLOR,
    subtitle: '意思是「向前」，也可以是「支持」',
    description: 'pro- 的意思是「向前」，也常常表示「支持」某件事，很多和「進步」「提出想法」有關的字都會用到它。',
    words: [
      'progress',
      'promote',
      'project',
      'propose',
      'proceed',
      'proclaim',
      'propel'
    ]
  },
  {
    id: 'ANTE_FORE', levelNumber: 7, dimension: 'time',
    name: 'Level 7: ante- ↔ fore- 事前對照', englishTitle: 'Ante- vs Fore- : Before', ...TIME_COLOR,
    subtitle: '兩個都是「之前」，一個文謅謅、一個很生活化',
    description: 'ante- 和 fore- 意思都是「之前」。ante- 來自古拉丁文，常出現在比較正式、學術的字裡；fore- 是英文自己原本就有的字，比較常出現在日常生活的字裡。',
    words: [
      'antecedent',
      'anteroom',
      'antedate',
      'anterior',
      'foresee',
      'forecast',
      'foretell',
      'forefather'
    ]
  },
  {
    id: 'POST', levelNumber: 8, dimension: 'time',
    name: 'Level 8: post- 事後與之後', englishTitle: 'Post- : After, Behind', ...TIME_COLOR,
    subtitle: '和 pre- 剛好相反，意思是「之後」',
    description: 'post- 的意思是「之後」、「事後」，常常跟 pre-（之前）配成一對出現，例如 postwar（戰後）對 prewar（戰前）。',
    words: [
      'postscript',
      'postpone',
      'postwar',
      'postgraduate',
      'posterity'
    ]
  },
  {
    id: 'PRIM_PROTO', levelNumber: 9, dimension: 'time',
    name: 'Level 9: prim- / proto- 第一與原始', englishTitle: 'Prim-/Proto- : First, Original', ...TIME_COLOR,
    subtitle: '兩個都是「第一」，一個拉丁、一個希臘',
    description: 'prim- 和 proto- 意思都是「第一、最早、最原始」。prim- 來自古拉丁文，proto- 來自古希臘文，常出現在比較專業的字裡。',
    words: [
      'primitive',
      'prototype',
      'primary',
      'protagonist',
      'protocol',
      'primordial'
    ]
  },

  // ========================= 拉丁輔音同化家族 (8) =========================
  {
    id: 'AD', levelNumber: 10, dimension: 'space',
    name: 'Level 10: ad- 朝向與加強', englishTitle: 'Ad- : To, Toward, Intensive', ...SPACE_COLOR,
    subtitle: '變身之王：ac- af- ag- al- an- ap- ar- as- at-',
    description: 'ad- 的意思是「朝向」、「加強語氣」。它很愛變身：遇到不同的字母開頭，就會偷偷換成長得很像那個字母的形狀，唸起來才會更順口，是變身種類最多的一個開頭！',
    words: [
      'allocate',
      'approximate',
      'attain',
      'assiduous',
      'addictive',
      'accept',
      'affect',
      'arrive',
      'assist'
    ]
  },
  {
    id: 'CON', levelNumber: 11, dimension: 'space',
    name: 'Level 11: con-/com- 共同與完全', englishTitle: 'Con-/Com- : Together, With, Intensive', ...SPACE_COLOR,
    subtitle: '意思是「一起」，也會變成 com- col- cor- co-',
    description: 'con- 的意思是「一起」、「完全」，是用得最多的開頭之一。遇到不同的字母，它會變身成 com-、col-、cor- 或 co-，好讓整個字唸起來更順。',
    words: [
      'contain',
      'collocate',
      'collaborate',
      'correlate',
      'convert',
      'component',
      'consist',
      'content',
      'continent',
      'conclude',
      'contact',
      'conducive',
      'collapse'
    ]
  },
  {
    id: 'IN', levelNumber: 12, dimension: 'space',
    name: 'Level 12: in-/en- 否定與向內', englishTitle: 'In-/En- : Not / Into', ...SPACE_COLOR,
    subtitle: '一次搞懂兩個意思：「不」和「進去」',
    description: 'in-（或 en-）有兩個意思：一個是「不」，一個是「進去、往裡面」。不管是哪個意思，遇到不同字母時都會用同樣的規則變身成 im-、il- 或 ir-。',
    words: [
      'empathy',
      'inspect',
      'incandescent',
      'inception',
      'inscription',
      'indigenous',
      'intractable',
      'incessant',
      'impossible',
      'illegal',
      'irregular',
      'inspire'
    ]
  },
  {
    id: 'SUB', levelNumber: 13, dimension: 'space',
    name: 'Level 13: sub- 在下與次級', englishTitle: 'Sub- : Under, Below, Secretly', ...SPACE_COLOR,
    subtitle: '意思是「在下面」，會變出七種樣子',
    description: 'sub- 的意思是「在下面」、「次一等」、「偷偷的」。它是變身花樣最多的開頭，會變成 suc-、suf-、sug-、sum-、sup-、sur- 或 sus-。',
    words: [
      'sustain',
      'subterranean',
      'submit',
      'submarine',
      'suggest',
      'suffer',
      'support',
      'suspect',
      'succeed'
    ]
  },
  {
    id: 'OB', levelNumber: 14, dimension: 'space',
    name: 'Level 14: ob- 反對與朝向', englishTitle: 'Ob- : Against, Toward, Facing', ...SPACE_COLOR,
    subtitle: '意思是「對抗」，會變成 oc- of- op- os-',
    description: 'ob- 的意思是「反對」、「朝向」、「擋住」。遇到不同的字母，會變身成 oc-、of-、op- 或 os-。',
    words: [
      'oblige',
      'obtain',
      'occur',
      'obstacle',
      'oppose',
      'offend',
      'obvious',
      'occupy'
    ]
  },
  {
    id: 'EX', levelNumber: 15, dimension: 'space',
    name: 'Level 15: ex- 向外與徹底', englishTitle: 'Ex- : Out, Forth, Completely', ...SPACE_COLOR,
    subtitle: '意思是「向外」，會變成 e- 或 ef-',
    description: 'ex- 的意思是「向外」、「離開」、「完全」。遇到某些字母時會簡化成 e-，遇到 f 開頭則會變成 ef-。',
    words: [
      'effect',
      'emission',
      'exclusion',
      'elucidate',
      'explicate',
      'export',
      'educate',
      'extract',
      'efficient',
      'evaporate',
    ]
  },
  {
    id: 'AB', levelNumber: 16, dimension: 'space',
    name: 'Level 16: ab-/abs- 離開與脫離', englishTitle: 'Ab-/Abs- : Away, From, Off, Apart', ...SPACE_COLOR,
    subtitle: '意思是「離開」，遇到 t、c 會變成 abs-',
    description: 'ab-（或 abs-）的意思是「離開」、「遠離」。大部分時候長得一樣，只有遇到 t 或 c 開頭的字，才會變成 abs-。',
    words: [
      'abstain',
      { word: 'abstention', focus: 'abs- (遠離) + tent (握住) + -ion', meaning: '棄權、戒除、自我克制', keyRule: 'ten ➔ tent 戒絕名詞' },
      { word: 'abnormal', focus: 'ab- (偏離) + norma (準則)', meaning: '異常的', keyRule: '透明前綴直接拼接' },
      { word: 'abduct', focus: 'ab- (離開) + ducere (引導)', meaning: '誘拐、綁架', keyRule: 'duc/duct 引導詞族' },
      { word: 'absent', focus: 'ab- (離開) + esse (存在)', meaning: '缺席的', keyRule: '透明前綴直接拼接' },
      { word: 'aberration', focus: 'ab- (偏離) + errare (漫遊)', meaning: '越軌、偏離常軌', keyRule: 'err/errat 漫遊詞族' },
      { word: 'abstract', focus: 'abs- (抽離) + trahere (拉)', meaning: '摘要（論文）；抽象的', keyRule: 'trah/tract 詞族網絡' }
    ]
  },
  {
    id: 'PER', levelNumber: 17, dimension: 'space',
    name: 'Level 17: per- 貫穿與徹底', englishTitle: 'Per- : Through, Completely', ...SPACE_COLOR,
    subtitle: '意思是「徹底」，只有一種變身：pel-',
    description: 'per- 的意思是「貫穿」、「徹底」。它幾乎不變身，只有遇到少數幾個字（像 lucere）才會變成 pel-。',
    words: [
      'pertain',
      { word: 'perceive', focus: 'per- (徹底) + capere ➔ ceive (抓取)', meaning: '感知、察覺、理解', keyRule: 'capere 重音變為 ceive' },
      'perspicacious',
      { word: 'perfect', focus: 'per- (徹底) + fect (做成)', meaning: '完美的', keyRule: '徹底做成的語意延伸' },
      { word: 'perform', focus: 'per- (徹底) + form (完成/形式)', meaning: '執行、表演', keyRule: '原字根為 fournir(完成)，拼寫逐漸同化為 form' },
      { word: 'persist', focus: 'per- (始終) + sist (站立)', meaning: '堅持', keyRule: 'sist 詞族網絡' },
      { word: 'permeate', focus: 'per- (貫穿) + meate (穿行)', meaning: '滲透、瀰漫', keyRule: '透明前綴直接拼接' },
      { word: 'pellucid', focus: 'per- ➔ pel- (徹底) + lucere (發光)', meaning: '清晰明亮的', keyRule: 'per- 在 l 前同化為 pel-' }
    ]
  },

  // ========================= 空間與方向延伸 (5) =========================
  {
    id: 'TRANS', levelNumber: 18, dimension: 'space',
    name: 'Level 18: trans- 跨越與轉變', englishTitle: 'Trans- : Across, Through, Beyond', ...SPACE_COLOR,
    subtitle: '意思是「跨越」，很少變身',
    description: 'trans- 的意思是「跨越」、「穿過」、「改變」。大部分的字都長得一樣，只有極少數的字（像 traduce、tradition）會簡化成 tra-。',
    words: [
      { word: 'transport', focus: 'trans- (跨越) + port (攜帶)', meaning: '運輸、運送', keyRule: '透明前綴直接拼接' },
      { word: 'transmit', focus: 'trans- (跨越) + mittere ➔ mit (發送)', meaning: '傳播、傳送、發射', keyRule: 'mittere 現在詞幹' },
      'translucent',
      { word: 'transfer', focus: 'trans- (轉移) + ferre (帶)', meaning: '轉移', keyRule: '透明前綴直接拼接' },
      { word: 'transform', focus: 'trans- (轉變) + form (形式)', meaning: '轉化、變形', keyRule: '透明前綴直接拼接' },
      { word: 'translate', focus: 'trans- (轉變) + lat (帶過去)', meaning: '翻譯', keyRule: 'lat 為 ferre (帶) 的不規則分詞；將語言帶到另一邊' },
      { word: 'transparent', focus: 'trans- (穿透) + par (顯現)', meaning: '透明的', keyRule: '透明前綴直接拼接' },
      { word: 'transit', focus: 'trans- (跨越) + it (走)', meaning: '過境', keyRule: '透明前綴直接拼接' }
    ]
  },
  {
    id: 'INTER', levelNumber: 19, dimension: 'space',
    name: 'Level 19: inter- 在...之間', englishTitle: 'Inter- : Between, Among, Mutually', ...SPACE_COLOR,
    subtitle: '意思是「在...之間」',
    description: 'inter- 的意思是「在...之間」、「互相」。在 entertain 這個字裡，它變成了比較弱的 enter- 形式。',
    words: [
      { word: 'entertain', focus: 'inter- ➔ enter- (在之間) + tain (握住)', meaning: '款待、娛樂、抱有想法', keyRule: 'inter- 在法語中弱化為 enter-' },
      { word: 'interact', focus: 'inter- (相互) + act (行動)', meaning: '互動', keyRule: '透明前綴直接拼接' },
      { word: 'international', focus: 'inter- (之間) + national (國家的)', meaning: '國際的', keyRule: '透明前綴直接拼接' },
      { word: 'intercept', focus: 'inter- (中途) + cept (抓取)', meaning: '攔截', keyRule: 'cap/cept 詞族網絡' },
      { word: 'interrupt', focus: 'inter- (中間) + rupt (打斷)', meaning: '打斷', keyRule: '透明前綴直接拼接' },
      { word: 'intermediate', focus: 'inter- (中間) + medi (中間) + -ate', meaning: '中級的、過渡的', keyRule: '透明前綴直接拼接' },
      { word: 'interfere', focus: 'inter- (之間) + fere (打擊)', meaning: '干涉、妨礙', keyRule: '透明前綴直接拼接' }
    ]
  },
  {
    id: 'INTRA_EXTRA', levelNumber: 20, dimension: 'space',
    name: 'Level 20: intra-/intro- ↔ extra-/extro- 內外對照', englishTitle: 'Intra-/Intro- vs Extra-/Extro- : Inside vs Outside', ...SPACE_COLOR,
    subtitle: '一組相反的好朋友：裡面 vs 外面',
    description: 'intra-/intro- 的意思是「在裡面」，extra-/extro- 的意思是「在外面」。這兩組意思剛好相反，放在一起記最好記！',
    words: [
      { word: 'introvert', focus: 'intro- (向內) + vert (轉)', meaning: '性格內向的人', keyRule: 'vert 核心詞族網絡' },
      { word: 'extrovert', focus: 'extro- (向外) + vert (轉)', meaning: '性格外向的人', keyRule: 'vert 核心詞族網絡（與 introvert 對照）' },
      { word: 'intravenous', focus: 'intra- (在內) + ven(a) (靜脈) + -ous', meaning: '靜脈注射的', keyRule: 'ven 核心詞族網絡' },
      { word: 'extraordinary', focus: 'extra- (超出) + ordinary (平常)', meaning: '非凡的、特別的', keyRule: '空間超出字首直接複合' },
      { word: 'introduce', focus: 'intro- (向內) + duce (引導)', meaning: '介紹、引進', keyRule: 'duc/duct 詞族網絡' },
      { word: 'intramural', focus: 'intra- (在內) + mural (牆)', meaning: '校內的', keyRule: '透明前綴直接拼接' },
      { word: 'extravagant', focus: 'extra- (超出) + vagari (漫遊)', meaning: '奢侈的、(言行) 過度誇張的', keyRule: 'vag/vagat 漫遊詞族' },
      { word: 'extraterrestrial', focus: 'extra- (超出) + terrestrial (地球的)', meaning: '外星的', keyRule: 'terra 土地詞根' }
    ]
  },
  {
    id: 'CIRCUM_TELE', levelNumber: 21, dimension: 'space',
    name: 'Level 21: circum-/peri- ↔ tele- 環繞與遠距', englishTitle: 'Circum-/Peri- vs Tele- : Around vs Distant', ...SPACE_COLOR,
    subtitle: '兩個特別的方向：繞一圈 vs 很遠',
    description: 'circum-/peri- 的意思是「繞一圈、四周」，tele- 的意思是「很遠的地方」。這兩個都是專門用來說位置的開頭。',
    words: [
      'circumvent',
      { word: 'circumspect', focus: 'circum- (環繞) + spect (看)', meaning: '慎重的、謹慎小心的', keyRule: '環視審慎複合' },
      { word: 'circumstance', focus: 'circum- (環繞) + stance (站立處)', meaning: '環境、境遇', keyRule: '透明前綴直接拼接' },
      { word: 'circumference', focus: 'circum- (環繞) + ference (攜帶)', meaning: '圓周', keyRule: '透明前綴直接拼接' },
      { word: 'telepathy', focus: 'tele- (遠距) + pathos (感應)', meaning: '心靈感應、心電感應', keyRule: '希臘遠距詞素 tele' },
      { word: 'telephone', focus: 'tele- (遠距) + phone (聲音)', meaning: '電話', keyRule: '遠距離傳遞聲音' },
      { word: 'telescope', focus: 'tele- (遠距) + scope (看)', meaning: '望遠鏡', keyRule: '看見遠處的視野' },
      { word: 'perimeter', focus: 'peri- (周圍) + meter (測量)', meaning: '周長', keyRule: '希臘語環繞字首' }
    ]
  },
  {
    id: 'DE', levelNumber: 22, dimension: 'space',
    name: 'Level 22: de- 向下與脫離', englishTitle: 'De- : Down, Away, Remove', ...SPACE_COLOR,
    subtitle: '意思是「向下」，用途最廣的字首之一',
    description: 'de- 的意思是「向下」、「離開」、「拿掉」、「不」。它的意思用得非常廣，是拉丁開頭裡意思延伸最多的一個。',
    words: [
      'detain',
      { word: 'detention', focus: 'de- (阻留) + tent (握住) + -ion', meaning: '拘留、扣押、放學後留校', keyRule: 'ten ➔ tent 阻留分詞' },
      { word: 'deceive', focus: 'de- (欺/壞) + ceive (抓取)', meaning: '欺騙、矇騙、誤導', keyRule: 'capere ➔ ceive 誘導字幹' },
      { word: 'describe', focus: 'de- (詳盡) + scrib (寫)', meaning: '描述、描寫', keyRule: 'scrib ➔ script 現在詞幹' },
      { word: 'descend', focus: 'de- (向下) + scend (爬)', meaning: '下降', keyRule: 'scend (攀爬) 搭配 de- ➔ 向下爬 (對照 ascend 向上爬)' },
      { word: 'decrease', focus: 'de- (向下) + crease (生長)', meaning: '減少', keyRule: '透明前綴直接拼接' },
      { word: 'degrade', focus: 'de- (向下) + grade (等級)', meaning: '降級', keyRule: '透明前綴直接拼接' },
      { word: 'detect', focus: 'de- (去除/脫離) + tect (覆蓋)', meaning: '查明、偵測、察覺', keyRule: '去除非/脫離前綴，揭開覆蓋物' }
    ]
  },

  // ========================= 否定與抗衡延伸 (3) =========================
  {
    id: 'A_AN', levelNumber: 23, dimension: 'negation',
    name: 'Level 23: a-/an- 希臘否定', englishTitle: 'A-/An- (Greek) : Without, Not, Lacking', ...NEGATION_COLOR,
    subtitle: '希臘文的「不」，遇到母音要加 n',
    description: 'a-（或 an-）來自古希臘文，意思是「沒有」、「不」。遇到子音用 a-，遇到母音或 h 開頭就要加一個 n，變成 an-，唸起來才順。',
    words: [
      'apathy',
      { word: 'atypical', focus: 'a- (非) + typical (典型的)', meaning: '非典型的', keyRule: '希臘否定前綴 a-' },
      { word: 'atheist', focus: 'a- (無) + theos (神)', meaning: '無神論者', keyRule: '希臘否定前綴 a-' },
      { word: 'asymmetrical', focus: 'a- (不) + syn- + metron (測量)', meaning: '不對稱的', keyRule: '希臘否定前綴 a-' },
      { word: 'anarchy', focus: 'an- (無) + archein (統治)', meaning: '無政府狀態', keyRule: 'a- 遇母音同化為 an-' },
      { word: 'anonymous', focus: 'an- (無) + onoma (名字)', meaning: '匿名的、無名的', keyRule: 'a- 遇母音同化為 an-' },
      { word: 'anesthesia', focus: 'an- (無) + aisthesis (感覺)', meaning: '麻醉', keyRule: 'a- 遇母音同化為 an-' }
    ]
  },
  {
    id: 'ANTI_CONTRA', levelNumber: 24, dimension: 'negation',
    name: 'Level 24: anti- ↔ contra-/counter- 對抗與相反', englishTitle: 'Anti- vs Contra-/Counter- : Against, Contrary', ...NEGATION_COLOR,
    subtitle: '兩個都是「反對」，一個希臘、一個拉丁',
    description: 'anti- 和 contra- 意思都是「對抗」、「相反」。anti- 來自古希臘文，contra-（英文裡也常寫成 counter-）來自古拉丁文。',
    words: [
      { word: 'antibody', focus: 'anti- (對抗) + body (身體)', meaning: '抗體', keyRule: '對抗字首直接複合' },
      { word: 'counteract', focus: 'counter- (抵消/反向) + act (行動)', meaning: '抵消、抵制', keyRule: '對抗字首直接複合' },
      'contradict',
      { word: 'antibiotic', focus: 'anti- (對抗) + biotic (生物的)', meaning: '抗生素', keyRule: '對抗字首直接複合' },
      { word: 'antidote', focus: 'anti- (對抗) + dote (給予)', meaning: '解毒劑', keyRule: '對抗字首直接複合' },
      { word: 'counterfeit', focus: 'counter- (相對/仿) + feit (做)', meaning: '偽造', keyRule: 'feit 為 fac/fect (做) 的法語變體 ➔ 仿造出來' },
      { word: 'contrast', focus: 'contra- (相反) + stare (站立)', meaning: '對比', keyRule: '相反字首直接複合' },
      { word: 'controversy', focus: 'contra- ➔ contro- (相反) + versy (轉)', meaning: '爭議', keyRule: '相反字首直接複合' }
    ]
  },
  {
    id: 'MIS_MAL', levelNumber: 25, dimension: 'negation',
    name: 'Level 25: mis- ↔ mal- 錯誤與惡劣', englishTitle: 'Mis- vs Mal- : Wrong vs Bad', ...NEGATION_COLOR,
    subtitle: '兩種負面意思：「錯」和「壞」',
    description: 'mis- 的意思是「錯誤」、「不當」，mal- 的意思是「惡劣」、「不好」，兩個都是負面的開頭。這一關也會順便學到意思相近的希臘字首 dys-（異常）和 pseudo-（假的）。',
    words: [
      { word: 'malfunction', focus: 'mal- (不良) + function (功能)', meaning: '故障、失靈', keyRule: '惡劣字首直接複合' },
      { word: 'misconduct', focus: 'mis- (錯誤) + conduct (行為)', meaning: '不當行為、失職', keyRule: '錯誤字首直接複合' },
      { word: 'dysfunction', focus: 'dys- (異常/障礙) + function (功能)', meaning: '功能障礙、失調', keyRule: '希臘語異常/困難字首' },
      { word: 'pseudonym', focus: 'pseudo- (虛假) + nym (名字)', meaning: '假名、筆名', keyRule: '希臘語虛假字首' },
      { word: 'mistake', focus: 'mis- (錯誤) + take (拿取)', meaning: '錯誤', keyRule: '錯誤字首直接複合' },
      { word: 'mislead', focus: 'mis- (錯誤) + lead (引導)', meaning: '誤導', keyRule: '錯誤字首直接複合' },
      { word: 'malnutrition', focus: 'mal- (不良) + nutrition (營養)', meaning: '營養不良', keyRule: '惡劣字首直接複合' },
      { word: 'malpractice', focus: 'mal- (不良) + practice (執業)', meaning: '醫療過失、濫用職權', keyRule: '惡劣字首直接複合' }
    ]
  },

  // ========================= 程度與層級 (3) =========================
  {
    id: 'SUPER_HYPO', levelNumber: 26, dimension: 'degree',
    name: 'Level 26: super-/hyper- ↔ hypo- 上下對照', englishTitle: 'Super-/Hyper- vs Hypo- : Above vs Below Normal', ...DEGREE_COLOR,
    subtitle: '一組相反的程度：太多 vs 太少',
    description: 'super-/hyper- 的意思是「超過」、「過度」，hypo- 的意思是「不夠」、「在下面」。這一組是「太多」和「太少」的完美對照！',
    words: [
      { word: 'supervise', focus: 'super- (在上) + vis (看)', meaning: '監督、管理', keyRule: 'vid/vis 目的詞幹' },
      { word: 'hyperactive', focus: 'hyper- (過度) + act (行動) + -ive', meaning: '過動的、極度活躍的', keyRule: '希臘語過度程度字首' },
      { word: 'hypothesis', focus: 'hypo- (在下/推測) + the(sis) (論點)', meaning: '假說、假設', keyRule: '希臘語不足/在下字首' },
      'superfluous',
      { word: 'superior', focus: 'super- (在上) + -ior (更...的)', meaning: '優越的', keyRule: '透明前綴直接拼接' },
      { word: 'supervisor', focus: 'super- (在上) + vis (看) + -or', meaning: '主管', keyRule: 'vid/vis 目的詞幹' },
      { word: 'hypertension', focus: 'hyper- (過度) + tension (張力)', meaning: '高血壓', keyRule: '希臘語過度程度字首' },
      { word: 'hypoglycemia', focus: 'hypo- (不足) + glycemia (血糖)', meaning: '低血糖', keyRule: '希臘語不足字首' }
    ]
  },
  {
    id: 'ULTRA_OVER', levelNumber: 27, dimension: 'degree',
    name: 'Level 27: ultra-/over-/out- 極致與勝過', englishTitle: 'Ultra-/Over-/Out- : Extreme, Surpass', ...DEGREE_COLOR,
    subtitle: '三個都表示「超過」，用法不太一樣',
    description: 'ultra-、over-、out- 意思都是「超過」、「勝過」。ultra- 來自古拉丁文，常用在比較專業的字裡；over- 和 out- 是英文原本就有的字，比較常出現在日常生活的動詞裡。',
    words: [
      { word: 'outperform', focus: 'out- (勝過) + perform (執行)', meaning: '表現優於、勝過', keyRule: '日耳曼原生超越字首' },
      { word: 'ultraviolet', focus: 'ultra- (超越) + violet (紫色)', meaning: '紫外線的', keyRule: '極度字首直接複合' },
      { word: 'overcome', focus: 'over- (超越) + come (來)', meaning: '克服', keyRule: '日耳曼原生超越字首' },
      { word: 'overdue', focus: 'over- (超過) + due (到期的)', meaning: '逾期的', keyRule: '日耳曼原生超越字首' },
      { word: 'outsmart', focus: 'out- (勝過) + smart (聰明)', meaning: '智勝', keyRule: '日耳曼原生超越字首' },
      { word: 'ultrasonic', focus: 'ultra- (超越) + sonic (聲音的)', meaning: '超音波的', keyRule: '極度字首直接複合' },
      { word: 'ultramodern', focus: 'ultra- (極度) + modern (現代的)', meaning: '極度現代的', keyRule: '極度字首直接複合' }
    ]
  },
  {
    id: 'ARCH_MAIN', levelNumber: 28, dimension: 'degree',
    name: 'Level 28: arch- ↔ main-/mega- ↔ micro- 首席、宏大與微小', englishTitle: 'Arch- vs Main-/Magni-/Mega-/Macro- vs Micro- : Chief, Great, Tiny', ...DEGREE_COLOR,
    subtitle: '「首領」「巨大」和它的反義詞「微小」',
    description: 'arch- 的意思是「最高、最厲害」。main-、magni-、mega-、macro- 雖然來自不同的古老語言，但都是在說「主要、巨大」。這一關也會一起學到意思相反的 micro-（微小），像 macroeconomics（總體經濟學）和 microeconomics（個體經濟學）就是一組好例子。',
    words: [
      { word: 'archenemy', focus: 'arch- (首席/主要) + enemy (敵人)', meaning: '頭號敵人、宿敵', keyRule: '希臘語首席極致字首' },
      { word: 'archbishop', focus: 'arch- (首席) + bishop (主教)', meaning: '大主教', keyRule: '希臘語首席極致字首' },
      { word: 'architect', focus: 'arch- (首要) + tect (建造者)', meaning: '建築師', keyRule: '希臘語首席極致字首' },
      { word: 'archetype', focus: 'arch- (首要) + type (印記)', meaning: '原型', keyRule: '希臘語首席極致字首' },
      { word: 'mainland', focus: 'main- (主要) + land (陸地)', meaning: '本土、大陸', keyRule: '古英語主力字首' },
      { word: 'mainstream', focus: 'main- (主要) + stream (潮流)', meaning: '主流', keyRule: '古英語主力字首' },
      { word: 'magnificent', focus: 'magni- (宏大) + -ficent', meaning: '宏偉壯麗的', keyRule: '拉丁宏大字首' },
      { word: 'magnitude', focus: 'magni- (宏大) + -tude', meaning: '規模、程度；震級', keyRule: '拉丁宏大字首' },
      { word: 'megaphone', focus: 'mega- (宏大) + phone (聲音)', meaning: '擴音器', keyRule: '希臘宏大字首' },
      { word: 'macroeconomics', focus: 'macro- (宏觀) + economics (經濟學)', meaning: '總體經濟學', keyRule: '希臘宏觀字首（與 microeconomics 對照）' },
      { word: 'microscope', focus: 'micro- (微小) + scope (看)', meaning: '顯微鏡', keyRule: '希臘語微小字首（與 mega-/macro- 反義）' },
      { word: 'microorganism', focus: 'micro- (微小) + organism (生物體)', meaning: '微生物', keyRule: '希臘語微小字首' },
      { word: 'microeconomics', focus: 'micro- (微觀) + economics (經濟學)', meaning: '個體經濟學', keyRule: '希臘語微小字首（與 macroeconomics 對照）' }
    ]
  },

  // ========================= 關係、協同與評價 (3) =========================
  {
    id: 'SYN', levelNumber: 29, dimension: 'relation',
    name: 'Level 29: syn-/sym- 共同與同步', englishTitle: 'Syn-/Sym- : Together, Same', ...RELATION_COLOR,
    subtitle: '希臘版的「一起」，會變成 sym- syl- sys-',
    description: 'syn- 的意思是「一起」、「同步」，可以想成是希臘文版的 con-。遇到不同字母，會變身成 sym-、syl- 或 sys-，規則和 con- 很像。',
    words: [
      'sympathy',
      { word: 'synchronize', focus: 'syn- (共同/同步) + chronos (時間) + -ize', meaning: '同步、使一致', keyRule: '使時間 (chronos) 共同一致' },
      { word: 'synthesis', focus: 'syn- (共同) + tithenai (放置)', meaning: '合成', keyRule: '透明前綴直接拼接' },
      { word: 'symmetry', focus: 'syn- ➔ sym- (共同) + metron (測量)', meaning: '對稱', keyRule: '希臘語 syn- 在 m 前同化為 sym-' },
      { word: 'synergy', focus: 'syn- (共同) + ergon (工作)', meaning: '協同效應', keyRule: '透明前綴直接拼接' },
      { word: 'syllable', focus: 'syn- ➔ syl- (共同) + lambanein (拿取)', meaning: '音節', keyRule: '希臘語 syn- 在 l 前同化為 syl-' },
      { word: 'system', focus: 'syn- ➔ sys- (共同) + histanai (站立)', meaning: '系統', keyRule: '希臘語 syn- 在 s 前同化為 sys-' }
    ]
  },
  {
    id: 'AUTO_HETERO', levelNumber: 30, dimension: 'relation',
    name: 'Level 30: auto- ↔ hetero-/homo- 自身與異同', englishTitle: 'Auto- vs Hetero-/Homo- : Self vs Different/Same', ...RELATION_COLOR,
    subtitle: '三個希臘開頭放一起比一比',
    description: 'auto- 的意思是「自己」，hetero- 的意思是「不一樣」，homo- 的意思是「一樣」。這三個常常一起出現在同一類的字裡，放在一起學最容易分清楚。',
    words: [
      { word: 'autonomy', focus: 'auto- (自身) + nom (法則) + -y', meaning: '自治、自主權', keyRule: '希臘語自身字首' },
      { word: 'autobiography', focus: 'auto- (自身) + bio (生命) + graphy (書寫)', meaning: '自傳', keyRule: '希臘複合字根公式' },
      { word: 'heterogeneous', focus: 'hetero- (相異) + gen (種類) + -ous', meaning: '異質的、成分混雜的', keyRule: '希臘語相異字首' },
      { word: 'homogeneous', focus: 'homo- (相同) + gen (種類) + -ous', meaning: '同質的、均勻的', keyRule: '希臘語相同字首（與 heterogeneous 對照）' },
      { word: 'automatic', focus: 'auto- (自身) + matic (行動)', meaning: '自動的', keyRule: '希臘語自身字首' },
      { word: 'autograph', focus: 'auto- (自身) + graph (書寫)', meaning: '親筆簽名', keyRule: '希臘語自身字首' },
      { word: 'homophone', focus: 'homo- (相同) + phone (聲音)', meaning: '同音異字', keyRule: '希臘語相同字首' }
    ]
  },
  {
    id: 'BENE_EU', levelNumber: 31, dimension: 'relation',
    name: 'Level 31: bene- ↔ eu- 良善對照', englishTitle: 'Bene- vs Eu- : Good, Well', ...RELATION_COLOR,
    subtitle: '兩個都是「很好」，一個拉丁、一個希臘',
    description: 'bene- 和 eu- 意思都是「良好」、「美好」。bene- 來自古拉丁文，eu- 來自古希臘文，組字的方式幾乎一模一樣。',
    words: [
      { word: 'benevolent', focus: 'bene- (良善) + vol (意願) + -ent', meaning: '仁慈的、樂善好施的', keyRule: '拉丁良善字首' },
      { word: 'eulogy', focus: 'eu- (良好) + log (言詞) + -y', meaning: '頌詞、悼詞', keyRule: '希臘良善字首（與 benevolent 對照）' },
      { word: 'benefit', focus: 'bene- (良善) + fit (做)', meaning: '益處', keyRule: '拉丁良善字首' },
      { word: 'euphoria', focus: 'eu- (良好) + phoria (承受)', meaning: '欣快感', keyRule: '希臘良善字首' },
      { word: 'euphemism', focus: 'eu- (良好) + phemism (言語)', meaning: '委婉語', keyRule: '把刺耳的話用「良好 (eu)」的方式說出來' },
    ]
  },

  // ========================= 數量、比例與尺度 (4) =========================
  {
    id: 'UNI_MONO', levelNumber: 32, dimension: 'number',
    name: 'Level 32: uni-/mono- 單一與均等', englishTitle: 'Uni-/Mono- : One, Single', ...NUMBER_COLOR,
    subtitle: '意思是「一個」，還會學到「相等」',
    description: 'uni- 和 mono- 意思都是「單一、一個」。這一關也會順便學到意思相近的 equi-（相等）。',
    words: [
      { word: 'unanimous', focus: 'uni- (單一) + anim (心/意) + -ous', meaning: '全體一致的、無異議的', keyRule: '數量單一字首透明拼接' },
      { word: 'equivocal', focus: 'equi- (同等) + voc (聲音) + -al', meaning: '模稜兩可的、含糊不清的', keyRule: 'voc/vok 呼叫與聲音根' },
      { word: 'uniform', focus: 'uni- (單一) + form (形式)', meaning: '制服；均一的', keyRule: '數量單一字首透明拼接' },
      { word: 'universe', focus: 'uni- (單一) + verse (轉)', meaning: '宇宙', keyRule: '數量單一字首透明拼接' },
      { word: 'monologue', focus: 'mono- (單) + log (言詞) + -ue', meaning: '獨白、單方談話', keyRule: '希臘語數量單一字首' },
      { word: 'monopoly', focus: 'mono- (單) + poly (賣)', meaning: '壟斷', keyRule: '希臘語數量單一字首' }
    ]
  },
  {
    id: 'BI_TRI', levelNumber: 33, dimension: 'number',
    name: 'Level 33: bi-/di- ↔ tri- 二與三', englishTitle: 'Bi-/Di- vs Tri- : Two vs Three', ...NUMBER_COLOR,
    subtitle: '數字關卡：二和三',
    description: 'bi-/di- 的意思是「二、雙」，tri- 的意思是「三」，是數字類開頭裡最基本的兩個。',
    words: [
      { word: 'bicycle', focus: 'bi- (雙) + cycle (輪子)', meaning: '自行車', keyRule: '數量二元字首透明拼接' },      
      { word: 'bilingual', focus: 'bi- (雙) + lingua (語言) + -al', meaning: '雙語的', keyRule: '數量二元字首透明拼接' },      
      { word: 'dilemma', focus: 'di- (二) + lemma (前提/命題)', meaning: '進退兩難、困境', keyRule: '希臘語數量二元字首 (面對兩個前提)' },
      { word: 'duplicate', focus: 'du- (二) + plic (摺疊) + -ate (具備某種狀態)', meaning: '複製品；複製的', keyRule: 'plic/ply 摺疊詞族' },      
      { word: 'dioxide', focus: 'di- (二) + oxide (氧化物)', meaning: '二氧化物', keyRule: '希臘科技與化學二元字首' },
      { word: 'triangle', focus: 'tri- (三) + angle (角)', meaning: '三角形', keyRule: '數量三字首透明拼接' },
      { word: 'trilogy', focus: 'tri- (三) + logy (言詞/學問)', meaning: '三部曲', keyRule: '數量三字首透明拼接' },
      { word: 'tripod', focus: 'tri- (三) + pod (腳)', meaning: '三腳架', keyRule: '數量三字首透明拼接' }
    ]
  },
  {
    id: 'QUADR_MULTI', levelNumber: 34, dimension: 'number',
    name: 'Level 34: quadr-/tetra- ↔ multi-/poly- 四與眾多', englishTitle: 'Quadr-/Tetra- vs Multi-/Poly- : Four vs Many', ...NUMBER_COLOR,
    subtitle: '數字關卡：四和很多',
    description: 'quadr-/tetra- 的意思是「四」，multi-/poly- 的意思是「很多」，從固定的數字一路延伸到「數不清」。',
    words: [
      { word: 'multinational', focus: 'multi- (多元) + national (國家的)', meaning: '跨國的、多國的', keyRule: '數量眾多字首直接複合' },
      { word: 'quadruple', focus: 'quadr- (四) + -uple (倍數)', meaning: '四倍的；使成四倍', keyRule: '拉丁數量四字首' },
      { word: 'tetragon', focus: 'tetra- (四) + gon (角)', meaning: '四邊形', keyRule: '希臘數量四字首（與 quadruple 對照）' },
      { word: 'polygon', focus: 'poly- (多) + gon (角)', meaning: '多邊形', keyRule: '希臘語數量眾多字首' },
      { word: 'quadrant', focus: 'quadr- (四) + -ant', meaning: '象限', keyRule: '拉丁數量四字首' },
      { word: 'multimedia', focus: 'multi- (多元) + media (媒體)', meaning: '多媒體', keyRule: '數量眾多字首直接複合' },
      { word: 'multiply', focus: 'multi- (多) + ply (摺疊)', meaning: '乘、繁殖、增加', keyRule: '將物品多次摺疊 ➔ 倍數增加 (乘法)' },
      { word: 'polymer', focus: 'poly- (多) + mer (部分)', meaning: '聚合物', keyRule: '希臘語數量眾多字首' }
    ]
  },
  {
    id: 'SEMI_OMNI', levelNumber: 35, dimension: 'number',
    name: 'Level 35: semi-/hemi- ↔ omni-/pan- 半與全', englishTitle: 'Semi-/Hemi- vs Omni-/Pan- : Half vs All', ...NUMBER_COLOR,
    subtitle: '數字關卡最終回：一半和全部',
    description: 'semi-/hemi- 的意思是「一半」，omni-/pan- 的意思是「全部」，剛好是數量光譜的兩端。',
    words: [
      { word: 'omnipresent', focus: 'omni- (全) + present (存在的)', meaning: '無所不在的', keyRule: '數量全體字首直接複合' },
      { word: 'semicircle', focus: 'semi- (半) + circle (圓)', meaning: '半圓形', keyRule: '希臘-拉丁 h↔s 跨語系對應律' },
      { word: 'hemisphere', focus: 'hemi- (半) + sphere (球)', meaning: '半球', keyRule: '希臘-拉丁 h↔s 跨語系對應律（與 semicircle 對照）' },
      { word: 'semiconductor', focus: 'semi- (半) + conductor (導體)', meaning: '半導體', keyRule: '拉丁數量半字首直接複合' },
      { word: 'omnipotent', focus: 'omni- (全) + potent (有力的)', meaning: '全能的', keyRule: '拉丁數量全字首直接複合' },
      { word: 'omniscient', focus: 'omni- (全) + scient (知道的)', meaning: '全知的', keyRule: '拉丁數量全字首直接複合' },
      { word: 'panorama', focus: 'pan- (全) + orama (景象)', meaning: '全景', keyRule: '希臘語數量全體字首' },
      { word: 'pandemic', focus: 'pan- (全) + demic (人群)', meaning: '大流行病', keyRule: '希臘語數量全體字首' }
    ]
  },

  // ========================= 補充關卡（比對外部字首字根資料庫後新增） =========================
  {
    id: 'PARA', levelNumber: 36, dimension: 'space',
    name: 'Level 36: para- 在旁與並列', englishTitle: 'Para- : Beside, Alongside, Abnormal', ...SPACE_COLOR,
    subtitle: '意思是「在旁邊」',
    description: 'para- 的意思是「在旁邊」、「並排」，可以延伸成「輔助」（像 paramedic 緊急醫療救護員），也可以延伸成「不太正常」（像 paradox 似非而是的說法、paranormal 超自然的）。',
    words: [
      { word: 'parallel', focus: 'para- (並列) + allel (彼此)', meaning: '平行的', keyRule: '希臘語在旁字首' },
      { word: 'paradox', focus: 'para- (相悖) + dox (意見)', meaning: '悖論、似非而是的雋語', keyRule: '希臘語偏離常軌字首' },
      { word: 'paraphrase', focus: 'para- (旁側改寫) + phrase (措辭)', meaning: '意譯、改述', keyRule: '希臘語在旁字首' },
      { word: 'paramedic', focus: 'para- (輔助) + medic (醫療的)', meaning: '緊急醫療救護員', keyRule: '希臘語輔助字首' },
      { word: 'paragraph', focus: 'para- (旁側書寫標記) + graph (寫)', meaning: '段落', keyRule: '希臘語在旁字首' },
      { word: 'paranormal', focus: 'para- (超出) + normal (正常的)', meaning: '超自然的', keyRule: '希臘語偏離常軌字首' },
      { word: 'parasite', focus: 'para- (在旁邊) + site (食物,原意「吃在一旁的人」)', meaning: '寄生蟲', keyRule: '希臘語在旁字首' }
    ]
  },
  {
    id: 'OCT_CENT', levelNumber: 37, dimension: 'number',
    name: 'Level 37: oct-/deca-/cent-/kilo- 大數計數字首', englishTitle: 'Oct-/Deca-/Cent-/Kilo- : Eight, Ten, Hundred, Thousand', ...NUMBER_COLOR,
    subtitle: '數字關卡加映：八、十、百、千',
    description: '除了一、二、三、四這些基本數字，英文也有專門的字首表示更大的數字：oct-（八）、deca-（十）、cent-（百）、kilo-（千）。',
    words: [
      { word: 'octopus', focus: 'oct- (八) + pus (腳)', meaning: '章魚', keyRule: '希臘語八數字首' },
      { word: 'October', focus: 'oct- (八，古羅馬曆原為八月)', meaning: '十月', keyRule: '拉丁語八數字首（曆法歷史遺留）' },
      { word: 'decade', focus: 'deca- (十) + -ade', meaning: '十年', keyRule: '希臘語十數字首' },
      { word: 'decathlon', focus: 'deca- (十) + athlon (競賽)', meaning: '十項全能運動', keyRule: '希臘語十數字首' },
      { word: 'century', focus: 'cent- (百) + -ury', meaning: '世紀、一百年', keyRule: '拉丁語百數字首' },
      { word: 'centipede', focus: 'cent- (百) + pede (腳)', meaning: '蜈蚣', keyRule: 'pede (腳) 與英文 foot 同源 (格林法則 p ➔ f)' },
      { word: 'kilometer', focus: 'kilo- (千) + meter (公尺)', meaning: '公里', keyRule: '希臘語千數字首' },
      { word: 'kilogram', focus: 'kilo- (千) + gram (公克)', meaning: '公斤', keyRule: '希臘語千數字首' }
    ]
  },
  {
    id: 'SE', levelNumber: 38, dimension: 'space',
    name: 'Level 38: se- 分離與隔絕', englishTitle: 'Se- : Apart, Aside, Without', ...SPACE_COLOR,
    subtitle: '意思是「分開」',
    description: 'se- 的意思是「分開」、「隔離」、「放到一邊」，常出現在跟「挑選」「分類」「藏起來」有關的字裡。',
    words: [
      { word: 'select', focus: 'se- (分開) + lect (挑選/收集)', meaning: '選擇、挑選', keyRule: '挑出來分開放' },
      { word: 'separate', focus: 'se- (分開) + parate (部分)', meaning: '分開、分離', keyRule: '拉丁分離前綴' },
      { word: 'segregate', focus: 'se- (分開) + greg (群體) + -ate (使...)', meaning: '隔離、分開', keyRule: 'greg 羊群/群體詞族' },
      { word: 'seclude', focus: 'se- (隔離) + clude (關閉)', meaning: '使隔離、隱居', keyRule: 'clude 關閉詞族' },
      { word: 'seduce', focus: 'se- (偏離) + duce (引導)', meaning: '引誘、蠱惑', keyRule: '引導離開正軌 (duc/duct 詞族)' },
      { word: 'secret', focus: 'se- (分開) + cret (篩選/區分)', meaning: '秘密、機密', keyRule: '分開藏好之物' }
    ]
  },
  {
    id: 'DIA', levelNumber: 39, dimension: 'space',
    name: 'Level 39: dia- 穿越與交互', englishTitle: 'Dia- : Through, Across, Between', ...SPACE_COLOR,
    subtitle: '希臘文的「穿過」',
    description: 'dia- 來自古希臘文，意思是「穿過」、「兩者之間」，作用跟拉丁文的 per- 或 inter- 很像。',
    words: [
      { word: 'dialogue', focus: 'dia- (交互/之間) + log (言詞) + -ue', meaning: '對話、交流', keyRule: '話語在彼此間流動' },
      { word: 'diameter', focus: 'dia- (穿透) + meter (測量)', meaning: '直徑', keyRule: '穿過圓心的測量' },
      { word: 'diagnose', focus: 'dia- (穿越/徹底) + gnos (知道) + -e', meaning: '診斷', keyRule: '徹底了解病情 (gnos 認知詞族)' },
      { word: 'diagram', focus: 'dia- (交叉/貫穿) + gram (畫/寫)', meaning: '圖解、圖表', keyRule: '希臘圖形標記詞族' },
      { word: 'diagonal', focus: 'dia- (穿越) + gon (角) + -al', meaning: '對角線的', keyRule: '穿過兩個對角的' },
      { word: 'dialect', focus: 'dia- (交互/之間) + lect (說話/挑選)', meaning: '方言', keyRule: '特定群體間的語言' }
    ]
  }
];

export const CURRICULUM_STAGES: CurriculumStage[] = RAW_CURRICULUM_STAGES.map((stage) => ({
  ...stage,
  words: stage.words.map(resolveWordItem)
}));

export const DEFAULT_DAILY_GOAL = 3;

export const INITIAL_STUDY_PROGRESS = {
  currentLevel: 'RE' as StudyLevel,
  dailyGoal: DEFAULT_DAILY_GOAL,
  masteredWords: [] as string[],
  todayStudiedWords: [] as string[],
  lastStudyDate: new Date().toISOString().slice(0, 10),
  streakDays: 1
};
