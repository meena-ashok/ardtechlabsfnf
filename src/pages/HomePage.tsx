import { Link } from "react-router-dom";
import { useTypewriter } from "@/hooks/useTypewriter";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeader from "@/components/SectionHeader";
import SEO from "@/components/SEO";
import { TechIcon } from "@/components/TechIcon";

const heroWords = ["Technology", "Innovation", "Excellence", "The Future"];

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "80+", label: "Happy Clients" },
  { value: "9+", label: "Years of Excellence" },
  { value: "40+", label: "Expert Engineers" },
];

const whyUs = [
  { icon: "Award", title: "Award-Winning", desc: "Recognised excellence in software delivery" },
  { icon: "RefreshCw", title: "Agile Delivery", desc: "2-week sprint cycles, always on time" },
  { icon: "Shield", title: "Security-First", desc: "ISO 27001 & GDPR compliant" },
  { icon: "Headphones", title: "24/7 Support", desc: "Always here when you need us" },
  { icon: "Globe", title: "Global Reach", desc: "USA & Europe — 20+ countries" },
];

const processes = [
  { step: "01", title: "Discovery", desc: "We deep-dive into your business goals, target audience, and technical requirements." },
  { step: "02", title: "Strategy", desc: "Defining the product roadmap, tech stack selection, and architecture design." },
  { step: "03", title: "Execution", desc: "Agile development with transparent progress and bi-weekly demonstrations." },
  { step: "04", title: "Launch", desc: "Comprehensive testing, deployment, and performance monitoring." },
];

const marqueeItems = ["React.js", "Python", "Flutter", "AWS", "OpenAI", "Docker", "Kubernetes", "Terraform", "TypeScript", "Spring Boot", "Firebase", "PostgreSQL"];

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ARD TechLabs",
  url: "https://ardtechlabs.lovable.app",
  logo: "https://ardtechlabs.lovable.app/favicon.ico",
  description: "Award-winning IT services & consulting for USA and Europe. Full-stack, AI/ML, cloud & DevOps.",
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

  return (
    <div ref={revealRef}>
      <SEO
        title="ARD TechLabs | IT Services & Consulting – Full-Stack, AI, Cloud & DevOps"
        description="ARD TechLabs delivers award-winning full-stack development, mobile apps, AI/ML, cloud & DevOps for businesses across USA and Europe. 150+ projects · 80+ clients · 9+ years."
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
              <span className="eyebrow-badge reveal-up text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" style={{ animation: "blink-dot 2s infinite" }} />
                IT Services & Consulting · USA & Europe
              </span>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-foreground mt-4 sm:mt-5 mb-3 sm:mb-4 leading-[1.08] reveal-up" style={{ transitionDelay: "0.1s" }}>
                We Build
                <br />
                <span className="text-primary">{typed}</span>
                <span className="inline-block w-[3px] h-[0.85em] bg-primary align-[-0.05em] ml-0.5" style={{ animation: "cursor-blink 1s infinite" }} />
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-[520px] mx-auto lg:mx-0 reveal-up" style={{ transitionDelay: "0.2s" }}>
                ARD TechLabs delivers award-winning full-stack development, mobile apps, AI/ML, cloud & DevOps for businesses across USA and Europe. 150+ projects · 80+ clients · 9+ years.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center lg:justify-start reveal-up" style={{ transitionDelay: "0.3s" }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 font-bold text-sm px-7 py-3 rounded-[14px] text-primary-foreground shadow-[var(--shadow-orange)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-orange-lg)] active:scale-95 min-h-[48px] w-full sm:w-auto"
                  style={{ background: "var(--gradient-orange)" }}
                >
                  Get Free Consultation <TechIcon icon="ArrowRight" />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center gap-2 font-bold text-sm px-7 py-3 rounded-[14px] text-foreground bg-foreground/[0.04] border border-foreground/10 backdrop-blur-sm transition-all hover:border-primary hover:text-primary hover:bg-primary/10 hover:-translate-y-0.5 min-h-[48px] w-full sm:w-auto"
                >
                  View Our Work
                </Link>
              </div>
            </div>

            {/* Hero Visual Card */}
            <div className="relative p-4 sm:p-6 hidden lg:block reveal-right" style={{ transitionDelay: "0.3s" }}>
              {/* Floating chip top */}
              <div className="absolute -top-6 -right-5 z-[3] backdrop-blur-2xl bg-background-card/[0.9] border border-primary/30 rounded-2xl px-5 py-4 flex items-center gap-4 shadow-[0_12px_40px_rgba(0,0,0,0.6)]" style={{ animation: "chip-float-1 4s ease-in-out infinite" }}>
                <TechIcon icon="AI / ML" className="text-2xl" />
                <div>
                  <strong className="text-lg font-extrabold text-foreground block">AI Solutions</strong>
                  <span className="text-sm uppercase tracking-wider text-primary font-bold">LLMs · ML · NLP</span>
                </div>
              </div>

              <div className="glass-card p-8 shadow-[var(--shadow-card)] transition-transform hover:scale-[1.02] duration-500" style={{ borderRadius: 32 }}>
                <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "var(--gradient-border-scan)", animation: "border-scan 4s ease-in-out infinite" }} />
                <div className="flex items-center justify-between mb-8">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57] shadow-sm" />
                    <div className="w-3 h-3 rounded-full bg-[#FEBC2E] shadow-sm" />
                    <div className="w-3 h-3 rounded-full bg-[#28C840] shadow-sm" />
                  </div>
                  <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full">System Architecture</span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { icon: "Code", title: "Full-Stack Dev", sub: "React · Spring · Next.js" },
                    { icon: "Smartphone", title: "Mobile Apps", sub: "Flutter · React Native" },
                    { icon: "Cloud", title: "Cloud & DevOps", sub: "AWS · K8s · Terraform" },
                    { icon: "Database", title: "Data & Analytics", sub: "Spark · Snowflake · dbt" },
                  ].map((item) => (
                    <div key={item.title} className="bg-background-elevated/[0.4] border border-white/[0.05] rounded-[20px] p-5 transition-all hover:bg-primary/[0.08] hover:border-primary/30 cursor-default group">
                      <div className="group-hover:scale-110 transition-transform mb-3 opacity-90 text-primary"><TechIcon icon={item.icon} /></div>
                      <h5 className="text-base font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{item.title}</h5>
                      <p className="text-sm text-muted-foreground font-medium">{item.sub}</p>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { val: "150+", label: "Enterprise Projects" },
                    { val: "99.9%", label: "Uptime SLA" },
                    { val: "40+", label: "Senior Engineers" },
                  ].map((n, i) => (
                    <div
                      key={n.label}
                      className="bg-primary/5 border border-primary/20 rounded-[16px] py-4 px-2 text-center relative overflow-hidden group"
                      style={{ animation: `num-pulse 3s ease-in-out infinite ${i * 0.5}s` }}
                    >
                      <div className="absolute inset-0 bg-primary/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
                      <strong className="block text-xl font-black text-primary relative z-10">{n.val}</strong>
                      <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider relative z-10">{n.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating chip bottom */}
              <div className="absolute -bottom-6 -left-5 z-[3] backdrop-blur-2xl bg-background-card/[0.9] border border-primary/30 rounded-2xl px-5 py-4 flex items-center gap-4 shadow-[0_12px_40px_rgba(0,0,0,0.6)]" style={{ animation: "chip-float-2 4.5s ease-in-out infinite" }}>
                <TechIcon icon="Cloud" className="text-2xl" />
                <div>
                  <strong className="text-lg font-extrabold text-foreground block">Cloud & DevOps</strong>
                  <span className="text-sm uppercase tracking-wider text-primary font-bold">CI/CD · Docker · K8s</span>
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
            <div key={`${item}-${i}`} className="flex items-center gap-2 whitespace-nowrap px-5 sm:px-8 text-muted-foreground text-sm sm:text-base font-medium border-r border-secondary/20 flex-shrink-0 hover:text-primary transition-colors">
              <TechIcon icon={item} />
            </div>
          ))}
        </div>
      </div>

      {/* Services Segment */}
      <section className="py-20 sm:py-28 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container">
          <SectionHeader
            eyebrow="Expertise"
            title="Our Core"
            accent="Services"
            description="Specialised technology solutions designed for global scale and mission-critical performance."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { icon: "Code", title: "Full-Stack Web", desc: "Enterprise-grade web applications using React, Spring, and modern frameworks.", link: "/services" },
              { icon: "Smartphone", title: "Mobile Apps", desc: "Native-performance iOS & Android apps via Flutter and React Native.", link: "/services" },
              { icon: "Cloud", title: "Cloud & DevOps", desc: "Automated pipelines and scalable infrastructure on AWS & Azure.", link: "/services" },
              { icon: "Database", title: "Data Engineering", desc: "Robust data pipelines and real-time analytics for business intelligence.", link: "/services" },
            ].map((svc, i) => (
              <Link
                key={svc.title}
                to={svc.link}
                className="reveal-up glass-card p-6 group hover:border-primary/40 transition-all"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="icon-box icon-box-orange mb-4 group-hover:scale-110 group-hover:-rotate-3 transition-transform">
                  <TechIcon icon={svc.icon} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{svc.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{svc.desc}</p>
                <span className="text-sm font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                  Learn More <span className="group-hover:translate-x-1 transition-transform"><TechIcon icon="ArrowRight" /></span>
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center reveal-up">
            <Link to="/services" className="chip-tag px-8 py-3 bg-foreground/[0.03] hover:bg-primary/10 border-foreground/10 hover:border-primary/30 transition-all font-semibold">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Technology Expertise Segment */}
      <section className="py-24 bg-background relative overflow-hidden flex items-center">
        <div className="absolute top-1/2 left-0 w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="reveal-left">
              <SectionHeader
                eyebrow="Technology Core"
                title="Mastering Modern"
                accent="Frameworks"
                description="Our engineers build resilient, intelligent systems by mastering the most highly requested tech stacks across the globe."
              />
              <div className="space-y-8 mt-10">
                {[
                  { label: "AI & ML", tools: "OpenAI · TensorFlow · PyTorch · Scikit-learn" },
                  { label: "Cloud & DevOps", tools: "AWS · Azure · Kubernetes · Terraform" },
                  { label: "Frontend & Web", tools: "React.js · Next.js · Vue.js · Angular" },
                  { label: "Backend & Systems", tools: "Spring Boot · Python · Java · Go" },
                ].map((item, i) => (
                  <div key={item.label} className="group flex gap-5 items-start">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center font-black text-primary text-sm shadow-md group-hover:bg-primary group-hover:text-white transition-all">
                      0{i + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-extrabold text-foreground tracking-wide uppercase mb-1.5 group-hover:text-primary transition-colors">{item.label}</h4>
                      <p className="text-base text-muted-foreground font-medium">{item.tools}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/technology" className="inline-flex items-center gap-2 font-bold text-sm text-primary mt-12 hover:underline">
                View All Technologies <TechIcon icon="ArrowRight" />
              </Link>
            </div>
            <div className="reveal-right">
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 sm:gap-5">
                {[
                  "React",
                  "Python",
                  "AWS",
                  "Spring Boot",
                  "Docker",
                  "PostgreSQL",
                  "Kubernetes",
                  "Terraform",
                  "OpenAI",
                  "Java",
                  "TypeScript",
                  "Flutter",
                ].map((tech, i) => (
                  <div key={tech} className="glass-card shadow-lg bg-background-elevated/[0.4] border border-white/5 rounded-2xl p-5 text-center hover:-translate-y-2 hover:border-primary/40 hover:bg-primary/[0.08] transition-all duration-300" style={{ transitionDelay: `${i * 0.05}s` }}>
                    <TechIcon icon={tech} />
                    <span className="text-xs font-black text-muted-foreground uppercase tracking-widest mt-3 block">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-14 sm:py-20 bg-background">
        <div className="container">
          <div className="mb-12 text-center">
            <span className="eyebrow-badge">
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ animation: "blink-dot 2s infinite" }} />
              Client Love
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mt-4 mb-4 leading-tight">
              What Our Clients <span className="text-primary">Say</span>
            </h2>
            <div className="rule-line my-4 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <article className="reveal-up glass-card p-5 sm:p-7 flex flex-col">
              <div className="flex gap-1 mb-3 sm:mb-3.5 text-primary">
                <span className="text-lg">★</span>
                <span className="text-lg">★</span>
                <span className="text-lg">★</span>
                <span className="text-lg">★</span>
                <span className="text-lg">★</span>
              </div>
              <blockquote className="text-base text-muted-foreground leading-relaxed flex-1 mb-4 sm:mb-5">
                "ARD TechLabs transformed our entire digital infrastructure. Their team delivered a complex microservices architecture on time and under budget."
              </blockquote>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex-shrink-0 flex items-center justify-center text-sm border-2 border-foreground/[0.08]" style={{ background: "var(--gradient-orange)" }}>
                  <TechIcon icon="Users" />
                </div>
                <div>
                  <div className="text-base font-bold text-foreground">Sarah Mitchell</div>
                  <div className="text-sm text-muted-foreground">CTO, FinFlow Inc. — USA</div>
                </div>
              </div>
            </article>
            <article className="reveal-up glass-card p-5 sm:p-7 flex flex-col border-primary/20" style={{ transitionDelay: "0.1s" }}>
              <div className="flex gap-1 mb-3 sm:mb-3.5 text-primary">
                <span className="text-lg">★</span>
                <span className="text-lg">★</span>
                <span className="text-lg">★</span>
                <span className="text-lg">★</span>
                <span className="text-lg">★</span>
              </div>
              <blockquote className="text-base text-muted-foreground leading-relaxed flex-1 mb-4 sm:mb-5">
                "The AI recommendation engine increased our conversion rate by 42%. The team understands both tech and business. Simply outstanding work."
              </blockquote>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex-shrink-0 flex items-center justify-center text-sm border-2 border-foreground/[0.08]" style={{ background: "var(--gradient-orange)" }}>
                  <TechIcon icon="Users" />
                </div>
                <div>
                  <div className="text-base font-bold text-foreground">Rahul Sharma</div>
                  <div className="text-sm text-muted-foreground">CEO, RetailGenius — UK</div>
                </div>
              </div>
            </article>
            <article className="reveal-up glass-card p-5 sm:p-7 flex flex-col" style={{ transitionDelay: "0.2s" }}>
              <div className="flex gap-1 mb-3 sm:mb-3.5 text-primary">
                <span className="text-lg">★</span>
                <span className="text-lg">★</span>
                <span className="text-lg">★</span>
                <span className="text-lg">★</span>
                <span className="text-lg">★</span>
              </div>
              <blockquote className="text-base text-muted-foreground leading-relaxed flex-1 mb-4 sm:mb-5">
                "Their DevOps setup reduced deployment time from 3 hours to 8 minutes. The cloud migration was flawless. ARD TechLabs is our go-to partner."
              </blockquote>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex-shrink-0 flex items-center justify-center text-sm border-2 border-foreground/[0.08]" style={{ background: "var(--gradient-orange)" }}>
                  <TechIcon icon="Users" />
                </div>
                <div>
                  <div className="text-base font-bold text-foreground">Emma Lawson</div>
                  <div className="text-sm text-muted-foreground">VP Engineering, LogiChain — Germany</div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container">
          <SectionHeader eyebrow="Our Workflow" title="How We" accent="Deliver" centered />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {processes.map((p, i) => (
              <div key={p.step} className="reveal-up relative group" style={{ transitionDelay: `${i * 0.1}s` }}>
                <span className="text-6xl font-black text-foreground/5 absolute -top-6 -left-2 select-none group-hover:text-primary/10 transition-colors">
                  {p.step}
                </span>
                <div className="relative z-10">
                  <h4 className="text-xl font-bold text-foreground mb-2">{p.title}</h4>
                  <p className="text-base text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unified Enterprise CTA segment */}
      <section className="relative overflow-hidden py-24 sm:py-32" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(60% 70% at 80% 50%, rgba(244, 124, 32, 0.15), transparent), radial-gradient(40% 50% at 20% 50%, rgba(37, 80, 184, 0.2), transparent)" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px)", backgroundSize: "28px 28px", animation: "dots-shift 15s linear infinite" }} />
        
        <div className="container relative z-10 text-center">
          <div className="max-w-[720px] mx-auto reveal-up">
            <span className="eyebrow-badge mb-6 inline-flex">Start Today</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary-foreground mb-6 leading-[1.15]">
              Ready to <span className="text-primary">Accelerate</span> Your Digital Journey?
            </h2>
            <p className="text-lg sm:text-xl text-primary-foreground/65 mb-10 leading-relaxed">
              Let's build something extraordinary together. Free consultation for USA & European businesses.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 font-bold text-sm px-8 py-4 rounded-[14px] text-primary-foreground shadow-[var(--shadow-orange)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-orange-lg)] min-h-[56px] w-full sm:w-auto"
                style={{ background: "var(--gradient-orange)" }}
              >
                Get Free Consultation <TechIcon icon="ArrowRight" />
              </Link>
              <Link
                to="/hire"
                className="inline-flex items-center justify-center gap-2 font-bold text-sm px-8 py-4 rounded-[14px] text-primary-foreground/90 bg-primary-foreground/[0.04] border border-primary-foreground/20 transition-all hover:border-primary hover:text-primary hover:-translate-y-1 min-h-[56px] w-full sm:w-auto"
              >
                Hire Dedicated Talent
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
