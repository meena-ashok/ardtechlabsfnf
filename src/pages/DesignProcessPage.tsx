
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeader from "@/components/SectionHeader";
import SEO from "@/components/SEO";

const DesignProcessPage = ({ analyticsConfig }) => {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className="pt-20 sm:pt-24 pb-16 sm:pb-20 bg-background">
      <SEO
        title="UI/UX Design Process | ARD TechLabs"
        description="Creating a high-fidelity UI/UX design requires a balance between aesthetic 'wow' factor and functional clarity. Whether you are building an MVP or a full-scale platform, the following principles and workflow will help ensure your website looks and feels premium."
        canonical="/design-process"
        analyticsConfig={analyticsConfig}
      />
      <div className="container">
        <SectionHeader eyebrow="UI/UX Design" title="High-Fidelity" accent="Design Process" />
        <div className="prose prose-invert max-w-none">
          <p>
            Creating a high-fidelity UI/UX design requires a balance between aesthetic "wow" factor and functional clarity. Whether you are building an MVP or a full-scale platform, the following principles and workflow will help ensure your website looks and feels premium.
          </p>
          
          <h2>1. The High-Fidelity Design Stack</h2>
          <p>To achieve professional results, leverage tools that support advanced prototyping and developer handoff:</p>
          <ul>
            <li><strong>Design:</strong> Figma (Industry standard for high-fidelity layouts).</li>
            <li><strong>Interactions:</strong> Principle or Adobe After Effects (for micro-animations).</li>
            <li><strong>Typography:</strong> Google Fonts (Inter, Roboto) or premium foundries for a unique brand voice.</li>
            <li><strong>Icons & Assets:</strong> Lucide Icons or FontAwesome; high-resolution photography from Unsplash or Pexels.</li>
          </ul>

          <h2>2. Core UI/UX Principles</h2>
          <h3>Visual Hierarchy</h3>
          <p>Guide the user’s eye using size, color, and spacing. The most important action (e.g., "Get Started") should be the most visually prominent element on the page.</p>
          <h3>Layout & Grids</h3>
          <p><strong>8pt Grid System:</strong> Use increments of 8px for padding, margins, and sizing. This creates a mathematically consistent rhythm that feels "clean" to the user.</p>
          <p><strong>Negative Space:</strong> Don't fear empty space. White space reduces cognitive load and makes content more digestible.</p>
          <h3>Consistency (Design Systems)</h3>
          <p>High-fidelity sites don't use random colors or buttons. Define a Design System early:</p>
          <ul>
            <li><strong>Color Palette:</strong> Primary, secondary, accent, and semantic colors (Success, Error, Warning).</li>
            <li><strong>Component Library:</strong> Standardize buttons, input fields, cards, and navigation bars.</li>
          </ul>

          <h2>3. Implementation Checklist</h2>
          <table>
            <thead>
              <tr>
                <th>Stage</th>
                <th>Focus Area</th>
                <th>High-Fidelity Requirement</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>UX</td>
                <td>User Flow</td>
                <td>Frictionless navigation with clear "back" and "home" paths.</td>
              </tr>
              <tr>
                <td>UI</td>
                <td>Visual Depth</td>
                <td>Subtle drop shadows (Soft UI) and glassmorphism effects where appropriate.</td>
              </tr>
              <tr>
                <td>Motion</td>
                <td>Micro-interactions</td>
                <td>Smooth hover states, loading skeletons, and page transitions.</td>
              </tr>
              <tr>
                <td>Content</td>
                <td>Media</td>
                <td>Use SVG for logos/icons to ensure sharpness on all screen resolutions.</td>
              </tr>
              <tr>
                <td>A11y</td>
                <td>Accessibility</td>
                <td>Ensure a color contrast ratio of at least 4.5:1 for readability.</td>
              </tr>
            </tbody>
          </table>

          <h2>4. Modern UI Trends to Consider</h2>
          <ul>
            <li><strong>Bento Grids:</strong> Organizing content into rounded, rectangular "tiles" (popularized by Apple).</li>
            <li><strong>Dark Mode Support:</strong> Designing for both light and dark themes using CSS variables.</li>
            <li><strong>Immersive Hero Sections:</strong> Using high-quality 3D renders or Lottie animations to grab attention immediately.</li>
          </ul>

          <h2>A Step Toward Development</h2>
          <p>Once your high-fidelity mockups are ready in Figma, you can streamline the build by using:</p>
          <ul>
            <li><strong>Tailwind CSS:</strong> For rapid, utility-first styling that matches your 8pt grid.</li>
            <li><strong>Framer Motion:</strong> For implementing complex React-based animations easily.</li>
            <li><strong>Component Libraries:</strong> Using Shadcn/ui or DaisyUI as a base to customize into your unique high-fidelity vision.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default DesignProcessPage;
