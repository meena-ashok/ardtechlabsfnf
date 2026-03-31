import { Link } from "react-router-dom";
import { Linkedin, Twitter, Github, ArrowUpRight, Sparkles, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import logo from "@/assets/logo.png";

const socials = [
  { icon: <Linkedin className="w-4 h-4" />, label: "LinkedIn", href: "#" },
  { icon: <Twitter className="w-4 h-4" />, label: "Twitter", href: "#" },
  { icon: <Github className="w-4 h-4" />, label: "GitHub", href: "#" },
];

const Footer = () => (
  <footer className="relative overflow-hidden bg-background" role="contentinfo">
    <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent 5%, hsl(25 89% 54%), hsl(222 65% 43%), hsl(25 89% 54%), transparent 95%)" }} />
    <div className="container pt-10 sm:pt-14 pb-6 sm:pb-8">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 mb-10 sm:mb-12">
        <div className="col-span-2 lg:col-span-4">
          <Link to="/" className="inline-block mb-4 sm:mb-5"><img src={logo} alt="ARD TechLabs" className="h-12 sm:h-14 w-auto" /></Link>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-[320px] mb-5 sm:mb-6">Trusted software engineering partner for USA, UK, Europe, Canada, and Australia.</p>
          <div className="flex gap-2.5">{socials.map((s) => <a key={s.label} href={s.href} className="w-10 h-10 rounded-xl bg-foreground/[0.04] border border-secondary/20 text-muted-foreground flex items-center justify-center">{s.icon}</a>)}</div>
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-xs font-bold text-foreground tracking-widest uppercase mb-4 sm:mb-5">Services</h4>
          <ul className="space-y-2 sm:space-y-2.5">{["Full-Stack Development", "Mobile Apps", "AI & Machine Learning", "Cloud Solutions", "DevOps & CI/CD"].map((s) => <li key={s}><Link to="/services" className="text-xs sm:text-sm text-muted-foreground hover:text-primary">{s}</Link></li>)}</ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-xs font-bold text-foreground tracking-widest uppercase mb-4 sm:mb-5">Company</h4>
          <ul className="space-y-2 sm:space-y-2.5">{[
            { label: "About Us", path: "/about" },
            { label: "Case Studies", path: "/work" },
            { label: "Portfolio", path: "/portfolio" },
            { label: "Hire Talent", path: "/hire" },
            { label: "Free Trial", path: "/free-trial" },
            { label: "FAQ", path: "/faq" },
          ].map((l) => <li key={l.path}><Link to={l.path} className="text-xs sm:text-sm text-muted-foreground hover:text-primary">{l.label}</Link></li>)}</ul>
        </div>

        <div className="col-span-2 sm:col-span-1 lg:col-span-3">
          <h4 className="text-xs font-bold text-foreground tracking-widest uppercase mb-4 sm:mb-5">Contact</h4>
          <ul className="space-y-3 sm:space-y-4">
            <li className="flex items-start gap-2.5"><Mail className="w-4 h-4 text-primary mt-0.5" /><span className="text-xs sm:text-sm text-muted-foreground">hello@ardtechlabs.com</span></li>
            <li className="flex items-start gap-2.5"><Phone className="w-4 h-4 text-primary mt-0.5" /><span className="text-xs sm:text-sm text-muted-foreground">+1 (555) 123-4567</span></li>
            <li className="flex items-start gap-2.5"><MapPin className="w-4 h-4 text-primary mt-0.5" /><span className="text-xs sm:text-sm text-muted-foreground">Ahmedabad, India</span></li>
          </ul>
        </div>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">{["GDPR", "CAN-SPAM", "ISO 27001", "SOC 2 Type II"].map((badge) => <span key={badge} className="inline-flex items-center gap-1 rounded-full border border-secondary/30 px-2.5 py-1 text-[0.65rem] text-muted-foreground"><ShieldCheck className="w-3 h-3 text-primary" />{badge}</span>)}</div>

      <div className="relative border-t border-secondary/20 pt-5 sm:pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
        <p className="text-[0.68rem] sm:text-xs text-muted-foreground">© {new Date().getFullYear()} ARD TechLabs. All rights reserved.</p>
        <div className="flex gap-4 sm:gap-5 flex-wrap justify-center">
          <Link to="/privacy-policy" className="text-[0.68rem] sm:text-xs text-muted-foreground hover:text-primary">Privacy Policy</Link>
          <Link to="/terms-of-service" className="text-[0.68rem] sm:text-xs text-muted-foreground hover:text-primary">Terms of Service</Link>
          <Link to="/cookie-policy" className="text-[0.68rem] sm:text-xs text-muted-foreground hover:text-primary">Cookie Policy</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
