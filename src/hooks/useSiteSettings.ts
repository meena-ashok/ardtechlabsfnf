import { useEffect, useState } from "react";
import { publicApi } from "@/services/api";
import { defaultSiteSettings } from "@/lib/siteContent";

type SiteSettings = typeof defaultSiteSettings;

export function useSiteSettings() {
  const [settings, setSettings] = useState<SiteSettings>(defaultSiteSettings);

  useEffect(() => {
    let cancelled = false;

    publicApi.getSettings().then((valueMap) => {
      if (cancelled || !valueMap) return;

      const nextSettings: SiteSettings = {
        companyName: valueMap.company_name || defaultSiteSettings.companyName,
        companyEmail: valueMap.company_email || defaultSiteSettings.companyEmail,
        companyPhone: valueMap.company_phone || defaultSiteSettings.companyPhone,
        companyAddress: valueMap.company_address || defaultSiteSettings.companyAddress,
        siteUrl: valueMap.site_url || defaultSiteSettings.siteUrl,
        seoRegions: (valueMap.seo_regions || defaultSiteSettings.seoRegions.join(","))
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),
        heroWords: (valueMap.hero_words || defaultSiteSettings.heroWords.join(","))
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),
        marqueeItems: (valueMap.marquee_items || defaultSiteSettings.marqueeItems.join(","))
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),
      };

      setSettings(nextSettings);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return settings;
}
