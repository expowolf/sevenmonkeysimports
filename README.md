# Seven Monkey Imports

Multi-page static site for Seven Monkey Imports — folk art & home decor in Fish Creek, Door County, WI.

## Pages
- `index.html` — Home
- `collection.html` — Product categories
- `about.html` — Story + reviews
- `visit.html` — Address, hours, map
- `contact.html` — Contact form + Employment application (tabbed)

## Deploy on Vercel
Pure static site. No build step.
1. Push to GitHub.
2. In Vercel: **Add New Project** → import the repo → Framework Preset: **Other** → Deploy.

## Images
Drop these into `/images/`:
- `logo.jpg` — kraft bag with logo
- `owl.jpg` — metal owl sculpture
- `jaguar.jpg` — black clay jaguar candle holder
- `mushrooms.jpg` — mosaic mushrooms
- `ants.jpg` — metal ant garden art
- `catrinas.jpg` — Catrina figurines
- `beads.jpg` — beaded jewelry display

## Contact form setup (IMPORTANT)
The forms in `contact.html` post to **Formspree**. Both forms have a placeholder action of `https://formspree.io/f/YOUR_FORM_ID`.

1. Sign up at https://formspree.io (free tier works).
2. Create one form for "Messages" and one for "Employment".
3. Copy each form's endpoint ID and paste it into the matching `action="..."` in `contact.html`.

(Alternatives: Netlify Forms, Web3Forms, or a Vercel serverless function — let me know if you'd prefer one of those.)
