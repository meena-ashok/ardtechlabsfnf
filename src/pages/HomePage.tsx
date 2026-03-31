import { Link } from "react-router-dom";
import { useTypewriter } from "@/hooks/useTypewriter";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useApiData } from "@/hooks/useApiData";
import { publicApi } from "@/services/api";
import SectionHeader from "@/components/SectionHeader";
import SEO from "@/components/SEO";
import { Code, Smartphone, Cloud, Shield, Globe, Headphones, Award, RefreshCw } from "lucide-react";

const heroWords = ["Technology", "Innovation", "Excellence", "The Future"];

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "80+", label: "Happy Clients" },
  { value: "9+", label: "Years of Excellence" },
  { value: "40+", label: "Expert Engineers" },
];

const whyUs = [
  { icon: <Award className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />, title: "Award-Winning", desc: "Recognised excellence in software delivery" },
  { icon: <RefreshCw className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />, title: "Agile Delivery", desc: "2-week sprint cycles, always on time" },
  { icon: <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />, title: "Security-First", desc: "ISO 27001 & GDPR compliant" },
  { icon: <Headphones className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />, title: "24/7 Support", desc: "Always here when you need us" },
  { icon: <Globe className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />, title: "Global Reach", desc: "USA & Europe -- 20+ countries" },
];

const fallbackTestimonials = [
  { id: 1, text: "ARD TechLabs transformed our entire digital infrastructure. Their team delivered a complex microservices architecture on time and under budget.", name: "Sarah Mitchell", role: "CTO, FinFlow Inc. -- USA", featured: false },
  { id: 2, text: "The AI recommendation engine increased our conversion rate by 42%. The team understands both tech and business. Simply outstanding work.", name: "Rahul Sharma", role: "CEO, RetailGenius -- UK", featured: true },
  { id: 3, text: "Their DevOps setup reduced deployment time from 3 hours to 8 minutes. The cloud migration was flawless. ARD TechLabs is our go-to partner.", name: "Emma Lawson", role: "VP Engineering, LogiChain -- Germany", featured: false },
];

const marqueeItems = ["React.js", "Python", "Flutter", "AWS", "OpenAI", "Docker", "Kubernetes", "Terraform", "TypeScript", "Node.js", "Firebase", "PostgreSQL"];

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ARD TechLabs",
  url: "https://ardtechlabs.lovable.app",
  logo: "https://ardtechlabs.lovable.app/favicon.ico",
  description: "ARD TechLabs delivers award-winning full-stack development, mobile apps, AI/ML, cloud & DevOps for businesses across USA and Europe.",
  foundingDate: "2015",
  numberOfEmployees: { "@type": "QuantitativeValue", minValue: 40 },
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "France" },
    { "@type": "Country", name: "Netherlands" },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-555-123-4567",
    contactType: "sales",
    email: "hello@ardtechlabs.com",
    availableLanguage: ["English"],
    areaServed: ["US", "GB", "DE", "FR", "NL"],
  },
  sameAs: [],
  knowsAbout: ["Full-Stack Development", "Mobile Apps", "AI/ML", "Cloud Computing", "DevOps"],
};

const HomePage = () => {
  const typed = useTypewriter(heroWords);
  const revealRef = useScrollReveal();
  const { data: testimonials } = useApiData(() => publicApi.getTestimonials(), fallbackTestimonials);

  return (
    <div ref={revealRef}>
      <SEO
        title="ARD TechLabs | IT Services & Consulting -- Full-Stack, AI, Cloud & DevOps"
        description="ARD TechLabs delivers award-winning full-stack development, mobile apps, AI/ML, cloud & DevOps for businesses across USA and Europe. 150+ projects . 80+ clients . 9+ years."
        canonical="/"
        jsonLd={organizationJsonLd}
      />

      {/* Hero */}
      <section className="min-h-[100svh] flex items-center pt-16 relative overflow-hidden">
        {/* Grid background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
            animation: "grid-pan 20s linear infinite",
          }}
        />
        {/* Glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 70% 60% at 65% 30%, rgba(27,59,138,0.28), transparent 70%), radial-gradient(ellipse 50% 40% at 10% 75%, rgba(244,124,32,0.12), transparent 65%)",
          }}
        />

        <div className="relative z-[2] w-full container py-8 sm:py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <span className="eyebrow-badge reveal-up text-[0.65rem] sm:text-[0.72rem]">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" style={{ animation: "blink-dot 2s infinite" }} />
                IT Services & Consulting . USA & Europe
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-foreground mt-4 sm:mt-5 mb-3 sm:mb-4 leading-[1.08] reveal-up" style={{ transitionDelay: "0.1s" }}>
                We Build
                <br />
                <span className="text-primary">{typed}</span>
                <span className="inline-block w-[3px] h-[0.85em] bg-primary align-[-0.05em] ml-0.5" style={{ animation: "cursor-blink 1s infinite" }} />
              </h1>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 sm:mb-8 max-w-[520px] mx-auto lg:mx-0 reveal-up" style={{ transitionDelay: "0.2s" }}>
                ARD TechLabs delivers award-winning full-stack development, mobile apps, AI/ML, cloud & DevOps for businesses across USA and Europe. 150+ projects . 80+ clients . 9+ years.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center lg:justify-start mb-8 sm:mb-10 reveal-up" style={{ transitionDelay: "0.3s" }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 font-bold text-sm px-7 py-3 rounded-[14px] text-primary-foreground shadow-[var(--shadow-orange)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-orange-lg)] active:scale-95 min-h-[48px] w-full sm:w-auto"
                  style={{ background: "var(--gradient-orange)" }}
                >
                  Get Free Consultation
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center gap-2 font-bold text-sm px-7 py-3 rounded-[14px] text-foreground bg-foreground/[0.04] border border-foreground/10 backdrop-blur-sm transition-all hover:border-primary hover:text-primary hover:bg-primary/10 hover:-translate-y-0.5 min-h-[48px] w-full sm:w-auto"
                >
                  View Our Work
                </Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 items-center reveal-up" style={{ transitionDelay: "0.4s" }}>
                {stats.map((s) => (
                  <div key={s.label} className="text-center lg:text-left">
                    <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-primary leading-none tabular-nums block">{s.value}</span>
                    <span className="text-[0.65rem] sm:text-[0.7rem] text-muted-foreground font-medium tracking-wide mt-0.5 block">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Visual Card */}
            <div className="relative p-4 sm:p-6 hidden lg:block reveal-right" style={{ transitionDelay: "0.3s" }}>
              {/* Floating chip top */}
              <div className="absolute -top-4 -right-3 z-[3] backdrop-blur-2xl bg-background/[0.85] border border-primary/25 rounded-[14px] px-4 py-3 flex items-center gap-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)]" style={{ animation: "chip-float-1 4s ease-in-out infinite" }}>
                <span className="text-xl" role="img" aria-label="AI Solutions">{"\uD83E\uDD16"}</span>
                <div>
                  <strong className="text-sm font-bold text-foreground block">AI Solutions</strong>
                  <span className="text-xs text-muted-foreground">LLMs . ML . NLP</span>
                </div>
              </div>

              <div className="glass-card p-7" style={{ borderRadius: 24 }}>
                <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "var(--gradient-border-scan)", animation: "border-scan 4s ease-in-out infinite" }} />
                <div className="flex items-center justify-between mb-5">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                  </div>
                  <span className="text-[0.72rem] font-semibold text-muted-foreground tracking-wide">ARD TechLabs Platform</span>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    { icon: <Code className="w-5 h-5 text-primary" />, title: "Full-Stack Dev", sub: "React . Node . Next.js" },
                    { icon: <Smartphone className="w-5 h-5 text-navy-light" />, title: "Mobile Apps", sub: "Flutter . React Native" },
                    { icon: <Cloud className="w-5 h-5 text-primary" />, title: "Cloud & DevOps", sub: "AWS . K8s . Terraform" },
                    { icon: <Shield className="w-5 h-5 text-navy-light" />, title: "Data & Analytics", sub: "Spark . Snowflake . dbt" },
                  ].map((item) => (
                    <div key={item.title} className="bg-foreground/[0.03] border border-foreground/[0.06] rounded-xl p-4 transition-all hover:bg-primary/[0.06] hover:border-primary/20 cursor-default">
                      {item.icon}
                      <h5 className="text-sm font-bold text-foreground mt-1.5 mb-0.5">{item.title}</h5>
                      <p className="text-[0.7rem] text-muted-foreground">{item.sub}</p>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { val: "150+", label: "Projects" },
                    { val: "99%", label: "Uptime SLA" },
                    { val: "40+", label: "Engineers" },
                  ].map((n, i) => (
                    <div
                      key={n.label}
                      className="bg-primary/10 border border-primary/30 rounded-xl py-3 text-center"
                      style={{ animation: `num-pulse 3s ease-in-out infinite ${i * 0.5}s` }}
                    >
                      <strong className="block text-lg font-extrabold text-primary">{n.val}</strong>
                      <span className="text-[0.66rem] text-muted-foreground">{n.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating chip bottom */}
              <div className="absolute -bottom-4 -left-3 z-[3] backdrop-blur-2xl bg-background/[0.85] border border-primary/25 rounded-[14px] px-4 py-3 flex items-center gap-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)]" style={{ animation: "chip-float-2 4.5s ease-in-out infinite" }}>
                <span className="text-xl" role="img" aria-label="Cloud DevOps">{"\u2601\uFE0F"}</span>
                <div>
                  <strong className="text-sm font-bold text-foreground block">Cloud & DevOps</strong>
                  <span className="text-xs text-muted-foreground">CI/CD . Docker . K8s</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-background-alt border-y border-secondary/20 overflow-hidden py-3">
        <div className="flex gap-0 will-change-transform" style={{ animation: "marquee 30s linear infinite" }}>
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={`${item}-${i}`} className="flex items-center gap-2 whitespace-nowrap px-5 sm:px-8 text-muted-foreground text-xs sm:text-sm font-medium border-r border-secondary/20 flex-shrink-0 hover:text-primary transition-colors">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Why Us */}
      <section className="py-14 sm:py-20 bg-background-alt">
        <div className="container">
          <SectionHeader eyebrow="Why Choose Us" title="The ARD TechLabs" accent="Advantage" centered />
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {whyUs.map((item, i) => (
              <div
                key={item.title}
                className="reveal-up bg-background-card/65 border border-secondary/20 rounded-[16px] sm:rounded-[18px] p-4 sm:p-5 text-center transition-all relative overflow-hidden group hover:-translate-y-1.5 hover:border-primary/30 hover:bg-primary/[0.04]"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded transition-all duration-400 group-hover:w-[70%]" style={{ background: "var(--gradient-rule)" }} />
                <div className="mb-2 sm:mb-2.5 transition-transform group-hover:scale-110 group-hover:-rotate-[5deg]">{item.icon}</div>
                <h4 className="text-xs sm:text-sm font-bold text-foreground mb-1">{item.title}</h4>
                <p className="text-[0.68rem] sm:text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 sm:py-20 bg-background">
        <div className="container">
          <SectionHeader eyebrow="Client Love" title="What Our Clients" accent="Say" centered />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((t: any, i: number) => (
              <article
                key={t.id || t.name}
                className={`reveal-up glass-card p-5 sm:p-7 flex flex-col ${t.featured ? "border-primary/20" : ""}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="flex gap-1 mb-3 sm:mb-3.5 text-primary">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-sm sm:text-base">{"\u2605"}</span>
                  ))}
                </div>
                <blockquote className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4 sm:mb-5">"{t.text}"</blockquote>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex-shrink-0 flex items-center justify-center text-sm border-2 border-foreground/[0.08]" style={{ background: "var(--gradient-orange)" }}>
                    {"\uD83D\uDC64"}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 70% at 80% 50%, rgba(244,124,32,0.15), transparent), radial-gradient(ellipse 40% 50% at 20% 50%, rgba(37,80,184,0.2), transparent)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            animation: "dots-shift 15s linear infinite",
          }}
        />
        <div className="relative z-[1] max-w-[700px] mx-auto py-14 sm:py-20 px-4 text-center reveal-up">
          <span className="eyebrow-badge mb-4 inline-flex">Start Today</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4 leading-tight">
            Ready to <span className="text-primary">Accelerate</span> Your Digital Journey?
          </h2>
          <p className="text-sm sm:text-base text-primary-foreground/65 mb-6 sm:mb-8 leading-relaxed">
            Let's build something extraordinary together. Free consultation for USA & European businesses.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-3.5 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 font-bold text-sm px-7 py-3 rounded-[14px] text-primary-foreground shadow-[var(--shadow-orange)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-orange-lg)] min-h-[48px] w-full sm:w-auto"
              style={{ background: "var(--gradient-orange)" }}
            >
              Get Free Consultation
            </Link>
            <Link
              to="/hire"
              className="inline-flex items-center justify-center gap-2 font-bold text-sm px-7 py-3 rounded-[14px] text-primary-foreground/90 bg-primary-foreground/[0.04] border border-primary-foreground/20 transition-all hover:border-primary hover:text-primary hover:-translate-y-0.5 min-h-[48px] w-full sm:w-auto"
            >
              Hire Dedicated Talent
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
