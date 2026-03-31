import { Link } from "react-router-dom";
import { Linkedin, Twitter, Github, ArrowUpRight, Sparkles, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const socials = [
  { icon: <Linkedin className="w-4 h-4" />, label: "LinkedIn", href: "#" },
  { icon: <Twitter className="w-4 h-4" />, label: "Twitter", href: "#" },
  { icon: <Github className="w-4 h-4" />, label: "GitHub", href: "#" },
];

const Footer = () => (
  <footer className="relative overflow-hidden bg-background" role="contentinfo">
    {/* Top gradient border */}
    <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent 5%, hsl(25 89% 54%), hsl(222 65% 43%), hsl(25 89% 54%), transparent 95%)" }} />

    {/* Decorative background orbs */}
    <div className="absolute top-20 -left-32 w-72 h-72 rounded-full bg-primary/[0.04] blur-[100px] pointer-events-none" />
    <div className="absolute bottom-10 -right-24 w-60 h-60 rounded-full bg-navy/[0.06] blur-[80px] pointer-events-none" />

    {/* CTA Banner */}
    <div className="relative border-b border-secondary/20">
      <div className="container py-10 sm:py-14">
        <div className="relative glass-card p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "var(--gradient-rule)", backgroundSize: "200%", animation: "grad-shift 4s linear infinite" }} />
          <div className="absolute -bottom-16 -right-16 w-40 h-40 rounded-full bg-primary/[0.06] blur-[60px]" />
          <div className="text-center lg:text-left">
            <div className="flex items-center gap-2 justify-center lg:justify-start mb-2">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold tracking-widest uppercase text-primary">Let's Collaborate</span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-foreground leading-tight">
              Ready to build something <span className="text-primary">extraordinary</span>?
            </h3>
            <p className="text-sm text-muted-foreground mt-2 max-w-md mx-auto lg:mx-0">
              Free consultation for businesses across USA & Europe.
            </p>
          </div>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2.5 font-bold text-sm px-7 py-3.5 rounded-[14px] text-primary-foreground shadow-[var(--shadow-orange)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-orange-lg)] active:scale-95 min-h-[48px] flex-shrink-0"
            style={{ background: "var(--gradient-orange)" }}
          >
            Get Free Consultation
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </div>

    {/* Main footer content */}
    <div className="container pt-10 sm:pt-14 pb-6 sm:pb-8">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 mb-10 sm:mb-12">
        {/* Brand column */}
        <div className="col-span-2 lg:col-span-4">
          <Link to="/" className="inline-block mb-4 sm:mb-5 transition-transform hover:scale-[1.03]" aria-label="ARD TechLabs Home">
            <img src={logo} alt="ARD TechLabs" className="h-12 sm:h-14 w-auto" />
          </Link>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-[280px] mb-5 sm:mb-6">
            Premier IT services delivering full-stack, AI, cloud and DevOps solutions for businesses across USA and Europe.
          </p>

          {/* Social icons */}
          <div className="flex gap-2.5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="group w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-foreground/[0.04] border border-secondary/20 text-muted-foreground flex items-center justify-center transition-all duration-300 hover:bg-primary hover:border-primary hover:text-primary-foreground hover:-translate-y-1.5 hover:scale-110 hover:shadow-[var(--shadow-orange)] hover:rotate-[-5deg]"
                aria-label={`Follow us on ${s.label}`}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="lg:col-span-3">
          <h4 className="text-xs font-bold text-foreground tracking-widest uppercase mb-4 sm:mb-5 flex items-center gap-2">
            <span className="w-5 h-0.5 rounded-full bg-primary" />
            Services
          </h4>
          <ul className="space-y-2 sm:space-y-2.5">
            {["Full-Stack Development", "Mobile Apps", "AI & Machine Learning", "Cloud Solutions", "DevOps & CI/CD"].map((s) => (
              <li key={s}>
                <Link to="/services" className="group text-xs sm:text-sm text-muted-foreground hover:text-primary transition-all inline-flex items-center gap-1.5">
                  <span className="w-0 group-hover:w-2 h-px bg-primary transition-all duration-300" />
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div className="lg:col-span-2">
          <h4 className="text-xs font-bold text-foreground tracking-widest uppercase mb-4 sm:mb-5 flex items-center gap-2">
            <span className="w-5 h-0.5 rounded-full bg-primary" />
            Company
          </h4>
          <ul className="space-y-2 sm:space-y-2.5">
            {[
              { label: "About Us", path: "/about" },
              { label: "Case Studies", path: "/work" },
              { label: "Portfolio", path: "/portfolio" },
              { label: "Hire Talent", path: "/hire" },
              { label: "FAQ", path: "/faq" },
            ].map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="group text-xs sm:text-sm text-muted-foreground hover:text-primary transition-all inline-flex items-center gap-1.5">
                  <span className="w-0 group-hover:w-2 h-px bg-primary transition-all duration-300" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="col-span-2 sm:col-span-1 lg:col-span-3">
          <h4 className="text-xs font-bold text-foreground tracking-widest uppercase mb-4 sm:mb-5 flex items-center gap-2">
            <span className="w-5 h-0.5 rounded-full bg-primary" />
            Contact
          </h4>
          <ul className="space-y-3 sm:space-y-4">
            <li className="flex items-start gap-2.5">
              <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-xs sm:text-sm text-muted-foreground">hello@ardtechlabs.com</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-xs sm:text-sm text-muted-foreground">+1 (555) 123-4567</span>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-xs sm:text-sm text-muted-foreground">Ahmedabad, India</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-secondary/20 pt-5 sm:pt-6">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, hsl(25 89% 54% / 0.3), transparent)" }} />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-[0.68rem] sm:text-xs text-muted-foreground">
            © {new Date().getFullYear()} ARD TechLabs. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-5 flex-wrap justify-center">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((t) => (
              <a key={t} href="#" className="text-[0.68rem] sm:text-xs text-muted-foreground hover:text-primary transition-colors">
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
