export interface Player {
  id: string;
  name: string;
  color: string;
  position: number; // Index in PATH_ORDER
  score: number;
}

export interface GridCellData {
  label?: string; // Deprecated but kept for backward compatibility
  amis?: string;  // New: Amis word
  chinese?: string; // New: Chinese definition
  color?: string;
  textColor?: string;
  sound?: string;
  image?: string;
  defaultColor?: string;
  fontSize?: string; // New: Specific font size for this cell
}

export interface SentenceData {
  amis: string;
  chinese: string;
  sound?: string;
  image?: string;
}

export interface GameState {
  players: Player[];
  gridData: Record<string, GridCellData>;
  sentences: (string | SentenceData)[];
  dicePrompts: string[];
  gameTitle: string;
  topicId?: string;
  sentenceTopicId?: string;
  currentDialect?: string;
  gridPage?: number;
  currentTurnIndex: number;
  diceValue: number;
  isRolling: boolean;
  lastActionTimestamp: number;
  revealedCells: Record<string, number | boolean>; // Changed to support 0, 1, 2 states
  students?: string[];
  pickedStudentEvent?: { name: string; timestamp: number; dialect?: string } | null;
  studentCallCounts?: Record<string, number>;
}

export interface TopicTemplate {
  id: string;
  title: string;
  sentences: (string | SentenceData)[];
  sentencesByDialect?: Record<string, (string | SentenceData)[]>; // New: Sentences mapped by dialect
  dicePrompts: string[];
  gridData: Record<string, Partial<GridCellData>>;
  gridDataByDialect?: Record<string, Record<string, Partial<GridCellData>>>;
}

export interface DialogConfig {
  isOpen: boolean;
  title: string;
  message: string;
  type: 'confirm' | 'danger' | 'alert';
  data?: any;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export interface GridPos {
  id: string;
  area: string;
  defaultColor: string;
  textColor: string;
}