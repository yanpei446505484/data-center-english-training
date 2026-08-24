/**
 * Centralized IndexedDB database for reliable data persistence.
 * Solves the localStorage data-loss issue on mobile WebView environments.
 * Dual-writes to localStorage as a sync cache for backward compatibility.
 */

const DB_NAME = 'dc_training_db';
const DB_VERSION = 1;
const STORE = 'kv';

// ─── Types ───

export interface DbUser {
  password: string;
  displayName: string;
  createdAt: string;
}

export interface DbTicket {
  id: string;
  alarmId: string;
  title: string;
  priority: 'P1' | 'P2' | 'P3' | 'P4';
  description: string;
  createdAt: string;
}

export interface DbEscalation {
  alarmId: string;
  fromLevel: string;
  toLevel: string;
  reason: string;
  escalatedAt: string;
}

export interface DbProgress {
  checkedAlarmIds: string[];
  reviewedHistoryAlarmIds: string[];
  monitoredAlarmIds: string[];
  completedSteps: ('overview' | 'critical_review' | 'history_check' | 'ticket_creation')[];
}

// ─── Key helpers ───

/**
 * Read current username from localStorage sync cache.
 * Avoids circular dependency with useAuth.ts.
 */
function getCurrentUsername(): string | null {
  try {
    const session = localStorage.getItem('dc_auth_session');
    if (session && session.length > 0) return session;
  } catch { /* ignore */ }
  return null;
}

function scopedKey(baseKey: string): string {
  const username = getCurrentUsername();
  if (!username) return baseKey;
  return `u:${username}:${baseKey}`;
}

// ─── IndexedDB Low-Level ───

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const idb = req.result;
      if (!idb.objectStoreNames.contains(STORE)) {
        idb.createObjectStore(STORE);
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

let dbPromise: Promise<IDBDatabase> | null = null;

function getDB(): Promise<IDBDatabase> {
  if (!dbPromise) dbPromise = openDB();
  return dbPromise;
}

async function dbPut(key: string, value: unknown): Promise<void> {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, 'readwrite');
    tx.objectStore(STORE).put(value, key);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

async function dbGet<T>(key: string): Promise<T | null> {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, 'readonly');
    const req = tx.objectStore(STORE).get(key);
    req.onsuccess = () => resolve(req.result ?? null);
    req.onerror = () => reject(req.error);
  });
}

async function dbDelete(key: string): Promise<void> {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, 'readwrite');
    tx.objectStore(STORE).delete(key);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

// ─── Auth ───

export async function dbSaveUser(username: string, data: DbUser): Promise<void> {
  await dbPut(`user:${username}`, data);
  // Sync cache
  try {
    const raw = localStorage.getItem('dc_auth_users');
    const users = raw ? JSON.parse(raw) as Record<string, DbUser> : {};
    users[username] = data;
    localStorage.setItem('dc_auth_users', JSON.stringify(users));
  } catch { /* best-effort */ }
}

export async function dbGetUser(username: string): Promise<DbUser | null> {
  const user = await dbGet<DbUser>(`user:${username}`);
  if (user) return user;

  // Fallback: read from localStorage cache
  try {
    const raw = localStorage.getItem('dc_auth_users');
    if (raw) {
      const users = JSON.parse(raw) as Record<string, DbUser>;
      if (users[username]) {
        // Promote to IndexedDB
        await dbPut(`user:${username}`, users[username]);
        return users[username];
      }
    }
  } catch { /* ignore */ }
  return null;
}

export async function dbGetAllUsers(): Promise<Record<string, DbUser>> {
  // Try IndexedDB first by checking a known key
  const db = await getDB();
  const users: Record<string, DbUser> = {};

  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, 'readonly');
    const store = tx.objectStore(STORE);
    const cursorReq = store.openCursor();
    cursorReq.onsuccess = () => {
      const cursor = cursorReq.result;
      if (cursor) {
        const key = cursor.key as string;
        if (typeof key === 'string' && key.startsWith('user:') && !key.startsWith('user-session:')) {
          const username = key.slice(5);
          users[username] = cursor.value as DbUser;
        }
        cursor.continue();
      } else {
        // If IndexedDB is empty, try localStorage cache
        if (Object.keys(users).length === 0) {
          try {
            const raw = localStorage.getItem('dc_auth_users');
            if (raw) {
              const parsed = JSON.parse(raw);
              if (typeof parsed === 'object' && parsed !== null) {
                // Promote all to IndexedDB
                Object.entries(parsed).forEach(([k, v]) => {
                  users[k] = v as DbUser;
                  dbPut(`user:${k}`, v);
                });
              }
            }
          } catch { /* ignore */ }
        }
        resolve(users);
      }
    };
    cursorReq.onerror = () => reject(cursorReq.error);
  });
}

export async function dbSetSession(username: string): Promise<void> {
  await dbPut('session', username);
  try {
    localStorage.setItem('dc_auth_session', username);
  } catch { /* ignore */ }
}

export async function dbGetSession(): Promise<string | null> {
  const session = await dbGet<string>('session');
  if (session) return session;

  // Fallback
  try {
    const ls = localStorage.getItem('dc_auth_session');
    if (ls) {
      await dbPut('session', ls);
      return ls;
    }
  } catch { /* ignore */ }
  return null;
}

export async function dbClearSession(): Promise<void> {
  await dbDelete('session');
  try {
    localStorage.removeItem('dc_auth_session');
  } catch { /* ignore */ }
}

// ─── Tickets ───

export async function dbGetTickets(): Promise<DbTicket[]> {
  const key = scopedKey('__app_dc_handover_tickets');
  const tickets = await dbGet<DbTicket[]>(key);
  return tickets ?? [];
}

export async function dbSaveTicket(ticket: DbTicket): Promise<void> {
  const key = scopedKey('__app_dc_handover_tickets');
  const existing = await dbGetTickets();
  existing.push(ticket);
  await dbPut(key, existing);
}

// ─── Escalations ───

export async function dbGetEscalations(): Promise<DbEscalation[]> {
  const key = scopedKey('__app_dc_handover_escalations');
  const records = await dbGet<DbEscalation[]>(key);
  return records ?? [];
}

export async function dbSaveEscalation(record: DbEscalation): Promise<void> {
  const key = scopedKey('__app_dc_handover_escalations');
  const existing = await dbGetEscalations();
  existing.push(record);
  await dbPut(key, existing);
}

// ─── Progress ───

const DEFAULT_PROGRESS: DbProgress = {
  checkedAlarmIds: [],
  reviewedHistoryAlarmIds: [],
  monitoredAlarmIds: [],
  completedSteps: [],
};

export async function dbGetProgress(): Promise<DbProgress> {
  const key = scopedKey('__app_dc_handover_progress');
  const progress = await dbGet<DbProgress>(key);
  return progress ?? { ...DEFAULT_PROGRESS };
}

export async function dbSaveProgress(progress: DbProgress): Promise<void> {
  const key = scopedKey('__app_dc_handover_progress');
  await dbPut(key, progress);
}

// ─── Clear all data for current user ───

export async function dbClearUserData(): Promise<void> {
  const keys = [
    scopedKey('__app_dc_handover_tickets'),
    scopedKey('__app_dc_handover_escalations'),
    scopedKey('__app_dc_handover_progress'),
  ];
  await Promise.all(keys.map(k => dbDelete(k)));
}
