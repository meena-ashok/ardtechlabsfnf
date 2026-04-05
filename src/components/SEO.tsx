import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  jsonLd?: object | object[];
  analyticsConfig?: {
    ga4Id?: string;
    clarityId?: string;
  };
  children?: React.ReactNode;
}

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://www.ardtechlabs.com";
const OG_IMAGE = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c5a3f923-aec0-42ce-b210-facce1cc9921/id-preview-4bfca26b--6cbdb877-b645-4a3e-9d3f-a81630931298.lovable.app-1773426989607.png";
const SITE_NAME = "ARD TechLabs";

const SEO = ({ title, description, canonical = "", type = "website", jsonLd, analyticsConfig, children }: SEOProps) => {
  const url = `${SITE_URL}${canonical}`;
  const fullTitle = canonical === "/" || canonical === ""
    ? title
    : `${title} | ${SITE_NAME}`;

  const jsonLdScripts = Array.isArray(jsonLd) ? jsonLd : [jsonLd];

  return (
    <Helmet>
      {/* Essential Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      {/* Hreflang Tags for multilingual/multiregional sites */}
      <link rel="alternate" hrefLang="en-us" href={url} />
      <link rel="alternate" hrefLang="en-gb" href={url} />
      <link rel="alternate" hrefLang="en-au" href={url} />
      <link rel="alternate" hrefLang="en-ca" href={url} />
      <link rel="alternate" hrefLang="en-in" href={url} />
      <link rel="alternate" hrefLang="en" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />

      {/* Geo-targeting Tags */}
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />
      {/* Add more regions as needed */}

      {/* AI & Voice Search Optimization */}
      <meta name="speakable" content="true" />
      
      {/* Structured Data */}
      {jsonLdScripts.map((script, index) => (
        script && <script key={index} type="application/ld+json">{JSON.stringify(script)}</script>
      ))}

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
      {children}
    </Helmet>
  );
};

export default SEO;
