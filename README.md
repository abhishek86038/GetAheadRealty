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
├── assets/
│   ├── style.css     → Global Design System & Styles
│   └── script.js     → Interactive components, Mobile Nav & Calculators
└── README.md         → Deployment & Personalization Guide
```

---

## 🚀 Deployment Guide

### 1. Netlify
1. Go to [netlify.com](https://www.netlify.com/) and drag & drop the project folder into Netlify Drop.
2. Or connect your GitHub repository and set publish directory to `./`.

### 2. Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the root folder and follow prompts.

### 3. GitHub Pages
1. Push this folder to a GitHub repository.
2. Go to **Settings** > **Pages**.
3. Under **Branch**, select `main` and `/ (root)`, then click **Save**.

---

## 🎨 Personalization Notes

1. **Brand Colors**: Update CSS variables in [`assets/style.css`](file:///c:/Users/hp/Desktop/ProjectJob/assets/style.css):
   - `--accent-gold`: Primary brand highlight color
   - `--accent-emerald`: Secondary profit/growth highlight
   - `--bg-main`: Main background color
2. **Contact Form Endpoint**:
   - To make the contact form live without a backend, connect it to [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com) by setting `action="https://formspree.io/f/YOUR_ID"` on `<form>`.
3. **Analytics**:
   - Add your Google Analytics 4 (`gtag.js`) snippet right before `</head>` in each HTML file.
