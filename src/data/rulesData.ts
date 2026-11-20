import { AssimilationRule, DualStemRule } from '../types';

export const FULL_ETYMOLOGY_COMPENDIUM_MD = `# 英語構詞與詞源全規則完整手冊
### （English Morphology, Etymology & Phonological Rules Compendium）

---

## 目錄
1. [第一章 構詞基本架構與四大衍生公式](#第一章-構詞基本架構與四大衍生公式)
2. [第二章 八大語音同化全矩陣](#第二章-八大語音同化全矩陣)
3. [第三章 六大語義維度與字首分類庫](#第三章-六大語義維度與字首分類庫)
4. [第四章 字根對偶、母音弱化與同源轉換律](#第四章-字根對偶母音弱化與同源轉換律)
5. [第五章 後綴異化律與顎音化現象](#第五章-後綴異化律與顎音化現象)
6. [第六章 三音節鬆音化與重音位移律](#第六章-三音節鬆音化與重音位移律)
7. [第七章 字尾詞性分流與語法角色庫](#第七章-字尾詞性分流與語法角色庫)
8. [第八章 正字法拼寫四大定律](#第八章-正字法拼寫四大定律)
9. [第九章 英語三大詞源地層學](#第九章-英語三大詞源地層學)
10. [第十章 實戰長難詞四步解構演算法](#第十章-實戰長難詞四步解構演算法)

---

## 第一章 構詞基本架構與四大衍生公式
英語單字的本質是由最小語義單位（語素 Morphemes）組合而成的結構體。

                    ┌── 🚩 前綴 (Prefix)：調控方向、極性、時間、空間、程度
                    ├── 💎 字根 (Root/Stem)：承載核心動作、本質與概念
單字構詞三大基石 ───┤
                    └── 🏷️ 後綴 (Suffix)：鎖定語法功能、詞性及角色範疇

### 1.1 標準派生公式（Derivative Formula）
$$\\text{單字} = [\\text{前綴 Prefix}] + [\\text{字根 Root}] + [\\text{後綴 Suffix}]$$
* **範例**：$\\text{in-} \\text{ (向內)} + \\text{spect} \\text{ (看)} + \\text{-or} \\text{ (人)} = \\textbf{inspector} \\text{ (檢查員/督察)}$

### 1.2 希臘複合字根公式（Greek Combining Formula）
$$\\text{複合詞} = [\\text{字根}_1] + [-\\text{o}- / -\\text{i}- \\text{ 連接母音}] + [\\text{字根}_2] + [\\text{後綴}]$$
* **範例**：$\\text{tele} \\text{ (遠端)} + \\text{path} \\text{ (感受)} + \\text{-y} \\text{ (名詞)} = \\textbf{telepathy} \\text{ (心靈感應)}$
* **範例**：$\\text{bio} \\text{ (生命)} + \\text{-o-} + \\text{logy} \\text{ (學問)} = \\textbf{biology} \\text{ (生物學)}$

### 1.3 多重詞綴嵌套公式（Multiple Affixation Formula）
$$\\text{單字} = [\\text{外層前綴}_2] + [\\text{內層前綴}_1] + [\\text{字根}] + [\\text{後綴}_1] + [\\text{後綴}_2]$$
* **範例**：$\\text{un-} \\text{ (無)} + \\text{pre-} \\text{ (預先)} + \\text{ced} \\text{ (走)} + \\text{-ent} + \\text{-ed} = \\textbf{unprecedented} \\text{ (史無前例的)}$
* **範例**：$\\text{re-} \\text{ (再)} + \\text{in-} \\text{ (進)} + \\text{force} \\text{ (力量)} + \\text{-ment} = \\textbf{reinforcement} \\text{ (增援/強化)}$

### 1.4 詞素類型界定
* **自由詞素（Free Morpheme）**：可獨立成詞（如 *act, port, form, stand*）。
* **黏著詞素（Bound Morpheme）**：無法單獨存在，必須附著於其他詞素（如 *-duct, -cept, -cide, re-, trans-*）。

---

## 第二章 八大語音同化全矩陣
當拉丁字首的尾輔音與字根開頭的輔音相遇時，為使發音省力順暢，前綴尾輔音會**同化為字根首字母**或轉變為發音部位相同的輔音。

同化機制：[ 前綴尾輔音 (d, n, b, s, x) ] + [ 字根首字母 ] ──▶ [ 轉為同部位/雙寫輔音 ]

| 原型字首 | 核心語義 | 觸發條件（字根首字母） | 同化形態 | 經典詞彙範例 |
| :---- | :---- | :---- | :---- | :---- |
| **\`ad-\`** | 朝向、去、加強 | 遇 c, k, q<br>遇 f<br>遇 g<br>遇 l<br>遇 n<br>遇 p<br>遇 r<br>遇 s<br>遇 t<br>遇 sc, sp, st | \`ac-\`<br>\`af-\`<br>\`ag-\`<br>\`al-\`<br>\`an-\`<br>\`ap-\`<br>\`ar-\`<br>\`as-\`<br>\`at-\`<br>\`a-\`（簡化脫落） | **ac**quire, **ac**cept<br>**af**fect, **af**firm<br>**ag**gressive, **ag**gravate<br>**al**locate, **al**leviate<br>**an**nounce, **an**nex<br>**ap**ply, **ap**plaud<br>**ar**rive, **ar**range<br>**as**sist, **as**sume<br>**at**tract, **at**tend<br>**a**spire, **a**scribe |
| **\`con- / com-\`** | 共同、完全、聚集 | 遇雙唇音 b, p, m<br>遇 l<br>遇 r<br>遇母音或 h<br>遇其他輔音（d, g, j, n, s, t, v） | \`com-\`<br>\`col-\`<br>\`cor-\`<br>\`co-\`（弱化脫落）<br>\`con-\` | **com**bine, **com**memorate<br>**col**laborate, **col**lect<br>**cor**rect, **cor**rupt<br>**co**operate, **co**here<br>**con**duct, **con**tain |
| **\`in- / en-\`** | 1. 否定 (Not)<br>2. 進入/在內 (Into) | 遇雙唇音 b, p, m<br>遇 l<br>遇 r<br>遇其他字母 | \`im-\` / \`em-\`<br>\`il-\`<br>\`ir-\`<br>\`in-\` / \`en-\` | **im**possible / **im**merse, **em**power<br>**il**legal / **il**luminate<br>**ir**responsible / **ir**rigate<br>**in**visible / **in**spect, **en**close |
| **\`sub-\`** | 在...之下、次等、秘密 | 遇 c, f, g, m, p<br>遇 r<br>遇 sp, st | \`suc-\`, \`suf-\`, \`sug-\`, \`sum-\`, \`sup-\`<br>\`sur-\`<br>\`su-\` / \`sus-\` | **suc**ceed, **suf**fer, **sug**gest, **sum**mon, **sup**press<br>**sur**render<br>**su**spect, **sus**tain |
| **\`ob-\`** | 反對、阻擋、面向 | 遇 c, f, p, t<br>遇其他字母 | \`oc-\`, \`of-\`, \`op-\`, \`os-\`<br>\`ob-\` | **oc**cur, **of**fend, **op**pose, **os**tentatious<br>**ob**stacle, **ob**struct |
| **\`dis-\`** | 分離、否定、相反 | 遇 f<br>遇濁輔音 b, d, g, l, m, n, r, v<br>遇其他字母 | \`dif-\`<br>\`di-\` / \`dis-\`<br>\`dis-\` | **dif**fer, **dif**fuse<br>**di**verge, **di**lute, **di**rect<br>**dis**connect, **dis**pute |
| **\`ex-\`** | 向外、脫離、前任 | 遇濁輔音 b, d, g, j, l, m, n, r, v<br>遇 f<br>遇母音或清輔音 | \`e-\`<br>\`ef-\`<br>\`ex-\` | **e**mit, **e**ject, **e**laborate<br>**ef**fect, **ef**ficient<br>**ex**port, **ex**tract |
| **\`syn-\`** *(希臘)* | 共同、相同、合成 | 遇 b, p, m<br>遇 l<br>遇 s<br>遇其他字母 | \`sym-\`<br>\`syl-\`<br>\`sys-\`<br>\`syn-\` | **sym**pathy, **sym**metry<br>**syl**lable, **syl**logism<br>**sys**tem<br>**syn**chronize, **syn**tax |
| **\`a-\`** *(希臘)* | 無、非、缺乏 | 遇輔音<br>遇母音或 h | \`a-\`<br>\`an-\` | **a**typical, **a**pathy, **a**theist<br>**an**archy, **an**onymous, **an**esthesia |

---

## 第三章 六大語義維度與字首分類庫
* **3.1 空間向度**：\`in-/im-/intra-\` $\leftrightarrow$ \`ex-/e-/extra-\`；\`per-/dia-\` (貫穿/穿透: *pertain, permeate, penetrate, perennial, diameter*)；\`super-/sur-/hyper-\` $\leftrightarrow$ \`sub-/infra-/hypo-\`；\`pro-/pre-/ante-\` $\leftrightarrow$ \`re-/retro-/post-\`；\`trans-/dia-\` $\leftrightarrow$ \`circum-/peri-\`；\`inter-\`, \`medi-\`。
* **3.2 時間順序**：\`pre-\`, \`ante-\`, \`fore-\` (事前)；\`post-\` (事後)；\`prim-\`, \`proto-\`, \`arch-\` (原始)。
* **3.3 極性與否定**：\`un-\`, \`non-\`, \`in-/im-/il-/ir-\`, \`a-/an-\` (純否定)；\`de-\`, \`dis-\`, \`un-\` (逆轉剝奪)；\`anti-\`, \`contra-/counter-\`, \`ob-/op-\` (抗衡)；\`mis-\`, \`mal-\`, \`dys-\`, \`pseudo-\` (錯誤惡劣)。
* **3.4 數量與尺度**：\`uni-\`, \`mono-\`, \`sol-\` (一)；\`bi-\`, \`di-\`, \`duo-\`, \`ambi-/amphi-\` (二)；\`tri-\`, \`quadr-/tetra-\`, \`multi-\`, \`poly-\` (多)；\`omni-\`, \`pan-\`, \`hol-\` (全)；\`semi-\`, \`hemi-\`, \`demi-\` (半)；\`micro-\` $\leftrightarrow$ \`macro-/mega-\`。
* **3.5 程度與層級**：\`per-\` (徹底/完全/極致: *perfect, perform, permanent, perceive, persist, perturb*)；\`hyper-\`, \`ultra-\`, \`super-\`, \`out-\`, \`over-\` (超量)；\`hypo-\`, \`sub-\`, \`under-\` (不足)；\`arch-\` (首席)。
* **3.6 關係與屬性**：\`con-/com-\`, \`syn-/sym-\` (協同)；\`auto-\` $\leftrightarrow$ \`hetero-/ali-\` (自/異)；\`bene-\`, \`eu-\`, \`bon-\` (優美良善)。
* **3.7 日耳曼原生字首**：\`with-\` (抵抗/向後: withdraw, withstand)；\`be-\` (使動/加強: befriend, bewilder)；\`fore-\` (預先: foresee, forefather)。

---

## 第四章 字根對偶、母音弱化與同源轉換律
### 4.1 拉丁動詞雙詞幹對照法則
* **🗣️ dic / dict** (說話/宣示): predict ➔ prediction, dictate ➔ dictation, contradict ➔ contradiction
* **🎯 duc / duct** (引導): induce ➔ induction, produce ➔ production
* **🏃 ced / cess** (行走/讓步): recede ➔ recession, process ➔ procession
* **🚜 trah / tract** (拖拉/牽引): attract ➔ attraction, contract ➔ contraction
* **✍️ scrib / script** (書寫): prescribe ➔ prescription
* **📤 mit / miss** (傳送): transmit ➔ transmission
* **🔄 vert / vers** (轉向): divert ➔ diversion
* **🚀 pel / puls** (推進): propel ➔ propulsion
* **📦 pon / posit** (放置): postpone ➔ deposit
* **🖐️ cap / cept** (抓取): perceive ➔ perception
* **👁️ vid / vis** (觀看): provide ➔ provision
* **🌊 flu / flux** (流動): fluent ➔ influx
* **💥 frag / fract** (破碎): fragile ➔ fraction
* **🤝 tang / tact** (接觸): tangible ➔ contact
* **⚙️ fac / fect / fic** (製造): factory ➔ perfect
* **✊ ten / tent / tain** (握持): contain ➔ content
* **🧍 sta / stat / sist** (站立): resist ➔ statue
* **👀 spec / spect** (注視): inspect ➔ inspection
* **📣 voc / vocat** (呼喚): provoke ➔ provocation
* **🚢 port / portat** (運送): transport ➔ transportation
* **🚶 ven / vent** (來臨): prevent ➔ prevention, convene ➔ convention

### 4.2 母音弱化律（Ablaut）
* \`fac-\` $\\rightarrow$ \`-fic- / -fect-\`: *factory* $\\rightarrow$ *deficit, efficient*
* \`cap-\` $\\rightarrow$ \`-cip- / -cept-\`: *capture* $\\rightarrow$ *participate, recipient*
* \`sed-\` $\\rightarrow$ \`-sid-\`: *sedentary* $\\rightarrow$ *preside, subsidy*
* \`tang-\` $\\rightarrow$ \`-ting-\`: *tangent* $\\rightarrow$ *contingent*

### 4.3 希臘-拉丁 $h \\leftrightarrow s$ 跨語系對應律
* **hemi-** $\\leftrightarrow$ **semi-** (*hemisphere* vs. *semicircle*)
* **hyper-** $\\leftrightarrow$ **super-** (*hyperactive* vs. *supervisor*)
* **hypo-** $\\leftrightarrow$ **sub-** (*hypodermic* vs. *submarine*)
* **hept-** $\\leftrightarrow$ **sept-** (*heptagon* vs. *September*)
* **hex-** $\\leftrightarrow$ **sex-** (*hexagon* vs. *sextuplet*)
* **hals-** $\\leftrightarrow$ **sal-** (*halogen* vs. *salary*)

### 4.4 格林法則印歐同源聯想法
* **[f] $\\leftrightarrow$ [p]**: *foot* $\\leftrightarrow$ **ped-**, *father* $\\leftrightarrow$ **pater-**
* **[th] $\\leftrightarrow$ [t/d]**: *three* $\\leftrightarrow$ **tri-**, *tooth* $\\leftrightarrow$ **dent-**
* **[h] $\\leftrightarrow$ [k/c]**: *heart* $\\leftrightarrow$ **cord-/card-**, *hound* $\\leftrightarrow$ **can-**
* **[w] $\\leftrightarrow$ [v]**: *word* $\\leftrightarrow$ **verb-**, *widow* $\\leftrightarrow$ **vidua**

---

## 第五章 後綴異化律與顎音化現象
### 5.1 後綴異化律 (Phonological Dissimilation)
字根含字母 **\`l\`** 時，形容詞後綴 **\`-al\`** 自動異化為 **\`-ar\`**：
* *circle* $\\rightarrow$ **circular**
* *pole* $\\rightarrow$ **polar**
* *module* $\\rightarrow$ **modular**
* *muscle* $\\rightarrow$ **muscular**
* *single* $\\rightarrow$ **singular**

### 5.2 顎音化與摩擦音化定律
* $t \\rightarrow \\text{/ʃ/}$: *act $\\rightarrow$ action*, *infect $\\rightarrow$ infectious*
* $d \\rightarrow \\text{/ʒ/}$: *divide $\\rightarrow$ division*, *conclude $\\rightarrow$ conclusion*
* $t + \\text{-ure} \\rightarrow \\text{/tʃ/}$: *create $\\rightarrow$ creature*, *depart $\\rightarrow$ departure*
* $s/c \\rightarrow \\text{/ʃ/}$: *press $\\rightarrow$ pressure*, *music $\\rightarrow$ musician*

---

## 第六章 三音節鬆音化與重音位移律
### 6.1 三音節鬆母音化 (Trisyllabic Laxing)
加上特定後綴重音落在倒數第三音節時，長母音強弱化為短母音：
* **divine** /aɪ/ ➔ **divinity** /dɪˈvɪn.ə.ti/
* **sane** /eɪ/ ➔ **sanity** /ˈsæn.ə.ti/
* **serene** /iː/ ➔ **serenity** /səˈren.ə.ti/
* **sole** /oʊ/ ➔ **solitude** /ˈsɑː.lə.tuːd/
* **nation** /eɪ/ ➔ **national** /ˈnæʃ.nəl/

### 6.2 名動重音位移 (Noun-Verb Stress Shift)
雙音節前綴詞「前名後動」：
* **record**: /ˈrek.ɚd/ (n. 唱片/紀錄) vs. /rɪˈkɔːrd/ (v. 錄音/記載)
* **present**: /ˈprez.ənt/ (n. 禮物) vs. /prɪˈzent/ (v. 呈現/贈送)
* **conflict**: /ˈkɑːn.flɪkt/ (n. 衝突) vs. /kənˈflɪkt/ (v. 牴觸)
* **produce**: /ˈprɑː.duːs/ (n. 農產) vs. /prəˈduːs/ (v. 生產)

---

## 第七章 字尾詞性分流與語法角色庫
* **1. 名詞後綴**：-er/-or/-ist/-ian (人物)；-tion/-sion/-ment/-ance (動作/結果)；-ity/-ness/-tude/-ism (抽象品質)。
* **2. 動詞後綴 (致使化 Causative)**：
  * **-ate**（使成為、使處於某狀態、實踐，源自拉丁 *-atus*）：*activate (使活躍/啟動), terminate (使終止), motivate (激勵), oxygenate (使充氧)*
    * *發音規律*：動詞發長音 /eɪt/（*estimate* v.），名詞/形容詞弱化為 /ət/ 或 /ɪt/（*estimate* n., *accurate* adj.）。
    * *名詞對偶*：-ate ➔ -ation (*educate ➔ education*)。
  * **-ize / -ise**（使...化、體系化）：*modernize, emphasize, prioritize*
  * **-ify / -fy**（使轉變、造成）：*simplify, clarify, notify*
  * **-en**（日耳曼原生使動：使具備某物理性質）：*shorten, sharpen, strengthen*
* **3. 形容詞後綴**：-able/-ible (能力)；-al/-ar/-ic/-ous/-ive/-ary (屬性)；-ful/-less (極性)。
* **4. 副詞後綴**：-ly, -ward(s), -wise (方式/方向)。

---

## 第八章 正字法拼寫四大定律
1. **去 e 定律**：接母音後綴去 e (*create ➔ creating*)，接輔音後綴保留 (*hope ➔ hopeful*)。
2. **軟音 C/G 保護律**：遇 *-able/-ous* 保留 ce/ge 的 e (*notice ➔ noticeable, courage ➔ courageous*)。
3. **y 變 i 定律**：輔音+y 變 i (*happy ➔ happiness*)；母音+y 不變 (*play ➔ playful*)。
4. **1-1-1 雙寫律**：重音末音節 + 1短母音+1單輔音 ➔ 雙寫 (*refer ➔ referred, occur ➔ occurrence*)。

---

## 第九章 英語三大詞源地層學
| 概念主題 | 1. 日耳曼本土層（日常口語） | 2. 法語羅曼層（公務/社交） | 3. 古典拉丁/希臘層（學術/專業） |
| :---- | :---- | :---- | :---- |
| **提問 / 審問** | *ask* | *question* | **interrogate** |
| **王者 / 皇家** | *kingly* | *royal* | **regal / monarchical** |
| **心臟 / 熱誠** | *hearty* | *cordial* | **cardiac** |
| **身體 / 物質** | *bodily* | *corporal* | **somatic / physical** |
| **結束 / 停止** | *end* | *finish / cease* | **terminate** |
| **時間 / 年代** | *time* | *age / season* | **chronology** |
| **閱讀 / 認識** | *read* | *peruse* | **comprehend / diagnose** |
| **害怕 / 恐懼** | *fear / dread* | *terror* | **phobia** |

---

## 第十章 實戰長難詞四步解構演算法
* **Step 1 剝離後綴**：鎖定詞性與語法功能。
* **Step 2 剝離前綴**：還原同化變形，鎖定方向極性。
* **Step 3 提取核心字根**：對照分詞幹與語義庫，鎖定本質。
* **Step 4 語義合成與驗證**：[方向/極性] + [核心動作] = 完整詞義。
`;

export const ASSIMILATION_RULES: AssimilationRule[] = [
  {
    prefix: 'ad-',
    meaning: '朝向、去、加強、達到 (to, toward, addition, intensive)',
    rules: [
      { condition: '在 c, k, q 前', variant: 'ac-', examples: ['accept (ad- + capere)', 'acquire (ad- + quaerere)', 'accurate', 'accompany', 'accelerate'] },
      { condition: '在 f 前', variant: 'af-', examples: ['affect (ad- + facere)', 'affirm (ad- + firmare)', 'afford', 'affluent', 'affix'] },
      { condition: '在 g 前', variant: 'ag-', examples: ['aggression (ad- + gradi)', 'aggravate (ad- + gravis)', 'aggregate', 'aggrade'] },
      { condition: '在 l 前', variant: 'al-', examples: ['allocate (ad- + locus)', 'alleviate (ad- + levis)', 'allude', 'allot', 'alliance'] },
      { condition: '在 n 前', variant: 'an-', examples: ['announce (ad- + nuntiare)', 'annex (ad- + nectere)', 'annotate', 'annul'] },
      { condition: '在 p 前', variant: 'ap-', examples: ['approximate (ad- + proximus)', 'apply (ad- + plicare)', 'appoint (ad- + pungere)', 'appreciate', 'applaud', 'appear'] },
      { condition: '在 r 前', variant: 'ar-', examples: ['arrive (ad- + ripa)', 'arrange (ad- + hring)', 'arrogate', 'arrest', 'array'] },
      { condition: '在 s 前', variant: 'as-', examples: ['assist (ad- + stare)', 'associate (ad- + socius)', 'assume', 'assimilate', 'assert'] },
      { condition: '在 t 前', variant: 'at-', examples: ['attain (ad- + tangere)', 'attend (ad- + tendere)', 'attract (ad- + trahere)', 'attempt', 'attribute'] },
      { condition: '在 sc, sp, st 前', variant: 'a-', examples: ['ascend (ad- + scandere)', 'aspire (ad- + spirare)', 'astringent'] }
    ]
  },
  {
    prefix: 'con- / com-',
    meaning: '共同、一起、完全加強 (together, with, thoroughly, intensive)',
    rules: [
      { condition: '在 b, p, m 雙唇音前', variant: 'com-', examples: ['combine (con- + bini)', 'compose (con- + ponere)', 'commit (con- + mittere)', 'compact', 'compress'] },
      { condition: '在 l 舌邊音前', variant: 'col-', examples: ['collaborate (con- + labor)', 'collect (con- + legere)', 'colleague', 'collapse (con- + labi)', 'collide'] },
      { condition: '在 r 捲舌音前', variant: 'cor-', examples: ['correct (con- + regere)', 'corrupt (con- + rumpere)', 'correlate', 'correspond', 'corrode'] },
      { condition: '在元音及 h 前', variant: 'co-', examples: ['coexist (con- + existere)', 'cooperate (con- + opus)', 'coherent (con- + haerere)', 'coordinate', 'coincide'] },
      { condition: '在其他輔音前 (d, g, j, n, s, t, v 等)', variant: 'con-', examples: ['contain (con- + tenere)', 'conduct (con- + ducere)', 'connect (con- + nectere)', 'contrast', 'conclude'] }
    ]
  },
  {
    prefix: 'in- / en-',
    meaning: '1. 進入/向內 (in, into) | 2. 否定 (not, un- 拉丁同化)',
    rules: [
      { condition: '在 b, p, m 雙唇音前', variant: 'im- / em-', examples: ['impact (in- + pangere)', 'impossible (in- + possibilis)', 'empower', 'embrace', 'immortal (in- + mors)'] },
      { condition: '在 l 舌邊音前', variant: 'il-', examples: ['illuminate (in- + lumen)', 'illegal (in- + lex)', 'illusion (in- + ludere)', 'illiterate', 'illogical'] },
      { condition: '在 r 捲舌音前', variant: 'ir-', examples: ['irrigate (in- + rigare)', 'irregular (in- + regula)', 'irresponsible', 'irresistible', 'irrational'] },
      { condition: '在其他輔音與元音前', variant: 'in- / en-', examples: ['inspect (in- + specere)', 'inactive (in- + act)', 'enrich', 'include', 'induce'] }
    ]
  },
  {
    prefix: 'sub-',
    meaning: '在...之下、次級、秘密、自下而上 (under, below, secretly, up from below)',
    rules: [
      { condition: '在 c 前', variant: 'suc-', examples: ['succumb (sub- + cumbere)', 'succeed (sub- + cedere)', 'succinct'] },
      { condition: '在 f 前', variant: 'suf-', examples: ['suffer (sub- + ferre)', 'suffice (sub- + facere)', 'suffix', 'suffocate'] },
      { condition: '在 g 前', variant: 'sug-', examples: ['suggest (sub- + gerere)', 'suggestive'] },
      { condition: '在 m 前', variant: 'sum-', examples: ['summon (sub- + monere)'] },
      { condition: '在 p 前', variant: 'sup-', examples: ['suppress (sub- + premere)', 'support (sub- + portare)', 'supplement', 'suppose'] },
      { condition: '在 r 前', variant: 'sur-', examples: ['surrogate (sub- + rogare)', 'surreptitious'] },
      { condition: '在 sp, st, c 前弱化', variant: 'sus- / su-', examples: ['sustain (sub- + tenere)', 'suspect (sub- + specere)', 'suspend (sub- + pendere)', 'susceptible'] },
      { condition: '在其他輔音與元音前', variant: 'sub-', examples: ['subterranean (sub- + terra)', 'submit (sub- + mittere)', 'submarine', 'subtract'] }
    ]
  },
  {
    prefix: 'ob-',
    meaning: '反對、朝向、阻擋、對抗、徹底 (against, toward, facing, over, intensive)',
    rules: [
      { condition: '在 c 前', variant: 'oc-', examples: ['occur (ob- + currere)', 'occupy (ob- + capere)', 'occlude (ob- + claudere)'] },
      { condition: '在 f 前', variant: 'of-', examples: ['offend (ob- + fendere)', 'offer (ob- + ferre)', 'official'] },
      { condition: '在 p 前', variant: 'op-', examples: ['oppose (ob- + ponere)', 'oppress (ob- + premere)', 'opportune'] },
      { condition: '在 s 前', variant: 'os-', examples: ['ostensible (ob- + tendere)', 'ostentation'] },
      { condition: '在其他輔音前', variant: 'ob-', examples: ['obstacle (ob- + stare)', 'obtain (ob- + tenere)', 'obvious (ob- + via)', 'object', 'obstruct'] }
    ]
  },
  {
    prefix: 'dis-',
    meaning: '分離、相反、除去、不 (apart, away, not, opposite)',
    rules: [
      { condition: '在 f 前', variant: 'dif-', examples: ['differ (dis- + ferre)', 'difficult (dis- + facilis)', 'diffuse (dis- + fundere)', 'diffident'] },
      { condition: '在濁輔音 b, d, g, l, m, n, r, v 前', variant: 'di-', examples: ['divert (dis- + vertere)', 'dilate (dis- + latus)', 'dilute (dis- + luere)', 'digest', 'divulge'] },
      { condition: '在清輔音及其他輔音前', variant: 'dis-', examples: ['disrupt (dis- + rumpere)', 'dismiss (dis- + mittere)', 'distract (dis- + trahere)', 'disagree', 'disable'] }
    ]
  },
  {
    prefix: 'ex-',
    meaning: '向外、徹底、脫離、出 (out, forth, completely, away)',
    rules: [
      { condition: '在濁輔音 b, d, g, l, m, n, r, v 前', variant: 'e-', examples: ['emit (ex- + mittere)', 'educate (ex- + ducere)', 'evaporate (ex- + vapor)', 'elapse (ex- + labi)', 'elucidate (ex- + lucere)', 'erupt'] },
      { condition: '在 f 前', variant: 'ef-', examples: ['effect (ex- + facere)', 'efficient (ex- + facere)', 'effort (ex- + fortis)', 'effluent (ex- + fluere)'] },
      { condition: '在元音及清輔音前', variant: 'ex-', examples: ['export (ex- + portare)', 'expand (ex- + pandere)', 'exhale', 'extract', 'exclusive (ex- + claudere)'] }
    ]
  },
  {
    prefix: 'ab- / abs-',
    meaning: '離開、脫離、偏離、不 (away, from, off, apart)',
    rules: [
      { condition: '在 t, c 前', variant: 'abs-', examples: ['abstain (abs- + tenere)', 'abstract (abs- + trahere)', 'abscond (abs- + condere)'] },
      { condition: '在 v 前', variant: 'a-', examples: ['avert (ab- + vertere)', 'avocation (ab- + vocare)', 'avulsion'] },
      { condition: '在其他輔音與元音前', variant: 'ab-', examples: ['abnormal (ab- + norma)', 'abduct (ab- + ducere)', 'absent (ab- + esse)', 'aberration (ab- + errare)', 'abdicate'] }
    ]
  },
  {
    prefix: 'per-',
    meaning: '貫穿、徹底、極致 (through, completely, intensive)',
    rules: [
      { condition: '在 l 前同化', variant: 'pel-', examples: ['pellucid (per- + lucere - 晶瑩剔透的)', 'pellicle'] },
      { condition: '在其他字母前保持', variant: 'per-', examples: ['pertain (per- + tenere)', 'pertinent', 'perfect (per- + facere)', 'permeate', 'perform', 'persist'] }
    ]
  },
  {
    prefix: 'trans-',
    meaning: '跨越、穿過、轉變 (across, through, beyond, over)',
    rules: [
      { condition: '在 d, j, v 等前簡化', variant: 'tra-', examples: ['traduce (trans- + ducere - 中傷/誹謗)', 'trajectory (trans- + jacere - 軌道)', 'tradition (trans- + dare - 移交/傳統)', 'traverse'] },
      { condition: '在 s 開頭的字根前脫落 s', variant: 'tran-', examples: ['transcend (trans- + scandere)', 'transcribe (trans- + scribere)', 'transpire (trans- + spirare)'] },
      { condition: '在其他字母前保持', variant: 'trans-', examples: ['transport (trans- + portare)', 'transfer', 'transform', 'translucent (trans- + lucere)', 'transit'] }
    ]
  },
  {
    prefix: 'syn- / sym- (希臘語)',
    meaning: '共同、同步、結合、相同 (with, together, same)',
    rules: [
      { condition: '在 b, p, m 雙唇音前', variant: 'sym-', examples: ['sympathy (syn- + pathos)', 'symmetry (syn- + metron)', 'symbol (syn- + ballein)', 'symptom'] },
      { condition: '在 l 舌邊音前', variant: 'syl-', examples: ['syllable (syn- + lambanein)', 'syllogism (syn- + logos)'] },
      { condition: '在 s 前或複合輔音前', variant: 'sys- / sy-', examples: ['system (syn- + histanai)', 'systole', 'synergy'] },
      { condition: '在其他字母前', variant: 'syn-', examples: ['synchronize (syn- + chronos)', 'synthesis (syn- + tithenai)', 'synonym (syn- + onoma)'] }
    ]
  },
  {
    prefix: 'a- / an- (希臘否定前綴)',
    meaning: '無、不、非、欠缺 (without, not, lacking)',
    rules: [
      { condition: '在輔音前', variant: 'a-', examples: ['apathy (a- + pathos)', 'atheist (a- + theos)', 'asymmetrical (a- + syn- + metron)', 'amoral', 'atypical'] },
      { condition: '在元音及 h 前', variant: 'an-', examples: ['anarchy (an- + archein)', 'anonymous (an- + onoma)', 'anesthesia (an- + aisthesis)', 'analgesic', 'anecdote'] }
    ]
  }
];

export const DUAL_STEM_RULES: DualStemRule[] = [
  { pair: 'dic / dict', present: 'dic- / dicat- (說話/宣稱)', supine: 'dict- (斷定/令狀)', meaning: '說話、宣示、斷定 (say, speak, declare)', examples: ['predict', 'dictate', 'indicate', 'contradict', 'addict', 'verdict', 'dictionary', 'dedicate'] },
  { pair: 'duc / duct', present: 'duc- (引導)', supine: 'duct- (被引導)', meaning: '引導、帶領 (lead, pull)', examples: ['conduct', 'deduce', 'educate', 'produce', 'induct', 'seduce'] },
  { pair: 'ced / cess', present: 'ced- (走動)', supine: 'cess- (已走)', meaning: '行走、讓步、退讓 (go, yield, move)', examples: ['recede', 'process', 'access', 'predecessor', 'concede', 'success'] },
  { pair: 'trah / tract', present: 'trah- / trai- (拖拉)', supine: 'tract- (被牽引)', meaning: '拉、引、拖曳 (draw, pull, drag)', examples: ['attract', 'contract', 'distract', 'extract', 'retract', 'abstract', 'tractor', 'trait'] },
  { pair: 'scrib / script', present: 'scrib- (寫)', supine: 'script- (書寫物)', meaning: '書寫、記錄 (write)', examples: ['describe', 'manuscript', 'prescribe', 'transcribe', 'inscription'] },
  { pair: 'mit / miss', present: 'mit- (送出)', supine: 'miss- (已發送)', meaning: '送出、投射 (send, let go)', examples: ['transmit', 'mission', 'admit', 'dismiss', 'promise', 'intermittent'] },
  { pair: 'vert / vers', present: 'vert- (轉向)', supine: 'vers- (已轉)', meaning: '轉動、轉換 (turn)', examples: ['convert', 'reverse', 'divert', 'versatile', 'anniversary', 'adversary'] },
  { pair: 'pel / puls', present: 'pel- (推動)', supine: 'puls- (被衝擊)', meaning: '驅使、敲擊、推 (drive, push, strike)', examples: ['repel', 'impulse', 'propel', 'compulsory', 'expel', 'pulsate'] },
  { pair: 'pon / posit', present: 'pon- (放置)', supine: 'posit- (已置定)', meaning: '放置、立下 (put, place)', examples: ['postpone', 'deposit', 'component', 'position', 'opposite', 'compose'] },
  { pair: 'cap / cept', present: 'cap- (抓取)', supine: 'cept- (被俘獲)', meaning: '抓、拿、容納 (take, seize, hold)', examples: ['capture', 'accept', 'concept', 'intercept', 'capable', 'recipient'] },
  { pair: 'vid / vis', present: 'vid- (看見)', supine: 'vis- (被看見/景象)', meaning: '觀看、看見 (see, look)', examples: ['evident', 'vision', 'provide', 'invisible', 'supervise', 'adviser'] },
  { pair: 'flu / flux', present: 'flu- (流動)', supine: 'flux- (流態/湧出)', meaning: '流動、流出 (flow)', examples: ['fluid', 'influx', 'fluent', 'fluctuate', 'affluent', 'confluence'] },
  { pair: 'frag / fract', present: 'frag- (折斷)', supine: 'fract- (碎片)', meaning: '打破、破裂 (break)', examples: ['fragile', 'fraction', 'fragment', 'fracture', 'infraction', 'refract'] },
  { pair: 'tang / tact', present: 'tang- (接觸)', supine: 'tact- / ting- (觸摸)', meaning: '接觸、感觸 (touch)', examples: ['tangible', 'contact', 'tactile', 'intact', 'contingent'] },
  { pair: 'fac / fect', present: 'fac- (做/造)', supine: 'fect- / fic- (成品)', meaning: '製造、行動 (make, do)', examples: ['factory', 'perfect', 'affect', 'efficient', 'deficit'] },
  { pair: 'ten / tent', present: 'ten- / tain- (握持)', supine: 'tent- / tin- (容納物)', meaning: '握持、維持 (hold, keep)', examples: ['contain', 'content', 'retain', 'pertinent', 'tenacious'] },
  { pair: 'sta / stat', present: 'sta- / sist- (站立)', supine: 'stat- / stit- (確立)', meaning: '站立、建立 (stand, place)', examples: ['resist', 'statue', 'status', 'constitute', 'constant'] },
  { pair: 'spec / spect', present: 'spec- (端詳)', supine: 'spect- (景觀)', meaning: '觀察、注視 (look, watch, see)', examples: ['inspect', 'spectator', 'retrospect', 'perspective', 'conspicuous', 'despise'] },
  { pair: 'voc / vocat', present: 'voc- / vok- (呼喚)', supine: 'vocat- (召喚)', meaning: '呼喚、發聲 (call, voice)', examples: ['vocal', 'provoke', 'advocate', 'revoke', 'evoke', 'vocation'] },
  { pair: 'port / portat', present: 'port- (攜帶)', supine: 'portat- (運送)', meaning: '運送、攜帶 (carry, bear)', examples: ['transport', 'import', 'export', 'portable', 'support', 'report'] },
  { pair: 'ven / vent', present: 'ven- (來臨)', supine: 'vent- (已來/事件)', meaning: '來、到達 (come)', examples: ['convene', 'event', 'prevent', 'invent', 'venture', 'convenient'] },
  { pair: 'curr / curs', present: 'curr- / cor- (奔跑)', supine: 'curs- / cours- (歷程)', meaning: '奔跑、流動 (run, course)', examples: ['current', 'occur', 'excursion', 'concur', 'discourse', 'cursor'] },
  { pair: 'aud / audit', present: 'aud- (聆聽)', supine: 'audit- (審聽)', meaning: '聽、聆聽 (hear, listen)', examples: ['audience', 'audible', 'auditorium', 'audit', 'auditory'] },
  { pair: 'gen / gener', present: 'gen- / gna- (出生)', supine: 'gener- / gon- (族類/產生)', meaning: '產生、出生、種族 (birth, produce, kind)', examples: ['generate', 'genesis', 'generous', 'congenital', 'progeny'] },
  { pair: 'mov / mot', present: 'mov- (移動)', supine: 'mot- / mob- (推進)', meaning: '移動、運動 (move)', examples: ['remove', 'motion', 'motivate', 'remote', 'mobile', 'promote'] },
  { pair: 'cred / credit', present: 'cred- (信任)', supine: 'credit- (已信)', meaning: '相信、信任 (believe, trust)', examples: ['credible', 'credit', 'incredulous', 'creed', 'credential'] },
  { pair: 'man / manu / main', present: 'man- / manu- (手/手工)', supine: 'main- / manip- (維持/操縱)', meaning: '手、手工、操作、維持 (hand, handle, maintain)', examples: ['maintain', 'manual', 'manufacture', 'manuscript', 'manipulate', 'maneuver', 'manifest', 'mandatory'] },
  { pair: 'loc / locat (locus / locāre)', present: 'loc- / locus (場所/定所/放置)', supine: 'locat- (已置定/分配/定位)', meaning: '地方、場所、安置、分配 (place, locate, allocate)', examples: ['local', 'locate', 'location', 'allocate', 'relocate', 'dislocate', 'locus', 'locomotion'] },
  { pair: 'proxim / proximat (proximus / prope)', present: 'proxim- (最接近/鄰近/本原)', supine: 'proximat- (近似/逼近)', meaning: '接近、最鄰近、大約 (near, nearest, close, approximate)', examples: ['approximate', 'proximity', 'proximate', 'approximal', 'approximation'] },
  { pair: 'clud / clus (claudere / clausus)', present: 'clud- (關閉/包含)', supine: 'clus- / claus- (已關閉/封閉)', meaning: '關閉、封閉、包圍 (close, shut)', examples: ['conclude', 'exclusive', 'include', 'preclude', 'seclude', 'clause', 'closet'] },
  { pair: 'lab / laps (labī / lapsus)', present: 'lab- (滑落/崩塌)', supine: 'laps- (已滑落/流逝)', meaning: '滑落、跌落、消逝、崩潰 (slip, slide, fall)', examples: ['collapse', 'elapse', 'relapse', 'lapse', 'collapsible'] },
  { pair: 'path / pathy (pathos πάθος)', present: 'path- (感受/苦難/疾病)', supine: 'pathy- (同情/情感)', meaning: '感情、感知、痛苦、疾病 (feeling, suffering, disease)', examples: ['sympathy', 'empathy', 'antipathy', 'apathy', 'pathology', 'pathetic', 'telepathy'] },
  { pair: 'cand / cend (candēre / candor)', present: 'cand- / cend- (發光/燃燒)', supine: 'candid- (純白/坦率)', meaning: '白熱、發光、純潔、坦白 (glow, white, pure, burn)', examples: ['incandescent', 'candidate', 'candle', 'candid', 'candor', 'incendiary'] },
  { pair: 'luc / lum (lūcēre / lux / lūmen)', present: 'luc- (發光/清澈)', supine: 'lum- / lumin- (照亮/明晰)', meaning: '光、照亮、清楚 (light, shine, clear)', examples: ['translucent', 'lucid', 'illuminate', 'pellucid', 'luminous', 'elucidate'] },
  { pair: 'terr / terrat (terra / terrestris)', present: 'terr- (土地/地層)', supine: 'terrat- (陸地領域)', meaning: '土地、地球、陸地 (earth, land, ground)', examples: ['subterranean', 'territory', 'terrestrial', 'terrain', 'extraterrestrial', 'interment'] },
  { pair: 'err / errat (漫遊/歧途家族)', present: 'err- (遊蕩/漫遊/迷失)', supine: 'errat- (漫遊/誤差/漂泊)', meaning: '漫遊、遊蕩、走入歧途、出錯 (wander, roam, stray, error)', examples: ['err', 'erratic', 'errant', 'error', 'aberration', 'erratum'] },
  { pair: 'vag / vagat (漫遊/漂泊家族)', present: 'vag- (徘徊/漫遊/模糊)', supine: 'vagat- (遊蕩/散布/偏離)', meaning: '漫遊、徘徊、散漫、模糊 (wander, stray, vague, extravagant)', examples: ['vague', 'vagabond', 'extravagant', 'vagrant', 'divagation', 'vagus'] },
  { pair: 'sed / sess / sid', present: 'sed- / sid- (坐下/定居)', supine: 'sess- (已就座/沉積)', meaning: '坐、就座、沉積、安定 (sit, settle)', examples: ['preside', 'session', 'sediment', 'resident', 'possess', 'subsidy', 'assess'] },
  { pair: 'jac / ject', present: 'jac- (投擲/發射)', supine: 'ject- (被拋出/投射)', meaning: '投擲、發射、拋出 (throw, cast, eject)', examples: ['project', 'reject', 'inject', 'eject', 'adjacent', 'trajectory', 'subject', 'object'] }
];

export function hasDualStemEntry(rootKey: string | undefined | null): boolean {
  if (!rootKey) return false;
  const clean = rootKey.toLowerCase().replace(/^[+-]|[+-]$/g, '').trim();
  if (!clean || clean.length < 2) return false;

  return DUAL_STEM_RULES.some((rule) => {
    const pairText = rule.pair.toLowerCase();
    const presentText = rule.present.toLowerCase();
    const supineText = rule.supine.toLowerCase();
    const meaningText = rule.meaning.toLowerCase();

    return (
      pairText.includes(clean) ||
      presentText.includes(clean) ||
      supineText.includes(clean) ||
      meaningText.includes(clean) ||
      rule.examples.some((ex) => ex.toLowerCase().includes(clean))
    );
  });
}

export const GRIMMS_LAW_INFO = [
  { rule: 'p ➔ f', latin: 'ped- (腳) / pater (父)', english: 'foot / father', note: '原始印歐語清塞音 p 在日耳曼語變為唇齒擦音 f' },
  { rule: 't / d ➔ th', latin: 'tri- (三) / dent- (齒)', english: 'three / tooth', note: '齒塞音演變為日耳曼語間齒擦音 th' },
  { rule: 'k / c ➔ h', latin: 'cord- (心) / centum (百)', english: 'heart / hundred', note: '硬顎塞音 k/c 在日耳曼語演化為喉音 h' },
  { rule: 'v ➔ w', latin: 'verb- (字詞) / videre (看)', english: 'word / wit (智慧/洞察)', note: '拉丁語半元音 v 與古英語 w 語音同源' }
];

export const SUFFIX_TAXONOMY = {
  nouns: [
    { type: '人物/執行者 (Agent)', suffixes: '-er, -or, -ist, -ian, -ee, -ant', examples: 'actor, artist, musician, employee, assistant' },
    { type: '行為/結果 (Action/Result)', suffixes: '-tion, -sion, -ment, -ance, -ence, -ure', examples: 'creation, decision, movement, appearance, failure' },
    { type: '抽象概念/狀態 (Abstract)', suffixes: '-ity, -ness, -tude, -ism, -ship, -cy', examples: 'clarity, happiness, solitude, realism, leadership, fluency' }
  ],
  verbs: [
    { type: '拉丁致使動詞 (Causative -atus)：使具備某狀態/實踐', suffixes: '-ate', examples: 'activate (使活躍), terminate (使終止), motivate (激勵), allocate (分配)' },
    { type: '體系/專業化 (Systemic/Process)：使...化/實行', suffixes: '-ize, -ise', examples: 'modernize (現代化), prioritize (設定優先), emphasize (強調), synthesize (合成)' },
    { type: '狀態轉變/性質造成 (Transformation)：使成為', suffixes: '-ify, -fy', examples: 'clarify (使澄清), simplify (簡化), notify (告知), intensify (強化)' },
    { type: '日耳曼原生使動 (Physical state)：使具備物理屬性', suffixes: '-en', examples: 'strengthen (使強大), shorten (縮短), widen (拓寬), sharpen (削尖)' }
  ],
  adjectives: [
    { type: '能力/可能 (Ability/Passive)', suffixes: '-able, -ible', examples: 'readable, flexible, edible, audible' },
    { type: '屬性/關聯 (Attribute)', suffixes: '-al, -ic, -ous, -ive, -ary', examples: 'musical, democratic, dangerous, creative, revolutionary' },
    { type: '極性/多寡 (Polarity)', suffixes: '-ful, -less', examples: 'hopeful, harmless, tactful, endless' }
  ],
  adverbs: [
    { type: '方式/方向 (Manner/Direction)', suffixes: '-ly, -ward, -wise', examples: 'quickly, homeward, clockwise' }
  ]
};

export interface PrefixItem {
  prefix: string;
  meaning: string;
  origin?: string;
  examples: string[];
}

export interface PrefixGroup {
  dimension: string;
  desc: string;
  items: PrefixItem[];
}

export const PREFIX_TAXONOMY: PrefixGroup[] = [
  {
    dimension: '⏳ 時間與順序維度 (Time & Sequence)',
    desc: '規範動作發生的時間先後、事前預備、重複再次或事後延續',
    items: [
      { prefix: 're-', meaning: '再次、重新、重複、恢復 (again, anew, repeatedly)', origin: '拉丁 re-', examples: ['rebuild (重建)', 'renew (更新/續訂)', 'restart (重新開始)', 'reappear (重新出現)', 'regenerate (再生/新生)', 'reinforce (加強/增援)', 'reproduce (繁殖/複製)', 'review (複習/重看)'] },
      { prefix: 'pre-', meaning: '在...之前、預先、事前 (before, in advance)', origin: '拉丁 prae-', examples: ['predict (預言/預測)', 'prepare (準備)', 'prevent (預防)', 'precede (領先/在先)', 'prescribe (開藥/規定)', 'predecessor (前任)', 'preview (預覽)', 'prefix (前綴)'] },
      { prefix: 'pro-', meaning: '向前、支持、先行 (forward, forth, in favor of)', origin: '拉丁 pro-', examples: ['progress (進步)', 'promote (促進/升遷)', 'project (投射/企劃)', 'propose (提議)', 'proceed (前進)', 'proclaim (宣告)'] },
      { prefix: 'ante-', meaning: '在...之前、早於 (before, prior)', origin: '拉丁 ante-', examples: ['antecedent (前事/先行詞)', 'anteroom (接待室/前廳)', 'antedate (早於)', 'anterior (前方的)'] },
      { prefix: 'fore-', meaning: '事先、在前面 (before, in front)', origin: '古英語原生', examples: ['foresee (預見)', 'forecast (預測)', 'foretell (預言)', 'forehead (額頭)', 'forefather (祖先)'] },
      { prefix: 'post-', meaning: '在...之後、事後 (after, behind)', origin: '拉丁 post-', examples: ['postpone (延期/推遲)', 'postwar (戰後)', 'postgraduate (研究生)', 'postscript (附言/P.S.)'] },
      { prefix: 'prim- / proto-', meaning: '第一、最初、原始 (first, original)', origin: '拉丁 primus / 希臘 prōtos', examples: ['primary (首要的)', 'primitive (原始的)', 'prototype (原型)', 'protagonist (主角)', 'protocol (協議)'] }
    ]
  },
  {
    dimension: '🧭 空間與方向維度 (Space & Direction)',
    desc: '規範動作的空間位移、穿透跨越、內外邊界與回歸',
    items: [
      { prefix: 'ad- / ac- / af- / ag- / al- / an- / ap- / ar- / as- / at- / a-', meaning: '朝向、去、加強、達到 (to, toward, addition, intensive)', origin: '拉丁 ad-', examples: ['allocate (分配 - ad+locus)', 'attain (達到 - ad+tangere)', 'approximate (近似 - ad+proximus)', 'accept (接受)', 'affect (影響)', 'arrive (到達)', 'assist (協助)', 'attend (出席)', 'admit (承認)', 'attract (吸引)'] },
      { prefix: 'ex- / e- / ef-', meaning: '向外、脫離、完全、流出 (out, forth, away, completely)', origin: '拉丁 ex-', examples: ['export (出口/輸出)', 'effect (效果/促成 - ex+facere)', 'emit (放射/排放)', 'educate (教育/引出)', 'extract (萃取/拔出)', 'expand (擴張)', 'evacuate (疏散)', 'effluent (流出物)', 'elapse (消逝)', 'exclusive (獨佔的)'] },
      { prefix: 'ab- / abs- / a-', meaning: '離開、脫離、偏離、不 (away, from, off, apart)', origin: '拉丁 ab- / abs-', examples: ['abstain (戒除/棄權 - abs+tenēre)', 'abnormal (異常的)', 'abduct (誘拐/綁架)', 'absent (缺席的)', 'aberration (越軌/偏離)', 'abstract (抽象的 - 抽離出)', 'abrupt (突然的/斷裂的)', 'avert (避開/轉移)'] },
      { prefix: 'ob- / oc- / of- / op- / os-', meaning: '反對、朝向、阻擋、對抗、徹底 (against, toward, facing, over, intensive)', origin: '拉丁 ob-', examples: ['obtain (獲得 - 握入手中)', 'obstacle (障礙物 - 擋在前面站立)', 'object (反對/物體)', 'oppose (反對/對立)', 'offend (冒犯/觸怒)', 'occur (發生/浮現 - 跑至面前)', 'obvious (顯然的 - 在路上的)', 'oppress (壓迫)', 'occlude (閉塞)'] },
      { prefix: 're- / retro-', meaning: '向後、返回、倒退、逆向 (back, backward, behind)', origin: '拉丁 re- / retro-', examples: ['return (返回)', 'revert (恢復/還原)', 'retrospect (回顧)', 'retrogress (倒退)', 'reject (拒絕 - 向後拋)', 'retain (保留 - 握住向後扣留)', 'relocate (重新安置)', 'retroactive (追溯的)'] },
      { prefix: 'per- / pel- / dia-', meaning: '貫穿、穿過、遍及、徹底 (through, across, throughout, thoroughly)', origin: '拉丁 per- / 希臘 dia-', examples: ['pertain (關於/屬於 - 貫穿牽連)', 'pertinent (切題的 - 貫穿核心)', 'permeate (滲透/瀰漫)', 'penetrate (穿透)', 'perennial (長年的/終年的)', 'pellucid (清晰明亮的 - 徹底透光)', 'diameter (直徑)', 'dialogue (對話)'] },
      { prefix: 'trans- / tra- / tran-', meaning: '跨越、穿過、轉變、傳遞 (across, through, beyond, over)', origin: '拉丁 trans-', examples: ['transport (運輸)', 'transfer (轉移)', 'transform (轉化/變形)', 'translate (翻譯)', 'transparent (透明的)', 'transit (過境)', 'trajectory (彈道/軌跡)', 'traduce (誹謗/中傷)', 'tradition (傳統/交接)', 'transcend (超越)'] },
      { prefix: 'inter-', meaning: '在...之間、相互 (between, among, mutually)', origin: '拉丁 inter-', examples: ['interact (互動)', 'international (國際的)', 'intercept (攔截)', 'interrupt (打斷)', 'intermediate (中級/過渡)', 'entertain (款待/娛樂)'] },
      { prefix: 'intra- / intro-', meaning: '向內、在內部 (inside, within, inward)', origin: '拉丁 intra- / intro-', examples: ['introduce (介紹/引進)', 'introvert (內向者)', 'intravenous (靜脈內的)', 'intramural (校內的)'] },
      { prefix: 'extra- / extro-', meaning: '在外部、超出 (outside, beyond)', origin: '拉丁 extra-', examples: ['extraordinary (非凡的)', 'extravagant (奢侈的)', 'extrovert (外向者)', 'extraterrestrial (外星的)'] },
      { prefix: 'circum- / peri-', meaning: '環繞、周圍 (around, surrounding)', origin: '拉丁 circum- / 希臘 peri-', examples: ['circumstance (環境/境遇)', 'circumference (圓周)', 'perimeter (周長)', 'periodic (週期性的)', 'peripheral (周邊的)'] },
      { prefix: 'tele-', meaning: '遠距離、遠端 (distant, far off)', origin: '希臘 tēle', examples: ['telephone (電話)', 'telescope (望遠鏡)', 'telegram (電報)', 'telepathy (心靈感應)', 'teleport (瞬間移動)'] },
      { prefix: 'loc- / topo-', meaning: '地方、場所、局部、定位 (place, location, local)', origin: '拉丁 locus / 希臘 topos', examples: ['locate (定位)', 'location (位置)', 'allocate (分派/撥出場所)', 'relocate (遷移)', 'local (當地的)', 'topography (地形學)', 'topic (主題 - 原指場合)'] },
      { prefix: 'err- / vag- / ambul-', meaning: '漫遊、徘徊、偏離、走動 (wander, stray, roam, walk)', origin: '拉丁 errare / vagari / ambulare', examples: ['errant (漫遊的/走入歧途的)', 'erratic (飄忽不定的)', 'aberration (越軌/偏離)', 'extravagant (奢侈浪費的 - 越出常軌漫遊)', 'vagabond (流浪者)', 'vagrant (流浪漢)', 'ambulance (救護車 - 漫步巡迴車)', 'perambulate (漫步巡視)'] },
      { prefix: 'de-', meaning: '向下、脫離、去除、否定 (down, away, remove)', origin: '拉丁 de-', examples: ['descend (下降)', 'decrease (減少)', 'degrade (降級)', 'depart (出發/離開)', 'detect (查明/偵測)', 'deprive (剝奪)'] }
    ]
  },
  {
    dimension: '🚫 極性、否定與抗衡 (Negation & Opposition)',
    desc: '表達成份的相反、不成立、抵消、破壞與惡化',
    items: [
      { prefix: 'ob- / oc- / of- / op- / os-', meaning: '反對、對抗、阻礙、相反 (against, opposed to)', origin: '拉丁 ob-', examples: ['oppose (反對/對抗)', 'obstacle (障礙物)', 'object (反對/抗議)', 'offend (冒犯/觸犯)', 'obstruct (阻礙/阻塞)'] },
      { prefix: 'ab- / abs- / a-', meaning: '分離、遠離、反常、偏離 (away, off, abnormal)', origin: '拉丁 ab-', examples: ['abnormal (反常的)', 'abstain (棄權/戒除)', 'aberrant (偏離常軌的)', 'absent (缺席的)', 'avert (避開)'] },
      { prefix: 'un-', meaning: '純否定、逆轉動作 (not, opposite of)', origin: '日耳曼原生', examples: ['unhappy (不快樂)', 'unlock (開鎖)', 'uncertain (不確定)', 'uncover (揭開)', 'unprecedented (史無前例的)'] },
      { prefix: 'in- / im- / il- / ir- / en- / em-', meaning: '否定、不、無 (not, un- 拉丁同化)', origin: '拉丁 in-', examples: ['impossible (不可能)', 'invisible (看不見)', 'illegal (違法)', 'irregular (不規則)', 'infinite (無限)', 'immortal (不朽)'] },
      { prefix: 'a- / an-', meaning: '無、不、非、欠缺 (without, not, lacking)', origin: '希臘 a- / an-', examples: ['apathy (冷漠/無同理心)', 'anonymous (匿名的/無名的)', 'anarchy (無政府狀態)', 'asymmetrical (不對稱的)', 'amoral (非道德的)'] },
      { prefix: 'non-', meaning: '客觀非、不 (not, lack of)', origin: '拉丁 non', examples: ['nonsense (胡說/無意義)', 'nonfiction (非虛構)', 'nonstop (直達/不停)', 'nonexistent (不存在)'] },
      { prefix: 'dis- / dif- / di-', meaning: '分離、相反、除去、不 (apart, away, not)', origin: '拉丁 dis-', examples: ['disagree (不同意)', 'disconnect (斷開)', 'disable (使殘疾/停用)', 'dislike (不喜歡)', 'dismiss (解散/駁回)', 'differ (相異)', 'divert (轉向)'] },
      { prefix: 'anti- / ant-', meaning: '對抗、反對、防護 (against, opposite)', origin: '希臘 anti-', examples: ['antibody (抗體)', 'antibiotic (抗生素)', 'antipathy (反感)', 'antidote (解毒劑)', 'antagonist (對手)'] },
      { prefix: 'contra- / counter-', meaning: '相反、對立、對抗 (against, contrary)', origin: '拉丁 contra-', examples: ['contradict (反駁/矛盾)', 'contrast (對比)', 'counterfeit (偽造)', 'counteract (抵消)', 'controversy (爭議)'] },
      { prefix: 'mis-', meaning: '錯誤、不當 (wrong, badly)', origin: '日耳曼 mis-', examples: ['mistake (錯誤)', 'mislead (誤導)', 'misunderstand (誤解)', 'misfortune (不幸)', 'misconduct (不當行為)'] },
      { prefix: 'mal- / male-', meaning: '惡劣、不良、疾病 (bad, evil, ill)', origin: '拉丁 malus', examples: ['malfunction (故障)', 'malnutrition (營養不良)', 'malice (惡意)', 'malpractice (醫療過失/濫用)'] }
    ]
  },
  {
    dimension: '⚡ 程度、層級與極致 (Degree & Hierarchy)',
    desc: '表達數量層級的極限、超越、不足或首席統治地位',
    items: [
      { prefix: 'per- / pel-', meaning: '徹底、完全、極致 (thoroughly, completely, intensive)', origin: '拉丁 per-', examples: ['perfect (完美的 - 做徹底)', 'perform (執行/完成)', 'permanent (永恆的 - 貫穿留存)', 'perceive (察覺/完全捕獲)', 'persist (堅持 - 始終站立)', 'perturb (擾亂/完全混亂)', 'peruse (細讀/精讀)', 'pellucid (清澈的)'] },
      { prefix: 'super- / sur-', meaning: '超級、在上、超越 (above, beyond, over)', origin: '拉丁 super-', examples: ['superior (優越的)', 'supervisor (主管)', 'superficial (表面的)', 'survive (存活/倖存)', 'surplus (過剩)', 'supreme (至高無上的)'] },
      { prefix: 'hyper-', meaning: '過度、極端、超常 (over, excessive)', origin: '希臘 hyper-', examples: ['hyperactive (過動的)', 'hypertension (高血壓)', 'hypersensitive (過敏的)', 'hyperlink (超連結)'] },
      { prefix: 'hypo-', meaning: '不足、在下方 (under, below normal)', origin: '希臘 hypo-', examples: ['hypothermia (體溫過低)', 'hypothesis (假說)', 'hypocrisy (虛偽)', 'hypoglycemia (低血糖)'] },
      { prefix: 'sub- / suc- / suf- / sug- / sum- / sup- / sur- / sus- / su- / infra-', meaning: '在下、次級、基礎、自下而上 (under, below, beneath, secretly)', origin: '拉丁 sub- / infra-', examples: ['subway (地鐵)', 'submarine (潛艇)', 'submit (提交/屈服)', 'support (支持)', 'suggest (建議)', 'sustain (維持)', 'suffer (遭受)', 'infrastructure (基礎設施)', 'infrared (紅外線)'] },
      { prefix: 'ultra-', meaning: '極度、超越 (beyond, extreme)', origin: '拉丁 ultra-', examples: ['ultraviolet (紫外線)', 'ultrasonic (超音波)', 'ultramodern (極度現代的)'] },
      { prefix: 'over- / out-', meaning: '過量、勝過、超越 (over, surpass)', origin: '日耳曼原生', examples: ['overcome (克服)', 'overdue (逾期的)', 'outperform (勝過/表現優於)', 'outsmart (智勝)'] },
      { prefix: 'arch-', meaning: '首席、主要、極致 (chief, ruler, extreme)', origin: '希臘 archos', examples: ['archbishop (大主教)', 'architect (建築師)', 'archetype (原型)', 'archenemy (宿敵)'] },
      { prefix: 'main- / magni- / mega- / macro-', meaning: '主要、宏大、主幹、主力 (chief, principal, large, great)', origin: '古英語 mægen (主力) / 拉丁 magnus / 希臘 megas', examples: ['mainland (本土/大陸)', 'mainstream (主流)', 'mainframe (主機/大型電腦)', 'maintain (維持/保養 - 親手穩握)', 'magnificent (宏偉壯麗的)', 'magnitude (巨大/規模/震級)', 'megaphone (擴音器)', 'macroeconomics (總體經濟學)'] }
    ]
  },
  {
    dimension: '🤝 關係、協同與評價 (Relation & Evaluation)',
    desc: '表達同向協作、自我回饋、相異比較與善惡評價',
    items: [
      { prefix: 'con- / com- / col- / cor- / co-', meaning: '共同、結合、加強 (together, with, intensive)', origin: '拉丁 cum', examples: ['connect (連接)', 'combine (結合)', 'cooperate (合作)', 'collaborate (協作)', 'concur (同意/同時發生)', 'correct (改正)', 'contain (包含/容納)'] },
      { prefix: 'syn- / sym- / syl- / sys- / sy-', meaning: '共同、同步、合成 (together, same)', origin: '希臘 syn', examples: ['synchronize (同步)', 'synthesis (合成)', 'sympathy (同情/共鳴)', 'symmetry (對稱)', 'synergy (協同效應)', 'syllable (音節)', 'system (系統)'] },
      { prefix: 'main- / manu- / man-', meaning: '手、手工、親手、維持、操作 (hand, manual, by hand, maintain)', origin: '拉丁 manus / 古法語 main', examples: ['maintain (維持/保養/主張 - 親手握持)', 'manual (手冊/手工的)', 'manufacture (製造 - 原為手工製作)', 'manuscript (手稿/手抄本)', 'manipulate (操縱/巧妙處理)', 'maneuver (調動/操演)', 'manifest (顯然的/證明 - 手能觸及的)'] },
      { prefix: 'auto-', meaning: '自身、自動、自主 (self, same)', origin: '希臘 autos', examples: ['automatic (自動的)', 'autonomy (自治)', 'autograph (親筆簽名)', 'autobiography (自傳)'] },
      { prefix: 'hetero- vs. homo-', meaning: '相異 (different) vs. 相同 (same)', origin: '希臘 heteros / homos', examples: ['heterogeneous (異質的)', 'homogeneous (同質的)', 'homophone (同音異字)'] },
      { prefix: 'bene- vs. eu-', meaning: '良好、優美、良善 (good, well)', origin: '拉丁 bene / 希臘 eu', examples: ['benefit (益處)', 'benevolent (仁慈的)', 'euphoria (欣快感)', 'eulogy (頌詞)', 'euphemism (委婉語)'] }
    ]
  },
  {
    dimension: '🔢 數量、比例與尺度 (Number & Scale)',
    desc: '表達基數、倍數、整體與局部比例關係',
    items: [
      { prefix: 'uni- / mono-', meaning: '單一、一 (one, single)', origin: '拉丁 unus / 希臘 monos', examples: ['uniform (制服/均一)', 'universe (宇宙)', 'monologue (獨白)', 'monopoly (壟斷)'] },
      { prefix: 'bi- / di- / duo-', meaning: '雙、二 (two, double)', origin: '拉丁 bis / 希臘 dis', examples: ['bilingual (雙語的)', 'bicycle (自行車)', 'dialogue (對話)', 'duplicate (複製/雙重)'] },
      { prefix: 'tri-', meaning: '三 (three)', origin: '拉丁/希臘 tri-', examples: ['triangle (三角形)', 'trilogy (三部曲)', 'tripod (三腳架)', 'triple (三倍)'] },
      { prefix: 'quadr- / tetra-', meaning: '四 (four)', origin: '拉丁 quattuor / 希臘 tetra', examples: ['quadrant (象限)', 'quadruple (四倍)', 'tetragon (四角形)'] },
      { prefix: 'multi- / poly-', meaning: '多元、眾多 (many, much)', origin: '拉丁 multus / 希臘 polys', examples: ['multimedia (多媒體)', 'multiply (繁殖/乘)', 'polymer (聚合物)', 'polygon (多邊形)'] },
      { prefix: 'semi- / hemi-', meaning: '半、部分 (half, partly)', origin: '拉丁 semi- / 希臘 hemi-', examples: ['semicircle (半圓)', 'semiconductor (半導體)', 'hemisphere (半球)'] },
      { prefix: 'omni- / pan-', meaning: '全、全能、全體 (all, everywhere)', origin: '拉丁 omnis / 希臘 pan', examples: ['omnipotent (全能的)', 'omniscient (全知的)', 'panorama (全景)', 'pandemic (大流行病)'] }
    ]
  }
];

export const PHONOLOGICAL_LAWS = [
  {
    title: '輔音音變對偶律 (Consonant Duality & Grimm Shift)',
    desc: '印歐語言同源字根在發音部位相同的情況下互為對偶（清濁/塞擦音對偶）：唇音對偶 (b/p/m/f/v/w)、齒舌對偶 (d/t/th/s/z)、顎喉對偶 (g/k/c/h/qu)、鼻流音對偶 (l/r/n/m)。',
    examples: ['唇音對偶: ped- (腳) ➔ foot, pater ➔ father, duo ➔ two', '齒舌對偶: dent- (齒) ➔ tooth, sed- (坐) ➔ sit, ed- (吃) ➔ eat', '顎喉對偶: cord- (心) ➔ heart, canis ➔ hound, centum ➔ hundred', '流音對偶: star ➔ stellar, solar ➔ sun, circle ➔ circular']
  },
  {
    title: '母音階變對偶律 (Ablaut / Vowel Gradation)',
    desc: '印歐語系核心字根內部母音在 a/e/i/o/u 間有規律地交替替換，用以表達時態、詞性轉換或使動狀態（內部曲折對偶）。',
    examples: ['動詞時態對偶: sing ➔ sang ➔ sung ➔ song', '字根詞幹對偶: cap- (抓) ➔ cept- (接受) ➔ cip- (參與)', '做與造對偶: fac- (製造) ➔ fect- (完美/感染) ➔ fic- (效率)', '接觸對偶: tag- / tang- (接觸) ➔ tact- (觸覺) ➔ tig- (連續)']
  },
  {
    title: '定所與漫遊語義對偶 (Locus vs. Wander Duality)',
    desc: '空間認知在詞源學中形成「定所安置 (Locus/Locāre)」與「偏離漫遊 (Err/Vag/Ambul)」的精準對偶網絡。',
    examples: ['定所家族: locus / locāre ➔ local (當地的), allocate (分派/撥出場所), relocate (搬遷), dislocate (脫臼/使錯位)', '漫遊家族: err- / errat- ➔ errant (漫遊的/歧途的), erratic (漂泊不定的), aberration (偏離常軌)', '漂泊家族: vag- / vagat- ➔ vague (模糊散漫的), vagabond (流浪者), extravagant (奢侈浪費/越軌漫遊)']
  },
  {
    title: '後綴異化律 (Suffix Dissimilation)',
    desc: '為避免在同一單字中連續出現兩個 /l/，當字根內部含字母 l 時，後綴 -al 自動異化為 -ar。',
    examples: ['circle ➔ circular', 'pole ➔ polar', 'module ➔ modular', 'muscle ➔ muscular', 'single ➔ singular']
  },
  {
    title: '顎音化現象 (Palatalization)',
    desc: '字根末尾齒音/塞音 (t, d, s, c) 遇到 i/u 開頭後綴 (-ion, -ian, -ial, -ious, -ure) 時軟化為 /ʃ/, /ʒ/, /tʃ/。',
    examples: ['act ➔ action (/ʃ/)', 'divide ➔ division (/ʒ/)', 'create ➔ creature (/tʃ/)', 'press ➔ pressure (/ʃ/)']
  },
  {
    title: '三音節鬆音化 (Trisyllabic Laxing)',
    desc: '當單字加上後綴 (-ity, -ic, -ical, -itude, -al) 使重音落在倒數第三音節時，長母音/雙母音弱化為短母音。',
    examples: ['divine /aɪ/ ➔ divinity /ɪ/', 'sane /eɪ/ ➔ sanity /æ/', 'serene /iː/ ➔ serenity /e/', 'sole /oʊ/ ➔ solitude /ɑː/']
  },
  {
    title: '名動重音位移 (Noun-Verb Stress Shift)',
    desc: '雙音節前綴派生詞中，重音在第一音節為名詞/形容詞，重音在第二音節為動詞（前名後動）。',
    examples: ['record (/ˈrek.ɚd/ n. 唱片 vs. /rɪˈkɔːrd/ v. 錄音)', 'present (/ˈprez.ənt/ n. 禮物 vs. /prɪˈzent/ v. 呈現)', 'conflict (/ˈkɑːn.flɪkt/ n. vs. /kənˈflɪkt/ v.)']
  }
];

export const ETYMOLOGICAL_STRATA = [
  {
    level: '🏛️ 古典拉丁/希臘層 (30~35%)',
    domain: '學術、科學、醫學、抽象哲學與正式論文',
    features: '多音節、複合詞綴、高度精確抽象',
    examples: ['interrogate (審問)', 'regal / monarchical (皇家的)', 'cardiac (心臟的)', 'somatic (肉體的)', 'chronology (年代學)']
  },
  {
    level: '🍷 諾曼法語/羅曼層 (~30%)',
    domain: '司法、行政、宮廷社交、美食藝術與文雅生活',
    features: '雙音節或多音節、字形柔和、文雅正式',
    examples: ['question (訊問)', 'royal (王室的)', 'cordial (熱忱的)', 'corporal (肉體的)', 'peruse (細讀)']
  },
  {
    level: '🌾 盎格魯-撒克遜日耳曼層 (~25%)',
    domain: '日常生活、具體實物、家庭情感與基本動詞',
    features: '單音節或雙音節、語音質樸強烈、直觀具體',
    examples: ['ask (詢問)', 'kingly (國王般的)', 'hearty (衷心的)', 'bodily (身體的)', 'read (閱讀)']
  }
];

