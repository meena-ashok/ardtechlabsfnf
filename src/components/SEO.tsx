import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  jsonLd?: object;
  analyticsConfig?: {
    ga4Id?: string;
    clarityId?: string;
  };
}

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://www.ardtechlabs.com";
const OG_IMAGE = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c5a3f923-aec0-42ce-b210-facce1cc9921/id-preview-4bfca26b--6cbdb877-b645-4a3e-9d3f-a81630931298.lovable.app-1773426989607.png";

const SEO = ({ title, description, canonical = "", type = "website", jsonLd, analyticsConfig }: SEOProps) => {
  const url = `${SITE_URL}${canonical}`;
  const fullTitle = canonical === "/" || canonical === ""
    ? title
    : `${title} | ARD TechLabs`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Hreflang for primary English-speaking target regions */}
      <link rel="alternate" hrefLang="en-us" href={url} />
      <link rel="alternate" hrefLang="en-gb" href={url} />
      <link rel="alternate" hrefLang="en-au" href={url} />
      <link rel="alternate" hrefLang="en-ie" href={url} />
      <link rel="alternate" hrefLang="en-in" href={url} />
      <link rel="alternate" hrefLang="en-de" href={url} />
      <link rel="alternate" hrefLang="en-fr" href={url} />
      <link rel="alternate" hrefLang="en" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="en_GB" />
      <meta property="og:locale:alternate" content="en_AU" />
      <meta property="og:locale:alternate" content="en_IN" />
      <meta property="og:site_name" content="ARD TechLabs" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

      {/* Geo targeting */}
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />
      <meta name="geo.region" content="GB" />
      <meta name="geo.placename" content="United Kingdom" />
      <meta name="geo.region" content="AU" />
      <meta name="geo.placename" content="Australia" />
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />
      <meta name="geo.region" content="DE" />
      <meta name="geo.placename" content="Germany" />
      <meta name="geo.region" content="FR" />
      <meta name="geo.placename" content="France" />

      {/* Compliance Mentions */}
      <meta name="compliance" content="GDPR, CAN-SPAM, CASL, ISO 27001, SOC 2 Type II" />

      {/* Analytics Scripts */}
      {analyticsConfig?.ga4Id && (
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${analyticsConfig.ga4Id}`}></script>
      )}
      {analyticsConfig?.ga4Id && (
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${analyticsConfig.ga4Id}');
          `}
        </script>
      )}
      {analyticsConfig?.clarityId && (
        <script>
          {`
            (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "${analyticsConfig.clarityId}");
          `}
        </script>
      )}

      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
