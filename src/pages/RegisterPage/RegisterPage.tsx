import { useState, useCallback, type FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Image } from '@/components/ui/image';
import { Lock, User, UserPlus, Loader2, AlertCircle, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { appLogoUrl } from '@/lib/publicAsset';

export default function RegisterPage() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const isValid =
    username.trim().length >= 2 &&
    password.length >= 4 &&
    confirmPassword === password;

  const handleSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    const trimmedUser = username.trim();

    if (trimmedUser.length < 2) {
      setError('用户名至少 2 个字符');
      return;
    }
    if (password.length < 4) {
      setError('密码至少 4 位');
      return;
    }
    if (password !== confirmPassword) {
      setError('两次输入的密码不一致');
      return;
    }

    setLoading(true);
    await new Promise(r => setTimeout(r, 600));

    const result = await register(trimmedUser, password, confirmPassword);

    if (!result.success) {
      setError((result as { success: false; error: string }).error);
      setLoading(false);
      return;
    }

    setLoading(false);
    navigate('/', { replace: true });
  }, [username, password, confirmPassword, register, navigate]);

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
            <UserPlus className="size-4 text-primary" />
            注册会员
          </CardTitle>
          <CardDescription className="text-xs">
            Register a new account to start training
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
              <Label htmlFor="reg-username" className="text-xs text-muted-foreground">
                用户名
              </Label>
              <div className="relative">
                <User className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="reg-username"
                  value={username}
                  onChange={e => { setUsername(e.target.value); setError(''); }}
                  placeholder="输入用户名（至少 2 个字符）"
                  className="pl-9 bg-background"
                  autoComplete="username"
                  autoFocus
                  disabled={loading}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="reg-password" className="text-xs text-muted-foreground">
                密码
              </Label>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="reg-password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => { setPassword(e.target.value); setError(''); }}
                  placeholder="设置密码（至少 4 位）"
                  className="pl-9 pr-9 bg-background"
                  autoComplete="new-password"
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

            <div className="space-y-2">
              <Label htmlFor="reg-confirm" className="text-xs text-muted-foreground">
                确认密码
              </Label>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="reg-confirm"
                  type={showConfirm ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={e => { setConfirmPassword(e.target.value); setError(''); }}
                  placeholder="再次输入密码"
                  className="pl-9 pr-9 bg-background"
                  autoComplete="new-password"
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(prev => !prev)}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  tabIndex={-1}
                >
                  {showConfirm ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={loading || !isValid}
            >
              {loading ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  注册中…
                </>
              ) : (
                <>
                  <UserPlus className="size-4" />
                  注册并进入
                </>
              )}
            </Button>

            <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
              <span>已有账户？</span>
              <Link
                to="/login"
                className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors font-medium"
              >
                去登录
                <ArrowRight className="size-3" />
              </Link>
            </div>

          </form>
        </CardContent>
      </Card>
    </div>
  );
}
