const BackgroundOrbs = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
    {/* Large navy orb - top left */}
    <div
      className="absolute rounded-full will-change-transform"
      style={{
        width: 700, height: 700,
        background: "radial-gradient(circle, hsl(222 67% 33% / 0.25), hsl(222 67% 33% / 0.08) 50%, transparent 70%)",
        top: -200, left: -200,
        animation: "orb-float 25s ease-in-out infinite",
        filter: "blur(60px)",
      }}
    />
    {/* Orange glow - mid right */}
    <div
      className="absolute rounded-full will-change-transform"
      style={{
        width: 550, height: 550,
        background: "radial-gradient(circle, hsl(25 89% 54% / 0.18), hsl(25 89% 54% / 0.05) 50%, transparent 70%)",
        top: "30%", right: -180,
        animation: "orb-float 20s ease-in-out infinite",
        animationDelay: "-7s",
        filter: "blur(80px)",
      }}
    />
    {/* Navy mid orb */}
    <div
      className="absolute rounded-full will-change-transform"
      style={{
        width: 450, height: 450,
        background: "radial-gradient(circle, hsl(222 65% 43% / 0.2), transparent 65%)",
        bottom: -100, left: "25%",
        animation: "orb-float 22s ease-in-out infinite",
        animationDelay: "-14s",
        filter: "blur(90px)",
      }}
    />
    {/* Small accent orb - center */}
    <div
      className="absolute rounded-full will-change-transform"
      style={{
        width: 300, height: 300,
        background: "radial-gradient(circle, hsl(260 60% 50% / 0.1), transparent 65%)",
        top: "55%", left: "50%",
        animation: "orb-float 30s ease-in-out infinite",
        animationDelay: "-5s",
        filter: "blur(100px)",
      }}
    />
    {/* Tiny bright orange spark */}
    <div
      className="absolute rounded-full will-change-transform"
      style={{
        width: 200, height: 200,
        background: "radial-gradient(circle, hsl(25 89% 54% / 0.12), transparent 60%)",
        top: "15%", left: "60%",
        animation: "orb-float 15s ease-in-out infinite",
        animationDelay: "-3s",
        filter: "blur(50px)",
      }}
    />

    {/* Animated grid mesh */}
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          "linear-gradient(hsl(222 65% 43% / 0.04) 1px, transparent 1px), linear-gradient(90deg, hsl(222 65% 43% / 0.04) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
        maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 70%)",
        animation: "grid-pan 30s linear infinite",
      }}
    />

    {/* Subtle radial vignette */}
    <div
      className="absolute inset-0"
      style={{
        background: "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, hsl(220 60% 8% / 0.6) 100%)",
      }}
    />
  </div>
);

export default BackgroundOrbs;
