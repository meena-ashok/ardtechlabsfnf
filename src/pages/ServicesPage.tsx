import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useApiData } from "@/hooks/useApiData";
import { publicApi } from "@/services/api";
import SectionHeader from "@/components/SectionHeader";
import SEO from "@/components/SEO";
import { TechIcon } from "@/components/TechIcon";

const fallbackServices = [
  { id: 1, icon: "Full-Stack Web Development", variant: "orange", title: "Full-Stack Web Development", description: "End-to-end web applications built with modern frameworks -- scalable, secure, and performance-optimized.", chips: "React,Next.js,Node.js,Django,PostgreSQL" },
  { id: 2, icon: "Mobile App Development", variant: "navy", title: "Mobile App Development", description: "Native and cross-platform iOS & Android applications with exceptional UX and seamless performance.", chips: "Flutter,React Native,Swift,Kotlin" },
  { id: 3, icon: "AI & Machine Learning", variant: "orange", title: "AI & Machine Learning", description: "NLP, computer vision, predictive analytics, and LLM integrations that automate and enhance your business.", chips: "OpenAI,LangChain,TensorFlow,PyTorch" },
  { id: 4, icon: "Cloud Solutions", variant: "navy", title: "Cloud Solutions", description: "Cloud architecture design, migration, and optimization across AWS, Azure, and GCP.", chips: "AWS,Azure,GCP,Terraform,CDK" },
  { id: 5, icon: "DevOps & CI/CD", variant: "orange", title: "DevOps & CI/CD", description: "Streamlined pipelines, infrastructure as code, container orchestration, and automated testing.", chips: "Docker,Kubernetes,GitHub Actions,Jenkins" },
  { id: 6, icon: "IT Consulting & Strategy", variant: "navy", title: "IT Consulting & Strategy", description: "Technology roadmap planning, digital transformation strategy, architecture reviews, and CTO advisory.", chips: "Architecture,Transformation,Roadmapping" },
  { id: 7, icon: "Data Engineering & Analytics", variant: "orange", title: "Data Engineering & Analytics", description: "End-to-end data pipelines, warehousing, BI dashboards, and real-time analytics for actionable insights.", chips: "Spark,Snowflake,Airflow,dbt,Tableau" },
  { id: 8, icon: "UI/UX Design", variant: "navy", title: "UI/UX Design", description: "User-centred design, prototypes, design systems, and usability research creating delightful experiences.", chips: "Figma,Design Systems,Prototyping,Research" },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "IT Services by ARD TechLabs",
  itemListElement: fallbackServices.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: { "@type": "Service", name: s.title, description: s.description },
  })),
};

const ServicesPage = () => {
  const ref = useScrollReveal();
  const { data: services } = useApiData(() => publicApi.getServices(), fallbackServices);

  return (
    <div ref={ref} className="pt-20 sm:pt-24 pb-16 sm:pb-20 bg-background">
      <SEO
        title="IT Services -- Full-Stack, AI, Cloud, Mobile & DevOps"
        description="Comprehensive IT services including full-stack web development, mobile apps, AI/ML, cloud solutions, and DevOps for businesses across the USA, UK, Europe, and Australia."
        canonical="/services"
        jsonLd={serviceJsonLd}
      />
      <div className="container">
        <SectionHeader
          eyebrow="What We Do"
          title="Comprehensive IT"
          accent="Services"
          description="From concept to deployment -- full-spectrum technology solutions tailored to businesses across the USA, UK, Europe, and Australia."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((svc: any, i: number) => (
            <article
              key={svc.id || svc.title}
              className="reveal-up glass-card p-5 sm:p-7 group cursor-default"
              style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
            >
              <div className="mb-3 sm:mb-4 transition-transform group-hover:scale-110 group-hover:-rotate-[8deg]">
                <TechIcon icon={svc.icon} className="w-11 h-11" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-foreground mb-1.5 sm:mb-2">{svc.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4">{svc.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {(typeof svc.chips === "string" ? svc.chips.split(",") : svc.chips || []).map((chip: string) => (
                  <span
                    key={chip}
                    className={`chip-tag ${svc.variant === "navy" ? "chip-blue" : "chip-orange"}`}
                  >
                    {chip.trim()}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
