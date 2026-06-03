You are an expert Next.js developer and UI/UX designer. Build a complete, 
production-quality, deployable Next.js landing page for an AI-powered hiring 
agent called "RaynHire AI".

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROJECT SETUP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Framework: Next.js 14 (App Router)
Styling: Tailwind CSS
Icons: lucide-react
Fonts: Inter (via next/font/google)
Deployment target: Vercel

File structure to generate:
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Problem.tsx
│   ├── HowItWorks.tsx
│   ├── DecisionEngine.tsx
│   ├── HumanInLoop.tsx
│   ├── TechStack.tsx
│   ├── LiveDemo.tsx
│   └── Footer.tsx
├── tailwind.config.ts
├── package.json
└── next.config.ts

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DESIGN SYSTEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Color scheme: LIGHT MODE ONLY
- Background: #FFFFFF (white)
- Surface / card bg: #F8FAFC
- Primary text: #0F172A (dark navy)
- Secondary text: #64748B (slate)
- Accent blue: #2563EB
- Accent light blue: #DBEAFE
- Border: #E2E8F0
- Success green: #16A34A
- Amber warning: #D97706

Typography: Inter (loaded via next/font/google)
- Hero title: 4xl–6xl, font-bold, tracking-tight, text-slate-900
- Section headings: 3xl, font-semibold, text-slate-900
- Body: base–lg, text-slate-600, leading-relaxed

Spacing: generous — sections have py-24 or py-32
Corners: rounded-2xl for cards, rounded-full for badges/pills
Shadows: shadow-sm on cards, shadow-lg on CTAs and hover states

Design references: Stripe, Linear, Vercel, Notion — clean, minimal, 
premium, lots of whitespace. NOT corporate. NOT stock-photo heavy.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ANIMATIONS & INTERACTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use only CSS transitions and Tailwind — no framer-motion or external 
animation libraries (keep bundle lean for Vercel).

- Navbar: backdrop-blur-md bg-white/80 sticky top-0 with border-b on scroll
- Buttons: hover:scale-105 transition-all duration-200, shadow on hover
- Cards: hover:shadow-md hover:-translate-y-1 transition-all duration-200
- Workflow steps: connected with a subtle vertical line using CSS
- Smooth scroll: add scroll-behavior: smooth in globals.css on html element

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 1 — NAVBAR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sticky top navbar, white/blur background, border-bottom on scroll.

Left: Logo — a small blue square icon (CSS/SVG, no image file needed) 
      next to the text "RaynHire" in font-semibold text-slate-900, 
      with " AI" in text-blue-600.

Center nav links (hidden on mobile, show hamburger):
- How It Works (href="#how-it-works")
- Decision Engine (href="#decision-engine") 
- Technology (href="#technology")

Right: Two buttons:
- "Apply — SWE" → opens https://docs.google.com/forms/d/e/1FAIpQLSedoqrbgG4F5kNuwKSn3PzVWIPOvfj2QUrBl7cuMNksLmu7zw/viewform?usp=publish-editor in new tab
- "Apply — BDM" → opens https://docs.google.com/forms/d/e/1FAIpQLSdiPKzR5Tyur_JSPdje4OkeQhOWjMd0SZ9nGgftv8P9JIMncw/viewform?usp=publish-editor in new tab

Style: "Apply — SWE" is outline (border-blue-600 text-blue-600), 
       "Apply — BDM" is filled (bg-blue-600 text-white).
Both buttons: rounded-full px-4 py-2 text-sm font-medium.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 2 — HERO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Full viewport height (min-h-screen), centered content, white background.

Top badge (pill): 
"✦ AI-Powered Hiring Operations" 
Style: bg-blue-50 text-blue-700 border border-blue-200 rounded-full 
px-4 py-1.5 text-sm font-medium inline-flex items-center gap-2

Main title (h1):
Line 1: "Autonomous Candidate"
Line 2: "Screening Agent"
Style: text-5xl md:text-7xl font-bold tracking-tight text-slate-900
       with "Screening Agent" having a text-blue-600 color

Subtitle (p):
"An AI-powered hiring agent that evaluates candidates, makes role-specific 
hiring decisions, automates communication, and escalates uncertain cases 
to human recruiters — without manual intervention."
Style: text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mt-6

Two CTA buttons, centered, mt-10, flex gap-4:
Primary: "Apply as SWE →"
  - bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-3.5 
    font-semibold shadow-lg hover:shadow-blue-200 hover:scale-105 
    transition-all duration-200
  - Opens SWE form URL in new tab

Secondary: "Apply as BDM →"  
  - bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8 py-3.5 
    font-semibold hover:scale-105 transition-all duration-200
  - Opens BDM form URL in new tab

Below buttons, small anchor link:
"↓ See How It Works" — text-slate-400 text-sm hover:text-blue-600 
transition-colors, smooth scrolls to #how-it-works

Below the CTAs, add a clean abstract SVG illustration or geometric 
pattern — a subtle grid of dots or a soft blue radial gradient blob 
(CSS only, no image files). Make it feel like a modern SaaS hero, 
not a stock illustration.

Below that, add a row of 3 trust metrics, centered:
[ ⚡ Evaluates in < 60s ] [ 🎯 Role-Specific Scoring ] [ 🤝 Human Oversight Built-In ]
Style each as a small pill with icon + text, bg-slate-50 border 
border-slate-200 rounded-full px-4 py-2 text-sm text-slate-600

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 3 — THE PROBLEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

id="problem", py-24, bg-slate-50

Top label: "The Problem" — text-blue-600 text-sm font-semibold uppercase 
tracking-widest

Heading: "Hiring Is Still Too Manual"
Style: text-3xl md:text-4xl font-bold text-slate-900 mt-3

Subheading below: 
"Most hiring pipelines depend on human attention at every step. 
That creates bottlenecks, inconsistency, and a poor candidate experience."
Style: text-slate-500 text-lg max-w-2xl mx-auto mt-4

4 pain point cards in a 2x2 grid (grid-cols-1 md:grid-cols-2), mt-16:

Card 1 — Icon: Clock
Title: "Hours Lost to Manual Review"
Body: "Recruiters spend 6–8 hours per week reading through applications 
that could be filtered automatically."

Card 2 — Icon: AlertTriangle  
Title: "Inconsistent Evaluations"
Body: "Human reviewers apply different standards on different days. 
AI applies the same criteria every single time."

Card 3 — Icon: MessageSquareOff
Title: "Slow Candidate Communication"
Body: "Candidates wait days for a response. Delays signal disorganisation 
and damage your employer brand."

Card 4 — Icon: CalendarX
Title: "Scheduling Creates Overhead"
Body: "Coordinating interview slots wastes recruiter time that should 
be spent on high-value conversations."

Card style: bg-white border border-slate-200 rounded-2xl p-8 
hover:shadow-md hover:-translate-y-1 transition-all duration-200
Icon: wrapped in bg-red-50 rounded-xl p-3, icon color text-red-500, size 24

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 4 — HOW IT WORKS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

id="how-it-works", py-24, bg-white

Top label: "How It Works" — text-blue-600 text-sm font-semibold uppercase 
tracking-widest

Heading: "From Application to Decision — Fully Automated"

Build a vertical step-by-step workflow diagram.
Each step is a row: [number circle] [content] connected by a vertical 
dashed line between steps.

Steps:
1. "Application Submitted"
   Icon: FileText
   "Candidate submits via role-specific Google Form. 
   Data is captured instantly into the pipeline."

2. "Resume Retrieved"
   Icon: Download
   "The agent fetches the resume file from Google Drive 
   using the uploaded file link."

3. "AI Evaluation"
   Icon: Cpu
   "Google Gemini evaluates the resume against role-specific 
   criteria — technical depth for SWE, sales track record for BDM."

4. "Decision Engine"
   Icon: GitBranch
   "The agent classifies the candidate as Strong, Average, or Weak 
   based on score thresholds and generates a structured assessment."

5. "Automated Action"
   Icon: Zap
   "The correct action fires automatically: interview scheduled, 
   manager alerted, or professional rejection sent."

Step number circles: bg-blue-600 text-white rounded-full w-10 h-10 
flex items-center justify-center font-bold text-sm
Connector line: a dashed vertical line (border-l-2 border-dashed 
border-blue-200 ml-5 h-12) between each step
Content: ml-6 with title in font-semibold text-slate-900 and body 
in text-slate-500 text-sm

Layout: max-w-2xl mx-auto (keep it narrow and focused)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 5 — DECISION ENGINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

id="decision-engine", py-24, bg-slate-50

Top label: "Decision Engine"
Heading: "Three Outcomes. Zero Manual Effort."
Subheading: "The agent evaluates every candidate and routes them 
to the right outcome automatically."

3 cards in a grid (grid-cols-1 md:grid-cols-3), mt-16, gap-6:

CARD 1 — STRONG CANDIDATE
Top accent: a full-width strip at the top of card, bg-green-500, h-1.5, 
rounded-t-2xl
Badge: "Strong Candidate" — bg-green-50 text-green-700 border-green-200
Icon: CheckCircle (text-green-500, size 32) 
Score range shown: "Score 70–100"
Actions list (with check icons):
  ✓ Schedule interview automatically
  ✓ Create Google Calendar event  
  ✓ Send personalised invitation email
Card style: bg-white border border-slate-200 rounded-2xl p-8 
relative overflow-hidden

CARD 2 — AVERAGE CANDIDATE
Top accent strip: bg-amber-400
Badge: "Needs Review" — bg-amber-50 text-amber-700 border-amber-200
Icon: UserCheck (text-amber-500, size 32)
Score range: "Score 40–69"
Actions:
  → Generate candidate summary
  → Notify hiring manager
  → Escalate for human review
This card should be slightly elevated (shadow-lg) and have a subtle 
ring ring-amber-200 to make it visually prominent as the "interesting" case.

CARD 3 — WEAK CANDIDATE
Top accent strip: bg-slate-300
Badge: "Not Progressing" — bg-slate-100 text-slate-600 border-slate-200
Icon: XCircle (text-slate-400, size 32)
Score range: "Score 0–39"
Actions:
  · Generate professional rejection
  · Send empathetic candidate email
  · Update pipeline status

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 6 — HUMAN IN THE LOOP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

id="human-in-loop", py-24, bg-white

Top label: "Human Oversight"
Heading: "Autonomous When Confident."
Heading line 2: "Human When Needed."
Subheading: "The agent handles the majority of candidate screening 
autonomously while escalating uncertain or borderline cases to human 
recruiters. Efficiency without sacrificing control."

Below, a clean two-column visual (flex on desktop, stacked on mobile):

LEFT COLUMN — "AI Handles" list:
bg-blue-50 border border-blue-100 rounded-2xl p-8
Title: "Agent Operates Independently"
Items with blue check icons:
  ✓ Strong candidates (score ≥ 70) — fully automated
  ✓ Weak candidates (score < 40) — automated rejection
  ✓ Resume analysis and scoring
  ✓ Calendar event creation
  ✓ Candidate email communication

RIGHT COLUMN — "Human Handles" list:
bg-amber-50 border border-amber-100 rounded-2xl p-8
Title: "Recruiter Steps In"  
Items with amber icons:
  → Borderline candidates (score 40–69)
  → Edge cases flagged by the agent
  → Final interview decisions
  → Offer stage conversations
  → Strategic hiring decisions

Between them, a small centered badge/arrow element showing 
"Smart Handoff" — acts as a visual bridge between the two columns.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 7 — TECHNOLOGY STACK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

id="technology", py-24, bg-slate-50

Top label: "Infrastructure"
Heading: "Built With Modern Automation Infrastructure"
Subheading: "Every component of the stack is purpose-selected 
for reliability, speed, and zero infrastructure maintenance."

Display 7 tech cards in a responsive grid (grid-cols-2 md:grid-cols-4):

Each card: bg-white border border-slate-200 rounded-2xl p-6 
text-center hover:shadow-md hover:-translate-y-1 transition-all duration-200
flex flex-col items-center gap-3

Cards (use emoji or simple colored SVG icon + name + short role):

1. Make.com — 🔄 — "Workflow Orchestration"
2. Google Forms — 📋 — "Application Intake"  
3. Google Sheets — 📊 — "Candidate Database"
4. Google Drive — 💾 — "Resume Storage"
5. Gemini 2.5 Flash — ✦ — "AI Evaluation Engine"  
   (make this card slightly special: border-blue-200 bg-blue-50)
6. Gmail — ✉️ — "Candidate Communication"
7. Google Calendar — 📅 — "Interview Scheduling"

Icon area: text-3xl or a simple colored rounded square
Name: font-semibold text-slate-900 text-sm
Role: text-xs text-slate-500

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 8 — LIVE DEMO CTA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

py-32, bg-gradient-to-br from-blue-600 to-blue-800
(this is the ONLY dark section — makes it stand out as the CTA)

All text white.

Centered content, max-w-3xl mx-auto:

Small badge: "Live Demo" — bg-white/20 text-white rounded-full px-4 py-1 
text-sm backdrop-blur-sm border border-white/30

Heading: "Experience The Hiring Agent"
Style: text-4xl md:text-5xl font-bold text-white

Body: "Submit a real application and watch the agent process, 
evaluate, and route your profile automatically. 
Two roles available — Software Engineer or Business Development Manager."
Style: text-blue-100 text-lg mt-6 max-w-xl mx-auto

Two buttons, centered, mt-10, flex gap-4 flex-wrap justify-center:

Button 1: "Apply as Software Engineer →"
  bg-white text-blue-600 hover:bg-blue-50 rounded-full px-8 py-4 
  font-semibold shadow-lg hover:scale-105 transition-all duration-200
  Opens: https://docs.google.com/forms/d/e/1FAIpQLSedoqrbgG4F5kNuwKSn3PzVWIPOvfj2QUrBl7cuMNksLmu7zw/viewform?usp=publish-editor

Button 2: "Apply as BDM →"
  bg-blue-500 hover:bg-blue-400 text-white border border-white/30 
  rounded-full px-8 py-4 font-semibold hover:scale-105 
  transition-all duration-200
  Opens: https://docs.google.com/forms/d/e/1FAIpQLSdiPKzR5Tyur_JSPdje4OkeQhOWjMd0SZ9nGgftv8P9JIMncw/viewform?usp=publish-editor

Below buttons: small text
"No login required · Responses processed automatically · 
Powered by Gemini 2.5 Flash"
Style: text-blue-200 text-sm mt-6

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 9 — FOOTER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

bg-slate-900 text-white py-16

Left column:
  Logo: same as navbar (white version)
  Tagline: "AI Hiring Operations Agent"
  Sub: "Autonomous screening. Human oversight."
  Style: text-slate-400 text-sm mt-2

Right column — links in a row:
  About · Architecture · Contact
  Style: text-slate-400 hover:text-white text-sm transition-colors

Bottom divider, then below:
Left: "© 2025 RaynHire AI. Built by Abdul Mannan."
Right: "Built as an autonomous workflow automation project 
using AI-powered decision making."
Style: text-slate-500 text-xs

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TECHNICAL REQUIREMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. All external links open in target="_blank" rel="noopener noreferrer"

2. Navbar scroll behavior:
   Use a useEffect + window scroll listener to add a shadow/border 
   to the navbar after scrolling 10px.

3. Mobile hamburger menu:
   Simple useState toggle, shows vertical nav links + both Apply buttons.
   Close on link click.

4. SEO meta tags in layout.tsx:
   title: "RaynHire AI — Autonomous Candidate Screening Agent"
   description: "AI-powered hiring agent that evaluates candidates, 
   makes role-specific decisions, and automates hiring communication."
   og:title, og:description, og:type: website

5. globals.css:
   html { scroll-behavior: smooth; }
   Import Inter from next/font/google with weights 400, 500, 600, 700
   Apply font as CSS variable to body

6. package.json must include:
   next: 14.x, react: 18.x, react-dom: 18.x,
   tailwindcss, autoprefixer, postcss,
   lucide-react, typescript, @types/react, @types/node

7. tailwind.config.ts:
   Extend colors with the exact palette above.
   fontFamily.sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans]
   Content paths: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}']

8. next.config.ts: minimal, no special config needed.

9. Every component must be a named export (not default-only) 
   and typed with TypeScript interfaces where props exist.

10. No placeholder images — use CSS, SVG, emoji, or lucide-react icons 
    for all visual elements. Zero external image dependencies.

11. The code must run with:
    npm install
    npm run dev
    And deploy to Vercel with zero configuration changes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FORM URLs (hardcoded — do not use placeholders)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SWE Form:
https://docs.google.com/forms/d/e/1FAIpQLSedoqrbgG4F5kNuwKSn3PzVWIPOvfj2QUrBl7cuMNksLmu7zw/viewform?usp=publish-editor

BDM Form:
https://docs.google.com/forms/d/e/1FAIpQLSdiPKzR5Tyur_JSPdje4OkeQhOWjMd0SZ9nGgftv8P9JIMncw/viewform?usp=publish-editor

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DELIVERABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Generate every file in full — no "..." truncations, no "add your code 
here" comments. Every file must be complete and immediately runnable.

Output files in this order:
1. package.json
2. tailwind.config.ts
3. next.config.ts
4. app/globals.css
5. app/layout.tsx
6. components/Navbar.tsx
7. components/Hero.tsx
8. components/Problem.tsx
9. components/HowItWorks.tsx
10. components/DecisionEngine.tsx
11. components/HumanInLoop.tsx
12. components/TechStack.tsx
13. components/LiveDemo.tsx
14. components/Footer.tsx
15. app/page.tsx

After all files, output a DEPLOYMENT GUIDE:
- npm install
- npm run dev (local preview)
- Push to GitHub
- Import repo in vercel.com
- Deploy with zero config
- The live URL will be ready in ~60 seconds