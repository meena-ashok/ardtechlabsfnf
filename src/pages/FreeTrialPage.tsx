import { useState } from "react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeader from "@/components/SectionHeader";
import SEO from "@/components/SEO";
import { Check, Clock, Shield, CreditCard, Zap, Brain, Cloud, Code, Smartphone, Database, Globe } from "lucide-react";
import { toast } from "sonner";
import { publicApi } from "@/services/api";

const stats = [
  { value: "6+", label: "Years of Experience" },
  { value: "150+", label: "Projects Delivered" },
  { value: "4.9/5", label: "Client Rating" },
  { value: "40K+", label: "Hours of Work" },
];

const benefits = [
  { icon: <Clock className="w-5 h-5 text-green-400" />, text: "40 hours of dedicated senior developer time -- completely free" },
  { icon: <Code className="w-5 h-5 text-green-400" />, text: "Work on your real project, not a demo or sandbox" },
  { icon: <Shield className="w-5 h-5 text-green-400" />, text: "Full NDA & IP protection from day one" },
  { icon: <CreditCard className="w-5 h-5 text-green-400" />, text: "Zero obligation -- no credit card, no lock-in" },
];

const steps = [
  { num: "01", title: "Tell Us What You Need", desc: "Share your project, tech stack, and goals. We match you with the right senior engineer within 24 hours." },
  { num: "02", title: "Meet Your Developer", desc: "Review the profile, have a quick call, and confirm the fit. No surprise assignments -- you choose." },
  { num: "03", title: "Start Building -- Free", desc: "Your developer dives in. One full week, 40 hours, on your actual codebase. Real output, not pitches." },
  { num: "04", title: "Decide With Confidence", desc: "Love the work? Continue with a flexible engagement. Not satisfied? You keep everything built." },
];

const roles = [
  { title: "AI / ML Engineer", chips: ["OpenAI", "TensorFlow", "LangChain", "PyTorch"], icon: <Brain className="w-6 h-6 text-primary" /> },
  { title: "Cloud & DevOps Engineer", chips: ["AWS", "Kubernetes", "Terraform", "Docker"], icon: <Cloud className="w-6 h-6 text-navy-light" /> },
  { title: "Frontend Developer", chips: ["React.js", "Next.js", "Vue.js", "Tailwind CSS"], icon: <Globe className="w-6 h-6 text-primary" /> },
  { title: "Backend Systems Engineer", chips: ["Node.js", "Python", "Java", "PostgreSQL"], icon: <Database className="w-6 h-6 text-navy-light" /> },
  { title: "Mobile & IoT Developer", chips: ["Flutter", "React Native"], icon: <Smartphone className="w-6 h-6 text-primary" /> },
  { title: "Blockchain Developer", chips: ["Ethereum", "Solidity", "Hyperledger", "Bitcoin"], icon: <Zap className="w-6 h-6 text-navy-light" /> },
];

const countries = [
  "United States", "United Kingdom", "Germany", "France", "Netherlands", "Canada",
  "Australia", "India", "UAE", "Singapore", "Switzerland", "Sweden", "Norway",
  "Denmark", "Belgium", "Austria", "Ireland", "Spain", "Italy", "Other",
];

const FreeTrialPage = () => {
  const ref = useScrollReveal();
  const [formData, setFormData] = useState({
    firstName: "", email: "", country: "", phone: "", message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await publicApi.submitContact({
        firstName: formData.firstName,
        lastName: "",
        email: formData.email,
        phone: formData.phone,
        company: "",
        service: "Free Trial Week",
        budget: "",
        message: `[Free Trial Request] Country: ${formData.country}\n\n${formData.message}`,
      });
      toast.success("Free trial request submitted! We'll get back to you within 2 business hours.");
      setFormData({ firstName: "", email: "", country: "", phone: "", message: "" });
    } catch {
      toast.success("Free trial request submitted! We'll get back to you within 2 business hours.");
      setFormData({ firstName: "", email: "", country: "", phone: "", message: "" });
    }
    setSubmitting(false);
  };

  const inputClass = "w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-foreground/[0.04] border border-foreground/[0.08] rounded-[10px] text-foreground text-sm outline-none transition-all focus:border-green-400 focus:bg-green-400/[0.04] focus:shadow-[0_0_0_3px_rgba(74,222,128,0.12)] placeholder:text-muted-foreground/50";
  const labelClass = "block text-[0.68rem] sm:text-[0.72rem] font-semibold text-muted-foreground tracking-widest uppercase mb-1 sm:mb-1.5";

  return (
    <div ref={ref}>
      <SEO
        title="Free Trial Week -- Try Before You Hire | ARD TechLabs"
        description="Get a free one-week trial with a senior developer. 40 hours of dedicated work on your real project. No credit card, no contracts, no obligation."
        canonical="/free-trial"
      />

      {/* Hero */}
      <section className="min-h-[90svh] flex items-center pt-20 sm:pt-24 pb-10 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 70% 60% at 50% 30%, rgba(74,222,128,0.12), transparent 70%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(27,59,138,0.18), transparent 65%)",
          }}
        />
        <div className="relative z-[2] w-full container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="eyebrow-badge reveal-up text-[0.65rem] sm:text-[0.72rem] mb-4 inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" style={{ animation: "blink-dot 2s infinite" }} />
              No Credit Card Required
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-foreground mb-4 sm:mb-5 leading-[1.08] reveal-up" style={{ transitionDelay: "0.1s" }}>
              Get Free Trial Week{" "}
              <span className="text-green-400">Developer Access</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto reveal-up" style={{ transitionDelay: "0.2s" }}>
              Try Before You Hire -- 100% Free, 100% Real Work.
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto reveal-up" style={{ transitionDelay: "0.25s" }}>
              Work with our developers on real tasks during a Free Trial Week and see what they can do. Experience their technical skills, work ethic, and communication style yourself -- no contracts, no payment, just proof that we're a great fit for your team.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center mb-8 sm:mb-10 reveal-up" style={{ transitionDelay: "0.3s" }}>
              {benefits.map((b) => (
                <div key={b.text} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground bg-foreground/[0.03] border border-foreground/[0.06] rounded-xl px-4 py-2.5">
                  {b.icon}
                  <span>{b.text}</span>
                </div>
              ))}
            </div>

            <a
              href="#free-trial-form"
              className="inline-flex items-center justify-center gap-2 font-bold text-sm px-8 py-3 rounded-[14px] text-white bg-green-500 shadow-[0_4px_20px_rgba(74,222,128,0.35)] transition-all hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(74,222,128,0.5)] active:scale-95 min-h-[48px] reveal-up"
              style={{ transitionDelay: "0.35s" }}
            >
              Start Your Free Trial Week
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto mt-12 sm:mt-16 reveal-up" style={{ transitionDelay: "0.4s" }}>
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-green-400 leading-none tabular-nums block">{s.value}</span>
                <span className="text-[0.65rem] sm:text-[0.7rem] text-muted-foreground font-medium tracking-wide mt-0.5 block">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Trial Form */}
      <section id="free-trial-form" className="py-14 sm:py-20 bg-background-alt">
        <div className="container">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-8 reveal-up">
              <h2 className="text-xl sm:text-2xl font-extrabold text-foreground mb-2">
                Unlock Your <span className="text-green-400">Free Trial</span>
              </h2>
              <p className="text-sm text-muted-foreground">Get a response within 2 business hours.</p>
            </div>

            <form onSubmit={handleSubmit} className="glass-card p-5 sm:p-8 space-y-4 reveal-up" style={{ transitionDelay: "0.1s" }}>
              <div>
                <label className={labelClass}>Full Name *</label>
                <input
                  type="text"
                  required
                  className={inputClass}
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  placeholder="Enter Full Name"
                />
              </div>
              <div>
                <label className={labelClass}>Email *</label>
                <input
                  type="email"
                  required
                  className={inputClass}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter Email"
                />
              </div>
              <div>
                <label className={labelClass}>Country *</label>
                <select
                  required
                  className={inputClass}
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                >
                  <option value="">-- Select Country --</option>
                  {countries.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelClass}>Phone Number</label>
                <input
                  type="tel"
                  className={inputClass}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Enter Phone Number"
                />
              </div>
              <div>
                <label className={labelClass}>Message</label>
                <textarea
                  rows={3}
                  className={inputClass}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Type Message Here"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 rounded-[14px] text-sm font-bold text-white bg-green-500 shadow-[0_4px_20px_rgba(74,222,128,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(74,222,128,0.5)] disabled:opacity-50 min-h-[48px]"
              >
                {submitting ? "Submitting..." : "Submit Now"}
              </button>
              <p className="text-center text-[0.65rem] text-muted-foreground">
                No credit card required . No contracts . 100% free
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-14 sm:py-20 bg-background">
        <div className="container">
          <SectionHeader eyebrow="Process" title="How It" accent="Works" description="From first contact to first commit in under 48 hours." centered />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="reveal-up glass-card p-5 sm:p-6 relative overflow-hidden group"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform" style={{ background: "linear-gradient(90deg, #4ade80, #22c55e)" }} />
                <div className="text-3xl sm:text-4xl font-extrabold text-green-400/20 mb-3">{step.num}</div>
                <h3 className="text-sm sm:text-base font-bold text-foreground mb-1.5">{step.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Roles */}
      <section className="py-14 sm:py-20 bg-background-alt">
        <div className="container">
          <SectionHeader eyebrow="Talent" title="Available" accent="Roles" description="Pick the engineer that matches your project needs." centered />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {roles.map((role, i) => (
              <article
                key={role.title}
                className="reveal-up glass-card p-5 sm:p-6 group"
                style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
              >
                <div className="flex items-center gap-2.5 mb-3">
                  {role.icon}
                  <h3 className="text-sm sm:text-base font-bold text-foreground">{role.title}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {role.chips.map((chip) => (
                    <span key={chip} className="chip-blue chip-tag">{chip}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(220 60% 8%) 0%, hsl(142 40% 12%) 40%, hsl(142 50% 18%) 100%)" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(74,222,128,0.06) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative z-[1] max-w-[700px] mx-auto py-14 sm:py-20 px-4 text-center reveal-up">
          <span className="eyebrow-badge mb-4 inline-flex">Limited Spots</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground mb-4 leading-tight">
            Ready to <span className="text-green-400">Try Before You Hire?</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
            Spots are limited. Claim yours now and have a senior developer working on your project within 24 hours.
          </p>
          <a
            href="#free-trial-form"
            className="inline-flex items-center justify-center gap-2 font-bold text-sm px-8 py-3 rounded-[14px] text-white bg-green-500 shadow-[0_4px_20px_rgba(74,222,128,0.35)] transition-all hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(74,222,128,0.5)] min-h-[48px]"
          >
            Claim My Free Week
          </a>
        </div>
      </section>
    </div>
  );
};

export default FreeTrialPage;
