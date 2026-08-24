import { useState, useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { dbGetSession, dbGetUser } from '@/lib/db';

const SESSION_KEY = 'dc_auth_session';
const OLD_SESSION_SUFFIX = ':__app_dc_auth_session';

function hasLocalSession(): boolean {
  try {
    const session = localStorage.getItem(SESSION_KEY);
    if (session && session.length > 0) return true;

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.endsWith(OLD_SESSION_SUFFIX)) {
        const value = localStorage.getItem(key);
        if (value && value.length > 0) {
          localStorage.setItem(SESSION_KEY, value);
          return true;
        }
      }
    }
  } catch {
    // localStorage not available (e.g., disabled in WebView)
  }
  return false;
}

export default function AuthGuard() {
  const location = useLocation();
  const [authState, setAuthState] = useState<'loading' | 'ok' | 'denied'>('loading');

  useEffect(() => {
    let cancelled = false;

    async function check() {
      // Fast path: localStorage sync check
      if (hasLocalSession()) {
        if (!cancelled) setAuthState('ok');
        return;
      }

      // Slow path: IndexedDB might have session that localStorage lost
      try {
        const session = await dbGetSession();
        if (session && session.length > 0) {
          // Verify user exists in DB
          const user = await dbGetUser(session);
          if (user) {
            if (!cancelled) setAuthState('ok');
            return;
          }
        }
      } catch {
        // IndexedDB failed — fall through to denied
      }

      if (!cancelled) setAuthState('denied');
    }

    check();
    return () => { cancelled = true; };
  }, []);

  if (authState === 'loading') return null;

  if (authState === 'denied') {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return <Outlet />;
}
