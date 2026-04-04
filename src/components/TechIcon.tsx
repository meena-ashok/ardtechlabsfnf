import { IconContext } from 'react-icons';
import * as DiIcons from 'react-icons/di';

const iconMapping: { [key: string]: string } = {
  react: 'DiReact',
  'react.js': 'DiReact',
  'next.js': 'DiNextjs',
  nuxt: 'DiNuxt',
  vue: 'DiVuejs',
  'vue.js': 'DiVuejs',
  angular: 'DiAngularSimple',
  typescript: 'DiTypescript',
  'tailwind css': 'DiTailwindCss',
  javascript: 'DiJavascript1',
  'node.js': 'DiNodejsSmall',
  express: 'DiNodejs',
  python: 'DiPython',
  django: 'DiDjango',
  fastapi: 'DiFastapi',
  go: 'DiGo',
  java: 'DiJava',
  'spring boot': 'DiSpring',
  spring: 'DiSpring',
  graphql: 'DiGraphql',
  flutter: 'DiFlutter',
  'react native': 'DiReact',
  swift: 'DiSwift',
  kotlin: 'DiKotlin',
  ionic: 'DiIonic',
  openai: 'DiOpenai',
  langchain: 'DiTerminal',
  llamaindex: 'DiTerminal',
  tensorflow: 'DiTensorflow',
  pytorch: 'DiPython',
  'hugging face': 'DiTerminal',
  pinecone: 'DiPinecone',
  weaviate: 'DiTerminal',
  aws: 'DiAws',
  'amazon web services': 'DiAws',
  azure: 'DiAzure',
  'google cloud': 'DiGoogleCloudPlatform',
  gcp: 'DiGoogleCloudPlatform',
  terraform: 'DiTerraform',
  pulumi: 'DiTerminal',
  docker: 'DiDocker',
  kubernetes: 'DiKubernetes',
  k8s: 'DiKubernetes',
  jenkins: 'DiJenkins',
  circleci: 'DiCircleci',
  argocd: 'DiTerminal',
  prometheus: 'DiPrometheus',
  grafana: 'DiGrafana',
  'github actions': 'DiGithubBadge',
  postgresql: 'DiPostgresql',
  postgres: 'DiPostgresql',
  mysql: 'DiMysql',
  mongodb: 'DiMongodb',
  redis: 'DiRedis',
  elasticsearch: 'DiElasticsearch',
  snowflake: 'DiSnowflake',
  bigquery: 'DiGoogleCloudPlatform',
  jest: 'DiJest',
  playwright: 'DiTerminal',
  cypress: 'DiTerminal',
  selenium: 'DiSelenium',
  firebase: 'DiFirebase',
  // Categories
  'frontend': 'DiCode',
  'backend': 'DiTerminal',
  'mobile': 'DiAndroid',
  'ai / ml': 'DiBrain',
  'cloud': 'DiCloud',
  'devops': 'DiTerminalBadge',
  'databases': 'DiDatabase',
  'testing & qa': 'DiTest',
};

const TechIcon = ({ name, size = 44 }: { name: string; size?: number }) => {
  const iconName = iconMapping[name.toLowerCase()];
  const IconComponent = iconName ? (DiIcons as any)[iconName] : null;

  const fallback = <span className="text-[0.55rem] font-bold text-muted-foreground uppercase">{name.substring(0, 3)}</span>

  return (
    <div
      style={{ width: size, height: size }}
      className="flex-shrink-0 drop-shadow-sm rounded-lg flex items-center justify-center bg-background-alt border border-white/5"
      aria-label={name}
      title={name}
    >
      {IconComponent ? (
        <IconContext.Provider value={{ size: `${size * 0.65}px`, style: { opacity: 0.8 } }}>
          <IconComponent />
        </IconContext.Provider>
      ) : fallback}
    </div>
  );
};

export default TechIcon;
