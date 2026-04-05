import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useApiData } from "@/hooks/useApiData";
import { publicApi } from "@/services/api";
import SectionHeader from "@/components/SectionHeader";
import SEO from "@/components/SEO";
import { TechIcon } from "@/components/TechIcon";

const fallbackStacks = [
  { id: 1, label: "Frontend", items: "React.js,Next.js,Vue.js,Nuxt,Angular,TypeScript,Tailwind CSS,JavaScript" },
  { id: 2, label: "Backend", items: "Node.js,Express,Python,Django,FastAPI,Go,Java,Spring Boot,GraphQL" },
  { id: 3, label: "Mobile", items: "Flutter,React Native,Swift,Kotlin,Ionic" },
  { id: 4, label: "AI / ML", items: "OpenAI,LangChain,LlamaIndex,TensorFlow,PyTorch,Hugging Face,Pinecone,Weaviate" },
  { id: 5, label: "Cloud", items: "AWS,Azure,Google Cloud,Terraform,Pulumi" },
  { id: 6, label: "DevOps", items: "Docker,Kubernetes,GitHub Actions,Jenkins,CircleCI,ArgoCD,Prometheus,Grafana" },
  { id: 7, label: "Databases", items: "PostgreSQL,MySQL,MongoDB,Redis,Elasticsearch,Snowflake,BigQuery" },
  { id: 8, label: "Testing & QA", items: "Jest,Playwright,Cypress,Selenium" },
];

const tools = [
  "React",
  "Python",
  "TypeScript",
  "AWS",
  "Docker",
  "OpenAI",
  "Flutter",
  "Node.js",
  "Terraform",
  "Firebase",
  "PostgreSQL",
  "Kubernetes",
];

const TechnologyPage = () => {
  const ref = useScrollReveal();
  const { data: stacks } = useApiData(() => publicApi.getTechStack(), fallbackStacks);

  return (
    <div ref={ref} className="pt-20 sm:pt-24 pb-16 sm:pb-20 bg-background">
      <SEO
        title="Technology Stack -- Modern Tools & Frameworks for Enterprise Solutions"
        description="Explore ARD TechLabs' battle-tested technology stack: React, Python, AWS, Docker, Kubernetes, OpenAI, and 50+ tools for building scalable enterprise-grade software."
        canonical="/technology"
      />

      <div className="container">
        <SectionHeader
          eyebrow="Our Expertise"
          title="Technology"
          accent="Stack"
          description="Battle-tested technologies across every layer of the stack, selected for performance, scalability, security, compliance, and long-term maintainability."
          centered
        />

        {/* Tech Stack Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-14 sm:mb-16">
          {stacks.map((stack: any, i: number) => {
            const itemsArr = (typeof stack.items === "string" ? stack.items.split(",") : stack.items || []).map(
              (item: string) => item.trim()
            );

            return (
              <div
                key={stack.id || stack.label}
                className="reveal-up group glass-card p-5 sm:p-6 hover:border-primary/40 transition-all duration-300"
                style={{ transitionDelay: `${(i % 4) * 0.1}s` }}
              >
                {/* Category Header */}
                <div className="mb-4 pb-4 border-b border-secondary/20 flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-primary/[0.12] group-hover:bg-primary/[0.2] transition-all">
                    <TechIcon icon={stack.label} />
                  </div>
                  <h3 className="text-sm font-bold text-primary group-hover:text-orange-light transition-colors">
                    {stack.label}
                  </h3>
                </div>

                {/* Technologies List */}
                <ul className="space-y-3">
                  {itemsArr.map((item: string) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-all duration-200 group/item"
                    >
                      <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
                        <TechIcon icon={item} />
                      </div>
                      <span className="font-medium group-hover/item:translate-x-0.5 transition-transform">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Mastered Tools Section */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-5 sm:mb-6">
            <div className="h-1 w-12 rounded-full" style={{ background: "var(--gradient-rule)" }} />
            <h3 className="text-sm sm:text-base font-bold text-foreground">Tools We Master</h3>
          </div>

          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4">
            {tools.map((tool, i) => (
              <div
                key={tool}
                className="reveal-up group glass-card py-4 sm:py-5 px-3 sm:px-4 text-center hover:border-primary/40 hover:bg-primary/[0.08] transition-all duration-300 hover:scale-105 hover:-translate-y-1.5 cursor-default"
                style={{ transitionDelay: `${(i % 6) * 0.08}s` }}
              >
                <div className="mb-2.5 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  <TechIcon icon={tool} />
                </div>
                <p className="text-[0.68rem] sm:text-xs font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                  {tool}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="mt-16 sm:mt-20 pt-12 sm:pt-16 border-t border-secondary/20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <article className="glass-card p-6 sm:p-7 reveal-up hover:border-primary/40 transition-all">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                <TechIcon icon="Zap" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary">Battle-Tested Stack</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Every technology is selected after production testing, performance benchmarks, and proven team expertise across 150+ projects.
              </p>
            </article>

            <article className="glass-card p-6 sm:p-7 reveal-up hover:border-primary/40 transition-all" style={{ transitionDelay: "0.1s" }}>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                <TechIcon icon="CheckCircle" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Scalable Architecture</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Modern cloud-native architectures with Kubernetes, microservices, and serverless options for seamless scaling from MVP to enterprise.
              </p>
            </article>

            <article className="glass-card p-6 sm:p-7 reveal-up hover:border-primary/40 transition-all" style={{ transitionDelay: "0.2s" }}>
              <div className="mb-4 inline-flex h-12 w-12 items-.center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                <TechIcon icon="Lock" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Security & Compliance</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                ISO 27001, GDPR, and SOC 2 compliance built in from day one. Encryption, audit logs, and security best practices embedded everywhere.
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyPage;
