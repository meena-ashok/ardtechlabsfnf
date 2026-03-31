package com.ardtechlabs.backend.config;

import com.ardtechlabs.backend.entity.*;
import com.ardtechlabs.backend.repository.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DataSeeder implements CommandLineRunner {

    private final AdminUserRepository adminRepo;
    private final PasswordEncoder encoder;
    private final ServiceRepository serviceRepo;
    private final ProjectRepository projectRepo;
    private final CaseStudyRepository caseStudyRepo;
    private final TestimonialRepository testimonialRepo;
    private final FaqRepository faqRepo;
    private final TeamMemberRepository teamRepo;
    private final TechStackRepository techStackRepo;
    private final HireTalentRepository hireTalentRepo;
    private final SiteSettingRepository settingRepo;

    @Value("${app.admin.email}")
    private String adminEmail;

    @Value("${app.admin.password}")
    private String adminPassword;

    public DataSeeder(AdminUserRepository adminRepo, PasswordEncoder encoder,
                      ServiceRepository serviceRepo, ProjectRepository projectRepo,
                      CaseStudyRepository caseStudyRepo, TestimonialRepository testimonialRepo,
                      FaqRepository faqRepo, TeamMemberRepository teamRepo,
                      TechStackRepository techStackRepo, HireTalentRepository hireTalentRepo,
                      SiteSettingRepository settingRepo) {
        this.adminRepo = adminRepo;
        this.encoder = encoder;
        this.serviceRepo = serviceRepo;
        this.projectRepo = projectRepo;
        this.caseStudyRepo = caseStudyRepo;
        this.testimonialRepo = testimonialRepo;
        this.faqRepo = faqRepo;
        this.teamRepo = teamRepo;
        this.techStackRepo = techStackRepo;
        this.hireTalentRepo = hireTalentRepo;
        this.settingRepo = settingRepo;
    }

    @Override
    public void run(String... args) {
        seedAdmin();
        seedServices();
        seedProjects();
        seedCaseStudies();
        seedTestimonials();
        seedFaqs();
        seedTeam();
        seedTechStack();
        seedHireTalents();
        seedSettings();
    }

    private void seedAdmin() {
        if (!adminRepo.existsByEmail(adminEmail)) {
            adminRepo.save(AdminUser.builder()
                    .email(adminEmail)
                    .password(encoder.encode(adminPassword))
                    .name("Admin")
                    .role("ADMIN")
                    .build());
        }
    }

    private void seedServices() {
        if (serviceRepo.count() > 0) return;
        serviceRepo.save(Service.builder().title("Full-Stack Web Development").description("End-to-end web applications built with modern frameworks -- scalable, secure, and performance-optimized.").icon("Code").variant("orange").chips("React,Next.js,Node.js,Django,PostgreSQL").sortOrder(1).active(true).build());
        serviceRepo.save(Service.builder().title("Mobile App Development").description("Native and cross-platform iOS & Android applications with exceptional UX and seamless performance.").icon("Smartphone").variant("navy").chips("Flutter,React Native,Swift,Kotlin").sortOrder(2).active(true).build());
        serviceRepo.save(Service.builder().title("AI & Machine Learning").description("NLP, computer vision, predictive analytics, and LLM integrations that automate and enhance your business.").icon("Brain").variant("orange").chips("OpenAI,LangChain,TensorFlow,PyTorch").sortOrder(3).active(true).build());
        serviceRepo.save(Service.builder().title("Cloud Solutions").description("Cloud architecture design, migration, and optimization across AWS, Azure, and GCP.").icon("Cloud").variant("navy").chips("AWS,Azure,GCP,Terraform,CDK").sortOrder(4).active(true).build());
        serviceRepo.save(Service.builder().title("DevOps & CI/CD").description("Streamlined pipelines, infrastructure as code, container orchestration, and automated testing.").icon("RefreshCw").variant("orange").chips("Docker,Kubernetes,GitHub Actions,Jenkins").sortOrder(5).active(true).build());
        serviceRepo.save(Service.builder().title("IT Consulting & Strategy").description("Technology roadmap planning, digital transformation strategy, architecture reviews, and CTO advisory.").icon("Users").variant("navy").chips("Architecture,Transformation,Roadmapping").sortOrder(6).active(true).build());
        serviceRepo.save(Service.builder().title("Data Engineering & Analytics").description("End-to-end data pipelines, warehousing, BI dashboards, and real-time analytics for actionable insights.").icon("Database").variant("orange").chips("Spark,Snowflake,Airflow,dbt,Tableau").sortOrder(7).active(true).build());
        serviceRepo.save(Service.builder().title("UI/UX Design").description("User-centred design, prototypes, design systems, and usability research creating delightful experiences.").icon("Palette").variant("navy").chips("Figma,Design Systems,Prototyping,Research").sortOrder(8).active(true).build());
    }

    private void seedProjects() {
        if (projectRepo.count() > 0) return;
        projectRepo.save(Project.builder().title("RetailPro Dashboard").description("Multi-tenant SaaS analytics for US retail chains with real-time inventory.").category("web").chips("React,Node.js,MongoDB").sortOrder(1).active(true).build());
        projectRepo.save(Project.builder().title("MedTrack App").description("Medication tracking & reminder app with caregiver portal for UK NHS.").category("mobile").chips("Flutter,Firebase,AWS").sortOrder(2).active(true).build());
        projectRepo.save(Project.builder().title("DocuAI Extractor").description("Intelligent document processing using OCR, NLP, and LLMs for legal firms.").category("ai").chips("Python,OpenAI,LangChain").sortOrder(3).active(true).build());
        projectRepo.save(Project.builder().title("DataVault Migration").description("Zero-downtime migration of 50TB enterprise database to AWS.").category("cloud").chips("AWS,Terraform,PostgreSQL").sortOrder(4).active(true).build());
        projectRepo.save(Project.builder().title("RideNow Driver App").description("Real-time ride-hailing with navigation and earnings analytics.").category("mobile").chips("React Native,Node.js,Socket.io").sortOrder(5).active(true).build());
        projectRepo.save(Project.builder().title("TradePulse Platform").description("Algorithmic trading dashboard with live charts & backtesting engine.").category("web").chips("Next.js,Python,Redis").sortOrder(6).active(true).build());
        projectRepo.save(Project.builder().title("EduBot Tutor").description("Adaptive AI tutoring with personalised learning paths for European schools.").category("ai").chips("GPT-4,FastAPI,Vue.js").sortOrder(7).active(true).build());
        projectRepo.save(Project.builder().title("FactoryIoT Hub").description("Industrial IoT on Azure for real-time machine monitoring in Germany.").category("cloud").chips("Azure IoT,Kubernetes,Grafana").sortOrder(8).active(true).build());
        projectRepo.save(Project.builder().title("SoundWave Studio").description("Collaborative music production platform with real-time multi-user sessions.").category("web").chips("React,WebRTC,AWS").sortOrder(9).active(true).build());
    }

    private void seedCaseStudies() {
        if (caseStudyRepo.count() > 0) return;
        caseStudyRepo.save(CaseStudy.builder().title("AI-Powered Fraud Detection Platform").description("Real-time fraud detection for a leading US digital bank -- 2M+ transactions daily at sub-100ms latency using ML and stream processing.").sector("FinTech -- USA").gradient("from-primary/15 to-navy/20").emoji("credit-card").metrics("[{\"val\":\"99.2%\",\"label\":\"Detection Accuracy\"},{\"val\":\"78%\",\"label\":\"Fraud Reduction\"},{\"val\":\"85ms\",\"label\":\"Response Time\"}]").sortOrder(1).active(true).build());
        caseStudyRepo.save(CaseStudy.builder().title("Telemedicine & Patient Management Platform").description("HIPAA-compliant telemedicine platform with video consultations, AI diagnostics, EHR integration for 200+ UK clinics.").sector("HealthTech -- UK").gradient("from-navy/20 to-primary/12").emoji("heart").metrics("[{\"val\":\"200+\",\"label\":\"Clinics\"},{\"val\":\"50K+\",\"label\":\"Daily Users\"},{\"val\":\"4.9 stars\",\"label\":\"App Rating\"}]").sortOrder(2).active(true).build());
        caseStudyRepo.save(CaseStudy.builder().title("Headless Commerce & Personalisation Engine").description("Migrated European monolithic e-commerce platform to headless microservices with AI-driven recommendations.").sector("eCommerce -- Europe").gradient("from-primary/12 to-navy/16").emoji("shopping-cart").metrics("[{\"val\":\"42%\",\"label\":\"Conversion Uplift\"},{\"val\":\"3x\",\"label\":\"Load Speed\"},{\"val\":\"$2.4M\",\"label\":\"Added Revenue\"}]").sortOrder(3).active(true).build());
        caseStudyRepo.save(CaseStudy.builder().title("Smart Fleet Management & Route Optimisation").description("IoT-integrated fleet management with real-time GPS, AI route optimisation, and predictive maintenance for 5,000+ vehicles.").sector("Logistics -- Germany").gradient("from-navy/16 to-primary/10").emoji("truck").metrics("[{\"val\":\"28%\",\"label\":\"Fuel Savings\"},{\"val\":\"5K+\",\"label\":\"Vehicles\"},{\"val\":\"40%\",\"label\":\"Faster Delivery\"}]").sortOrder(4).active(true).build());
    }

    private void seedTestimonials() {
        if (testimonialRepo.count() > 0) return;
        testimonialRepo.save(Testimonial.builder().text("ARD TechLabs transformed our entire digital infrastructure. Their team delivered a complex microservices architecture on time and under budget.").name("Sarah Mitchell").role("CTO, FinFlow Inc. -- USA").featured(false).sortOrder(1).active(true).build());
        testimonialRepo.save(Testimonial.builder().text("The AI recommendation engine increased our conversion rate by 42%. The team understands both tech and business. Simply outstanding work.").name("Rahul Sharma").role("CEO, RetailGenius -- UK").featured(true).sortOrder(2).active(true).build());
        testimonialRepo.save(Testimonial.builder().text("Their DevOps setup reduced deployment time from 3 hours to 8 minutes. The cloud migration was flawless. ARD TechLabs is our go-to partner.").name("Emma Lawson").role("VP Engineering, LogiChain -- Germany").featured(false).sortOrder(3).active(true).build());
    }

    private void seedFaqs() {
        if (faqRepo.count() > 0) return;
        faqRepo.save(Faq.builder().question("What types of businesses do you work with?").answer("We work with a diverse range of clients -- from early-stage startups building their first product, to mid-market companies scaling platforms, to Fortune 500 enterprises undergoing digital transformation. We serve clients across the USA, UK, and mainland Europe.").sortOrder(1).active(true).build());
        faqRepo.save(Faq.builder().question("How long does a typical software project take?").answer("A simple web app typically takes 6-10 weeks; a complex enterprise platform 6-12 months. We start with a discovery phase for accurate estimates, then work in 2-week agile sprints for continuous delivery and stakeholder visibility.").sortOrder(2).active(true).build());
        faqRepo.save(Faq.builder().question("What is your pricing model?").answer("We offer Fixed-Price (well-defined projects), Time & Material (evolving requirements), and Dedicated Team (ongoing product development). All proposals are transparent with no hidden fees.").sortOrder(3).active(true).build());
        faqRepo.save(Faq.builder().question("Do you provide post-launch support and maintenance?").answer("Absolutely. Post-launch packages range from basic bug-fix plans to full managed services including 24/7 monitoring, performance optimisation, security patching, and feature development.").sortOrder(4).active(true).build());
        faqRepo.save(Faq.builder().question("How do you handle data security and GDPR compliance?").answer("Security is non-negotiable. We sign NDAs before discussions, follow GDPR (EU/UK), CCPA (California), HIPAA, and SOC 2 frameworks. All IP created belongs entirely to you.").sortOrder(5).active(true).build());
        faqRepo.save(Faq.builder().question("How do you ensure project quality?").answer("Quality is embedded at every stage. We practise TDD, automated testing (unit, integration, E2E), peer code reviews, and dedicated QA sprints before each release.").sortOrder(6).active(true).build());
        faqRepo.save(Faq.builder().question("Can I hire a dedicated developer without a full project?").answer("Yes. Our Hire Dedicated Talent model lets you augment your team with pre-vetted senior engineers -- part-time, full-time, or project-based. They can start within 48 hours of approval.").sortOrder(7).active(true).build());
        faqRepo.save(Faq.builder().question("Which time zones do you cover for US and European clients?").answer("We cover EST, CST, PST (USA), GMT (UK), CET (Central Europe), and IST. For dedicated engagements, we match engineers to your preferred working hours.").sortOrder(8).active(true).build());
        faqRepo.save(Faq.builder().question("Do you work with early-stage startups?").answer("We love startups! We offer MVP development packages, technical co-founder advisory, and equity-based arrangements for exceptional ideas.").sortOrder(9).active(true).build());
    }

    private void seedTeam() {
        if (teamRepo.count() > 0) return;
        teamRepo.save(TeamMember.builder().name("Arjun Mehta").role("CEO & Founder").bio("15+ years in enterprise software & digital transformation strategy for global businesses.").sortOrder(1).active(true).build());
        teamRepo.save(TeamMember.builder().name("Deepika Rao").role("Chief Technology Officer").bio("Cloud architecture expert, ex-Google, AWS Certified Solutions Architect.").sortOrder(2).active(true).build());
        teamRepo.save(TeamMember.builder().name("Rohan Desai").role("Head of AI / ML").bio("PhD in Machine Learning, NLP & LLM specialist, published researcher.").sortOrder(3).active(true).build());
        teamRepo.save(TeamMember.builder().name("Priya Shah").role("Head of Design").bio("Product design leader with 12+ years crafting world-class digital experiences.").sortOrder(4).active(true).build());
    }

    private void seedTechStack() {
        if (techStackRepo.count() > 0) return;
        techStackRepo.save(TechStack.builder().label("Frontend").items("React.js / Next.js,Vue.js / Nuxt.js,Angular,TypeScript,Tailwind CSS").sortOrder(1).active(true).build());
        techStackRepo.save(TechStack.builder().label("Backend").items("Node.js / Express,Python / Django / FastAPI,Go (Golang),Java / Spring Boot,GraphQL / REST").sortOrder(2).active(true).build());
        techStackRepo.save(TechStack.builder().label("Mobile").items("Flutter,React Native,Swift (iOS),Kotlin (Android),Ionic").sortOrder(3).active(true).build());
        techStackRepo.save(TechStack.builder().label("AI / ML").items("OpenAI / GPT-4,LangChain / LlamaIndex,TensorFlow / PyTorch,Hugging Face,Pinecone / Weaviate").sortOrder(4).active(true).build());
        techStackRepo.save(TechStack.builder().label("Cloud").items("AWS (Solutions Architect),Microsoft Azure,Google Cloud Platform,Terraform / Pulumi,Serverless Framework").sortOrder(5).active(true).build());
        techStackRepo.save(TechStack.builder().label("DevOps").items("Docker / Kubernetes,GitHub Actions,Jenkins / CircleCI,ArgoCD,Prometheus / Grafana").sortOrder(6).active(true).build());
        techStackRepo.save(TechStack.builder().label("Databases").items("PostgreSQL / MySQL,MongoDB,Redis / Memcached,Elasticsearch,Snowflake / BigQuery").sortOrder(7).active(true).build());
        techStackRepo.save(TechStack.builder().label("Testing & QA").items("Jest / Playwright,Cypress,Selenium,k6 / JMeter,SonarQube").sortOrder(8).active(true).build());
    }

    private void seedHireTalents() {
        if (hireTalentRepo.count() > 0) return;
        hireTalentRepo.save(HireTalent.builder().title("Full-Stack Developer").description("React/Node.js or Python/Django experts with API design, database architecture, and cloud deployment experience.").icon("Code").chips("React,Node.js,PostgreSQL,AWS").rate("From $35/hr").sortOrder(1).active(true).build());
        hireTalentRepo.save(HireTalent.builder().title("Mobile Developer").description("Flutter and React Native specialists building cross-platform apps with native-level performance.").icon("Smartphone").chips("Flutter,React Native,Firebase,Swift").rate("From $38/hr").sortOrder(2).active(true).build());
        hireTalentRepo.save(HireTalent.builder().title("AI / ML Engineer").description("Data scientists specialising in LLMs, computer vision, NLP, and predictive modelling solutions.").icon("Brain").chips("Python,TensorFlow,OpenAI,LangChain").rate("From $45/hr").sortOrder(3).active(true).build());
        hireTalentRepo.save(HireTalent.builder().title("Cloud / DevOps Engineer").description("AWS/Azure/GCP certified architects who design, migrate, and optimise cloud-native infrastructure.").icon("Cloud").chips("AWS,Kubernetes,Terraform,Docker").rate("From $40/hr").sortOrder(4).active(true).build());
        hireTalentRepo.save(HireTalent.builder().title("UI / UX Designer").description("Product designers combining user research, interaction design, and visual craft into delightful experiences.").icon("Palette").chips("Figma,Prototyping,Design Systems").rate("From $30/hr").sortOrder(5).active(true).build());
        hireTalentRepo.save(HireTalent.builder().title("Data Engineer").description("Big data specialists building scalable pipelines, data warehouses, and BI solutions for enterprises.").icon("Database").chips("Spark,Airflow,Snowflake,dbt").rate("From $42/hr").sortOrder(6).active(true).build());
    }

    private void seedSettings() {
        if (settingRepo.count() > 0) return;
        settingRepo.save(SiteSetting.builder().settingKey("company_name").settingValue("ARD TechLabs").description("Company name").build());
        settingRepo.save(SiteSetting.builder().settingKey("company_email").settingValue("hello@ardtechlabs.com").description("Company email").build());
        settingRepo.save(SiteSetting.builder().settingKey("company_phone").settingValue("+1 (555) 123-4567").description("Company phone").build());
        settingRepo.save(SiteSetting.builder().settingKey("company_address").settingValue("Ahmedabad, Gujarat, India").description("Company address").build());
        settingRepo.save(SiteSetting.builder().settingKey("hero_words").settingValue("Technology,Innovation,Excellence,The Future").description("Hero section rotating words").build());
        settingRepo.save(SiteSetting.builder().settingKey("marquee_items").settingValue("React.js,Python,Flutter,AWS,OpenAI,Docker,Kubernetes,Terraform,TypeScript,Node.js,Firebase,PostgreSQL").description("Tech marquee items").build());
    }
}
