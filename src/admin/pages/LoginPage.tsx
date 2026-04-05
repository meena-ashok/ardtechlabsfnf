import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Lock, Mail } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(email, password);
      navigate("/admin");
    } catch (err: any) {
      setError(err.message || "Login failed");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-sm">
        <img src="/logo.png" alt="Company Logo" className="mx-auto h-12 w-auto mb-4" />
        <div className="text-center mb-8">
          <h1 className="text-2xl font-extrabold text-foreground mb-1">Admin Dashboard</h1>
          <p className="text-sm text-muted-foreground">Sign in to manage your website content</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-background-alt border border-secondary/20 rounded-2xl p-6 space-y-4"
        >
          {error && (
            <div className="bg-destructive/10 border border-destructive/30 text-destructive text-xs rounded-lg px-3 py-2">
              {error}
            </div>
          )}
          <div>
            <label className="block text-[0.68rem] font-semibold text-muted-foreground tracking-widest uppercase mb-1.5">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 pr-3 py-2.5 bg-foreground/[0.04] border border-foreground/[0.08] rounded-lg text-foreground text-sm outline-none focus:border-primary focus:bg-primary/[0.04]"
                placeholder="admin@ardtechlabs.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-[0.68rem] font-semibold text-muted-foreground tracking-widest uppercase mb-1.5">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-10 pr-3 py-2.5 bg-foreground/[0.04] border border-foreground/[0.08] rounded-lg text-foreground text-sm outline-none focus:border-primary focus:bg-primary/[0.04]"
                placeholder="Enter password"
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 rounded-lg text-sm font-bold text-primary-foreground transition-all hover:-translate-y-0.5 disabled:opacity-50 min-h-[44px]"
            style={{ background: "var(--gradient-orange)" }}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
} 
