import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import AppShell from '@/components/AppShell';
import { preloadTTSModel } from '@/lib/ttsPlugin';
import App from './app';
import './index.css';

// Start the complete same-origin Kokoro initialization for every visitor as
// soon as the application bundle runs. This is deliberately outside React and
// outside authenticated routes, so login, register, refresh and deep links all
// warm the exact same model before the first pronunciation click.
void preloadTTSModel();

window.addEventListener('unhandledrejection', (event: PromiseRejectionEvent) => {
  const reason = String(event.reason);
  if (
    reason.includes('Failed to fetch dynamically imported module')
    || reason.includes('Loading chunk')
    || reason.includes('Loading CSS chunk')
  ) {
    event.preventDefault();
    window.location.reload();
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppShell>
      <ErrorBoundary
        fallbackRender={({ error, resetErrorBoundary }) => (
          <div className="flex min-h-screen items-center justify-center bg-background">
            <div className="space-y-4 p-8 text-center">
              <h1 className="text-xl font-semibold text-foreground">应用加载失败</h1>
              <p className="text-sm text-muted-foreground">{(error as Error)?.message}</p>
              <button onClick={resetErrorBoundary} className="text-sm text-primary underline">
                重新加载
              </button>
            </div>
          </div>
        )}
      >
        <App />
      </ErrorBoundary>
    </AppShell>
  </StrictMode>,
);

if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    void navigator.serviceWorker.register(new URL('sw.js', document.baseURI).href);
  });
}
