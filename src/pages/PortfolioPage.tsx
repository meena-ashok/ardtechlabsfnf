import { useState, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useApiData } from "@/hooks/useApiData";
import { publicApi } from "@/services/api";
import SectionHeader from "@/components/SectionHeader";
import SEO from "@/components/SEO";
import { TechIcon } from "@/components/TechIcon";

const categories = ["All Projects", "Web Apps", "Mobile", "AI / ML", "Cloud"];
const categoryMap: Record<string, string> = { "All Projects": "all", "Web Apps": "web", "Mobile": "mobile", "AI / ML": "ai", "Cloud": "cloud" };

const fallbackProjects = [
  { id: 1, category: "web", title: "RetailPro Dashboard", description: "Multi-tenant SaaS analytics for US retail chains with real-time inventory.", chips: "React,Node.js,MongoDB" },
  { id: 2, category: "mobile", title: "MedTrack App", description: "Medication tracking & reminder app with caregiver portal for UK NHS.", chips: "Flutter,Firebase,AWS" },
  { id: 3, category: "ai", title: "DocuAI Extractor", description: "Intelligent document processing using OCR, NLP, and LLMs for legal firms.", chips: "Python,OpenAI,LangChain" },
  { id: 4, category: "cloud", title: "DataVault Migration", description: "Zero-downtime migration of 50TB enterprise database to AWS.", chips: "AWS,Terraform,PostgreSQL" },
  { id: 5, category: "mobile", title: "RideNow Driver App", description: "Real-time ride-hailing with navigation and earnings analytics.", chips: "React Native,Node.js,Socket.io" },
  { id: 6, category: "web", title: "TradePulse Platform", description: "Algorithmic trading dashboard with live charts & backtesting engine.", chips: "Next.js,Python,Redis" },
  { id: 7, category: "ai", title: "EduBot Tutor", description: "Adaptive AI tutoring with personalised learning paths for European schools.", chips: "GPT-4,FastAPI,Vue.js" },
  { id: 8, category: "cloud", title: "FactoryIoT Hub", description: "Industrial IoT on Azure for real-time machine monitoring in Germany.", chips: "Azure IoT,Kubernetes,Grafana" },
  { id: 9, category: "web", title: "SoundWave Studio", description: "Collaborative music production platform with real-time multi-user sessions.", chips: "React,WebRTC,AWS" },
];

const categoryIcons: { [key: string]: string } = {
  web: "Code",
  mobile: "Smartphone",
  ai: "Brain",
  cloud: "Cloud",
};

const PortfolioPage = () => {
  const ref = useScrollReveal();
  const [filter, setFilter] = useState("all");
  const { data: projects } = useApiData(() => publicApi.getProjects(), fallbackProjects);

  const filtered = filter === "all" ? projects : projects.filter((p: any) => p.category === filter);

  return (
    <div ref={ref} className="pt-20 sm:pt-24 pb-16 sm:pb-20 bg-background-alt">
      <SEO
        title="Portfolio -- Web, Mobile, AI & Cloud Projects"
        description="Browse ARD TechLabs' portfolio of web apps, mobile apps, AI/ML solutions, and cloud projects delivered for clients across the USA, UK, Europe, and Australia."
        canonical="/portfolio"
      />
      <div className="container">
        <SectionHeader
          eyebrow="Portfolio"
          title="Projects We're"
          accent="Proud Of"
          description="Standout work across industries and technologies across the USA, UK, Europe, and Australia."
        />

        <div className="flex flex-wrap gap-2 mb-6 sm:mb-8 reveal-up">
          {categories.map((c) => {
            const val = categoryMap[c];
            return (
              <button
                key={c}
                onClick={() => setFilter(val)}
                className={`text-xs font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-[10px] transition-all ${
                  filter === val
                    ? "text-primary-foreground shadow-[var(--shadow-orange)]"
                    : "bg-foreground/[0.04] border border-foreground/10 text-muted-foreground hover:text-primary hover:border-primary/30"
                }`}
                style={filter === val ? { background: "var(--gradient-orange)" } : undefined}
              >
                {c}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filtered.map((p: any, i: number) => {
            const cat = p.category || p.cat;
            const icon = categoryIcons[cat] || "Code";

            return (
              <article
                key={p.id || p.title}
                className="reveal-up glass-card overflow-hidden group"
                style={{ transitionDelay: `${i * 0.04}s` }}
              >
                <div className="h-36 sm:h-44 flex items-center justify-center bg-gradient-to-br from-primary/10 to-navy/15 relative text-primary">
                  <TechIcon
                    icon={icon}
                    className="text-5xl sm:text-6xl transition-transform group-hover:scale-110 group-hover:-rotate-[5deg]"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <div className="text-[0.6rem] sm:text-xs font-bold text-primary tracking-widest uppercase mb-1.5 sm:mb-2">
                    {cat === "ai" ? "AI / ML" : cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {(typeof p.chips === "string" ? p.chips.split(",") : p.chips || []).map((c: string) => (
                      <span key={c} className="chip-blue chip-tag">{c.trim()}</span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
