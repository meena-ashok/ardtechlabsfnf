import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useApiData } from "@/hooks/useApiData";
import { publicApi } from "@/services/api";
import SectionHeader from "@/components/SectionHeader";
import SEO from "@/components/SEO";

const fallbackFaqs = [
  { id: 1, question: "What types of businesses do you work with?", answer: "We work with a diverse range of clients -- from early-stage startups building their first product, to mid-market companies scaling platforms, to Fortune 500 enterprises undergoing digital transformation. We serve clients across the USA, UK, and mainland Europe." },
  { id: 2, question: "How long does a typical software project take?", answer: "A simple web app typically takes 6-10 weeks; a complex enterprise platform 6-12 months. We start with a discovery phase for accurate estimates, then work in 2-week agile sprints for continuous delivery and stakeholder visibility." },
  { id: 3, question: "What is your pricing model?", answer: "We offer Fixed-Price (well-defined projects), Time & Material (evolving requirements), and Dedicated Team (ongoing product development). All proposals are transparent with no hidden fees." },
  { id: 4, question: "Do you provide post-launch support and maintenance?", answer: "Absolutely. Post-launch packages range from basic bug-fix plans to full managed services including 24/7 monitoring, performance optimisation, security patching, and feature development." },
  { id: 5, question: "How do you handle data security and GDPR compliance?", answer: "Security is non-negotiable. We sign NDAs before discussions, follow GDPR (EU/UK), CCPA (California), HIPAA, and SOC 2 frameworks. All IP created belongs entirely to you." },
  { id: 6, question: "How do you ensure project quality?", answer: "Quality is embedded at every stage. We practise TDD, automated testing (unit, integration, E2E), peer code reviews, and dedicated QA sprints before each release." },
  { id: 7, question: "Can I hire a dedicated developer without a full project?", answer: "Yes. Our Hire Dedicated Talent model lets you augment your team with pre-vetted senior engineers -- part-time, full-time, or project-based. They can start within 48 hours of approval." },
  { id: 8, question: "Which time zones do you cover for US and European clients?", answer: "We cover EST, CST, PST (USA), GMT (UK), CET (Central Europe), and IST. For dedicated engagements, we match engineers to your preferred working hours." },
  { id: 9, question: "Do you work with early-stage startups?", answer: "We love startups! We offer MVP development packages, technical co-founder advisory, and equity-based arrangements for exceptional ideas." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: fallbackFaqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const FAQPage = () => {
  const ref = useScrollReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { data: faqs } = useApiData(() => publicApi.getFaqs(), fallbackFaqs);

  return (
    <div ref={ref} className="pt-20 sm:pt-24 pb-16 sm:pb-20 bg-background">
      <SEO
        title="FAQ -- IT Services, Pricing, Timelines & Hiring"
        description="Frequently asked questions about ARD TechLabs' IT services, pricing models, project timelines, GDPR compliance, and hiring dedicated developers for USA & Europe."
        canonical="/faq"
        jsonLd={faqJsonLd}
      />
      <div className="container">
        <SectionHeader eyebrow="FAQ" title="Frequently Asked" accent="Questions" centered />
        <div className="max-w-[800px] mx-auto space-y-3 sm:space-y-3.5">
          {faqs.map((faq: any, i: number) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.id || i}
                className={`reveal-up bg-background-card/70 border rounded-[14px] sm:rounded-[16px] overflow-hidden backdrop-blur-sm transition-all ${
                  isOpen ? "border-primary/30 shadow-[0_8px_30px_rgba(244,124,32,0.08)]" : "border-secondary/20"
                }`}
                style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
              >
                <button
                  className="flex justify-between items-center w-full px-4 sm:px-5 py-3.5 sm:py-4 gap-3 sm:gap-4 text-left min-h-[48px]"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <h3 className={`text-xs sm:text-sm font-semibold leading-relaxed flex-1 transition-colors ${isOpen ? "text-primary" : "text-foreground"}`}>
                    {faq.question}
                  </h3>
                  <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-[8px] sm:rounded-[9px] flex-shrink-0 flex items-center justify-center text-base sm:text-lg font-bold transition-all ${
                    isOpen
                      ? "text-primary-foreground shadow-[var(--shadow-orange)] rotate-45 scale-110"
                      : "bg-primary/10 border border-primary/30 text-primary"
                  }`}
                    style={isOpen ? { background: "var(--gradient-orange)" } : undefined}
                  >
                    +
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-400 ${isOpen ? "max-h-[300px]" : "max-h-0"}`}>
                  <p className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
