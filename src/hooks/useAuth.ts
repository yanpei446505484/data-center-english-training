import { useState, useCallback, useEffect } from 'react';
import { logger } from '@/lib/app-logger';
import { storage } from '@/lib/storage';
import {
  dbSaveUser, dbGetUser, dbGetAllUsers,
  dbSetSession, dbGetSession, dbClearSession,
  type DbUser,
} from '@/lib/db';

// ─── Types ───

export interface IUser {
  username: string;
  displayName: string;
  createdAt: string;
}

// ─── Storage Keys ───

const USERS_KEY = 'dc_auth_users';
const SESSION_KEY = 'dc_auth_session';

// ─── Safe Storage Helpers ───

function safeGetItem(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeSetItem(key: string, value: string): void {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Ignore storage errors (e.g., private mode, quota exceeded)
  }
}

function safeRemoveItem(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch {
    // Ignore
  }
}

// ─── Internal Helpers (sync localStorage cache) ───

const MIGRATED_FLAG = 'dc_auth_migrated_v2';

function safeLocalStorageLength(): number {
  try { return localStorage.length; } catch { return 0; }
}

function safeLocalStorageKey(index: number): string | null {
  try { return localStorage.key(index); } catch { return null; }
}

function migrateFromScopedStorage() {
  try {
    if (safeGetItem(MIGRATED_FLAG)) return;

    const len = safeLocalStorageLength();
    for (let i = 0; i < len; i++) {
      const key = safeLocalStorageKey(i);
      if (!key) continue;
      const value = safeGetItem(key);
      if (!value) continue;

      if (key.endsWith(':__app_dc_auth_users') && !safeGetItem(USERS_KEY)) {
        safeSetItem(USERS_KEY, value);
      }
      if (key.endsWith(':__app_dc_auth_session') && !safeGetItem(SESSION_KEY)) {
        safeSetItem(SESSION_KEY, value);
      }
    }

    safeSetItem(MIGRATED_FLAG, '1');
  } catch {
    // Migration is best-effort
  }
}

let migrationAttempted = false;
function ensureMigration() {
  if (migrationAttempted) return;
  migrationAttempted = true;
  migrateFromScopedStorage();
}

function loadUsersSync(): Record<string, DbUser> {
  try {
    const raw = safeGetItem(USERS_KEY);
    if (!raw) {
      try {
        const fallback = storage.getItem('__app_dc_auth_users');
        if (fallback) {
          safeSetItem(USERS_KEY, fallback);
          return JSON.parse(fallback);
        }
      } catch { /* storage not available */ }
      return {};
    }
    const parsed = JSON.parse(raw);
    if (typeof parsed === 'object' && parsed !== null) return parsed;
    return {};
  } catch {
    return {};
  }
}

function loadSessionSync(): string | null {
  try {
    const session = safeGetItem(SESSION_KEY);
    if (session) return session;
    try {
      const fallback = storage.getItem('__app_dc_auth_session');
      if (fallback) {
        safeSetItem(SESSION_KEY, fallback);
        return fallback;
      }
    } catch { /* storage not available */ }
    return null;
  } catch {
    return null;
  }
}

// ─── Standalone Functions (for non-React usage) ───

export function getCurrentUser(): string | null {
  try {
    const username = loadSessionSync();
    if (!username) return null;
    const users = loadUsersSync();
    if (users[username]) return username;
    // Don't clear session here — let async check handle it
    return null;
  } catch {
    return null;
  }
}

export function userStorageKey(baseKey: string): string {
  try {
    const username = getCurrentUser();
    if (!username) return baseKey;
    return `u:${username}:${baseKey}`;
  } catch {
    return baseKey;
  }
}

// ─── Result Types ───

export type LoginResult =
  | { success: true; user: IUser }
  | { success: false; error: string };

export type RegisterResult =
  | { success: true; user: IUser }
  | { success: false; error: string };

// ─── Demo Account (always available) ───

const DEMO_USER: DbUser = {
  password: '1234',
  displayName: 'demo',
  createdAt: '2025-01-01T00:00:00.000Z',
};

// ─── Hook ───

export function useAuth() {
  ensureMigration();
  const [user, setUser] = useState<IUser | null>(() => {
    const username = getCurrentUser();
    if (!username) return null;
    const users = loadUsersSync();
    const stored = users[username];
    if (!stored) return null;
    return { username, displayName: stored.displayName, createdAt: stored.createdAt };
  });

  // On mount: sync user state from IndexedDB (handles case where localStorage was wiped)
  useEffect(() => {
    if (user) return; // Already have a user from localStorage, no need to sync
    let cancelled = false;

    async function syncFromDB() {
      try {
        const session = await dbGetSession();
        if (!session || cancelled) return;
        const dbUser = await dbGetUser(session);
        if (dbUser && !cancelled) {
          setUser({ username: session, displayName: dbUser.displayName, createdAt: dbUser.createdAt });
          // Restore localStorage cache
          safeSetItem(SESSION_KEY, session);
          const users = loadUsersSync();
          users[session] = dbUser;
          safeSetItem(USERS_KEY, JSON.stringify(users));
        }
      } catch {
        // IndexedDB not available
      }
    }

    syncFromDB();
    return () => { cancelled = true; };
  }, [user]);

  const isAuthenticated = user !== null;

  const login = useCallback(async (username: string, password: string): Promise<LoginResult> => {
    const trimmedUsername = username.trim().toLowerCase();
    if (!trimmedUsername) {
      return { success: false, error: '请输入用户名' };
    }
    if (!password) {
      return { success: false, error: '请输入密码' };
    }

    // Check IndexedDB first
    let existing = await dbGetUser(trimmedUsername);

    // Demo account fallback
    if (!existing && trimmedUsername === 'demo' && password === DEMO_USER.password) {
      existing = DEMO_USER;
      await dbSaveUser('demo', DEMO_USER);
    }

    // Auto-create if no users exist at all (first visit / wiped storage)
    if (!existing) {
      const allUsers = await dbGetAllUsers();
      if (Object.keys(allUsers).length === 0) {
        const newUser: DbUser = {
          password,
          displayName: username.trim(),
          createdAt: new Date().toISOString(),
        };
        await dbSaveUser(trimmedUsername, newUser);
        existing = newUser;
      }
    }

    if (!existing) {
      return { success: false, error: '账户不存在，请先注册' };
    }

    if (existing.password !== password) {
      return { success: false, error: '密码错误，请重新输入' };
    }

    await dbSetSession(trimmedUsername);
    const u: IUser = {
      username: trimmedUsername,
      displayName: existing.displayName,
      createdAt: existing.createdAt,
    };
    setUser(u);
    logger.info(`[useAuth] User logged in: ${trimmedUsername}`);
    return { success: true, user: u };
  }, []);

  const register = useCallback(async (username: string, password: string, confirmPassword: string): Promise<RegisterResult> => {
    const trimmedUsername = username.trim();
    const lowerUsername = trimmedUsername.toLowerCase();

    if (!trimmedUsername) {
      return { success: false, error: '请输入用户名' };
    }
    if (trimmedUsername.length < 2) {
      return { success: false, error: '用户名至少 2 个字符' };
    }
    if (!password) {
      return { success: false, error: '请输入密码' };
    }
    if (password.length < 4) {
      return { success: false, error: '密码至少 4 位' };
    }
    if (password !== confirmPassword) {
      return { success: false, error: '两次输入的密码不一致' };
    }

    const allUsers = await dbGetAllUsers();

    if (allUsers[lowerUsername]) {
      return { success: false, error: '该用户名已被注册，请直接登录' };
    }

    const newUser: DbUser = {
      password,
      displayName: trimmedUsername,
      createdAt: new Date().toISOString(),
    };
    await dbSaveUser(lowerUsername, newUser);
    await dbSetSession(lowerUsername);

    const u: IUser = {
      username: lowerUsername,
      displayName: trimmedUsername,
      createdAt: newUser.createdAt,
    };
    setUser(u);
    logger.info(`[useAuth] New user registered: ${lowerUsername}`);
    return { success: true, user: u };
  }, []);

  const logout = useCallback(async () => {
    logger.info(`[useAuth] User logged out: ${user?.username}`);
    await dbClearSession();
    setUser(null);
  }, [user]);

  return {
    user,
    isAuthenticated,
    login,
    register,
    logout,
  };
}
