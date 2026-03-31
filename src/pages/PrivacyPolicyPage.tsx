import SEO from "@/components/SEO";
import SectionHeader from "@/components/SectionHeader";

const sections = [
  {
    title: "Information We Collect",
    body: "We collect business contact details, project requirements, company details, and communication history when you contact us, request a free trial, or engage our services.",
  },
  {
    title: "How We Use Data",
    body: "We use submitted information to respond to enquiries, scope work, provide project updates, deliver support, and maintain lawful records required for security and compliance.",
  },
  {
    title: "Regional Compliance",
    body: "ARD TechLabs supports GDPR, CAN-SPAM Act, CASL, and aligned regional privacy principles. We process data with clear business purpose, limited retention, and appropriate safeguards.",
  },
  {
    title: "Security Controls",
    body: "Lead and client data is handled with role-based access, secure development practices, monitoring, and administrative safeguards aligned with ISO 27001 and SOC 2 Type II operating standards.",
  },
  {
    title: "Your Rights",
    body: "Depending on your region, you may request access, correction, deletion, portability, or restriction of your personal data. You may also withdraw consent for optional communications.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background pt-20 sm:pt-24 pb-16 sm:pb-20">
      <SEO
        title="Privacy Policy"
        description="Privacy Policy for ARD TechLabs covering data handling, security controls, regional compliance, and user rights across the USA, UK, Europe, and Australia."
        canonical="/privacy-policy"
      />
      <div className="container max-w-4xl">
        <SectionHeader
          eyebrow="Legal"
          title="Privacy"
          accent="Policy"
          description="How ARD TechLabs collects, processes, stores, and protects enquiry, client, and service-delivery data."
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
}
