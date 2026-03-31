import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useApiData } from "@/hooks/useApiData";
import { publicApi } from "@/services/api";
import SectionHeader from "@/components/SectionHeader";
import SEO from "@/components/SEO";
import TechIcon from "@/components/TechIcon";

const fallbackStacks = [
  { id: 1, label: "Frontend", items: "React.js / Next.js,Vue.js / Nuxt.js,Angular,TypeScript,Tailwind CSS" },
  { id: 2, label: "Backend", items: "Node.js / Express,Python / Django / FastAPI,Go (Golang),Java / Spring Boot,GraphQL / REST" },
  { id: 3, label: "Mobile", items: "Flutter,React Native,Swift (iOS),Kotlin (Android),Ionic" },
  { id: 4, label: "AI / ML", items: "OpenAI / GPT-4,LangChain / LlamaIndex,TensorFlow / PyTorch,Hugging Face,Pinecone / Weaviate" },
  { id: 5, label: "Cloud", items: "AWS (Solutions Architect),Microsoft Azure,Google Cloud Platform,Terraform / Pulumi,Serverless Framework" },
  { id: 6, label: "DevOps", items: "Docker / Kubernetes,GitHub Actions,Jenkins / CircleCI,ArgoCD,Prometheus / Grafana" },
  { id: 7, label: "Databases", items: "PostgreSQL / MySQL,MongoDB,Redis / Memcached,Elasticsearch,Snowflake / BigQuery" },
  { id: 8, label: "Testing & QA", items: "Jest / Playwright,Cypress,Selenium,k6 / JMeter,SonarQube" },
];

const tools = ["React", "Python", "TypeScript", "AWS", "Docker", "OpenAI", "Flutter", "Node.js", "Terraform", "Firebase", "PostgreSQL", "Kubernetes"];

const TechnologyPage = () => {
  const ref = useScrollReveal();
  const { data: stacks } = useApiData(() => publicApi.getTechStack(), fallbackStacks);

  return (
    <div ref={ref} className="pt-20 sm:pt-24 pb-16 sm:pb-20 bg-background-alt">
      <SEO
        title="Technology Stack -- Modern Tools for Scalable Solutions"
        description="Explore ARD TechLabs' battle-tested technology stack: React, Python, AWS, Docker, Kubernetes, OpenAI, and 50+ tools for building enterprise-grade software."
        canonical="/technology"
      />
      <div className="container">
        <SectionHeader
          eyebrow="Our Stack"
          title="Technology"
          accent="Expertise"
          description="Battle-tested technologies across every layer of the stack, selected for performance, scalability, compliance, and long-term maintainability."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10 sm:mb-12">
          {stacks.map((stack: any, i: number) => {
            const itemsArr = typeof stack.items === "string" ? stack.items.split(",") : stack.items || [];
            return (
              <div
                key={stack.id || stack.label}
                className="reveal-up bg-background-card/70 border border-secondary/20 rounded-[16px] sm:rounded-[18px] p-4 sm:p-5 transition-all hover:border-primary/30 hover:-translate-y-1"
                style={{ transitionDelay: `${(i % 4) * 0.1}s` }}
              >
                <div className="mb-3 flex items-center gap-3 border-b border-secondary/20 pb-3">
                  <TechIcon name={stack.label} size={40} />
                  <div className="text-xs font-bold text-primary tracking-widest uppercase">
                    {stack.label}
                  </div>
                </div>
                <ul className="space-y-2">
                  {itemsArr.map((item: string) => (
                    <li key={item} className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2 hover:text-foreground transition-colors">
                      <TechIcon name={item.trim()} size={28} />
                      <span>{item.trim()}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <h3 className="text-sm sm:text-base font-bold text-foreground mb-4 sm:mb-5 reveal-up">Tools We Master</h3>
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4">
          {tools.map((tool, i) => (
            <div
              key={tool}
              className="reveal-up bg-background-card/70 border border-secondary/20 rounded-[12px] sm:rounded-[14px] py-4 sm:py-5 px-3 text-center transition-all hover:border-primary/30 hover:-translate-y-1.5 hover:scale-[1.04] hover:bg-primary/[0.05] cursor-default"
              style={{ transitionDelay: `${(i % 6) * 0.1}s` }}
            >
              <div className="mb-2 flex justify-center">
                <TechIcon name={tool} size={48} />
              </div>
              <span className="text-[0.68rem] sm:text-xs text-muted-foreground font-medium">{tool}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologyPage;
