# Orthopedic Shoes Sales Page

## Overview

This is a high-converting sales landing page for orthopedic shoes ("Tênis Ortopédico"), a Brazilian e-commerce product priced at R$136,50 (2 units). The site follows the AIDA (Attention, Interest, Desire, Action) sales structure with a hero section, problem/solution sections, testimonials, and a lead capture form. The checkout redirects to an external payment platform (Coinzz). The backend captures leads (name, email, phone) into a PostgreSQL database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript, built with Vite
- **Routing**: Wouter (lightweight router) — single landing page at `/` plus a 404 page
- **Styling**: Tailwind CSS with shadcn/ui component library (new-york style). Custom CSS variables for theming defined in `client/src/index.css`. Fonts: Inter (body) and Montserrat (headings)
- **UI Components**: Full shadcn/ui component set in `client/src/components/ui/`. Custom components include `LeadForm` and `CountdownTimer`
- **Animations**: Framer Motion for scroll-based reveals and interactions
- **State Management**: TanStack React Query for server state; react-hook-form with zod validation for forms
- **Path aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`

### Backend
- **Runtime**: Node.js with Express 5 (ESM modules via `tsx`)
- **API**: Single endpoint `POST /api/leads` for lead capture, validated with Zod
- **API Contract**: Shared route definitions in `shared/routes.ts` with typed request/response schemas — both client and server import from this
- **Development**: Vite dev server proxied through Express with HMR (`server/vite.ts`)
- **Production**: Vite builds static files to `dist/public`, Express serves them. Server bundled with esbuild to `dist/index.cjs`

### Database
- **Database**: PostgreSQL (required — `DATABASE_URL` environment variable must be set)
- **ORM**: Drizzle ORM with `drizzle-zod` for schema-to-validation integration
- **Schema**: Single `leads` table with fields: `id` (serial), `name` (text), `email` (text), `phone` (text, optional), `quantity` (integer, default 1), `createdAt` (timestamp)
- **Migrations**: Drizzle Kit with `db:push` command for schema sync. Config in `drizzle.config.ts`, migrations output to `./migrations`
- **Connection**: `pg` Pool in `server/db.ts`

### Shared Layer
- `shared/schema.ts` — Drizzle table definitions and Zod schemas (used by both client and server)
- `shared/routes.ts` — API contract definitions with paths, methods, input/output schemas

### Build Process
- `npm run dev` — Development with Vite HMR + Express
- `npm run build` — Vite builds client, esbuild bundles server (with strategic dependency bundling for cold start optimization)
- `npm run start` — Serves production build
- `npm run db:push` — Push schema changes to database

### Key Design Decisions
1. **Shared schema between client/server**: Eliminates type drift. Both sides use the same Zod validators and TypeScript types from `shared/`
2. **Single-page sales funnel**: No complex routing needed — the entire conversion funnel is on one page
3. **External checkout**: Purchase redirects to `app.coinzz.com.br` rather than handling payments internally
4. **Lead capture before checkout**: The form collects leads to the database for follow-up marketing

## External Dependencies

- **PostgreSQL**: Required database. Must have `DATABASE_URL` environment variable configured
- **Coinzz**: External payment/checkout platform at `https://app.coinzz.com.br/checkout/2-unidade-tzlyj-0`
- **Google Fonts**: Inter and Montserrat loaded from `fonts.googleapis.com`
- **Product Images**: Stored in `public/images/` directory (referenced from `client/src/pages/LandingPage.tsx`)
- **Replit Plugins**: Optional dev-only plugins (`@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner`)