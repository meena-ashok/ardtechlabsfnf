import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useApiData } from "@/hooks/useApiData";
import { publicApi } from "@/services/api";
import SectionHeader from "@/components/SectionHeader";
import SEO from "@/components/SEO";
import { TechIcon } from "@/components/TechIcon";

const fallbackServices = [
  { id: 1, icon: "Code", variant: "orange", title: "Full-Stack Web Development", description: "End-to-end web applications built with modern frameworks -- scalable, secure, and performance-optimized.", chips: "React,Next.js,Node.js,Django,PostgreSQL" },
  { id: 2, icon: "Smartphone", variant: "navy", title: "Mobile App Development", description: "Native and cross-platform iOS & Android applications with exceptional UX and seamless performance.", chips: "Flutter,React Native,Swift,Kotlin" },
  { id: 3, icon: "BrainCircuit", variant: "orange", title: "AI & Machine Learning", description: "NLP, computer vision, predictive analytics, and LLM integrations that automate and enhance your business.", chips: "OpenAI,LangChain,TensorFlow,PyTorch" },
  { id: 4, icon: "Cloud", variant: "navy", title: "Cloud Solutions", description: "Cloud architecture design, migration, and optimization across AWS, Azure, and GCP.", chips: "AWS,Azure,GCP,Terraform,CDK" },
  { id: 5, icon: "GitMerge", variant: "orange", title: "DevOps & CI/CD", description: "Streamlined pipelines, infrastructure as code, container orchestration, and automated testing.", chips: "Docker,Kubernetes,GitHub Actions,Jenkins" },
  { id: 6, icon: "Users", variant: "navy", title: "IT Consulting & Strategy", description: "Technology roadmap planning, digital transformation strategy, architecture reviews, and CTO advisory.", chips: "Architecture,Transformation,Roadmapping" },
  { id: 7, icon: "Database", variant: "orange", title: "Data Engineering & Analytics", description: "End-to-end data pipelines, warehousing, BI dashboards, and real-time analytics for actionable insights.", chips: "Spark,Snowflake,Airflow,dbt,Tableau" },
  { id: 8, icon: "PenTool", variant: "navy", title: "UI/UX Design", description: "User-centred design, prototypes, design systems, and usability research creating delightful experiences.", chips: "Figma,Design Systems,Prototyping,Research" },
];

const servicesJsonLd = fallbackServices.map((service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.title,
  description: service.description,
  serviceType: service.title,
  provider: {
    "@type": "Organization",
    name: "ARD TechLabs",
  },
  areaServed: {
    "@type": "GeoShape",
    description: "USA, UK, Europe, and Australia",
  },
  keywords: service.chips,
}));

const ServicesPage = ({ analyticsConfig }) => {
  const ref = useScrollReveal();
  const { data: services } = useApiData(() => publicApi.getServices(), fallbackServices);

  return (
    <div ref={ref} className="pt-20 sm:pt-24 pb-16 sm:pb-20 bg-background">
      <SEO
        title="Expert IT Services for Business Growth | ARD TechLabs"
        description="Explore the comprehensive IT services offered by ARD TechLabs. We specialize in full-stack web development, mobile apps, AI/ML solutions, cloud computing, and DevOps. Serving clients in the USA, UK, Europe, and Australia."
        canonical="/services"
        jsonLd={servicesJsonLd}
        analyticsConfig={analyticsConfig}
      />
      <div className="container">
        <SectionHeader
          eyebrow="What We Do"
          title="Comprehensive IT"
          accent="Services"
          description="From concept to deployment, we provide full-spectrum technology solutions tailored to your business needs."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((svc: any, i: number) => (
            <article
              key={svc.id || svc.title}
              className="reveal-up glass-card p-5 sm:p-7 group cursor-default"
              style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
            >
              <div
                className={`icon-box ${
                  svc.variant === 'navy' ? 'icon-box-navy' : 'icon-box-orange'
                } mb-4 transition-transform group-hover:scale-110 group-hover:-rotate-[8deg]`}
              >
                <TechIcon icon={svc.icon} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{svc.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">{svc.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {(typeof svc.chips === "string" ? svc.chips.split(",") : svc.chips || []).map((chip: string) => (
                  <span
                    key={chip}
                    className={`chip-tag ${svc.variant === "navy" ? "chip-blue" : ""}`}
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
