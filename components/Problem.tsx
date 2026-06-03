import { Clock, AlertTriangle, MessageSquareOff, CalendarX } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface PainPoint {
  icon: LucideIcon;
  title: string;
  body: string;
}

const painPoints: PainPoint[] = [
  {
    icon: Clock,
    title: "Hours Lost to Manual Review",
    body: "Recruiters spend 6–8 hours per week reading through applications that could be filtered automatically.",
  },
  {
    icon: AlertTriangle,
    title: "Inconsistent Evaluations",
    body: "Human reviewers apply different standards on different days. AI applies the same criteria every single time.",
  },
  {
    icon: MessageSquareOff,
    title: "Slow Candidate Communication",
    body: "Candidates wait days for a response. Delays signal disorganisation and damage your employer brand.",
  },
  {
    icon: CalendarX,
    title: "Scheduling Creates Overhead",
    body: "Coordinating interview slots wastes recruiter time that should be spent on high-value conversations.",
  },
];

export function Problem() {
  return (
    <section id="problem" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest">
          The Problem
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">
          Hiring Is Still Too Manual
        </h2>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
          Most hiring pipelines depend on human attention at every step. That
          creates bottlenecks, inconsistency, and a poor candidate experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 max-w-4xl mx-auto">
          {painPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className="bg-white border border-slate-200 rounded-2xl p-8 text-left hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <div className="bg-red-50 rounded-xl p-3 w-fit">
                  <Icon className="text-red-500" size={24} />
                </div>
                <h3 className="font-semibold text-slate-900 text-lg mt-4">
                  {point.title}
                </h3>
                <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                  {point.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
