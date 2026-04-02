import { useEffect, useState } from "react";
import { adminApi } from "@/services/api";
import { Link } from "react-router-dom";
import {
  Code, FolderOpen, Briefcase, Star, HelpCircle,
  Users, MessageSquare, MessageCircle
} from "lucide-react";

interface Stats {
  totalServices: number;
  totalProjects: number;
  totalTestimonials: number;
  totalFaqs: number;
  totalTeamMembers: number;
  totalCaseStudies: number;
  totalMessages: number;
  unreadMessages: number;
}

const statCards = [
  { key: "totalServices", label: "Services", icon: Code, color: "text-primary", ring: "border-primary/25", bg: "from-primary/[0.14] to-primary/[0.02]" },
  { key: "totalProjects", label: "Projects", icon: FolderOpen, color: "text-navy-light", ring: "border-navy-light/25", bg: "from-navy-light/[0.12] to-navy-light/[0.02]" },
  { key: "totalCaseStudies", label: "Case Studies", icon: Briefcase, color: "text-primary", ring: "border-primary/25", bg: "from-primary/[0.14] to-primary/[0.02]" },
  { key: "totalTestimonials", label: "Testimonials", icon: Star, color: "text-navy-light", ring: "border-navy-light/25", bg: "from-navy-light/[0.12] to-navy-light/[0.02]" },
  { key: "totalFaqs", label: "FAQs", icon: HelpCircle, color: "text-primary", ring: "border-primary/25", bg: "from-primary/[0.14] to-primary/[0.02]" },
  { key: "totalTeamMembers", label: "Team Members", icon: Users, color: "text-navy-light", ring: "border-navy-light/25", bg: "from-navy-light/[0.12] to-navy-light/[0.02]" },
  { key: "totalMessages", label: "Total Messages", icon: MessageSquare, color: "text-primary", ring: "border-primary/25", bg: "from-primary/[0.14] to-primary/[0.02]" },
  { key: "unreadMessages", label: "Unread Messages", icon: MessageCircle, color: "text-orange-light", ring: "border-orange-light/35", bg: "from-orange-light/[0.16] to-orange-light/[0.03]" },
];

export default function DashboardPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    adminApi.getStats()
      .then(setStats)
      .catch((err) => {
        console.error(err);
        setError(err.message || "Unable to load dashboard stats.");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div>
      <div className="mb-5 sm:mb-6 rounded-2xl border border-secondary/20 bg-gradient-to-r from-background-card/70 via-background-card/45 to-background-card/70 p-4 sm:p-5">
        <h1 className="text-lg sm:text-xl font-extrabold tracking-tight text-foreground mb-1">Dashboard</h1>
        <p className="text-xs sm:text-sm text-muted-foreground">Website and lead operations at a glance.</p>
      </div>

      {error && (
        <div className="mb-5 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {error}
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4">
        {statCards.map((card) => (
          <div
            key={card.key}
            className={`relative overflow-hidden bg-background-card/70 border ${card.ring} rounded-xl p-3 sm:p-4 transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${card.bg} opacity-60 pointer-events-none`} />
            <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
              <span className="relative inline-flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg border border-foreground/10 bg-background/60">
                <card.icon className={`w-4 h-4 ${card.color}`} />
              </span>
              <span className="text-[0.68rem] sm:text-xs font-semibold text-muted-foreground leading-tight">{card.label}</span>
            </div>
            <div className="relative text-xl sm:text-2xl font-extrabold text-foreground">
              {stats ? (stats as any)[card.key] : 0}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-7 sm:mt-8 bg-background-card/70 border border-secondary/20 rounded-xl p-4 sm:p-5">
        <h2 className="text-sm font-bold text-foreground mb-3">Quick Actions</h2>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-2">
          {[
            { label: "Add Service", href: "/admin/services" },
            { label: "Add Project", href: "/admin/projects" },
            { label: "View Messages", href: "/admin/messages" },
            { label: "Edit FAQs", href: "/admin/faqs" },
          ].map((action) => (
            <Link
              key={action.label}
              to={action.href}
              className="px-3 py-2.5 bg-background/60 border border-foreground/[0.08] rounded-lg text-xs font-semibold text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/[0.08] transition-colors text-center min-h-[40px]"
            >
              {action.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-7 sm:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
        <div className="lg:col-span-8 bg-background-card/70 border border-secondary/20 rounded-2xl p-5 sm:p-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-primary/20" />
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
            <div>
              <h2 className="text-base font-bold text-foreground flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Regional Compliance & Data Protection
              </h2>
              <p className="text-xs text-muted-foreground mt-1">Status of global regulatory alignments for USA, UK, Europe, and Australia.</p>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
              <div className="w-2 h-2 rounded-full bg-green-500" style={{ animation: "blink-dot 2s infinite" }} />
              <span className="text-[0.65rem] font-bold text-green-500 uppercase tracking-wider">Fully Compliant</span>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {[
              { label: "GDPR (Europe)", status: "Active" },
              { label: "CAN-SPAM (USA)", status: "Active" },
              { label: "CASL (Canada)", status: "Active" },
              { label: "ISO 27001", status: "Aligned" },
              { label: "SOC 2 Type II", status: "Aligned" },
              { label: "Privacy Act (AU)", status: "Active" },
              { label: "DPA 2018 (UK)", status: "Active" },
              { label: "Data Security", status: "Encrypted" },
            ].map((c) => (
              <div key={c.label} className="bg-background/40 border border-foreground/[0.04] rounded-xl p-3 text-center">
                <div className="text-[0.62rem] font-bold text-muted-foreground uppercase tracking-widest mb-1">{c.label}</div>
                <div className="text-[0.7rem] font-extrabold text-primary">{c.status}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 bg-background-card/70 border border-secondary/20 rounded-2xl p-5 sm:p-6 flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 border border-primary/20">
            <Lock className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-sm font-extrabold text-foreground mb-2">Secure Infrastructure</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            All lead data from US, UK, and European regions is handled with role-based access control and stored using industry-standard AES-256 encryption.
          </p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-background-card/70 border border-secondary/20 rounded-xl p-4 sm:p-5">
          <h2 className="text-sm font-bold text-foreground mb-2">Publishing Health</h2>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Use Settings to keep company details, homepage hero copy, and marquee technologies in sync with the public website.
          </p>
        </div>
        <div className="bg-background-card/70 border border-secondary/20 rounded-xl p-4 sm:p-5">
          <h2 className="text-sm font-bold text-foreground mb-2">Inbox Overview</h2>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {stats?.unreadMessages
              ? `${stats.unreadMessages} unread message${stats.unreadMessages === 1 ? "" : "s"} need attention.`
              : "All caught up. No unread contact messages right now."}
          </p>
        </div>
      </div>
    </div>
  );
}
