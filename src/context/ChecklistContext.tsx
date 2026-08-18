'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { INITIAL_CHECKLIST, INITIAL_EQUIPMENT, ChecklistItem, Equipment } from '@/lib/mockData';

export type InventoryItem = Equipment;
export type UserRole = 'superadmin' | 'admin' | 'volunteer';
export type InventoryStatus = 'available' | 'in_use' | 'needs_repair' | 'broken';
export type CategoryColor = 'blue' | 'green' | 'amber' | 'red' | 'purple' | 'slate';

export interface RemarkEntry {
  id: string;
  author: string;
  role: UserRole;
  text: string;
  createdAt: string;
  requestedStatus?: InventoryStatus;
  isApproved?: boolean;
  isPendingResolution?: boolean;
}

export interface ExtendedChecklistItem extends ChecklistItem {
  remarks?: string;
  remarksHistory?: RemarkEntry[];
  requestedStatus?: InventoryStatus;
  resolutionRemark?: string;
  isResolved?: boolean;
  notes?: string;
  inventoryItemId?: string;
}

export interface ScheduleSession {
  id: string;
  userId: string;
  userName: string;
  date: string;
  startTime: string;
  endTime: string;
  checklistSnapshot?: ExtendedChecklistItem[];
  completedCount?: number;
  totalCount?: number;
  isCompleted?: boolean;
}

interface AppContextType {
  checklist: ExtendedChecklistItem[];
  toggleCheck: (id: string, role: UserRole) => void;
  addChecklistItem: (gearName: string, category: string, role: UserRole) => void;
  deleteChecklistItem: (id: string, role: UserRole) => void;
  resetAllChecklist: (role: UserRole) => void;
  generateSundayChecklistFromInventory: (role: UserRole) => void;
  updateTaskDetails: (
    id: string, 
    remarks?: string, 
    requestedStatus?: InventoryStatus,
    authorInfo?: { name: string; role: UserRole }
  ) => void;
  resolveTask: (id: string, adminRemark?: string) => void;
  clearRemarks: (id: string) => void;
  approveStatusRequest: (itemId: string, remarkId: string, requestedStatus: InventoryStatus, role: UserRole) => void;
  resolveRemarkEntry: (itemId: string, remarkId: string, role: UserRole) => void;

  inventory: Equipment[];
  addInventoryItem: (name: string, category: string, location: string, role: UserRole, categoryColor?: CategoryColor) => void;
  editInventoryItem: (id: string, name: string, location: string, categoryColor: CategoryColor, role: UserRole) => void;
  deleteInventoryItem: (id: string, role: UserRole) => void;
  updateInventoryStatus: (id: string, status: Equipment['status'], role: UserRole) => void;

  schedules: ScheduleSession[];
  activeScheduleId: string | null;
  setActiveScheduleId: (id: string | null) => void;
  addScheduleSession: (userId: string, userName: string, date: string, startTime: string, endTime: string, role: UserRole) => void;
  deleteScheduleSession: (id: string, role: UserRole) => void;
  submitScheduleChecklist: (scheduleId: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [checklist, setChecklist] = useState<ExtendedChecklistItem[]>(INITIAL_CHECKLIST);
  const [inventory, setInventory] = useState<Equipment[]>(INITIAL_EQUIPMENT);
  const [schedules, setSchedules] = useState<ScheduleSession[]>([]);
  const [activeScheduleId, setActiveScheduleId] = useState<string | null>(null);

  useEffect(() => {
    const savedChecklist = localStorage.getItem('audio_tech_checklist');
    if (savedChecklist) {
      try {
        setChecklist(JSON.parse(savedChecklist));
      } catch (e) {
        console.error('Failed to parse saved checklist:', e);
      }
    }

    const savedInventory = localStorage.getItem('audio_tech_inventory');
    if (savedInventory) {
      try {
        setInventory(JSON.parse(savedInventory));
      } catch (e) {
        console.error('Failed to parse saved inventory:', e);
      }
    }

    const savedSchedules = localStorage.getItem('audio_tech_schedules');
    if (savedSchedules) {
      try {
        const parsedSchedules = JSON.parse(savedSchedules);
        setSchedules(parsedSchedules);
        if (parsedSchedules.length > 0) {
          setActiveScheduleId(parsedSchedules[0].id);
        } else {
          setActiveScheduleId(null);
        }
      } catch (e) {
        console.error('Failed to parse saved schedules:', e);
      }
    }
  }, []);

  // Timer check every 30 seconds to auto-submit 1 minute after end time
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      schedules.forEach(session => {
        if (!session.isCompleted && session.date && session.endTime) {
          try {
            const [endHours, endMinutes] = session.endTime.split(':').map(Number);
            const sessionDate = new Date(session.date);
            sessionDate.setHours(endHours, endMinutes + 1, 0, 0);

            if (now >= sessionDate) {
              submitScheduleChecklist(session.id);
            }
          } catch (e) {
            console.error('Error parsing session end time:', e);
          }
        }
      });
    }, 30000);

    return () => clearInterval(timer);
  }, [schedules, checklist]);

  const saveChecklist = (newList: ExtendedChecklistItem[]) => {
    setChecklist(newList);
    localStorage.setItem('audio_tech_checklist', JSON.stringify(newList));
    window.dispatchEvent(new Event('local-storage-update'));
  };

  const saveInventory = (newList: Equipment[]) => {
    setInventory(newList);
    localStorage.setItem('audio_tech_inventory', JSON.stringify(newList));
    window.dispatchEvent(new Event('local-storage-update'));
  };

  const saveSchedules = (newSchedules: ScheduleSession[]) => {
    setSchedules(newSchedules);
    localStorage.setItem('audio_tech_schedules', JSON.stringify(newSchedules));
    window.dispatchEvent(new Event('local-storage-update'));
  };

  const isAdminOrSuperadmin = (role: UserRole) => role === 'admin' || role === 'superadmin';

  const toggleCheck = (id: string, _role: UserRole) => {
    const updated = checklist.map((item) => (item.id === id ? { ...item, isChecked: !item.isChecked } : item));
    saveChecklist(updated);

    if (activeScheduleId) {
      const completed = updated.filter(i => i.isChecked).length;
      saveSchedules(
        schedules.map(s => s.id === activeScheduleId ? { ...s, checklistSnapshot: updated, completedCount: completed, totalCount: updated.length } : s)
      );
    }
  };

  const addChecklistItem = (gearName: string, category: string, role: UserRole) => {
    if (!isAdminOrSuperadmin(role)) {
      alert('Permission Denied: Admins only!');
      return;
    }
    const newItem: ExtendedChecklistItem = {
      id: `c_${Date.now()}`,
      gearName,
      category,
      isChecked: false,
    };
    const updated = [...checklist, newItem];
    saveChecklist(updated);
  };

  const deleteChecklistItem = (id: string, role: UserRole) => {
    if (!isAdminOrSuperadmin(role)) {
      alert('Permission Denied: Admins only!');
      return;
    }
    saveChecklist(checklist.filter((item) => item.id !== id));
  };

  const resetAllChecklist = (role: UserRole) => {
    if (!isAdminOrSuperadmin(role)) {
      alert('Permission Denied: Admins only!');
      return;
    }
    const resetList = checklist.map((item) => ({
      ...item,
      isChecked: false,
      remarks: '',
      remarksHistory: [],
      requestedStatus: undefined,
      resolutionRemark: undefined,
      isResolved: false,
    }));
    saveChecklist(resetList);
  };

  const generateSundayChecklistFromInventory = (role: UserRole) => {
    if (!isAdminOrSuperadmin(role)) {
      alert('Permission Denied: Admins only!');
      return;
    }
    const inventoryTasks: ExtendedChecklistItem[] = inventory.map((item) => ({
      id: `c_inv_${item.id}_${Date.now()}`,
      inventoryItemId: item.id,
      gearName: `Check ${item.name} (${item.location || 'Main Closet'})`,
      category: item.category,
      isChecked: false,
    }));
    saveChecklist(inventoryTasks);
  };

  const updateTaskDetails = (
    id: string,
    remarkText?: string,
    requestedStatus?: InventoryStatus,
    authorInfo?: { name: string; role: UserRole }
  ) => {
    const newRemarkEntry: RemarkEntry | null = remarkText
      ? {
          id: `rem_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
          author: authorInfo?.name || 'User',
          role: authorInfo?.role || 'volunteer',
          text: remarkText,
          createdAt: new Date().toLocaleString([], { dateStyle: 'short', timeStyle: 'short' }),
          requestedStatus,
          isApproved: false,
          isPendingResolution: true,
        }
      : null;

    const isInventoryItem = inventory.some((eq) => eq.id === id);
    if (isInventoryItem) {
      saveInventory(
        inventory.map((eq) => {
          if (eq.id === id) {
            const currentNotes: RemarkEntry[] = Array.isArray(eq.notes) ? eq.notes : [];
            return {
              ...eq,
              notes: newRemarkEntry ? [...currentNotes, newRemarkEntry] : currentNotes,
            };
          }
          return eq;
        })
      );
    }

    saveChecklist(
      checklist.map((item) => {
        if (item.id === id) {
          const currentHistory = item.remarksHistory || [];
          return {
            ...item,
            remarks: remarkText || item.remarks,
            remarksHistory: newRemarkEntry ? [...currentHistory, newRemarkEntry] : currentHistory,
            requestedStatus: requestedStatus ?? item.requestedStatus,
            isResolved: false,
          };
        }
        return item;
      })
    );
  };

  const selectedTaskMatches = (item: Equipment, targetId: string) => {
    return item.id === targetId;
  };

  const resolveTask = (id: string, _adminRemark?: string) => {
    const targetInventoryItem = inventory.find((item) => item.id === id);
    saveChecklist(
      checklist.map((item) => {
        const isDirectMatch = item.id === id || item.inventoryItemId === id;
        const isNameMatch =
          targetInventoryItem &&
          (item.gearName.toLowerCase().includes(targetInventoryItem.name.toLowerCase()) ||
            targetInventoryItem.name.toLowerCase().includes(item.gearName.toLowerCase()));

        if (isDirectMatch || isNameMatch) {
          return {
            ...item,
            isResolved: true,
            requestedStatus: undefined,
            remarksHistory: item.remarksHistory?.map(h => ({ 
              ...h, 
              requestedStatus: undefined, 
              isApproved: true, 
              isPendingResolution: false 
            })),
          };
        }
        return item;
      })
    );

    saveInventory(
      inventory.map((item) => {
        if (item.id === id || selectedTaskMatches(item, id)) {
          const updatedNotes = Array.isArray(item.notes) 
            ? item.notes.map((n: RemarkEntry) => ({ 
                ...n, 
                requestedStatus: undefined, 
                isApproved: true, 
                isPendingResolution: false 
              }))
            : item.notes;
          return {
            ...item,
            status: 'available',
            isResolved: true,
            notes: updatedNotes,
          };
        }
        return item;
      })
    );
  };

  const clearRemarks = (id: string) => {
    resolveTask(id);
  };

  const approveStatusRequest = (itemId: string, remarkId: string, requestedStatus: InventoryStatus, role: UserRole) => {
    if (!isAdminOrSuperadmin(role)) {
      alert('Permission Denied: Admins only!');
      return;
    }

    saveInventory(
      inventory.map((item) => {
        if (item.id === itemId || selectedTaskMatches(item, itemId)) {
          const updatedNotes = Array.isArray(item.notes)
            ? item.notes.map((n: RemarkEntry) => {
                if (n.id === remarkId) {
                  return { ...n, isApproved: true, isPendingResolution: true, requestedStatus: undefined };
                }
                return n;
              })
            : item.notes;
          return { 
            ...item, 
            status: requestedStatus, 
            notes: updatedNotes 
          };
        }
        return item;
      })
    );

    saveChecklist(
      checklist.map((item) => {
        if (item.id === itemId || item.inventoryItemId === itemId) {
          return {
            ...item,
            requestedStatus: undefined,
            remarksHistory: item.remarksHistory?.map(h => {
              if (h.id === remarkId) {
                return { ...h, isApproved: true, isPendingResolution: true, requestedStatus: undefined };
              }
              return h;
            }),
          };
        }
        return item;
      })
    );
  };

  const resolveRemarkEntry = (itemId: string, remarkId: string, role: UserRole) => {
    if (!isAdminOrSuperadmin(role)) {
      alert('Permission Denied: Admins only!');
      return;
    }

    saveInventory(
      inventory.map((item) => {
        if (item.id === itemId || selectedTaskMatches(item, itemId)) {
          const updatedNotes = Array.isArray(item.notes)
            ? item.notes.map((n: RemarkEntry) => {
                if (n.id === remarkId) {
                  return { ...n, isPendingResolution: false };
                }
                return n;
              })
            : item.notes;
          return { 
            ...item, 
            status: 'available', 
            notes: updatedNotes 
          };
        }
        return item;
      })
    );

    saveChecklist(
      checklist.map((item) => {
        if (item.id === itemId || item.inventoryItemId === itemId) {
          return {
            ...item,
            remarksHistory: item.remarksHistory?.map(h => {
              if (h.id === remarkId) {
                return { ...h, isPendingResolution: false };
              }
              return h;
            }),
          };
        }
        return item;
      })
    );
  };

  const addInventoryItem = (
    name: string, 
    category: string, 
    location: string, 
    role: UserRole, 
    categoryColor: CategoryColor = 'blue'
  ) => {
    if (!isAdminOrSuperadmin(role)) {
      alert('Permission Denied: Admins only!');
      return;
    }
    const newItem: Equipment = {
      id: `eq_${Date.now()}`,
      name,
      category,
      status: 'available',
      location: location || 'Main Closet',
      categoryColor,
      notes: [],
    };
    saveInventory([newItem, ...inventory]);
  };

  const editInventoryItem = (
    id: string,
    name: string,
    location: string,
    categoryColor: CategoryColor,
    role: UserRole
  ) => {
    if (!isAdminOrSuperadmin(role)) {
      alert('Permission Denied: Admins only!');
      return;
    }
    saveInventory(
      inventory.map((item) =>
        item.id === id ? { ...item, name, location, categoryColor } : item
      )
    );
  };

  const deleteInventoryItem = (id: string, role: UserRole) => {
    if (!isAdminOrSuperadmin(role)) {
      alert('Permission Denied: Admins only!');
      return;
    }
    saveInventory(inventory.filter((item) => item.id !== id));
  };

  const updateInventoryStatus = (id: string, status: Equipment['status'], role: UserRole) => {
    if (!isAdminOrSuperadmin(role)) {
      alert('Permission Denied: Admins only!');
      return;
    }
    saveInventory(
      inventory.map((item) => (item.id === id ? { ...item, status } : item))
    );
  };

  const addScheduleSession = (userId: string, userName: string, date: string, startTime: string, endTime: string, role: UserRole) => {
    if (!isAdminOrSuperadmin(role)) {
      alert('Permission Denied: Admins only!');
      return;
    }
    const newSession: ScheduleSession = {
      id: `sch_${Date.now()}`,
      userId,
      userName,
      date,
      startTime,
      endTime,
      checklistSnapshot: checklist.map(item => ({ ...item, isChecked: false })),
      completedCount: 0,
      totalCount: checklist.length,
      isCompleted: false,
    };
    const updatedSchedules = [...schedules, newSession];
    saveSchedules(updatedSchedules);
    if (!activeScheduleId) {
      setActiveScheduleId(newSession.id);
    }
  };

  const deleteScheduleSession = (id: string, role: UserRole) => {
    if (!isAdminOrSuperadmin(role)) {
      alert('Permission Denied: Admins only!');
      return;
    }
    const filtered = schedules.filter(s => s.id !== id);
    saveSchedules(filtered);
    if (activeScheduleId === id) {
      setActiveScheduleId(filtered.length > 0 ? filtered[0].id : null);
    }
  };

  const submitScheduleChecklist = (scheduleId: string) => {
    const targetSession = schedules.find(s => s.id === scheduleId);
    if (!targetSession || targetSession.isCompleted) return;

    const completed = checklist.filter(i => i.isChecked).length;
    const updatedSchedules = schedules.map(s => 
      s.id === scheduleId 
        ? { ...s, checklistSnapshot: [...checklist], completedCount: completed, totalCount: checklist.length, isCompleted: true } 
        : s
    );
    saveSchedules(updatedSchedules);

    const freshList = checklist.map(item => ({ ...item, isChecked: false }));
    saveChecklist(freshList);
  };

  return (
    <AppContext.Provider
      value={{
        checklist,
        toggleCheck,
        addChecklistItem,
        deleteChecklistItem,
        resetAllChecklist,
        generateSundayChecklistFromInventory,
        updateTaskDetails,
        resolveTask,
        clearRemarks,
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
        submitScheduleChecklist,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within an AppProvider');
  return context;
}