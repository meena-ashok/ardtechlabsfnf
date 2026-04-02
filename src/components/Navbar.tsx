import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Technology", path: "/technology" },
  { label: "Work", path: "/work" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "About", path: "/about" },
  { label: "Hire Talent", path: "/hire" },
  { label: "FAQ", path: "/faq" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    document.body.style.overflow = "";
  }, [location]);

  const toggleMobile = () => {
    setMobileOpen((v) => {
      document.body.style.overflow = !v ? "hidden" : "";
      return !v;
    });
  };

  return (
    <>
      {/* Free Trial Banner */}
      {bannerVisible && (
        <div className="fixed top-0 left-0 right-0 z-[950] min-h-8 sm:h-9 flex items-center justify-center gap-1.5 sm:gap-2 px-8 sm:px-10 py-1 text-[0.62rem] sm:text-xs font-semibold text-primary-foreground text-center leading-tight"
          style={{ background: "var(--gradient-orange)" }}
        >
          <span className="hidden sm:inline">Get Free Trial</span>
          <span className="mx-1 opacity-60 hidden sm:inline">--</span>
          <Link to="/free-trial" className="underline underline-offset-2 hover:opacity-90 transition-opacity">
            One Week Developer Access. Try Before You Hire.
          </Link>
          <button
            onClick={() => setBannerVisible(false)}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-0.5 rounded hover:bg-white/20 transition-colors"
            aria-label="Close banner"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <header
        className="fixed left-0 right-0 z-[900] h-[3.35rem] sm:h-16 transition-all duration-400"
        style={{ top: bannerVisible ? "2rem" : "0" }}
      >
        <div
          className={`absolute inset-0 transition-all duration-400 ${
            scrolled
              ? "bg-background/[0.92] backdrop-blur-[24px] border-b border-foreground/[0.07] shadow-[0_4px_40px_rgba(0,0,0,0.5)]"
              : "bg-transparent border-b border-transparent"
          }`}
        />
        <nav className="relative z-[1] h-full container flex items-center justify-between gap-3 sm:gap-4" aria-label="Main navigation">
          <Link
            to="/"
            className="flex items-center transition-transform hover:scale-[1.04]"
            aria-label="ARD TechLabs Home"
          >
            <img
              src={logo}
              alt="ARD TechLabs"
              className="h-9 sm:h-11 w-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-[0.78rem] font-semibold tracking-wide px-3 py-2 rounded-lg transition-all relative ${
                  location.pathname === item.path
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-1 left-3 right-3 h-0.5 bg-primary rounded transition-all ${
                    location.pathname === item.path ? "opacity-100" : "opacity-0"
                  }`}
                />
              </Link>
            ))}
            <Link
              to="/free-trial"
              className={`ml-1 text-[0.78rem] font-semibold px-3 py-2 rounded-[10px] border transition-all hover:-translate-y-0.5 ${
                location.pathname === "/free-trial"
                  ? "text-primary border-primary/40 bg-primary/10"
                  : "text-green-400 border-green-400/30 hover:border-green-400/60 hover:bg-green-400/10"
              }`}
            >
              Free Trial
            </Link>
            <Link
              to="/contact"
              className="ml-1.5 text-[0.78rem] font-semibold px-4 py-2 rounded-[10px] text-primary-foreground shadow-[var(--shadow-orange)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-orange-lg)]"
              style={{ background: "var(--gradient-orange)" }}
            >
              Contact Us
            </Link>
          </div>

          <button
            className="lg:hidden flex flex-col gap-[5px] p-2.5 -mr-2 rounded-lg hover:bg-foreground/[0.05] transition-colors"
            onClick={toggleMobile}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-background/[0.97] backdrop-blur-[32px] z-[850] flex flex-col items-center justify-center gap-2.5 sm:gap-4 p-5 sm:p-8 animate-in fade-in overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-[1.1rem] sm:text-2xl font-bold px-6 py-2.5 rounded-xl transition-all min-h-[46px] inline-flex items-center ${
                location.pathname === item.path
                  ? "text-primary bg-primary/10"
                  : "text-foreground hover:text-primary hover:bg-primary/10"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/free-trial"
            className="text-[1.1rem] sm:text-2xl font-bold text-green-400 px-6 py-2.5 rounded-xl transition-all hover:bg-green-400/10 min-h-[46px] inline-flex items-center"
          >
            Free Trial
          </Link>
          <Link
            to="/contact"
            className="text-[1.1rem] sm:text-2xl font-bold text-primary-foreground px-6 py-2.5 rounded-xl mt-2 min-h-[48px] inline-flex items-center"
            style={{ background: "var(--gradient-orange)" }}
          >
            Contact Us
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
