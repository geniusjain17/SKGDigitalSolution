# SKG Digital Solutions — Website

Company website for **skgdigitalsolutions.com**: a static, single-page site (plain HTML, CSS and JS, no build step).

## Structure
```
index.html        # single-page site (Hero, Products, InstitutePulse, Services, Industries, Trust, Why SKG, About, Contact)
privacy.html      # Privacy Policy
terms.html        # Terms of Use
robots.txt        # crawler rules + sitemap location
sitemap.xml       # list of pages for search engines
css/styles.css    # all styles (brand colours in :root)
js/main.js        # mobile menu, scroll animations, contact form
assets/           # favicon, og-image, InstitutePulse illustrations
```

## Run locally
Open `index.html` in a browser, or use the VS Code **Live Server** extension.

## Before going live
Content that is still a placeholder (search `[` and `PLACEHOLDER` in `index.html`):
- [ ] InstitutePulse demo video and the three app screenshots
- [ ] Social links in the footer (`href="#"`): add real URLs or remove the ones you don't use
- [ ] Contact form: set `data-endpoint` (Web3Forms or Formspree, instructions are in a comment above the form). Until then it only opens the visitor's email app
- [ ] Read `privacy.html` and `terms.html` and confirm they match how you really handle data
- [ ] Google Analytics: replace `G-XXXXXXXXXX` and uncomment the script in `<head>`

## Deploy
Upload the folder to any static host (Netlify, Vercel, GitHub Pages, Azure Static Web Apps, or cPanel `public_html`) and point the domain at it.

Checklist:
- [ ] Site is served at `https://skgdigitalsolutions.com/` over HTTPS
- [ ] `www.` redirects to the non-www domain (or the other way round) with a 301, so there is one canonical address
- [ ] `https://skgdigitalsolutions.com/robots.txt` and `/sitemap.xml` open in a browser
- [ ] Enable compression (gzip/brotli) and long cache headers for `css/`, `js/` and `assets/`

---

# SEO guide

The on-page basics are already in `index.html`: title and description, canonical URL, Open Graph and Twitter tags, `robots` meta, and JSON-LD structured data (organisation, website, three products, FAQ). Nobody can guarantee a #1 ranking. These steps are what move you towards it.

## 1. Technical setup (do first)
1. **Google Search Console**: add `skgdigitalsolutions.com` as a Domain property (verify with a DNS TXT record), then submit `https://skgdigitalsolutions.com/sitemap.xml`.
2. **Bing Webmaster Tools**: import the site from Search Console. It also feeds DuckDuckGo and Yahoo.
3. **Request indexing** for the home page using the URL Inspection tool in Search Console.
4. **Check structured data** with Google's Rich Results Test and fix any warnings.
5. **Check speed** with PageSpeed Insights (target 90+ on mobile). Compress `assets/og-image.png`, serve images as WebP/AVIF where possible, and keep the Google Fonts request to the weights you use.
6. **Update `sitemap.xml`** (`lastmod`) whenever you change page content, and add every new page to it.

## 2. Local SEO (most important for "software company in Jalandhar")
1. Create a **Google Business Profile** for the Jalandhar office (and Noida if it is a real, staffed office). Choose "Software company" as the category.
2. Make the **name, address and phone (NAP)** identical on the website, Google Business Profile and every directory.
3. Ask happy clients for **Google reviews**. Reply to every review.
4. Add the business to directories: JustDial, Sulekha, IndiaMART, Clutch, GoodFirms, LinkedIn company page, and local Jalandhar/Noida business listings.
5. Check the Noida address (KM75 Sector 129) matches your Google Business Profile exactly.

## 3. Content (what actually earns rankings)
- **One page per product and service.** A single page can't rank for everything. Create pages such as:
  - `/institutepulse/` for "school attendance software", "AI attendance system"
  - `/trackpro/` for "vehicle tracking software", "school bus tracking"
  - `/swapenergy/` for "battery swap management software"
  - `/web-development-jalandhar/` and `/software-company-noida/` for local searches
- Each page needs a unique title (under about 60 characters), a unique description (under about 155), one `<h1>`, real copy (300+ words), and its own entry in `sitemap.xml`.
- **Blog or case studies**: write about problems your customers search for, for example "How schools can cut attendance time", "Choosing GPS tracking for school buses". Publish regularly.
- **Case studies** with real numbers and client names (with permission) build trust with both visitors and Google.
- Add a real client testimonials/stories section later, with permission. Don't publish placeholder text; it hurts quality signals.

## 4. Backlinks and off-site
- Get listed on Clutch, GoodFirms, Product Hunt and relevant EdTech/EV directories.
- Publish on LinkedIn and YouTube. A demo video of InstitutePulse can also rank in YouTube and Google video results. Embed it on the page.
- Offer guest posts or partnerships with school associations, coaching-institute groups and EV industry sites.
- Avoid paid link packages and link farms. They can get the site penalised.

## 5. Measure and keep improving
1. Turn on **Google Analytics 4** (see "Before going live").
2. Every month, check Search Console: which queries bring impressions, which pages have a low click-through rate, and which have indexing errors.
3. Rewrite titles and descriptions of pages that get impressions but few clicks.
4. Expect 3–6 months for a new domain to rank for competitive terms. Local, specific searches ("InstitutePulse", "software company Jalandhar") rank sooner.

## Other things worth adding
- A custom **404 page** (`404.html`) that links back to the home page. Most static hosts pick it up automatically.
- **Cookie notice**, if you enable Analytics and your audience includes EU/UK visitors.
- **WhatsApp Business** profile for the number used in the floating chat button.
- **Email on the domain** (`info@skgdigitalsolutions.com`) with SPF, DKIM and DMARC records so enquiry replies don't land in spam.
- **Security headers** at the host (HSTS, `X-Content-Type-Options`, a basic Content-Security-Policy).
- **Favicon set** for older browsers: add `favicon.ico` and `apple-touch-icon.png` alongside the SVG.
- **Uptime monitoring** (for example UptimeRobot) so you know if the site goes down.
