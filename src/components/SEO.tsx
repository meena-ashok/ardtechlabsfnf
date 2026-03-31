import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  jsonLd?: object;
}

const SITE_URL = "https://ardtechlabs.lovable.app";
const OG_IMAGE = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c5a3f923-aec0-42ce-b210-facce1cc9921/id-preview-4bfca26b--6cbdb877-b645-4a3e-9d3f-a81630931298.lovable.app-1773426989607.png";

const SEO = ({ title, description, canonical = "", type = "website", jsonLd }: SEOProps) => {
  const url = `${SITE_URL}${canonical}`;
  const fullTitle = canonical === "/" || canonical === ""
    ? title
    : `${title} | ARD TechLabs`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Hreflang for USA & Europe */}
      <link rel="alternate" hrefLang="en-us" href={url} />
      <link rel="alternate" hrefLang="en-gb" href={url} />
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
      <meta property="og:site_name" content="ARD TechLabs" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      {/* Geo targeting */}
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />

      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
