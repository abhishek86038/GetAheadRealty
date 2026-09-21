# Get Ahead Realty Website

Modern, responsive website for Australian Buyers Agency & SMSF Property Advisory.

## 📁 Project Structure

```
get-ahead-realty/
├── index.html        → Home
├── why-us.html       → Why Us / Approach
├── services.html     → Services
├── smsf.html         → SMSF Property Advisory
├── areas.html        → Areas We Serve
├── process.html      → Our 6-Step Process
├── faq.html          → FAQ
├── contact.html      → Contact / Book a Call
├── kontako.html      → Architectural Studio Showcase
├── 404.html          → Custom Branded 404 Error Page
├── vercel.json       → Vercel Configuration (Clean URLs, Security Headers, Asset Caching)
├── package.json      → Project metadata & local dev scripts
├── robots.txt        → Search engine crawler instructions
├── sitemap.xml       → Production XML Sitemap
├── .gitignore        → Ignored files (.vercel, node_modules, OS files)
├── assets/
│   ├── style.css     → Global Design System & Styles
│   ├── script.js     → Interactive components, Mobile Nav & Calculators
│   ├── kontako.css   → Studio Showcase Styles
│   ├── kontako.js    → Studio Showcase Interactivity
│   └── ...           → Optimized images and media assets
└── README.md         → Deployment & Configuration Guide
```

---

## 🚀 Deploying to Vercel

The project is fully configured and ready for instant zero-configuration deployment on [Vercel](https://vercel.com).

### Option 1: Git-Connected Deployment (Recommended)

1. Push this repository to **GitHub**, **GitLab**, or **Bitbucket**.
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import the repository.
4. Framework Preset: Select **Other** (detected automatically).
5. Root Directory: `./`
6. Click **Deploy**.

Every time you push commits to your `main` branch, Vercel will automatically build and deploy the update with instant global CDN caching and SSL certificates.

### Option 2: Vercel CLI

1. In your terminal, run:
   ```bash
   npx vercel
   ```
   *(Or globally: `npm i -g vercel` then `vercel`)*
2. Follow the interactive prompts to link or create a project.
3. For direct production deployment:
   ```bash
   npx vercel --prod
   ```

---

## ⚙️ Vercel Optimizations Included

- **Clean URLs (`cleanUrls: true`)**: URLs automatically resolve cleanly without requiring the `.html` extension (e.g., `/why-us`, `/services`, `/process`, `/contact`).
- **Trailing Slash Normalization (`trailingSlash: false`)**: Ensures consistent, canonical URLs without duplicate paths.
- **Static Asset Caching**: 1-year immutable caching on `/assets/*` for high-speed delivery.
- **Security Headers**: Includes `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, and `Referrer-Policy: strict-origin-when-cross-origin`.
- **Custom 404 Fallback**: Branded `404.html` with direct navigation back to key pages.

---

## 💻 Local Development

To run the project locally on your machine:

```bash
# Start local preview server
npm run dev
# or
npm start
```

Visit `http://localhost:3000` in your browser.

---

## 🎨 Personalization Notes

1. **Brand Colors**: Update CSS variables in [`assets/style.css`](assets/style.css):
   - `--clay`: Primary brand burnt terracotta / gold accent
   - `--moss`: Secondary deep dark slate / obsidian accent
   - `--paper`: Main warm cream background
2. **Contact Form Endpoint**:
   - To make the contact form live without a backend, connect it to [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com) by setting `action="https://formspree.io/f/YOUR_ID"` on `<form>`.
3. **Analytics**:
   - Add your Google Analytics 4 (`gtag.js`) snippet right before `</head>` in each HTML file.
