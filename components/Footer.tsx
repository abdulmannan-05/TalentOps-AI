export function Footer() {
  return (
    <footer className="bg-primary text-secondary py-16 border-t border-accent-gold/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Left column */}
          <div>
            <a href="#" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#2C2C2C] rounded-lg flex items-center justify-center border border-accent-gold/30">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  className="text-accent-gold"
                >
                  <path
                    d="M9 2L2 6.5V11.5L9 16L16 11.5V6.5L9 2Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                    fill="currentColor"
                    fillOpacity="0.2"
                  />
                  <circle cx="9" cy="9" r="2.5" fill="currentColor" />
                </svg>
              </div>
              <span className="font-semibold text-white">
                TalentOps<span className="text-accent-gold"> AI</span>
              </span>
            </a>
            <p className="text-slate-300 text-sm mt-3 font-medium">
              Autonomous Candidate Screening & Hiring Operations Agent
            </p>
            <p className="text-slate-400 text-sm mt-1">
              Autonomous screening. Human oversight.
            </p>
          </div>

          {/* Right column – links */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-slate-400 hover:text-accent-gold text-sm transition-colors font-medium"
            >
              About
            </a>
            <span className="text-slate-800">·</span>
            <a
              href="#how-it-works"
              className="text-slate-400 hover:text-accent-gold text-sm transition-colors font-medium"
            >
              Architecture
            </a>
            <span className="text-slate-800">·</span>
            <a
              href="#"
              className="text-slate-400 hover:text-accent-gold text-sm transition-colors font-medium"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-accent-gold/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © 2025 TalentOps AI. Built by Abdul Mannan.
          </p>
          <p className="text-slate-500 text-xs text-center md:text-right">
            Built as an autonomous workflow automation project using AI-powered
            decision making.
          </p>
        </div>
      </div>
    </footer>
  );
}
