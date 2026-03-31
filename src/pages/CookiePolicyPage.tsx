import SEO from "@/components/SEO";

const cookieTypes = [
  ["Strictly Necessary", "Session/auth/security", "Always active"],
  ["Analytics", "Usage measurement and performance", "Optional"],
  ["Marketing", "Campaign attribution and remarketing", "Optional"],
];

export default function CookiePolicyPage() {
  return (
    <div className="pt-24 pb-16 bg-background-alt">
      <SEO
        title="Cookie Policy | ePrivacy, GDPR, CCPA, PIPEDA"
        description="Learn how ARD TechLabs uses cookies, cookie categories, and preference controls in compliance with ePrivacy, GDPR, CCPA, and PIPEDA."
        canonical="/cookie-policy"
      />
      <div className="container max-w-4xl">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">Cookie Policy</h1>
        <p className="text-sm text-muted-foreground mb-6">Last updated: March 31, 2026</p>
        <div className="glass-card p-6">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-secondary/30 text-foreground">
                <th className="py-2">Cookie Type</th><th className="py-2">Purpose</th><th className="py-2">Control</th>
              </tr>
            </thead>
            <tbody>
              {cookieTypes.map(([type, purpose, control]) => (
                <tr key={type} className="border-b border-secondary/15 text-muted-foreground">
                  <td className="py-2">{type}</td><td className="py-2">{purpose}</td><td className="py-2">{control}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-4 text-sm text-muted-foreground">You can manage cookies any time through the cookie banner settings. Compliance basis: ePrivacy, GDPR, CCPA, and PIPEDA.</p>
        </div>
      </div>
    </div>
  );
}
