# YMGK AR uygulama sitesi

A modern web app built with **Next.js**, **Firebase Authentication**, and **Tailwind CSS** — featuring a product showcase and user authentication system.

---

## Tech Stack

- **Next.js** – App framework for React
- **Tailwind CSS** – Utility-first styling
- **Firebase** – Authentication backend
- **React Hooks** – For state and effects

---

## Features

- ✅ Responsive product landing page
- 🔐 Firebase email/password login & signup
- ✨ Smooth UI with Tailwind styling
- ⚡ Fast, modern frontend architecture

---

## Setup Instructions

1. **Clone the repo:**

```bash
git clone https://github.com/YOUR_USERNAME/ymgk-proje.git
cd ymgk-proje
```

2. **Install dependencies:**
```bash
npm install
# or
yarn
```

3. **Add Firebase config:**

Create a .env.local file or use lib/firebase.js with your own Firebase project config:
```bash
// Replace with your own Firebase settings
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN",
  ...
};
```

4. Run locally:
```bash
npm run dev
```

---
## Firebase Configuration
Make sure the following Firebase services are enabled:
- Authentication (Email/Password)
