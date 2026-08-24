import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import AppShell from "@/components/AppShell";
import App from "./app";
import "./index.css";

window.addEventListener('unhandledrejection', (event: PromiseRejectionEvent) => {
  const reason = String(event.reason);
  if (
    reason.includes('Failed to fetch dynamically imported module') ||
    reason.includes('Loading chunk') ||
    reason.includes('Loading CSS chunk')
  ) {
    event.preventDefault();
    window.location.reload();
  }
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppShell>
      <ErrorBoundary
        fallbackRender={({ error, resetErrorBoundary }) => (
          <div className="flex min-h-screen items-center justify-center bg-background">
            <div className="text-center space-y-4 p-8">
              <h1 className="text-xl font-semibold text-foreground">Application Error</h1>
              <p className="text-sm text-muted-foreground">{(error as Error)?.message}</p>
              <button onClick={resetErrorBoundary} className="text-sm text-primary underline">
                Retry
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
