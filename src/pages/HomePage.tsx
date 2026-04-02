import { Link } from "react-router-dom";
import { useTypewriter } from "@/hooks/useTypewriter";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useApiData } from "@/hooks/useApiData";
import { publicApi } from "@/services/api";
import SectionHeader from "@/components/SectionHeader";
import SEO from "@/components/SEO";
import { Code, Smartphone, Cloud, Shield, Globe, Headphones, Award, RefreshCw, ArrowUpRight, CheckCircle2, LockKeyhole, Radar } from "lucide-react";
import { defaultSiteSettings } from "@/lib/siteContent";
import { useSiteSettings } from "@/hooks/useSiteSettings";
import { motion } from "framer-motion";

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "80+", label: "Happy Clients" },
  { value: "9+", label: "Years of Excellence" },
  { value: "40+", label: "Expert Engineers" },
];

const whyUs = [
  { icon: <Award className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />, title: "Award-Winning", desc: "Recognised excellence in software delivery" },
  { icon: <RefreshCw className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />, title: "Agile Delivery", desc: "2-week sprint cycles, always on time" },
  { icon: <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />, title: "Security-First", desc: "ISO 27001 & GDPR compliant" },
  { icon: <Headphones className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />, title: "24/7 Support", desc: "Always here when you need us" },
  { icon: <Globe className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />, title: "Global Reach", desc: "USA, UK, Europe & Australia -- 20+ countries" },
];

const fallbackTestimonials = [
  { id: 1, text: "ARD TechLabs transformed our entire digital infrastructure. Their team delivered a complex microservices architecture on time and under budget.", name: "Sarah Mitchell", role: "CTO, FinFlow Inc. -- USA", featured: false },
  { id: 2, text: "The AI recommendation engine increased our conversion rate by 42%. The team understands both tech and business. Simply outstanding work.", name: "Rahul Sharma", role: "CEO, RetailGenius -- UK", featured: true },
  { id: 3, text: "Their DevOps setup reduced deployment time from 3 hours to 8 minutes. The cloud migration was flawless. ARD TechLabs is our go-to partner.", name: "Emma Lawson", role: "VP Engineering, LogiChain -- Germany", featured: false },
];

const HomePage = () => {
  const { companyEmail, companyPhone, companyAddress, heroWords, marqueeItems } = useSiteSettings();
  const typed = useTypewriter(heroWords.length ? heroWords : defaultSiteSettings.heroWords);
  const revealRef = useScrollReveal();
  const { data: testimonials } = useApiData(() => publicApi.getTestimonials(), fallbackTestimonials);

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ARD TechLabs",
    url: "https://www.ardtechlabs.com",
    logo: "https://www.ardtechlabs.com/favicon.ico",
    description: "ARD TechLabs delivers award-winning full-stack development, mobile apps, AI/ML, cloud & DevOps for businesses across the USA, UK, Europe, and Australia.",
    foundingDate: "2015",
    numberOfEmployees: { "@type": "QuantitativeValue", minValue: 40 },
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Germany" },
      { "@type": "Country", name: "Australia" },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: companyPhone,
      contactType: "sales",
      email: companyEmail,
      availableLanguage: ["English"],
      areaServed: ["US", "GB", "DE", "FR", "NL"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: companyAddress,
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      postalCode: "380060",
      addressCountry: "IN",
    },
    sameAs: [],
    knowsAbout: ["Full-Stack Development", "Mobile Apps", "AI/ML", "Cloud Computing", "DevOps"],
  };

  return (
    <div className="bg-gray-50">
      <SEO title="Home - ARD TechLabs" description="Award-winning full-stack development, mobile apps, AI/ML, cloud & DevOps." />
      <header className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto px-6 py-16 text-center">
          <motion.h1
            className="text-4xl sm:text-6xl font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {typed}
          </motion.h1>
          <p className="mt-4 text-lg sm:text-xl">
            Empowering businesses with cutting-edge technology solutions.
          </p>
          <div className="mt-6">
            <Link to="/contact" className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <SectionHeader title="Why Choose Us?" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyUs.map((item, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              {item.icon}
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <SectionHeader title="Our Achievements" />
        <div className="flex justify-center space-x-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h4 className="text-3xl font-bold text-primary">{stat.value}</h4>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <SectionHeader title="What Our Clients Say" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="p-6 bg-white rounded-lg shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-600">"{testimonial.text}"</p>
              <h5 className="mt-4 font-semibold">{testimonial.name}</h5>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2026 ARD TechLabs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
