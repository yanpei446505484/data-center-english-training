// EXPORTS: userStorageKey
import { getCurrentUser } from '@/hooks/useAuth';

/**
 * Generate a user-scoped storage key for data isolation.
 * Prefixes the base key with the current username so each user's data is independent.
 *
 * Usage: scopedStorage.setItem(userStorageKey('__app_dc_english_favorites'), JSON.stringify(data))
 */
export function userStorageKey(baseKey: string): string {
  const username = getCurrentUser();
  if (!username) return baseKey;
  return `u:${username}:${baseKey}`;
}
