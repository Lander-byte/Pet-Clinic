# 🐾 Pet Clinic Management System

A web-based Pet Clinic Management System built with **React.js**. The application provides separate portals for **Customers** (pet owners) and **Admins** (clinic staff) with role-based authentication and navigation.

---

## 📌 Tech Stack

| Technology | Purpose |
|------------|---------|
| React.js | Frontend framework |
| React Router DOM | Client-side routing |
| CSS3 | Styling and layout |
| localStorage | Session persistence (no database) |

---

## 🚀 How to Run

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm start
```

The app will open at **http://localhost:3000**

---

## 🔑 Login Credentials

> Since there is no database yet, mock user accounts are defined in `src/users.js`.

### Customer Login (`/login`)

| Email | Password |
|-------|----------|
| `customer@petclinic.com` | `password123` |
| `user@email.com` | `user123` |

### Admin Login (`/admin/login`)

| Email | Password |
|-------|----------|
| `admin@petclinic.com` | `adminpassword` |

---

## 📁 Project Structure

```
Pet-Clinic/
├── public/
├── src/
│   ├── App.js                          # Root component (auth state, routing shell)
│   ├── App.css                         # Global styles
│   ├── MainContent.jsx                 # Route definitions & route guards
│   ├── users.js                        # Mock user credentials array
│   ├── index.js                        # React entry point
│   │
│   ├── components/
│   │   ├── customer/                   # Customer-side components
│   │   │   ├── Login.jsx               # Customer login form
│   │   │   ├── Register.jsx            # Customer registration form
│   │   │   ├── CustomerSidebar.jsx     # Customer navigation sidebar
│   │   │   ├── Dashboard.jsx           # Customer dashboard page
│   │   │   ├── CustomerDashboard.jsx   # Dashboard content/widgets
│   │   │   ├── CustomerDashboard.css   # Dashboard-specific styles
│   │   │   ├── MyPets.jsx              # My Pets listing page
│   │   │   ├── PetCard.jsx             # Individual pet card component
│   │   │   ├── PetsMiniCard.jsx        # Mini pet card component
│   │   │   ├── Appointment.jsx         # Appointment list page
│   │   │   ├── UpcomingAppointment.jsx # Upcoming appointment widget
│   │   │   ├── MedicalRecords.jsx      # Medical records page
│   │   │   ├── MedRecSidebar.jsx       # Medical records sidebar
│   │   │   ├── VaccineHistory.jsx      # Vaccine history component
│   │   │   ├── VaccineReminder.jsx     # Vaccine reminder widget
│   │   │   └── Billing.jsx             # Customer billing page
│   │   │
│   │   └── admin/                      # Admin-side components
│   │       ├── AdminLogin.jsx          # Admin login form
│   │       ├── AdminSidebar.jsx        # Admin navigation sidebar
│   │       ├── AdminDashboard.jsx      # Admin dashboard page
│   │       ├── DashboardAppointment.jsx# Admin dashboard appointment widget
│   │       ├── DashboardRecords.jsx    # Admin dashboard records widget
│   │       ├── AppointmentManagement.jsx # Manage all appointments
│   │       ├── AdminAppointmentDetail.jsx # Admin appointment detail view
│   │       ├── PetOwnerManagement.jsx  # Manage pet owners
│   │       ├── PetOwnerDetail.jsx      # Pet owner detail view
│   │       ├── BillingReports.jsx      # Billing reports page
│   │       └── BillingRecords.jsx      # Billing records component
│   │
│   └── index.css                       # Base CSS reset and font imports
│
├── package.json
└── README.md
```

---

## 👥 Team Members & Task Assignment

### Quezon — Core Setup, Authentication & Routing (Quezon)

> Responsible for the project foundation, login/register system, and route protection.

| File | Task Description |
|------|-----------------|
| `App.js` | Root component — auth state management, localStorage persistence, conditional sidebar rendering |
| `MainContent.jsx` | All route definitions, route guards (redirect if not logged in) |
| `users.js` | Mock user credentials array (customers & admin accounts) |
| `index.js` | React entry point setup |
| `Login.jsx` | Customer login form with email/password validation against mock users |
| `Register.jsx` | Customer registration form |
| `AdminLogin.jsx` | Admin login form with role-based validation |
| `App.css` | Global styles, layout system, auth form styles |
| `index.css` | Base CSS reset and font imports |

**Summary:** 9 files · Login/Register UI, authentication logic, route protection, global styling

---

### Mingoy — Customer Portal (Pet Owner Side) (Mingoy)

> Responsible for all customer-facing pages and components after login.

| File | Task Description |
|------|-----------------|
| `CustomerSidebar.jsx` | Customer navigation sidebar with links and logout button |
| `Dashboard.jsx` | Customer dashboard page layout |
| `CustomerDashboard.jsx` | Dashboard content — summary widgets, welcome section |
| `MyPets.jsx` | My Pets page — list of registered pets |
| `PetCard.jsx` | Individual pet card with pet info display |
| `PetsMiniCard.jsx` | Compact pet card for sidebar/widget use |
| `Appointment.jsx` | Customer appointment list with table view |
| `UpcomingAppointment.jsx` | Upcoming appointment widget for dashboard |
| `MedicalRecords.jsx` | Medical records page |
| `MedRecSidebar.jsx` | Medical records sidebar/filter |
| `VaccineHistory.jsx` | Vaccine history list component |
| `VaccineReminder.jsx` | Vaccine reminder notification widget |
| `Billing.jsx` | Customer billing/payment history page |
| `CustomerDashboard.css` | Dashboard-specific styles |

**Summary:** 15 files · All customer pages, pet management, appointments, medical records, billing

---

### Golez — Admin Portal (Clinic Staff Side) (Golez)

> Responsible for all admin-facing pages and components after login.

| File | Task Description |
|------|-----------------|
| `AdminSidebar.jsx` | Admin navigation sidebar with links and logout button |
| `AdminDashboard.jsx` | Admin dashboard page — overview and stats |
| `DashboardAppointment.jsx` | Admin dashboard appointment summary widget |
| `DashboardRecords.jsx` | Admin dashboard records summary widget |
| `AppointmentManagement.jsx` | Full appointment management — view, approve, cancel appointments |
| `AdminAppointmentDetail.jsx` | Detailed admin view for a single appointment |
| `PetOwnerManagement.jsx` | Pet owner management — list all registered owners |
| `PetOwnerDetail.jsx` | Detailed view for a single pet owner and their pets |
| `BillingReports.jsx` | Billing reports page — revenue, payment summaries |
| `BillingRecords.jsx` | Individual billing record component |

**Summary:** 10 files · Admin dashboard, appointment management, pet owner management, billing reports

---

### Task Distribution Overview

| Member | Role | Files | Key Modules |
|--------|------|-------|-------------|
| **Member 1** | Core Setup & Auth | 9 | `App.js`, `MainContent.jsx`, `Login.jsx`, `AdminLogin.jsx`, `Register.jsx`, `users.js`, CSS |
| **Member 2** | Customer Portal | 15 | Sidebar, Dashboard, My Pets, Appointments, Medical Records, Billing |
| **Member 3** | Admin Portal | 10 | Sidebar, Dashboard, Appointment Mgmt, Pet Owner Mgmt, Billing Reports |

---

## 🗓️ Sprint Plan

### Sprint 1 (Days 1–2) — Foundation & Auth

**Goal:** Get the app shell running with working login/logout and route protection.

| Owner | Tasks |
|-------|-------|
| **Quezon** | `App.js` (auth state + localStorage persistence), `MainContent.jsx` (routes + guards), `users.js` mock data, `index.js`, `App.css` base layout/tokens |
| **Quezon** | `Login.jsx`, `Register.jsx`, `AdminLogin.jsx` — forms + validation against `users.js` |
| **Mingoy** | `PortalSelection.jsx` + `.css` — gateway page |
| **Golez** | `CustomerSidebar.jsx` / `AdminSidebar.jsx` — nav shells (no content yet) |

**Exit criteria:** Can log in as customer or admin, land on an empty dashboard shell, and log out. Refresh keeps you logged in.

---

### Sprint 2 (Days 3–4) — Customer Portal Core

**Goal:** Customer can view dashboard, pets, and appointments.

| Owner | Tasks |
|-------|-------|
| **Mingoy** | `Dashboard.jsx`, `VaccineReminder.jsx`, `UpcomingAppointment.jsx` |
| **Mingoy** | `MyPets.jsx`, `PetsMiniCard.jsx`, `PetCard.jsx` (select/close pet detail) |
| **Mingoy** | `Appointment.jsx`, `AppointmentDetail.jsx` (row click → detail panel) |
| **Quezon** | QA pass: route guards redirect unauthenticated users correctly for all new customer routes |

**Exit criteria:** Logged-in customer can browse dashboard widgets, click into a pet, and click into an appointment row.

---

### Sprint 3 (Days 5–6) — Admin Portal Core

**Goal:** Admin can view dashboard, manage appointments, and manage pet owners.

| Owner | Tasks |
|-------|-------|
| **Golez** | `AdminDashboard.jsx`, `DashboardRecords.jsx`, `DashboardAppointment.jsx` |
| **Golez** | `AppointmentManagement.jsx`, `AdminAppointmentDetail.jsx` (confirm/cancel actions) |
| **Golez** | `PetOwnerManagement.jsx`, `PetOwnerDetail.jsx` (edit/remove owner UI) |
| **Mingoy** | Start `MedicalRecords.jsx` shell + `MedRecSidebar.jsx` in-page nav |

**Exit criteria:** Admin can see today's appointments/stats, click into any appointment to confirm/cancel, and click into any owner to see their pets.

---

### Sprint 4 (Days 7–8) — Medical Records, Billing & Polish

**Goal:** Complete remaining feature set, then stabilize.

| Owner | Tasks |
|-------|-------|
| **Mingoy** | `VaccineHistory.jsx`, `Billing.jsx` (customer-facing) wired into `MedicalRecords.jsx` |
| **Golez** | `BillingReports.jsx`, `BillingRecords.jsx` (admin-facing) |
| **Quezon** | Cross-cutting QA: verify all 12 routes in `MainContent.jsx`, test admin/customer session isolation, fix any styling regressions in `App.css` |
| **All** | Bug bash — click through every page, fix broken links/props, remove duplicate/dead files (e.g. the empty `src/components/customer/CustomerDashboard.jsx` and the stray root-level `src/CustomerDashboard.jsx`/`.css` that duplicate `Dashboard.jsx`) |

**Exit criteria:** All features complete, no dead files, all routes functional, both portals fully navigable.

---

## 📝 Notes
- Admin Primary Color Design is (Yellow Green / Green) | Customer Primary Color Design is (Sky Blue ) : pwede ramu mag add ug other primary color       aslong ma anagay sa design.
- Authentication uses a **hardcoded array** in `src/users.js` — no backend/database required for now.
- Session is persisted in **localStorage** so refreshing the page keeps you logged in.
- Customer and Admin have **separate login pages** (`/login` and `/admin/login`).
- Sidebar only appears **after login** and changes based on user role.
