# Mirrorkin UI

Mirrorkin is a tiny AI twin that earns while you live your life — it chats like you, scouts
gigs and bounties, runs a liquidation/trading scanner across multiple chains, and reports back
real earnings.

This repo is the **frontend dashboard** for Mirrorkin: a single-page React + Vite app styled
with Tailwind CSS, built as a dark, crypto/AI-themed UI.

## What's included

- **Hero / landing section** — product name, tagline, short description, and quick stats.
- **Dashboard** (mock data, no backend yet):
  - `ChatPanel` — a mocked chat UI for talking to your tiny twin (echoes a demo reply, not a
    real LLM call yet).
  - `ScoutPanel` — card list of bounties/gigs found, each with title, payout estimate, due
    date and status.
  - `EarningsPanel` — running total of real earnings plus a list of completed/proof-of-work
    tasks, including the real items already built elsewhere:
    - `defi-health-scanner` — live RPC test across Aave, Spark & Compound on 5 chains
      (flagged a real $11k at-risk position during testing).
    - `keeper-liquidator` — a full flash-loan liquidation flow executed end-to-end on Base
      Sepolia testnet.
    - A real paid HackenProof bug bounty payout, as a sanity-check that real money has
      actually been earned before.

## Component structure

```
src/
  components/
    Hero.jsx          — landing/hero section
    Dashboard.jsx      — lays out the three dashboard panels
    ChatPanel.jsx       — chat UI + shared PanelHeader
    ScoutPanel.jsx      — scout finds card list
    EarningsPanel.jsx   — earnings summary + completed task list
  data/
    mockData.js         — all sample/mock data lives here, swap for API calls later
  App.jsx               — page shell, nav, scroll-to-dashboard
  main.jsx               — React entry point
  index.css              — Tailwind directives + a few custom utilities (grid bg, glow, gradients)
```

Everything reads from `src/data/mockData.js`. To wire this up to a real backend, replace the
imports in each panel with `fetch`/React Query calls (or a WebSocket for chat) that hit your
actual Mirrorkin API, keeping the same shape of data.

## Tech stack

- React 19 + Vite 8
- Tailwind CSS 3 (dark theme, neon cyan/purple/green/pink accents, custom grid background)
- No backend, no auth, no external API calls — pure static frontend for now

## Running locally

```bash
npm install
npm run dev
```

Then open the printed local URL (default `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # serve the production build locally to sanity-check it
```

Build and dev server have both been verified to run with **no errors** as of this commit
(`npm run build` succeeds, `npm run dev` serves the app, `npx oxlint src` reports 0 errors).

## Current status

- ✅ UI only — no backend, no live data, no auth.
- ✅ All dashboard data is mocked in `src/data/mockData.js`.
- ✅ Builds and runs cleanly (`npm run dev` / `npm run build` both verified).
- ⬜ Not yet wired to a real chat/LLM backend.
- ⬜ Not yet wired to a real Scout (gig/bounty finder) or Earnings backend.
- ⬜ Not yet deployed to a live hosting URL — deploying to Vercel or Netlify (free tier) is the
  natural next step once this UI is reviewed. If you've got a Vercel/Netlify account, this repo
  can be imported as-is (framework preset: Vite) with zero config changes needed.

## Next steps

1. Deploy this repo to Vercel/Netlify for a live preview link.
2. Build a small backend (Node/Express or serverless functions) exposing `/chat`,
   `/scout-finds`, and `/earnings` endpoints.
3. Swap the mock data imports in `ChatPanel`, `ScoutPanel`, and `EarningsPanel` for real API
   calls against that backend.
4. Add auth if this needs to be per-user instead of a single dashboard.
