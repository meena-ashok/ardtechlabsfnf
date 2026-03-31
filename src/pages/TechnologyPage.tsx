import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeader from "@/components/SectionHeader";
import SEO from "@/components/SEO";

const iconBase = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const stackCategories = [
  { label: "Frontend", icon: `${iconBase}/react/react-original.svg`, items: [["React",`${iconBase}/react/react-original.svg`],["Vue.js",`${iconBase}/vuejs/vuejs-original.svg`],["Angular",`${iconBase}/angularjs/angularjs-original.svg`],["TypeScript",`${iconBase}/typescript/typescript-original.svg`],["Tailwind CSS","https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"]] },
  { label: "Backend", icon: `${iconBase}/nodejs/nodejs-original.svg`, items: [["Node.js",`${iconBase}/nodejs/nodejs-original.svg`],["Python",`${iconBase}/python/python-original.svg`],["Go",`${iconBase}/go/go-original.svg`],["Java",`${iconBase}/java/java-original.svg`],["GraphQL",`${iconBase}/graphql/graphql-plain.svg`]] },
  { label: "Mobile", icon: `${iconBase}/flutter/flutter-original.svg`, items: [["Flutter",`${iconBase}/flutter/flutter-original.svg`],["React Native",`${iconBase}/react/react-original.svg`],["Swift",`${iconBase}/swift/swift-original.svg`],["Kotlin",`${iconBase}/kotlin/kotlin-original.svg`],["Ionic",`${iconBase}/ionic/ionic-original.svg`]] },
  { label: "AI / ML", icon: `${iconBase}/tensorflow/tensorflow-original.svg`, items: [["TensorFlow",`${iconBase}/tensorflow/tensorflow-original.svg`],["Python",`${iconBase}/python/python-original.svg`],["OpenAI","https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg"],["LangChain","https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/langchain-color.png"],["Hugging Face","https://huggingface.co/front/assets/huggingface_logo-noborder.svg"]] },
  { label: "Cloud", icon: `${iconBase}/amazonwebservices/amazonwebservices-original-wordmark.svg`, items: [["AWS",`${iconBase}/amazonwebservices/amazonwebservices-original-wordmark.svg`],["Azure",`${iconBase}/azure/azure-original.svg`],["GCP",`${iconBase}/googlecloud/googlecloud-original.svg`],["Terraform",`${iconBase}/terraform/terraform-original.svg`],["Firebase",`${iconBase}/firebase/firebase-plain.svg`]] },
  { label: "DevOps", icon: `${iconBase}/docker/docker-original.svg`, items: [["Docker",`${iconBase}/docker/docker-original.svg`],["GitHub",`${iconBase}/github/github-original.svg`],["Jenkins",`${iconBase}/jenkins/jenkins-original.svg`],["ArgoCD","https://argo-cd.readthedocs.io/en/stable/assets/logo.png"],["Grafana",`${iconBase}/grafana/grafana-original.svg`]] },
  { label: "Databases", icon: `${iconBase}/postgresql/postgresql-original.svg`, items: [["PostgreSQL",`${iconBase}/postgresql/postgresql-original.svg`],["MongoDB",`${iconBase}/mongodb/mongodb-original.svg`],["Redis",`${iconBase}/redis/redis-original.svg`],["Elasticsearch",`${iconBase}/elasticsearch/elasticsearch-original.svg`],["MySQL",`${iconBase}/mysql/mysql-original.svg`]] },
  { label: "Testing", icon: `${iconBase}/jest/jest-plain.svg`, items: [["Jest",`${iconBase}/jest/jest-plain.svg`],["Cypress",`${iconBase}/cypressio/cypressio-original.svg`],["Selenium",`${iconBase}/selenium/selenium-original.svg`],["SonarQube",`${iconBase}/sonarqube/sonarqube-original.svg`],["Playwright","https://playwright.dev/img/playwright-logo.svg"]] },
];

const tools = [
  ["React",`${iconBase}/react/react-original.svg`],["Python",`${iconBase}/python/python-original.svg`],["TypeScript",`${iconBase}/typescript/typescript-original.svg`],["AWS",`${iconBase}/amazonwebservices/amazonwebservices-original-wordmark.svg`],
  ["Docker",`${iconBase}/docker/docker-original.svg`],["OpenAI","https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg"],["Flutter",`${iconBase}/flutter/flutter-original.svg`],["Node.js",`${iconBase}/nodejs/nodejs-original.svg`],
  ["Terraform",`${iconBase}/terraform/terraform-original.svg`],["Firebase",`${iconBase}/firebase/firebase-plain.svg`],["PostgreSQL",`${iconBase}/postgresql/postgresql-original.svg`],["Kubernetes",`${iconBase}/kubernetes/kubernetes-plain.svg`],
];

const TechnologyPage = () => {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className="pt-20 sm:pt-24 pb-16 sm:pb-20 bg-background-alt">
      <SEO title="Technology Stack -- Original Brand SVG Icons" description="Explore ARD TechLabs technology capabilities with original SVG brand icons across frontend, backend, mobile, AI/ML, cloud, DevOps, databases, and testing." canonical="/technology" />
      <div className="container">
        <SectionHeader eyebrow="Our Stack" title="Technology" accent="Expertise" description="Modern stack with original vendor SVG icons and category-based strengths." />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10 sm:mb-12">
          {stackCategories.map((stack, i) => (
            <div key={stack.label} className="reveal-up bg-background-card/70 border border-secondary/20 rounded-[16px] p-4 sm:p-5" style={{ transitionDelay: `${(i % 4) * 0.1}s` }}>
              <div className="text-xs font-bold text-primary tracking-widest uppercase mb-3 pb-3 border-b border-secondary/20 flex items-center gap-2">
                <img src={stack.icon} alt={`${stack.label} icon`} className="w-5 h-5 object-contain" loading="lazy" />
                {stack.label}
              </div>
              <ul className="space-y-2">
                {stack.items.map(([name, icon]) => (
                  <li key={name} className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2 hover:text-foreground transition-colors">
                    <img src={icon} alt={`${name} logo`} className="w-4 h-4 object-contain" loading="lazy" />
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="text-sm sm:text-base font-bold text-foreground mb-4 sm:mb-5 reveal-up">Tools We Master</h3>
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4">
          {tools.map(([tool, icon], i) => (
            <div key={tool} className="reveal-up bg-background-card/70 border border-secondary/20 rounded-[12px] py-3 px-3 text-center" style={{ transitionDelay: `${(i % 6) * 0.1}s` }}>
              <img src={icon} alt={`${tool} logo`} className="w-8 h-8 sm:w-10 sm:h-10 object-contain mx-auto mb-2" loading="lazy" />
              <span className="text-[0.68rem] sm:text-xs text-muted-foreground font-medium">{tool}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologyPage;
