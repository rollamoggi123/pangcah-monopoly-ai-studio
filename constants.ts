import { GridPos } from './types';

// ==========================================
// 🏫 教師設定區 (請在此修改您的個人資訊)
// ==========================================
export const SITE_CONFIG = {
  instructorName: "蘿拉麻吉", // 授課教師名稱 (請改成您的名字)
  logoUrl: "https://res.cloudinary.com/dm1ksvptk/image/upload/v1749659604/vxem1akzssudvs0neffn.png", // 網站 Logo 圖片連結 (請換成您的圖片連結)
  websiteTitle: "族語大富翁", // 網站主標題
  defaultTopicName: "馬蘭阿美語" // 登入頁預設顯示的課程名稱 (當沒有選擇主題時)
};

export const ROOM_ID = 'room_27';
export const DEFAULT_APP_ID = 'monopoly-production-v1';

// 基礎版面結構 (位置與顏色定義)
export const GRID_LAYOUT_BASE: GridPos[] = [
  { id: 'a', area: 'a', defaultColor: '#bae6fd', textColor: '#1e3a8a' }, 
  { id: 'b', area: 'b', defaultColor: '#ffe8b3', textColor: '#1e3a8a' },
  { id: 'c', area: 'c', defaultColor: '#fb8c00', textColor: '#1e3a8a' },
  { id: 'd', area: 'd', defaultColor: '#bae6fd', textColor: '#1e3a8a' },
  { id: 'e', area: 'e', defaultColor: '#ffe8b3', textColor: '#1e3a8a' },
  { id: 'f', area: 'f', defaultColor: '#e63946', textColor: '#1e3a8a' },
  { id: 'g', area: 'g', defaultColor: '#f48fb1', textColor: '#1e3a8a' },
  { id: 'h', area: 'h', defaultColor: '#bae6fd', textColor: '#1e3a8a' }, 
  { id: 'i', area: 'i', defaultColor: '#f48fb1', textColor: '#1e3a8a' }, 
  { id: 'j', area: 'j', defaultColor: '#66bb6a', textColor: '#1e3a8a' }, 
  { id: 'o', area: 'o', defaultColor: '#ba68c8', textColor: '#1e3a8a' },
  { id: 'p', area: 'p', defaultColor: '#e63946', textColor: '#1e3a8a' },
  { id: 'q', area: 'q', defaultColor: '#ba68c8', textColor: '#1e3a8a' },
  { id: 'r', area: 'r', defaultColor: '#ffe8b3', textColor: '#1e3a8a' },
  { id: 's', area: 's', defaultColor: '#ba68c8', textColor: '#1e3a8a' },
  { id: 't', area: 't', defaultColor: '#e63946', textColor: '#1e3a8a' },
  { id: 'u', area: 'u', defaultColor: '#ffe8b3', textColor: '#1e3a8a' },
  { id: 'v', area: 'v', defaultColor: '#fdd835', textColor: '#1e3a8a' },
  { id: 'w', area: 'w', defaultColor: '#e63946', textColor: '#1e3a8a' },
  { id: 'x', area: 'x', defaultColor: '#ffe8b3', textColor: '#1e3a8a' },
];

export const PATH_ORDER = ['a','b','c','d','e','f','g','h','i','j','o','p','q','r','s','t','u','v','w','x'];

export const PLAYER_COLORS = [
  { name: 'Red', value: '#ef4444' },    
  { name: 'Blue', value: '#3b82f6' },   
  { name: 'Green', value: '#22c55e' },  
  { name: 'Yellow', value: '#eab308' }, 
  { name: 'Purple', value: '#a855f7' }, 
  { name: 'Teal', value: '#14b8a6' },   
  { name: 'Pink', value: '#ec4899' },
  { name: 'Orange', value: '#f97316' },
  { name: 'Lime', value: '#84cc16' },
  { name: 'Emerald', value: '#10b981' },
  { name: 'Cyan', value: '#06b6d4' },
  { name: 'Indigo', value: '#6366f1' },
  { name: 'Violet', value: '#8b5cf6' },
  { name: 'Fuchsia', value: '#d946ef' },
  { name: 'Rose', value: '#f43f5e' },
  { name: 'Light Blue', value: '#0ea5e9' },
  { name: 'Amber', value: '#f59e0b' },
  { name: 'Gray', value: '#64748b' },
  { name: 'Zinc', value: '#71717a' },
  { name: 'Neutral', value: '#737373' },
  { name: 'Stone', value: '#78716c' },
  { name: 'Slate', value: '#475569' },
  { name: 'Sky', value: '#38bdf8' },
  { name: 'Red Dark', value: '#b91c1c' },
  { name: 'Blue Dark', value: '#1d4ed8' },
  { name: 'Green Dark', value: '#15803d' },
  { name: 'Yellow Dark', value: '#a16207' },
  { name: 'Purple Dark', value: '#7e22ce' },
  { name: 'Teal Dark', value: '#0f766e' },
  { name: 'Pink Dark', value: '#be185d' }
];

export const NUMBER_SET = ["cecay", "tosa", "tolo", "sepat", "lima", "enem", "pito", "falo", "siwa", "moetep"];
export const NOMINATIVE_PRONOUNS = ["kako", "kiso", "ko mira", "kami", "kita", "kamo", "ca mira"];
export const GENITIVE_PRONOUNS = ["no mako/ ako", "no miso/ iso", "no mira", "niyam", "na mira", "nangra"];
export const PEOPLE_COUNT_SET = ["cecayay", "tatosaay", "tatoloay", "sasepatay", "lalimaay", "aemenay", "papitoay", "fafaloay", "sasiwaay", "mamoetepay"];

export const DIALECT_VOCABULARY: Record<string, { NUMBER_SET: string[], NOMINATIVE_PRONOUNS: string[], GENITIVE_PRONOUNS: string[], PEOPLE_COUNT_SET: string[] }> = {
  "秀姑巒阿美語": {
    NUMBER_SET: ["cecay", "tosa", "tolo", "sepat", "lima", "enem", "pito", "falo", "siwa", "mo^tep"],
    NOMINATIVE_PRONOUNS: ["kako", "kiso", "cingra", "kami", "kita", "kamo", "cangra"],
    GENITIVE_PRONOUNS: ["mako/ako", "miso/iso", "ningra", "niyam", "mita/ita", "namo/amo", "nangra"],
    PEOPLE_COUNT_SET: ["cecayay", "tatosaay", "tatoloay", "sasepatay", "lalimaay", "aemenay", "papitoay", "fafaloay", "sasiwaay", "mamoetepay"]
  },
  "海岸阿美語": {
    NUMBER_SET: ["cecay", "tosa", "tolo", "sepat", "lima", "enem", "pito", "falo", "siwa", "mo^tep"],
    NOMINATIVE_PRONOUNS: ["kako", "kiso", "cingra", "kami", "kita", "kamo", "cangra"],
    GENITIVE_PRONOUNS: ["mako/ako", "miso/iso", "ningra", "niyam", "mita/ita", "namo/amo", "nangra"],
    PEOPLE_COUNT_SET: ["cecayay", "tatosa", "tatolo", "sasepat", "lalima", "aemen", "papito", "fafalo", "sasiwa", "mamoetep"]
  },
  "馬蘭阿美語": {
    NUMBER_SET: ["cecay", "tusa", "tulu", "sepat", "lima", "enem", "pitu", "falu", "siwa", "mo^tep"],
    NOMINATIVE_PRONOUNS: ["kaku", "kisu", "cingra", "kami", "kita", "kamu", "cangra"],
    GENITIVE_PRONOUNS: ["maku/aku", "misu/isu", "ningra", "niyam", "mita/ita", "namu/amu", "nangra"],
    PEOPLE_COUNT_SET: ["cecayay", "tatusa", "tatulu", "sasepat", "lalima", "aemen", "papitu", "fafalu", "sasiwa", "mamoetep"]
  },
  "南勢阿美語": {
    NUMBER_SET: ["cacay", "tusa", "tulu", "sepat", "lima", "enem", "pitu", "walu", "siwa", "muketep"],
    NOMINATIVE_PRONOUNS: ["kako", "kiso", "cingra", "kami", "kita", "kamo", "cangra"],
    GENITIVE_PRONOUNS: ["nako", "niso", "ningra", "niyam", "nita", "namo", "nangra"],
    PEOPLE_COUNT_SET: ["cecayay", "tatosa", "tatolo", "sasepat", "lalima", "aemen", "papito", "fafalo", "sasiwa", "mamoetep"]
  },
  "恆春阿美語": {
    NUMBER_SET: ["cecay", "tusa", "tulu", "sepat", "lima", "enem", "pitu", "falu", "siwa", "mutehep"],
    NOMINATIVE_PRONOUNS: ["kaku", "kisu", "cingra", "kami", "kita", "kamu", "cangra"],
    GENITIVE_PRONOUNS: ["maku", "misu", "ningra", "niyam", "mita", "namu", "nangra"],
    PEOPLE_COUNT_SET: ["cecayay", "tatusa", "tatulu", "sasepat", "lalima", "aemen", "papitu", "fafalu", "sasiwa", "mamutehepay"]
  },
  "預設": {
    NUMBER_SET: NUMBER_SET,
    NOMINATIVE_PRONOUNS: NOMINATIVE_PRONOUNS,
    GENITIVE_PRONOUNS: GENITIVE_PRONOUNS,
    PEOPLE_COUNT_SET: PEOPLE_COUNT_SET
  }
};

// Responsive CSS for Mobile (Default), Tablet (md), and Desktop (lg)
export const CUSTOM_CSS = `
.game-grid {
  display: grid;
  grid-template-areas:
      'a b c d e f'
      'x center center center center g'
      'w center center center center h'
      'v center center center center i'
      'u center center center center j'
      't s r q p o';
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr); 
  gap: 2px;
  width: 100%;
  aspect-ratio: 1/1;
  max-width: 95vw;
  max-height: 95vw;
  background-color: #475569;
  padding: 3px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  margin: 0 auto;
}

/* Tablet */
@media (min-width: 640px) {
    .game-grid {
        max-width: 600px;
        max-height: 600px;
        gap: 5px;
        padding: 6px;
        border-radius: 12px;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .game-grid {
        max-width: 800px;
        max-height: 800px;
        gap: 8px;
        padding: 10px;
        border-radius: 20px;
    }
}

/* desktop styles end */


.grid-cell {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.1s, box-shadow 0.1s;
  box-shadow: inset 0 1px 3px rgba(255,255,255,0.3), 0 1px 2px rgba(0,0,0,0.2);
  padding: 1px;
}

@media (min-width: 640px) {
    .grid-cell {
        border-radius: 8px;
        border: 2px solid rgba(0,0,0,0.1);
        padding: 2px;
    }
}

@media (min-width: 1024px) {
    .grid-cell {
        border-radius: 12px;
        border: 3px solid rgba(0,0,0,0.1);
        padding: 4px;
    }
    .grid-cell:hover {
        transform: translateY(-3px);
        z-index: 10;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }
}

.grid-cell.active {
  box-shadow: 0 0 0 2px #fbbf24, 0 0 10px #fbbf24;
  z-index: 20;
  transform: scale(1.02);
}
@media (min-width: 640px) {
    .grid-cell.active {
        box-shadow: 0 0 0 4px #fbbf24, 0 0 20px #fbbf24;
        transform: scale(1.05);
    }
}

.token-container {
  position: absolute;
  bottom: 0px;
  right: 0px;
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: flex-end;
  gap: 1px;
  max-width: 90%;
  pointer-events: none;
  z-index: 10;
}
@media (min-width: 640px) {
    .token-container {
        bottom: 2px;
        right: 2px;
        gap: 2px;
    }
}

.grid-center {
  grid-area: center;
  background-color: #1e293b;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.1rem;
  align-items: center;
  padding: 0.25rem;
  background-image: radial-gradient(circle at center, #334155 0%, #1e293b 100%);
  position: relative;
  overflow-y: auto;
  scrollbar-width: none; /* Firefox */
}
.grid-center::-webkit-scrollbar {
  display: none; /* Chrome/Safari */
}
@media (min-width: 640px) {
    .grid-center {
        border-radius: 12px;
        padding: 1rem;
        gap: 1rem;
    }
}

/* 3D Dice Responsive */
.dice-3d {
  width: 40px;
  height: 40px;
  transform-style: preserve-3d;
  transition: transform 1s;
}
@media (min-width: 640px) {
    .dice-3d {
        width: 60px;
        height: 60px;
    }
}
@media (min-width: 1024px) {
    .dice-3d {
        width: 80px;
        height: 80px;
    }
}

.rolling {
  animation: dice-roll 0.2s linear infinite;
}

@keyframes dice-roll {
  0% { transform: scale(1) rotate(0deg); }
  25% { transform: scale(1.2) rotate(45deg); }
  50% { transform: scale(1) rotate(90deg); }
  75% { transform: scale(1.2) rotate(135deg); }
  100% { transform: scale(1) rotate(180deg); }
}

.player-token {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  border: 1px solid white;
  box-shadow: 0 1px 2px rgba(0,0,0,0.5);
  transition: all 0.3s ease-out;
}
@media (min-width: 640px) {
    .player-token {
        width: 10px;
        height: 10px;
        border: 2px solid white;
    }
}
@media (min-width: 1024px) {
    .player-token {
        width: 14px;
        height: 14px;
    }
}

.wood-texture {
  background-image: linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
  background-size: 10px 10px;
}
@media (min-width: 640px) {
    .wood-texture {
        background-size: 20px 20px;
    }
}

/* User focused style overrides */
div#cell-x span, div#cell-w span, div#cell-v span, div#cell-u span {
    line-height: normal !important;
}
`;