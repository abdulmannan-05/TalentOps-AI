import { CheckCircle, UserCheck, XCircle } from "lucide-react";

export function DecisionEngine() {
  return (
    <section id="decision-engine" className="py-24 bg-background border-t border-accent-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Label */}
        <p className="text-accent-gold text-sm font-semibold uppercase tracking-widest">
          Decision Engine
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 tracking-tight">
          Three Outcomes. Zero Manual Effort.
        </h2>

        {/* Subheading */}
        <p className="text-slate-600 text-lg max-w-2xl mx-auto mt-4 leading-[1.6]">
          The agent evaluates every candidate and routes them to the right
          outcome automatically.
        </p>

        {/* 3 Outcome Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
          
          {/* Card 1 – Strong Candidate */}
          <div className="bg-secondary border border-border rounded-lg p-8 relative overflow-hidden text-left hover:shadow-md hover:-translate-y-1 transition-all duration-200">
            <div className="absolute top-0 left-0 right-0 h-1 bg-green-500 rounded-t-lg" />
            <div className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 border border-green-200/50 rounded-lg px-3 py-1 text-xs font-semibold mb-4">
              Strong Candidate
            </div>
            <CheckCircle className="text-green-600 mb-3" size={32} />
            <p className="text-sm text-slate-500 font-medium mb-4">
              Score &gt; 75
            </p>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li className="flex items-start gap-2 leading-relaxed">
                <CheckCircle className="text-green-600 shrink-0 mt-0.5" size={16} />
                Schedule interview automatically
              </li>
              <li className="flex items-start gap-2 leading-relaxed">
                <CheckCircle className="text-green-600 shrink-0 mt-0.5" size={16} />
                Create Google Calendar event
              </li>
              <li className="flex items-start gap-2 leading-relaxed">
                <CheckCircle className="text-green-600 shrink-0 mt-0.5" size={16} />
                Send personalised invitation email
              </li>
            </ul>
          </div>

          {/* Card 2 – Average Candidate (Elevated "Smart Review" Card) */}
          <div className="bg-secondary border border-accent-gold/40 rounded-lg p-8 relative overflow-hidden text-left shadow-lg ring-1 ring-accent-gold/30 hover:-translate-y-1 transition-all duration-200">
            <div className="absolute top-0 left-0 right-0 h-1 bg-accent-gold rounded-t-lg" />
            <div className="inline-flex items-center gap-1.5 bg-accent-gold/10 text-primary border border-accent-gold/30 rounded-lg px-3 py-1 text-xs font-semibold mb-4">
              Needs Review
            </div>
            <UserCheck className="text-accent-gold mb-3" size={32} />
            <p className="text-sm text-slate-500 font-medium mb-4">
              Score 40–75
            </p>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li className="flex items-start gap-2 leading-relaxed">
                <span className="text-accent-gold font-bold shrink-0">→</span>
                Generate candidate summary
              </li>
              <li className="flex items-start gap-2 leading-relaxed">
                <span className="text-accent-gold font-bold shrink-0">→</span>
                Notify hiring manager
              </li>
              <li className="flex items-start gap-2 leading-relaxed">
                <span className="text-accent-gold font-bold shrink-0">→</span>
                Escalate for human review
              </li>
            </ul>
          </div>

          {/* Card 3 – Weak Candidate */}
          <div className="bg-secondary border border-border rounded-lg p-8 relative overflow-hidden text-left hover:shadow-md hover:-translate-y-1 transition-all duration-200">
            <div className="absolute top-0 left-0 right-0 h-1 bg-slate-400 rounded-t-lg" />
            <div className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-600 border border-slate-200 rounded-lg px-3 py-1 text-xs font-semibold mb-4">
              Not Progressing
            </div>
            <XCircle className="text-slate-500 mb-3" size={32} />
            <p className="text-sm text-slate-500 font-medium mb-4">
              Score &lt; 40
            </p>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li className="flex items-start gap-2 leading-relaxed">
                <span className="text-slate-500 font-bold shrink-0">·</span>
                Generate professional rejection
              </li>
              <li className="flex items-start gap-2 leading-relaxed">
                <span className="text-slate-500 font-bold shrink-0">·</span>
                Send empathetic candidate email
              </li>
              <li className="flex items-start gap-2 leading-relaxed">
                <span className="text-slate-500 font-bold shrink-0">·</span>
                Update pipeline status
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
