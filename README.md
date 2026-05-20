# Seven Monkey Imports

Multi-page static site + serverless contact form for Seven Monkey Imports — folk art & home decor in Fish Creek, Door County, WI.

## Pages
- `index.html` — Home
- `collection.html` — Product categories
- `about.html` — Story + reviews
- `visit.html` — Address, hours, map
- `contact.html` — Tabbed contact form + employment application

## Deploy on Vercel

1. Push this repo to GitHub.
2. Vercel → **Add New Project** → import the repo.
3. Framework Preset: **Other**. Leave build command blank. Output directory blank. (Vercel auto-installs `package.json` deps for the serverless function.)
4. **Set env vars** in Project Settings → Environment Variables:
   - `RESEND_API_KEY` — get one free at https://resend.com (100 emails/day)
   - `CONTACT_TO_EMAIL` — where to send form submissions (e.g. `jane@sevenmonkeyimports.com`)
   - `CONTACT_FROM_EMAIL` — sender, e.g. `Seven Monkey Imports <hello@yourdomain.com>` (or use Resend's default `onboarding@resend.dev` while testing)
5. Deploy. Done.

**To use your own sending domain** (recommended for deliverability): in Resend, verify your domain (DNS records), then set `CONTACT_FROM_EMAIL` to an address on that domain.

## Images
Drop these into `/images/`:
- `logo.jpg`, `owl.jpg`, `jaguar.jpg`, `mushrooms.jpg`, `ants.jpg`, `catrinas.jpg`, `beads.jpg`

## Local dev (optional)
```bash
npm install
npx vercel dev
```
Open http://localhost:3000.

## Files
- `api/contact.js` — Vercel serverless function that emails form submissions via Resend
- `vercel.json` — clean URLs + function config
- `package.json` — Resend dependency
