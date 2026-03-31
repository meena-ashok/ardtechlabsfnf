import SEO from "@/components/SEO";

const sections = [
  "GDPR and lawful basis for processing (consent, contract, legitimate interests).",
  "CCPA rights including access, deletion, correction, and opt-out for California residents.",
  "CASL anti-spam compliance for Canadian recipients.",
  "Australian Privacy Act principles for fair and transparent handling of personal information.",
  "Data retention policy and secure disposal timelines.",
  "International data transfers with contractual safeguards and vendor due diligence.",
  "Data subject rights: access, portability, objection, restriction, and withdrawal of consent.",
];

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24 pb-16 bg-background-alt">
      <SEO
        title="Privacy Policy | GDPR, CCPA, CASL & Australian Privacy Act"
        description="Read ARD TechLabs' privacy policy covering GDPR, CCPA, CASL, and Australian Privacy Act requirements for users in the USA, UK, Europe, Canada, and Australia."
        canonical="/privacy-policy"
      />
      <div className="container max-w-4xl">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-6">Last updated: March 31, 2026</p>
        <div className="space-y-3 text-sm text-muted-foreground leading-relaxed glass-card p-6">
          {sections.map((s) => (
            <p key={s}>{s}</p>
          ))}
          <p>To exercise privacy rights, contact: hello@ardtechlabs.com.</p>
        </div>
      </div>
    </div>
  );
}
