import { CheckCircle, UserCheck, XCircle } from "lucide-react";

export function DecisionEngine() {
  return (
    <section id="decision-engine" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest">
          Decision Engine
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">
          Three Outcomes. Zero Manual Effort.
        </h2>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
          The agent evaluates every candidate and routes them to the right
          outcome automatically.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {/* Card 1 – Strong Candidate */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 relative overflow-hidden text-left hover:shadow-md hover:-translate-y-1 transition-all duration-200">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-green-500 rounded-t-2xl" />
            <div className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 border border-green-200 rounded-full px-3 py-1 text-xs font-semibold mb-4">
              Strong Candidate
            </div>
            <CheckCircle className="text-green-500 mb-3" size={32} />
            <p className="text-sm text-slate-500 font-medium mb-4">
              Score 70–100
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={16} />
                Schedule interview automatically
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={16} />
                Create Google Calendar event
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={16} />
                Send personalised invitation email
              </li>
            </ul>
          </div>

          {/* Card 2 – Average Candidate */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 relative overflow-hidden text-left shadow-lg ring ring-amber-200 hover:-translate-y-1 transition-all duration-200">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-amber-400 rounded-t-2xl" />
            <div className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 border border-amber-200 rounded-full px-3 py-1 text-xs font-semibold mb-4">
              Needs Review
            </div>
            <UserCheck className="text-amber-500 mb-3" size={32} />
            <p className="text-sm text-slate-500 font-medium mb-4">
              Score 40–69
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-amber-500 shrink-0">→</span>
                Generate candidate summary
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 shrink-0">→</span>
                Notify hiring manager
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 shrink-0">→</span>
                Escalate for human review
              </li>
            </ul>
          </div>

          {/* Card 3 – Weak Candidate */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 relative overflow-hidden text-left hover:shadow-md hover:-translate-y-1 transition-all duration-200">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-slate-300 rounded-t-2xl" />
            <div className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-600 border border-slate-200 rounded-full px-3 py-1 text-xs font-semibold mb-4">
              Not Progressing
            </div>
            <XCircle className="text-slate-400 mb-3" size={32} />
            <p className="text-sm text-slate-500 font-medium mb-4">
              Score 0–39
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-slate-400 shrink-0">·</span>
                Generate professional rejection
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400 shrink-0">·</span>
                Send empathetic candidate email
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400 shrink-0">·</span>
                Update pipeline status
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
