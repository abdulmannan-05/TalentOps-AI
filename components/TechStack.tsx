interface TechCard {
  name: string;
  icon: string;
  role: string;
  special?: boolean;
}

const techCards: TechCard[] = [
  { name: "Make.com", icon: "🔄", role: "Workflow Orchestration" },
  { name: "Google Forms", icon: "📋", role: "Application Intake" },
  { name: "Google Sheets", icon: "📊", role: "Candidate Database" },
  { name: "Google Drive", icon: "💾", role: "Resume Storage" },
  {
    name: "Gemini 2.5 Flash",
    icon: "✦",
    role: "AI Evaluation Engine",
    special: true,
  },
  { name: "Gmail", icon: "✉️", role: "Candidate Communication" },
  { name: "Google Calendar", icon: "📅", role: "Interview Scheduling" },
];

export function TechStack() {
  return (
    <section id="technology" className="py-24 bg-background border-t border-accent-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Label */}
        <p className="text-accent-gold text-sm font-semibold uppercase tracking-widest">
          Infrastructure
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 tracking-tight">
          Built With Modern Automation Infrastructure
        </h2>

        {/* Subheading */}
        <p className="text-slate-600 text-lg max-w-2xl mx-auto mt-4 leading-[1.6]">
          Every component of the stack is purpose-selected for reliability,
          speed, and zero infrastructure maintenance.
        </p>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
          {techCards.map((card) => (
            <div
              key={card.name}
              className={`rounded-lg p-6 text-center flex flex-col items-center justify-center gap-3 hover:shadow-md hover:-translate-y-1 transition-all duration-200 border ${
                card.special
                  ? "bg-accent-gold-light border-accent-gold shadow-sm ring-1 ring-accent-gold/20"
                  : "bg-secondary border-border hover:border-accent-gold/30"
              }`}
            >
              <span className={`text-3xl ${card.special ? "text-accent-gold" : ""}`}>
                {card.icon}
              </span>
              <span className="font-semibold text-primary text-sm tracking-tight">
                {card.name}
              </span>
              <span className="text-xs text-slate-500">{card.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
