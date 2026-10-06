# 1. Project Overview
- Name: Lama Cash (Crypto Exchange Platform & CRM).
- Description: A modern, high-performance crypto exchange landing page with SEO optimization and an upcoming internal Admin Panel (CRM) for managers.

# 2. Tech Stack & Core Versions
- Framework: Next.js ^16.3.5 (App Router, Turbopack).
- UI Library: React ^19.3.0.
- Language: TypeScript.
- Styling: Tailwind CSS.
- UI Components: shadcn/ui, Radix UI.
- Animations & Scroll: Framer Motion, Lenis (via react-bits/ScrollStack).
- Modals/Drawers: Vaul (for mobile bottom sheets).
- i18n: `next-intl` (URL-based routing).
- CMS: Sanity.io (Headless CMS for the blog).
- Icons: `lucide-react`.

# 3. Routing & Architecture
- Directory: Root (no `src/` directory used).
- Public App: Located under `app/[locale]/`.
- Admin Panel: Located under `src/app/(dashboard)/admin/` (uses Route Groups to bypass public layout and i18n if needed, or structured alongside it).
- i18n Strategy: Default locale is 'uk' (no URL prefix, e.g., `/`). Other locales ('ru', 'en') use prefixes (e.g., `/ru/about`). Managed via `next-intl/middleware` with `localePrefix: 'as-needed'`.

# 4. Styling Guidelines
- Global Theme: Dark theme by default.
- Brand Colors: 
  - Primary Background: `bg-[linear-gradient(10.25deg,#3C157F_-9.46%,#7134C2_40.87%,#171717_93.06%)]`.
  - Accent/Neon: Neon green/cyan (e.g., `#5ce1e6` or `#5EF6BA`).
  - Cards/Drawers: Glassmorphism `bg-white/50 backdrop-blur-md` or dark solid `#171717`.
- Mobile First: Use `max-w-[480px] mx-auto` for strict mobile views, or standard `md:` breakpoints for responsive desktop designs.

# 5. Data Fetching & CMS
- Blog Data: Fetched from Sanity.io using GROQ queries.
- Rendering: Emphasize Server Components by default. Use `"use client"` ONLY when hooks (useState, useEffect, useScroll) or interactivity (onClick, Vaul, Framer Motion) are required.

# 6. AI Assistant Rules (CRITICAL)
- Do NOT use Pages Router syntax. Always use App Router (`next/navigation`, not `next/router`).
- Do NOT hallucinate CSS. Stick strictly to Tailwind utility classes.
- When creating UI, prioritize `shadcn/ui` components before building custom ones.
- Preserve existing SEO metadata (`generateMetadata`, `alternates`, `hreflang`) when editing pages.
- Keep Client Components as lean as possible. Move data fetching to Server Components and pass data as props.
