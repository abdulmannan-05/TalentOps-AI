<div align="center">

<br/>

# TalentOps AI

### Autonomous Candidate Screening & Hiring Operations Agent

<br/>

[![Live Demo](https://img.shields.io/badge/Live%20Demo-talentops.vercel.app-2563EB?style=for-the-badge&logo=vercel&logoColor=white)](https://talentops.vercel.app)
[![Apply — SWE](https://img.shields.io/badge/Apply%20Now-Software%20Engineer-16A34A?style=for-the-badge&logo=google&logoColor=white)](https://docs.google.com/forms/d/e/1FAIpQLSedoqrbgG4F5kNuwKSn3PzVWIPOvfj2QUrBl7cuMNksLmu7zw/viewform?usp=publish-editor)
[![Apply — BDM](https://img.shields.io/badge/Apply%20Now-Business%20Dev%20Manager-D97706?style=for-the-badge&logo=google&logoColor=white)](https://docs.google.com/forms/d/e/1FAIpQLSdiPKzR5Tyur_JSPdje4OkeQhOWjMd0SZ9nGgftv8P9JIMncw/viewform?usp=publish-editor)

<br/>

> **TalentOps AI** is a fully autonomous hiring operations agent that ingests applications, evaluates resumes with role-specific AI criteria, makes classification decisions, automates candidate communication, schedules interviews, and escalates borderline cases to human recruiters — without any manual intervention.

<br/>

---

</div>

## Table of Contents

- [Overview](#overview)
- [How It Works](#how-it-works)
- [Agent Decision Engine](#agent-decision-engine)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Database Schema](#database-schema)
- [Scenario Breakdown](#scenario-breakdown)
- [Human-in-the-Loop Design](#human-in-the-loop-design)
- [Resilience & Error Handling](#resilience--error-handling)
- [Apply Now](#apply-now)
- [Author](#author)

---

## Overview

Most hiring pipelines still rely on humans at every step — reading every CV, sending every email, booking every interview. That creates bottlenecks, inconsistency, and delays that frustrate both recruiters and candidates.

**TalentOps AI eliminates the manual layer entirely** for everything the system is confident about, and surfaces only the genuinely ambiguous cases for human review.

The agent handles two active roles simultaneously:

| Role | Application Form |
|---|---|
| 🧑‍💻 Software Engineer (SWE) | [Apply Here](https://docs.google.com/forms/d/e/1FAIpQLSedoqrbgG4F5kNuwKSn3PzVWIPOvfj2QUrBl7cuMNksLmu7zw/viewform?usp=publish-editor) |
| 💼 Business Development Manager (BDM) | [Apply Here](https://docs.google.com/forms/d/e/1FAIpQLSdiPKzR5Tyur_JSPdje4OkeQhOWjMd0SZ9nGgftv8P9JIMncw/viewform?usp=publish-editor) |

---

## How It Works

```
Candidate Submits Application
           │
           ▼
  ┌─────────────────┐
  │  Google Form    │  ← Role-specific form (SWE or BDM)
  └────────┬────────┘
           │
           ▼
  ┌─────────────────┐
  │ Scenario 1      │  ← Intake & normalisation
  │ Intake Pipeline │     Deduplication by email
  └────────┬────────┘     Insert into Master DB
           │                status = NEW
           ▼
  ┌─────────────────┐
  │ Scenario 2      │  ← Download resume from Google Drive
  │ AI Screening    │     Send to Gemini 2.5 Flash
  └────────┬────────┘     Role-specific evaluation prompt
           │               Parse structured JSON response
           │               status = AI_COMPLETED
           ▼
     ┌─────┴──────┐
     │            │
  Score > 75   Score 40–75   Score < 40
  STRONG       AVERAGE       WEAK
     │            │            │
     ▼            ▼            ▼
  Schedule     Notify       Send soft
  interview    hiring       rejection
  + Calendar   manager      email
  event        for review
     │            │            │
     └────────────┴────────────┘
                  │
                  ▼
         ┌─────────────────┐
         │  Scenario 3     │  ← Communication & Scheduling
         │  Comm Engine    │     Runs on independent schedule
         └─────────────────┘     status = SENT_*
```

---

## Agent Decision Engine

The agent classifies every candidate into one of three outcomes and fires the appropriate action — automatically.

### 🟢 Strong Candidate `Score > 75`

| Action | Method |
|--------|--------|
| Schedule interview slot | Google Calendar API |
| Add candidate as attendee | Calendar invite sent to their email |
| Send personalised invitation | Gmail — HTML formatted |
| Update pipeline status | Master Sheet → `SENT_INTERVIEW` |

### 🟡 Average Candidate `Score 40–75`

| Action | Method |
|--------|--------|
| Generate candidate summary | Gemini output written to Master Sheet |
| Notify hiring manager | Gmail — internal alert with AI summary |
| Escalate for human review | Communication status → `SENT_REVIEW` |
| Candidate receives no email | Human decides next step |

### 🔴 Weak Candidate `Score 0–39`

| Action | Method |
|--------|--------|
| Generate professional rejection | Gemini-drafted, personalised by name + role |
| Send empathetic rejection email | Gmail — warm, encouraging tone |
| Update pipeline status | Master Sheet → `SENT_REJECTION` |

---

## Architecture

TalentOps AI is built as **three decoupled automation scenarios** on Make.com, coordinated through a central Google Sheet acting as a state machine.

```
┌──────────────────────────────────────────────────────────────┐
│                    MASTER GOOGLE SHEET                        │
│              Central Database & State Machine                 │
│                                                              │
│  processing_status:   NEW → AI_COMPLETED → ERROR            │
│  communication_status: PENDING → SENT_INTERVIEW              │
│                                  SENT_REVIEW                 │
│                                  SENT_REJECTION              │
└──────────┬───────────────────┬───────────────────┬──────────┘
           │                   │                   │
    reads/writes         reads/writes         reads/writes
           │                   │                   │
    ┌──────┴──────┐    ┌───────┴──────┐    ┌──────┴──────┐
    │ Scenario 1  │    │  Scenario 2  │    │ Scenario 3  │
    │   Intake    │    │ AI Screening │    │   Comms &   │
    │  Pipeline   │    │   Engine     │    │ Scheduling  │
    └─────────────┘    └──────────────┘    └─────────────┘
    Runs: on demand    Runs: on demand     Runs: scheduled
    Reads: SWE sheet   Reads: status=NEW   Reads: AI_COMPLETED
           BDM sheet   Writes: AI results         + PENDING
    Writes: NEW rows   Uses: Gemini API    Writes: SENT_* status
```

**Why three scenarios instead of one?**

A monolithic workflow is brittle. If resume download fails for candidate 3, it blocks candidates 4–10 from being processed. Decoupling means:
- Each layer fails and recovers independently
- Communication is never blocked by a slow AI call
- Each scenario can be rescheduled, debugged, and extended in isolation

---

## Tech Stack

| Tool | Role |
|------|------|
| **Make.com** | Workflow orchestration — all three automation scenarios |
| **Google Forms** | Application intake — separate forms for SWE and BDM |
| **Google Sheets** | Central candidate database and pipeline state machine |
| **Google Drive** | Resume file storage — files uploaded via Google Form |
| **Gemini 2.5 Flash** | AI evaluation engine — role-specific resume scoring |
| **Gmail** | All candidate and recruiter email communication |
| **Google Calendar** | Interview scheduling — events created with candidate as attendee |
| **Next.js + Tailwind** | Landing page — deployed on Vercel |

---

## Database Schema

The Master Google Sheet stores every candidate record with 24 columns:

```
candidate_id            — Unique ID: {ROLE}_{TIMESTAMP}_{RANDOM}
application_timestamp   — ISO timestamp of form submission
role                    — SWE or BDM
full_name               — Normalised from source sheet
email                   — Used for deduplication
phone                   — If submitted
resume_drive_url        — Google Drive file URL from form response
resume_file_id          — Extracted file ID for Drive API download
resume_text             — Extracted plain-text content of resume
ai_score                — 0–100 score from Gemini
ai_classification       — strong / average / weak
ai_summary              — 2–3 sentence evaluation summary
strengths               — Key strengths identified by AI
concerns                — Gaps or concerns flagged by AI
interview_recommendation — Yes / No from AI
processing_status       — Pipeline state flag
communication_status    — Communication state flag
calendar_status         — CREATED or blank
source_sheet            — Which form sheet record originated from
last_updated            — Timestamp of most recent status change
error_message           — Error detail if processing failed
experience_years        — Years of experience parsed by AI
raw_application_data    — Original form row as JSON (audit trail)
professional_profile_url — LinkedIn or portfolio URL if submitted
```

---

## Scenario Breakdown

### Scenario 1 — Candidate Intake Pipeline

```
Trigger (scheduled)
    │
    ├── SWE Path ──→ Read SWE Form Sheet (filter: Processed = empty)
    │                    │
    │               Normalise columns → unified schema
    │                    │
    │               Generate candidate_id
    │                    │
    │               Check for duplicate email in Master Sheet
    │                    │
    │               Insert new row (status = NEW, comm = PENDING)
    │                    │
    │               Mark source row as PROCESSED
    │
    └── BDM Path ──→ Same logic, different source sheet & column map
```

**Key decisions:**
- Deduplication is email-based — safe to run multiple times
- Batch limit of 10 per run prevents timeout on large volumes
- Source rows are stamped immediately so re-runs never double-insert

---

### Scenario 2 — AI Resume Screening Engine

```
Trigger (scheduled)
    │
Fetch candidates where processing_status = NEW (max 10)
    │
Download resume from Google Drive (file ID parsed from Drive URL)
    │
    ├── SWE Role ──→ Gemini prompt: technical skills, system design,
    │                               languages, project complexity,
    │                               problem-solving depth
    │
    └── BDM Role ──→ Gemini prompt: sales track record, revenue history,
                                    market knowledge, relationship mgmt,
                                    growth mindset, communication signals
    │
Parse JSON response (strip markdown fences if present)
    │
Write back: ai_score, ai_classification, ai_summary,
            strengths, concerns, interview_recommendation,
            experience_years, processing_status = AI_COMPLETED
    │
On failure: processing_status = ERROR, error_message = detail
```

**Gemini response format (strict JSON):**
```json
{
  "score": 82,
  "classification": "strong",
  "summary": "Experienced backend engineer with strong Python and distributed systems background.",
  "strengths": ["5 years Python", "Microservices at scale", "Open source contributor"],
  "concerns": ["No mobile experience", "Limited frontend exposure"],
  "interview_recommendation": "Yes",
  "experience_years": 5
}
```

---

### Scenario 3 — Communication & Scheduling Engine

```
Trigger (independent schedule)
    │
Fetch candidates where:
  processing_status = AI_COMPLETED
  AND communication_status = PENDING
    │
    ├── STRONG (>75) ──→ Create Google Calendar event
    │                         (candidate added as attendee)
    │                    Send HTML interview invitation email
    │                    Update: comm_status = SENT_INTERVIEW
    │                            calendar_status = CREATED
    │
    ├── AVERAGE (40–75) → Send internal alert to hiring manager
    │                         (includes AI summary + score)
    │                    Update: comm_status = SENT_REVIEW
    │                    (no email to candidate at this stage)
    │
    └── WEAK (<40) ────→ Send soft rejection email to candidate
                         Update: comm_status = SENT_REJECTION
```

**Why communication runs separately:**

Email delivery is never blocked by AI processing speed. If Scenario 2 takes longer than expected, Scenario 3 simply finds no PENDING candidates and exits gracefully. The two concerns — evaluation and communication — are completely independent.

---

## Human-in-the-Loop Design

TalentOps AI is designed with a deliberate philosophy: **automate what is clear, escalate what is not.**

```
AI Evaluation Complete
         │
    ┌────┴────┐
    │  Score  │
    └────┬────┘
         │
    > 75 ─────────────────→ AUTOMATIC ACTION
    (confident strong)        Interview scheduled
                              No human needed
         │
    40–75 ────────────────→ HUMAN REVIEW
    (borderline)              Hiring manager alerted
                              Human makes the call
         │
    < 40 ─────────────────→ AUTOMATIC ACTION
    (confident weak)          Rejection sent
                              No human needed
```

The agent only fires autonomous actions when it is confident. Every ambiguous case lands in a human inbox. This prevents the most costly failure mode of hiring automation: confidently making the wrong call on a borderline candidate.

---

## Resilience & Error Handling

| Scenario | Resilience Mechanism |
|----------|---------------------|
| **Empty runs** | `filterRows` returns zero results → scenario exits cleanly, no errors |
| **Deduplication** | Email match check before every insert → safe to re-run infinitely |
| **Batch limits** | Max 10 records per scenario run → no timeouts on high volume |
| **AI parse failure** | Markdown fences stripped before JSON parse → fallback to `ERROR` status with message logged |
| **Communication idempotency** | Filter on `PENDING` only → candidates already contacted never receive duplicate emails |
| **Drive download failure** | Error caught → `processing_status = ERROR`, `error_message` populated for review |

---

## Apply Now

Experience the agent live — submit an application and watch the pipeline process, evaluate, and route your profile automatically.

| Role | Form Link |
|------|-----------|
| 🧑‍💻 Software Engineer | [Submit Application →](https://docs.google.com/forms/d/e/1FAIpQLSedoqrbgG4F5kNuwKSn3PzVWIPOvfj2QUrBl7cuMNksLmu7zw/viewform?usp=publish-editor) |
| 💼 Business Development Manager | [Submit Application →](https://docs.google.com/forms/d/e/1FAIpQLSdiPKzR5Tyur_JSPdje4OkeQhOWjMd0SZ9nGgftv8P9JIMncw/viewform?usp=publish-editor) |

> **What happens after you submit:**
> 1. Your application lands in the pipeline within seconds
> 2. Scenario 1 ingests and normalises your record
> 3. Scenario 2 downloads your resume and sends it to Gemini for evaluation
> 4. Scenario 3 routes you to the correct outcome and sends the appropriate email
>
> The entire process runs without any human touching your application — unless you score in the 40–75 range, in which case a human recruiter will review your profile.

---

## Author

**Abdul Mannan**
n8n Automation Developer · AI Workflow Architect

> *Built as an autonomous workflow automation project using AI-powered decision making for the Trilles AI practical assignment.*

---

<div align="center">

**TalentOps AI** · Autonomous Candidate Screening & Hiring Operations Agent

*Evaluates in under 60 seconds · Role-specific scoring · Human oversight built in*

</div>
