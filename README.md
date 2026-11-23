# SKG Digital Solutions — Website

Company website for **skgdigitalsolutions.com**.

## Structure
```
index.html        # single-page site (Hero, Products, Services, Industries, Why SKG, Contact)
css/styles.css    # all styles (brand colours in :root)
js/main.js        # mobile menu, scroll animations, contact form
assets/           # favicon / images
```

## Run locally
Open `index.html` in a browser, or use the VS Code **Live Server** extension.

## Before going live
- [ ] Replace `info@skgdigitalsolutions.com` with the real email (index.html + js/main.js)
- [ ] Add phone number / full office addresses in the Contact section
- [ ] Hook the contact form to a backend or form service (Formspree, Web3Forms, or an ASP.NET API) — it currently opens the visitor's email app
- [ ] Add real product screenshots and client logos/testimonials
- [ ] Add a logo file and an Open Graph share image (`og:image`)

## Deploy
Static site — upload the folder to any host (Netlify, Vercel, GitHub Pages, Azure Static Web Apps, or cPanel `public_html`) and point the domain at it.
