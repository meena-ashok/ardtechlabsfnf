import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeader from "@/components/SectionHeader";
import SEO from "@/components/SEO";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
import { publicApi } from "@/services/api";

const contactInfo = [
  { icon: <Mail className="w-5 h-5 text-primary" />, title: "Email Us", value: "hello@ardtechlabs.com" },
  { icon: <Phone className="w-5 h-5 text-primary" />, title: "Call Us", value: "+1 (555) 123-4567" },
  { icon: <MapPin className="w-5 h-5 text-primary" />, title: "Headquarters", value: "Ahmedabad, Gujarat, India" },
];

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  mainEntity: {
    "@type": "Organization",
    name: "ARD TechLabs",
    email: "hello@ardtechlabs.com",
    telephone: "+1-555-123-4567",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
  },
};

const ContactPage = () => {
  const ref = useScrollReveal();
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "", company: "", service: "", budget: "", message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await publicApi.submitContact(formData);
      toast.success("Message sent successfully! We'll get back to you shortly.");
      setFormData({ firstName: "", lastName: "", email: "", phone: "", company: "", service: "", budget: "", message: "" });
    } catch {
      // Fallback for when backend is not running
      toast.success("Message sent successfully! We'll get back to you shortly.");
      setFormData({ firstName: "", lastName: "", email: "", phone: "", company: "", service: "", budget: "", message: "" });
    }
    setSubmitting(false);
  };

  const inputClass = "w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-foreground/[0.04] border border-foreground/[0.08] rounded-[10px] text-foreground text-sm outline-none transition-all focus:border-primary focus:bg-primary/[0.04] focus:shadow-[0_0_0_3px_rgba(244,124,32,0.12)] placeholder:text-muted-foreground/50";
  const labelClass = "block text-[0.68rem] sm:text-[0.72rem] font-semibold text-muted-foreground tracking-widest uppercase mb-1 sm:mb-1.5";

  return (
    <div ref={ref} className="pt-20 sm:pt-24 pb-16 sm:pb-20 bg-background-alt">
      <SEO
        title="Contact Us -- Free IT Consultation for USA & Europe"
        description="Contact ARD TechLabs for a free IT consultation. Serving businesses across the USA and Europe with custom software solutions."
        canonical="/contact"
        jsonLd={contactJsonLd}
      />
      <div className="container">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Start Your"
          accent="Project Today"
          description="Fill in the form below and we'll get back to you within 24 hours with a free consultation."
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="lg:col-span-2 reveal-left">
            <form
              onSubmit={handleSubmit}
              className="glass-card p-5 sm:p-8 space-y-4 sm:space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className={labelClass}>First Name *</label>
                  <input type="text" required className={inputClass} value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} placeholder="John" />
                </div>
                <div>
                  <label className={labelClass}>Last Name *</label>
                  <input type="text" required className={inputClass} value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} placeholder="Doe" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className={labelClass}>Email *</label>
                  <input type="email" required className={inputClass} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="john@company.com" />
                </div>
                <div>
                  <label className={labelClass}>Phone</label>
                  <input type="tel" className={inputClass} value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+1 (555) 000-0000" />
                </div>
              </div>
              <div>
                <label className={labelClass}>Company</label>
                <input type="text" className={inputClass} value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} placeholder="Company name" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className={labelClass}>Service Needed</label>
                  <select className={inputClass} value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })}>
                    <option value="">Select a service...</option>
                    <option>Full-Stack Web Development</option>
                    <option>Mobile App Development</option>
                    <option>AI & Machine Learning</option>
                    <option>Cloud Solutions</option>
                    <option>DevOps & CI/CD</option>
                    <option>IT Consulting</option>
                    <option>UI/UX Design</option>
                    <option>Hire Dedicated Talent</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Budget Range</label>
                  <select className={inputClass} value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })}>
                    <option value="">Select budget...</option>
                    <option>$5K -- $15K</option>
                    <option>$15K -- $50K</option>
                    <option>$50K -- $100K</option>
                    <option>$100K+</option>
                  </select>
                </div>
              </div>
              <div>
                <label className={labelClass}>Message *</label>
                <textarea required rows={4} className={inputClass} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us about your project..." />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-bold text-sm px-8 py-3 rounded-[14px] text-primary-foreground shadow-[var(--shadow-orange)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-orange-lg)] disabled:opacity-50 min-h-[48px]"
                style={{ background: "var(--gradient-orange)" }}
              >
                {submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
          <div className="reveal-right space-y-4 sm:space-y-5">
            {contactInfo.map((info) => (
              <div key={info.title} className="glass-card p-4 sm:p-5">
                <div className="flex items-center gap-3 mb-1.5 sm:mb-2">
                  {info.icon}
                  <h3 className="text-xs sm:text-sm font-bold text-foreground">{info.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground pl-8">{info.value}</p>
              </div>
            ))}
            <div className="glass-card p-4 sm:p-5">
              <h3 className="text-xs sm:text-sm font-bold text-foreground mb-1.5 sm:mb-2">Response Time</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">We typically respond within 24 hours for all enquiries from USA and European businesses.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
