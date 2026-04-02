interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  accent: string;
  description?: string;
  centered?: boolean;
}

const SectionHeader = ({ eyebrow, title, accent, description, centered }: SectionHeaderProps) => (
  <div className={`mb-12 ${centered ? "text-center" : ""}`}>
    <span className="eyebrow-badge">
      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" style={{ animation: "blink-dot 2s infinite" }} />
      {eyebrow}
    </span>
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mt-4 mb-4 leading-tight">
      {title} <span className="text-primary">{accent}</span>
    </h2>
    <div className={`rule-line my-4 ${centered ? "mx-auto" : ""}`} />
    {description && (
      <p className={`text-base text-muted-foreground leading-relaxed max-w-[560px] ${centered ? "mx-auto" : ""}`}>
        {description}
      </p>
    )}
  </div>
);

export default SectionHeader;
