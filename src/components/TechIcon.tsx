import { IconContext } from 'react-icons';
import * as DiIcons from 'react-icons/di';
import * as SiIcons from 'react-icons/si';

const iconMapping: { [key: string]: { component: React.ElementType, pack: 'di' | 'si' } } = {
  // Frontend
  'react': { component: DiIcons.DiReact, pack: 'di' },
  'react.js': { component: DiIcons.DiReact, pack: 'di' },
  'next.js': { component: SiIcons.SiNextdotjs, pack: 'si' },
  'vue': { component: DiIcons.DiVuejs, pack: 'di' },
  'vue.js': { component: DiIcons.DiVuejs, pack: 'di' },
  'nuxt.js': { component: SiIcons.SiNuxtdotjs, pack: 'si' },
  'angular': { component: DiIcons.DiAngularSimple, pack: 'di' },
  'typescript': { component: DiIcons.DiTypescript, pack: 'di' },
  'javascript': { component: DiIcons.DiJavascript1, pack: 'di' },
  'tailwind css': { component: DiIcons.DiTailwindCss, pack: 'di' },
  'sass': { component: DiIcons.DiSass, pack: 'di' },
  'vite': { component: SiIcons.SiVite, pack: 'si' },

  // Backend
  'node.js': { component: DiIcons.DiNodejsSmall, pack: 'di' },
  'express': { component: SiIcons.SiExpress, pack: 'si' },
  'python': { component: DiIcons.DiPython, pack: 'di' },
  'django': { component: DiIcons.DiDjango, pack: 'di' },
  'fastapi': { component: SiIcons.SiFastapi, pack: 'si' },
  'go': { component: DiIcons.DiGo, pack: 'di' },
  'java': { component: DiIcons.DiJava, pack: 'di' },
  'spring boot': { component: SiIcons.SiSpringboot, pack: 'si' },
  'spring': { component: SiIcons.SiSpring, pack: 'si' },
  'graphql': { component: DiIcons.DiGraphql, pack: 'di' },
  'php': { component: DiIcons.DiPhp, pack: 'di' },
  'laravel': { component: DiIcons.DiLaravel, pack: 'di' },
  'ruby': { component: DiIcons.DiRuby, pack: 'di' },

  // Mobile
  'flutter': { component: SiIcons.SiFlutter, pack: 'si' },
  'react native': { component: SiIcons.SiReact, pack: 'si' },
  'swift': { component: DiIcons.DiSwift, pack: 'di' },
  'kotlin': { component: SiIcons.SiKotlin, pack: 'si' },
  'ionic': { component: SiIcons.SiIonic, pack: 'si' },
  'android': { component: DiIcons.DiAndroid, pack: 'di' },
  'apple': { component: DiIcons.DiApple, pack: 'di' },

  // AI / ML
  'openai': { component: SiIcons.SiOpenai, pack: 'si' },
  'langchain': { component: SiIcons.SiPython, pack: 'si' }, // No specific icon, using Python
  'tensorflow': { component: SiIcons.SiTensorflow, pack: 'si' },
  'pytorch': { component: SiIcons.SiPytorch, pack: 'si' },
  'hugging face': { component: SiIcons.SiHuggingface, pack: 'si' },
  'pinecone': { component: SiIcons.SiPinecone, pack: 'si' },
  'weaviate': { component: SiIcons.SiWeaviate, pack: 'si' },
  'scikit-learn': { component: SiIcons.SiScikitlearn, pack: 'si' },

  // Cloud & DevOps
  'aws': { component: DiIcons.DiAws, pack: 'di' },
  'azure': { component: DiIcons.DiAzure, pack: 'di' },
  'google cloud': { component: DiIcons.DiGoogleCloudPlatform, pack: 'di' },
  'gcp': { component: DiIcons.DiGoogleCloudPlatform, pack: 'di' },
  'terraform': { component: SiIcons.SiTerraform, pack: 'si' },
  'docker': { component: DiIcons.DiDocker, pack: 'di' },
  'kubernetes': { component: SiIcons.SiKubernetes, pack: 'si' },
  'jenkins': { component: DiIcons.DiJenkins, pack: 'di' },
  'circleci': { component: DiIcons.DiCircleci, pack: 'di' },
  'github actions': { component: SiIcons.SiGithubactions, pack: 'si' },
  'prometheus': { component: SiIcons.SiPrometheus, pack: 'si' },
  'grafana': { component: DiIcons.DiGrafana, pack: 'di' },
  'nginx': { component: DiIcons.DiNginx, pack: 'di' },
  'serverless': { component: SiIcons.SiServerless, pack: 'si' },

  // Databases
  'postgresql': { component: DiIcons.DiPostgresql, pack: 'di' },
  'mysql': { component: DiIcons.DiMysql, pack: 'di' },
  'mongodb': { component: DiIcons.DiMongodb, pack: 'di' },
  'redis': { component: DiIcons.DiRedis, pack: 'di' },
  'elasticsearch': { component: SiIcons.SiElasticsearch, pack: 'si' },
  'snowflake': { component: SiIcons.SiSnowflake, pack: 'si' },
  'firebase': { component: DiIcons.DiFirebase, pack: 'di' },
  'mariadb': { component: DiIcons.DiMariadb, pack: 'di' },

  // Testing & QA
  'jest': { component: SiIcons.SiJest, pack: 'si' },
  'playwright': { component: SiIcons.SiPlaywright, pack: 'si' },
  'cypress': { component: SiIcons.SiCypress, pack: 'si' },
  'selenium': { component: DiIcons.DiSelenium, pack: 'di' },
  'sonarqube': { component: SiIcons.SiSonarqube, pack: 'si' },
};

const TechIcon = ({ name, size = 44 }: { name: string; size?: number }) => {
  const iconInfo = iconMapping[name.toLowerCase()];

  const fallback = <span className="text-[0.55rem] font-bold text-muted-foreground uppercase">{name.substring(0, 3)}</span>;

  if (!iconInfo) {
    return (
      <div
        style={{ width: size, height: size }}
        className="flex-shrink-0 drop-shadow-sm rounded-lg flex items-center justify-center bg-background-alt border border-white/5"
        aria-label={name}
        title={name}
      >
        {fallback}
      </div>
    );
  }

  const IconComponent = iconInfo.component;

  return (
    <div
      style={{ width: size, height: size }}
      className="flex-shrink-0 drop-shadow-sm rounded-lg flex items-center justify-center bg-background-alt border border-white/5"
      aria-label={name}
      title={name}
    >
      <IconContext.Provider value={{ size: `${size * 0.6}px`, style: { opacity: 0.9, color: 'currentColor' } }}>
        <IconComponent />
      </IconContext.Provider>
    </div>
  );
};

export default TechIcon;
