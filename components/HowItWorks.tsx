import { FileText, Download, Cpu, GitBranch, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Step {
  number: number;
  title: string;
  icon: LucideIcon;
  description: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Application Submitted",
    icon: FileText,
    description:
      "Candidate submits via role-specific Google Form. Data is captured instantly into the pipeline.",
  },
  {
    number: 2,
    title: "Resume Retrieved",
    icon: Download,
    description:
      "The agent fetches the resume file from Google Drive using the uploaded file link.",
  },
  {
    number: 3,
    title: "AI Evaluation",
    icon: Cpu,
    description:
      "Google Gemini evaluates the resume against role-specific criteria — technical depth for SWE, sales track record for BDM.",
  },
  {
    number: 4,
    title: "Decision Engine",
    icon: GitBranch,
    description:
      "The agent classifies the candidate as Strong, Average, or Weak based on score thresholds and generates a structured assessment.",
  },
  {
    number: 5,
    title: "Automated Action",
    icon: Zap,
    description:
      "The correct action fires automatically: interview scheduled, manager alerted, or professional rejection sent.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest">
          How It Works
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">
          From Application to Decision — Fully Automated
        </h2>
      </div>

      <div className="max-w-2xl mx-auto mt-16 px-4">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div key={step.number}>
              <div className="flex items-start gap-6">
                {/* Number circle */}
                <div className="shrink-0 bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm">
                  {step.number}
                </div>

                {/* Content */}
                <div className="pb-2">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className="text-blue-600" size={18} />
                    <h3 className="font-semibold text-slate-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connector line */}
              {idx < steps.length - 1 && (
                <div className="border-l-2 border-dashed border-blue-200 ml-5 h-12" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
