# SecurePulse

A full-stack security operations platform built for security companies managing multiple client sites. SecurePulse replaces traditional control rooms, manual patrol logs, and paper-based incident reporting with a centralised, AI-assisted digital workspace.

---

## The Problem

Security companies managing multiple client sites face a fragmented operational picture — guards log incidents manually, control rooms track alarms across disconnected systems, and incident reports are inconsistent and time-consuming to produce. SecurePulse consolidates these workflows into a single platform.

---

## What It Does

- **Real-time alarm monitoring** — Control room operators see incoming alarms, panic triggers, and site alerts as they happen across all managed client sites
- **Incident logging** — Guards and operators log incidents directly through the platform with structured, consistent data capture
- **AI-generated incident reports** — Guards complete an incident form and the system automatically generates a formatted, professional incident report — eliminating manual write-ups and reducing human error
- **Client and site management** — Security companies manage their full client portfolio, with each site's history, incidents, and alerts accessible in one place
- **Role-based access control** — Separate access levels for control room operators, field guards, site managers, and administrators

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React, TypeScript |
| Backend | Node.js, Express |
| Database | PostgreSQL |
| AI Integration | OpenAI API |
| Authentication | JWT, Role-based access control |
| Hosting | Railway |

---

## System Architecture

```
Client (React + TypeScript)
        │
        ▼
REST API (Node.js + Express)
        │
        ├── Auth Service (JWT + RBAC)
        ├── Alarm & Alert Service
        ├── Incident Logging Service
        ├── AI Report Generation (OpenAI API)
        └── Site & Client Management
                │
                ▼
        PostgreSQL Database
```

---

## Key Features

### Real-Time Monitoring Dashboard
Control room operators monitor live incoming alarms, panic signals, and site alerts across all client locations from a single dashboard view.

### AI-Assisted Incident Reporting
Guards complete a structured incident form. The platform sends the captured data to an AI model which generates a formatted, professional incident report — consistent in structure, complete in detail, and immediately available for review or distribution.

### Role-Based Access
| Role | Access |
|---|---|
| Administrator | Full platform access, user management, client setup |
| Control Room Operator | Live dashboard, alarm management, incident oversight |
| Field Guard | Incident logging, report submission |
| Site Manager | Site-specific incidents and report history |

---

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL
- OpenAI API key

### Installation

```bash
# Clone the repository
git clone https://github.com/andile593/SecurePulse.git
cd SecurePulse

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Add your DATABASE_URL, JWT_SECRET, and OPENAI_API_KEY

# Run database migrations
npx prisma migrate dev

# Start development server
npm run dev
```

## Roadmap

- [ ] Mobile app for field guards (React Native)
- [ ] Real-time WebSocket alerts
- [ ] Guard GPS tracking and patrol routes
- [ ] Automated client reporting via email
- [ ] Analytics dashboard — incident trends by site

---

## Author

**Andile Mhlanga**
[LinkedIn](https://linkedin.com/in/andile-mhlanga-370985316) · [GitHub](https://github.com/andile593)
