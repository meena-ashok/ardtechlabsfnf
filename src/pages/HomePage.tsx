import { Link } from "react-router-dom";
import { useTypewriter } from "@/hooks/useTypewriter";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useApiData } from "@/hooks/useApiData";
import { publicApi } from "@/services/api";
import SectionHeader from "@/components/SectionHeader";
import SEO from "@/components/SEO";
import { Code, Smartphone, Cloud, Shield, Globe, Headphones, Award, RefreshCw, ArrowUpRight, CheckCircle2, LockKeyhole, Radar, Zap, Rocket, Target } from "lucide-react";
import { defaultSiteSettings } from "@/lib/siteContent";
import { useSiteSettings } from "@/hooks/useSiteSettings";
import { motion } from "framer-motion";
import BackgroundOrbs from "@/components/BackgroundOrbs";

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "80+", label: "Happy Clients" },
  { value: "9+", label: "Years of Excellence" },
  { value: "40+", label: "Expert Engineers" },
];

const whyUs = [
  { icon: <Award className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />, title: "Award-Winning", desc: "Recognized excellence in software delivery with industry accolades" },
  { icon: <RefreshCw className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />, title: "Agile Delivery", desc: "2-week sprint cycles ensuring timely project completion" },
  { icon: <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />, title: "Security-First", desc: "ISO 27001 & GDPR compliant with enterprise-grade security" },
  { icon: <Headphones className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />, title: "24/7 Support", desc: "Around-the-clock dedicated support for your peace of mind" },
  { icon: <Globe className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />, title: "Global Reach", desc: "Serving businesses across USA, UK, Europe & Australia" },
  { icon: <Zap className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />, title: "Lightning Fast", desc: "Performance-optimized solutions that scale with your business" },
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

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
    <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <SEO title="Home - ARD TechLabs" description="Award-winning full-stack development, mobile apps, AI/ML, cloud & DevOps solutions." />
      <script type="application/ld+json">{JSON.stringify(organizationJsonLd)}</script>

      <BackgroundOrbs />

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center pt-20 pb-10 px-4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        </div>

        <div className="relative z-10 container mx-auto text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <span className="text-blue-400 text-sm font-semibold">🚀 Transforming Digital Innovation</span>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-7xl md:text-8xl font-black leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {typed}
          </motion.h1>

          <motion.p
            className="text-lg sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Empowering businesses worldwide with cutting-edge technology solutions, enterprise-grade architecture, and innovative digital transformation strategies.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-bold text-lg transition transform hover:scale-105">
              Start Your Project
            </Link>
            <Link to="/portfolio" className="px-8 py-4 bg-gray-700 hover:bg-gray-600 rounded-lg font-bold text-lg transition transform hover:scale-105">
              View Our Work
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={itemVariants} className="p-4">
                <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </header>

      {/* Why Choose Us Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto">
          <SectionHeader
            eyebrow="OUR EXPERTISE"
            title="Why Choose ARD"
            accent="TechLabs?"
            description="We combine technical excellence with business acumen to deliver solutions that matter."
            centered
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {whyUs.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 hover:border-blue-500 transition duration-300 hover:shadow-xl hover:shadow-blue-500/20"
              >
                <div className="p-3 inline-block bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg mb-4 group-hover:from-blue-500/40 group-hover:to-purple-500/40 transition">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                <ArrowUpRight className="w-5 h-5 mt-4 text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto">
          <SectionHeader
            eyebrow="CLIENT SUCCESS STORIES"
            title="What Our Clients"
            accent="Say About Us"
            description="Trusted by innovative companies worldwide to deliver transformational results."
            centered
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                className={`p-8 rounded-2xl border transition duration-300 ${
                  testimonial.featured
                    ? "bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/50 lg:col-span-1 lg:row-span-2 flex flex-col justify-between"
                    : "bg-gray-800/50 border-gray-700 hover:border-blue-500"
                }`}
              >
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400">★</span>)}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed text-lg">"{testimonial.text}"</p>
                </div>
                <div>
                  <h5 className="font-bold text-white">{testimonial.name}</h5>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            className="relative overflow-hidden rounded-3xl p-12 md:p-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30"
            whileInView={{ scale: 1 }}
            initial={{ scale: 0.95 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-50" />
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <Target className="w-16 h-16 mx-auto mb-6 text-blue-400" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-300 mb-8">Let's collaborate to build something extraordinary together.</p>
              <Link to="/contact" className="inline-block px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-bold text-lg transition transform hover:scale-105">
                Schedule a Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-700/50 py-12 px-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">© 2026 ARD TechLabs. All rights reserved. | Delivering Excellence Worldwide</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
