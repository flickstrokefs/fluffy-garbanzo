## 🌐 Platform Architecture & Deployment

### 🌍 Web Platform

* The **Project Nexus website is hosted on** **Firebase**

  * Firebase Hosting for deployment
  * Firebase Authentication for user management
  * Firestore for real-time data sync between modules

This ensures:

* Fast global delivery
* Secure authentication
* Seamless real-time updates across the ecosystem

---

### 🔗 Codebase & Integration Requirements

* The **Git-based codebase** is designed to work with:

  * **Supabase** as the primary backend layer

    * Database
    * Auth
    * Edge functions
  * **Next.js** for:

    * Server-side rendering (SSR)
    * API routes
    * Scalable frontend architecture

### ⚠️ Important Note

> To run the project locally or extend it beyond Glide, the Git repository **must be connected to Supabase and a Next.js environment**.

Without this connection:

* Backend services won’t initialize
* Auth and database calls will fail
* AI and ecosystem workflows won’t activate correctly

---

### 🧩 Architecture Philosophy (Why Both Firebase & Supabase?)

* **Firebase** → rapid deployment, real-time sync, Glide compatibility
* **Supabase + Next.js** → scalability, developer control, production-grade web stack

This hybrid approach allows Project Nexus to evolve from:

> *Low-code MVP → full-scale intelligent campus platform*

---

# 🧠 Project Nexus

**An AI-Powered Smart Campus Ecosystem**

Project Nexus is an **AI-driven campus operating system** designed to unify **academics, student life, wellness, and services** into a single modular platform.
It follows an **ecosystem-first architecture**, where data generated in one module continuously strengthens intelligence across the platform.

---

## 🌐 Vision

To build a **living digital campus** where:

* Academic performance, wellbeing, and daily life are interconnected
* AI provides **context-aware insights**, not just raw data
* Students gain clarity, balance, and actionable guidance

---

## 🧱 Core Pillars (Modules)

| Pillar                   | Description                                                  |
| ------------------------ | ------------------------------------------------------------ |
| **The Daily Pulse**      | Real-time campus updates, nutrition & wellness intelligence  |
| **The Student Exchange** | Peer-to-peer services, collaboration, and feedback           |
| **The Explorer’s Guide** | Location-aware discovery & smart navigation                  |
| **The Academic Cockpit** | Academic tracking, CGPA intelligence & performance analytics |

---

## ✨ Feature Set (Updated)

---

## 1️⃣ The Daily Pulse

**Your campus, decoded daily**

### 🍽 Live Mess Menu (Enhanced)

* Daily mess menu
* **Calorie breakdown per item**
* Nutritional tagging (high-protein, light, junk, balanced)

### 🧮 Calorie-Aware Intelligence

* Meal data feeds into:

  * Emotional wellbeing insights
  * Academic stress nudges
  * Lifestyle balance recommendations

### ✉️ AI Mail Summarizer

* Summarizes institutional emails
* Extracts:

  * Deadlines
  * Required actions
  * Priority levels

### 💚 Emotional Wellbeing Signals

* Passive wellness insights based on:

  * Academic load
  * Attendance patterns
  * Meal consistency
* Non-clinical, **supportive nudges**, not diagnosis

---

## 2️⃣ The Student Exchange

**By students, for students**

* Lost & Found
* Buy / Sell Marketplace
* Cab Pooling & Travel Sharing
* Community posts & collaboration boards

### 🗣 Feedback Loop (New)

* Anonymous or open feedback on:

  * Courses
  * Facilities
  * Events
* Aggregated sentiment → admin insights
* Feedback trends influence:

  * Academic intelligence
  * Campus recommendations

---

## 3️⃣ The Explorer’s Guide

**Navigate campus intelligently**

* Nearby Hub

  * Labs, libraries, food, events
* Smart Navigation

  * AI-suggested routes based on:

    * Timetable gaps
    * Crowd patterns
    * Student preferences

---

## 4️⃣ The Academic Cockpit (Upgraded)

**Your academic control center**

### 📅 Live Timetable

* Real-time schedule
* Smart reminders

### 📚 LMS Lite

* Assignments
* Course materials
* Submission tracking

### 📊 Academic Intelligence Engine

* **CGPA Tracking**

  * Semester-wise & cumulative CGPA
  * Trend visualization
* **Attendance Intelligence**

  * Subject-wise attendance
  * Risk alerts for low attendance
* **Performance Analysis**

  * Strength / weakness detection
  * Study strategy suggestions

---

## 🧠 Cross-Module Intelligence (What Makes Nexus Different)

| Data Source          | Feeds Into                       |
| -------------------- | -------------------------------- |
| Attendance + CGPA    | Stress & burnout signals         |
| Mess calories        | Wellness & productivity insights |
| Academic load        | Emotional wellbeing nudges       |
| Feedback trends      | Campus service optimization      |
| Location + timetable | Smart navigation & suggestions   |

> **Every feature is both a data producer and an intelligence consumer.**

---

## 🛠 Tech Stack

### Frontend

* Glide (Low-code)
* PWA-style experience

### Backend & Orchestration

* Make.com (Logic + AI workflows)
* Firebase (Auth + Firestore)
* Webhooks (Real-time communication)

### AI / ML

* Google Gemini API
* OpenAI API (interchangeable)
* Prompt-driven intelligence pipelines

### Database

* Firebase Firestore
* Google Sheets (rapid prototyping)

---

## 🔄 AI Workflow Examples

### ✉️ Mail Summarizer

**Input:** Institutional email
**Output:**

* Summary
* Action items
* Deadlines
* Priority tag

---

### 📊 Academic Intelligence

**Input:** CGPA, attendance, timetable
**Output:**

* Performance trends
* Risk alerts
* Personalized academic guidance

---

### 💚 Emotional Wellbeing (Non-Intrusive)

**Signals Used:**

* Missed classes
* Academic overload
* Irregular meals

**Output:**

* Gentle wellness nudges
* Balance suggestions
* Study-life alignment tips

---

## 🚀 Current Status

* ✅ Glide frontend implemented
* ✅ Firebase + Make.com backend live
* ✅ AI pipelines active (Gemini / OpenAI)

---

