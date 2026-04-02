import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useApiData } from "@/hooks/useApiData";
import { publicApi } from "@/services/api";
import SectionHeader from "@/components/SectionHeader";
import SEO from "@/components/SEO";

const fallbackCases = [
  { id: 1, sector: "FinTech -- USA", title: "AI-Powered Fraud Detection Platform", description: "Real-time fraud detection for a leading US digital bank -- 2M+ transactions daily at sub-100ms latency using ML and stream processing.", metrics: "[{\"val\":\"99.2%\",\"label\":\"Detection Accuracy\"},{\"val\":\"78%\",\"label\":\"Fraud Reduction\"},{\"val\":\"85ms\",\"label\":\"Response Time\"}]", gradient: "from-primary/15 to-navy/20" },
  { id: 2, sector: "HealthTech -- UK", title: "Telemedicine & Patient Management Platform", description: "HIPAA-compliant telemedicine platform with video consultations, AI diagnostics, EHR integration for 200+ UK clinics.", metrics: "[{\"val\":\"200+\",\"label\":\"Clinics\"},{\"val\":\"50K+\",\"label\":\"Daily Users\"},{\"val\":\"4.9 stars\",\"label\":\"App Rating\"}]", gradient: "from-navy/20 to-primary/12" },
  { id: 3, sector: "eCommerce -- Europe", title: "Headless Commerce & Personalisation Engine", description: "Migrated European monolithic e-commerce platform to headless microservices with AI-driven recommendations.", metrics: "[{\"val\":\"42%\",\"label\":\"Conversion Uplift\"},{\"val\":\"3x\",\"label\":\"Load Speed\"},{\"val\":\"$2.4M\",\"label\":\"Added Revenue\"}]", gradient: "from-primary/12 to-navy/16" },
  { id: 4, sector: "Logistics -- Germany", title: "Smart Fleet Management & Route Optimisation", description: "IoT-integrated fleet management with real-time GPS, AI route optimisation, and predictive maintenance for 5,000+ vehicles.", metrics: "[{\"val\":\"28%\",\"label\":\"Fuel Savings\"},{\"val\":\"5K+\",\"label\":\"Vehicles\"},{\"val\":\"40%\",\"label\":\"Faster Delivery\"}]", gradient: "from-navy/16 to-primary/10" },
];

const emojiForIndex = (i: number) => ["credit-card", "heart", "shopping-cart", "truck"][i % 4];
const emojiMap: Record<string, string> = { "credit-card": "\uD83D\uDCB3", "heart": "\u2764\uFE0F", "shopping-cart": "\uD83D\uDED2", "truck": "\uD83D\uDE9B" };

const WorkPage = () => {
  const ref = useScrollReveal();
  const { data: cases } = useApiData(() => publicApi.getCaseStudies(), fallbackCases);

  return (
    <div ref={ref} className="pt-20 sm:pt-24 pb-16 sm:pb-20 bg-background">
      <SEO
        title="Case Studies -- Real Results for USA, UK, Europe & Australia"
        description="Explore ARD TechLabs case studies: AI fraud detection for US FinTech, telemedicine in the UK, headless commerce in Europe, and smart logistics in Germany."
        canonical="/work"
      />
      <div className="container">
        <SectionHeader
          eyebrow="Case Studies"
          title="Work That"
          accent="Delivers Results"
          description="Real-world projects, measurable outcomes across the USA, UK, Europe, and Australia."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {cases.map((c: any, i: number) => {
            let metricsArr: any[] = [];
            try {
              metricsArr = typeof c.metrics === "string" ? JSON.parse(c.metrics) : (c.metrics || []);
            } catch { metricsArr = []; }

            const emoji = c.emoji ? (emojiMap[c.emoji] || c.emoji) : ["\uD83D\uDCB3", "\u2764\uFE0F", "\uD83D\uDED2", "\uD83D\uDE9B"][i % 4];

            return (
              <article
                key={c.id || c.title}
                className={`${i % 2 === 0 ? "reveal-left" : "reveal-right"} glass-card overflow-hidden`}
                style={{ transitionDelay: `${i * 0.1}s`, borderRadius: 24 }}
              >
                <div className={`h-36 sm:h-48 flex items-center justify-center text-4xl sm:text-5xl bg-gradient-to-br ${c.gradient || "from-primary/15 to-navy/20"} relative`}>
                  <span className="relative z-[1]" style={{ animation: "emoji-float 3s ease-in-out infinite" }}>
                    {emoji}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-background-card/70 to-transparent" />
                </div>
                <div className="p-4 sm:p-6">
                  <div className="text-xs font-semibold text-primary tracking-wider uppercase mb-1.5 sm:mb-2">{c.sector}</div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-1.5 sm:mb-2">{c.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4">{c.description}</p>
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {metricsArr.map((m: any) => (
                      <div key={m.label} className="bg-foreground/[0.04] border border-foreground/[0.06] rounded-lg p-2 sm:p-3 text-center">
                        <strong className="block text-sm sm:text-base font-extrabold text-primary">{m.val}</strong>
                        <span className="text-[0.6rem] sm:text-[0.65rem] text-muted-foreground">{m.label}</span>
                      </div>
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

export default WorkPage;
