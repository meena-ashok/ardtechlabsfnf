import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useApiData } from "@/hooks/useApiData";
import { publicApi } from "@/services/api";
import SectionHeader from "@/components/SectionHeader";
import SEO from "@/components/SEO";
import { TechIcon } from "@/components/TechIcon";

const TechnologyPage = ({ analyticsConfig }) => {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className="pt-20 sm:pt-24 pb-16 sm:pb-20 bg-background">
      <SEO
        title="Technology Stack -- Modern Tools & Frameworks for Enterprise Solutions"
        description="Explore ARD TechLabs' battle-tested technology stack: React, Python, AWS, Docker, Kubernetes, OpenAI, and 50+ tools for building scalable enterprise-grade software."
        canonical="/technology"
        analyticsConfig={analyticsConfig}
      />

      <div className="container">
        <SectionHeader
          eyebrow="Our Expertise"
          title="Technology"
          accent="Stack"
          description="We specialize in working with a wide range of advanced technologies to deliver innovative and dynamic solutions."
          centered
        />

        {/* Artificial Intelligence */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-5 sm:mb-6">
            <div className="h-1 w-12 rounded-full" style={{ background: "var(--gradient-rule)" }} />
            <h3 className="text-base sm:text-lg font-bold text-foreground">Artificial Intelligence</h3>
             <p className="text-base leading-relaxed text-muted-foreground">
                Our team is highly skilled in a broad range of AI technologies, enabling us to develop intelligent solutions tailored to your requirements. Whether it's machine learning, natural language processing, or computer vision, we possess the expertise to create cutting-edge and efficient AI-driven applications.
              </p>
          </div>

          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4">
            {["TensorFlow", "PyTorch", "OpenAI GPT", "IBM Watson", "Microsoft Cognitive Toolkit", "H2O.ai"].map((tool, i) => (
              <div
                key={tool}
                className="reveal-up group glass-card py-4 sm:py-5 px-3 sm:px-4 text-center hover:border-primary/40 hover:bg-primary/[0.08] transition-all duration-300 hover:scale-105 hover:-translate-y-1.5 cursor-default"
                style={{ transitionDelay: `${(i % 6) * 0.08}s` }}
              >
                <div className="mb-2.5 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  <TechIcon icon={tool} />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                  {tool}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Machine Learning */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-5 sm:mb-6">
            <div className="h-1 w-12 rounded-full" style={{ background: "var(--gradient-rule)" }} />
            <h3 className="text-base sm:text-lg font-bold text-foreground">Machine Learning</h3>
             <p className="text-base leading-relaxed text-muted-foreground">
                Our team excels in various machine learning technologies, allowing us to design intelligent systems that meet your specific needs. From predictive analytics to natural language processing, we possess the expertise to develop cutting-edge and data-driven solutions.
              </p>
          </div>

          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4">
            {["Scikit-learn", "Keras", "XGBoost", "LightGBM", "Apache Mahout", "MLlib (Apache Spark)"].map((tool, i) => (
              <div
                key={tool}
                className="reveal-up group glass-card py-4 sm:py-5 px-3 sm:px-4 text-center hover:border-primary/40 hover:bg-primary/[0.08] transition-all duration-300 hover:scale-105 hover:-translate-y-1.5 cursor-default"
                style={{ transitionDelay: `${(i % 6) * 0.08}s` }}
              >
                <div className="mb-2.5 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  <TechIcon icon={tool} />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                  {tool}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Block Chain */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-5 sm:mb-6">
            <div className="h-1 w-12 rounded-full" style={{ background: "var(--gradient-rule)" }} />
            <h3 className="text-base sm:text-lg font-bold text-foreground">Block Chain</h3>
             <p className="text-base leading-relaxed text-muted-foreground">
                With expertise in diverse blockchain technologies, we excel at developing robust solutions tailored to your requirements. From smart contracts to decentralized applications, we possess the skills to create secure and efficient blockchain-based systems. Whether it's for financial services, supply chain management, or any other industry, we deliver innovative and reliable blockchain applications that meet your needs.
              </p>
          </div>

          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4">
            {["Ethereum", "Hyperledger Fabric", "Corda", "Quorum", "Bitcoin", "Ripple"].map((tool, i) => (
              <div
                key={tool}
                className="reveal-up group glass-card py-4 sm:py-5 px-3 sm:px-4 text-center hover:border-primary/40 hover:bg-primary/[0.08] transition-all duration-300 hover:scale-105 hover:-translate-y-1.5 cursor-default"
                style={{ transitionDelay: `${(i % 6) * 0.08}s` }}
              >
                <div className="mb-2.5 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  <TechIcon icon={tool} />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                  {tool}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-5 sm:mb-6">
            <div className="h-1 w-12 rounded-full" style={{ background: "var(--gradient-rule)" }} />
            <h3 className="text-base sm:text-lg font-bold text-foreground">Mobile</h3>
             <p className="text-base leading-relaxed text-muted-foreground">
                Our team is well-versed in a variety of mobile technologies, making us adept at building apps that cater to your needs. Whether it's Android or iOS development, we've got the skills to create innovative and user-friendly applications.
              </p>
          </div>

          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4">
            {["iOS", "Android", "React Native", "Flutter", "Xamarin", "Ionic"].map((tool, i) => (
              <div
                key={tool}
                className="reveal-up group glass-card py-4 sm:py-5 px-3 sm:px-4 text-center hover:border-primary/40 hover:bg-primary/[0.08] transition-all duration-300 hover:scale-105 hover:-translate-y-1.5 cursor-default"
                style={{ transitionDelay: `${(i % 6) * 0.08}s` }}
              >
                <div className="mb-2.5 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  <TechIcon icon={tool} />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                  {tool}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Frontend */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-5 sm:mb-6">
            <div className="h-1 w-12 rounded-full" style={{ background: "var(--gradient-rule)" }} />
            <h3 className="text-base sm:text-lg font-bold text-foreground">Frontend</h3>
             <p className="text-base leading-relaxed text-muted-foreground">
                Get our team of skilled frontend developers to make your ideas real. We can create great websites, web apps, or mobile apps just for you. We work closely with you to make sure everything looks perfect and works smoothly.
              </p>
          </div>

          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4">
            {["AngularJS", "ReactJS", "VueJS", "JavaScript", "Tailwind", "HTML/CSS"].map((tool, i) => (
              <div
                key={tool}
                className="reveal-up group glass-card py-4 sm:py-5 px-3 sm:px-4 text-center hover:border-primary/40 hover:bg-primary/[0.08] transition-all duration-300 hover:scale-105 hover:-translate-y-1.5 cursor-default"
                style={{ transitionDelay: `${(i % 6) * 0.08}s` }}
              >
                <div className="mb-2.5 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  <TechIcon icon={tool} />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                  {tool}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-5 sm:mb-6">
            <div className="h-1 w-12 rounded-full" style={{ background: "var(--gradient-rule)" }} />
            <h3 className="text-base sm:text-lg font-bold text-foreground">Backend</h3>
             <p className="text-base leading-relaxed text-muted-foreground">
                Expand your team with our Backend Developers for contract or full-time roles, tailored to your needs. Our experts bring specialized skills and dedication to simplify your development process and achieve your goals.
              </p>
          </div>

          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4">
            {[".NET", "PHP", "JAVA", "Node.js", "Python", "Laravel"].map((tool, i) => (
              <div
                key={tool}
                className="reveal-up group glass-card py-4 sm:py-5 px-3 sm:px-4 text-center hover:border-primary/40 hover:bg-primary/[0.08] transition-all duration-300 hover:scale-105 hover:-translate-y-1.5 cursor-default"
                style={{ transitionDelay: `${(i % 6) * 0.08}s` }}
              >
                <div className="mb-2.5 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  <TechIcon icon={tool} />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                  {tool}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Database */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-5 sm:mb-6">
            <div className="h-1 w-12 rounded-full" style={{ background: "var(--gradient-rule)" }} />
            <h3 className="text-base sm:text-lg font-bold text-foreground">Database</h3>
             <p className="text-base leading-relaxed text-muted-foreground">
                Safeguard your business data with our Database Management Services. We handle data governance, warehousing, integration, migration, and security. Trust us to manage your data while you focus on business growth.
              </p>
          </div>

          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4">
            {["SQL Server", "MySQL", "MongoDB", "DynamoDB", "Oracle", "Firebase"].map((tool, i) => (
              <div
                key={tool}
                className="reveal-up group glass-card py-4 sm:py-5 px-3 sm:px-4 text-center hover:border-primary/40 hover:bg-primary/[0.08] transition-all duration-300 hover:scale-105 hover:-translate-y-1.5 cursor-default"
                style={{ transitionDelay: `${(i % 6) * 0.08}s` }}
              >
                <div className="mb-2.5 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  <TechIcon icon={tool} />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                  {tool}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Ecommerce */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-5 sm:mb-6">
            <div className="h-1 w-12 rounded-full" style={{ background: "var(--gradient-rule)" }} />
            <h3 className="text-base sm:text-lg font-bold text-foreground">Ecommerce</h3>
             <p className="text-base leading-relaxed text-muted-foreground">
                We use powerful systems like WordPress, Joomla, and others for easy content management. With our CMS development, you get scalable solutions and creative design freedom. Choose NinjaTech for your CMS needs.
              </p>
          </div>

          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4">
            {["Magento", "WordPress", "Drupal", "Shopify", "Joomla", "Umbraco"].map((tool, i) => (
              <div
                key={tool}
                className="reveal-up group glass-card py-4 sm:py-5 px-3 sm:px-4 text-center hover:border-primary/40 hover:bg-primary/[0.08] transition-all duration-300 hover:scale-105 hover:-translate-y-1.5 cursor-default"
                style={{ transitionDelay: `${(i % 6) * 0.08}s` }}
              >
                <div className="mb-2.5 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  <TechIcon icon={tool} />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                  {tool}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Others */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-5 sm:mb-6">
            <div className="h-1 w-12 rounded-full" style={{ background: "var(--gradient-rule)" }} />
            <h3 className="text-base sm:text-lg font-bold text-foreground">Others</h3>
             <p className="text-base leading-relaxed text-muted-foreground">
                Contact us for expert services on cloud computing or collaboration tools? We'll assist with AWS, Google Cloud, SharePoint, and more, whether it's migration, optimization, or exploring collaboration.
              </p>
          </div>

          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4">
            {["AWS", "Google Cloud", "SharePoint", "Microsoft Dynamics", "Azure", ".Net Core"].map((tool, i) => (
              <div
                key={tool}
                className="reveal-up group glass-card py-4 sm:py-5 px-3 sm:px-4 text-center hover:border-primary/40 hover:bg-primary/[0.08] transition-all duration-300 hover:scale-105 hover:-translate-y-1.5 cursor-default"
                style={{ transitionDelay: `${(i % 6) * 0.08}s` }}
              >
                <div className="mb-2.5 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  <TechIcon icon={tool} />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                  {tool}
                </p>
              </div>
            ))}
          </div>
        </div>


      </div>
    </div>
  );
};

export default TechnologyPage;
