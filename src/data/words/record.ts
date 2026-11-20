import { WordAnalysis } from '../../types';

export const record: WordAnalysis = {
  word: 'record',
  ipa: '動詞 /rɪˈkɔːrd/；名詞 /ˈrek.ərd/',
  partOfSpeech: 'verb (及物動詞) / noun (可數名詞)',
  chineseMeaning: '（動）記錄、錄製；（名）記錄、檔案、唱片、（打破的）紀錄',
  morphemes: [
    {
      type: 'prefix',
      label: '🚩 前綴',
      morpheme: 're-',
      originalForm: 're- (拉丁語)',
      variantNote: 're- 在這裡是「回過頭去」的意思，古羅馬人認為心是記憶的地方，所以「把事情叫回心裡」就是回想、記住。',
      meaning: '回、向後 (back)',
      category: '空間/回返',
      grammaticalRole: '動詞前綴'
    },
    {
      type: 'root',
      label: '💎 字根',
      morpheme: 'cord',
      originalForm: 'cor, cordis (拉丁語)',
      variantNote: '拉丁文 cor（心）在古羅馬人心目中不只是器官，更是記憶和感情的所在地，跟中文「銘記在心」的想法很像。',
      meaning: '心 (heart)',
      category: '身體/情感隱喻',
      grammaticalRole: '概念核心'
    }
  ],
  phonetic: {
    assimilationPath: 're- (回) + cor, cordis (心) ➔ 拉丁文 recordari (記起) ➔ 古法文 recorder ➔ 英文 record',
    phoneticAnalysis: 'record 當動詞時重音在第二音節 /rɪˈkɔːrd/；當名詞時重音移到第一音節 /ˈrek.ərd/，是英文中很典型的「動詞後重音、名詞前重音」的重音轉移現象。',
    ruleKey: 're- + cord (動詞/名詞重音轉移)'
  },
  semantic: {
    prefixMeaning: '回、向後 (re-)',
    rootCoreAction: '心、記憶 (cord)',
    suffixGrammar: '及物動詞 / 名詞',
    modernMeaning: '把資訊或聲音保存下來以便日後回想查證，或指這份被保存下來的資料本身',
    formulaDisplay: '{ 回 (re-) } + { 心/記憶 (cord) } = 記錄、記載 (record)',
    literalLogic: '古拉丁文字面意思是「把事情叫回心裡」，也就是回想、記住，後來延伸成「把資訊寫下來保存」。'
  },
  familyTree: [
    { word: 'recorder', formula: 'record + -er', meaning: '錄音機/錄影機；記錄員；直笛', level: 'TOEIC', tags: ['TOEIC'] },
    { word: 'cordial', formula: 'cord + -ial', meaning: '熱誠的、衷心的（發自內心的）', level: 'TOEFL', tags: ['TOEFL', 'GRE'] },
    { word: 'concord', formula: 'con- (共同) + cord', meaning: '和諧、一致（眾人的心在一起）', level: 'GRE', tags: ['GRE'] },
    { word: 'discord', formula: 'dis- (分開) + cord', meaning: '不和、紛爭（心分開了）', level: 'GRE', tags: ['GRE', 'TOEFL'] },
    { word: 'courage', formula: 'cor (心) + -age', meaning: '勇氣（源自古法文 corage，把心拿出來面對）', level: 'Core', tags: ['TOEIC'] }
  ],
  memory: {
    cognatesDaily: 'keep a record (保留記錄), break a record (打破紀錄), record a song (錄一首歌)',
    oneSentenceMnemonic: 're (回) + cord (心) ➔ 「把事情叫回心裡」就是 record (記錄、記住)！',
    etymologicalOrigin: '來自拉丁文 recordari（記起），字根 cor/cordis 是「心」，古羅馬人相信心是記憶的所在地。',
    visualImagery: '想像把一件重要的事情，用手輕輕按進自己的心口，從此就牢牢記住、留下了痕跡。',
    commonCollocations: ['keep a record of something (保留...的記錄)', 'set/break a world record (創下/打破世界紀錄)', 'record a conversation (錄下對話)'],
    contrastiveTips: 'record（動詞）強調「用文字、聲音或影像保存下來」；note down 比較口語，指隨手記下重點；document 更正式，通常指用正式文件詳細記載。'
  },
  source: 'preset'
};
