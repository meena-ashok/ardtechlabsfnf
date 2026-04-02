const iconMap: Record<string, { bg: string; fg: string; label: string; accent?: string }> = {
  react: { bg: "#06131d", fg: "#61DAFB", label: "React", accent: "#61DAFB" },
  "next.js": { bg: "#111111", fg: "#FFFFFF", label: "Next", accent: "#FFFFFF" },
  vue: { bg: "#0f172a", fg: "#42B883", label: "Vue", accent: "#35495E" },
  angular: { bg: "#22060a", fg: "#DD0031", label: "Angular", accent: "#C3002F" },
  typescript: { bg: "#0b1b33", fg: "#3178C6", label: "TS", accent: "#3178C6" },
  tailwind: { bg: "#082f38", fg: "#38BDF8", label: "TW", accent: "#38BDF8" },
  node: { bg: "#0f1f10", fg: "#68A063", label: "Node", accent: "#68A063" },
  python: { bg: "#122033", fg: "#FFD43B", label: "Py", accent: "#3776AB" },
  django: { bg: "#092e20", fg: "#FFFFFF", label: "Dj", accent: "#44B78B" },
  fastapi: { bg: "#08251f", fg: "#009688", label: "FA", accent: "#009688" },
  go: { bg: "#0a2131", fg: "#00ADD8", label: "Go", accent: "#00ADD8" },
  java: { bg: "#26150d", fg: "#F89820", label: "Java", accent: "#5382A1" },
  graphql: { bg: "#2b0d21", fg: "#E10098", label: "GQL", accent: "#E10098" },
  flutter: { bg: "#081924", fg: "#54C5F8", label: "Flutter", accent: "#02569B" },
  "react native": { bg: "#06131d", fg: "#61DAFB", label: "RN", accent: "#61DAFB" },
  swift: { bg: "#331707", fg: "#F05138", label: "Swift", accent: "#F05138" },
  kotlin: { bg: "#21122f", fg: "#A97BFF", label: "Kt", accent: "#7F52FF" },
  ionic: { bg: "#091d3d", fg: "#3880FF", label: "Ionic", accent: "#3880FF" },
  openai: { bg: "#101010", fg: "#FFFFFF", label: "OpenAI", accent: "#74AA9C" },
  langchain: { bg: "#122515", fg: "#71C562", label: "LC", accent: "#71C562" },
  tensorflow: { bg: "#2c1705", fg: "#FF6F00", label: "TF", accent: "#FF6F00" },
  pytorch: { bg: "#331108", fg: "#EE4C2C", label: "Torch", accent: "#EE4C2C" },
  aws: { bg: "#1b1305", fg: "#FF9900", label: "AWS", accent: "#FF9900" },
  azure: { bg: "#071f31", fg: "#0078D4", label: "Azure", accent: "#0078D4" },
  "google cloud": { bg: "#111827", fg: "#4285F4", label: "GCP", accent: "#34A853" },
  terraform: { bg: "#171123", fg: "#7B42BC", label: "TF", accent: "#7B42BC" },
  docker: { bg: "#071f31", fg: "#2496ED", label: "Docker", accent: "#2496ED" },
  kubernetes: { bg: "#081b38", fg: "#326CE5", label: "K8s", accent: "#326CE5" },
  "github actions": { bg: "#0a1830", fg: "#2088FF", label: "GH", accent: "#2088FF" },
  jenkins: { bg: "#2a1a16", fg: "#D24939", label: "Jenkins", accent: "#D24939" },
  postgres: { bg: "#102033", fg: "#336791", label: "PG", accent: "#336791" },
  mysql: { bg: "#102033", fg: "#00758F", label: "MySQL", accent: "#F29111" },
  mongodb: { bg: "#0f2014", fg: "#47A248", label: "Mongo", accent: "#47A248" },
  redis: { bg: "#2f0d0d", fg: "#DC382D", label: "Redis", accent: "#DC382D" },
  elasticsearch: { bg: "#101d26", fg: "#FEC514", label: "ES", accent: "#00BFB3" },
  snowflake: { bg: "#052734", fg: "#29B5E8", label: "Snow", accent: "#29B5E8" },
  bigquery: { bg: "#0e1d30", fg: "#669DF6", label: "BQ", accent: "#669DF6" },
  jest: { bg: "#291118", fg: "#C21325", label: "Jest", accent: "#99425B" },
  playwright: { bg: "#0f2216", fg: "#45BA4B", label: "PW", accent: "#45BA4B" },
  cypress: { bg: "#102018", fg: "#69D3A7", label: "Cypress", accent: "#69D3A7" },
  selenium: { bg: "#142510", fg: "#43B02A", label: "Sel", accent: "#43B02A" },
  firebase: { bg: "#281d08", fg: "#FFCA28", label: "FB", accent: "#F57C00" },
};

function normalizeName(name: string) {
  return name
    .toLowerCase()
    .replace(/\(.*?\)/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function resolveIcon(name: string) {
  const normalized = normalizeName(name);
  const candidates = [
    normalized,
    normalized.split("/")[0].trim(),
    normalized.split(",")[0].trim(),
    normalized.replace(".js", ""),
    normalized.replace("css", ""),
  ];

  return candidates
    .map((candidate) => iconMap[candidate])
    .find(Boolean);
}

export default function TechIcon({ name, size = 44 }: { name: string; size?: number }) {
  const resolved = resolveIcon(name);
  const label = resolved?.label || name.split(/[(/,]/)[0].trim().slice(0, 3).toUpperCase();
  const bg = resolved?.bg || "#162033";
  const fg = resolved?.fg || "#F47C20";
  const accent = resolved?.accent || fg;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      aria-hidden="true"
      className="flex-shrink-0"
    >
      <rect x="2.5" y="2.5" width="43" height="43" rx="14" fill={bg} stroke="rgba(255,255,255,0.08)" />
      <circle cx="36" cy="12" r="3" fill={accent} opacity="0.9" />
      <path d="M10 32c8-8 20-8 28 0" stroke={accent} strokeWidth="2.2" strokeLinecap="round" opacity="0.22" />
      <text
        x="24"
        y="28"
        textAnchor="middle"
        fill={fg}
        fontSize={label.length > 5 ? "9" : "11"}
        fontWeight="700"
        fontFamily="Arial, sans-serif"
      >
        {label}
      </text>
    </svg>
  );
}
