import { useState } from "react";
import { Link, useLocation, useNavigate, Outlet } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import {
  LayoutDashboard, Settings, MessageSquare, Users, Code,
  Briefcase, HelpCircle, Star, FolderOpen, Cpu, UserCheck,
  Menu, X, LogOut, ChevronRight
} from "lucide-react";

const navItems = [
  { label: "Dashboard", path: "/admin", icon: LayoutDashboard },
  { label: "Services", path: "/admin/services", icon: Code },
  { label: "Projects", path: "/admin/projects", icon: FolderOpen },
  { label: "Case Studies", path: "/admin/case-studies", icon: Briefcase },
  { label: "Testimonials", path: "/admin/testimonials", icon: Star },
  { label: "FAQs", path: "/admin/faqs", icon: HelpCircle },
  { label: "Team", path: "/admin/team", icon: Users },
  { label: "Tech Stack", path: "/admin/tech-stack", icon: Cpu },
  { label: "Hire Talents", path: "/admin/hire-talents", icon: UserCheck },
  { label: "Messages", path: "/admin/messages", icon: MessageSquare },
  { label: "Settings", path: "/admin/settings", icon: Settings },
];

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar overlay (mobile) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-[998] lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 bottom-0 w-64 bg-background-alt border-r border-secondary/20 z-[999] transition-transform lg:translate-x-0 lg:static lg:z-auto ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between h-14 px-4 border-b border-secondary/20">
          <Link to="/admin" className="text-sm font-bold text-primary">
            ARD Admin
          </Link>
          <button
            className="lg:hidden p-1 text-muted-foreground hover:text-foreground"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav className="p-2 space-y-0.5 overflow-y-auto h-[calc(100vh-56px-60px)]">
          {navItems.map((item) => {
            const isActive =
              item.path === "/admin"
                ? location.pathname === "/admin"
                : location.pathname.startsWith(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-[0.8rem] font-medium transition-all ${
                  isActive
                    ? "bg-primary/10 text-primary border border-primary/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-foreground/[0.04]"
                }`}
              >
                <item.icon className="w-4 h-4 flex-shrink-0" />
                {item.label}
                {isActive && <ChevronRight className="w-3 h-3 ml-auto" />}
              </Link>
            );
          })}
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-secondary/20 bg-background-alt">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-primary-foreground" style={{ background: "var(--gradient-orange)" }}>
              {user?.name?.charAt(0) || "A"}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-semibold text-foreground truncate">{user?.name}</div>
              <div className="text-[0.65rem] text-muted-foreground truncate">{user?.email}</div>
            </div>
            <button
              onClick={handleLogout}
              className="p-1.5 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-14 border-b border-secondary/20 flex items-center px-4 gap-3 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
          <button
            className="lg:hidden p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-foreground/5"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex-1" />
          <Link
            to="/"
            className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            View Site
          </Link>
        </header>
        <main className="flex-1 p-4 sm:p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
