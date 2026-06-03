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
    <section id="human-in-loop" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest">
            Human Oversight
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">
            Autonomous When Confident.
            <br />
            Human When Needed.
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            The agent handles the majority of candidate screening autonomously
            while escalating uncertain or borderline cases to human recruiters.
            Efficiency without sacrificing control.
          </p>
        </div>

        <div className="mt-16 flex flex-col md:flex-row gap-6 items-stretch relative">
          {/* AI Handles */}
          <div className="flex-1 bg-blue-50 border border-blue-100 rounded-2xl p-8">
            <h3 className="font-semibold text-slate-900 text-lg mb-5">
              Agent Operates Independently
            </h3>
            <ul className="space-y-3">
              {aiHandles.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-slate-700"
                >
                  <CheckCircle
                    className="text-blue-600 shrink-0 mt-0.5"
                    size={18}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Smart Handoff badge – visual bridge */}
          <div className="flex items-center justify-center md:-mx-3 z-10">
            <div className="bg-white border border-slate-200 shadow-sm rounded-full px-4 py-2 text-xs font-semibold text-slate-600 flex items-center gap-2">
              <ArrowRight size={14} className="text-blue-600" />
              Smart Handoff
            </div>
          </div>

          {/* Human Handles */}
          <div className="flex-1 bg-amber-50 border border-amber-100 rounded-2xl p-8">
            <h3 className="font-semibold text-slate-900 text-lg mb-5">
              Recruiter Steps In
            </h3>
            <ul className="space-y-3">
              {humanHandles.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-slate-700"
                >
                  <ArrowRight
                    className="text-amber-500 shrink-0 mt-0.5"
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
