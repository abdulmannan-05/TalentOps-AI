import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

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
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
