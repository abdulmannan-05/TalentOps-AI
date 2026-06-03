import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { HowItWorks } from "@/components/HowItWorks";
import { DecisionEngine } from "@/components/DecisionEngine";
import { HumanInLoop } from "@/components/HumanInLoop";
import { TechStack } from "@/components/TechStack";
import { LiveDemo } from "@/components/LiveDemo";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <DecisionEngine />
        <HumanInLoop />
        <TechStack />
        <LiveDemo />
      </main>
      <Footer />
    </>
  );
}
