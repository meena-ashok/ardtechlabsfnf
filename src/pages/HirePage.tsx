import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useApiData } from "@/hooks/useApiData";
import { publicApi } from "@/services/api";
import SectionHeader from "@/components/SectionHeader";
import SEO from "@/components/SEO";
import { Check, Code, Smartphone, Brain, Cloud, Palette, Database } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Code: <Code className="w-6 h-6 text-primary" />,
  Smartphone: <Smartphone className="w-6 h-6 text-navy-light" />,
  Brain: <Brain className="w-6 h-6 text-primary" />,
  Cloud: <Cloud className="w-6 h-6 text-navy-light" />,
  Palette: <Palette className="w-6 h-6 text-primary" />,
  Database: <Database className="w-6 h-6 text-navy-light" />,
};

const benefits = [
  "Pre-vetted senior engineers with proven track records",
  "Rapid onboarding -- productive within 48 hours",
  "Flexible: part-time, full-time, or project-based",
  "Timezone-aligned for US Eastern, Pacific & all EU zones",
  "No lock-in -- scale up or down anytime",
  "Full IP protection, NDAs & GDPR compliance standard",
];

const steps = [
  { num: "1", title: "Share Your Requirements", desc: "Tell us about your project, tech stack, and ideal candidate." },
  { num: "2", title: "Review Matched Profiles", desc: "We present 3-5 curated profiles within 48 hours." },
  { num: "3", title: "Start Building", desc: "Onboard your dedicated developer and start sprinting." },
];

const fallbackTalents = [
  { id: 1, icon: "Code", title: "Full-Stack Developer", description: "React/Node.js or Python/Django experts with API design, database architecture, and cloud deployment experience.", chips: "React,Node.js,PostgreSQL,AWS", rate: "From $25/hr" },
  { id: 2, icon: "Smartphone", title: "Mobile Developer", description: "Flutter and React Native specialists building cross-platform apps with native-level performance.", chips: "Flutter,React Native,Firebase,Swift", rate: "From $25/hr" },
  { id: 3, icon: "Brain", title: "AI / ML Engineer", description: "Data scientists specialising in LLMs, computer vision, NLP, and predictive modelling solutions.", chips: "Python,TensorFlow,OpenAI,LangChain", rate: "From $35/hr" },
  { id: 4, icon: "Cloud", title: "Cloud / DevOps Engineer", description: "AWS/Azure/GCP certified architects who design, migrate, and optimise cloud-native infrastructure.", chips: "AWS,Kubernetes,AzuTerraform,Docker", rate: "From $25/hr" },
  { id: 5, icon: "Palette", title: "UI / UX Designer", description: "Product designers combining user research, interaction design, and visual craft into delightful experiences.", chips: "Figma,Prototyping,Design Systems", rate: "From $20/hr" },
  { id: 6, icon: "Database", title: "Data Engineer", description: "Big data specialists building scalable pipelines, data warehouses, and BI solutions for enterprises.", chips: "Spark,Airflow,Snowflake,dbt", rate: "From $25/hr" },
];

const HirePage = ({ analyticsConfig }) => {
  const ref = useScrollReveal();
  const { data: talents } = useApiData(() => publicApi.getHireTalents(), fallbackTalents);

  return (
    <div ref={ref} className="pt-20 sm:pt-24 pb-16 sm:pb-20 bg-background-alt">
      <SEO
        title="Hire Dedicated Developers -- Senior Engineers On-Demand"
        description="Hire pre-vetted senior developers, AI engineers, cloud architects, and designers from ARD TechLabs. Timezone-aligned for the USA, UK, Europe, and Australia. Start in 48 hours."
        canonical="/hire"
        analyticsConfig={analyticsConfig}
      />
      <div className="container">
        <SectionHeader
          eyebrow="Hire Talent"
          title="Dedicated Tech"
          accent="Talent On-Demand"
          description="Scale your team instantly with pre-vetted senior engineers for teams across the USA, UK, Europe, and Australia."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="reveal-left">
            <h3 className="text-sm sm:text-base font-bold text-foreground mb-3 sm:mb-4">Why Hire Through ARD TechLabs?</h3>
            <ul className="space-y-2.5 sm:space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-muted-foreground">
                  <span className="w-5 h-5 rounded-md flex-shrink-0 flex items-center justify-center mt-0.5" style={{ background: "var(--gradient-orange)" }}>
                    <Check className="w-3 h-3 text-primary-foreground" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal-right glass-card p-5 sm:p-7 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "var(--gradient-rule)", backgroundSize: "200%", animation: "grad-shift 4s linear infinite" }} />
            <h3 className="text-sm sm:text-base font-bold text-foreground mb-4 sm:mb-5">Get Started in 3 Simple Steps</h3>
            {steps.map((s) => (
              <div key={s.num} className="flex gap-3 sm:gap-3.5 items-start mb-3 sm:mb-4 group">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-[10px] flex-shrink-0 flex items-center justify-center text-xs sm:text-sm font-extrabold text-primary-foreground shadow-[var(--shadow-orange)] transition-transform group-hover:scale-110 group-hover:-rotate-[5deg]" style={{ background: "var(--gradient-orange)" }}>
                  {s.num}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-foreground mb-0.5">{s.title}</h4>
                  <p className="text-[0.68rem] sm:text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 font-bold text-sm w-full py-3 rounded-[14px] text-primary-foreground shadow-[var(--shadow-orange)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-orange-lg)] mt-3 sm:mt-4 min-h-[48px]"
              style={{ background: "var(--gradient-orange)" }}
            >
              Request Talent
            </Link>
          </div>
        </div>

        <h3 className="text-sm sm:text-base font-bold text-foreground mb-5 sm:mb-6 reveal-up">
          Available <span className="text-primary">Talent Profiles</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {talents.map((t: any, i: number) => (
            <article
              key={t.id || t.title}
              className="reveal-up glass-card p-5 sm:p-6 flex flex-col"
              style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
            >
              <h3 className="text-sm sm:text-base font-bold text-foreground mb-1.5 sm:mb-2 flex items-center gap-2 sm:gap-2.5">
                {iconMap[t.icon] || <Code className="w-6 h-6 text-primary" />} {t.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4 flex-1">{t.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-3 sm:mb-4">
                {(typeof t.chips === "string" ? t.chips.split(",") : t.chips || []).map((c: string) => (
                  <span key={c} className="chip-blue chip-tag">{c.trim()}</span>
                ))}
              </div>
              <div className="flex justify-between items-center pt-3 sm:pt-3.5 border-t border-secondary/20 mt-auto">
                <span className="text-sm sm:text-base font-extrabold text-primary">{t.rate}</span>
                <Link
                  to="/contact"
                  className="text-xs font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-[10px] text-primary-foreground shadow-[var(--shadow-orange)] transition-all hover:-translate-y-0.5 min-h-[36px] inline-flex items-center"
                  style={{ background: "var(--gradient-orange)" }}
                >
                  Hire Now
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HirePage;
