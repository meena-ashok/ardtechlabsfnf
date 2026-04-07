
import { Icon } from '@iconify/react';

const iconMap: { [key: string]: string } = {
  // Frontend
  'React': 'devicon:react',
  'React.js': 'devicon:react',
  'Next.js': 'devicon:nextjs-wordmark',
  'Vue.js': 'devicon:vuejs',
  'Nuxt': 'devicon:nuxtjs',
  'Angular': 'devicon:angular',
  'TypeScript': 'devicon:typescript',
  'JavaScript': 'devicon:javascript',
  'Tailwind CSS': 'devicon:tailwindcss',
  'AngularJS': 'devicon:angularjs',
  'ReactJS': 'devicon:react',
  'VueJS': 'devicon:vuejs',
  'Tailwind': 'devicon:tailwindcss',
  'HTML/CSS': 'devicon:html5',
  // Backend
  'Node.js': 'devicon:nodejs-wordmark',
  'Express': 'devicon:express-wordmark',
  'Python': 'logos:python',
  'Django': 'devicon:django-plain-wordmark',
  'FastAPI': 'devicon:fastapi',
  'Go': 'devicon:go-wordmark',
  'Java': 'devicon:java-wordmark',
  'Spring Boot': 'devicon:spring-wordmark',
  'GraphQL': 'devicon:graphql',
  '.NET': 'devicon:dotnetcore',
  'PHP': 'devicon:php',
  'JAVA': 'devicon:java-wordmark',
  'Laravel': 'devicon:laravel',
  '.Net Core': 'devicon:dotnetcore',
  // Mobile
  'Flutter': 'devicon:flutter',
  'React Native': 'devicon:react',
  'Swift': 'devicon:swift',
  'Kotlin': 'devicon:kotlin',
  'Ionic': 'logos:ionic',
  'iOS': 'devicon:apple',
  'Android': 'devicon:android',
  'Xamarin': 'devicon:xamarin',
  // AI / ML
  'AI / ML': 'lucide:brain-circuit',
  'OpenAI': 'simple-icons:openai',
  'OpenAI GPT': 'simple-icons:openai',
  'LangChain': 'simple-icons:langchain',
  'LlamaIndex': 'simple-icons:llamaindex',
  'TensorFlow': 'devicon:tensorflow-wordmark',
  'PyTorch': 'devicon:pytorch-wordmark',
  'Hugging Face': 'simple-icons:huggingface',
  'Pinecone': 'simple-icons:pinecone',
  'Weaviate': 'simple-icons:weaviate',
  'IBM Watson': 'simple-icons:ibmwatson',
  'Microsoft Cognitive Toolkit': 'simple-icons:microsoftcognitive',
  'H2O.ai': 'simple-icons:h2o',
  'Scikit-learn': 'simple-icons:scikitlearn',
  'Keras': 'simple-icons:keras',
  'XGBoost': 'simple-icons:xgboost',
  'LightGBM': 'simple-icons:lightgbm',
  'Apache Mahout': 'simple-icons:apachemahout',
  'MLlib (Apache Spark)': 'simple-icons:apache-spark',
  // Cloud
  'Cloud': 'lucide:cloud',
  'AWS': 'logos:aws',
  'Azure': 'devicon:azure-wordmark',
  'Google Cloud': 'devicon:googlecloud-wordmark',
  'Terraform': 'devicon:terraform-wordmark',
  'Pulumi': 'simple-icons:pulumi',
  'Firebase': 'logos:firebase',
  'SharePoint': 'simple-icons:microsoftsharepoint',
  'Microsoft Dynamics': 'simple-icons:microsoftdynamics',
  // DevOps
  'DevOps': 'lucide:refresh-cw',
  'Docker': 'devicon:docker-wordmark',
  'Kubernetes': 'devicon:kubernetes-wordmark',
  'GitHub Actions': 'devicon:githubactions',
  'Jenkins': 'devicon:jenkins',
  'CircleCI': 'devicon:circleci-wordmark',
  'ArgoCD': 'simple-icons:argo',
  'Prometheus': 'devicon:prometheus-wordmark',
  'Grafana': 'devicon:grafana-wordmark',
  // Databases
  'Databases': 'lucide:database',
  'PostgreSQL': 'devicon:postgresql-wordmark',
  'MySQL': 'devicon:mysql-wordmark',
  'MongoDB': 'devicon:mongodb-wordmark',
  'Redis': 'devicon:redis-wordmark',
  'Elasticsearch': 'devicon:elasticsearch-wordmark',
  'Snowflake': 'simple-icons:snowflake',
  'BigQuery': 'simple-icons:googlebigquery',
  'SQL Server': 'devicon:microsoftsqlserver',
  'DynamoDB': 'devicon:amazondynamodb',
  'Oracle': 'devicon:oracle',
  // Testing
  'Testing & QA': 'lucide:vial',
  'Jest': 'devicon:jest',
  'Playwright': 'devicon:playwright-wordmark',
  'Cypress': 'devicon:cypressio-wordmark',
  'Selenium': 'devicon:selenium',
  // Blockchain
  'Ethereum': 'devicon:ethereum',
  'Hyperledger Fabric': 'simple-icons:hyperledger',
  'Corda': 'simple-icons:corda',
  'Quorum': 'simple-icons:quorum',
  'Bitcoin': 'devicon:bitcoin',
  'Ripple': 'simple-icons:ripple',
  // Ecommerce
  'Magento': 'devicon:magento',
  'WordPress': 'devicon:wordpress',
  'Drupal': 'devicon:drupal',
  'Shopify': 'devicon:shopify',
  'Joomla': 'devicon:joomla',
  'Umbraco': 'simple-icons:umbraco',
  // Service & Page Icons
  'Code': 'lucide:code-2',
  'Smartphone': 'lucide:smartphone',
  'Brain': 'lucide:brain',
  'RefreshCw': 'lucide:refresh-cw',
  'Users': 'lucide:users',
  'Palette': 'lucide:palette',
  'Shield': 'lucide:shield',
  'Full-Stack Web Development': 'lucide:code-2',
  'Mobile App Development': 'lucide:smartphone',
  'AI & Machine Learning': 'lucide:brain-circuit',
  'Cloud Solutions': 'lucide:cloud',
  'DevOps & CI/CD': 'lucide:refresh-cw',
  'IT Consulting & Strategy': 'lucide:users',
  'Data Engineering & Analytics': 'lucide:database',
  'UI/UX Design': 'lucide:palette',
  'Frontend': 'lucide:layout-template',
  'Backend': 'lucide:server-cog',
  'Mobile': 'lucide:smartphone',
  'Zap': 'lucide:zap',
  'CheckCircle': 'lucide:check-circle',
  'Lock': 'lucide:lock',
  'ArrowRight': 'lucide:arrow-right',

  // Default
  'Default': 'lucide:code',
};

interface TechIconProps {
  icon: string;
  className?: string;
  [key: string]: any; 
}

export const TechIcon = ({ icon, className, ...props }: TechIconProps) => {
  const iconName = iconMap[icon] || iconMap['Default'];
  const isLucide = iconName.startsWith('lucide:');

  return (
    <Icon
      icon={iconName}
      className={className}
      style={{ 
        fontSize: isLucide ? '1em' : undefined, 
        transform: isLucide ? 'scale(1.5)' : 'scale(1.4)',
        ...props.style
      }}
      {...props}
    />
  );
};
