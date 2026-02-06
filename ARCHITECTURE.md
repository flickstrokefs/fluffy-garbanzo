# Project Nexus – System Architecture

---

## 🧩 High-Level Architecture

Frontend (Glide)
   ↓ Webhooks
AI Orchestration Layer (Make.com)
   ↓
AI Services (Gemini / OpenAI)
   ↓
Database (Firebase / Sheets)
   ↓
Frontend (Read & Display)

---

## 🧠 AI Orchestration Layer (Core Innovation)

The **AI Orchestration Layer** is the backbone of Project Nexus.

### Responsibilities:
- Receive structured input from frontend
- Route data to correct AI model
- Apply business logic
- Store outputs
- Return results to UI

---

## 🔁 Orchestration Flow

1. User submits data (form / button)
2. Glide triggers Webhook
3. Make.com:
   - Parses key–value data
   - Routes request (Daily Pulse / Academic / Exchange)
4. AI API processes input
5. Response saved to Firestore
6. Frontend fetches and displays results

---

## 🧱 Module Interaction (Ecosystem Design)

| Source Module | Influences |
|-------------|------------|
| Daily Pulse | Wellness insights, Academic alerts |
| Academic Cockpit | Stress indicators, Schedule optimization |
| Explorer’s Guide | Event awareness, Time management |
| Student Exchange | Community engagement metrics |

---

## 🔐 Security & Access
- Firebase Authentication
- Role-based access (Student / Admin)
- Backend-only AI keys (never exposed to frontend)

---

## 📡 Integration Style
- Event-driven (webhooks)
- Stateless backend logic
- Modular, replaceable AI providers

---

## 📈 Scalability
- Add new modules via new Make.com routes
- Swap AI models without frontend changes
- Firebase auto-scales with usage
