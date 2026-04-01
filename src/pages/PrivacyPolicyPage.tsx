import SEO from "@/components/SEO";
import SectionHeader from "@/components/SectionHeader";

const sections = [
  {
    title: "1. Information We Collect",
    body: "We collect business contact details (name, email, phone), project requirements, company details, LinkedIn profiles, and communication history when you contact us, request a free trial, or engage our services. We only collect data necessary to provide high-quality IT consulting and development services.",
  },
  {
    title: "2. Lawful Basis for Processing (GDPR)",
    body: "Under European GDPR (General Data Protection Regulation), we process your data based on 'Contractual Necessity' (to fulfill service requests) or 'Legitimate Interests' (to provide technical consulting). All data processing is documented and transparent, with strict retention limits in place across our UK and European operations.",
  },
  {
    title: "3. Email Marketing Compliance (CAN-SPAM & CASL)",
    body: "We strictly adhere to the CAN-SPAM Act (USA) and CASL (Canada). This means we always provide a clear way to unsubscribe, include our physical mailing address in all electronic communications, and never use deceptive subject lines or headers. We ensure explicit opt-in for our Australian and global prospects before sending marketing materials.",
  },
  {
    title: "4. Security Standards (ISO 27001 & SOC 2)",
    body: "Regional data is handled with the highest security standards. We align our internal operations with ISO 27001 (Information Security Management) and SOC 2 Type II (Trust Services Criteria) standards. This includes encrypted data at rest and in transit, multi-factor authentication for all engineers, and regular internal security audits.",
  },
  {
    title: "5. International Data Transfers",
    body: "Data collected from US, UK, Europe, or Australia may be processed in secure facilities globally. We use Standard Contractual Clauses (SCCs) to ensure your data remains protected under the same high standards regardless of where it is processed.",
  },
  {
    title: "6. Your Global Rights",
    body: "Regardless of where you are located, we grant you the right to access, rectify, or delete your personal data. You may contact our Data Protection Officer at privacy@ardtechlabs.com for any requests related to your data portability or right to be forgotten.",
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
