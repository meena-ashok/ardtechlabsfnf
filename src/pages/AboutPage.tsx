import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useApiData } from "@/hooks/useApiData";
import { publicApi } from "@/services/api";
import SectionHeader from "@/components/SectionHeader";
import SEO from "@/components/SEO";
import { Target, Search, Rocket, Handshake } from "lucide-react";

const values = [
  { icon: <Target className="w-5 h-5 text-primary" />, title: "Mission-Driven", desc: "Aligning every line of code with your business goals." },
  { icon: <Search className="w-5 h-5 text-primary" />, title: "Transparent", desc: "Honest communication and full project visibility." },
  { icon: <Rocket className="w-5 h-5 text-primary" />, title: "Innovation-First", desc: "Continuously adopting and pioneering cutting-edge tech." },
  { icon: <Handshake className="w-5 h-5 text-primary" />, title: "Long-Term Partnership", desc: "Your technology partners, not just vendors." },
];

const fallbackTeam = [
  { id: 1, name: "Arjun Mehta", role: "CEO & Founder", bio: "15+ years in enterprise software & digital transformation strategy for global businesses." },
  { id: 2, name: "Deepika Rao", role: "Chief Technology Officer", bio: "Cloud architecture expert, ex-Google, AWS Certified Solutions Architect." },
  { id: 3, name: "Rohan Desai", role: "Head of AI / ML", bio: "PhD in Machine Learning, NLP & LLM specialist, published researcher." },
  { id: 4, name: "Priya Shah", role: "Head of Design", bio: "Product design leader with 12+ years crafting world-class digital experiences." },
];

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  mainEntity: {
    "@type": "Organization",
    name: "ARD TechLabs",
    foundingDate: "2015",
    numberOfEmployees: { "@type": "QuantitativeValue", minValue: 40 },
    areaServed: ["United States", "United Kingdom", "Germany", "France", "Netherlands"],
  },
};

const AboutPage = () => {
  const ref = useScrollReveal();
  const { data: team } = useApiData(() => publicApi.getTeam(), fallbackTeam);

  return (
    <div ref={ref} className="pt-20 sm:pt-24 pb-16 sm:pb-20 bg-background">
      <SEO
        title="About Us -- 9+ Years of IT Excellence"
        description="Learn about ARD TechLabs: a premier IT services firm with 40+ engineers, 150+ projects, and 9+ years of delivering software solutions across USA and Europe."
        canonical="/about"
        jsonLd={aboutJsonLd}
      />
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-14 sm:mb-20">
          <div className="reveal-left relative">
            <div className="bg-gradient-to-br from-navy/30 to-primary/10 rounded-2xl h-56 sm:h-80 flex items-center justify-center relative overflow-hidden">
              <span className="text-5xl sm:text-7xl" role="img" aria-label="Office building">{"\uD83C\uDFE2"}</span>
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-background/90 backdrop-blur-lg rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 border border-primary/20">
                <strong className="text-base sm:text-lg font-extrabold text-primary block">9+</strong>
                <small className="text-[0.6rem] sm:text-[0.65rem] text-muted-foreground">Years of Innovation</small>
              </div>
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-background/90 backdrop-blur-lg rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 border border-primary/20">
                <strong className="text-base sm:text-lg font-extrabold text-primary block">40+</strong>
                <small className="text-[0.6rem] sm:text-[0.65rem] text-muted-foreground">Expert Engineers</small>
              </div>
            </div>
          </div>
          <div className="reveal-right">
            <SectionHeader eyebrow="About Us" title="Building the" accent="Future of Tech" />
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              ARD TechLabs is a premier IT services and consulting company with 9+ years of experience delivering innovative software solutions for businesses across the USA and Europe.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              From startups to Fortune 500 enterprises, we partner with ambitious organisations to design, build, and scale technology that drives real business growth.
            </p>
          </div>
        </div>

        <SectionHeader eyebrow="Our Values" title="What We" accent="Stand For" centered />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-14 sm:mb-20">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="reveal-up glass-card p-4 sm:p-5 text-center group"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="mb-2 sm:mb-3 transition-transform group-hover:scale-110">{v.icon}</div>
              <h4 className="text-xs sm:text-sm font-bold text-foreground mb-1">{v.title}</h4>
              <p className="text-[0.68rem] sm:text-xs text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>

        <SectionHeader eyebrow="Leadership" title="Meet Our" accent="Team" centered />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {team.map((member: any, i: number) => (
            <div
              key={member.id || member.name}
              className="reveal-up glass-card p-5 sm:p-6 text-center group"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl mx-auto mb-3 sm:mb-4 transition-transform group-hover:scale-110 group-hover:-rotate-3" style={{ background: "var(--gradient-navy)" }}>
                {"\uD83D\uDC64"}
              </div>
              <h4 className="text-sm sm:text-base font-bold text-foreground mb-0.5">{member.name}</h4>
              <div className="text-[0.65rem] sm:text-xs font-semibold text-primary mb-2 sm:mb-2.5">{member.role}</div>
              <p className="text-[0.68rem] sm:text-xs text-muted-foreground leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
