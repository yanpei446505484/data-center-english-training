// EXPORTS: lazyWithRetry
import { lazy, type ComponentType } from 'react';
import { logger } from '@/lib/app-logger';

/**
 * Wrap React.lazy() with automatic retry for chunk loading failures.
 * Common on mobile where network is flaky or browser cache has stale chunks.
 *
 * Retries the dynamic import up to 3 times with exponential backoff
 * before letting the error propagate to React's error boundary.
 */
export function lazyWithRetry<T extends ComponentType<unknown>>(
  importFn: () => Promise<{ default: T }>,
  retries = 3,
  delay = 1000,
) {
  return lazy(async () => {
    let lastError: unknown;
    for (let attempt = 0; attempt <= retries; attempt++) {
      try {
        return await importFn();
      } catch (err) {
        lastError = err;
        const msg = err instanceof Error ? err.message : String(err);
        const isChunkError =
          msg.includes('Failed to fetch dynamically imported module') ||
          msg.includes('Loading chunk') ||
          msg.includes('Loading CSS chunk') ||
          msg.includes('ChunkLoadError');

        if (!isChunkError || attempt === retries) {
          // Not a chunk error or exhausted retries — propagate
          throw err;
        }

        logger.warn(
          `[lazyWithRetry] Chunk load failed (attempt ${attempt + 1}/${retries + 1}), retrying in ${delay * (attempt + 1)}ms…`,
        );
        await new Promise((r) => setTimeout(r, delay * (attempt + 1)));
      }
    }
    throw lastError;
  });
}
