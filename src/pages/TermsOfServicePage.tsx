import SEO from "@/components/SEO";
import SectionHeader from "@/components/SectionHeader";

const sections = [
  {
    title: "1. Service Scope & Delivery",
    body: "Project scope, deliverables, timelines, and engagement terms are strictly defined in written proposals, statements of work (SOW), or subscription agreements. We operate on 2-week agile sprint cycles to ensure maximum transparency and quality control.",
  },
  {
    title: "2. Free Trial & Consultation",
    body: "Free trial requests are subject to capacity and fit assessment. The trial is intended to demonstrate our engineering capabilities and does not constitute a full project commitment until a formal SOW is signed.",
  },
  {
    title: "3. Regional Compliance & Anti-Spam",
    body: "Both ARD TechLabs and its clients must comply with the CAN-SPAM Act (USA), CASL (Canada), and relevant anti-spam laws in the UK and Australia. We reserve the right to terminate services if they are used for deceptive marketing or unlawful data collection.",
  },
  {
    title: "4. Data Protection (GDPR & Local Laws)",
    body: "We are fully compliant with GDPR (Europe) and local data protection laws. All client data, source code, and project assets are handled with the highest security standards, aligning with ISO 27001 and SOC 2 Type II frameworks.",
  },
  {
    title: "5. Intellectual Property Rights",
    body: "Upon full payment, all custom-developed source code, designs, and project deliverables transfer to the client. ARD TechLabs retains rights to its pre-existing proprietary tools, libraries, and frameworks used in delivery.",
  },
  {
    title: "6. Liability & Jurisdiction",
    body: "Our services are provided with professional diligence. Any legal disputes arising from engagements in the USA, UK, Europe, or Australia will be governed by the jurisdiction specified in the primary service agreement.",
  },
  {
    title: "7. Payment conditions",
    body: "If you received any payment related email from other domain , this is our main domain - ardtechlabs.com",
  },
];

const analyticsConfig = {
  ga4Id: "G-XXXXXXXXXX", // Replace with your GA4 ID
  clarityId: "XXXXXXXXXX", // Replace with your Clarity ID
};

const TermsOfServicePage = () => {
  return (
    <div className="bg-background pt-20 sm:pt-24 pb-16 sm:pb-20">
      <SEO
        title="Terms of Service"
        description="Terms of Service for ARD TechLabs covering service scope, trial engagements, client responsibilities, IP, and compliance requirements."
        canonical="/terms-of-service"
        analyticsConfig={analyticsConfig}
      />
      <div className="container max-w-4xl">
        <SectionHeader
          eyebrow="Legal"
          title="Terms of"
          accent="Service"
          description="Core operating terms for enquiries, free-trial requests, consulting, development services, and long-term delivery engagements."
        />
        <div className="space-y-5">
          {sections.map((section) => (
            <article key={section.title} className="glass-card p-5 sm:p-6">
              <h2 className="text-lg font-bold text-foreground">{section.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{section.body}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
