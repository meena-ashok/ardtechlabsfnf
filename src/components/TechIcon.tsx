
import { Icon } from '@iconify/react';

const iconMap: { [key: string]: string } = {
  // Frontend
  'React': 'devicon:react-original',
  'React.js': 'devicon:react-original',
  'Next.js': 'devicon:nextjs-original-wordmark',
  'Vue.js': 'devicon:vuejs-original',
  'Nuxt': 'devicon:nuxtjs-original',
  'Angular': 'devicon:angular-original',
  'TypeScript': 'devicon:typescript-original',
  'JavaScript': 'devicon:javascript-original',
  'Tailwind CSS': 'devicon:tailwindcss-original',
  'AngularJS': 'devicon:angularjs-original',
  'ReactJS': 'devicon:react-original',
  'VueJS': 'devicon:vuejs-original',
  'Tailwind': 'devicon:tailwindcss-original',
  'HTML/CSS': 'devicon:html5-original',
  // Backend
  'Node.js': 'devicon:nodejs-original-wordmark',
  'Express': 'devicon:express-original-wordmark',
  'Python': 'logos:python',
  'Django': 'devicon:django-plain-wordmark',
  'FastAPI': 'devicon:fastapi-original',
  'Go': 'devicon:go-original-wordmark',
  'Java': 'devicon:java-original-wordmark',
  'Spring Boot': 'devicon:spring-original-wordmark',
  'GraphQL': 'devicon:graphql-plain',
  '.NET': 'devicon:dot-net-original-wordmark',
  'PHP': 'devicon:php-original',
  'JAVA': 'devicon:java-original-wordmark',
  'Laravel': 'devicon:laravel-plain-wordmark',
  '.Net Core': 'devicon:dotnetcore-original',
  // Mobile
  'Flutter': 'devicon:flutter-original',
  'React Native': 'devicon:react-original',
  'Swift': 'devicon:swift-original',
  'Kotlin': 'devicon:kotlin-original',
  'Ionic': 'logos:ionic-icon',
  'iOS': 'devicon:apple-original',
  'Android': 'devicon:android-original',
  'Xamarin': 'devicon:xamarin-original',
  // AI / ML
  'AI / ML': 'lucide:brain-circuit',
  'OpenAI': 'logos:openai-icon',
  'OpenAI GPT': 'logos:openai-icon',
  'LangChain': 'simple-icons:langchain',
  'LlamaIndex': 'simple-icons:llamaindex',
  'TensorFlow': 'devicon:tensorflow-original-wordmark',
  'PyTorch': 'devicon:pytorch-original',
  'Hugging Face': 'logos:hugging-face-icon',
  'Pinecone': 'logos:pinecone-icon',
  'Weaviate': 'logos:weaviate-icon',
  'IBM Watson': 'devicon:ibm-watson',
  'Microsoft Cognitive Toolkit': 'simple-icons:microsoftcognitive',
  'H2O.ai': 'simple-icons:h2o',
  'Scikit-learn': 'devicon:scikit-learn-original',
  'Keras': 'devicon:keras-original',
  'XGBoost': 'simple-icons:xgboost',
  'LightGBM': 'simple-icons:lightgbm',
  'Apache Mahout': 'simple-icons:apachemahout',
  'MLlib (Apache Spark)': 'devicon:apache-spark-original',
  // Cloud
  'Cloud': 'lucide:cloud',
  'AWS': 'logos:aws',
  'Azure': 'devicon:azure-original-wordmark',
  'Google Cloud': 'devicon:google-cloud-original-wordmark',
  'Terraform': 'devicon:terraform-original-wordmark',
  'Pulumi': 'logos:pulumi-icon',
  'Firebase': 'logos:firebase',
  'SharePoint': 'logos:microsoft-sharepoint',
  'Microsoft Dynamics': 'logos:microsoft-dynamics-365',
  // DevOps
  'DevOps': 'lucide:refresh-cw',
  'Docker': 'devicon:docker-original-wordmark',
  'Kubernetes': 'devicon:kubernetes-original-wordmark',
  'GitHub Actions': 'devicon:github-actions-original',
  'Jenkins': 'devicon:jenkins-original',
  'CircleCI': 'devicon:circleci-plain-wordmark',
  'ArgoCD': 'logos:argo-icon',
  'Prometheus': 'devicon:prometheus-original-wordmark',
  'Grafana': 'devicon:grafana-original-wordmark',
  // Databases
  'Databases': 'lucide:database',
  'PostgreSQL': 'devicon:postgresql-original-wordmark',
  'MySQL': 'devicon:mysql-original-wordmark',
  'MongoDB': 'devicon:mongodb-original-wordmark',
  'Redis': 'devicon:redis-original-wordmark',
  'Elasticsearch': 'devicon:elasticsearch-original',
  'Snowflake': 'devicon:snowflake-original-wordmark',
  'BigQuery': 'logos:google-cloud-bigquery',
  'SQL Server': 'devicon:microsoft-sql-server-original-wordmark',
  'DynamoDB': 'logos:aws-dynamodb',
  'Oracle': 'devicon:oracle-original',
  // Testing
  'Testing & QA': 'lucide:vial',
  'Jest': 'devicon:jest-plain',
  'Playwright': 'devicon:playwright-original',
  'Cypress': 'devicon:cypressio-original-wordmark',
  'Selenium': 'devicon:selenium-original',
  // Blockchain
  'Ethereum': 'devicon:ethereum-original',
  'Hyperledger Fabric': 'logos:hyperledger-icon',
  'Corda': 'logos:corda',
  'Quorum': 'simple-icons:quorum',
  'Bitcoin': 'devicon:bitcoin-original',
  'Ripple': 'logos:ripple',
  // Ecommerce
  'Magento': 'devicon:magento-original-wordmark',
  'WordPress': 'devicon:wordpress-original',
  'Drupal': 'devicon:drupal-original',
  'Shopify': 'devicon:shopify-original',
  'Joomla': 'devicon:joomla-original',
  'Umbraco': 'logos:umbraco',
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
      // Switch to font-size for sizing to avoid blurry scaling
      // Lucide icons are textual, so they scale with `em`
      // Tech logos get a default explicit size, which can be overridden by Tailwind classes
      style={{ 
        fontSize: isLucide ? '1.5em' : '2.5rem', 
        ...props.style
      }}
      {...props}
    />
  );
};
