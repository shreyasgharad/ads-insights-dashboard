Absolutely! Here’s a **README.md** designed specifically to act as a clear reference for **AI coding agents, Copilot Workspace, and any human collaborator**. It explains **what the product is, how it works, the structure, the tech stack, and how to sequence work** so each prompt or code change is always aligned and never confuses the AI.

This will be your **“Dev Master Reference”**—copy this into the root of your repo (`README.md`). Whenever you use Codex/Copilot/ChatGPT, **tell the AI to use this file as the source of truth** for all context and sequencing!

---

# Tipple Ads Insights Dashboard – MASTER REFERENCE README

## 📢 **Product Vision**

**Tipple Ads Insights Dashboard** is a scalable, multi-client SaaS product that automates fetching, storing, and visualizing ad campaign metrics from Google Ads and Meta Ads. It eliminates manual spreadsheet work, providing live, mobile-ready dashboards for agencies and clients. The entire product is being built incrementally via AI + GitHub workflow.

---

## 🚀 **How This Project Works**

* **All features, code, and workflows are built step-by-step with AI prompts.**
* **This README is the master reference for AI (and humans).**
  *Always use this file for context, requirements, and sequencing!*
* **Each prompt or PR must enhance or add on top of the previous code,** following the project structure and goals here.

---

## 🛠 **Tech Stack**

* **Frontend:** Next.js (React, TypeScript), Shadcn UI, Tailwind CSS
* **Backend/Automation:** n8n (self-hosted on AWS, runs scheduled & on-demand workflows)
* **Database/Auth:** Supabase (PostgreSQL, Auth)
* **Hosting:** Vercel (frontend), Supabase Cloud, AWS EC2 (n8n)
* **APIs:** Google Ads, Meta Ads (OAuth for each client)

---

## 📚 **Core Project Structure**

```
/
|-- web/                      # Next.js frontend app
|   |-- pages/                # All app pages (index, login, dashboard, etc)
|   |-- components/           # Reusable UI components (cards, tables, etc)
|   |-- lib/                  # Helpers (e.g., supabaseClient.ts)
|   |-- public/               # Static assets (images, favicon, etc)
|   |-- .env.local            # Environment variables (NOT in git)
|
|-- n8n/                      # n8n workflow definitions (JSON)
|-- supabase/                 # SQL schemas, migrations, policies
|-- .github/                  # Workflows, PR templates, actions
|-- README.md                 # This file – THE MASTER REFERENCE!
```

---

## 🔑 **How to Sequence Prompts/Code Changes**

**Every AI prompt or human PR should:**

1. **Read this README for context** – never guess about the product or structure.
2. **Build incrementally** – new features should extend or enhance what’s already in the repo.
3. **Never overwrite or break existing working code** – refactor safely if needed.
4. **If a breaking change is needed, explain in the PR why, and update this README if required.**
5. **After each step, update the relevant files and briefly summarize the change at the top of this README** (see Changelog below).

---

## 🧩 **Minimum Viable Product (MVP) Features**

1. **User Auth** (Supabase email/password)
2. **Client Management** (add/manage clients)
3. **Campaigns** (view ad campaigns per client)
4. **Automated Metrics Fetch** (n8n, daily sync from Google Ads/Meta Ads APIs)
5. **Metrics Dashboard** (visualize key KPIs per client/campaign)
6. **Responsive UI** (works on mobile and desktop)
7. **Data Export** (CSV/XLS)
8. **Roles & Access Control** (Agency, Client, Analyst)

---

## 🔁 **Development/Prompt Flow**

* **Each step should be atomic and additive.**
* Use clear commit messages (e.g., "Step 4: Add protected routes with useAuth").
* All new code must work with the existing project structure.
* **If you add/modify a table, n8n workflow, or page, describe briefly why and update this README.**

---

## 📊 **How Data Flows**

1. **User signs up/logs in (Supabase)**
2. **User creates/selects a client**
3. **User connects Google Ads/Meta Ads via OAuth (one-time setup)**
4. **n8n automatically fetches metrics for each linked account, upserts to Supabase**
5. **Frontend dashboard fetches metrics, displays live KPIs and charts**
6. **Users can export data, receive scheduled summary emails, or invite others**

---

## 🧠 **AI Agent/Developer Instructions**

* **Never break the sequence:** Each step must respect all previous code and context.
* **Always check the file/folder structure above before creating new files.**
* **Do not hardcode secrets – always use `.env.local` for credentials and keys.**
* **If you have a doubt, ask for clarification in the PR or output.**
* **If a major architectural change is required, request review and update this README.**
* **Always optimize for scalability, modularity, and clean code.**
* **Explain what changed, why, and what was added in each commit/PR.**

---

## 📝 **Changelog (Example)**

* **Step 1:** Created Next.js app in `/web` with TypeScript, Shadcn UI, and Supabase client.
* **Step 2:** Added Supabase schema (Users, Clients, Campaigns, Metrics, etc.)
* **Step 3:** Implemented Supabase Auth (sign up/login UI).
* **Step 4:** Added protected routes (`useAuth` hook).
* **Step 5:** Added `/dashboard` page showing clients for logged-in user.
* (Continue updating after every major prompt or PR.)

---

## 💡 **Reference for All Prompts/AI Agents**

> **Use this README as the master spec and context source.
> Every prompt, code change, or PR must align with it.
> If context changes, update this file immediately.**

---

**For AI or developer:
If you get lost or confused, read this file first!**

---

Let me know if you want this formatted for Notion, or want a sample PR template for even more structure!
