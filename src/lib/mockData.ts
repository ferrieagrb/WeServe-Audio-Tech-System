// @/lib/mockData.ts

export type UserRole = 'superadmin' | 'admin' | 'volunteer';
export type InventoryStatus = 'available' | 'in_use' | 'needs_repair' | 'broken';

export interface RemarkEntry {
  id: string;
  author: string;
  role: UserRole; // Updated from 'string' to 'UserRole'
  text: string;
  requestedStatus?: InventoryStatus;
  createdAt: string;
}

export interface Equipment {
  id: string;
  name: string;
  category: string;
  status: InventoryStatus;
  location: string;
  notes?: RemarkEntry[] | string;
  categoryColor?: string;
}

export interface ChecklistItem {
  id: string;
  gearName: string;
  category: string;
  isChecked: boolean;
  remarks?: string;
  requestedStatus?: InventoryStatus;
  remarksHistory?: RemarkEntry[];
}

export const INITIAL_EQUIPMENT: Equipment[] = [
  {
    id: '1',
    name: 'Wireless Pack #1',
    category: 'IEM',
    status: 'available',
    location: 'Rack A',
    notes: [
      {
        id: 'r1',
        author: 'John Doe',
        role: 'volunteer',
        text: 'Checked during rehearsal. Battery contact clean.',
        createdAt: '2026-08-16 09:30 AM',
      },
    ],
  },
  {
    id: '2',
    name: 'Behringer X32',
    category: 'Console',
    status: 'in_use',
    location: 'FOH Booth',
    notes: [],
  },
  {
    id: '3',
    name: 'XLR Cable 25ft #4',
    category: 'Cable',
    status: 'needs_repair',
    location: 'Bin B3',
    notes: [
      {
        id: 'r2',
        author: 'Tech Lead',
        role: 'admin',
        text: 'Intermittent signal cut at connector end.',
        requestedStatus: 'needs_repair',
        createdAt: '2026-08-17 08:15 AM',
      },
    ],
  },
];

export const INITIAL_CHECKLIST: ChecklistItem[] = [
  { id: 'c1', gearName: 'Wireless Pack #1', category: 'IEM', isChecked: false },
  { id: 'c2', gearName: 'Behringer X32', category: 'Console', isChecked: true },
  { id: 'c3', gearName: 'Shure SM58 #2', category: 'Microphone', isChecked: false },
];