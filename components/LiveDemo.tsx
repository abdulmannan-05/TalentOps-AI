const SWE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSedoqrbgG4F5kNuwKSn3PzVWIPOvfj2QUrBl7cuMNksLmu7zw/viewform?usp=publish-editor";
const BDM_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdiPKzR5Tyur_JSPdje4OkeQhOWjMd0SZ9nGgftv8P9JIMncw/viewform?usp=publish-editor";

export function LiveDemo() {
  return (
    <section className="py-32 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
      {/* Subtle decorative circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/5 rounded-full" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center bg-white/20 text-white rounded-full px-4 py-1 text-sm backdrop-blur-sm border border-white/30 mb-8">
          Live Demo
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Experience The Hiring Agent
        </h2>

        <p className="text-blue-100 text-lg mt-6 max-w-xl mx-auto leading-relaxed">
          Submit a real application and watch the agent process, evaluate, and
          route your profile automatically. Two roles available — Software
          Engineer or Business Development Manager.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mt-10">
          <a
            href={SWE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-8 py-4 font-semibold shadow-lg hover:scale-105 transition-all duration-200"
          >
            Apply as Software Engineer →
          </a>
          <a
            href={BDM_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-400 text-white border border-white/30 rounded-full px-8 py-4 font-semibold hover:scale-105 transition-all duration-200"
          >
            Apply as BDM →
          </a>
        </div>

        <p className="text-blue-200 text-sm mt-6">
          No login required · Responses processed automatically · Powered by
          Gemini 2.5 Flash
        </p>
      </div>
    </section>
  );
}
