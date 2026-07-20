import React, { useState, useEffect, useRef, useMemo } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, onAuthStateChanged, signInWithCustomToken, User as FirebaseUser } from 'firebase/auth';
import { getFirestore, doc, onSnapshot, setDoc, updateDoc, arrayUnion, runTransaction } from 'firebase/firestore';
import { GoogleGenAI } from "@google/genai";
import { Settings, Play, Edit3, RotateCcw, Users, Music, ChevronLeft, ChevronRight, QrCode, Zap, Image as ImageIcon, Eye, EyeOff, PenTool, BookOpen, Home, UserCog, FileSpreadsheet, Trash2, Pencil, Eraser, UserPlus, Dices, ZoomIn, Volume2, X, Square } from 'lucide-react';
import { GRID_LAYOUT_BASE, PATH_ORDER, PLAYER_COLORS, NUMBER_SET, NOMINATIVE_PRONOUNS, GENITIVE_PRONOUNS, PEOPLE_COUNT_SET, ROOM_ID, DEFAULT_APP_ID, CUSTOM_CSS, SITE_CONFIG, DIALECT_VOCABULARY } from './constants';
import { TOPIC_TEMPLATES } from './topics';
import { Dialog, EditModal, SentenceEditModal, PlayerListModal, SheetImportModal, InputModal, StudentListModal, StudentPickerModal } from './components/GameModals';
import { GameState, DialogConfig, GridCellData, Player, TopicTemplate, SentenceData } from './types';

// --- Firebase Configuration ---
const getFirebaseConfig = () => {
  try {
    // @ts-ignore
    if (typeof __firebase_config !== 'undefined') {
      // @ts-ignore
      const sysConfig = JSON.parse(__firebase_config);
      if (sysConfig && sysConfig.apiKey) return sysConfig;
    }
  } catch (e) {
    console.warn("System config invalid, falling back to user config.");
  }
  
  return {
    apiKey: "AIzaSyBKTAj-f_WeXIiFc3pNTqRX1T24yF11EOw",
    authDomain: "amis-number-learning.firebaseapp.com",
    projectId: "amis-number-learning",
    storageBucket: "amis-number-learning.firebasestorage.app",
    messagingSenderId: "465552053506",
    appId: "1:465552053506:web:038dbdbd4e9389fe4f5e1b",
    measurementId: "G-W8W1N2LS6V"
  };
};

// Initialize Firebase safely
const app = initializeApp(getFirebaseConfig());
// Use try-catch for component getters to prevent crash if registration fails
let auth: any;
let db: any;
try {
    auth = getAuth(app);
    db = getFirestore(app);
} catch (e) {
    console.warn("Firebase components failed to initialize. Running in offline mode.", e);
}

// @ts-ignore
const appId = typeof __app_id !== 'undefined' ? __app_id : DEFAULT_APP_ID;

// CSV Parser Helper
const parseCSV = (text: string) => {
    // A robust CSV parser that handles commas inside quotes perfectly
    const rows: string[] = [];
    let currentRow = '';
    let insideQuotes = false;
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (char === '"' && text[i+1] === '"' && insideQuotes) {
            currentRow += '"';
            i++; // skip escaped quote
        } else if (char === '"') {
            insideQuotes = !insideQuotes;
        } else if ((char === '\n' || char === '\r') && !insideQuotes) {
            if (char === '\r' && text[i+1] === '\n') {
                i++; // skip CRLF
            }
            if (currentRow.length > 0 || rows.length > 0) { // Avoid pushing empty rows if there are multiple trailing newlines
                rows.push(currentRow);
                currentRow = '';
            }
        } else {
            currentRow += char;
        }
    }
    if (currentRow) rows.push(currentRow);

    if (rows.length < 2) return [];
    
    const splitRow = (rowStr: string) => {
        const cells: string[] = [];
        let currentCell = '';
        let inQuotes = false;
        for (let i = 0; i < rowStr.length; i++) {
            const char = rowStr[i];
            if (char === '"' && rowStr[i+1] === '"' && inQuotes) {
                currentCell += '"';
                i++;
            } else if (char === '"') {
                inQuotes = !inQuotes;
            } else if (char === ',' && !inQuotes) {
                cells.push(currentCell.trim());
                currentCell = '';
            } else {
                currentCell += char;
            }
        }
        cells.push(currentCell.trim());
        return cells;
    };

    // Parse header (assuming row 0)
    const headers = splitRow(rows[0]).map(h => h.toLowerCase());
    
    const data = [];
    for (let i = 1; i < rows.length; i++) {
        // Skip empty rows manually
        if (!rows[i].trim()) continue;
        const values = splitRow(rows[i]);
        if (values.length === 1 && !values[0]) continue; // Skip empty rows

        const rowObj: any = {};
        headers.forEach((header, index) => {
            rowObj[header] = values[index] !== undefined ? values[index] : '';
        });
        
        data.push(rowObj);
    }
    
    return data;
};

const AutoText = ({ text, textColor, children }: { text?: string, textColor?: string, children?: React.ReactNode }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        const content = contentRef.current;
        if (!container || !content || (!text && !children)) return;

        let animationFrameId: number;

        const resize = () => {
            const cw = container.clientWidth;
            const ch = container.clientHeight;
            if (cw === 0 || ch === 0) {
                // Not fully rendered yet, but don't leave it huge
                content.style.fontSize = '12px';
                return;
            }
            
            let min = 6;
            let max = 80;
            let best = min;
            
            while (min <= max) {
                const mid = Math.floor((min + max) / 2);
                content.style.fontSize = `${mid}px`;
                
                if (content.scrollWidth <= cw + 2 && content.scrollHeight <= ch + 2) {
                    best = mid;
                    min = mid + 1;
                } else {
                    max = mid - 1;
                }
            }
            content.style.fontSize = `${best}px`;
        };

        const observer = new ResizeObserver(() => {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(resize);
        });

        observer.observe(container);
        resize(); // initial setup
        
        return () => {
            observer.disconnect();
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, [text, children]);

    return (
        <div ref={containerRef} className="absolute inset-0.5 flex flex-col items-center justify-center overflow-hidden pointer-events-none z-10">
            <div ref={contentRef} style={{ color: textColor }} className="font-bold drop-shadow-md text-center break-words leading-tight w-full pointer-events-auto flex flex-col items-center justify-center">
                {text !== undefined ? text : children}
            </div>
        </div>
    );
};

const SITE_PASSWORD = '0901';
const PASSWORD_STORAGE_KEY = 'pangcah-monopoly-unlocked';

function PasswordGate() {
  const [isUnlocked, setIsUnlocked] = useState(() => {
    try {
      return localStorage.getItem(PASSWORD_STORAGE_KEY) === 'true';
    } catch {
      return false;
    }
  });
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const unlockSite = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password.trim() === SITE_PASSWORD) {
      try {
        localStorage.setItem(PASSWORD_STORAGE_KEY, 'true');
      } catch {
        // Ignore storage errors and unlock for the current session.
      }
      setIsUnlocked(true);
      return;
    }
    setError('密碼錯誤，目前網站尚未開放。');
  };

  if (isUnlocked) {
    return <MonopolyGame />;
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white text-slate-900 rounded-3xl shadow-2xl border-4 border-amber-400 p-8">
        <div className="text-center mb-6">
          <div className="text-5xl mb-4">🔒</div>
          <h1 className="text-3xl font-black mb-2">族語大富翁目前未開放</h1>
          <p className="text-slate-600 font-bold leading-relaxed">
            請輸入老師提供的密碼後進入。
          </p>
        </div>
        <form onSubmit={unlockSite} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              setError('');
            }}
            placeholder="請輸入密碼"
            className="w-full rounded-2xl border-4 border-slate-900 px-5 py-4 text-xl font-bold text-center outline-none focus:border-amber-500"
            autoFocus
          />
          {error && (
            <p className="text-red-600 font-black text-center">{error}</p>
          )}
          <button
            type="submit"
            className="w-full rounded-2xl bg-amber-400 hover:bg-amber-300 border-4 border-slate-900 px-5 py-4 text-xl font-black shadow-[4px_4px_0_#0f172a] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
          >
            進入網站
          </button>
        </form>
      </div>
    </main>
  );
}

export default PasswordGate;

function MonopolyGame() {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [gameState, setGameState] = useState<GameState>({
    players: [],
    gridData: {},
    sentences: TOPIC_TEMPLATES.topic1.sentences,
    dicePrompts: [], 
    gameTitle: TOPIC_TEMPLATES.topic1.title,
    currentTurnIndex: 0,
    diceValue: 1,
    isRolling: false,
    lastActionTimestamp: 0,
    revealedCells: {} 
  });
  
  const [displayPlayers, setDisplayPlayers] = useState<Player[]>([]);
  const [localPlayerName, setLocalPlayerName] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [showPlayerModal, setShowPlayerModal] = useState(false);
  const [showStudentListModal, setShowStudentListModal] = useState(false);
  const [showStudentPickerModal, setShowStudentPickerModal] = useState(false);
  const [showSetupModal, setShowSetupModal] = useState(false);
  const [showSheetModal, setShowSheetModal] = useState(false);
  const [activeFlashcard, setActiveFlashcard] = useState<(GridCellData & { id: string; type?: 'sentence' | 'grid'; index?: number }) | null>(null);
  const [isFlashcardRevealed, setIsFlashcardRevealed] = useState(false);
  const [isFlashcardAmisVisible, setIsFlashcardAmisVisible] = useState(true);
  const [isFlashcardChineseVisible, setIsFlashcardChineseVisible] = useState(true);
  const [selectedCell, setSelectedCell] = useState<({ id: string } & GridCellData) | null>(null);
  const [editingSentenceIndex, setEditingSentenceIndex] = useState<number | null>(null);
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  
  const [selectedTopicId, setSelectedTopicId] = useState('topic1');
  const [customTopics, setCustomTopics] = useState<Record<string, TopicTemplate>>({});

  const [instructorName, setInstructorName] = useState(SITE_CONFIG.instructorName);
  const [logoUrl, setLogoUrl] = useState(SITE_CONFIG.logoUrl);

  const [selectedNumber, setSelectedNumber] = useState('');
  const [selectedNominative, setSelectedNominative] = useState('');
  const [selectedGenitive, setSelectedGenitive] = useState('');
  const [selectedPeopleCount, setSelectedPeopleCount] = useState('');
  
  const [dialogConfig, setDialogConfig] = useState<DialogConfig>({ isOpen: false, title: '', message: '', type: 'confirm' });
  const [inputModal, setInputModal] = useState<{isOpen: boolean, title: string, defaultValue: string, placeholder?: string, onConfirm: (val: string) => void}>({
      isOpen: false,
      title: '',
      defaultValue: '',
      onConfirm: () => {}
  });

  const stepAudioRef = useRef<HTMLAudioElement>(null); 
  const bgmRef = useRef<HTMLAudioElement>(null);
  const activeAudioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // --- Initialization ---
  useEffect(() => {
    // Load Custom Topics, Instructor Name, and Logo from LocalStorage
    try {
        const savedTopics = localStorage.getItem('monopoly_custom_topics');
        if (savedTopics) {
            setCustomTopics(JSON.parse(savedTopics));
        }

        const savedInstructor = localStorage.getItem('monopoly_instructor_name');
        if (savedInstructor) {
            setInstructorName(savedInstructor);
        }

        const savedLogo = localStorage.getItem('monopoly_logo_url');
        if (savedLogo) {
            setLogoUrl(savedLogo);
        }
    } catch (e) {
        console.warn("Failed to load local settings", e);
    }

    const initAuth = async () => {
      if (!auth) {
          enableOfflineMode();
          return;
      }

      try {
        // @ts-ignore
        if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
          // @ts-ignore
          await signInWithCustomToken(auth, __initial_auth_token);
        } else {
          await signInAnonymously(auth);
        }
      } catch (error: any) {
        if (error.code === 'auth/configuration-not-found' || 
            error.code === 'auth/operation-not-allowed' || 
            error.code === 'auth/internal-error' ||
            error.code === 'auth/admin-restricted-operation') {
            console.log("Offline Mode: Firebase Auth not configured."); 
            enableOfflineMode();
        } else {
            console.error("Auth Error:", error);
        }
      }
    };

    const enableOfflineMode = () => {
        const fallbackUid = localStorage.getItem('monopoly_fallback_uid') || `guest-${Date.now()}`;
        localStorage.setItem('monopoly_fallback_uid', fallbackUid);
        setUser({ uid: fallbackUid, isAnonymous: true } as FirebaseUser);
    };

    initAuth();
    
    if (auth) {
        const unsubscribeAuth = onAuthStateChanged(auth, (u) => {
            if (u) setUser(u);
        });
        return () => unsubscribeAuth();
    }
  }, []);

  // Data Sync
  useEffect(() => {
    if (!user || !db) return;
    const gameDocRef = doc(db, 'artifacts', appId, 'public', 'data', 'monopoly_games', ROOM_ID);
    
    const unsubscribe = onSnapshot(gameDocRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data() as Partial<GameState>;
        const serverPlayers = data.players || [];
        setGameState(prev => ({
          ...prev,
          ...data,
          players: serverPlayers,
          gridData: data.gridData || {},
          sentences: data.sentences || TOPIC_TEMPLATES.topic1.sentences,
          dicePrompts: data.dicePrompts || [], 
          gameTitle: data.gameTitle || TOPIC_TEMPLATES.topic1.title,
          gridPage: data.gridPage || 0,
          currentTurnIndex: typeof data.currentTurnIndex === 'number' ? data.currentTurnIndex : 0,
          diceValue: data.diceValue || 1,
          isRolling: data.isRolling || false,
          revealedCells: data.revealedCells || {}
        }));
      }
    }, (error) => {
        if (error.code !== 'permission-denied' && error.code !== 'unavailable') {
             console.error("Firestore Error (Snapshot):", error);
        }
    });
    return () => unsubscribe();
  }, [user]);

  // Sync displayPlayers
  useEffect(() => {
    setDisplayPlayers(prev => {
        if (prev.length === gameState.players.length) {
            const allIdsMatch = prev.every((p, i) => p.id === gameState.players[i].id);
            if (allIdsMatch) return prev; 
        }
        return gameState.players.map(targetP => {
            const existing = prev.find(p => p.id === targetP.id);
            if (existing) return existing; 
            return targetP; 
        });
    });
  }, [gameState.players]);

  // Animation Loop
  useEffect(() => {
      if (gameState.players.length === 0) return;
      const moveInterval = setInterval(() => {
          setDisplayPlayers(prev => {
              const nextPlayers = [...prev];
              let updated = false;
              gameState.players.forEach((targetPlayer) => {
                  const index = nextPlayers.findIndex(p => p.id === targetPlayer.id);
                  if (index === -1) return; 

                  const currentPos = nextPlayers[index].position;
                  const targetPos = targetPlayer.position;
                  
                  if (currentPos !== targetPos) {
                      let nextPos = (currentPos + 1) % PATH_ORDER.length;
                      nextPlayers[index] = { ...nextPlayers[index], position: nextPos };
                      updated = true;
                      if (stepAudioRef.current) {
                          stepAudioRef.current.currentTime = 0;
                          stepAudioRef.current.play().catch(() => {});
                      }
                  }
              });
              return updated ? nextPlayers : prev;
          });
      }, 400);
      return () => clearInterval(moveInterval);
  }, [gameState.players]);

  // Merged Topics List
  const allTopics = useMemo(() => {
      return { ...TOPIC_TEMPLATES, ...customTopics };
  }, [customTopics]);

  // Actions
  const stopSound = () => {
    if (activeAudioRef.current) {
        activeAudioRef.current.pause();
        activeAudioRef.current.currentTime = 0;
    }
    setIsPlayingAudio(false);
  };

  const playSound = (url?: string) => {
    if (!url) return;
    stopSound();
    const audio = new Audio(url);
    activeAudioRef.current = audio;
    setIsPlayingAudio(true);
    audio.onended = () => setIsPlayingAudio(false);
    audio.play().catch(e => {
        console.log("Audio play error", e);
        setIsPlayingAudio(false);
    });
  };

  const playBGM = () => {
     if (bgmRef.current) {
        if (bgmRef.current.paused) {
            bgmRef.current.volume = 0.3;
            bgmRef.current.play().catch(e => console.log("BGM play error", e));
        } else {
            bgmRef.current.pause();
        }
     }
  };

  const toggleCellReveal = async (cellId: string) => {
      // Logic: 0 (Amis) -> 1 (Image) -> 2 (Chinese) -> 0
      // Note: If no image, skip state 1
      const currentState = Number(gameState.revealedCells[cellId] || 0);
      const hasImage = !!gameState.gridData[cellId]?.image;
      
      let nextState = (currentState + 1) % 3;
      if (nextState === 1 && !hasImage) {
          nextState = 2;
      }

      setGameState(prev => ({
          ...prev,
          revealedCells: { ...prev.revealedCells, [cellId]: nextState }
      }));
      
      if (!db) return;
      try {
        const gameDocRef = doc(db, 'artifacts', appId, 'public', 'data', 'monopoly_games', ROOM_ID);
        await setDoc(gameDocRef, {
            revealedCells: {
                ...gameState.revealedCells,
                [cellId]: nextState
            }
        }, { merge: true });
      } catch (e) { /* Ignore offline errors */ }
  };

  const setAllRevealedState = async (targetState: number) => {
      const allCellIds = GRID_LAYOUT_BASE.map(c => c.id);
      
      const newRevealedState: Record<string, number> = {};
      allCellIds.forEach(id => newRevealedState[id] = targetState);
      
      setGameState(prev => ({ ...prev, revealedCells: newRevealedState }));
      if (!db) return;
      try {
        const gameDocRef = doc(db, 'artifacts', appId, 'public', 'data', 'monopoly_games', ROOM_ID);
        await updateDoc(gameDocRef, { 
            revealedCells: newRevealedState
        });
      } catch (e) { /* Ignore offline errors */ }
  };

  const updateInstructorName = () => {
      setInputModal({
          isOpen: true,
          title: "修改授課教師名稱",
          defaultValue: instructorName,
          placeholder: "請輸入授課教師姓名",
          onConfirm: (newName) => {
              if (newName && newName.trim()) {
                  setInstructorName(newName.trim());
                  localStorage.setItem('monopoly_instructor_name', newName.trim());
              }
              setInputModal(prev => ({...prev, isOpen: false}));
          }
      });
  };

  const updateLogoUrl = () => {
      setInputModal({
          isOpen: true,
          title: "更換 Logo 圖片連結",
          defaultValue: logoUrl,
          placeholder: "請輸入圖片網址 (https://...)",
          onConfirm: (newUrl) => {
              if (newUrl && newUrl.trim()) {
                  setLogoUrl(newUrl.trim());
                  localStorage.setItem('monopoly_logo_url', newUrl.trim());
              }
              setInputModal(prev => ({...prev, isOpen: false}));
          }
      });
  };

  const deleteCustomTopic = (e: React.MouseEvent, topicId: string) => {
      e.stopPropagation();
      if (window.confirm('確定要刪除這個自訂主題嗎？')) {
          const newTopics = { ...customTopics };
          delete newTopics[topicId];
          setCustomTopics(newTopics);
          localStorage.setItem('monopoly_custom_topics', JSON.stringify(newTopics));
          if (selectedTopicId === topicId) {
              setSelectedTopicId('topic1');
          }
      }
  };

  const clearAllCustomTopics = () => {
      if (window.confirm('確定要清除「所有」自訂課程嗎？這將會刪除您匯入的所有 Google Sheets 主題。')) {
          setCustomTopics({});
          localStorage.removeItem('monopoly_custom_topics');
          setSelectedTopicId('topic1');
          alert('已清除所有自訂課程。');
      }
  };

  const handleGenerateAIImage = async (label: string): Promise<string | null> => {
    try {
        if (!process.env.API_KEY) {
             alert("未設定 API Key，無法生成圖片。");
             return null;
        }

        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const cleanLabel = label.split('(')[0].trim(); // Remove brackets info
        const prompt = `A cute, flat vector illustration of ${cleanLabel} in Taiwanese Aboriginal art style, simple geometric patterns, vivid colors (red, white, black, yellow), white background, high quality.`;
        
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash-image',
            contents: {
                parts: [{ text: prompt }]
            },
            config: {
                imageConfig: {
                    aspectRatio: "1:1"
                }
            }
        });

        if (response.candidates && response.candidates[0].content.parts) {
            for (const part of response.candidates[0].content.parts) {
                if (part.inlineData) {
                    const base64String = part.inlineData.data;
                    return `data:image/png;base64,${base64String}`;
                }
            }
        }
        return null;
    } catch (error) {
        console.error("AI Generation Error:", error);
        alert("圖片生成失敗，請稍後再試。");
        return null;
    }
  };

  const handleSheetImport = async (sheetId: string, customTitle: string = '') => {
      // 1. Fetch CSV
      const csvUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv`;
      
      try {
          const response = await fetch(csvUrl);
          if (!response.ok) throw new Error("無法讀取試算表，請確認權限是否設為「知道連結的使用者都能查看」");
          const csvText = await response.text();
          const rows = parseCSV(csvText);
          
          if (rows.length === 0) throw new Error("試算表似乎是空的");

          // 2. Parse Data into TopicTemplate
          let newGameTitle = customTitle || "Google Sheets 自訂主題";
          let newSentences: (string | SentenceData)[] = [];
          let newDicePrompts: string[] = [];
          const newGridData: Record<string, Partial<GridCellData>> = {};
          const rawGridRows: any[] = [];

          rows.forEach((row: any) => {
              const id = row.id?.trim();
              if (!id) return;

              // Handle Special IDs
              if (id.toUpperCase() === 'TITLE') {
                  // Only update from CSV if customTitle was NOT provided
                  if (!customTitle) {
                      newGameTitle = row.label || row.amis || newGameTitle;
                  }
              } else if (id.toUpperCase() === 'SENTENCES') {
                  // Legacy string split support
                  if (row.label || row.amis) {
                      newSentences = (row.label || row.amis).split('|');
                  }
              } else if (id.toLowerCase().startsWith('sentence')) {
                  // New object based support
                  newSentences.push({
                      amis: row.amis || row.label || '',
                      chinese: row.chinese || '',
                      sound: row.sound || '',
                      image: row.image || ''
                  });
              } else if (id.toUpperCase() === 'DICE') {
                  if (row.label || row.amis) newDicePrompts = (row.label || row.amis).split('|');
              } 
              // Handle Grid IDs length 1 (a, b, c...)
              else if (id.length === 1 && id >= 'a' && id <= 'z') {
                  rawGridRows.push(row);
              }
          });

          // Map sequentially to PATH_ORDER
          rawGridRows.forEach((row: any, index: number) => {
              if (index < PATH_ORDER.length) {
                  const targetId = PATH_ORDER[index];
                  newGridData[targetId] = {
                      label: row.label || '', 
                      amis: row.amis || '', 
                      chinese: row.chinese || '', 
                      image: row.image || '',
                      sound: row.sound || '',
                      color: row.color || ''
                  };
                  
                  if (!newGridData[targetId].label && newGridData[targetId].amis) {
                      newGridData[targetId].label = `${newGridData[targetId].amis}${newGridData[targetId].chinese ? ` (${newGridData[targetId].chinese})` : ''}`;
                  }
              }
          });

          // Fallback if no sentences provided
          if (newSentences.length === 0) {
              newSentences = ["..."];
          }

          // 3. Create Custom Topic Object
          // Logic: Use sheetId as the topicId so each unique sheet is a separate course.
          let topicId = `custom-${sheetId}`;
          let isUpdate = !!customTopics[topicId];

          const newTopic: TopicTemplate = {
              id: topicId,
              title: newGameTitle,
              sentences: newSentences,
              dicePrompts: newDicePrompts,
              gridData: newGridData
          };

          // 4. Save to State & LocalStorage
          const updatedTopics = { ...customTopics, [topicId]: newTopic };
          setCustomTopics(updatedTopics);
          localStorage.setItem('monopoly_custom_topics', JSON.stringify(updatedTopics));
          
          // 5. Select the new topic
          setSelectedTopicId(topicId);

          // 6. Apply to Game State (Immediate update like before)
          const fullGridData: Record<string, GridCellData> = {};
          
          const hasNewGridData = Object.keys(newGridData).length > 0;

          GRID_LAYOUT_BASE.forEach(item => {
              const topicData = newGridData[item.id] || {};
              fullGridData[item.id] = {
                  label: topicData.label || (hasNewGridData ? "..." : (gameState.gridData[item.id]?.label || "...")),
                  amis: topicData.amis || (hasNewGridData ? "" : (gameState.gridData[item.id]?.amis || "")),
                  chinese: topicData.chinese || (hasNewGridData ? "" : (gameState.gridData[item.id]?.chinese || "")),
                  color: topicData.color || (hasNewGridData ? item.defaultColor : (gameState.gridData[item.id]?.color || item.defaultColor)),
                  textColor: item.textColor,
                  image: topicData.image || (hasNewGridData ? "" : (gameState.gridData[item.id]?.image || "")),
                  sound: topicData.sound || (hasNewGridData ? "" : (gameState.gridData[item.id]?.sound || ""))
              };
          });

          const newData = {
              gameTitle: newGameTitle,
              topicId: 'custom',
              sentenceTopicId: 'custom',
              sentences: newSentences,
              dicePrompts: newDicePrompts,
              gridData: fullGridData,
              revealedCells: {},
              players: [], // Reset players for new game
              currentTurnIndex: 0,
              diceValue: 1,
              isRolling: false
          };

          if (db) {
            const gameDocRef = doc(db, 'artifacts', appId, 'public', 'data', 'monopoly_games', ROOM_ID);
            await setDoc(gameDocRef, newData, { merge: true });
          } else {
             setGameState(prev => ({ ...prev, ...newData }));
          }

          setShowSheetModal(false);
          setDialogConfig({
              isOpen: true,
              title: isUpdate ? '更新成功' : '匯入成功',
              message: isUpdate 
                ? `已更新現有主題：\n「${newGameTitle}」\n\n內容已重新讀取。`
                : `已新增主題：\n「${newGameTitle}」\n\n主題已儲存至選單中，且遊戲已更新。`,
              type: 'alert'
          });

      } catch (e: any) {
          console.error(e);
          setDialogConfig({
              isOpen: true,
              title: '匯入失敗',
              message: `讀取錯誤：${e.message}\n\n請檢查 ID 是否正確，以及共用權限是否已開啟。`,
              type: 'danger'
          });
      }
  };

  const joinGame = async () => {
    if (!user || !localPlayerName.trim()) return;
    
    const currentPlayerCount = gameState.players.length;
    const colorIndex = currentPlayerCount % PLAYER_COLORS.length;
    const assignedColor = PLAYER_COLORS[colorIndex].value;
    const newPlayer: Player = { id: user.uid, name: localPlayerName, color: assignedColor, position: 0, score: 0 };
    
    const applyLocalJoin = () => {
        setGameState(prev => {
             const existing = prev.players.find(p => p.id === user.uid);
             if (existing) return prev;
             
             let newState = { ...prev, players: [...prev.players, newPlayer] };
             
             if (prev.players.length === 0) {
                const template = allTopics[selectedTopicId] || TOPIC_TEMPLATES.topic1;
                const newGridData: Record<string, GridCellData> = {};
                GRID_LAYOUT_BASE.forEach(item => {
                    const topicData = (template.gridDataByDialect && template.gridDataByDialect['預設'] ? template.gridDataByDialect['預設'][item.id] : template.gridData[item.id]) || {};
                    newGridData[item.id] = {
                        label: topicData.label || "...",
                        amis: topicData.amis || "",
                        chinese: topicData.chinese || "",
                        color: topicData.color || item.defaultColor,
                        textColor: item.textColor,
                        image: topicData.image || '',
                        sound: topicData.sound || ''
                    };
                });
                newState = {
                    ...newState,
                    gridData: newGridData,
                    sentences: template.sentences,
                    dicePrompts: template.dicePrompts || [],
                    gameTitle: template.title,
                    topicId: selectedTopicId,
                    sentenceTopicId: selectedTopicId,
                    currentDialect: '預設',
                };
             }
             return newState;
        });
    };

    if (!db) { applyLocalJoin(); return; }

    try {
        const gameDocRef = doc(db, 'artifacts', appId, 'public', 'data', 'monopoly_games', ROOM_ID);
        const shouldUpdateTopic = gameState.players.length === 0;

        let updateData: any = {
            players: arrayUnion(newPlayer)
        };

        if (shouldUpdateTopic) {
            const template = allTopics[selectedTopicId] || TOPIC_TEMPLATES.topic1;
            const newGridData: Record<string, GridCellData> = {};
            GRID_LAYOUT_BASE.forEach(item => {
               const topicData = (template.gridDataByDialect && template.gridDataByDialect['預設'] ? template.gridDataByDialect['預設'][item.id] : template.gridData[item.id]) || {};
               newGridData[item.id] = {
                   label: topicData.label || "...",
                   amis: topicData.amis || "",
                   chinese: topicData.chinese || "",
                   color: topicData.color || item.defaultColor,
                   textColor: item.textColor,
                   image: topicData.image || '',
                   sound: topicData.sound || ''
               };
            });
            
            updateData = {
                ...updateData,
                gridData: newGridData,
                sentences: template.sentences,
                dicePrompts: template.dicePrompts || [], 
                gameTitle: template.title,
                topicId: selectedTopicId,
                sentenceTopicId: selectedTopicId,
                currentDialect: '預設',
                revealedCells: {} 
            };
        }

        const existingPlayer = gameState.players.find(p => p.id === user.uid);
        if (!existingPlayer) {
            await setDoc(gameDocRef, updateData, { merge: true });
        }
    } catch(e) { 
        console.warn("Join Error (Using local logic):", e); 
        applyLocalJoin();
    }
  };

  const confirmDemoTeams = () => {
      if (!user) return;
      const topicTitle = (allTopics[selectedTopicId] || TOPIC_TEMPLATES.topic1).title;
      setDialogConfig({
          isOpen: true,
          title: '建立演示團隊',
          message: `即將載入主題：\n「${topicTitle}」\n\n確定要建立3組演示玩家嗎？\n目前的玩家列表將被重置，版面內容將會更新。`,
          type: 'confirm',
          onConfirm: createDemoTeams
      });
  };

  const createDemoTeams = async () => {
    const demoTeamNames = ["第1組 Dakoc", "第2組 Laway", "Ohay"];
    const demoPlayers: Player[] = [
        { id: user?.uid || 'host', name: demoTeamNames[0], color: PLAYER_COLORS[0].value, position: 0, score: 0 },
        { id: 'demo-player-2', name: demoTeamNames[1], color: PLAYER_COLORS[1].value, position: 0, score: 0 },
        { id: 'demo-player-3', name: demoTeamNames[2], color: PLAYER_COLORS[2].value, position: 0, score: 0 }
    ];

    const template = allTopics[selectedTopicId] || TOPIC_TEMPLATES.topic1;
    const newGridData: Record<string, GridCellData> = {};
    GRID_LAYOUT_BASE.forEach(item => {
        const topicData = (template.gridDataByDialect && template.gridDataByDialect['預設'] ? template.gridDataByDialect['預設'][item.id] : template.gridData[item.id]) || {};
        newGridData[item.id] = {
            label: topicData.label || "...",
            amis: topicData.amis || "",
            chinese: topicData.chinese || "",
            color: topicData.color || item.defaultColor,
            textColor: item.textColor,
            image: topicData.image || '',
            sound: topicData.sound || ''
        };
    });

    const newData = {
        players: demoPlayers, 
        currentTurnIndex: 0, 
        diceValue: 1, 
        isRolling: false,
        gridData: newGridData, 
        sentences: template.sentences, 
        dicePrompts: template.dicePrompts || [], 
        gameTitle: template.title, 
        topicId: selectedTopicId,
        sentenceTopicId: selectedTopicId,
        currentDialect: '預設',
        revealedCells: {} 
    };

    if (!db) {
        setGameState(prev => ({ ...prev, ...newData }));
        setDialogConfig(prev => ({ ...prev, isOpen: false }));
        return;
    }

    try {
        const gameDocRef = doc(db, 'artifacts', appId, 'public', 'data', 'monopoly_games', ROOM_ID);
        await setDoc(gameDocRef, newData, { merge: true });
    } catch(e) { 
        console.warn("Demo Error (Using local logic):", e);
        setGameState(prev => ({ ...prev, ...newData }));
    }
    setDialogConfig(prev => ({ ...prev, isOpen: false }));
  };

  const startCustomGame = async (customPlayers: Player[]) => {
      if (!user) return;
      if (customPlayers.length === 0) return;

      const playersWithHost = customPlayers.map((p, index) => {
        if (index === 0) return { ...p, id: user.uid };
        return { ...p, id: `manual-player-${index}` };
      });

      const template = allTopics[selectedTopicId] || TOPIC_TEMPLATES.topic1;
      const newGridData: Record<string, GridCellData> = {};
      GRID_LAYOUT_BASE.forEach(item => {
            const topicData = (template.gridDataByDialect && template.gridDataByDialect['預設'] ? template.gridDataByDialect['預設'][item.id] : template.gridData[item.id]) || {};
            newGridData[item.id] = {
                label: topicData.label || "...",
                amis: topicData.amis || "",
                chinese: topicData.chinese || "",
                color: topicData.color || item.defaultColor,
                textColor: item.textColor,
                image: topicData.image || '',
                sound: topicData.sound || ''
            };
      });

      const newData = {
        players: playersWithHost, 
        currentTurnIndex: 0, 
        diceValue: 1, 
        isRolling: false,
        gridData: newGridData,
        sentences: template.sentences,
        dicePrompts: template.dicePrompts || [],
        gameTitle: template.title,
        topicId: selectedTopicId,
        sentenceTopicId: selectedTopicId,
        currentDialect: '預設',
        revealedCells: {}
      };

      if (!db) {
        setGameState(prev => ({ ...prev, ...newData }));
        setShowSetupModal(false);
        return;
      }

      try {
          const gameDocRef = doc(db, 'artifacts', appId, 'public', 'data', 'monopoly_games', ROOM_ID);
          await setDoc(gameDocRef, newData, { merge: true });
      } catch(e) { 
          console.warn("Custom Game Error (Using local logic):", e); 
          setGameState(prev => ({ ...prev, ...newData }));
      }
      setShowSetupModal(false);
  };

  const updatePlayersList = async (newPlayers: Player[]) => {
      if (!db) {
          setGameState(prev => ({ ...prev, players: newPlayers }));
          return;
      }
      try {
        const gameDocRef = doc(db, 'artifacts', appId, 'public', 'data', 'monopoly_games', ROOM_ID);
        await updateDoc(gameDocRef, { players: newPlayers });
      } catch(e) { 
        console.warn("Update Player Error (Using local logic):", e); 
        setGameState(prev => ({ ...prev, players: newPlayers }));
      }
  };

  const rollDice = async () => {
    if (gameState.players.length === 0 || gameState.isRolling) return;
    
    // Immediate Visual Feedback (Local)
    setGameState(prev => ({ ...prev, isRolling: true }));

    // Logic to calculate next state
    const performRoll = async () => {
        const roll = Math.floor(Math.random() * 6) + 1;
        const localUpdate = () => {
            setGameState(prev => {
                const players = [...prev.players];
                const currentIndex = prev.currentTurnIndex;
                const p = { ...players[currentIndex] };
                p.position = (p.position + roll) % PATH_ORDER.length;
                players[currentIndex] = p;
                
                return {
                    ...prev,
                    players: players,
                    diceValue: roll,
                    isRolling: false,
                    currentTurnIndex: (currentIndex + 1) % players.length,
                    lastActionTimestamp: Date.now()
                };
            });
        };

        if (!db) {
            localUpdate();
            return;
        }

        try {
            const gameDocRef = doc(db, 'artifacts', appId, 'public', 'data', 'monopoly_games', ROOM_ID);
            // Try Cloud
            await runTransaction(db, async (transaction) => {
                const sfDoc = await transaction.get(gameDocRef);
                if (!sfDoc.exists()) throw "Document missing";
                const data = sfDoc.data() as GameState;
                const players = [...data.players];
                const currentIndex = data.currentTurnIndex;
                
                const currentPathIndex = players[currentIndex].position;
                let newPathIndex = (currentPathIndex + roll) % PATH_ORDER.length;
                players[currentIndex].position = newPathIndex;
                const nextIndex = (currentIndex + 1) % players.length;

                transaction.update(gameDocRef, { 
                    diceValue: roll, 
                    players: players, 
                    isRolling: false, 
                    currentTurnIndex: nextIndex, 
                    lastActionTimestamp: Date.now() 
                });
            });
        } catch(e) {
            console.warn("Roll Dice Error (Fallback to local logic):", e);
            localUpdate();
        }
    };
    
    // Add 1.5 second delay to let animation play before actual roll logic
    setTimeout(performRoll, 1500);
  };

  const updateGridCell = async (cellId: string, newData: Partial<GridCellData>) => {
    setGameState(prev => ({
        ...prev,
        gridData: { ...prev.gridData, [cellId]: { ...prev.gridData[cellId], ...newData } }
    }));
    if (!db) { setSelectedCell(null); return; }
    try {
        const gameDocRef = doc(db, 'artifacts', appId, 'public', 'data', 'monopoly_games', ROOM_ID);
        await updateDoc(gameDocRef, { [`gridData.${cellId}`]: newData });
    } catch(e) { /* Ignore offline errors */ }
    setSelectedCell(null);
  };

  const updateSentence = async (index: number, newText: string) => {
    setGameState(prev => {
        const newSentences = [...prev.sentences];
        newSentences[index] = newText;
        return { ...prev, sentences: newSentences };
    });
    if (!db) { setEditingSentenceIndex(null); return; }
    try {
        const gameDocRef = doc(db, 'artifacts', appId, 'public', 'data', 'monopoly_games', ROOM_ID);
        const newSentences = [...gameState.sentences];
        newSentences[index] = newText;
        await updateDoc(gameDocRef, { sentences: newSentences });
    } catch(e) { /* Ignore offline errors */ }
    setEditingSentenceIndex(null);
  };

  const updateStudents = async (newStudents: string[]) => {
    setGameState(prev => ({ ...prev, students: newStudents }));
    if (!db) return;
    try {
        const gameDocRef = doc(db, 'artifacts', appId, 'public', 'data', 'monopoly_games', ROOM_ID);
        await updateDoc(gameDocRef, { students: newStudents });
    } catch(e) { console.warn("Update Students Error:", e); }
  };

  const pickRandomStudent = async () => {
    const allStudents = gameState.students || [];
    const validStudents = allStudents.filter(s => !s.includes('[請假]'));

    if (validStudents.length === 0) {
        setDialogConfig({
            isOpen: true,
            title: '無法點名',
            message: allStudents.length === 0 ? '請先匯入學生名單！' : '目前所有學生皆為缺席狀態！',
            type: 'alert'
        });
        return;
    }

    const currentCounts = gameState.studentCallCounts || {};
    
    const getStudentNameOnly = (raw: string) => {
        let clean = raw.replace(' [請假]', '').trim();
        if (clean.includes('\t')) return clean.split('\t')[0].trim();
        for (const d of Object.keys(DIALECT_VOCABULARY)) {
            if (clean.includes(d) && d !== "預設") return clean.replace(d, '').trim();
        }
        return clean;
    };

    let minCount = Infinity;
    validStudents.forEach(s => {
        const name = getStudentNameOnly(s);
        const count = currentCounts[name] || 0;
        if (count < minCount) minCount = count;
    });

    const candidates = validStudents.filter(s => {
        const name = getStudentNameOnly(s);
        return (currentCounts[name] || 0) === minCount;
    });

    const randomIndex = Math.floor(Math.random() * candidates.length);
    const pickedRaw = candidates[randomIndex];
    
    let cleanRaw = pickedRaw.replace(' [請假]', '').trim();
    let studentName = getStudentNameOnly(pickedRaw);
    let dialect = gameState.currentDialect || "預設";
    
    // Parse dialect if present
    if (cleanRaw.includes('\t')) {
        const parts = cleanRaw.split('\t');
        dialect = parts[1].trim();
    } else {
        for (const d of Object.keys(DIALECT_VOCABULARY)) {
            if (cleanRaw.includes(d) && d !== "預設") {
                dialect = d;
                break;
            }
        }
    }

    const event = { name: studentName, dialect, timestamp: Date.now() };
    const newCounts = { ...currentCounts, [studentName]: minCount + 1 };
    
    const foundTopicId = Object.keys(allTopics).find(key => allTopics[key].title === gameState.gameTitle);
    const template = allTopics[gameState.topicId || foundTopicId || selectedTopicId] || TOPIC_TEMPLATES.topic1;
    let newGridData: Record<string, GridCellData> | null = null;
    
    if (template.gridDataByDialect) {
        let dialectData = template.gridData;
        if (template.gridDataByDialect[dialect]) {
            dialectData = template.gridDataByDialect[dialect];
        }
        newGridData = { ...gameState.gridData };
        GRID_LAYOUT_BASE.forEach(item => {
            if (dialectData[item.id]) {
                newGridData![item.id] = {
                    ...newGridData![item.id],
                    amis: dialectData[item.id].amis || "",
                    chinese: dialectData[item.id].chinese || "",
                    image: dialectData[item.id].image !== undefined ? dialectData[item.id].image : newGridData![item.id].image,
                    sound: dialectData[item.id].sound !== undefined ? dialectData[item.id].sound : newGridData![item.id].sound
                };
            }
        });
    }

    setGameState(prev => ({ 
        ...prev, 
        pickedStudentEvent: event,
        studentCallCounts: newCounts,
        ...(newGridData ? { gridData: newGridData } : {}),
        ...(Object.keys(DIALECT_VOCABULARY).includes(dialect) ? { currentDialect: dialect } : {})
    }));
    
    if (!db) return;
    try {
        const gameDocRef = doc(db, 'artifacts', appId, 'public', 'data', 'monopoly_games', ROOM_ID);
        const updateData: any = { 
            pickedStudentEvent: event,
            studentCallCounts: newCounts
        };
        if (newGridData) {
            updateData.gridData = newGridData;
            updateData.currentDialect = dialect;
        }
        await updateDoc(gameDocRef, updateData);
    } catch(e) { console.warn("Pick Student Error:", e); }
  };

  useEffect(() => {
      if (gameState.pickedStudentEvent?.timestamp && gameState.pickedStudentEvent.timestamp > Date.now() - 10000) {
          setShowStudentPickerModal(true);
      }
  }, [gameState.pickedStudentEvent?.timestamp]);

  const confirmLeaveGame = () => {
    setDialogConfig({
        isOpen: true,
        title: '返回主頁',
        message: '確定要離開遊戲並返回主頁嗎？\n您的分數與位置將會移除。',
        type: 'confirm',
        onConfirm: leaveGame
    });
  };

  const leaveGame = async () => {
    if (!user) return;
    if (!db) {
        setGameState(prev => ({ ...prev, players: prev.players.filter(p => p.id !== user.uid) }));
        setDialogConfig(prev => ({ ...prev, isOpen: false }));
        return;
    }
    try {
        const gameDocRef = doc(db, 'artifacts', appId, 'public', 'data', 'monopoly_games', ROOM_ID);
        const newPlayers = gameState.players.filter(p => p.id !== user.uid);
        await updateDoc(gameDocRef, { players: newPlayers });
    } catch(e) { 
        console.warn("Leave Error (Local fallback):", e);
        setGameState(prev => ({ ...prev, players: prev.players.filter(p => p.id !== user.uid) }));
    }
    setDialogConfig(prev => ({ ...prev, isOpen: false }));
  };

  const confirmResetGame = () => {
    setDialogConfig({
        isOpen: true,
        title: '重置遊戲',
        message: '確定要重置遊戲嗎？所有玩家分數和位置將歸零。\n(注意：這不會改變目前的主題設定)',
        type: 'danger',
        onConfirm: resetGame
    });
  };

  const resetGame = async () => {
     const resetPlayers = gameState.players.map(p => ({...p, position: 0, score: 0}));
     setGameState(prev => ({ ...prev, players: resetPlayers, currentTurnIndex: 0, diceValue: 1, isRolling: false, revealedCells: {} }));

     if (!db) { setDialogConfig(prev => ({ ...prev, isOpen: false })); return; }
     try {
       const gameDocRef = doc(db, 'artifacts', appId, 'public', 'data', 'monopoly_games', ROOM_ID);
       await updateDoc(gameDocRef, { players: resetPlayers, currentTurnIndex: 0, diceValue: 1, lastActionTimestamp: Date.now(), revealedCells: {} });
     } catch(e) { console.warn("Reset Error (Local fallback used):", e); }
     setDialogConfig(prev => ({ ...prev, isOpen: false }));
  };

  const confirmForceResetRoom = () => {
    setDialogConfig({
        isOpen: true,
        title: '強制重置房間',
        message: '警告：這將會清除所有現有玩家和遊戲進度！\n\n如果因為有舊玩家卡在裡面而無法切換主題，請使用此功能。',
        type: 'danger',
        onConfirm: forceResetRoom
    });
  };

  const forceResetRoom = async () => {
     setGameState(prev => ({ ...prev, players: [], currentTurnIndex: 0, diceValue: 1, isRolling: false, revealedCells: {} }));
     if (!db) { setDialogConfig(prev => ({ ...prev, isOpen: false })); return; }
     try {
       const gameDocRef = doc(db, 'artifacts', appId, 'public', 'data', 'monopoly_games', ROOM_ID);
       await updateDoc(gameDocRef, { 
           players: [], // Clear all players
           currentTurnIndex: 0, 
           diceValue: 1, 
           isRolling: false,
           lastActionTimestamp: Date.now(), 
           revealedCells: {} 
       });
     } catch(e) { console.warn("Force Reset Error (Local fallback used):", e); }
     setDialogConfig(prev => ({ ...prev, isOpen: false }));
  };
  
  const updateScore = async (playerIndex: number, delta: number) => {
      setGameState(prev => {
        const newPlayers = [...prev.players];
        newPlayers[playerIndex] = { ...newPlayers[playerIndex], score: (newPlayers[playerIndex].score || 0) + delta };
        return { ...prev, players: newPlayers };
      });
      if (!db) return;
      try {
        const gameDocRef = doc(db, 'artifacts', appId, 'public', 'data', 'monopoly_games', ROOM_ID);
        const newPlayers = [...gameState.players];
        newPlayers[playerIndex].score = (newPlayers[playerIndex].score || 0) + delta;
        await updateDoc(gameDocRef, { players: newPlayers });
      } catch(e) { /* Ignore offline errors */ }
  };

  const parseLabel = (label: string) => {
      if (!label) return { amis: '', chinese: '' };
      const parts = label.split(/[\(（]/);
      const amis = parts[0].trim();
      const chinese = parts[1] ? parts[1].replace(/[\)）]$/, '').trim() : '';
      return { amis, chinese };
  };

  const gridCells = useMemo(() => {
    return GRID_LAYOUT_BASE.map(layoutItem => {
      const dynamicData = (gameState.gridData[layoutItem.id] || {}) as Partial<GridCellData>;
      // Fallback parsing if explicit fields are missing
      const parsed = parseLabel(dynamicData.label || "");
      
      return {
        ...layoutItem,
        label: dynamicData.label || "...",
        amis: dynamicData.amis || parsed.amis,
        chinese: dynamicData.chinese || parsed.chinese,
        color: dynamicData.color || layoutItem.defaultColor,
        sound: dynamicData.sound || '',
        textColor: layoutItem.textColor || 'white',
        image: dynamicData.image || ''
      };
    });
  }, [gameState.gridData]);

  const currentPlayer = gameState.players[gameState.currentTurnIndex];
  const isJoined = gameState.players.some(p => p.id === user?.uid);

  const toggleSentence = (direction: 'prev' | 'next') => {
    const sentences = gameState.sentences || [];
    if (sentences.length === 0) return;
    if (direction === 'next') setCurrentSentenceIndex((prev) => (prev + 1) % sentences.length);
    else setCurrentSentenceIndex((prev) => (prev - 1 + sentences.length) % sentences.length);
  };

  const handleNextGridPage = async (e: React.MouseEvent) => {
      e.stopPropagation();
      const topicId = gameState.topicId || Object.keys(allTopics).find(key => allTopics[key].title === gameState.gameTitle) || 'topic1';
      const template = allTopics[topicId];
      if (!template) return;
      
      const currentDialect = gameState.currentDialect || '預設';
      let sourceSentences = template.sentences;
      if (template.sentencesByDialect && template.sentencesByDialect[currentDialect]) {
          sourceSentences = template.sentencesByDialect[currentDialect];
      }
      
      if (!sourceSentences || sourceSentences.length <= GRID_LAYOUT_BASE.length) return;
      
      const maxPage = Math.ceil(sourceSentences.length / GRID_LAYOUT_BASE.length);
      const currentPage = gameState.gridPage || 0;
      const nextPage = (currentPage + 1) % maxPage;
      const startIndex = nextPage * GRID_LAYOUT_BASE.length;
      
      const newGridData: Record<string, GridCellData> = { ...gameState.gridData };
      GRID_LAYOUT_BASE.forEach((item, index) => {
          const senIndex = startIndex + index;
          const sen = sourceSentences[senIndex] as any;
          
          let label = "...";
          let amis = "";
          let chinese = "";
          let sound = "";
          let image = "";
          
          if (sen) {
               amis = sen.amis || (typeof sen === 'string' ? sen : "");
               chinese = sen.chinese || "";
               sound = sen.sound || "";
               image = sen.image || "";
               label = "...";
          }
          
          newGridData[item.id] = {
              ...newGridData[item.id],
              label, amis, chinese, sound, image
          };
      });
      
      setGameState(prev => ({ ...prev, gridData: newGridData, gridPage: nextPage }));
      if (db) {
          try {
             const gameDocRef = doc(db, 'artifacts', appId, 'public', 'data', 'monopoly_games', ROOM_ID);
             await updateDoc(gameDocRef, { gridData: newGridData, gridPage: nextPage });
          } catch(err) { console.warn("Update Grid Page Error:", err); }
      }
  };

  const navigateFlashcard = (direction: 'prev' | 'next') => {
      if (!activeFlashcard) return;
      stopSound();
      
      console.log('Navigating flashcard:', direction, 'Current:', activeFlashcard);
      if (activeFlashcard.type === 'sentence') {
          const sentences = gameState.sentences || [];
          if (sentences.length === 0) return;
          const currentIndex = activeFlashcard.index ?? currentSentenceIndex;
          let newIndex = direction === 'next' ? (currentIndex + 1) % sentences.length : (currentIndex - 1 + sentences.length) % sentences.length;
          
          setCurrentSentenceIndex(newIndex);
          const s = sentences[newIndex] as any;
          const sObj = (typeof s === 'string' || !s) ? { amis: s || '', chinese: '', id: 'sentence' } : { ...s, id: 'sentence' };
          const newCard = {
              ...sObj,
              sound: sObj.sound || s?.sound || undefined,
              type: 'sentence' as const,
              index: newIndex
          };
          console.log('Next card:', newCard);
          setActiveFlashcard(newCard);
          setIsFlashcardRevealed(true);
          setIsFlashcardAmisVisible(true);
          setIsFlashcardChineseVisible(false);
          if (newCard.sound) playSound(newCard.sound);
      } else {
          // If it's a grid cell, use PATH_ORDER
          const currentIndex = PATH_ORDER.findIndex(id => id === activeFlashcard.id);
          if (currentIndex === -1) {
              console.log('Cannot find current index for id:', activeFlashcard.id);
              return;
          }
          
          let newIndex = direction === 'next' ? (currentIndex + 1) % PATH_ORDER.length : (currentIndex - 1 + PATH_ORDER.length) % PATH_ORDER.length;
          const nextId = PATH_ORDER[newIndex];
          const nextCell = gridCells.find(c => c.id === nextId);
          console.log('Next grid card:', nextId, nextCell);
          if (nextCell) {
              const newCard = { ...nextCell, id: nextCell.id, type: 'grid' as const };
              setActiveFlashcard(newCard);
              setIsFlashcardRevealed(true);
              setIsFlashcardAmisVisible(true);
              setIsFlashcardChineseVisible(false);
              if (newCard.sound) playSound(newCard.sound);
          }
      }
  };

  const getSentenceStyle = (index: number) => {
      if (index === 0) return "bg-amber-500 text-white"; 
      if (index === 1) return "bg-teal-600 text-white";
      return "bg-slate-700 text-white";
  };



  const currentDicePrompt = gameState.dicePrompts?.[currentSentenceIndex] || "ira ko...";

  return (
    <div className="min-h-screen bg-slate-200 flex flex-col items-center justify-center p-1 md:p-4 font-serif text-slate-800">
      <style>{CUSTOM_CSS}</style>
      <audio ref={stepAudioRef} src="https://res.cloudinary.com/dm1ksvptk/video/upload/v1749665342/wood_tap.mp3" hidden />
      <audio ref={bgmRef} loop src="https://res.cloudinary.com/dm1ksvptk/video/upload/qjvepdbirtbhxuhahc7l.mp3" />

      {/* Header - Responsive Layout */}
      <div className="w-full max-w-4xl mb-2 md:mb-6 px-1 md:px-2">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 md:p-4 shadow-sm flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
            <div className="flex items-center gap-3 md:gap-4 w-full md:w-auto">
                <img 
                    src={logoUrl} 
                    alt="Logo" 
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-white shadow-md object-cover flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity" 
                    onClick={updateLogoUrl}
                    title="點擊更換 Logo"
                />
                <div className="flex-1">
                    <h1 className="text-lg md:text-3xl font-bold text-slate-800 tracking-wide text-left leading-tight line-clamp-2">{gameState.gameTitle}</h1>
                    <div className="text-xs md:text-base text-slate-600 font-medium flex items-center gap-2 mt-1 truncate group cursor-pointer hover:text-blue-600 transition-colors" onClick={updateInstructorName} title="點擊修改教師名稱">
                        <Users className="w-3 h-3 md:w-4 md:h-4" /> 
                        授課教師：{instructorName}
                        <Pencil className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                </div>
            </div>
            
            {/* Controls Row - Scrollable on very small screens if needed, mostly wrap */}
            <div className="flex gap-2 flex-wrap justify-center w-full md:w-auto">
                {isJoined && (
                    <>
                    <button 
                        onClick={confirmLeaveGame}
                        className="p-2 md:p-3 bg-white rounded-full shadow hover:bg-red-50 text-red-600 transition-colors" 
                        title="回首頁"
                    >
                        <Home className="w-5 h-5 md:w-6 md:h-6"/>
                    </button>
                    <div className="flex bg-white rounded-full shadow overflow-hidden">
                        <button 
                            onClick={() => setAllRevealedState(0)}
                            className="p-2 md:p-3 hover:bg-purple-50 text-purple-600 transition-colors border-r border-gray-100" 
                            title="一鍵蓋牌(族語)"
                        >
                            <span className="font-bold text-xs md:text-sm px-1">族語</span>
                        </button>
                        <button 
                            onClick={() => setAllRevealedState(1)}
                            className="p-2 md:p-3 hover:bg-purple-50 text-purple-600 transition-colors border-r border-gray-100" 
                            title="一鍵全翻(圖片)"
                        >
                            <ImageIcon className="w-4 h-4 md:w-5 md:h-5 inline-block"/>
                        </button>
                        <button 
                            onClick={() => setAllRevealedState(2)}
                            className="p-2 md:p-3 hover:bg-purple-50 text-purple-600 transition-colors" 
                            title="一鍵全翻(中文)"
                        >
                            <span className="font-bold text-xs md:text-sm px-1">中文</span>
                        </button>
                    </div>
                    <button 
                        onClick={() => setShowPlayerModal(true)}
                        className="p-2 md:p-3 bg-white rounded-full shadow hover:bg-blue-50 text-blue-600 transition-colors" 
                        title="管理玩家/隊伍"
                    >
                        <UserCog className="w-5 h-5 md:w-6 md:h-6"/>
                    </button>
                    <button 
                        onClick={() => setShowStudentListModal(true)}
                        className="p-2 md:p-3 bg-white rounded-full shadow hover:bg-emerald-50 text-emerald-600 transition-colors" 
                        title="匯入學生名單"
                    >
                        <UserPlus className="w-5 h-5 md:w-6 md:h-6"/>
                    </button>
                    <button 
                        onClick={pickRandomStudent}
                        className="p-2 md:p-3 bg-white rounded-full shadow hover:bg-orange-50 text-orange-600 transition-colors" 
                        title="隨機點名"
                    >
                        <Dices className="w-5 h-5 md:w-6 md:h-6"/>
                    </button>
                    </>
                )}
                <button onClick={playBGM} className="p-2 md:p-3 bg-white rounded-full shadow hover:bg-blue-50 text-blue-600 transition-colors" title="音樂"><Music className="w-5 h-5 md:w-6 md:h-6"/></button>
                <button onClick={() => setIsEditing(!isEditing)} className={`p-2 md:p-3 rounded-full shadow transition-colors ${isEditing ? 'bg-yellow-500 text-white' : 'bg-white text-slate-600 hover:bg-gray-50'}`} title="編輯"><Settings className="w-5 h-5 md:w-6 md:h-6" /></button>
            </div>
        </div>
      </div>

      {/* Main Game Area */}
      {isJoined ? (
        <div className="w-full flex flex-col items-center">
            {/* Status Bar - Scrollable horizontally on mobile */}
            <div className="w-full max-w-4xl bg-white rounded-xl shadow-sm p-2 md:p-4 mb-2 md:mb-6 flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 border-l-4 border-blue-500">
               <div className="flex items-center gap-2 md:gap-3 w-full md:w-auto justify-between md:justify-start">
                  <div className="text-sm md:text-lg font-bold text-slate-700 whitespace-nowrap">當前回合: </div>
                  {currentPlayer && <span className="px-3 py-1 md:px-4 md:py-1.5 rounded-full text-white font-bold flex items-center gap-2 shadow-sm text-sm md:text-lg truncate max-w-[150px]" style={{backgroundColor: currentPlayer.color}}>{currentPlayer.name}</span>}
               </div>
               
               {/* Player Score Scroll Container */}
               <div className="flex gap-2 overflow-x-auto pb-1 w-full md:w-auto no-scrollbar mask-gradient-right">
                  {gameState.players.map((p, idx) => (
                      <div key={p.id} className="flex flex-col items-center p-1 md:p-2 bg-slate-50 rounded-lg border border-slate-100 min-w-[60px] md:min-w-[70px] flex-shrink-0">
                          <div className="flex items-center gap-1 mb-1">
                              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full" style={{backgroundColor: p.color}}></div>
                              <span className="text-[10px] md:text-xs font-bold truncate max-w-[50px] md:max-w-[60px]">{p.name}</span>
                          </div>
                          <div className="flex items-center gap-0.5 md:gap-1">
                              <button onClick={() => updateScore(idx, -1)} className="w-4 h-4 md:w-5 md:h-5 bg-red-100 text-red-600 rounded flex items-center justify-center hover:bg-red-200 transition-colors text-xs">-</button>
                              <span className="font-mono font-bold text-sm md:text-lg w-5 md:w-6 text-center">{p.score}</span>
                              <button onClick={() => updateScore(idx, 1)} className="w-4 h-4 md:w-5 md:h-5 bg-green-100 text-green-600 rounded flex items-center justify-center hover:bg-green-200 transition-colors text-xs">+</button>
                          </div>
                      </div>
                  ))}
               </div>
            </div>

            {/* Grid */}
            <div className="game-grid relative">
               {gridCells.map(cell => {
                 const playersHere = displayPlayers.filter(p => PATH_ORDER[p.position] === cell.id);
                 
                 // State 0: Amis, 1: Image, 2: Chinese
                 const state = Number(gameState.revealedCells[cell.id] || 0);
                 const hasImage = !!cell.image;
                 
                 let content = null;
                 if (state === 0) {
                     content = <AutoText text={cell.amis || "..."} textColor={cell.textColor} />;
                 } else if (state === 1 && hasImage) {
                     content = <img src={cell.image} alt="" className="absolute inset-0 w-full h-full object-cover rounded-md md:rounded-lg z-10" />;
                 } else {
                     // State 2 OR State 1 (but no image) -> Show Chinese
                     content = <AutoText text={cell.chinese || cell.amis || "..."} textColor={cell.textColor} />;
                 }

                 return (
                   <div key={cell.id} className="grid-cell wood-texture group" style={{ gridArea: cell.area, backgroundColor: cell.color }} onClick={() => {
                        if(isEditing) { setSelectedCell(cell); } else {
                            playSound(cell.sound);
                            toggleCellReveal(cell.id);
                            const el = document.getElementById(`cell-${cell.id}`);
                            if(el) { el.classList.add('active'); setTimeout(() => el.classList.remove('active'), 300); }
                        }
                     }} id={`cell-${cell.id}`}>
                     {!isEditing && (
                         <button 
                             onClick={(e) => { 
                                 e.stopPropagation(); 
                                 setActiveFlashcard({...cell, id: cell.id, type: 'grid'}); 
                                 setIsFlashcardRevealed(false);
                                 setIsFlashcardAmisVisible(true);
                                 setIsFlashcardChineseVisible(false);
                             }}
                             className="absolute top-0.5 right-0.5 p-0.5 md:p-1 md:top-1 md:right-1 bg-white/70 hover:bg-white rounded text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity z-20 shadow-sm"
                             title="顯示字卡"
                         >
                             <ZoomIn className="w-3 h-3 md:w-3.5 md:h-3.5" />
                         </button>
                     )}
                     {isEditing && <div className="absolute top-1 right-1 bg-white/80 p-0.5 rounded-full shadow-sm z-20"><Edit3 className="w-2 h-2 md:w-3 md:h-3 text-gray-600"/></div>}
                     <div className="flex-1 flex flex-col items-center justify-center w-full relative z-10 pt-0.5 pointer-events-none">
                         {content}
                     </div>
                     <div className="token-container z-20">
                        {playersHere.map(p => <div key={p.id} className="player-token" style={{backgroundColor: p.color}} title={p.name}></div>)}
                     </div>
                   </div>
                 );
               })}

               {/* Center Control - Compact for Mobile */}
               <div className="grid-center pb-2 md:pb-0">
                  <div className={`w-full max-w-xs rounded-lg md:rounded-xl p-2 md:p-4 shadow-lg text-center relative group transition-colors duration-300 ${getSentenceStyle(currentSentenceIndex)}`} onClick={() => { if(isEditing) setEditingSentenceIndex(currentSentenceIndex); }}>
                      {isEditing && <div className="absolute top-1 right-1 bg-white/30 p-1 rounded-full cursor-pointer hover:bg-white/50"><Edit3 className="w-3 h-3 md:w-4 md:h-4 text-white"/></div>}
                      <div className="text-white/80 text-[10px] md:text-sm mb-1 md:mb-2 font-bold uppercase tracking-wider border-b border-white/20 pb-0.5 md:pb-1">
                          句型 ({gameState.sentences.length > 0 ? currentSentenceIndex + 1 : 0}/{gameState.sentences.length})
                      </div>
                      
                      <div className="flex items-center justify-between mt-1 md:mt-2">
                          <button onClick={(e) => { e.stopPropagation(); toggleSentence('prev'); }} className="text-white/50 hover:text-white transition-colors p-0.5 shrink-0"><ChevronLeft className="w-5 h-5 md:w-8 md:h-8" /></button>
                          <div className="text-white font-bold text-sm md:text-2xl px-1 min-h-[3rem] md:min-h-[4rem] flex flex-col items-center justify-center drop-shadow-md leading-tight text-center flex-1 cursor-zoom-in" onClick={(e) => {
                              e.stopPropagation();
                              if (gameState.sentences[currentSentenceIndex]) {
                                  const s = gameState.sentences[currentSentenceIndex] as any;
                                  const sObj = (typeof s === 'string' || !s) ? { amis: s || '', chinese: '', id: 'sentence' } : { ...s, id: 'sentence' };
                                  setActiveFlashcard({
                                      ...sObj,
                                      // Copy sound to flashcard object explicitly to ensure it works
                                      sound: sObj.sound || s?.sound || undefined,
                                      type: 'sentence',
                                      index: currentSentenceIndex
                                  });
                                  setIsFlashcardRevealed(false);
                                  setIsFlashcardAmisVisible(true);
                                  setIsFlashcardChineseVisible(false);
                              }
                          }}>
                              {(() => {
                                  const currentSentence = gameState.sentences[currentSentenceIndex];
                                  if (!currentSentence) return null;

                                  const textVal = typeof currentSentence === 'string' 
                                      ? currentSentence
                                      : ((currentSentence as any)?.amis || '');
                                  const isLongText = textVal.length > 50;
                                  
                                  if (typeof currentSentence === 'string') {
                                      return (
                                          <div className="flex-1 w-full relative min-h-[3rem] md:min-h-[4rem]">
                                              <AutoText text={currentSentence} />
                                          </div>
                                      );
                                  } else {
                                      return (
                                          <div className="flex-1 w-full relative min-h-[3rem] md:min-h-[4rem]">
                                              <AutoText>
                                                  <div className="flex items-center justify-center gap-1 w-full text-center">
                                                      <span>{textVal}</span>
                                                      {(currentSentence as any)?.sound && (
                                                          <Volume2 className="w-4 h-4 md:w-5 md:h-5 text-blue-300 hover:text-blue-100 shrink-0 inline-block pointer-events-auto cursor-pointer" onClick={(e) => {
                                                              e.stopPropagation();
                                                              playSound((currentSentence as any).sound);
                                                          }}/>
                                                      )}
                                                  </div>
                                                  {!!(currentSentence as any)?.chinese && (
                                                      <span className="opacity-80 mt-1 block">{(currentSentence as any).chinese}</span>
                                                  )}
                                              </AutoText>
                                          </div>
                                      );
                                  }
                              })()}
                          </div>
                          <button onClick={(e) => { e.stopPropagation(); toggleSentence('next'); }} className="text-white/50 hover:text-white transition-colors p-0.5 shrink-0"><ChevronRight className="w-5 h-5 md:w-8 md:h-8" /></button>
                      </div>
                      
                      {/* Dropdowns */}
                      <div className="grid grid-cols-2 gap-1 mt-2 pt-1 border-t border-white/20 w-full">
                          {/* Grid Topic Selector */}
                          <select
                              className="col-span-2 bg-slate-800 text-yellow-300 text-[10px] md:text-sm rounded px-1 py-1 outline-none w-full cursor-pointer hover:opacity-90 transition-opacity appearance-none text-center font-bold border border-yellow-300/30 text-ellipsis overflow-hidden whitespace-nowrap"
                              value={gameState.topicId || ''}
                              onChange={async (e) => {
                                  const newTopicId = e.target.value;
                                  const template = allTopics[newTopicId] || TOPIC_TEMPLATES.topic1;
                                  const currentDialect = gameState.currentDialect || '預設';
                                  
                                  const newGridData: Record<string, GridCellData> = {};
                                  GRID_LAYOUT_BASE.forEach(item => {
                                      const topicData = (template.gridDataByDialect && template.gridDataByDialect[currentDialect] ? template.gridDataByDialect[currentDialect][item.id] : template.gridData[item.id]) || {};
                                      newGridData[item.id] = {
                                          label: topicData.label || "...",
                                          amis: topicData.amis || "",
                                          chinese: topicData.chinese || "",
                                          color: topicData.color || item.defaultColor,
                                          textColor: item.textColor,
                                          image: topicData.image || '',
                                          sound: topicData.sound || ''
                                      };
                                  });

                                  const updateData = {
                                      gridData: newGridData,
                                      gameTitle: template.title,
                                      topicId: newTopicId,
                                      gridPage: 0
                                  };

                                  if (!db) {
                                      setGameState(prev => ({ ...prev, ...updateData }));
                                      return;
                                  }
                                  try {
                                      const gameDocRef = doc(db, 'artifacts', appId, 'public', 'data', 'monopoly_games', ROOM_ID);
                                      await setDoc(gameDocRef, updateData, { merge: true });
                                  } catch(err) {
                                      console.error('Failed to change grid topic', err);
                                      setGameState(prev => ({ ...prev, ...updateData }));
                                  }
                              }}
                              onClick={(e) => e.stopPropagation()}
                          >
                              {Object.entries(allTopics).map(([id, topic]) => (
                                  <option key={`grid_${id}`} value={id}>格子圖卡: {(topic as TopicTemplate).title}</option>
                              ))}
                          </select>
                          
                          {/* Sentence Topic Selector */}
                          <select
                              className="col-span-2 bg-slate-800 text-green-300 text-[10px] md:text-sm rounded px-1 py-1 outline-none w-full cursor-pointer hover:opacity-90 transition-opacity appearance-none text-center font-bold border border-green-300/30 text-ellipsis overflow-hidden whitespace-nowrap"
                              value={gameState.sentenceTopicId || gameState.topicId || ''}
                              onChange={async (e) => {
                                  const newSentenceTopicId = e.target.value;
                                  const sentenceTemplate = allTopics[newSentenceTopicId] || TOPIC_TEMPLATES.topic1;
                                  const currentDialect = gameState.currentDialect || '預設';
                                  
                                  const newSentences = (sentenceTemplate.sentencesByDialect && sentenceTemplate.sentencesByDialect[currentDialect]) ? sentenceTemplate.sentencesByDialect[currentDialect] : sentenceTemplate.sentences;
                                  
                                  const updateData = {
                                      sentenceTopicId: newSentenceTopicId,
                                      sentences: newSentences,
                                      dicePrompts: sentenceTemplate.dicePrompts || []
                                  };

                                  if (!db) {
                                      setGameState(prev => ({ ...prev, ...updateData }));
                                      return;
                                  }
                                  try {
                                      const gameDocRef = doc(db, 'artifacts', appId, 'public', 'data', 'monopoly_games', ROOM_ID);
                                      await setDoc(gameDocRef, updateData, { merge: true });
                                  } catch(err) {
                                      console.error('Failed to change sentence topic', err);
                                      setGameState(prev => ({ ...prev, ...updateData }));
                                  }
                              }}
                              onClick={(e) => e.stopPropagation()}
                          >
                              {Object.entries(allTopics).map(([id, topic]) => (
                                  <option key={`sentence_${id}`} value={id}>中間句型: {(topic as TopicTemplate).title}</option>
                              ))}
                          </select>
                          <select
                              className="col-span-2 bg-slate-700 text-white text-[10px] md:text-sm rounded px-1 py-1 outline-none w-full cursor-pointer hover:opacity-90 transition-opacity appearance-none text-center font-bold text-ellipsis overflow-hidden whitespace-nowrap"
                              value={gameState.currentDialect || '預設'}
                              onChange={async (e) => {
                                  const newDialect = e.target.value;
                                  
                                  const foundTopicId = Object.keys(allTopics).find(key => allTopics[key].title === gameState.gameTitle);
                                  const template = allTopics[gameState.topicId || foundTopicId || selectedTopicId] || TOPIC_TEMPLATES.topic1;
                                  const sentenceTemplate = allTopics[gameState.sentenceTopicId || gameState.topicId || foundTopicId || selectedTopicId] || TOPIC_TEMPLATES.topic1;
                                  
                                  let dialectData = template.gridData;
                                  if (template.gridDataByDialect && template.gridDataByDialect[newDialect]) {
                                      dialectData = template.gridDataByDialect[newDialect];
                                  }
                                  
                                  const newSentences = (sentenceTemplate.sentencesByDialect && sentenceTemplate.sentencesByDialect[newDialect]) ? sentenceTemplate.sentencesByDialect[newDialect] : sentenceTemplate.sentences;
                                
                                const newGridData = { ...gameState.gridData };
                                  GRID_LAYOUT_BASE.forEach(item => {
                                      if (dialectData[item.id]) {
                                          newGridData[item.id] = {
                                              ...newGridData[item.id],
                                              amis: dialectData[item.id].amis || "",
                                              chinese: dialectData[item.id].chinese || "",
                                              image: dialectData[item.id].image !== undefined ? dialectData[item.id].image : newGridData[item.id].image,
                                              sound: dialectData[item.id].sound !== undefined ? dialectData[item.id].sound : newGridData[item.id].sound
                                          };
                                      }
                                  });
                                  
                                  setGameState(prev => ({ ...prev, gridData: newGridData, currentDialect: newDialect, sentences: newSentences, gridPage: 0 }));
                                  
                                  if (db) {
                                      try {
                                          const gameDocRef = doc(db, 'artifacts', appId, 'public', 'data', 'monopoly_games', ROOM_ID);
                                          await updateDoc(gameDocRef, { gridData: newGridData, currentDialect: newDialect, sentences: newSentences, gridPage: 0 });
                                      } catch(err) { console.warn("Update Dialect GridData Error:", err); }
                                  }
                              }}
                              onClick={(e) => e.stopPropagation()}
                          >
                              {Object.keys(DIALECT_VOCABULARY).map(d => <option key={d} value={d}>{d}</option>)}
                          </select>
                          {[
                              { val: selectedNumber, set: setSelectedNumber, list: (DIALECT_VOCABULARY[gameState.currentDialect || '預設'] || DIALECT_VOCABULARY["預設"]).NUMBER_SET, label: "數字", bg: "bg-teal-600" },
                              { val: selectedGenitive, set: setSelectedGenitive, list: (DIALECT_VOCABULARY[gameState.currentDialect || '預設'] || DIALECT_VOCABULARY["預設"]).GENITIVE_PRONOUNS, label: "屬格", bg: "bg-rose-600" },
                              { val: selectedNominative, set: setSelectedNominative, list: (DIALECT_VOCABULARY[gameState.currentDialect || '預設'] || DIALECT_VOCABULARY["預設"]).NOMINATIVE_PRONOUNS, label: "主格", bg: "bg-indigo-600" },
                              { val: selectedPeopleCount, set: setSelectedPeopleCount, list: (DIALECT_VOCABULARY[gameState.currentDialect || '預設'] || DIALECT_VOCABULARY["預設"]).PEOPLE_COUNT_SET, label: "人數", bg: "bg-amber-600" }
                          ].map((item, i) => (
                              <select
                                  key={i}
                                  className={`${item.bg} text-white text-[10px] md:text-sm rounded px-1 py-1 outline-none w-full cursor-pointer hover:opacity-90 transition-opacity appearance-none text-center font-bold text-ellipsis overflow-hidden whitespace-nowrap`} 
                                  value={item.val} 
                                  onChange={(e) => item.set(e.target.value)} 
                                  onClick={(e) => e.stopPropagation()}
                              >
                               <option value="">{item.label}</option>
                               {item.list.map(n => <option key={n} value={n}>{n}</option>)}
                          </select>
                          ))}
                          {(() => {
                              const topicId = gameState.topicId || Object.keys(allTopics).find(key => allTopics[key].title === gameState.gameTitle) || 'topic1';
                              const temp = allTopics[topicId];
                              let curSentences = temp?.sentences || [];
                              if (temp?.sentencesByDialect && temp.sentencesByDialect[gameState.currentDialect || '預設']) {
                                  curSentences = temp.sentencesByDialect[gameState.currentDialect || '預設'];
                              }
                              if (curSentences.length > GRID_LAYOUT_BASE.length && isEditing) {
                                  return (
                                      <button 
                                          onClick={handleNextGridPage}
                                          className="col-span-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-1 px-2 rounded md:text-xl text-sm mt-2 shadow-sm transition-colors text-center"
                                      >
                                          載入下 20 個單字 (第 {(gameState.gridPage || 0) + 1} 頁)
                                      </button>
                                  );
                              }
                              return null;
                          })()}
                      </div>
                  </div>

                  {/* Dice Area */}
                  <div className="flex flex-col items-center justify-center gap-2 md:gap-4 flex-1 w-full max-w-xs mt-2 md:mt-0">
                      <div className="relative flex items-center justify-center cursor-pointer mb-2" onClick={rollDice}>
                          <div className="absolute -top-6 -right-8 md:-top-4 md:-right-12 bg-yellow-400 text-amber-900 px-2 py-0.5 md:px-3 md:py-1 rounded-sm font-bold shadow-md transform rotate-12 z-20 border border-white text-[10px] md:text-sm whitespace-nowrap animate-bounce" style={{animationDuration: '2s'}}>
                              {currentDicePrompt}
                          </div>
                          <div className={`dice-3d bg-white rounded-lg md:rounded-xl border-2 md:border-4 border-gray-300 flex items-center justify-center shadow-lg ${gameState.isRolling ? 'rolling' : ''}`}>
                              <div className="grid grid-cols-3 grid-rows-3 gap-[2px] md:gap-1 p-1 md:p-2 w-full h-full">
                                  {[...Array(9)].map((_, i) => {
                                      const val = gameState.diceValue;
                                      let show = false;
                                      if (val === 1 && i === 4) show = true;
                                      if (val === 2 && (i === 0 || i === 8)) show = true;
                                      if (val === 3 && (i === 0 || i === 4 || i === 8)) show = true;
                                      if (val === 4 && (i === 0 || i === 2 || i === 6 || i === 8)) show = true;
                                      if (val === 5 && (i === 0 || i === 2 || i === 4 || i === 6 || i === 8)) show = true;
                                      if (val === 6 && (i === 0 || i === 3 || i === 6 || i === 2 || i === 5 || i === 8)) show = true;
                                      return <div key={i} className="flex items-center justify-center">{show && <div className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 bg-gray-800 rounded-full shadow-inner"></div>}</div>;
                                  })}
                              </div>
                          </div>
                      </div>
                      
                      <div className="flex items-center gap-2 justify-center w-full">
                          <button onClick={rollDice} disabled={gameState.isRolling} className={`px-4 py-2 w-full max-w-[120px] rounded-full text-xs md:text-base font-bold shadow-lg transform transition-all whitespace-nowrap ${gameState.isRolling ? 'bg-gray-500 cursor-not-allowed scale-95' : 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white hover:scale-105 active:scale-95'}`}>
                              {gameState.isRolling ? '...' : '擲骰子'}
                          </button>
                          
                          <button onClick={confirmResetGame} className="text-gray-400 hover:text-white flex-shrink-0 flex items-center justify-center p-2 bg-black/20 rounded-full transition-colors" title="重置">
                              <RotateCcw className="w-4 h-4 md:w-5 md:h-5"/>
                          </button>
                      </div>
                  </div>
               </div>
            </div>
        </div>
      ) : (
        /* Login Screen */
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl w-full max-w-sm md:max-w-md text-center border-t-8 border-amber-500 relative animate-in fade-in zoom-in duration-300 mx-4">
             <div 
                className="w-16 h-16 md:w-24 md:h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-slate-100 overflow-hidden relative group cursor-pointer"
                onClick={updateLogoUrl}
                title="點擊更換 Logo"
             >
                 <img src={logoUrl} alt="Logo" className="w-full h-full object-cover transition-opacity group-hover:opacity-50"/>
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                     <Edit3 className="w-6 h-6 text-gray-600"/>
                 </div>
             </div>
             
             {/* Swapped Title and Subtitle */}
             <p className="text-sm font-bold text-gray-400 tracking-wider mb-1 uppercase">{SITE_CONFIG.websiteTitle}</p>
             <h2 className="text-xl md:text-3xl font-extrabold text-slate-800 mb-6 leading-tight px-1">
                {allTopics[selectedTopicId]?.title || gameState.gameTitle || SITE_CONFIG.defaultTopicName}
             </h2>
             
             <div className="mb-6 flex flex-col items-center justify-center bg-gray-50 p-4 rounded-xl border border-dashed border-gray-300"><img src="https://res.cloudinary.com/dm1ksvptk/image/upload/v1769527950/qr_cord_%E5%A4%A7%E5%AF%8C%E7%BF%81-removebg-preview_1_iiu01u.png" alt="Scan to join" className="w-full max-w-[250px] h-auto object-contain mb-2"/><span className="text-xs text-gray-500 flex items-center gap-1"><QrCode className="w-3 h-3"/> 掃描加入遊戲 (學生用)</span></div>
             <div className="border-t border-gray-200 my-4 pt-4">
                <p className="text-sm font-bold text-gray-600 mb-3 flex items-center justify-center gap-1"><Settings className="w-4 h-4"/> 教師設定區</p>
                
                <div className="mb-3 text-left">
                    <div 
                        className="text-xs font-bold text-gray-500 mb-1 block pl-1 cursor-pointer hover:text-blue-500 transition-colors"
                        onClick={updateInstructorName}
                    >
                        授課教師 (點擊修改)
                    </div>
                    <div 
                        className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-gray-700 flex items-center justify-between cursor-pointer hover:border-blue-400 hover:text-blue-600 transition-colors"
                        onClick={updateInstructorName}
                    >
                        {instructorName}
                        <Pencil className="w-4 h-4 text-gray-400"/>
                    </div>
                </div>

                <div className="mb-3 text-left">
                    <label className="text-xs font-bold text-gray-500 mb-1 block pl-1">選擇課程主題</label>
                    <div className="relative flex items-center gap-2">
                        <div className="relative flex-1">
                            <select 
                                value={selectedTopicId} 
                                onChange={(e) => setSelectedTopicId(e.target.value)}
                                className="w-full p-2 pl-9 bg-slate-50 border border-slate-200 rounded-lg text-sm appearance-none outline-none focus:ring-2 focus:ring-blue-500 truncate pr-8"
                            >
                                {Object.entries(allTopics).map(([id, topic], index) => (
                                    <option key={id} value={id}>
                                        {index + 1}. {(topic as TopicTemplate).title}
                                    </option>
                                ))}
                            </select>
                            <BookOpen className="w-4 h-4 text-gray-400 absolute left-3 top-2.5 pointer-events-none"/>
                        </div>
                        {selectedTopicId.startsWith('custom-') && (
                            <button 
                                onClick={(e) => deleteCustomTopic(e, selectedTopicId)}
                                className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                title="刪除此自訂主題"
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>
                        )}
                    </div>
                    {Object.keys(customTopics).length > 0 && (
                        <div className="text-right mt-1">
                            <button 
                                onClick={clearAllCustomTopics}
                                className="text-xs text-red-400 hover:text-red-600 flex items-center justify-end gap-1 ml-auto underline"
                            >
                                <Eraser className="w-3 h-3"/> 清除所有自訂課程
                            </button>
                        </div>
                    )}
                </div>

                <div className="flex gap-2 mb-4">
                    <button onClick={confirmDemoTeams} className="flex-1 bg-indigo-600 text-white font-bold py-2 md:py-3 rounded-xl shadow-lg hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 text-sm"><Zap className="fill-current w-4 h-4 md:w-5 md:h-5" /> 演示模式</button>
                    <button onClick={() => setShowSetupModal(true)} className="flex-1 bg-teal-600 text-white font-bold py-2 md:py-3 rounded-xl shadow-lg hover:bg-teal-700 transition-all flex items-center justify-center gap-2 text-sm"><PenTool className="fill-current w-4 h-4 md:w-5 md:h-5" /> 手動名單</button>
                </div>
                <button onClick={() => setShowSheetModal(true)} className="w-full bg-green-50 text-green-700 font-bold py-2 md:py-3 rounded-xl shadow-sm border border-green-200 hover:bg-green-100 transition-all flex items-center justify-center gap-2 text-sm mb-4">
                    <FileSpreadsheet className="w-4 h-4 md:w-5 md:h-5"/> 匯入 Google Sheets 題庫
                </button>
             </div>
             <div className="relative flex py-2 items-center"><div className="flex-grow border-t border-gray-300"></div><span className="flex-shrink-0 mx-4 text-gray-400 text-xs">或單獨加入</span><div className="flex-grow border-t border-gray-300"></div></div>
             <div className="mb-4 mt-2"><input type="text" placeholder="輸入隊伍名稱" className="w-full text-center text-lg border-2 border-gray-200 rounded-xl p-3 focus:border-amber-500 outline-none" value={localPlayerName} onChange={e => setLocalPlayerName(e.target.value)} onKeyDown={e => e.key === 'Enter' && joinGame()}/></div>
             <div className="flex flex-col gap-2">
                <button onClick={joinGame} disabled={!localPlayerName.trim()} className="w-full bg-amber-500 text-white text-xl font-bold py-3 rounded-xl shadow-lg hover:bg-amber-600 disabled:opacity-50 transition-all flex items-center justify-center gap-2"><Play className="fill-current w-5 h-5" /> 開始遊戲</button>
                {gameState.players.length > 0 && (
                    <button onClick={confirmForceResetRoom} className="w-full bg-red-100 text-red-600 text-sm font-bold py-2 rounded-xl hover:bg-red-200 transition-all flex items-center justify-center gap-2">
                        <RotateCcw className="w-4 h-4" /> 強制重置房間
                    </button>
                )}
             </div>
             <p className="mt-4 text-xs text-gray-400">目前已有 {gameState.players.length} 組玩家加入</p>
        </div>
      )}
      
      {/* Modals */}
      {isEditing && selectedCell && <EditModal selectedCell={selectedCell} onClose={() => setSelectedCell(null)} onSave={updateGridCell} onAiGenerate={handleGenerateAIImage} />}
      {isEditing && editingSentenceIndex !== null && gameState.sentences && <SentenceEditModal index={editingSentenceIndex} sentence={gameState.sentences[editingSentenceIndex]} onClose={() => setEditingSentenceIndex(null)} onSave={updateSentence} />}
      {showPlayerModal && <PlayerListModal players={gameState.players} onClose={() => setShowPlayerModal(false)} onUpdatePlayers={updatePlayersList} />}
      {showStudentListModal && <StudentListModal students={gameState.students || []} onClose={() => setShowStudentListModal(false)} onUpdateStudents={updateStudents} />}
      {showSetupModal && <PlayerListModal players={[]} onClose={() => setShowSetupModal(false)} onUpdatePlayers={startCustomGame} title="手動建立名單 (教師用)" confirmLabel="建立並開始遊戲" />}
      {showSheetModal && <SheetImportModal onClose={() => setShowSheetModal(false)} onImport={handleSheetImport} />}
      {activeFlashcard && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 animate-in fade-in duration-200" onClick={() => { setActiveFlashcard(null); stopSound(); }}>
               <div className="bg-slate-100 rounded-3xl overflow-hidden shadow-2xl max-w-4xl w-full max-h-[90vh] mx-4 md:mx-16 transform transition-all flex flex-col relative animate-in zoom-in-95 duration-200 pointer-events-auto" onClick={e => e.stopPropagation()}>
                    <button onClick={() => { setActiveFlashcard(null); stopSound(); }} className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 text-white rounded-full p-2 z-30 transition-colors">
                        <X className="w-5 h-5 md:w-6 md:h-6" />
                    </button>

                    <button onClick={(e) => { e.stopPropagation(); navigateFlashcard('prev'); }} className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/50 text-white rounded-full p-2 md:p-3 z-30 transition-all shadow-md opacity-70 hover:opacity-100">
                        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); navigateFlashcard('next'); }} className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/50 text-white rounded-full p-2 md:p-3 z-30 transition-all shadow-md opacity-70 hover:opacity-100">
                        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                    </button>

                    {isFlashcardRevealed ? (
                        <>
                            {activeFlashcard.image ? (
                                 <div className="w-full h-40 md:h-64 relative bg-slate-200 border-b-4 border-slate-300 shrink-0">
                                     <img src={activeFlashcard.image} alt="" className="w-full h-full object-contain p-2 md:p-4 animate-in fade-in drop-shadow-md" />
                                 </div>
                            ) : (
                                 <div className="w-full h-24 md:h-40 relative bg-white border-b-4 border-slate-200 flex items-center justify-center shrink-0 animate-in fade-in">
                                     <ImageIcon className="w-16 h-16 text-slate-200" />
                                 </div>
                            )}
                            <div className="p-4 md:p-6 flex flex-col flex-1 overflow-y-auto min-h-0 w-full">
                                <div className="flex flex-col w-full my-auto pb-4">
                                    {isFlashcardAmisVisible ? (
                                        <h2 className={`font-extrabold text-slate-800 mb-4 animate-in slide-in-from-bottom-2 fade-in ${activeFlashcard.amis && activeFlashcard.amis.length > 50 ? 'text-2xl md:text-3xl text-left leading-relaxed w-full overflow-y-visible' : 'text-4xl md:text-6xl text-center'}`}>{activeFlashcard.amis || '...'}</h2>
                                    ) : (
                                        <div className="text-xl md:text-2xl text-slate-400 font-bold tracking-widest mb-4 mt-4 animate-in fade-in text-center">(族語已隱藏)</div>
                                    )}
                                    {isFlashcardChineseVisible ? (
                                        <h3 className={`font-bold text-slate-500 mb-4 animate-in slide-in-from-bottom-2 fade-in ${activeFlashcard.chinese && activeFlashcard.chinese.length > 50 ? 'text-xl md:text-2xl text-left leading-relaxed w-full' : 'text-2xl md:text-4xl text-center'}`}>{activeFlashcard.chinese || '...'}</h3>
                                    ) : (
                                        <div className="text-xl md:text-2xl text-slate-400 font-bold tracking-widest mb-4 mt-4 animate-in fade-in text-center">(中文已隱藏)</div>
                                    )}
                                </div>
                            </div>
                            <div className="flex gap-4 flex-wrap justify-center w-full p-4 pt-4 shrink-0 border-t border-slate-200 bg-slate-50">
                                    <button onClick={(e) => { e.stopPropagation(); setIsFlashcardAmisVisible(!isFlashcardAmisVisible); }} className="flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-full font-bold transition-all hover:scale-105 active:scale-95 text-sm md:text-xl shadow-sm border border-slate-300">
                                        {isFlashcardAmisVisible ? <><EyeOff className="w-5 h-5 md:w-8 md:h-8" /> 隱藏族語</> : <><Eye className="w-5 h-5 md:w-8 md:h-8" /> 顯示族語</>}
                                    </button>
                                    <button onClick={(e) => { e.stopPropagation(); setIsFlashcardChineseVisible(!isFlashcardChineseVisible); }} className="flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-full font-bold transition-all hover:scale-105 active:scale-95 text-sm md:text-xl shadow-sm border border-slate-300">
                                        {isFlashcardChineseVisible ? <><EyeOff className="w-5 h-5 md:w-8 md:h-8" /> 隱藏中文</> : <><Eye className="w-5 h-5 md:w-8 md:h-8" /> 顯示中文</>}
                                    </button>
                                    <button onClick={(e) => { e.stopPropagation(); setIsFlashcardRevealed(false); }} className="flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-full font-bold transition-all hover:scale-105 active:scale-95 text-sm md:text-xl shadow-sm border border-slate-300">
                                        <EyeOff className="w-5 h-5 md:w-8 md:h-8" /> 隱藏全部
                                    </button>
                                    {activeFlashcard.sound && (
                                        <button onClick={(e) => { 
                                            e.stopPropagation(); 
                                            if (isPlayingAudio) {
                                                stopSound();
                                            } else {
                                                playSound(activeFlashcard.sound); 
                                            }
                                        }} className="flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-full font-bold transition-all hover:scale-105 active:scale-95 text-sm md:text-xl shadow-sm border border-blue-200">
                                            {isPlayingAudio ? (
                                                <><Square className="w-5 h-5 md:w-8 md:h-8" /> 停止發音</>
                                            ) : (
                                                <><Volume2 className="w-5 h-5 md:w-8 md:h-8" /> 聽發音</>
                                            )}
                                        </button>
                                    )}
                                </div>
                        </>
                    ) : (
                        <div className="w-full min-h-[400px] bg-slate-200 flex flex-col items-center justify-center p-10 cursor-pointer hover:bg-slate-300 transition-colors group relative" onClick={(e) => { 
                            e.stopPropagation(); 
                            setIsFlashcardRevealed(true); 
                            setIsFlashcardAmisVisible(true);
                            setIsFlashcardChineseVisible(false);
                            if(activeFlashcard.sound) playSound(activeFlashcard.sound); 
                        }}>
                            <div className="text-slate-500 font-bold flex flex-col items-center gap-4 group-hover:text-slate-700 mb-8">
                                <span className="text-2xl md:text-3xl text-center">先不看單字，先聽發音<br/>準備好後，點擊這裡翻開！</span>
                                <Eye className="w-12 h-12 md:w-16 md:h-16 mt-4" />
                            </div>
                            {activeFlashcard.sound && (
                                <button onClick={(e) => { 
                                    e.stopPropagation(); 
                                    if (isPlayingAudio) {
                                        stopSound();
                                    } else {
                                        playSound(activeFlashcard.sound);
                                    }
                                }} className="flex items-center justify-center gap-2 px-10 py-5 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-bold transition-all hover:scale-110 active:scale-95 text-xl md:text-2xl shadow-xl mt-4">
                                    {isPlayingAudio ? (
                                        <><Square className="w-8 h-8 md:w-10 md:h-10" /> 停止發音</>
                                    ) : (
                                        <><Volume2 className="w-8 h-8 md:w-10 md:h-10" /> 聽發音</>
                                    )}
                                </button>
                            )}
                        </div>
                    )}
               </div>
          </div>
      )}
      {showStudentPickerModal && gameState.pickedStudentEvent && (
          <StudentPickerModal 
            studentName={gameState.pickedStudentEvent.name} 
            dialect={gameState.pickedStudentEvent.dialect} 
            callCount={gameState.studentCallCounts?.[gameState.pickedStudentEvent.name] || 1}
            onClose={() => setShowStudentPickerModal(false)} />
      )}
      <InputModal 
          isOpen={inputModal.isOpen} 
          title={inputModal.title} 
          defaultValue={inputModal.defaultValue} 
          placeholder={inputModal.placeholder}
          onClose={() => setInputModal(prev => ({...prev, isOpen: false}))} 
          onConfirm={inputModal.onConfirm} 
      />

      {/* Global Dialog */}
      <Dialog 
        isOpen={dialogConfig.isOpen}
        title={dialogConfig.title}
        message={dialogConfig.message}
        type={dialogConfig.type}
        data={dialogConfig.data}
        onConfirm={dialogConfig.onConfirm || (() => setDialogConfig(prev => ({...prev, isOpen: false})))}
        onCancel={() => setDialogConfig(prev => ({...prev, isOpen: false}))}
      />
    </div>
  );
}
