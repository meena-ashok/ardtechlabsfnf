import { Routes, Route } from "react-router-dom";
import BackgroundOrbs from "@/components/BackgroundOrbs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import HomePage from "@/pages/HomePage";
import ServicesPage from "@/pages/ServicesPage";
import TechnologyPage from "@/pages/TechnologyPage";
import WorkPage from "@/pages/WorkPage";
import PortfolioPage from "@/pages/PortfolioPage";
import AboutPage from "@/pages/AboutPage";
import HirePage from "@/pages/HirePage";
import FAQPage from "@/pages/FAQPage";
import ContactPage from "@/pages/ContactPage";
import FreeTrialPage from "@/pages/FreeTrialPage";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage";
import TermsOfServicePage from "@/pages/TermsOfServicePage";
import CookiePolicyPage from "@/pages/CookiePolicyPage";
import NotFound from "@/pages/NotFound";

const PublicLayout = () => (
  <>
    <BackgroundOrbs />
    <div className="relative z-[2]">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/hire" element={<HirePage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/free-trial" element={<FreeTrialPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  </>
);

export default PublicLayout;
