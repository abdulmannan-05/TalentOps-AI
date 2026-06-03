import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "TalentOps AI — Autonomous Candidate Screening & Hiring Operations Agent",
  description:
    "AI-powered hiring agent that evaluates candidates, makes role-specific decisions, and automates hiring communication.",
  openGraph: {
    title: "TalentOps AI — Autonomous Candidate Screening & Hiring Operations Agent",
    description:
      "AI-powered hiring agent that evaluates candidates, makes role-specific decisions, and automates hiring communication.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="font-sans bg-background text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
