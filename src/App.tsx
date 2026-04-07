import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/contexts/AuthContext";
import ScrollToTop from "@/components/ScrollToTop";

// Layouts
import PublicLayout from "@/components/PublicLayout";
import AdminLayout from "@/admin/components/AdminLayout";

// Admin
import ProtectedRoute from "@/admin/components/ProtectedRoute";
import LoginPage from "@/admin/pages/LoginPage";
import DashboardPage from "@/admin/pages/DashboardPage";
import AdminServicesPage from "@/admin/pages/AdminServicesPage";
import AdminProjectsPage from "@/admin/pages/AdminProjectsPage";
import AdminCaseStudiesPage from "@/admin/pages/AdminCaseStudiesPage";
import AdminTestimonialsPage from "@/admin/pages/AdminTestimonialsPage";
import AdminFaqsPage from "@/admin/pages/AdminFaqsPage";
import AdminTeamPage from "@/admin/pages/AdminTeamPage";
import AdminTechStackPage from "@/admin/pages/AdminTechStackPage";
import AdminHireTalentsPage from "@/admin/pages/AdminHireTalentsPage";
import AdminMessagesPage from "@/admin/pages/AdminMessagesPage";
import AdminSettingsPage from "@/admin/pages/AdminSettingsPage";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              {/* Public Routes */}
              <Route path="/*" element={<PublicLayout />} />

              {/* Admin Routes */}
              <Route path="/admin/login" element={<LoginPage />} />
              <Route
                path="/admin"
                element={
                  <ProtectedRoute>
                    <AdminLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<DashboardPage />} />
                <Route path="services" element={<AdminServicesPage />} />
                <Route path="projects" element={<AdminProjectsPage />} />
                <Route path="case-studies" element={<AdminCaseStudiesPage />} />
                <Route path="testimonials" element={<AdminTestimonialsPage />} />
                <Route path="faqs" element={<AdminFaqsPage />} />
                <Route path="team" element={<AdminTeamPage />} />
                <Route path="tech-stack" element={<AdminTechStackPage />} />
                <Route path="hire-talents" element={<AdminHireTalentsPage />} />
                <Route path="messages" element={<AdminMessagesPage />} />
                <Route path="settings" element={<AdminSettingsPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
