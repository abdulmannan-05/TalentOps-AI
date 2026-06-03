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
    <section id="how-it-works" className="py-24 bg-secondary border-t border-accent-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Label */}
        <p className="text-accent-gold text-sm font-semibold uppercase tracking-widest">
          How It Works
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 tracking-tight">
          From Application to Decision — Fully Automated
        </h2>
      </div>

      {/* Step Diagram */}
      <div className="max-w-2xl mx-auto mt-16 px-4">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div key={step.number}>
              <div className="flex items-start gap-6">
                {/* Number circle (Aurelian dossier-styled block) */}
                <div className="shrink-0 bg-primary text-secondary border border-accent-gold/40 rounded-lg w-10 h-10 flex items-center justify-center font-bold text-sm shadow-sm">
                  {step.number}
                </div>

                {/* Content */}
                <div className="pb-2">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className="text-accent-gold" size={18} />
                    <h3 className="font-semibold text-primary">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-[1.6]">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connector line (Delicate gold-accented dashed line) */}
              {idx < steps.length - 1 && (
                <div className="border-l border-dashed border-accent-gold/40 ml-[19px] h-12 my-1" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
