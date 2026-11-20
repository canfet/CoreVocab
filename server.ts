import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI, Type } from '@google/genai';
import { createServer as createViteServer } from 'vite';
import { generateFallbackAnalysis } from './src/utils/fallbackGenerator';
import type { WordAnalysis } from './src/types';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialized Gemini AI client and validity state
let aiClient: GoogleGenAI | null = null;
let isApiKeyInvalid = false;

function getAIClient(): GoogleGenAI | null {
  if (isApiKeyInvalid) {
    return null;
  }
  const apiKey = process.env.GEMINI_API_KEY?.trim();
  if (!apiKey || apiKey === 'YOUR_GEMINI_API_KEY' || apiKey === 'placeholder' || apiKey.length < 10) {
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

const SYSTEM_INSTRUCTION = `You are the "Morpho-Etymological AI Engine" — an expert linguist, historical morphologist, and interactive learning coach.
Your mission is to decompose English words into clear morphological building blocks, apply etymological principles, and present the analysis in Traditional Chinese (繁體中文).

Core Knowledge Base to strictly apply:
1. Morphological Formulas: 
   - Affixed words: [Prefix (Direction/Polarity)] + [Root (Core Action/Concept)] + [Suffix (POS/Grammar Role)].
   - Greek compounding: [Root1 + -o- + Root2] + [Suffix].
   - Monomorphemic / Germanic / PIE Root words (e.g., spark, heart, water, light, star, flow): Analyze the single Germanic root / Proto-Indo-European (PIE) etymon *(s)perg-*, explain the historical phonological shifts (Grimm's Law / s-mobile), and derive family branches (e.g., sparkle, sparky, disperse, sparse).
2. Phonological Assimilation Rules:
   - ad- -> ac-, af-, ag-, al-, an-, ap-, ar-, as-, at-, a-
   - con-/com- -> com- (before b,p,m), col- (before l), cor- (before r), co- (before vowels/h), con- (others)
   - in-/en- -> im-/em- (before b,p,m), il- (before l), ir- (before r), in-/en- (others)
   - sub- -> suc-, suf-, sug-, sum-, sup-, sur-, su-
   - ob- -> oc-, of-, op-, os-, ob-
   - dis- -> dif- (before f), di- (before voiced b,d,g,l,m,n,r,v), dis- (others)
   - ex- -> e- (before voiced consonants), ef- (before f), ex- (others)
   - syn- -> sym- (before b,p,m), syl- (before l), sys- (before s), syn- (others)
   - a- -> a- (before consonants), an- (before vowels/h)
3. Root Alternation & Ablaut:
   - Latin dual-stems: Present vs Supine (e.g., duc/duct, ced/cess, scrib/script, mit/miss, vert/vers, pel/puls, pon/posit, cap/cept, vid/vis, flu/flux, frag/fract).
   - Vowel Apophony: Short a/e weakens to i/e under prefix stress (fac->fic/fect, cap->cip/cept, sed->sid, tang->ting/tact).
   - Grimm's Law cognates: f <-> p (foot-ped), th <-> t/d (three-tri), h <-> k/c (heart-cord), w <-> v (word-verb).
4. Suffix Taxonomy:
   - Nouns: Agent (-er, -or, -ist, -ian, -ee, -ant), Action/Result (-tion, -sion, -ment, -ance, -ure), Abstract (-ity, -ness, -tude, -ism, -ship, -cy).
   - Verbs: Causative (-ize, -ate, -ify, -en).
   - Adjectives: Ability (-able, -ible), Attribute (-al, -ic, -ous, -ive, -ary), Polarity (-ful, -less).
   - Adverbs: Manner/Direction (-ly, -ward, -wise).
5. Output all definitions and explanations in Traditional Chinese (繁體中文).

Generate the structured JSON according to the schema provided.`;

// In-memory cache for analyzed words (avoids re-hitting Gemini / recomputing fallback for repeat lookups)
const analysisCache = new Map<string, WordAnalysis>();
const ANALYSIS_CACHE_LIMIT = 500;

function cacheAnalysis(word: string, analysis: WordAnalysis) {
  if (analysisCache.size >= ANALYSIS_CACHE_LIMIT) {
    const oldestKey = analysisCache.keys().next().value;
    if (oldestKey !== undefined) analysisCache.delete(oldestKey);
  }
  analysisCache.set(word, analysis);
}

// API route: Analyze word
app.post('/api/analyze-word', async (req, res) => {
  try {
    const rawWord = req.body.word?.trim();
    if (!rawWord) {
      return res.status(400).json({ error: 'Word parameter is required.' });
    }

    const cleanWord = rawWord.toLowerCase().replace(/[^a-z-]/g, '');

    const cached = analysisCache.get(cleanWord);
    if (cached) {
      return res.json(cached);
    }

    const ai = getAIClient();

    if (!ai) {
      // Return intelligent rule-based heuristic fallback if AI key is offline
      const fallback = generateFallbackAnalysis(cleanWord);
      cacheAnalysis(cleanWord, fallback);
      return res.json(fallback);
    }

    const candidateModels = ['gemini-3.7-flash', 'gemini-3.1-flash-lite', 'gemini-flash-latest', 'gemini-2.5-flash'];
    let lastError: any = null;
    let successfulResponseText: string | null = null;

    for (const modelName of candidateModels) {
      try {
        const response = await ai.models.generateContent({
          model: modelName,
          contents: `Please perform a complete Morpho-Etymological analysis on the English word: "${cleanWord}". Output strictly in valid JSON format according to the schema.`,
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            responseMimeType: 'application/json',
            responseSchema: {
              type: Type.OBJECT,
              properties: {
                word: { type: Type.STRING },
                ipa: { type: Type.STRING },
                partOfSpeech: { type: Type.STRING },
                chineseMeaning: { type: Type.STRING },
                morphemes: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      type: { type: Type.STRING, description: 'prefix | root | suffix | interfix' },
                      label: { type: Type.STRING, description: 'e.g. 🚩 前綴, 💎 字根, 🏷️ 字尾' },
                      morpheme: { type: Type.STRING, description: 'the actual morpheme in this word e.g. al-' },
                      originalForm: { type: Type.STRING, description: 'original etymon e.g. ad-' },
                      variantNote: { type: Type.STRING, description: 'e.g. ad- 在 l 前同化為 al-' },
                      meaning: { type: Type.STRING, description: 'Traditional Chinese meaning' },
                      category: { type: Type.STRING, description: 'e.g. 空間方向, 核心動作' },
                      grammaticalRole: { type: Type.STRING, description: 'e.g. 動詞後綴' }
                    },
                    required: ['type', 'label', 'morpheme', 'originalForm', 'meaning']
                  }
                },
                phonetic: {
                  type: Type.OBJECT,
                  properties: {
                    assimilationPath: { type: Type.STRING },
                    phoneticAnalysis: { type: Type.STRING },
                    ruleKey: { type: Type.STRING }
                  },
                  required: ['assimilationPath', 'phoneticAnalysis']
                },
                semantic: {
                  type: Type.OBJECT,
                  properties: {
                    prefixMeaning: { type: Type.STRING },
                    rootCoreAction: { type: Type.STRING },
                    suffixGrammar: { type: Type.STRING },
                    modernMeaning: { type: Type.STRING },
                    formulaDisplay: { type: Type.STRING },
                    literalLogic: { type: Type.STRING }
                  },
                  required: ['prefixMeaning', 'rootCoreAction', 'suffixGrammar', 'modernMeaning', 'formulaDisplay', 'literalLogic']
                },
                familyTree: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      word: { type: Type.STRING },
                      formula: { type: Type.STRING },
                      meaning: { type: Type.STRING }
                    },
                    required: ['word', 'formula', 'meaning']
                  }
                },
                memory: {
                  type: Type.OBJECT,
                  properties: {
                    cognatesDaily: { type: Type.STRING },
                    oneSentenceMnemonic: { type: Type.STRING },
                    etymologicalOrigin: { type: Type.STRING },
                    visualImagery: { type: Type.STRING, description: 'Vivid mental imagery scene connecting prefix and root' },
                    commonCollocations: {
                      type: Type.ARRAY,
                      items: { type: Type.STRING },
                      description: 'High-frequency collocations and real-life phrases'
                    },
                    contrastiveTips: { type: Type.STRING, description: 'Nuances and tips distinguishing from confusable words' }
                  },
                  required: ['cognatesDaily', 'oneSentenceMnemonic']
                },
                rawAsciiBlock: {
                  type: Type.STRING,
                  description: 'The exact formatted ASCII card block as requested in the visual template.'
                }
              },
              required: ['word', 'ipa', 'partOfSpeech', 'chineseMeaning', 'morphemes', 'phonetic', 'semantic', 'familyTree', 'memory', 'rawAsciiBlock']
            }
          }
        });

        if (response.text) {
          successfulResponseText = response.text;
          break;
        }
      } catch (err: any) {
        lastError = err;
        const msg = err?.message || '';
        console.warn(`Model ${modelName} encountered issue: ${msg || 'Rate limit or high demand'}, attempting next candidate model...`);

        // If the API key is invalid or unauthorized, mark it and break immediately
        if (msg.includes('API_KEY_INVALID') || msg.includes('API key not valid') || msg.includes('API_KEY') || (msg.includes('400') && msg.includes('API key'))) {
          isApiKeyInvalid = true;
          break;
        }
      }
    }

    if (successfulResponseText) {
      try {
        const parsed = JSON.parse(successfulResponseText || '{}');
        parsed.source = 'ai';
        cacheAnalysis(cleanWord, parsed);
        return res.json(parsed);
      } catch (parseErr) {
        console.warn('JSON parsing error from AI response, using morphological fallback:', parseErr);
        const fallback = generateFallbackAnalysis(cleanWord);
        cacheAnalysis(cleanWord, fallback);
        return res.json(fallback);
      }
    } else {
      console.warn('All online AI models temporarily busy or quota limited, using high-speed morphological fallback engine.');
      const fallback = generateFallbackAnalysis(cleanWord);
      cacheAnalysis(cleanWord, fallback);
      return res.json(fallback);
    }
  } catch (error: any) {
    console.error('Error analyzing word, delivering resilient fallback:', error);
    const fallback = generateFallbackAnalysis(req.body?.word || 'word');
    return res.json(fallback);
  }
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Morpho-Etymological Engine running on http://localhost:${PORT}`);
  });
}

startServer();
