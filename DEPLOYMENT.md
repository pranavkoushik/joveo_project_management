# 📋 Deployment Checklist

Use this checklist before deploying to production.

## Pre-Deployment

- [ ] All project data in `src/projects.json` is accurate and up-to-date
- [ ] Test locally with `npm run dev` - no console errors
- [ ] Production build succeeds: `npm run build`
- [ ] Preview production build: `npm run preview`
- [ ] All links in projects.json are valid and accessible
- [ ] Project descriptions are professional and clear
- [ ] Status badges are accurate (Active/Paused/Completed/Upcoming)
- [ ] Owner names are correct and properly formatted
- [ ] Tags are consistent and meaningful
- [ ] Last updated dates are current

## Deployment Options

### ✅ Vercel (Recommended)

**Quick Deploy:**
```powershell
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

**GitHub Integration:**
1. Push code to GitHub repository
2. Go to https://vercel.com/new
3. Import your GitHub repository
4. Vercel auto-detects Vite settings
5. Click "Deploy"
6. Done! Your site is live

**Settings:**
- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

### ✅ Netlify

**Drag & Drop:**
1. Run `npm run build`
2. Go to https://app.netlify.com/drop
3. Drag the `dist` folder
4. Done!

**Git Integration:**
1. Push to GitHub
2. Go to https://app.netlify.com
3. Click "New site from Git"
4. Connect repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Deploy

### ✅ GitHub Pages

**Setup:**
```powershell
# Install gh-pages
npm install -D gh-pages
```

Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/repo-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/repo-name/',
  // rest of config
})
```

**Deploy:**
```powershell
npm run deploy
```

## Post-Deployment

- [ ] Visit the deployed URL
- [ ] Test all project cards display correctly
- [ ] Test search functionality
- [ ] Test filter dropdown
- [ ] Test "View Details" modal
- [ ] Test "Open Docs" links (open in new tab)
- [ ] Test on mobile device
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Verify responsive design works
- [ ] Check page load speed (should be < 2 seconds)
- [ ] Verify all animations work smoothly
- [ ] Test keyboard navigation
- [ ] Share URL with team for feedback

## Continuous Deployment Setup

### Vercel Auto-Deploy
Once connected to GitHub:
- Every push to `main` → automatic production deploy
- Every pull request → preview deployment
- Instant rollback capability

### Netlify Auto-Deploy
Once connected to GitHub:
- Push to `main` → auto-deploy
- Branch deploys for pull requests
- Deploy previews available

## Environment Variables

This project doesn't require environment variables.  
All configuration is in:
- `tailwind.config.js` - Theme colors
- `src/projects.json` - Project data

## Custom Domain Setup

### Vercel
1. Go to Project Settings → Domains
2. Add your domain
3. Configure DNS records as shown
4. SSL certificate auto-generated

### Netlify
1. Go to Domain Settings
2. Add custom domain
3. Configure DNS
4. HTTPS enabled automatically

## Monitoring

### Check Site Health
- [ ] Lighthouse score (target: 95+)
- [ ] Mobile-friendly test
- [ ] Page speed insights
- [ ] Broken link checker

### Analytics (Optional)
Consider adding:
- Google Analytics
- Vercel Analytics
- Plausible Analytics

## Rollback Plan

### Vercel
1. Go to Deployments tab
2. Find previous working deployment
3. Click "Promote to Production"

### Netlify
1. Go to Deploys
2. Find successful deploy
3. Click "Publish deploy"

### Git Revert
```powershell
# Revert last commit
git revert HEAD
git push origin main
```

## Updating Projects After Deployment

1. Edit `src/projects.json` locally
2. Test with `npm run dev`
3. Commit changes
4. Push to GitHub
5. Wait 2-3 minutes for auto-deploy
6. Verify changes on live site

## Security Checklist

- [ ] No sensitive data in `projects.json`
- [ ] All external links are HTTPS
- [ ] No API keys or secrets in code
- [ ] Repository can be public (no proprietary code)

## Performance Optimization

Already optimized:
- ✅ Static site generation
- ✅ Code splitting with Vite
- ✅ Optimized images
- ✅ Minimal bundle size
- ✅ Fast CDN delivery

## Support

If issues arise:
1. Check build logs in Vercel/Netlify dashboard
2. Review console errors in browser DevTools
3. Validate `projects.json` syntax
4. Check GitHub repository settings
5. Contact platform support (Vercel/Netlify)

---

## Quick Deploy Commands

```powershell
# Test locally
npm run dev

# Build
npm run build

# Preview build
npm run preview

# Deploy to Vercel
vercel --prod

# Deploy to Netlify (via CLI)
netlify deploy --prod

# Deploy to GitHub Pages
npm run deploy
```

---

**Last Updated:** November 2025  
**Deployment Guide Version:** 1.0
