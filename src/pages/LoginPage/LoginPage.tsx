import { useState, useCallback, type FormEvent } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Image } from '@/components/ui/image';
import { Server, Lock, User, Loader2, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { appLogoUrl } from '@/lib/publicAsset';

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    const trimmedUser = username.trim();
    if (!trimmedUser) {
      setError('请输入用户名');
      return;
    }
    if (password.length < 4) {
      setError('密码至少 4 位');
      return;
    }

    setLoading(true);
    await new Promise(r => setTimeout(r, 600));

    const result = await login(trimmedUser, password);

    if (!result.success) {
      setError((result as { success: false; error: string }).error);
      setLoading(false);
      return;
    }

    setLoading(false);
    const redirectTo = (location.state as { from?: string })?.from || '/';
    navigate(redirectTo, { replace: true });
  }, [username, password, login, navigate, location]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--primary)/4%_0%,_transparent_70%)] pointer-events-none" />

      <Card className="relative w-full max-w-sm border-border/40 shadow-none">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto mb-3 flex size-14 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
            <Image
              src={appLogoUrl}
              alt="BDC"
              className="size-9 object-contain"
            />
          </div>
          <CardTitle className="text-lg tracking-tight flex items-center justify-center gap-2">
            <Server className="size-4 text-primary" />
            数据中心英语培训
          </CardTitle>
          <CardDescription className="text-xs">
            Data Center English Training Platform
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <Alert variant="destructive" className="py-2 px-3">
                <AlertCircle className="size-3.5" />
                <AlertDescription className="text-xs">{error}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-2">
              <Label htmlFor="username" className="text-xs text-muted-foreground">
                用户名
              </Label>
              <div className="relative">
                <User className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="username"
                  value={username}
                  onChange={e => { setUsername(e.target.value); setError(''); }}
                  placeholder="输入你的用户名"
                  className="pl-9 bg-background"
                  autoComplete="username"
                  autoFocus
                  disabled={loading}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-xs text-muted-foreground">
                密码
              </Label>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => { setPassword(e.target.value); setError(''); }}
                  placeholder="输入密码（至少 4 位）"
                  className="pl-9 pr-9 bg-background"
                  autoComplete="current-password"
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(prev => !prev)}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={loading || !username.trim() || password.length < 4}
            >
              {loading ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  登录中…
                </>
              ) : (
                '登录'
              )}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              还没有账户？{' '}
              <Link
                to="/register"
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                立即注册
              </Link>
            </p>

          </form>
        </CardContent>
      </Card>
    </div>
  );
}
