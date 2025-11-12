# 🚀 Quick Start Guide

## Get Up and Running in 5 Minutes

### 1. Install Dependencies
```powershell
npm install
```

### 2. Start Development Server
```powershell
npm run dev
```

### 3. Open in Browser
Navigate to: http://localhost:5173

## 📝 Common Tasks

### Add a New Project
1. Open `src/projects.json`
2. Add your project entry
3. Save and refresh browser

### Build for Production
```powershell
npm run build
```

### Preview Production Build
```powershell
npm run preview
```

## 🚀 Deploy to Vercel

### Option 1: CLI (Fastest)
```powershell
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 2: GitHub Integration
1. Push code to GitHub
2. Import project in Vercel dashboard
3. Auto-deploys on every push

## 🎨 Customize Branding

### Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  'joveo-blue': '#YOUR_COLOR',
  'joveo-orange': '#YOUR_COLOR',
}
```

### Logo/Title
Edit `src/components/Header.jsx`

## 📊 Project Structure

```
src/
├── components/          # All React components
├── projects.json        # 🔥 Edit this to add projects
├── App.jsx             # Main app
└── index.css           # Global styles
```

## 🐛 Troubleshooting

### Port 5173 already in use?
```powershell
# Kill the process or change port in vite.config.js
```

### Build errors?
```powershell
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

### Styles not loading?
```powershell
# Rebuild Tailwind
npm run dev
```

## 📚 Next Steps

- ✅ Customize `src/projects.json` with real project data
- ✅ Update branding in `tailwind.config.js`
- ✅ Deploy to Vercel or Netlify
- ✅ Share URL with team

## 🆘 Need Help?

Check the full [README.md](./README.md) for detailed documentation.
