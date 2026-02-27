# 🦇 Night Crawlers

A multi-vendor delivery platform connecting customers with local vendors (restaurants, grocery stores, pharmacies, drink stores, and clubs/lounges) and riders for last-mile delivery.

---

## 📁 Project Structure

```
Night_Crawlers/
├── README.md                 ← You are here
├── frontend/                 ← React + TypeScript frontend (Vite)
│   ├── src/
│   │   ├── App.tsx           ← Root component with all routes
│   │   ├── main.tsx          ← Entry point
│   │   ├── index.css         ← Global styles
│   │   │
│   │   ├── pages/            ← All page components, organized by domain
│   │   │   ├── auth/         ← SignIn, SignUp (customer authentication)
│   │   │   ├── vendor/       ← Vendor sign-in/up, dashboard, store management
│   │   │   ├── admin/        ← Admin login & dashboard
│   │   │   ├── rider/        ← Rider dashboard (accept/deliver orders)
│   │   │   ├── customer/     ← Explore, order summary, user profile
│   │   │   ├── marketing/    ← Home, About, Features, FAQ, Contact, Overview
│   │   │   └── legal/        ← Terms of Service, Privacy Policy
│   │   │
│   │   ├── components/       ← Reusable UI components (Header, Footer, etc.)
│   │   ├── context/          ← React context providers (Cart, GlobalLoader)
│   │   ├── hooks/            ← Custom React hooks
│   │   ├── assets/           ← Images, SVGs, and static assets
│   │   │
│   │   ├── services/         ← ⭐ API service layer (backend integration point)
│   │   │   └── api.ts        ← All API function stubs — START HERE
│   │   │
│   │   ├── types/            ← TypeScript type definitions
│   │   │   ├── models.ts     ← ⭐ All domain models (the data contract)
│   │   │   └── index.ts      ← Additional UI-related types
│   │   │
│   │   ├── lib/              ← Utility libraries
│   │   │   ├── imageUtils.ts ← Image URL resolution helpers
│   │   │   └── utils.ts      ← General utilities
│   │   │
│   │   └── utils/            ← Additional utilities
│   │
│   ├── public/               ← Static public assets
│   ├── package.json          ← Dependencies and scripts
│   ├── vite.config.ts        ← Vite build configuration
│   ├── tsconfig.json         ← TypeScript configuration
│   ├── tailwind.config.js    ← Tailwind CSS configuration
│   └── eslint.config.js      ← ESLint configuration
│
└── backend/                  ← 🔜 Backend API (to be implemented)
```

---

## 🚀 Getting Started (Frontend)

### Prerequisites
- Node.js 18+ and npm

### Installation & Dev Server

```bash
cd frontend
npm install
npm run dev
```

The app will be available at `http://localhost:5173` (or the next available port).

### Build for Production

```bash
cd frontend
npm run build
```

Output will be in `frontend/dist/`.

---

## 🔌 Backend Integration

The frontend is **fully built** and ready to connect to a backend API. See the detailed backend integration guide:

👉 **[`BACKEND_API_GUIDE.md`](./BACKEND_API_GUIDE.md)**

### Quick Overview

| File | What it does |
|------|-------------|
| `frontend/src/types/models.ts` | All TypeScript types/interfaces — the **data contract** |
| `frontend/src/services/api.ts` | All API function stubs — each has a `TODO` with suggested REST endpoints |

The backend engineer should:
1. Read `BACKEND_API_GUIDE.md` for the full spec
2. Implement the REST API endpoints listed there
3. Replace the stub functions in `services/api.ts` with real `fetch`/`axios` calls

---

## 👥 User Roles

| Role | Description |
|------|-------------|
| **Customer** | Browses vendors, places orders, tracks delivery |
| **Vendor** | Manages stores, menu items, incoming orders |
| **Rider** | Goes online, accepts ready orders, delivers them |
| **Admin** | Manages the platform — approves vendors/riders, views stats |

---

## 🎨 Brand

- **Primary Red:** `#C62222`
- **Dark variant:** `#991B1B` / `#A01B1B`
- **Font:** Poppins (Google Fonts)
- **Style:** Clean, modern, mobile-first

---

## 📦 Tech Stack (Frontend)

- **React 18** with TypeScript
- **Vite** for build tooling
- **React Router v6** for client-side routing
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Lazy loading** on all page components for code splitting

---

## 📄 License

Proprietary — Night Crawlers © 2026
