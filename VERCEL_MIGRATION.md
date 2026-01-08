# Migration Guide: GitHub Pages → Vercel

## Current Setup

- **Hosting**: GitHub Pages (static export)
- **Domain**: www.react-graph-gallery.com
- **Build**: `next export` (deprecated in Next.js 13+)
- **Deployment**: GitHub Actions workflow

## Migration Steps

### Step 1: Remove Static Export Script (Optional)

Since you're moving to Vercel, you can remove the `export` script from `package.json`:

```json
// Remove this line:
"export": "next export",
```

**Note**: Vercel automatically handles static generation for pages that don't use server-side features.

### Step 2: Deploy to Vercel

#### Option A: Via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign up/login with GitHub
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build` (or leave default)
   - **Output Directory**: Leave empty (Vercel handles this)
   - **Install Command**: `npm ci` (or `npm install`)
5. Click "Deploy"

#### Option B: Via Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
```

### Step 3: Configure Custom Domain

1. In Vercel dashboard → Your Project → Settings → Domains
2. Add `www.react-graph-gallery.com`
3. Vercel will provide DNS records to add:
   - **Type**: CNAME
   - **Name**: www
   - **Value**: cname.vercel-dns.com (or similar)
4. Update your DNS provider (wherever you manage DNS for react-graph-gallery.com)
5. Wait for DNS propagation (can take up to 48 hours, usually faster)

### Step 4: Update GitHub Actions (Optional)

You can either:

- **Disable the GitHub Pages workflow** (since you're not using it anymore)
- **Keep it as backup** (just disable auto-deployment)

To disable: In `.github/workflows/gh-pages.deploy.yml`, comment out the `on.push` trigger or delete the file.

### Step 5: Verify Deployment

- Check that your site loads at the Vercel URL
- Once DNS propagates, verify custom domain works
- Test all pages and functionality

## What Changes?

### Build Process

- **Before**: `npm run build` → `npm run export` → static HTML files in `/out`
- **After**: `npm run build` → Vercel optimizes and deploys automatically

### Deployment

- **Before**: GitHub Actions builds → pushes to `gh-pages` branch
- **After**: Vercel builds on every push to `main` (or your default branch)

### Features You Can Now Use

- ✅ **Server-Side Rendering (SSR)** - `getServerSideProps` in Pages Router
- ✅ **Incremental Static Regeneration (ISR)** - `revalidate` in `getStaticProps`
- ✅ **API Routes** - `/pages/api/*` or `/app/api/*`
- ✅ **Middleware** - Edge functions for authentication, redirects, etc.
- ✅ **Image Optimization** - Automatic Next.js Image optimization
- ✅ **Edge Runtime** - Faster response times globally

## Configuration Files

### Keep These (They Work on Vercel)

- ✅ `next.config.js` - Already configured correctly
- ✅ `next-sitemap.config.js` - Will work on Vercel
- ✅ `postcss.config.js` - Tailwind config works fine

### Remove/Update These

- ❌ `.github/workflows/gh-pages.deploy.yml` - No longer needed
- ❌ `public/CNAME` - Vercel handles domains differently (optional: can keep for reference)

## Environment Variables

If you have any environment variables:

1. Go to Vercel Dashboard → Project → Settings → Environment Variables
2. Add your variables for Production, Preview, and Development

## Performance Benefits

- **Automatic CDN** - Global edge network
- **Automatic HTTPS** - SSL certificates managed
- **Automatic Compression** - Gzip/Brotli
- **Automatic Image Optimization** - Next.js Image component optimized
- **Edge Functions** - Run code closer to users
