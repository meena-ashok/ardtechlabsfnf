import { useEffect, useState } from "react";
import { BadgeCheck, Shield } from "lucide-react";
import { Link } from "react-router-dom";

type CookiePrefs = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = "cookie_consent_preferences_v1";

const defaultPrefs: CookiePrefs = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export default function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) setOpen(true);
  }, []);

  const save = (prefs: CookiePrefs) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[100] w-[min(96vw,860px)] glass-card border border-secondary/30 p-4 sm:p-5">
      <div className="flex flex-col gap-3">
        <div>
          <h3 className="text-sm sm:text-base font-bold text-foreground">Cookie Preferences</h3>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            We use essential cookies and optional cookies to improve performance and marketing. Read our{" "}
            <Link to="/cookie-policy" className="text-primary hover:underline">Cookie Policy</Link> and{" "}
            <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {["GDPR Compliant", "CAN-SPAM Compliant", "ISO 27001", "SOC 2 Type II"].map((item) => (
            <span key={item} className="inline-flex items-center gap-1 rounded-full border border-secondary/30 bg-foreground/[0.03] px-2.5 py-1 text-[0.65rem] sm:text-xs text-muted-foreground">
              <BadgeCheck className="w-3 h-3 text-primary" /> {item}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          <button onClick={() => save({ necessary: true, analytics: true, marketing: true })} className="px-3.5 py-2 text-xs font-semibold rounded-lg text-primary-foreground" style={{ background: "var(--gradient-orange)" }}>
            Accept All
          </button>
          <button onClick={() => save(defaultPrefs)} className="px-3.5 py-2 text-xs font-semibold rounded-lg border border-secondary/30 text-foreground hover:border-primary/40">
            Decline Optional
          </button>
          <button onClick={() => save({ necessary: true, analytics: true, marketing: false })} className="px-3.5 py-2 text-xs font-semibold rounded-lg border border-secondary/30 text-foreground hover:border-primary/40 inline-flex items-center gap-1">
            <Shield className="w-3.5 h-3.5" /> Cookie Settings
          </button>
        </div>
      </div>
    </div>
  );
}
