const SWE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSedoqrbgG4F5kNuwKSn3PzVWIPOvfj2QUrBl7cuMNksLmu7zw/viewform?usp=publish-editor";
const BDM_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdiPKzR5Tyur_JSPdje4OkeQhOWjMd0SZ9nGgftv8P9JIMncw/viewform?usp=publish-editor";

const trustMetrics = [
  { icon: "⚡", text: "Evaluates in < 60s" },
  { icon: "🎯", text: "Role-Specific Scoring" },
  { icon: "🤝", text: "Human Oversight Built-In" },
];

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 relative overflow-hidden bg-background">
      {/* Subtle background pattern – radial gradient blob */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-gold/5 rounded-full blur-3xl" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, #E5E5E5 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            opacity: 0.5,
          }}
        />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-secondary text-primary border border-accent-gold/30 rounded-lg px-4 py-1.5 text-sm font-medium mb-8 shadow-sm tracking-wide">
          <span className="text-accent-gold">✦</span>
          <span>AI-Powered Hiring Operations</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-primary leading-[1.1] md:leading-[1.15]">
          Autonomous Candidate
          <br />
          <span className="text-accent-gold">Screening Agent</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mt-6 leading-[1.6]">
          An AI-powered hiring agent that evaluates candidates, makes
          role-specific hiring decisions, automates communication, and escalates
          uncertain cases to human recruiters — without manual intervention.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <a
            href={SWE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary/90 text-secondary rounded-lg px-8 py-3.5 font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 border border-primary"
          >
            Apply as SWE →
          </a>
          <a
            href={BDM_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary hover:bg-background text-primary border border-accent-gold rounded-lg px-8 py-3.5 font-semibold hover:scale-105 transition-all duration-200 shadow-sm"
          >
            Apply as BDM →
          </a>
        </div>

        {/* See how it works link */}
        <a
          href="#how-it-works"
          className="inline-block mt-6 text-slate-400 text-sm hover:text-accent-gold transition-colors font-medium"
        >
          ↓ See How It Works
        </a>
      </div>

      {/* Decorative SVG pattern below CTAs */}
      <div className="relative z-10 mt-16 w-full max-w-3xl mx-auto">
        <svg
          viewBox="0 0 600 120"
          fill="none"
          className="w-full h-auto opacity-40"
        >
          {Array.from({ length: 15 }).map((_, row) =>
            Array.from({ length: 30 }).map((_, col) => (
              <circle
                key={`${row}-${col}`}
                cx={col * 20 + 10}
                cy={row * 8 + 4}
                r="1.5"
                fill="#D4AF37"
                opacity={
                  Math.abs(col - 15) < 10 && Math.abs(row - 7) < 5 ? 0.8 : 0.25
                }
              />
            ))
          )}
        </svg>
      </div>

      {/* Trust metrics */}
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 mt-12 pb-8">
        {trustMetrics.map((metric) => (
          <div
            key={metric.text}
            className="bg-secondary border border-accent-gold/25 rounded-lg px-4 py-2 text-sm text-primary font-medium flex items-center gap-2 shadow-sm"
          >
            <span>{metric.icon}</span>
            <span>{metric.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
