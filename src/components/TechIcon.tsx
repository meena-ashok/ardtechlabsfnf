interface TechIconConfig {
  bg: string;
  color: string;
  name: string;
  darkMode?: boolean;
}

const iconMap: Record<string, TechIconConfig> = {
  // Frontend
  react: { bg: "#E7F4FC", color: "#61DAFB", name: "React", darkMode: true },
  "next.js": { bg: "#000000", color: "#FFFFFF", name: "Next.js", darkMode: true },
  nuxt: { bg: "#003D3D", color: "#00DC82", name: "Nuxt", darkMode: true },
  vue: { bg: "#F5F7FA", color: "#42B883", name: "Vue.js", darkMode: true },
  angular: { bg: "#DD0031", color: "#FFFFFF", name: "Angular", darkMode: true },
  typescript: { bg: "#3178C6", color: "#FFFFFF", name: "TypeScript", darkMode: true },
  "tailwind css": { bg: "#F0F9FF", color: "#38BDF8", name: "Tailwind CSS", darkMode: true },
  
  // Backend
  "node.js": { bg: "#68A063", color: "#FFFFFF", name: "Node.js", darkMode: true },
  express: { bg: "#FFFFFF", color: "#000000", name: "Express", darkMode: false },
  python: { bg: "#366994", color: "#FFD43B", name: "Python", darkMode: true },
  django: { bg: "#092E20", color: "#44B78B", name: "Django", darkMode: true },
  fastapi: { bg: "#009688", color: "#FFFFFF", name: "FastAPI", darkMode: true },
  go: { bg: "#00ADD8", color: "#FFFFFF", name: "Go", darkMode: true },
  golang: { bg: "#00ADD8", color: "#FFFFFF", name: "Go", darkMode: true },
  java: { bg: "#F89820", color: "#FFFFFF", name: "Java", darkMode: true },
  "spring boot": { bg: "#68A064", color: "#FFFFFF", name: "Spring Boot", darkMode: true },
  graphql: { bg: "#E10098", color: "#FFFFFF", name: "GraphQL", darkMode: true },
  
  // Mobile
  flutter: { bg: "#02569B", color: "#54C5F8", name: "Flutter", darkMode: true },
  "react native": { bg: "#61DAFB", color: "#FFFFFF", name: "React Native", darkMode: true },
  swift: { bg: "#F05138", color: "#FFFFFF", name: "Swift", darkMode: true },
  kotlin: { bg: "#7F52FF", color: "#FFFFFF", name: "Kotlin", darkMode: true },
  ionic: { bg: "#3880FF", color: "#FFFFFF", name: "Ionic", darkMode: true },
  
  // AI/ML
  openai: { bg: "#000000", color: "#FFFFFF", name: "OpenAI", darkMode: true },
  langchain: { bg: "#1C3C3C", color: "#88D18C", name: "LangChain", darkMode: true },
  llamaindex: { bg: "#0066FF", color: "#FFFFFF", name: "LlamaIndex", darkMode: true },
  tensorflow: { bg: "#FF6F00", color: "#FFFFFF", name: "TensorFlow", darkMode: true },
  pytorch: { bg: "#EE4C2C", color: "#FFFFFF", name: "PyTorch", darkMode: true },
  "hugging face": { bg: "#FFD21E", color: "#000000", name: "Hugging Face", darkMode: false },
  pinecone: { bg: "#00B8D4", color: "#FFFFFF", name: "Pinecone", darkMode: true },
  weaviate: { bg: "#12A48A", color: "#FFFFFF", name: "Weaviate", darkMode: true },
  
  // Cloud
  aws: { bg: "#FF9900", color: "#FFFFFF", name: "AWS", darkMode: true },
  "amazon web services": { bg: "#FF9900", color: "#FFFFFF", name: "AWS", darkMode: true },
  azure: { bg: "#0078D4", color: "#FFFFFF", name: "Azure", darkMode: true },
  "google cloud": { bg: "#4285F4", color: "#FFFFFF", name: "Google Cloud", darkMode: true },
  gcp: { bg: "#4285F4", color: "#FFFFFF", name: "GCP", darkMode: true },
  terraform: { bg: "#7B42BC", color: "#FFFFFF", name: "Terraform", darkMode: true },
  pulumi: { bg: "#8A3391", color: "#FFFFFF", name: "Pulumi", darkMode: true },
  
  // DevOps
  docker: { bg: "#2496ED", color: "#FFFFFF", name: "Docker", darkMode: true },
  kubernetes: { bg: "#326CE5", color: "#FFFFFF", name: "Kubernetes", darkMode: true },
  k8s: { bg: "#326CE5", color: "#FFFFFF", name: "K8s", darkMode: true },
  jenkins: { bg: "#D24939", color: "#FFFFFF", name: "Jenkins", darkMode: true },
  circleci: { bg: "#343434", color: "#68C3E2", name: "CircleCI", darkMode: true },
  argocd: { bg: "#EB6E20", color: "#FFFFFF", name: "ArgoCD", darkMode: true },
  prometheus: { bg: "#E6522C", color: "#FFFFFF", name: "Prometheus", darkMode: true },
  grafana: { bg: "#F05A28", color: "#FFFFFF", name: "Grafana", darkMode: true },
  "github actions": { bg: "#2088FF", color: "#FFFFFF", name: "GitHub Actions", darkMode: true },
  
  // Databases
  postgresql: { bg: "#336791", color: "#FFFFFF", name: "PostgreSQL", darkMode: true },
  postgres: { bg: "#336791", color: "#FFFFFF", name: "PostgreSQL", darkMode: true },
  mysql: { bg: "#00758F", color: "#FFFFFF", name: "MySQL", darkMode: true },
  mongodb: { bg: "#13AA52", color: "#FFFFFF", name: "MongoDB", darkMode: true },
  redis: { bg: "#DC382D", color: "#FFFFFF", name: "Redis", darkMode: true },
  elasticsearch: { bg: "#005571", color: "#45B7D1", name: "Elasticsearch", darkMode: true },
  snowflake: { bg: "#29B5E8", color: "#FFFFFF", name: "Snowflake", darkMode: true },
  bigquery: { bg: "#669DF6", color: "#FFFFFF", name: "BigQuery", darkMode: true },
  
  // Testing
  jest: { bg: "#15C213", color: "#FFFFFF", name: "Jest", darkMode: true },
  playwright: { bg: "#45BA4B", color: "#FFFFFF", name: "Playwright", darkMode: true },
  cypress: { bg: "#17202C", color: "#69D3A7", name: "Cypress", darkMode: true },
  selenium: { bg: "#43B02A", color: "#FFFFFF", name: "Selenium", darkMode: true },
  
  // Other
  firebase: { bg: "#FFCA28", color: "#000000", name: "Firebase", darkMode: false },
};

function normalizeName(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/\(.*?\)/g, "")
    .trim();
}

function resolveIcon(name: string): TechIconConfig | undefined {
  const normalized = normalizeName(name);
  const candidates = [
    iconMap[normalized],
    iconMap[normalized.split("/")[0].trim()],
    iconMap[normalized.split(",")[0].trim()],
    iconMap[normalized.replace(".js", "")],
    iconMap[normalized.replace(".ts", "")],
    iconMap[normalized.replace("css", "").trim()],
  ];
  return candidates.find(Boolean);
}

export default function TechIcon({ name, size = 44 }: { name: string; size?: number }) {
  const resolved = resolveIcon(name);
  const config = resolved || {
    bg: "#162033",
    color: "#F47C20",
    name: name.split(/[(/,]/)[0].trim(),
    darkMode: true,
  };

  const label = config.name.split(" ")[0].slice(0, 3).toUpperCase();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 56 56"
      aria-label={config.name}
      className="flex-shrink-0 drop-shadow-sm"
    >
      {/* Background with gradient and border */}
      <defs>
        <linearGradient id={`grad-${name}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={config.bg} stopOpacity="1" />
          <stop offset="100%" stopColor={config.bg} stopOpacity="0.85" />
        </linearGradient>
      </defs>
      
      {/* Card background */}
      <rect
        x="2"
        y="2"
        width="52"
        height="52"
        rx="12"
        fill={`url(#grad-${name})`}
        stroke={config.darkMode ? "rgba(244,124,32,0.2)" : "rgba(100,150,200,0.2)"}
        strokeWidth="1.2"
      />

      {/* Subtle accent dot */}
      <circle cx="46" cy="10" r="2.5" fill={config.color} opacity="0.7" />

      {/* Icon text */}
      <text
        x="28"
        y="33"
        textAnchor="middle"
        fill={config.color}
        fontSize={size > 40 ? "18" : "14"}
        fontWeight="800"
        fontFamily="'Plus Jakarta Sans', Arial, sans-serif"
        letterSpacing="-0.5"
      >
        {label}
      </text>
    </svg>
  );
}
