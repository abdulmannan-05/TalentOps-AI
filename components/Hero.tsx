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
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 relative overflow-hidden bg-white">
      {/* Subtle background pattern – radial gradient blob */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-3xl" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, #e2e8f0 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            opacity: 0.4,
          }}
        />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-8">
          <span>✦</span>
          <span>AI-Powered Hiring Operations</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900">
          Autonomous Candidate
          <br />
          <span className="text-blue-600">Screening Agent</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mt-6 leading-relaxed">
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
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-3.5 font-semibold shadow-lg hover:shadow-blue-200 hover:scale-105 transition-all duration-200"
          >
            Apply as SWE →
          </a>
          <a
            href={BDM_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8 py-3.5 font-semibold hover:scale-105 transition-all duration-200"
          >
            Apply as BDM →
          </a>
        </div>

        {/* See how it works link */}
        <a
          href="#how-it-works"
          className="inline-block mt-6 text-slate-400 text-sm hover:text-blue-600 transition-colors"
        >
          ↓ See How It Works
        </a>
      </div>

      {/* Decorative SVG pattern below CTAs */}
      <div className="relative z-10 mt-16 w-full max-w-3xl mx-auto">
        <svg
          viewBox="0 0 600 120"
          fill="none"
          className="w-full h-auto opacity-30"
        >
          {Array.from({ length: 15 }).map((_, row) =>
            Array.from({ length: 30 }).map((_, col) => (
              <circle
                key={`${row}-${col}`}
                cx={col * 20 + 10}
                cy={row * 8 + 4}
                r="1.5"
                fill="#2563EB"
                opacity={
                  Math.abs(col - 15) < 10 && Math.abs(row - 7) < 5 ? 0.6 : 0.2
                }
              />
            ))
          )}
        </svg>
      </div>

      {/* Trust metrics */}
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 mt-12 pb-8">
        {trustMetrics.map((metric) => (
          <div
            key={metric.text}
            className="bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-sm text-slate-600 flex items-center gap-2"
          >
            <span>{metric.icon}</span>
            <span>{metric.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
