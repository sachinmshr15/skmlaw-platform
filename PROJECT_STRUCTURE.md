# SKM Laws Platform - Project Architecture

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React

---

# Folder Structure

src/

├── app/                 # Routes & Pages
├── components/
│   ├── layout/          # Navbar, Footer, Page Layout
│   ├── sections/        # Homepage & Page Sections
│   └── ui/              # Reusable UI Components
│
├── config/              # Site Configuration
├── content/             # Static Content
├── lib/                 # Business Logic
├── types/               # TypeScript Types
├── utils/               # Helper Functions

---

# Component Rules

- One component = One responsibility.
- Keep components under 250 lines whenever possible.
- Reusable UI belongs in `/ui`.
- Page-specific UI belongs in `/sections`.

---

# Content Rules

Never hardcode:

- Founder Information
- Services
- Navigation
- Contact Details
- Knowledge Articles

Always load them from `/content` or `/config`.

---

# Naming Convention

Components

HeroContent.tsx
AboutImage.tsx
PracticeCard.tsx

PascalCase

Variables

camelCase

Constants

UPPER_CASE

---

# Import Order

1. React / Next
2. Third Party
3. Components
4. Config
5. Content
6. Types
7. Relative Imports

---

# Commit Style

feat:
fix:
refactor:
style:
docs:
perf:
chore:

---

# Goal

Enterprise-grade law firm platform that is:

- Maintainable
- Scalable
- SEO Ready
- Performance Optimized
- Production Ready