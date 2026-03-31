import SEO from "@/components/SEO";
import SectionHeader from "@/components/SectionHeader";

const sections = [
  {
    title: "Service Scope",
    body: "Project scope, deliverables, timelines, and engagement terms are defined in written proposals, statements of work, or subscription agreements approved by both parties.",
  },
  {
    title: "Free Trial Terms",
    body: "Free trial requests are subject to capacity, internal review, and fit assessment. Trial work is provided without guarantee of long-term engagement and may be limited to agreed evaluation tasks.",
  },
  {
    title: "Client Responsibilities",
    body: "Clients are responsible for timely feedback, access to systems or assets, lawful use of delivered software, and accuracy of project requirements shared during discovery and delivery.",
  },
  {
    title: "Intellectual Property",
    body: "Unless otherwise agreed in writing, final deliverables created for paid engagements transfer according to the signed contract. Pre-existing tools, accelerators, and third-party assets remain subject to their respective licenses.",
  },
  {
    title: "Compliance and Acceptable Use",
    body: "Both ARD TechLabs and its clients must comply with applicable laws, data protection obligations, and anti-spam or anti-abuse regulations relevant to each engagement region.",
  },
];

export default function TermsOfServicePage() {
  return (
    <div className="bg-background pt-20 sm:pt-24 pb-16 sm:pb-20">
      <SEO
        title="Terms of Service"
        description="Terms of Service for ARD TechLabs covering service scope, trial engagements, client responsibilities, IP, and compliance requirements."
        canonical="/terms-of-service"
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
}
