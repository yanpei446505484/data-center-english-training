import { useCallback, useEffect, useRef, Suspense, Component, type ReactNode } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import { Image } from '@/components/ui/image';

import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { LogOut, User, RefreshCw, AlertTriangle } from 'lucide-react';
import { logger } from '@/lib/app-logger';
import { appLogoUrl } from '@/lib/publicAsset';


/** Loading skeleton shown during route transitions */
function PageLoadingFallback() {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="h-8 w-48 rounded bg-muted" />
      <div className="h-4 w-full rounded bg-muted/60" />
      <div className="h-4 w-3/4 rounded bg-muted/60" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        <div className="h-32 rounded-md bg-muted/40" />
        <div className="h-32 rounded-md bg-muted/40" />
      </div>
    </div>
  );
}

/** Error boundary that catches rendering crashes with retry */
interface ErrorBoundaryProps {
  children: ReactNode;
  locationKey: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

/** Check if an error is a chunk load failure */
function isChunkLoadError(error: Error | null): boolean {
  if (!error) return false;
  const msg = error.message || '';
  return msg.includes('Loading chunk') ||
    msg.includes('Loading CSS chunk') ||
    msg.includes('ChunkLoadError') ||
    msg.includes('error loading dynamically imported module');
}

class RouteErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  private autoRetried = false;

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error) {
    logger.error('[Layout] Route render error:', String(error));
    // Auto-retry once for chunk load errors
    if (isChunkLoadError(error) && !this.autoRetried) {
      this.autoRetried = true;
      // Small delay then reload to fetch fresh chunks
      setTimeout(() => window.location.reload(), 500);
    }
  }

  componentDidUpdate(prevProps: ErrorBoundaryProps) {
    // Reset error state when route changes — allows retry via navigation
    if (prevProps.locationKey !== this.props.locationKey && this.state.hasError) {
      this.setState({ hasError: false, error: null });
      this.autoRetried = false;
    }
  }

  handleRetry = () => {
    // Reset error state and let React re-render (re-trigger lazy import)
    this.setState({ hasError: false, error: null });
    this.autoRetried = false;
  };

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      const isChunk = isChunkLoadError(this.state.error);
      return (
        <div className="flex flex-col items-center justify-center py-20 gap-4">
          <AlertTriangle className="size-10 text-warning" />
          <p className="text-sm text-muted-foreground text-center">
            {isChunk ? '页面资源加载失败，正在自动重试…' : '页面加载出错，请重试'}
          </p>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={this.handleRetry}
              className="gap-1.5"
            >
              <RefreshCw className="size-3.5" />
              重试
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={this.handleReload}
              className="gap-1.5"
            >
              刷新页面
            </Button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export const Layout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const mainRef = useRef<HTMLElement>(null);

  const handleLogout = useCallback(async () => {
    await logout();
    navigate('/login', { replace: true });
  }, [logout, navigate]);

  // Scroll to top on route change — prevents mobile "white page" caused by
  // scroll position carryover from previous page
  useEffect(() => {
    mainRef.current?.scrollTo({ top: 0 });
  }, [location.pathname]);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col min-w-0 overflow-x-hidden">
        <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/30">
          <div className="flex h-14 items-center gap-3 px-4 md:px-6">
            <SidebarTrigger className="-ml-1" />
            <div className="flex items-center gap-2.5 min-w-0">
              <Image
                src={appLogoUrl}
                alt="BDC"
                className="size-7 shrink-0 rounded-md object-contain"
              />
              <div className="flex flex-col leading-tight min-w-0">
                <span className="text-sm font-semibold text-foreground tracking-tight truncate">
                  数据中心英语培训
                </span>
                <span className="text-xs text-muted-foreground tracking-tight truncate hidden sm:block">
                  Data Center English Training
                </span>
              </div>
            </div>
            {/* User info + logout */}
            <div className="flex items-center gap-1.5 ml-auto pl-1.5 border-l border-border/30">
              <div className="hidden sm:flex items-center gap-1.5 text-xs text-muted-foreground">
                <User className="size-3.5" />
                <span className="hidden md:inline truncate max-w-[100px]">{user?.displayName || user?.username}</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="size-7 text-muted-foreground hover:text-destructive"
                onClick={handleLogout}
                title="退出登录"
              >
                <LogOut className="size-3.5" />
              </Button>
            </div>
          </div>
        </header>
        <main ref={mainRef} className="flex-1 min-h-0 w-full overflow-y-auto px-4 md:px-6 lg:px-8 py-6">
          <RouteErrorBoundary locationKey={location.pathname}>
            <Suspense fallback={<PageLoadingFallback />}>
              <Outlet />
            </Suspense>
          </RouteErrorBoundary>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};
