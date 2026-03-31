import SEO from "@/components/SEO";
import SectionHeader from "@/components/SectionHeader";

const sections = [
  {
    title: "What We Store",
    body: "The website stores essential preferences such as cookie consent choices, admin authentication tokens for logged-in administrators, and session-level form preferences needed for secure operation.",
  },
  {
    title: "How Cookies and Storage Are Used",
    body: "We use essential browser storage to maintain security, preserve admin sessions, reduce repeated prompts, and support smooth form interactions. Optional analytics cookies are not enabled by default in this implementation.",
  },
  {
    title: "Your Choices",
    body: "Visitors can choose essential-only storage or accept all storage from the consent banner. Preferences are stored locally and can be cleared in the browser at any time.",
  },
  {
    title: "Regional Standards",
    body: "Our cookie handling approach is aligned with GDPR transparency principles, CAN-SPAM communication standards, CASL expectations, and broader regional data protection obligations.",
  },
];

export default function CookiePolicyPage() {
  return (
    <div className="bg-background pt-20 sm:pt-24 pb-16 sm:pb-20">
      <SEO
        title="Cookie Policy"
        description="Cookie Policy for ARD TechLabs explaining essential storage, consent options, and regional compliance for website visitors in the USA, UK, Europe, and Australia."
        canonical="/cookie-policy"
      />
      <div className="container max-w-4xl">
        <SectionHeader
          eyebrow="Legal"
          title="Cookie"
          accent="Policy"
          description="How this website uses essential browser storage, consent preferences, and security-related session data."
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
