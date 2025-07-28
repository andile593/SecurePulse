# 🔐 SecurePulse – AI-Driven Security Management Platform

SecurePulse is a full-stack AI-powered security management system that integrates real-time alerts, automated patrol monitoring, drone telemetry, incident reports, and dispatch control.

Built with:
- **Backend**: Node.js + Express
- **Frontend**: React + TypeScript + Vite + TailwindCSS
- **State Management**: React Query / Zustand
- **Database**: PostgreSQL & Prisma
- **Socket Support**: Real-time events via WebSocket/Socket.IO

---

## 📁 Folder Structure 

 SecurePulse/
- backend             # Express API server 
- frontend             # React + Vite SPA
- README.md             # Project documentation


## 🧠 Features Overview

| Feature       | Description |
|--------------|-------------|
| **Clients** | Manage organizations or individuals being monitored |
| **Guards**  | Track active guards, shifts, and performance |
| **Sites**   | Add and manage secured premises |
| **Alarms**  | Log and respond to security events in real time |
| **AI Calls**| Integrate with AI analysis and vision models |
| **Dispatch**| Log emergency or manual dispatch operations |
| **OB Logs** | Operational base logs for audits & accountability |
| **Vehicles**| Monitor patrol or response vehicles |
| **Drones**  | Stream video/telemetry from surveillance drones |
| **Reports** | Generate analytics, logs, and exports |
| **Auth**    | User login, roles, and permissions management |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/SecurePulse.git
cd SecurePulse

---


src/
├── assets/          # Static assets
├── components/      # UI components (Header, Sidebar, Modals, etc.)
├── features/        # Domain-specific logic (auth, drones, guards, etc.)
├── hooks/           # Custom React hooks
├── lib/             # API clients, socket helpers, utilities
├── context/         # React Context providers
├── store/           # Zustand/Redux state slices
├── routes/          # Centralized route configuration
├── pages/           # Top-level routed pages
├── types/           # DTOs and global types
├── constants/       # Enums and constant values
├── App.tsx          # Root app layout
├── main.tsx         # Entry point
└── index.css        # Tailwind base styles
