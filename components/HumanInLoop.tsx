import { CheckCircle, ArrowRight } from "lucide-react";

const aiHandles = [
  "Strong candidates (score ≥ 70) — fully automated",
  "Weak candidates (score < 40) — automated rejection",
  "Resume analysis and scoring",
  "Calendar event creation",
  "Candidate email communication",
];

const humanHandles = [
  "Borderline candidates (score 40–69)",
  "Edge cases flagged by the agent",
  "Final interview decisions",
  "Offer stage conversations",
  "Strategic hiring decisions",
];

export function HumanInLoop() {
  return (
    <section id="human-in-loop" className="py-24 bg-secondary border-t border-accent-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Label */}
          <p className="text-accent-gold text-sm font-semibold uppercase tracking-widest">
            Human Oversight
          </p>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 tracking-tight">
            Autonomous When Confident.
            <br />
            Human When Needed.
          </h2>

          {/* Subheading */}
          <p className="text-slate-600 text-lg max-w-2xl mx-auto mt-4 leading-[1.6]">
            The agent handles the majority of candidate screening autonomously
            while escalating uncertain or borderline cases to human recruiters.
            Efficiency without sacrificing control.
          </p>
        </div>

        {/* Dynamic Columns */}
        <div className="mt-16 flex flex-col md:flex-row gap-6 items-stretch relative">
          
          {/* AI Handles */}
          <div className="flex-1 bg-background border border-accent-gold/20 rounded-lg p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent-gold/40" />
            <h3 className="font-semibold text-primary text-lg mb-5 tracking-tight">
              Agent Operates Independently
            </h3>
            <ul className="space-y-3.5">
              {aiHandles.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed"
                >
                  <CheckCircle
                    className="text-accent-gold shrink-0 mt-0.5"
                    size={18}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Smart Handoff badge – visual bridge (8px corner radius) */}
          <div className="flex items-center justify-center md:-mx-3 z-10">
            <div className="bg-secondary border border-accent-gold/40 shadow-sm rounded-lg px-4 py-2 text-xs font-semibold text-primary flex items-center gap-2">
              <ArrowRight size={14} className="text-accent-gold" />
              Smart Handoff
            </div>
          </div>

          {/* Human Handles */}
          <div className="flex-1 bg-background border border-accent-gold/20 rounded-lg p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary" />
            <h3 className="font-semibold text-primary text-lg mb-5 tracking-tight">
              Recruiter Steps In
            </h3>
            <ul className="space-y-3.5">
              {humanHandles.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed"
                >
                  <ArrowRight
                    className="text-primary shrink-0 mt-0.5"
                    size={18}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
