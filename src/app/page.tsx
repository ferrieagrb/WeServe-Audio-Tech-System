'use client';

import { useState, useEffect } from 'react';
import { useAuth, UserRole } from '@/context/AuthContext';
import { useApp, ExtendedChecklistItem, InventoryItem, InventoryStatus, RemarkEntry, ScheduleSession, CategoryColor } from '@/context/ChecklistContext';
import LoginPage from '@/components/LoginPage';

import { 
  CheckCircle2, 
  Circle, 
  Trash2, 
  Plus, 
  RotateCcw, 
  X, 
  RefreshCw, 
  MessageSquare, 
  UserCheck, 
  ShieldCheck, 
  UserPlus, 
  LogOut,
  Users,
  Box,
  CheckSquare,
  Check,
  History,
  Calendar,
  Clock,
  FileText,
  Key,
  Pencil
} from 'lucide-react';

export const COLOR_MAP: Record<CategoryColor, { bg: string; text: string; border: string; dot: string }> = {
  blue: { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-500', dot: 'bg-blue-500' },
  green: { bg: 'bg-emerald-100', text: 'text-emerald-800', border: 'border-emerald-500', dot: 'bg-emerald-500' },
  amber: { bg: 'bg-amber-100', text: 'text-amber-800', border: 'border-amber-500', dot: 'bg-amber-500' },
  red: { bg: 'bg-rose-100', text: 'text-rose-800', border: 'border-rose-500', dot: 'bg-rose-500' },
  purple: { bg: 'bg-purple-100', text: 'text-purple-800', border: 'border-purple-500', dot: 'bg-purple-500' },
  slate: { bg: 'bg-slate-100', text: 'text-slate-800', border: 'border-slate-400', dot: 'bg-slate-400' },
};

export default function ChecklistPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { currentUser, logout, addAdminAccount, deleteAdminAccount, updateUserRole, deleteUserAccount, users, enable2FA, disable2FA } = useAuth();
  const { 
    checklist, 
    toggleCheck, 
    addChecklistItem, 
    deleteChecklistItem, 
    resetAllChecklist, 
    generateSundayChecklistFromInventory,
    updateTaskDetails,
    resolveTask,
    approveStatusRequest,
    resolveRemarkEntry,
    inventory,
    addInventoryItem,
    editInventoryItem,
    deleteInventoryItem,
    updateInventoryStatus,
    schedules,
    activeScheduleId,
    setActiveScheduleId,
    addScheduleSession,
    deleteScheduleSession,
    submitScheduleChecklist
  } = useApp();

  const [activeTab, setActiveTab] = useState<'checklist' | 'inventory' | 'schedules'>('checklist'); 

  // Modal States
  const [isAddModalOpen, setIsAddModalOpen] = useState(false); 
  const [isAddInventoryModalOpen, setIsAddInventoryModalOpen] = useState(false); 
  const [editingInventoryItem, setEditingInventoryItem] = useState<InventoryItem | null>(null);
  const [isManageAdminsOpen, setIsManageAdminsOpen] = useState(false); 
  const [isAddScheduleModalOpen, setIsAddScheduleModalOpen] = useState(false);
  const [is2FAModalOpen, setIs2FAModalOpen] = useState(false);
  const [selectedSummarySession, setSelectedSummarySession] = useState<ScheduleSession | null>(null);

  // Form States - Checklist
  const [newGearName, setNewGearName] = useState(''); 
  const [newCategory, setNewCategory] = useState('Microphone'); 

  // Form States - Add Inventory
  const [invName, setInvName] = useState('');
  const [invCategory, setInvCategory] = useState('Microphone'); 
  const [invLocation, setInvLocation] = useState(''); 
  const [invColor, setInvColor] = useState<CategoryColor>('blue');

  // Form States - Edit Inventory
  const [editName, setEditName] = useState('');
  const [editLocation, setEditLocation] = useState('');
  const [editColor, setEditColor] = useState<CategoryColor>('blue');

  // Form States - Admins / Accounts
  const [adminName, setAdminName] = useState(''); 
  const [adminEmail, setAdminEmail] = useState(''); 
  const [adminPassword, setAdminPassword] = useState('');
  const [adminRole, setAdminRole] = useState<UserRole>('admin');

  // Form States - Schedule
  const [schedUserId, setSchedUserId] = useState('');
  const [schedDate, setSchedDate] = useState('');
  const [schedStartTime, setSchedStartTime] = useState('');
  const [schedEndTime, setSchedEndTime] = useState('');

  // Task / Inventory Remarks Modal State
  const [selectedTask, setSelectedTask] = useState<ExtendedChecklistItem | InventoryItem | null>(null); 
  const [remarksInput, setRemarksInput] = useState(''); 
  const [adminNoteInput, setAdminNoteInput] = useState('');
  const [statusReqInput, setStatusReqInput] = useState<InventoryStatus | ''>(''); 

  if (!mounted) return null;
  if (!currentUser) return <LoginPage />;

  const userRole = currentUser.role; 
  const userName = currentUser.name; 

  const isSuperadmin = userRole === 'superadmin'; 
  const isAdmin = userRole === 'admin' || isSuperadmin; 
  const isVolunteer = userRole === 'volunteer'; 

  const resetRemarksForm = () => {
    setRemarksInput('');
    setAdminNoteInput('');
    setStatusReqInput('');
  };

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGearName.trim()) return;
    addChecklistItem(newGearName.trim(), newCategory, userRole);
    setNewGearName('');
    setNewCategory('Microphone');
    setIsAddModalOpen(false);
  };

  const handleAddInventory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!invName.trim()) return;
    addInventoryItem(invName.trim(), invCategory, invLocation.trim(), userRole, invColor); 
    setInvName('');
    setInvCategory('Microphone');
    setInvLocation('');
    setInvColor('blue');
    setIsAddInventoryModalOpen(false);
  };

  const openEditInventoryModal = (item: InventoryItem) => {
    setEditingInventoryItem(item);
    setEditName(item.name);
    setEditLocation(item.location || '');
    setEditColor((item.categoryColor as CategoryColor) || 'blue');
  };

  const handleEditInventory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingInventoryItem || !editName.trim()) return;
    editInventoryItem(editingInventoryItem.id, editName.trim(), editLocation.trim(), editColor, userRole);
    setEditingInventoryItem(null);
  };

  const handleCreateAdmin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!adminName.trim() || !adminEmail.trim() || !adminPassword.trim()) return;
    
    addAdminAccount(adminName.trim(), adminEmail.trim(), adminPassword.trim()); 
    
    const createdUser = users.find((u) => u.email === adminEmail.trim());
    if (createdUser && adminRole !== 'admin' && updateUserRole) {
      updateUserRole(createdUser.id, adminRole);
    }

    setAdminName('');
    setAdminEmail('');
    setAdminPassword('');
    setAdminRole('admin');
  };

  const handleAddSchedule = (e: React.FormEvent) => {
    e.preventDefault();
    const targetUser = users.find(u => u.id === schedUserId) || { id: 'usr_volunteer', name: 'Volunteer User' };
    if (!schedDate || !schedStartTime || !schedEndTime) return;
    addScheduleSession(targetUser.id, targetUser.name, schedDate, schedStartTime, schedEndTime, userRole);
    setSchedUserId('');
    setSchedDate('');
    setSchedStartTime('');
    setSchedEndTime('');
    setIsAddScheduleModalOpen(false);
  };

  const openTaskModal = (item: ExtendedChecklistItem | InventoryItem) => {
    setSelectedTask(item);
    resetRemarksForm();
  };

  const handleSaveTaskDetails = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTask) return;

    if (activeTab === 'checklist') {
      if (!remarksInput.trim() || !statusReqInput) {
        return;
      }
    }

    const finalRemark = adminNoteInput.trim()
      ? `${remarksInput ? `${remarksInput} | ` : ''}[Admin Note]: ${adminNoteInput.trim()}`
      : remarksInput;

    if ('isChecked' in selectedTask) {
      updateTaskDetails(
        selectedTask.id,
        finalRemark,
        statusReqInput ? statusReqInput : undefined,
        { name: userName, role: userRole }
      );
    } else {
      if (isAdmin && statusReqInput) {
        updateInventoryStatus(selectedTask.id, statusReqInput, userRole);
      }
      updateTaskDetails(
        selectedTask.id,
        finalRemark,
        statusReqInput ? statusReqInput : undefined,
        { name: userName, role: userRole }
      );
    }

    resetRemarksForm();
    setSelectedTask(null);
  };

  const handleAdminResolve = () => {
    if (!selectedTask) return;
    resolveTask(selectedTask.id);
    resetRemarksForm();
    setSelectedTask(null);
  };

  const completedCount = checklist.filter((i) => i.isChecked).length; 

  const getInventoryRemarksHistory = (invItem: InventoryItem): RemarkEntry[] => {
    const entries: RemarkEntry[] = [];

    if (Array.isArray(invItem.notes)) {
      entries.push(...invItem.notes);
    } else if (typeof invItem.notes === 'string' && (invItem.notes as string).trim()) {
      entries.push({
        id: `legacy_${invItem.id}`,
        author: 'System Note',
        role: 'admin',
        text: invItem.notes as string,
        createdAt: 'Initial Note',
      });
    }

    checklist.forEach((task) => {
      const matchesId = 'inventoryItemId' in task && task.inventoryItemId === invItem.id;
      const matchesName = task.gearName.toLowerCase().includes(invItem.name.toLowerCase()) || 
                          invItem.name.toLowerCase().includes(task.gearName.toLowerCase());

      if (matchesId || matchesName) {
        if (task.remarksHistory && task.remarksHistory.length > 0) {
          entries.push(...task.remarksHistory);
        } else if (task.remarks) {
          entries.push({
            id: task.id,
            author: 'Volunteer / Admin',
            role: 'volunteer',
            text: task.remarks,
            createdAt: 'Previous Entry',
            requestedStatus: task.requestedStatus,
          });
        }
      }
    });

    return entries.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
  };

  const activeSchedule = schedules.find(s => s.id === activeScheduleId && s.userId === currentUser?.id && !s.isCompleted);
  const isChecklistFormInvalid = activeTab === 'checklist' && (!remarksInput.trim() || !statusReqInput);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* HEADER */}
      <header className="bg-white border-b border-slate-200 px-4 py-3">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="https://church.victory.org.ph/assets/images/victory-logo.png" alt="Victory Logo" className="h-9 w-auto" />
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
              isSuperadmin 
                ? 'bg-purple-100 text-purple-700 border border-purple-200' 
                : isAdmin 
                ? 'bg-indigo-100 text-indigo-700 border border-indigo-200' 
                : 'bg-emerald-100 text-emerald-700 border border-emerald-200'
            }`}>
              {userRole}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIs2FAModalOpen(true)}
              className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors"
            >
              <Key className="w-3.5 h-3.5" />
              <span>2FA {currentUser.twoFactorEnabled ? '(Enabled)' : '(Disabled)'}</span>
            </button>

            {isSuperadmin && (
              <button
                onClick={() => setIsManageAdminsOpen(true)}
                className="bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-sm transition-colors"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Manage Accounts</span>
              </button>
            )}
            <span className="text-xs text-slate-600 hidden sm:inline">{userName}</span>
            <button
              onClick={logout}
              className="text-slate-400 hover:text-red-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
              title="Sign Out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>
            
      <main className="max-w-4xl mx-auto p-4 sm:p-6">
        {/* TABS */}
        <div className="pb-5 text-center">
          <span className="font-bold text-2xl font-roboto">Audio Tech Ministry</span>
        </div>
        <div className="flex bg-slate-200 p-1 rounded-xl mb-6">
          <button
            onClick={() => setActiveTab('checklist')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition-all ${
              activeTab === 'checklist' 
                ? 'bg-white text-slate-900 shadow-sm' 
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <CheckSquare className="w-4 h-4" />
            <span>Checklist</span>
          </button>
          <button
            onClick={() => setActiveTab('inventory')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition-all ${
              activeTab === 'inventory' 
                ? 'bg-white text-slate-900 shadow-sm' 
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Box className="w-4 h-4" />
            <span>Inventory</span>
          </button>
          <button
            onClick={() => setActiveTab('schedules')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition-all ${
              activeTab === 'schedules' 
                ? 'bg-white text-slate-900 shadow-sm' 
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Schedules ({schedules.length})</span>
          </button>
        </div>

        {/* TAB 1: SUNDAY CHECKLIST */}
        {activeTab === 'checklist' && (
          <>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div>
                <h1 className="text-2xl font-roboto font-bold">Service Checklist</h1>
                <p className="text-sm text-slate-500">
                  {activeSchedule ? `Active Session: ${activeSchedule.userName} (${activeSchedule.date} | ${activeSchedule.startTime} - ${activeSchedule.endTime})` : 'Service Checklist / Inventory'}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {isAdmin && (
                  <>
                    <button
                      onClick={() => generateSundayChecklistFromInventory(userRole)}
                      className="bg-slate-800 text-white p-2 rounded-lg text-sm font-semibold hover:bg-slate-900 flex items-center shadow-sm"
                      title="Sync from Inventory"
                    >
                      <RefreshCw className="w-4 h-4 mr-1" /> Sync
                    </button>
                    <button
                      onClick={() => resetAllChecklist(userRole)}
                      className="bg-white border border-slate-300 text-slate-700 p-2 rounded-lg text-sm font-semibold hover:bg-slate-100 flex items-center shadow-sm"
                    >
                      <RotateCcw className="w-4 h-4 mr-1" /> Reset
                    </button>
                    <button
                      onClick={() => setIsAddModalOpen(true)}
                      className="bg-indigo-600 text-white px-3 py-2 rounded-lg text-sm font-semibold flex items-center hover:bg-indigo-700 shadow-sm"
                    >
                      <Plus className="w-4 h-4 mr-1" /> Add Task
                    </button>
                  </>
                )}
                {isVolunteer && (
                  <div className="flex items-center text-emerald-700 text-xs bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 font-semibold">
                    <UserCheck className="w-3.5 h-3.5 mr-1" /> Volunteer View
                  </div>
                )}
              </div>
            </div>

            {activeSchedule && (
              <div className="bg-indigo-50 border border-indigo-200 p-3 rounded-xl mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span className="text-xs font-semibold text-indigo-900">
                    Scheduled for {activeSchedule.userName} on {activeSchedule.date} ({activeSchedule.startTime} - {activeSchedule.endTime})
                  </span>
                </div>
                <button
                  onClick={() => submitScheduleChecklist(activeSchedule.id)}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm shrink-0"
                >
                  Submit & Reset
                </button>
              </div>
            )}

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm mb-6">
              <div className="flex justify-between text-sm font-semibold mb-2">
                <span className="text-slate-800">Progress</span>
                <span className="text-slate-600">
                  {completedCount} / {checklist.length} Completed
                </span>
              </div>

              <div className="w-full bg-slate-100 h-2.5 rounded-full ring-1 ring-slate-300 ring-offset-1 overflow-hidden">
                <div
                  className="bg-green-600 h-full transition-all duration-300"
                  style={{
                    width: checklist.length
                      ? `${(completedCount / checklist.length) * 100}%`
                      : '0%',
                  }}
                />
              </div>
            </div>

            <div className="space-y-3">
              {checklist.length === 0 ? (
                <div className="text-center p-8 bg-white rounded-xl border border-dashed text-slate-400">
                  No tasks in the checklist.
                </div>
              ) : (
                checklist.map((item) => {
                  const matchedInv = inventory.find(
                    (inv) => inv.id === item.inventoryItemId || inv.name.toLowerCase() === item.gearName.toLowerCase()
                  );
                  const itemColor = (matchedInv?.categoryColor as CategoryColor) || 'slate';
                  const colorStyle = COLOR_MAP[itemColor];

                  return (
                    <div
                      key={item.id}
                      className={`p-4 rounded-xl border border-l-4 ${colorStyle.border} shadow-sm transition-colors ${
                        item.isChecked ? 'bg-green-50/70 border-green-200 border-l-4 ' + colorStyle.border : 'bg-white border-l-4 ' + colorStyle.border
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => toggleCheck(item.id, userRole)}
                          className="flex items-center space-x-3 flex-1 text-left cursor-pointer focus:outline-none"
                        >
                          {item.isChecked ? (
                            <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0" />
                          ) : (
                            <Circle className="w-6 h-6 text-slate-300 shrink-0" />
                          )}
                          <div>
                            <p className={`font-semibold text-sm ${item.isChecked ? 'line-through text-slate-400' : 'text-slate-800'}`}>
                              {item.gearName}
                            </p>
                            <div className="flex items-center gap-1.5 mt-0.5">
                              <span className={`text-[10px] px-2 py-0.5 rounded font-semibold ${colorStyle.bg} ${colorStyle.text}`}>
                                {item.category}
                              </span>
                              {matchedInv && (
    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
      matchedInv.status === 'available' ? 'bg-emerald-100 text-emerald-700' :
      matchedInv.status === 'in_use' ? 'bg-blue-100 text-blue-700' :
      matchedInv.status === 'needs_repair' ? 'bg-amber-100 text-amber-700' :
      'bg-red-100 text-red-700'
    }`}>
      {matchedInv.status.replace('_', ' ')}
    </span>
  )}
                            </div>
                            
                          </div>
                        </button>

                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => openTaskModal(item)}
                            className="text-slate-400 hover:text-indigo-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
                            title="Remarks / Notes"
                          >
                            <MessageSquare className="w-4 h-4" />
                          </button>

                          {isAdmin && (
                            <button
                              onClick={() => deleteChecklistItem(item.id, userRole)}
                              className="text-slate-400 hover:text-red-600 p-1.5 rounded hover:bg-red-50 transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </>
        )}

        {/* TAB 2: MASTER INVENTORY */}
        {activeTab === 'inventory' && (
          <>
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold">Master Inventory</h1>
                <p className="text-sm text-slate-500">Equipment status, color categories, and consolidated remarks</p>
              </div>

              {isAdmin && (
                <button
                  onClick={() => setIsAddInventoryModalOpen(true)}
                  className="bg-indigo-600 text-white px-3 py-2 rounded-lg text-sm font-semibold flex items-center hover:bg-indigo-700 shadow-sm"
                >
                  <Plus className="w-4 h-4 mr-1" /> Add Equipment
                </button>
              )}
            </div>

            <div className="space-y-3">
              {inventory.length === 0 ? (
                <div className="text-center p-8 bg-white rounded-xl border border-dashed text-slate-400">
                  No inventory items recorded.
                </div>
              ) : (
                inventory.map((item) => {
                  const remarksHistory = getInventoryRemarksHistory(item);
                  
                  // Updated isItemResolved definition to correctly bypass resolution suppression when item needs repair or is broken
                  const isItemResolved = 
                    (item.status !== 'needs_repair' && item.status !== 'broken' && item.status === 'available') && 
                    !checklist.some(
                      (task) => 
                        (task.inventoryItemId === item.id || task.gearName.toLowerCase().includes(item.name.toLowerCase())) && 
                        !task.isResolved
                    );

                  const activeRemarks = remarksHistory.filter(r => r.isPendingResolution !== false);
                  const hasActiveRemarks = activeRemarks.length > 0;
                  const needsAction = item.status === 'needs_repair' || item.status === 'broken';

                  const colorStyle = COLOR_MAP[(item.categoryColor as CategoryColor) || 'slate'];

                  return (
                    <div key={item.id} className={`p-4 bg-white rounded-xl border border-l-4 ${colorStyle.border} shadow-sm space-y-2`}>
                      <div className="flex items-center justify-between gap-3">
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-semibold text-sm text-slate-800">{item.name}</span>
                            <span className={`text-[10px] px-2 py-0.5 rounded-md font-semibold ${colorStyle.bg} ${colorStyle.text}`}>
                              {item.category}
                            </span>
                            {hasActiveRemarks && (
                              needsAction ? (
                                <span className="text-[10px] px-2 py-0.5 bg-rose-100 text-rose-800 rounded-md font-semibold flex items-center gap-1 border border-rose-200">
                                  <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-pulse"></span>
                                  Action Needed ({activeRemarks.length})
                                </span>
                              ) : (
                                <span className="text-[10px] px-2 py-0.5 bg-blue-100 text-blue-800 rounded-md font-semibold flex items-center gap-1 border border-blue-200">
                                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                                  New Remark ({activeRemarks.length})
                                </span>
                              )
                            )}
                          </div>
                          <p className="text-xs text-slate-400">Location: {item.location || 'Main Closet'}</p>
                        </div>

                        <div className="flex items-center gap-1.5">
                          {isAdmin ? (
                            <select
                              value={item.status}
                              onChange={(e) => updateInventoryStatus(item.id, e.target.value as InventoryStatus, userRole)}
                              className={`text-xs px-2.5 py-1 rounded-lg border font-semibold outline-none bg-white cursor-pointer ${
                                item.status === 'available' ? 'border-emerald-300 text-emerald-700 bg-emerald-50' :
                                item.status === 'in_use' ? 'border-blue-300 text-blue-700 bg-blue-50' :
                                item.status === 'needs_repair' ? 'border-amber-300 text-amber-700 bg-amber-50' :
                                'border-red-300 text-red-700 bg-red-50'
                              }`}
                            >
                              <option value="available">Available</option>
                              <option value="in_use">In Use</option>
                              <option value="needs_repair">Needs Repair</option>
                              <option value="broken">Broken</option>
                            </select>
                          ) : (
                            <span className={`text-xs px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                              item.status === 'available' ? 'bg-emerald-100 text-emerald-700' :
                              item.status === 'in_use' ? 'bg-blue-100 text-blue-700' :
                              item.status === 'needs_repair' ? 'bg-amber-100 text-amber-700' :
                              'bg-red-100 text-red-700'
                            }`}>
                              {item.status.replace('_', ' ')}
                            </span>
                          )}

                          {isAdmin && (
                            <button
                              onClick={() => openEditInventoryModal(item)}
                              className="text-slate-400 hover:text-indigo-600 p-1.5 rounded hover:bg-indigo-50 transition-colors"
                              title="Edit Equipment Details"
                            >
                              <Pencil className="w-4 h-4" />
                            </button>
                          )}

                          <button
                            onClick={() => openTaskModal(item)}
                            className={`relative p-1.5 rounded-lg transition-colors ${
                              hasActiveRemarks 
                                ? (needsAction ? 'text-rose-600 bg-rose-50 hover:bg-rose-100' : 'text-blue-600 bg-blue-50 hover:bg-blue-100')
                                : 'text-slate-400 hover:text-indigo-600 hover:bg-slate-100'
                            }`}
                            title="View / Edit Remarks"
                          >
                            <MessageSquare className="w-4 h-4" />
                          </button>

                          {isAdmin && (
                            <button
                              onClick={() => deleteInventoryItem(item.id, userRole)}
                              className="text-slate-400 hover:text-red-600 p-1.5 rounded hover:bg-red-50 transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </>
        )}

        {/* TAB 3: SCHEDULES & SUMMARIES */}
        {activeTab === 'schedules' && (
          <>
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold">User Schedules & Summaries</h1>
                <p className="text-sm text-slate-500">Manage user schedule sessions and checklist results</p>
              </div>

              {isAdmin && (
                <button
                  onClick={() => setIsAddScheduleModalOpen(true)}
                  className="bg-indigo-600 text-white px-3 py-2 rounded-lg text-sm font-semibold flex items-center hover:bg-indigo-700 shadow-sm"
                >
                  <Plus className="w-4 h-4 mr-1" /> Schedule User
                </button>
              )}
            </div>

            <div className="space-y-3">
              {schedules.length === 0 ? (
                <div className="text-center p-8 bg-white rounded-xl border border-dashed text-slate-400">
                  No schedules created yet.
                </div>
              ) : (
                schedules.map((session) => {
                  const isActive = activeScheduleId === session.id;
                  return (
                    <div 
                      key={session.id} 
                      className={`p-4 rounded-xl border shadow-sm transition-all ${
                        isActive ? 'bg-indigo-50/50 border-indigo-300 ring-1 ring-indigo-300' : 'bg-white border-slate-200'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm text-slate-800">{session.userName}</span>
                            {isActive && (
                              <span className="text-[10px] bg-indigo-600 text-white px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                                Active Session
                              </span>
                            )}
                            {session.isCompleted && (
                              <span className="text-[10px] bg-emerald-100 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                                Completed / Auto-Submitted
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-3 text-xs text-slate-500 font-medium flex-wrap">
                            <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {session.date}</span>
                            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {session.startTime} - {session.endTime}</span>
                            <span>Progress: {session.completedCount || 0} / {session.totalCount || checklist.length}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          {!isActive && (
                            <button
                              onClick={() => setActiveScheduleId(session.id)}
                              className="px-3 py-1.5 text-xs font-semibold bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 rounded-lg shadow-sm"
                            >
                              Set Active
                            </button>
                          )}

                          <button
                            onClick={() => setSelectedSummarySession(session)}
                            className="px-3 py-1.5 text-xs font-semibold bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-200 rounded-lg flex items-center gap-1"
                          >
                            <FileText className="w-3.5 h-3.5" /> Summary
                          </button>

                          {isAdmin && (
                            <button
                              onClick={() => deleteScheduleSession(session.id, userRole)}
                              className="text-slate-400 hover:text-red-600 p-1.5 rounded hover:bg-red-50 transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </>
        )}
      </main>

      {/* EDIT INVENTORY MODAL */}
      {editingInventoryItem && isAdmin && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl border w-full max-w-md overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b bg-slate-50">
              <h2 className="text-base font-bold text-slate-800">Edit Equipment Details</h2>
              <button onClick={() => setEditingInventoryItem(null)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleEditInventory} className="p-4 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Equipment Name</label>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full border border-slate-300 px-3 py-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Storage Location</label>
                <input
                  type="text"
                  value={editLocation}
                  onChange={(e) => setEditLocation(e.target.value)}
                  className="w-full border border-slate-300 px-3 py-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Color Tag Selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Category Color Tag</label>
                <div className="flex items-center gap-2">
                  {(Object.keys(COLOR_MAP) as CategoryColor[]).map((c) => {
                    const style = COLOR_MAP[c];
                    return (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setEditColor(c)}
                        className={`w-7 h-7 rounded-full border-2 transition-all flex items-center justify-center ${style.bg} ${style.border} ${
                          editColor === c ? 'ring-2 ring-indigo-500 ring-offset-2 scale-110' : 'opacity-80 hover:opacity-100'
                        }`}
                        title={c}
                      >
                        {editColor === c && <div className={`w-2 h-2 rounded-full ${style.dot}`} />}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t">
                <button
                  type="button"
                  onClick={() => setEditingInventoryItem(null)}
                  className="px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-semibold bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: ADD INVENTORY ITEM */}
      {isAddInventoryModalOpen && isAdmin && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl border w-full max-w-md overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b bg-slate-50">
              <h2 className="text-base font-bold text-slate-800">Add Master Equipment</h2>
              <button onClick={() => setIsAddInventoryModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleAddInventory} className="p-4 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Equipment Name</label>
                <input
                  type="text"
                  placeholder="e.g., Wireless Mic Pack #1"
                  value={invName}
                  onChange={(e) => setInvName(e.target.value)}
                  className="w-full border border-slate-300 px-3 py-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Category</label>
                <select
                  value={invCategory}
                  onChange={(e) => setInvCategory(e.target.value)}
                  className="w-full border border-slate-300 px-3 py-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                >
                  <option value="Microphone">Microphone</option>
                  <option value="Console">Console</option>
                  <option value="IEM">IEM</option>
                  <option value="Cable">Cable</option>
                  <option value="Speaker">Speaker</option>
                  <option value="Accessory">Accessory</option>
                </select>
              </div>

              {/* Color Tag Selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Category Color Tag</label>
                <div className="flex items-center gap-2">
                  {(Object.keys(COLOR_MAP) as CategoryColor[]).map((c) => {
                    const style = COLOR_MAP[c];
                    return (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setInvColor(c)}
                        className={`w-7 h-7 rounded-full border-2 transition-all flex items-center justify-center ${style.bg} ${style.border} ${
                          invColor === c ? 'ring-2 ring-indigo-500 ring-offset-2 scale-110' : 'opacity-80 hover:opacity-100'
                        }`}
                        title={c}
                      >
                        {invColor === c && <div className={`w-2 h-2 rounded-full ${style.dot}`} />}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Storage Location</label>
                <input
                  type="text"
                  placeholder="e.g., Stage Closet"
                  value={invLocation}
                  onChange={(e) => setInvLocation(e.target.value)}
                  className="w-full border border-slate-300 px-3 py-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t">
                <button
                  type="button"
                  onClick={() => setIsAddInventoryModalOpen(false)}
                  className="px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-semibold bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                >
                  Add Equipment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 2FA SETUP MODAL */}
      {is2FAModalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl border w-full max-w-md overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b bg-slate-50">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-indigo-600" />
                <h2 className="text-base font-bold text-slate-800">Two-Factor Authentication (2FA)</h2>
              </div>
              <button onClick={() => setIs2FAModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 space-y-4 text-center">
              {currentUser.twoFactorEnabled ? (
                <div className="space-y-3">
                  <p className="text-xs text-slate-600">
                    Two-factor authentication is currently <strong className="text-emerald-600">ENABLED</strong> on your account.
                  </p>
                  <button
                    onClick={() => {
                      disable2FA(currentUser.id);
                      setIs2FAModalOpen(false);
                    }}
                    className="bg-red-600 hover:bg-red-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
                  >
                    Disable 2FA
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <p className="text-xs text-slate-600">
                    Enhance your account security by enabling Two-Factor Authentication using an authenticator app (e.g., Google Authenticator).
                  </p>
                  <div className="bg-slate-50 p-4 border rounded-lg inline-block">
                    <div className="w-32 h-32 bg-slate-200 mx-auto flex items-center justify-center text-[10px] text-slate-500 border border-dashed">
                      [ QR Code Placeholder ]
                    </div>
                    <p className="text-[10px] text-slate-400 mt-2 font-mono">Secret: MOCK_2FA_SECRET_KEY_123</p>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        enable2FA(currentUser.id);
                        setIs2FAModalOpen(false);
                      }}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
                    >
                      Enable 2FA
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* SUMMARY MODAL */}
      {selectedSummarySession && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl border w-full max-w-lg overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b bg-slate-50">
              <div>
                <h2 className="text-base font-bold text-slate-800">Checklist Summary: {selectedSummarySession.userName}</h2>
                <p className="text-xs text-slate-500">{selectedSummarySession.date} ({selectedSummarySession.startTime} - {selectedSummarySession.endTime})</p>
              </div>
              <button onClick={() => setSelectedSummarySession(null)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 space-y-4 max-h-[70vh] overflow-y-auto">
              <div className="bg-slate-50 p-3 rounded-lg border flex justify-between items-center text-xs font-semibold text-slate-700">
                <span>Completed Tasks</span>
                <span className="text-indigo-600 font-bold">
                  {selectedSummarySession.completedCount || 0} / {selectedSummarySession.totalCount || checklist.length}
                </span>
              </div>

              <div className="space-y-2">
                {(selectedSummarySession.checklistSnapshot || checklist).map((task) => (
                  <div key={task.id} className="p-2.5 bg-white border rounded-lg flex items-center justify-between text-xs">
                    <span className={`font-medium ${task.isChecked ? 'text-slate-800' : 'text-slate-400 line-through'}`}>
                      {task.gearName}
                    </span>
                    {task.isChecked ? (
                      <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-semibold flex items-center gap-1 border border-emerald-200">
                        <Check className="w-3 h-3" /> Accomplished
                      </span>
                    ) : (
                      <span className="text-slate-400 bg-slate-100 px-2 py-0.5 rounded font-medium">
                        Pending
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 border-t bg-slate-50 flex justify-end">
              <button
                onClick={() => setSelectedSummarySession(null)}
                className="px-4 py-1.5 text-xs font-semibold bg-slate-800 text-white hover:bg-slate-900 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SCHEDULE USER MODAL */}
      {isAddScheduleModalOpen && isAdmin && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl border w-full max-w-md overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b bg-slate-50">
              <h2 className="text-base font-bold text-slate-800">Schedule User Session</h2>
              <button onClick={() => setIsAddScheduleModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleAddSchedule} className="p-4 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Select User / Volunteer</label>
                <select
                  value={schedUserId}
                  onChange={(e) => setSchedUserId(e.target.value)}
                  className="w-full border border-slate-300 px-3 py-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                  required
                >
                  <option value="" disabled>Select user...</option>
                  {users.map(u => (
                    <option key={u.id} value={u.id}>{u.name} ({u.role})</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Date</label>
                <input
                  type="date"
                  value={schedDate}
                  onChange={(e) => setSchedDate(e.target.value)}
                  className="w-full border border-slate-300 px-3 py-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Start Time</label>
                  <input
                    type="time"
                    value={schedStartTime}
                    onChange={(e) => setSchedStartTime(e.target.value)}
                    className="w-full border border-slate-300 px-3 py-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">End Time</label>
                  <input
                    type="time"
                    value={schedEndTime}
                    onChange={(e) => setSchedEndTime(e.target.value)}
                    className="w-full border border-slate-300 px-3 py-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t">
                <button
                  type="button"
                  onClick={() => setIsAddScheduleModalOpen(false)}
                  className="px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-semibold bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                >
                  Create Schedule
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* REMARKS MODAL */}
      {selectedTask && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl border w-full max-w-md overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b bg-slate-50">
              <h2 className="text-base font-bold text-slate-800">
                Task Remarks & Request
              </h2>
              <button onClick={() => { resetRemarksForm(); setSelectedTask(null); }} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveTaskDetails} className="p-4 space-y-4 max-h-[80vh] overflow-y-auto">
              <div>
                <p className="text-sm font-semibold text-slate-700 mb-0.5">
                  {'gearName' in selectedTask ? selectedTask.gearName : selectedTask.name}
                </p>
                <p className="text-xs text-slate-400">{selectedTask.category}</p>
              </div>

              {activeTab === 'inventory' && (
                <div className="space-y-2 border-t border-b py-3 my-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 uppercase tracking-wider">
                    <History className="w-3.5 h-3.5 text-slate-500" />
                    <span>Remarks History</span>
                  </div>

                  {getInventoryRemarksHistory(selectedTask as InventoryItem).length === 0 ? (
                    <p className="text-xs text-slate-400 italic bg-slate-50 p-2.5 rounded-lg border text-center">
                      No remarks history logged for this item.
                    </p>
                  ) : (
                    <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                      {getInventoryRemarksHistory(selectedTask as InventoryItem).map((remark) => (
                        <div
                          key={remark.id}
                          className="p-3 bg-white border border-slate-200 rounded-lg shadow-sm space-y-2"
                        >
                          <div className="flex items-center justify-between text-[11px]">
                            <div className="flex items-center gap-1.5">
                              <span className="font-bold text-slate-800">{remark.author}</span>
                              <span
                                className={`px-1.5 py-0.5 rounded text-[9px] font-bold uppercase ${
                                  remark.role === 'superadmin' || remark.role === 'admin'
                                    ? 'bg-purple-100 text-purple-700 border border-purple-200'
                                    : 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                                }`}
                              >
                                {remark.role}
                              </span>
                            </div>
                            <span className="text-slate-400 font-medium">{remark.createdAt}</span>
                          </div>

                          <p className="text-xs text-slate-700 font-medium leading-relaxed bg-slate-50 p-2 rounded border border-slate-100">
                            {remark.text}
                          </p>

                          <div className="flex items-center justify-between pt-1 border-t border-slate-100 mt-2">
                            {remark.requestedStatus ? (
                              <span className="text-[10px] px-2 py-0.5 bg-amber-50 text-amber-800 border border-amber-200 rounded font-bold uppercase tracking-wide">
                                Status Request: {remark.requestedStatus.replace('_', ' ')}
                              </span>
                            ) : remark.isPendingResolution ? (
                              <span className="text-[10px] px-2 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded font-semibold flex items-center gap-1">
                                <Check className="w-3 h-3 text-emerald-600" /> Status Approved
                              </span>
                            ) : (
                              <span className="text-[10px] px-2 py-0.5 bg-slate-100 text-slate-600 border border-slate-200 rounded font-semibold flex items-center gap-1">
                                <Check className="w-3 h-3 text-emerald-600" /> Resolved
                              </span>
                            )}

                            {isAdmin && (
                              <div>
                                {remark.requestedStatus ? (
                                  <button
                                    type="button"
                                    onClick={() => {
                                      const targetId = 'inventoryItemId' in selectedTask ? selectedTask.inventoryItemId || selectedTask.id : selectedTask.id;
                                      approveStatusRequest(targetId, remark.id, remark.requestedStatus!, userRole);
                                      resetRemarksForm();
                                    }}
                                    className="px-2.5 py-1 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-md flex items-center gap-1 transition-colors shadow-sm"
                                  >
                                    <span>Approve Status</span>
                                  </button>
                                ) : remark.isPendingResolution ? (
                                  <button
                                    type="button"
                                    onClick={() => {
                                      const targetId = 'inventoryItemId' in selectedTask ? selectedTask.inventoryItemId || selectedTask.id : selectedTask.id;
                                      resolveRemarkEntry(targetId, remark.id, userRole);
                                      resetRemarksForm();
                                    }}
                                    className="px-2.5 py-1 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-md flex items-center gap-1 transition-colors shadow-sm"
                                  >
                                    <Check className="w-3.5 h-3.5" />
                                    <span>Resolved</span>
                                  </button>
                                ) : null}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {!(activeTab === 'inventory' && isVolunteer) && (
                <>
                  {isAdmin && activeTab === 'inventory' ? (
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">Add Admin Note / Resolution</label>
                      <textarea
                        rows={2}
                        placeholder="e.g., Replacement cable ordered, item checked..."
                        value={adminNoteInput}
                        onChange={(e) => setAdminNoteInput(e.target.value)}
                        className="w-full border border-slate-300 p-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                      ></textarea>
                    </div>
                  ) : (
                    <>
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">
                          Remarks <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          rows={3}
                          placeholder="e.g., Cable noise detected during rehearsal..."
                          value={remarksInput}
                          onChange={(e) => setRemarksInput(e.target.value)}
                          required={activeTab === 'checklist'}
                          className="w-full border border-slate-300 p-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                        ></textarea>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">
                          Request Status Update <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={statusReqInput}
                          onChange={(e) => setStatusReqInput(e.target.value as InventoryStatus | '')}
                          required={activeTab === 'checklist'}
                          className="w-full border border-slate-300 px-3 py-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                        >
                          <option value="" disabled>Select status update request...</option>
                          <option value="available">Available</option>
                          <option value="in_use">In-Use</option>
                          <option value="needs_repair">Maintenance / Needs Repair</option>
                          <option value="broken">Broken / Out of Order</option>
                        </select>
                      </div>
                    </>
                  )}
                </>
              )}

              <div className="flex items-center justify-between gap-2 pt-3 border-t">
                <div className="flex gap-2">
                  {activeTab === 'inventory' && isVolunteer ? (
                    <button
                      type="button"
                      onClick={() => { resetRemarksForm(); setSelectedTask(null); }}
                      className="px-4 py-2 text-sm font-semibold bg-slate-800 text-white hover:bg-slate-900 rounded-lg shadow-sm"
                    >
                      Close
                    </button>
                  ) : (
                    <>
                      <button
                        type="button"
                        onClick={() => { resetRemarksForm(); setSelectedTask(null); }}
                        className="px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={isChecklistFormInvalid}
                        className={`px-4 py-2 text-sm font-semibold rounded-lg shadow-sm transition-colors ${
                          isChecklistFormInvalid
                            ? 'bg-indigo-300 text-white cursor-not-allowed'
                            : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                        }`}
                      >
                        Save Changes
                      </button>
                    </>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MANAGE ACCOUNTS MODAL */}
      {isManageAdminsOpen && isSuperadmin && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl border border-slate-200 w-full max-w-lg overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b bg-purple-50">
              <div className="flex items-center gap-2 text-purple-900">
                <ShieldCheck className="w-5 h-5 text-purple-600" />
                <h2 className="text-base font-bold">Manage Accounts</h2>
              </div>
              <button onClick={() => setIsManageAdminsOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 space-y-6 max-h-[80vh] overflow-y-auto">
              <form onSubmit={handleCreateAdmin} className="bg-purple-50/50 p-3.5 rounded-lg border border-purple-100 space-y-3">
                <h3 className="text-xs font-bold text-purple-900 uppercase tracking-wider flex items-center gap-1">
                  <UserPlus className="w-3.5 h-3.5" /> Add New Account
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={adminName}
                    onChange={(e) => setAdminName(e.target.value)}
                    className="border border-slate-300 px-3 py-1.5 rounded-lg text-sm outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={adminEmail}
                    onChange={(e) => setAdminEmail(e.target.value)}
                    className="border border-slate-300 px-3 py-1.5 rounded-lg text-sm outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                    required
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    className="border border-slate-300 px-3 py-1.5 rounded-lg text-sm outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                    required
                  />
                  <select
                    value={adminRole}
                    onChange={(e) => setAdminRole(e.target.value as UserRole)}
                    className="border border-slate-300 px-3 py-1.5 rounded-lg text-sm outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                  >
                    <option value="volunteer">Volunteer</option>
                    <option value="admin">Admin</option>
                    <option value="superadmin">Superadmin</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-1.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1 shadow-sm"
                >
                  <Plus className="w-3.5 h-3.5" /> Create Account
                </button>
              </form>

              <div>
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5" /> Registered Accounts ({users.length})
                </h3>
                {users.length === 0 ? (
                  <p className="text-xs text-slate-400 italic bg-slate-50 p-3 rounded-lg text-center">
                    No accounts registered yet.
                  </p>
                ) : (
                  <div className="space-y-2">
                    {users.map((u) => {
                      const isSelf = u.id === currentUser.id;
                      return (
                        <div key={u.id} className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between gap-2">
                          <div>
                            <p className="text-xs font-bold text-slate-800">
                              {u.name} {isSelf && <span className="text-[10px] text-purple-600 ml-1">(You)</span>}
                            </p>
                            <p className="text-[11px] text-slate-500">{u.email}</p>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <select
                              value={u.role}
                              disabled={isSelf}
                              onChange={(e) => updateUserRole && updateUserRole(u.id, e.target.value as UserRole)}
                              className={`text-xs px-2 py-1 rounded border border-slate-300 bg-white font-semibold outline-none ${
                                isSelf ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'
                              }`}
                            >
                              <option value="volunteer">Volunteer</option>
                              <option value="admin">Admin</option>
                              <option value="superadmin">Superadmin</option>
                            </select>

                            {!isSelf && (
                              <button
                                onClick={() => {
                                  if (deleteUserAccount) {
                                    deleteUserAccount(u.id);
                                  } else {
                                    deleteAdminAccount(u.id);
                                  }
                                }}
                                className="text-slate-400 hover:text-red-600 p-1.5 rounded hover:bg-red-50 transition-colors"
                                title="Delete Account"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            <div className="p-3 border-t bg-slate-50 flex justify-end">
              <button
                onClick={() => setIsManageAdminsOpen(false)}
                className="px-4 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-200 rounded-lg"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ADD TASK MODAL */}
      {isAddModalOpen && isAdmin && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl border w-full max-w-md overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b bg-slate-50">
              <h2 className="text-base font-bold text-slate-800">Add Checklist Task</h2>
              <button onClick={() => setIsAddModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleAddItem} className="p-4 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Task / Gear Name</label>
                <input
                  type="text"
                  placeholder="e.g., Check IEM Pack #2 Battery"
                  value={newGearName}
                  onChange={(e) => setNewGearName(e.target.value)}
                  className="w-full border border-slate-300 px-3 py-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Category</label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="w-full border border-slate-300 px-3 py-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                >
                  <option value="Microphone">Microphone</option>
                  <option value="Console">Console</option>
                  <option value="IEM">IEM</option>
                  <option value="Cable">Cable</option>
                  <option value="Stage Check">Stage Check</option>
                  <option value="General Prep">General Prep</option>
                </select>
              </div>
              <div className="flex justify-end gap-2 pt-2 border-t">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-semibold bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                >
                  Add Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}