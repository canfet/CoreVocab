import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  getDocs,
  collection,
  deleteDoc,
  onSnapshot,
  getDocFromServer
} from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';
import { DailyStudyProgress, WordAnalysis } from '../types';

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
    },
    operationType,
    path,
  };
  console.error('Firestore Error:', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

// Test initial connection as required by skill
export async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.warn('Firebase client is offline or network connecting...');
    }
  }
}

// Google Sign-in with popup
export async function signInWithGoogle(): Promise<User | null> {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error('Google Sign-in failed:', error);
    throw error;
  }
}

// Sign out
export async function signOutUser(): Promise<void> {
  try {
    await firebaseSignOut(auth);
  } catch (error) {
    console.error('Sign-out failed:', error);
    throw error;
  }
}

// Cloud Storage Helpers for User Progress
export async function saveUserProgressToCloud(userId: string, progress: DailyStudyProgress): Promise<void> {
  const docPath = `users/${userId}/studyProgress/daily`;
  try {
    await setDoc(doc(db, docPath), {
      userId,
      currentLevel: progress.currentLevel,
      dailyGoal: progress.dailyGoal,
      masteredWords: progress.masteredWords,
      todayStudiedWords: progress.todayStudiedWords,
      lastStudyDate: progress.lastStudyDate,
      streakDays: progress.streakDays,
      updatedAt: new Date().toISOString()
    }, { merge: true });
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, docPath);
  }
}

export async function getUserProgressFromCloud(userId: string): Promise<DailyStudyProgress | null> {
  const docPath = `users/${userId}/studyProgress/daily`;
  try {
    const snap = await getDoc(doc(db, docPath));
    if (snap.exists()) {
      const data = snap.data();
      return {
        currentLevel: data.currentLevel,
        dailyGoal: data.dailyGoal,
        masteredWords: data.masteredWords || [],
        todayStudiedWords: data.todayStudiedWords || [],
        lastStudyDate: data.lastStudyDate || new Date().toISOString().slice(0, 10),
        streakDays: data.streakDays || 1
      };
    }
    return null;
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, docPath);
    return null;
  }
}

// Cloud Storage Helpers for Saved Words
export async function saveWordToCloud(userId: string, word: WordAnalysis): Promise<void> {
  const cleanWord = word.word.toLowerCase();
  const docPath = `users/${userId}/savedWords/${cleanWord}`;
  try {
    await setDoc(doc(db, docPath), {
      id: cleanWord,
      userId,
      word: word.word,
      ipa: word.ipa || '',
      pos: word.partOfSpeech || '',
      meaningZh: word.chineseMeaning || '',
      analysisJson: JSON.stringify(word),
      savedAt: new Date().toISOString()
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, docPath);
  }
}

export async function removeWordFromCloud(userId: string, wordStr: string): Promise<void> {
  const cleanWord = wordStr.toLowerCase();
  const docPath = `users/${userId}/savedWords/${cleanWord}`;
  try {
    await deleteDoc(doc(db, docPath));
  } catch (error) {
    handleFirestoreError(error, OperationType.DELETE, docPath);
  }
}

export async function getSavedWordsFromCloud(userId: string): Promise<WordAnalysis[]> {
  const colPath = `users/${userId}/savedWords`;
  try {
    const snapshot = await getDocs(collection(db, colPath));
    const words: WordAnalysis[] = [];
    snapshot.forEach((docSnap) => {
      const data = docSnap.data();
      if (data.analysisJson) {
        try {
          words.push(JSON.parse(data.analysisJson));
        } catch {
          // fallback
        }
      }
    });
    return words;
  } catch (error) {
    handleFirestoreError(error, OperationType.LIST, colPath);
    return [];
  }
}
