import SEO from "@/components/SEO";

const items = [
  "Service scope, delivery assumptions, and change-request handling.",
  "Free trial terms including no-obligation pilot rules and output ownership boundaries.",
  "Intellectual property ownership and licensing after payment milestones.",
  "Mutual NDA confidentiality obligations and exceptions.",
  "Payment terms, invoicing, taxes, and late-payment handling.",
  "Warranty disclaimers, liability caps, and force majeure.",
  "Data protection commitments and security obligations.",
];

export default function TermsOfServicePage() {
  return (
    <div className="pt-24 pb-16 bg-background-alt">
      <SEO
        title="Terms of Service | ARD TechLabs"
        description="Review ARD TechLabs Terms of Service including free trial terms, IP ownership, NDA, payment terms, liability, and data protection provisions for global clients."
        canonical="/terms-of-service"
      />
      <div className="container max-w-4xl">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-6">Last updated: March 31, 2026</p>
        <div className="space-y-3 text-sm text-muted-foreground leading-relaxed glass-card p-6">
          {items.map((s) => (
            <p key={s}>{s}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
