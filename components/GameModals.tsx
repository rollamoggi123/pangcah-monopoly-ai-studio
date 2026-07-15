import React, { useState, useEffect } from 'react';
import { Edit3, X, Save, ImageIcon, UserCog, Trash2, Users, Plus, FileSpreadsheet, ExternalLink, Download, Wand2, Loader2, Type } from 'lucide-react';
import { DialogConfig, GridCellData, Player } from '../types';
import { PLAYER_COLORS } from '../constants';

export const Dialog: React.FC<DialogConfig> = ({ isOpen, title, message, onConfirm, onCancel, type = 'confirm' }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[60] p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-2xl scale-100 transform transition-all">
        <h3 className={`text-xl font-bold mb-2 ${type === 'danger' ? 'text-red-600' : 'text-slate-800'}`}>
            {title}
        </h3>
        <p className="text-slate-600 mb-6 leading-relaxed whitespace-pre-line">{message}</p>
        <div className="flex justify-end gap-3">
            {type !== 'alert' && onCancel && (
                <button 
                    onClick={onCancel} 
                    className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg font-medium transition-colors"
                >
                    取消
                </button>
            )}
            <button
                onClick={onConfirm}
                className={`px-4 py-2 rounded-lg text-white font-medium shadow-md transition-colors ${
                    type === 'danger' ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-600 hover:bg-blue-700'
                }`}
            >
                {type === 'alert' ? '知道了' : '確定'}
            </button>
        </div>
      </div>
    </div>
  );
};

interface InputModalProps {
    isOpen: boolean;
    title: string;
    defaultValue: string;
    placeholder?: string;
    onClose: () => void;
    onConfirm: (value: string) => void;
}

export const InputModal: React.FC<InputModalProps> = ({ isOpen, title, defaultValue, placeholder, onClose, onConfirm }) => {
    const [value, setValue] = useState(defaultValue);
    
    // Update local state when defaultValue changes (if modal reopens)
    useEffect(() => {
        setValue(defaultValue);
    }, [defaultValue, isOpen]);

    if (!isOpen) return null;

    return (
            <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[70] p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-2xl transform transition-all scale-100">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-slate-800">{title}</h3>
                    <button onClick={onClose} className="p-1 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                </div>
                
                <input 
                    className="w-full border-2 border-slate-200 rounded-xl p-3 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all text-lg mb-2"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder={placeholder}
                    autoFocus
                    onKeyDown={(e) => e.key === 'Enter' && onConfirm(value)}
                />
                <p className="text-xs text-slate-400 mb-6 text-right">按 Enter 儲存</p>

                <div className="flex justify-end gap-3">
                    <button onClick={onClose} className="px-4 py-2 text-slate-500 hover:bg-slate-100 rounded-lg font-medium transition-colors">取消</button>
                    <button onClick={() => onConfirm(value)} className="px-6 py-2 bg-blue-600 text-white rounded-lg font-bold shadow-md hover:bg-blue-700 transition-colors flex items-center gap-2">
                        <Save className="w-4 h-4" /> 儲存
                    </button>
                </div>
            </div>
            </div>
    );
};

interface EditModalProps {
    selectedCell: { id: string } & GridCellData;
    onClose: () => void;
    onSave: (id: string, data: Partial<GridCellData>) => void;
    onAiGenerate?: (label: string) => Promise<string | null>;
}

export const EditModal: React.FC<EditModalProps> = ({ selectedCell, onClose, onSave, onAiGenerate }) => {
  // Parsing helper to handle legacy label format "Amis (Chinese)"
  const parseInitial = (data: GridCellData) => {
      if (data.amis || data.chinese) return { amis: data.amis || '', chinese: data.chinese || '' };
      const parts = (data.label || '').split(/[\(（]/);
      return { 
          amis: parts[0]?.trim() || '', 
          chinese: parts[1] ? parts[1].replace(/[\)）]$/, '').trim() : '' 
      };
  };

  const initial = parseInitial(selectedCell);
  const [tempAmis, setTempAmis] = useState(initial.amis);
  const [tempChinese, setTempChinese] = useState(initial.chinese);
  const [tempSound, setTempSound] = useState(selectedCell.sound || '');
  const [tempColor, setTempColor] = useState(selectedCell.color || '#bae6fd');
  const [tempImage, setTempImage] = useState(selectedCell.image || '');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleAiClick = async () => {
    if (!onAiGenerate || !tempAmis) return;
    setIsGenerating(true);
    const result = await onAiGenerate(tempAmis);
    if (result) {
        setTempImage(result);
    }
    setIsGenerating(false);
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl overflow-y-auto max-h-[90vh]">
        <div className="flex justify-between items-center mb-4 border-b pb-3">
             <h3 className="text-xl font-bold flex items-center gap-2 text-slate-800">
                <Edit3 className="w-5 h-5 text-blue-600"/> 編輯格位: {selectedCell.id.toUpperCase()}
            </h3>
            <button onClick={onClose} className="p-1 hover:bg-slate-100 rounded-full transition-colors">
                <X className="w-5 h-5 text-slate-400" />
            </button>
        </div>
        
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">族語單字 (第一層)</label>
                <input 
                  value={tempAmis} 
                  onChange={e => setTempAmis(e.target.value)}
                  className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="例如: waco"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">中文意思 (第三層)</label>
                <input 
                  value={tempChinese} 
                  onChange={e => setTempChinese(e.target.value)}
                  className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="例如: 狗"
                />
              </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center justify-between">
                <span className="flex items-center gap-1"><ImageIcon className="w-4 h-4"/> 圖片連結 (第二層)</span>
                {onAiGenerate && (
                    <button 
                        onClick={handleAiClick}
                        disabled={isGenerating || !tempAmis}
                        className="text-xs flex items-center gap-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded shadow hover:opacity-90 disabled:opacity-50 transition-all"
                    >
                        {isGenerating ? <Loader2 className="w-3 h-3 animate-spin"/> : <Wand2 className="w-3 h-3"/>}
                        AI 生成
                    </button>
                )}
            </label>
            <input 
              value={tempImage} 
              onChange={e => setTempImage(e.target.value)}
              className="w-full border rounded-lg p-2 text-xs font-mono bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="https://... 或點擊上方按鈕生成"
            />
            {tempImage && (
                <div className="mt-2 w-full h-24 bg-gray-100 rounded flex items-center justify-center overflow-hidden border">
                    <img src={tempImage} alt="Preview" className="h-full object-contain" onError={(e) => (e.target as HTMLImageElement).src = 'https://placehold.co/400x300?text=Invalid+Image'}/>
                </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">背景顏色</label>
            <div className="flex gap-2 flex-wrap">
               {['#bae6fd', '#8d6e63', '#ffe8b3', '#fb8c00', '#e63946', '#f48fb1', '#66bb6a', '#ba68c8', '#fdd835', '#1e3a8a'].map(c => (
                   <button 
                      key={c}
                      onClick={() => setTempColor(c)}
                      className={`w-8 h-8 rounded-full border-2 transition-transform ${tempColor === c ? 'border-black scale-110 shadow-md' : 'border-transparent hover:scale-110'}`}
                      style={{backgroundColor: c}}
                   />
               ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">音檔連結 (MP3)</label>
            <input 
              value={tempSound} 
              onChange={e => setTempSound(e.target.value)}
              className="w-full border rounded-lg p-2 text-xs font-mono bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="https://..."
            />
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-3 pt-4 border-t">
          <button onClick={onClose} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">取消</button>
          <button onClick={() => onSave(selectedCell.id, { amis: tempAmis, chinese: tempChinese, label: `${tempAmis} (${tempChinese})`, color: tempColor, sound: tempSound, image: tempImage })} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2 shadow-sm transition-colors">
            <Save className="w-4 h-4"/> 儲存修改
          </button>
        </div>
      </div>
    </div>
  );
};

interface SentenceEditModalProps {
    sentence: string | any;
    index: number;
    onClose: () => void;
    onSave: (index: number, text: any) => void;
}

export const SentenceEditModal: React.FC<SentenceEditModalProps> = ({ sentence, index, onClose, onSave }) => {
  const [text, setText] = useState(typeof sentence === 'string' ? sentence : sentence.amis);
  const [chinese, setChinese] = useState(typeof sentence === 'string' ? '' : (sentence.chinese || ''));
  const [sound, setSound] = useState(typeof sentence === 'string' ? '' : (sentence.sound || ''));
  const [image, setImage] = useState(typeof sentence === 'string' ? '' : (sentence.image || ''));
  
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
           <Edit3 className="w-5 h-5 text-blue-600"/> 編輯句型 {index + 1}
        </h3>
        
        <div className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">族語 / 問句</label>
                <textarea value={text} onChange={e => setText(e.target.value)} className="w-full border rounded-lg p-3 h-24 text-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"/>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">中文意思</label>
                <input value={chinese} onChange={e => setChinese(e.target.value)} className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"/>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">音檔網址</label>
                <input value={sound} onChange={e => setSound(e.target.value)} className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"/>
            </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">取消</button>
          <button onClick={() => onSave(index, { amis: text, chinese, sound, image })} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">儲存</button>
        </div>
      </div>
    </div>
  );
};

interface PlayerListModalProps {
    players: Player[];
    onClose: () => void;
    onUpdatePlayers: (players: Player[]) => void;
    title?: string;
    confirmLabel?: string;
}

export const PlayerListModal: React.FC<PlayerListModalProps> = ({ players, onClose, onUpdatePlayers, title = "學生名單管理", confirmLabel = "儲存變更" }) => {
    const [editedPlayers, setEditedPlayers] = useState<Player[]>(players || []);
    const [newPlayerName, setNewPlayerName] = useState('');
    const [dialogState, setDialogState] = useState<DialogConfig>({ isOpen: false, title: '', message: '', type: 'confirm', data: null });
    
    const MAX_PLAYERS = 30;

    const handleNameChange = (index: number, val: string) => {
        const newArr = [...editedPlayers];
        newArr[index] = { ...newArr[index], name: val };
        setEditedPlayers(newArr);
    };

    const confirmDelete = (index: number) => {
        setDialogState({
            isOpen: true,
            title: '刪除玩家',
            message: `確定要刪除這位玩家 "${editedPlayers[index].name}" 嗎？`,
            type: 'danger',
            data: index
        });
    };

    const handleDelete = () => {
        const index = dialogState.data;
        const newArr = editedPlayers.filter((_, i) => i !== index);
        setEditedPlayers(newArr);
        setDialogState({ ...dialogState, isOpen: false });
    };

    const handleAdd = () => {
        if (!newPlayerName.trim()) return;
        
        if (editedPlayers.length >= MAX_PLAYERS) {
             setDialogState({
                isOpen: true,
                title: '人數上限',
                message: `為了遊戲體驗，最多只能新增 ${MAX_PLAYERS} 位玩家或隊伍！`,
                type: 'alert'
            });
            return;
        }

        const colorIndex = editedPlayers.length % PLAYER_COLORS.length;
        const newPlayer: Player = {
            id: `manual-${Date.now()}`,
            name: newPlayerName,
            color: PLAYER_COLORS[colorIndex].value,
            position: 0,
            score: 0
        };
        setEditedPlayers([...editedPlayers, newPlayer]);
        setNewPlayerName('');
    };

    const handleSave = async () => {
        if (editedPlayers.length === 0) {
            setDialogState({
                isOpen: true,
                title: '無法儲存',
                message: '請至少新增一位玩家！',
                type: 'alert'
            });
            return;
        }
        await onUpdatePlayers(editedPlayers);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl h-[80vh] flex flex-col">
                <div className="flex justify-between items-center mb-4 border-b pb-3">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                        <UserCog className="w-6 h-6 text-blue-600"/> {title} 
                        <span className="text-sm font-normal text-slate-500 ml-2">({editedPlayers.length}/{MAX_PLAYERS})</span>
                    </h3>
                     <button onClick={onClose} className="p-1 hover:bg-slate-100 rounded-full transition-colors">
                        <X className="w-5 h-5 text-slate-400" />
                    </button>
                </div>
                
                <div className="flex-1 overflow-y-auto space-y-3 p-1">
                    {editedPlayers.map((p, i) => (
                        <div key={p.id || i} className="flex items-center gap-2 bg-slate-50 p-2 rounded-lg border group hover:border-blue-200 transition-colors">
                            <div className="w-8 h-8 rounded-full flex-shrink-0 shadow-sm border-2 border-white" style={{backgroundColor: p.color}}></div>
                            <input 
                                className="flex-1 border-b border-transparent focus:border-blue-500 bg-transparent px-2 py-1 outline-none font-medium text-slate-700"
                                value={p.name}
                                onChange={(e) => handleNameChange(i, e.target.value)}
                                placeholder="輸入名字"
                            />
                            <button onClick={() => confirmDelete(i)} className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all opacity-0 group-hover:opacity-100 focus:opacity-100">
                                <Trash2 className="w-4 h-4"/>
                            </button>
                        </div>
                    ))}
                    {editedPlayers.length === 0 && (
                        <div className="flex flex-col items-center justify-center h-40 text-gray-400 border-2 border-dashed border-gray-200 rounded-xl">
                            <Users className="w-8 h-8 mb-2 opacity-50" />
                            <p>目前沒有玩家</p>
                            <p className="text-xs">請在下方新增</p>
                        </div>
                    )}
                </div>

                <div className="mt-4 pt-4 border-t space-y-3">
                    <div className="flex gap-2">
                        <input 
                            className="flex-1 border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200 transition-shadow"
                            placeholder="輸入新玩家名稱 (Enter)"
                            value={newPlayerName}
                            onChange={e => setNewPlayerName(e.target.value)}
                            onKeyDown={e => e.key === 'Enter' && handleAdd()}
                            disabled={editedPlayers.length >= MAX_PLAYERS}
                        />
                        <button 
                            onClick={handleAdd} 
                            className={`p-2 rounded-lg shadow-sm transition-colors text-white ${editedPlayers.length >= MAX_PLAYERS || !newPlayerName.trim() ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'}`}
                            disabled={!newPlayerName.trim() || editedPlayers.length >= MAX_PLAYERS}
                        >
                            <Plus className="w-5 h-5"/>
                        </button>
                    </div>

                    <div className="flex justify-end gap-3">
                        <button onClick={onClose} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">取消</button>
                        <button onClick={handleSave} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2 shadow-sm transition-colors">
                            <Save className="w-4 h-4"/> {confirmLabel}
                        </button>
                    </div>
                </div>
            </div>
            
            <Dialog 
                isOpen={dialogState.isOpen}
                title={dialogState.title}
                message={dialogState.message}
                type={dialogState.type}
                onConfirm={dialogState.type === 'alert' ? () => setDialogState({...dialogState, isOpen: false}) : handleDelete}
                onCancel={() => setDialogState({...dialogState, isOpen: false})}
            />
        </div>
    );
};

interface SheetImportModalProps {
    onClose: () => void;
    onImport: (sheetId: string, customName?: string) => void;
}

export const SheetImportModal: React.FC<SheetImportModalProps> = ({ onClose, onImport }) => {
    const [sheetInput, setSheetInput] = useState('https://docs.google.com/spreadsheets/d/1gNgLNGlGNJ1kr2-0413KKcZjLSQF0d3ay-UiQMrnzfw/edit?gid=1781675041#gid=1781675041');
    const [customName, setCustomName] = useState('');

    const handleDownloadTemplate = () => {
        const csvContent = 
`id,amis,chinese,image,sound,color
TITLE,Google Sheets 自訂主題範例,,,,
SENTENCES,O maan konini? (這是什麼?)|Mafana' kiso to nini? (你知道這個嗎?)|Samanen ko ngiha' nonini? (這個怎麼叫?),,,,
DICE,ira ko...|ira ko...|ira ko...,,,,
a,waco,狗,https://res.cloudinary.com/dm1ksvptk/image/upload/v1766833615/1_cecay_pwaqo9.jpg,,#bae6fd
b,posi,貓,,,#ffe8b3
c,foting,魚,,,#fb8c00
d,ekong,貓頭鷹,,,#bae6fd
e,'ayam,鳥,,,#ffe8b3
f,kolong,牛,,,#e63946
g,siri,羊,,,#f48fb1
h,fafoy,豬,,,#bae6fd
i,lotong,猴子,,,#f48fb1
j,kacing,牛/大型動物,,,#66bb6a
o,takora',青蛙,,,#ba68c8
p,karang,螃蟹,,,#e63946
q,solita,章魚,,,#ba68c8
r,'ao',蝦子,,,#ffe8b3
s,alilis,老鷹,,,#ba68c8
t,kakahong,蒼蠅,,,#e63946
u,lalang,蚊子,,,#ffe8b3
v,adad,蟬,,,#fdd835
w,fao,蟲,,,#e63946
x,cowa kafana',不知道,,,#ffe8b3`;
        
        // Add BOM (\uFEFF) to make Excel recognize UTF-8
        const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "monopoly_amis_template.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleImport = () => {
        let id = sheetInput.trim();
        const match = id.match(/\/d\/([a-zA-Z0-9-_]+)/);
        if (match && match[1]) {
            id = match[1];
        }
        if(!id) return;
        onImport(id, customName.trim());
    };

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-6 w-full max-w-lg shadow-2xl">
                <div className="flex justify-between items-center mb-4 border-b pb-3">
                    <h3 className="text-xl font-bold flex items-center gap-2 text-green-700">
                        <FileSpreadsheet className="w-6 h-6"/> 匯入 Google Sheets
                    </h3>
                    <button onClick={onClose} className="p-1 hover:bg-slate-100 rounded-full transition-colors">
                        <X className="w-5 h-5 text-slate-400" />
                    </button>
                </div>

                <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-100 text-sm text-green-800">
                        <p className="font-bold mb-2">如何使用：</p>
                        <ol className="list-decimal pl-4 space-y-1">
                            <li>建立 Google Sheet (或使用下方範本)。</li>
                            <li><strong>第一列欄位需為</strong>：<code>id, amis, chinese, image, sound, color</code>。</li>
                            <li><strong>特殊 ID</strong>：<code>TITLE</code> (標題), <code>SENTENCES</code> (句型, 用|分隔)。</li>
                            <li><strong>共用設定</strong>：請將試算表設為「知道連結的使用者都能查看」。</li>
                        </ol>
                        
                        <div className="mt-3 flex items-center gap-2">
                             <button 
                                onClick={handleDownloadTemplate}
                                className="inline-flex items-center gap-1 text-white bg-green-600 hover:bg-green-700 px-3 py-1.5 rounded text-xs font-bold transition-colors shadow-sm"
                            >
                                <Download className="w-3 h-3"/> 下載新版範本
                            </button>
                             <span className="text-[10px] text-green-600/70">
                                 (支援 族語 -&gt; 圖片 -&gt; 中文 三段式翻牌)
                             </span>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Google Sheet ID 或 完整連結</label>
                        <input 
                            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500 font-mono text-sm"
                            placeholder="貼上網址，例如: https://docs.google.com/spreadsheets/d/..."
                            value={sheetInput}
                            onChange={e => setSheetInput(e.target.value)}
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            課程名稱 <span className="text-xs text-gray-500 font-normal">(選填，若填寫將忽略檔案內的 TITLE)</span>
                        </label>
                        <input 
                            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500 text-sm"
                            placeholder="若空白則讀取 Google Sheet 內的 TITLE"
                            value={customName}
                            onChange={e => setCustomName(e.target.value)}
                        />
                    </div>
                </div>

                <div className="mt-6 flex justify-end gap-3">
                    <button onClick={onClose} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">取消</button>
                    <button 
                        onClick={handleImport} 
                        disabled={!sheetInput.trim()}
                        className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2 shadow-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <FileSpreadsheet className="w-4 h-4"/> 開始匯入
                    </button>
                </div>
            </div>
        </div>
    );
};

interface StudentListModalProps {
    students: string[];
    onClose: () => void;
    onUpdateStudents: (students: string[]) => void;
}

export const StudentListModal: React.FC<StudentListModalProps> = ({ students, onClose, onUpdateStudents }) => {
    const [text, setText] = useState(students.join('\n'));
    const [tab, setTab] = useState<'attendance' | 'text'>('attendance');

    const handleSave = () => {
        const newStudents = text.split('\n').map(s => s.trim()).filter(s => s);
        onUpdateStudents(newStudents);
        onClose();
    };

    const toggleAttendance = (idx: number) => {
        const lines = text.split('\n').filter(s => s.trim() !== '');
        let target = lines[idx];
        if (target.includes('[請假]')) {
            target = target.replace(' [請假]', '');
        } else {
            target = target + ' [請假]';
        }
        lines[idx] = target;
        setText(lines.join('\n'));
    };

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl flex flex-col">
                <div className="flex justify-between items-center mb-4 border-b pb-3">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                        <Users className="w-6 h-6 text-blue-600"/> 學生與點名
                    </h3>
                    <div className="flex bg-gray-100 p-1 rounded-lg ml-auto mr-2">
                       <button onClick={() => setTab('attendance')} className={`px-3 py-1 text-sm rounded-md font-bold ${tab === 'attendance' ? 'bg-white shadow text-blue-600' : 'text-gray-500'}`}>點名</button>
                       <button onClick={() => setTab('text')} className={`px-3 py-1 text-sm rounded-md font-bold ${tab === 'text' ? 'bg-white shadow text-blue-600' : 'text-gray-500'}`}>匯入</button>
                    </div>
                     <button onClick={onClose} className="p-1 hover:bg-slate-100 rounded-full transition-colors">
                        <X className="w-5 h-5 text-slate-400" />
                    </button>
                </div>
                
                <div className="flex-1 space-y-3 p-1 flex flex-col min-h-[250px]">
                    {tab === 'text' ? (
                        <>
                            <p className="text-sm text-gray-600">請貼上學生名單，每行一位學生：</p>
                            <textarea 
                                className="w-full border rounded-lg p-3 h-52 text-sm focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                                value={text}
                                onChange={e => setText(e.target.value)}
                                placeholder="王小明&#10;李小華&#10;張小美"
                            />
                            <button
                                onClick={() => setText([
                                    "顏語瑄\t秀姑巒阿美語",
                                    "李晨駿\t秀姑巒阿美語",
                                    "張品喆\t秀姑巒阿美語",
                                    "曾旻葳\t秀姑巒阿美語",
                                    "王千伃\t秀姑巒阿美語",
                                    "楊鈞凱\t秀姑巒阿美語",
                                    "吳詩潔\t海岸阿美語",
                                    "王巧妃\t海岸阿美語",
                                    "李坪垣\t海岸阿美語",
                                    "李宸宇\t海岸阿美語",
                                    "林貴美\t海岸阿美語",
                                    "楊莉雯\t海岸阿美語",
                                    "李和惠\t秀姑巒阿美語",
                                    "游秀英\t海岸阿美語",
                                    "姜呈穎\t馬蘭阿美語",
                                    "陽書恆\t馬蘭阿美語",
                                    "楊睿峿\t馬蘭阿美語",
                                    "楊曼汝\t南勢阿美語",
                                    "蘇嘉慧\t南勢阿美語"
                                ].join('\n'))}
                                className="w-full py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 text-sm font-semibold transition-colors"
                            >
                                一鍵導入「師大阿美語基礎班」
                            </button>
                        </>
                    ) : (
                        <div className="flex-1 overflow-y-auto max-h-[300px] border rounded-lg p-1">
                            {text.trim() === '' ? (
                                <div className="text-center text-gray-400 py-10 text-sm">請先切換至「匯入」加入學生名單</div>
                            ) : (
                                text.split('\n').filter(s => s.trim() !== '').map((line, idx) => {
                                    const isAbsent = line.includes('[請假]');
                                    const name = line.replace(' [請假]', '').split('\t')[0];
                                    return (
                                        <div key={idx} className="flex justify-between items-center p-2 border-b last:border-0 hover:bg-slate-50 transition-colors">
                                            <span className={`font-bold ${isAbsent ? 'text-gray-400 line-through' : 'text-slate-700'}`}>{name}</span>
                                            <button 
                                                onClick={() => toggleAttendance(idx)}
                                                className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${isAbsent ? 'bg-red-100 text-red-600 hover:bg-red-200' : 'bg-green-100 text-green-600 hover:bg-green-200'}`}
                                            >
                                                {isAbsent ? '缺席' : '出席'}
                                            </button>
                                        </div>
                                    )
                                })
                            )}
                        </div>
                    )}
                </div>

                <div className="mt-6 flex justify-end gap-3 pt-4 border-t">
                    <button onClick={onClose} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">取消</button>
                    <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2 shadow-sm transition-colors">
                        <Save className="w-4 h-4"/> 儲存名單
                    </button>
                </div>
            </div>
        </div>
    );
};

interface StudentPickerModalProps {
    studentName: string;
    dialect?: string;
    callCount?: number;
    onClose: () => void;
}

export const StudentPickerModal: React.FC<StudentPickerModalProps> = ({ studentName, dialect, callCount = 1, onClose }) => {
    const [countdown, setCountdown] = useState(3);
    const [showResult, setShowResult] = useState(false);

    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            setShowResult(true);
            // Play sound effect
            const audio = new Audio('https://actions.google.com/sounds/v1/crowds/crowd_cheering.ogg');
            audio.play().catch(e => console.log('Audio play failed:', e));
        }
    }, [countdown]);

    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[70] p-4 animate-in fade-in duration-300">
            <div className="bg-white rounded-3xl p-8 w-full max-w-lg shadow-2xl flex flex-col items-center text-center transform transition-all scale-100 relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
                    <div className="absolute top-0 -right-10 w-40 h-40 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute -bottom-10 left-20 w-40 h-40 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '4s' }}></div>
                </div>

                {!showResult ? (
                    <div className="flex flex-col items-center justify-center h-64 z-10">
                        <h2 className="text-3xl font-bold text-slate-700 mb-8">準備抽出幸運兒...</h2>
                        <div className="text-8xl font-black text-blue-600 animate-bounce">
                            {countdown}
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center h-64 z-10 animate-in zoom-in duration-500">
                        <h2 className="text-2xl font-bold text-slate-500 mb-4">🎉 抽中學生 🎉</h2>
                        <div className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mb-4 drop-shadow-lg leading-tight py-2">
                            {studentName}
                        </div>
                        {dialect && dialect !== "預設" && (
                            <div className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-lg font-bold mb-4">
                                {dialect}
                            </div>
                        )}
                        {callCount > 1 && (
                            <div className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-md font-bold mb-4 animate-pulse">
                                ⚠️ 提醒老師：這名學生已是第 {callCount} 次被點到
                            </div>
                        )}
                        <p className="text-lg text-slate-600 mb-8 font-medium">請這位同學準備開口練習！</p>
                        <button onClick={onClose} className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:from-blue-700 hover:to-indigo-700 font-bold text-lg shadow-lg transition-all transform hover:scale-105">
                            確定
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};