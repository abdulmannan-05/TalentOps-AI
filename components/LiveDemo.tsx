const SWE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSedoqrbgG4F5kNuwKSn3PzVWIPOvfj2QUrBl7cuMNksLmu7zw/viewform?usp=publish-editor";
const BDM_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdiPKzR5Tyur_JSPdje4OkeQhOWjMd0SZ9nGgftv8P9JIMncw/viewform?usp=publish-editor";

export function LiveDemo() {
  return (
    <section className="py-32 bg-gradient-to-br from-primary to-[#2C2C2C] relative overflow-hidden border-t border-accent-gold/25">
      {/* Subtle gold radial wash in background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge (Dossier gold design, 8px corners) */}
        <div className="inline-flex items-center bg-accent-gold/10 text-accent-gold border border-accent-gold/30 rounded-lg px-4 py-1 text-sm font-semibold tracking-wide mb-8">
          Live Demo
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-secondary tracking-tight">
          Experience The Hiring Agent
        </h2>

        {/* Description */}
        <p className="text-slate-300 text-lg mt-6 max-w-xl mx-auto leading-[1.6]">
          Submit a real application and watch the agent process, evaluate, and
          route your profile automatically. Two roles available — Software
          Engineer or Business Development Manager.
        </p>

        {/* CTA Buttons (8px corners) */}
        <div className="flex flex-wrap gap-4 justify-center mt-10">
          <a
            href={SWE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent-gold hover:bg-accent-gold/90 text-primary rounded-lg px-8 py-4 font-semibold shadow-lg hover:scale-105 transition-all duration-200 border border-accent-gold"
          >
            Apply as Software Engineer →
          </a>
          <a
            href={BDM_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent hover:bg-white/5 text-secondary border border-accent-gold/50 rounded-lg px-8 py-4 font-semibold hover:scale-105 transition-all duration-200"
          >
            Apply as BDM →
          </a>
        </div>

        {/* Small footer text */}
        <p className="text-slate-400 text-sm mt-6">
          No login required · Responses processed automatically · Powered by
          Gemini 2.5 Flash
        </p>
      </div>
    </section>
  );
}
