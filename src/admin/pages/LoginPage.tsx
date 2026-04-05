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
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="hidden lg:flex flex-col items-center justify-center bg-gradient-to-br from-primary to-primary-dark p-12 text-white">
        <div className="w-full max-w-md text-center">
          <img src="/logo.png" alt="Company Logo" className="mx-auto h-16 w-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">ARD-TECH LABS</h1>
          <p className="text-lg text-primary-foreground/80">
            Welcome to the content management powerhouse.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center bg-background p-8">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8 lg:hidden">
            <img src="/logo.png" alt="Company Logo" className="mx-auto h-12 w-auto mb-4" />
          </div>
          <div className="text-left mb-8">
            <h1 className="text-3xl font-extrabold text-foreground">Admin Login</h1>
            <p className="text-base text-muted-foreground mt-1">
              Enter your credentials to access the dashboard.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-destructive/10 border border-destructive/30 text-destructive text-sm rounded-lg px-4 py-3">
                {error}
              </div>
            )}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-muted-foreground">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-12 pr-4 py-3 bg-foreground/5 border border-foreground/10 rounded-xl text-foreground text-base placeholder:text-muted-foreground/60 outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                  placeholder="admin@ardtechlabs.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-muted-foreground">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-12 pr-4 py-3 bg-foreground/5 border border-foreground/10 rounded-xl text-foreground text-base placeholder:text-muted-foreground/60 outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl text-base font-bold text-primary-foreground transition-all transform hover:scale-105 active:scale-100 disabled:opacity-50 disabled:transform-none"
              style={{ background: "linear-gradient(to right, var(--gradient-orange), var(--gradient-purple))" }}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                  <span>Authenticating...</span>
                </div>
              ) : (
                "Sign In to Dashboard"
              )}
            </button>
          </form>
          <p className="text-center text-xs text-muted-foreground mt-8">
            © 2024 ARD-TECH LABS. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
