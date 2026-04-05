import { useEffect, useState } from "react";
import { adminApi } from "@/services/api";
import { Link } from "react-router-dom";
import {
  Code, FolderOpen, Briefcase, Star, HelpCircle,
  Users, MessageSquare, MessageCircle, Shield, Lock,
  ArrowRight, Plus, Eye, Edit, MoreVertical
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
  { key: "totalServices", label: "Services", icon: Code, color: "#6A7BFF", gradient: "from-[#6A7BFF]/20 to-transparent" },
  { key: "totalProjects", label: "Projects", icon: FolderOpen, color: "#FF6A8B", gradient: "from-[#FF6A8B]/20 to-transparent" },
  { key: "totalCaseStudies", label: "Case Studies", icon: Briefcase, color: "#FFC76A", gradient: "from-[#FFC76A]/20 to-transparent" },
  { key: "totalTestimonials", label: "Testimonials", icon: Star, color: "#6AFFB4", gradient: "from-[#6AFFB4]/20 to-transparent" },
  { key: "totalFaqs", label: "FAQs", icon: HelpCircle, color: "#B46AFF", gradient: "from-[#B46AFF]/20 to-transparent" },
  { key: "totalTeamMembers", label: "Team Members", icon: Users, color: "#FF6AB4", gradient: "from-[#FF6AB4]/20 to-transparent" },
  { key: "totalMessages", label: "Total Messages", icon: MessageSquare, color: "#6AC7FF", gradient: "from-[#6AC7FF]/20 to-transparent" },
  { key: "unreadMessages", label: "Unread Messages", icon: MessageCircle, color: "#FF6A6A", gradient: "from-[#FF6A6A]/20 to-transparent" },
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

  const StatCard = ({ card }: { card: typeof statCards[0] }) => (
    <div
      className={`relative group overflow-hidden rounded-2xl p-4 border border-white/10 bg-white/5 transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-black/10`}
    >
      <div className={`absolute top-0 left-0 h-full w-1 bg-gradient-to-b ${card.gradient} opacity-50 group-hover:opacity-100 transition-opacity`}/>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div style={{color: card.color}} className="flex-shrink-0">
             <card.icon className="w-6 h-6" />
          </div>
          <span className="text-sm font-semibold text-white/70 group-hover:text-white">{card.label}</span>
        </div>
        <div className="text-2xl font-extrabold text-white">
          {stats ? (stats as any)[card.key] : 0}
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white">Admin Dashboard</h1>
          <p className="text-sm text-white/50">Welcome back, Admin. Manage your digital realm.</p>
        </div>
        <Link to="/admin/settings" className="px-4 py-2 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors flex items-center gap-2">
          <Plus className="w-4 h-4"/>
          <span>New Entry</span>
        </Link>
      </div>

      {error && (
        <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((card) => <StatCard key={card.key} card={card} />)}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-5">
            <h2 className="text-lg font-bold text-white mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: "Add Service", href: "/admin/services", icon: Plus },
                { label: "Add Project", href: "/admin/projects", icon: Plus },
                { label: "View Messages", href: "/admin/messages", icon: Eye },
                { label: "Edit FAQs", href: "/admin/faqs", icon: Edit },
              ].map((action) => (
                <Link
                  key={action.label}
                  to={action.href}
                  className="group flex flex-col items-center justify-center p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-200"
                >
                  <action.icon className="w-6 h-6 text-white/70 group-hover:text-white mb-2" />
                  <span className="text-xs font-semibold text-white/70 group-hover:text-white text-center">{action.label}</span>
                </Link>
              ))}
            </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col">
           <h2 className="text-lg font-bold text-white mb-4">Inbox Status</h2>
           <div className="flex-grow flex flex-col items-center justify-center text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center mb-4">
                 <MessageCircle className="w-12 h-12 text-primary"/>
              </div>
              <p className="text-2xl font-bold text-white">{stats?.unreadMessages || 0}</p>
              <p className="text-sm text-white/50">Unread Messages</p>
           </div>
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
          <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
              <Shield className="w-6 h-6 text-green-400"/>
              <span>Compliance & Data Security</span>
          </h2>
          <p className="text-sm text-white/50 max-w-3xl mb-6">
              We maintain the highest standards for data protection and are compliant with major regulations across key regions. All sensitive data is encrypted at rest and in transit.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {[
              { label: "GDPR (Europe)", status: "Active" },
              { label: "CAN-SPAM (USA)", status: "Active" },
              { label: "Privacy Act (AU)", status: "Active" },
              { label: "DPA 2018 (UK)", status: "Active" },
            ].map((c) => (
              <div key={c.label} className="bg-white/5 border border-white/10 rounded-lg p-3 text-center">
                <div className="text-xs font-semibold text-white/60 mb-1">{c.label}</div>
                <div className="text-sm font-bold text-green-400">{c.status}</div>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
}
