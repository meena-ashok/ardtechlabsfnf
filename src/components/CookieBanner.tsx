import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Cookie, ShieldCheck } from "lucide-react";

type ConsentState = "accepted" | "essential" | null;

const STORAGE_KEY = "ard_cookie_consent";

export default function CookieBanner() {
  const [consent, setConsent] = useState<ConsentState>(null);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as ConsentState;
    if (saved === "accepted" || saved === "essential") {
      setConsent(saved);
    }
  }, []);

  const saveConsent = (value: Exclude<ConsentState, null>) => {
    localStorage.setItem(STORAGE_KEY, value);
    setConsent(value);
  };

  if (consent) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[980] sm:left-6 sm:right-6">
      <div className="mx-auto max-w-5xl rounded-[22px] border border-primary/20 bg-background/95 p-4 shadow-[var(--shadow-card)] backdrop-blur-xl">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex gap-3">
            <div className="mt-0.5 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Cookie className="h-5 w-5" />
            </div>
            <div>
              <div className="mb-1 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
                <ShieldCheck className="h-4 w-4" />
                Cookie Preferences
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We use essential storage for security, session continuity, and form preferences. You can accept all or keep essential-only usage. See our{" "}
                <Link to="/cookie-policy" className="text-primary hover:underline">
                  Cookie Policy
                </Link>
                .
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              onClick={() => saveConsent("essential")}
              className="min-h-[44px] rounded-xl border border-secondary/20 px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
            >
              Essential Only
            </button>
            <button
              onClick={() => saveConsent("accepted")}
              className="min-h-[44px] rounded-xl px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-orange)] transition-all hover:-translate-y-0.5"
              style={{ background: "var(--gradient-orange)" }}
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
