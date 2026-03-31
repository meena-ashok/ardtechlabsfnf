import { useEffect, useState } from "react";
import { adminApi } from "@/services/api";
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
  { key: "totalServices", label: "Services", icon: Code, color: "text-primary" },
  { key: "totalProjects", label: "Projects", icon: FolderOpen, color: "text-navy-light" },
  { key: "totalCaseStudies", label: "Case Studies", icon: Briefcase, color: "text-primary" },
  { key: "totalTestimonials", label: "Testimonials", icon: Star, color: "text-navy-light" },
  { key: "totalFaqs", label: "FAQs", icon: HelpCircle, color: "text-primary" },
  { key: "totalTeamMembers", label: "Team Members", icon: Users, color: "text-navy-light" },
  { key: "totalMessages", label: "Total Messages", icon: MessageSquare, color: "text-primary" },
  { key: "unreadMessages", label: "Unread Messages", icon: MessageCircle, color: "text-orange-light" },
];

export default function DashboardPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    adminApi.getStats()
      .then(setStats)
      .catch(console.error)
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
      <h1 className="text-lg font-bold text-foreground mb-1">Dashboard</h1>
      <p className="text-sm text-muted-foreground mb-6">Welcome to the ARD TechLabs admin panel</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {statCards.map((card) => (
          <div
            key={card.key}
            className="bg-background-card/70 border border-secondary/20 rounded-xl p-4 transition-all hover:border-primary/30 hover:-translate-y-0.5"
          >
            <div className="flex items-center gap-2.5 mb-2">
              <card.icon className={`w-5 h-5 ${card.color}`} />
              <span className="text-xs font-medium text-muted-foreground">{card.label}</span>
            </div>
            <div className="text-2xl font-extrabold text-foreground">
              {stats ? (stats as any)[card.key] : 0}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-background-card/70 border border-secondary/20 rounded-xl p-5">
        <h2 className="text-sm font-bold text-foreground mb-3">Quick Actions</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {[
            { label: "Add Service", href: "/admin/services" },
            { label: "Add Project", href: "/admin/projects" },
            { label: "View Messages", href: "/admin/messages" },
            { label: "Edit FAQs", href: "/admin/faqs" },
          ].map((action) => (
            <a
              key={action.label}
              href={action.href}
              className="px-3 py-2 bg-foreground/[0.04] border border-foreground/[0.08] rounded-lg text-xs font-medium text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors text-center"
            >
              {action.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
