'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useApp, ExtendedChecklistItem, InventoryItem, InventoryStatus } from '@/context/ChecklistContext';
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
  Check
} from 'lucide-react';

export default function ChecklistPage() {
  const { currentUser, logout, addAdminAccount, deleteAdminAccount, users } = useAuth();
  const { 
    checklist, 
    toggleCheck, 
    addChecklistItem, 
    deleteChecklistItem, 
    resetAllChecklist, 
    generateSundayChecklistFromInventory,
    updateTaskDetails,
    inventory,
    addInventoryItem,
    deleteInventoryItem,
    updateInventoryStatus
  } = useApp();

  const [activeTab, setActiveTab] = useState<'checklist' | 'inventory'>('checklist');

  // Modal States
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isAddInventoryModalOpen, setIsAddInventoryModalOpen] = useState(false);
  const [isManageAdminsOpen, setIsManageAdminsOpen] = useState(false);

  // Form States - Checklist
  const [newGearName, setNewGearName] = useState('');
  const [newCategory, setNewCategory] = useState('Microphone');

  // Form States - Inventory
  const [invName, setInvName] = useState('');
  const [invCategory, setInvCategory] = useState('Microphone');
  const [invLocation, setInvLocation] = useState('');

  // Form States - Admins
  const [adminName, setAdminName] = useState('');
  const [adminEmail, setAdminEmail] = useState('');

  // Task / Inventory Remarks Modal State
  const [selectedTask, setSelectedTask] = useState<ExtendedChecklistItem | InventoryItem | null>(null);
  const [remarksInput, setRemarksInput] = useState('');
  const [statusReqInput, setStatusReqInput] = useState<InventoryStatus | ''>('');

  if (!currentUser) {
    return <LoginPage />;
  }

  const userRole = currentUser.role;
  const userName = currentUser.name;

  const isSuperadmin = userRole === 'superadmin';
  const isAdmin = userRole === 'admin' || isSuperadmin;
  const isVolunteer = userRole === 'volunteer';

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGearName.trim()) return;
    addChecklistItem(newGearName, newCategory, userRole);
    setNewGearName('');
    setNewCategory('Microphone');
    setIsAddModalOpen(false);
  };

  const handleAddInventory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!invName.trim()) return;
    addInventoryItem(invName.trim(), invCategory, invLocation.trim(), userRole);
    setInvName('');
    setInvCategory('Microphone');
    setInvLocation('');
    setIsAddInventoryModalOpen(false);
  };

  const handleCreateAdmin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!adminName.trim() || !adminEmail.trim()) return;
    addAdminAccount(adminName.trim(), adminEmail.trim());
    setAdminName('');
    setAdminEmail('');
  };

  const openTaskModal = (item: ExtendedChecklistItem | InventoryItem) => {
    setSelectedTask(item);
    const textNote = ('remarks' in item && item.remarks) 
      ? item.remarks 
      : ('notes' in item && item.notes) 
      ? item.notes 
      : '';
    setRemarksInput(textNote);
    setStatusReqInput(('requestedStatus' in item && item.requestedStatus) ? item.requestedStatus : '');
  };

  const handleSaveTaskDetails = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTask) return;

    if ('isChecked' in selectedTask) {
      updateTaskDetails(
        selectedTask.id,
        remarksInput,
        statusReqInput ? statusReqInput : undefined
      );
    } else if (isAdmin && statusReqInput) {
      updateInventoryStatus(selectedTask.id, statusReqInput, userRole);
    }

    setSelectedTask(null);
  };

  // Admin Action: Resolve & Clear Pending Remarks / Status Request
  const handleAdminResolve = () => {
    if (!selectedTask) return;

    if ('isChecked' in selectedTask) {
      // Clear remarks and pending requested status
      updateTaskDetails(selectedTask.id, '', undefined);
    }
    setSelectedTask(null);
  };

  const adminUsers = users.filter((u) => u.role === 'admin');
  const completedCount = checklist.filter((i) => i.isChecked).length;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* HEADER */}
      <header className="bg-white border-b border-slate-200 px-4 py-3">
        <div className="max-w-xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800 text-sm">Church Tech</span>
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
            {isSuperadmin && (
              <button
                onClick={() => setIsManageAdminsOpen(true)}
                className="bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-sm transition-colors"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Manage Admins</span>
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

      <main className="max-w-xl mx-auto p-4 sm:p-6">
        {/* TAB TOGGLE: CHECKLIST VS INVENTORY */}
        <div className="flex bg-slate-200 p-1 rounded-xl mb-6">
          <button
            onClick={() => setActiveTab('checklist')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg flex items-center justify-center gap-2 transition-all ${
              activeTab === 'checklist' 
                ? 'bg-white text-slate-900 shadow-sm' 
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <CheckSquare className="w-4 h-4" />
            <span>Sunday Checklist</span>
          </button>
          <button
            onClick={() => setActiveTab('inventory')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg flex items-center justify-center gap-2 transition-all ${
              activeTab === 'inventory' 
                ? 'bg-white text-slate-900 shadow-sm' 
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Box className="w-4 h-4" />
            <span>Master Inventory ({inventory.length})</span>
          </button>
        </div>

        {/* TAB 1: SUNDAY CHECKLIST */}
        {activeTab === 'checklist' && (
          <>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div>
                <h1 className="text-2xl font-bold">Sunday Checklist</h1>
                <p className="text-sm text-slate-500">Sunday Service Setup Tasks</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {isAdmin && (
                  <>
                    <button
                      onClick={() => generateSundayChecklistFromInventory(userRole)}
                      className="bg-slate-800 text-white p-2 rounded-lg text-sm font-semibold hover:bg-slate-900 flex items-center shadow-sm"
                      title="Generate Tasks from Inventory"
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
                    <UserCheck className="w-3.5 h-3.5 mr-1" /> Volunteer Mode
                  </div>
                )}
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm mb-6">
              <div className="flex justify-between text-sm font-semibold mb-2">
                <span>Progress Verification</span>
                <span>{completedCount} / {checklist.length} Completed</span>
              </div>
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-green-500 h-full transition-all duration-300"
                  style={{ width: checklist.length ? `${(completedCount / checklist.length) * 100}%` : '0%' }}
                />
              </div>
            </div>

            <div className="space-y-3">
              {checklist.length === 0 ? (
                <div className="text-center p-8 bg-white rounded-xl border border-dashed text-slate-400">
                  No tasks in the checklist.
                </div>
              ) : (
                checklist.map((item) => (
                  <div
                    key={item.id}
                    className={`p-4 rounded-xl border shadow-sm transition-colors ${
                      item.isChecked ? 'bg-green-50 border-green-200' : 'bg-white border-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div
                        onClick={() => toggleCheck(item.id, userRole)}
                        className="flex items-center space-x-3 flex-1 cursor-pointer"
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
                          <p className="text-xs text-slate-400">{item.category}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => openTaskModal(item)}
                          className={`p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-slate-100 transition-colors ${
                            item.remarks || item.requestedStatus ? 'text-indigo-600' : ''
                          }`}
                          title="Add / View Remarks"
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

                    {(item.remarks || item.requestedStatus) && (
                      <div className="mt-2 pt-2 border-t border-slate-100 text-xs flex flex-wrap items-center justify-between gap-2 text-slate-600">
                        {item.remarks && <span>💬 <strong>Note:</strong> {item.remarks}</span>}
                        {item.requestedStatus && (
                          <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-medium">
                            Request: {item.requestedStatus}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                ))
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
                <p className="text-sm text-slate-500">All registered equipment and equipment statuses</p>
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
                 const hasNote = Boolean((item as any).notes || (item as any).remarks);
                const displayNote = String((item as any).notes || (item as any).remarks || '');
                  return (
                    <div key={item.id} className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm space-y-2">
                      <div className="flex items-center justify-between gap-3">
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-sm text-slate-800">{item.name}</span>
                            <span className="text-[10px] px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md font-medium">
                              {item.category}
                            </span>
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

                          <button
                            onClick={() => openTaskModal(item)}
                            className={`p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-slate-100 transition-colors ${
                              hasNote ? 'text-indigo-600' : ''
                            }`}
                            title="View / Add Remarks"
                          >
                            <MessageSquare className="w-4 h-4" />
                          </button>

                          {isAdmin && (
                            <button
                              onClick={() => deleteInventoryItem(item.id, userRole)}
                              className="text-slate-400 hover:text-red-600 p-1.5 rounded hover:bg-red-50 transition-colors"
                              title="Delete Item"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </div>

                      {hasNote && (
                        <div className="pt-2 border-t border-slate-100 text-xs text-slate-600">
                          💬 <strong>Note:</strong> {displayNote}
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </>
        )}
      </main>

      {/* TASK / INVENTORY REMARKS MODAL WITH ADMIN RESOLVE */}
      {selectedTask && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl border w-full max-w-md overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b bg-slate-50">
              <h2 className="text-base font-bold text-slate-800">Remarks & Request</h2>
              <button onClick={() => setSelectedTask(null)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSaveTaskDetails} className="p-4 space-y-4">
              <div>
                <p className="text-sm font-semibold text-slate-700 mb-0.5">
                  {'gearName' in selectedTask ? selectedTask.gearName : selectedTask.name}
                </p>
                <p className="text-xs text-slate-400">{selectedTask.category}</p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Remarks / Notes</label>
                <textarea
                  rows={3}
                  placeholder="e.g., Low battery, cable noise..."
                  value={remarksInput}
                  onChange={(e) => setRemarksInput(e.target.value)}
                  className="w-full border border-slate-300 p-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Request Status Update</label>
                <select
                  value={statusReqInput}
                  onChange={(e) => setStatusReqInput(e.target.value as InventoryStatus | '')}
                  className="w-full border border-slate-300 px-3 py-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                >
                  <option value="">No status change requested</option>
                  <option value="available">Available</option>
                  <option value="in_use">In-Use</option>
                  <option value="needs_repair">Maintenance / Needs Repair</option>
                  <option value="broken">Broken / Out of Order</option>
                </select>
              </div>

              <div className="flex items-center justify-between gap-2 pt-3 border-t">
                {isAdmin && ('remarks' in selectedTask || 'requestedStatus' in selectedTask) ? (
                  <button
                    type="button"
                    onClick={handleAdminResolve}
                    className="px-3 py-2 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg flex items-center gap-1"
                  >
                    <Check className="w-3.5 h-3.5" /> Resolve & Clear
                  </button>
                ) : <div />}

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedTask(null)}
                    className="px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm font-semibold bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-sm"
                  >
                    Save Remarks
                  </button>
                </div>
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
                  placeholder="e.g., Shure SM58 #1"
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
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Storage Location</label>
                <input
                  type="text"
                  placeholder="e.g., Main Cabinet / Stage Left"
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

      {/* SUPERADMIN: MANAGE ADMINS MODAL */}
      {isManageAdminsOpen && isSuperadmin && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl border border-slate-200 w-full max-w-lg overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b bg-purple-50">
              <div className="flex items-center gap-2 text-purple-900">
                <ShieldCheck className="w-5 h-5 text-purple-600" />
                <h2 className="text-base font-bold">Manage Admin Accounts</h2>
              </div>
              <button onClick={() => setIsManageAdminsOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 space-y-6 max-h-[80vh] overflow-y-auto">
              <form onSubmit={handleCreateAdmin} className="bg-purple-50/50 p-3.5 rounded-lg border border-purple-100 space-y-3">
                <h3 className="text-xs font-bold text-purple-900 uppercase tracking-wider flex items-center gap-1">
                  <UserPlus className="w-3.5 h-3.5" /> Add New Admin
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
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-1.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1 shadow-sm"
                >
                  <Plus className="w-3.5 h-3.5" /> Create Admin Account
                </button>
              </form>

              <div>
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5" /> Active Admins ({adminUsers.length})
                </h3>
                {adminUsers.length === 0 ? (
                  <p className="text-xs text-slate-400 italic bg-slate-50 p-3 rounded-lg text-center">
                    No admin accounts registered yet.
                  </p>
                ) : (
                  <div className="space-y-2">
                    {adminUsers.map((u) => (
                      <div key={u.id} className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between gap-2">
                        <div>
                          <p className="text-xs font-bold text-slate-800">{u.name}</p>
                          <p className="text-[11px] text-slate-500">{u.email}</p>
                        </div>
                        <button
                          onClick={() => deleteAdminAccount(u.id)}
                          className="text-slate-400 hover:text-red-600 p-1.5 rounded hover:bg-red-50 transition-colors"
                          title="Remove Admin"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
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