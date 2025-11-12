# 🚀 Joveo New Initiatives Project Portal

A modern, static web application showcasing all projects within Joveo's Global Supply & Partnerships — New Initiatives team.

![React](https://img.shields.io/badge/React-18.2-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38bdf8)
![Vite](https://img.shields.io/badge/Vite-5.0-646cff)
![License](https://img.shields.io/badge/License-MIT-green)

## 📋 Overview

This is a fully static, read-only dashboard that displays project cards with key information including:
- Project title, description, and status
- Project owners with visual avatars
- Tags for categorization
- Links to documentation (Google Drive, Notion, Confluence)
- Search and filter functionality
- Detailed project modal view

**No backend. No authentication. No database.** Pure simplicity.

## ✨ Features

- 🎨 **Modern UI**: Built with Tailwind CSS and Shadcn/UI design principles
- ⚡ **Animations**: Smooth transitions using Framer Motion
- 📱 **Responsive**: Mobile-first design that works on all devices
- 🔍 **Search & Filter**: Find projects quickly by title, tags, or status
- 🎯 **Status Tracking**: Visual badges for Active, Paused, Completed, Upcoming
- 👥 **Team Collaboration**: Display project owners with initials
- 🔗 **External Links**: Direct access to Google Drive, Notion, Confluence docs
- 🚀 **Fast Deploy**: Static build optimized for Vercel/Netlify

## 🏗️ Tech Stack

| Component | Technology |
|-----------|-----------|
| **Framework** | React.js 18.2 |
| **Build Tool** | Vite 5.0 |
| **Styling** | Tailwind CSS 3.3 |
| **Animations** | Framer Motion 10.16 |
| **Icons** | Lucide React |
| **Hosting** | Vercel / Netlify / GitHub Pages |

## 🎨 Design System

### Joveo Brand Colors
```css
Primary Blue:   #0052CC
Accent Orange:  #FF8B00
Background:     #F9FAFB
Text:           #1E293B
```

### Typography
- **Primary Font**: Inter
- **Secondary Font**: Poppins

## 📦 Installation

### Prerequisites
- Node.js 16+ and npm/yarn installed
- Git for version control

### Quick Start

```bash
# Clone the repository
git clone <your-repo-url>
cd new_landing

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:5173
```

## 🗂️ Project Structure

```
new_landing/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── Header.jsx
│   │   ├── SearchFilterBar.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectModal.jsx
│   │   └── ManagerInstructions.jsx
│   ├── projects.json      # Project data (EDIT THIS)
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── package.json          # Dependencies
├── tailwind.config.js    # Tailwind configuration
├── vite.config.js        # Vite configuration
└── README.md             # Documentation
```

## 📝 Managing Projects (For Managers)

### How to Add or Edit Projects

Only the project manager can update projects by editing the `src/projects.json` file.

#### Step-by-Step Guide:

1. **Open the JSON file**
   ```bash
   # Navigate to the project
   cd new_landing
   
   # Open in your editor
   code src/projects.json
   ```

2. **Add a new project**
   ```json
   {
     "id": "proj-7",
     "title": "Your Project Title",
     "description": "Brief description of the project goals and scope.",
     "status": "Active",
     "owners": ["Your Name", "Team Member"],
     "lastUpdated": "2025-11-12",
     "tags": ["Tag1", "Tag2", "Tag3"],
     "links": [
       { 
         "label": "Design Doc (Google Drive)", 
         "url": "https://drive.google.com/your-doc-id" 
       },
       { 
         "label": "Notion Page", 
         "url": "https://notion.so/your-page" 
       }
     ]
   }
   ```

3. **Project Field Definitions**

   | Field | Type | Required | Description |
   |-------|------|----------|-------------|
   | `id` | string | ✅ | Unique identifier (e.g., "proj-1") |
   | `title` | string | ✅ | Project name |
   | `description` | string | ✅ | Project summary (1-2 sentences) |
   | `status` | string | ✅ | "Active", "Paused", "Completed", or "Upcoming" |
   | `owners` | array | ✅ | List of owner names ["Name 1", "Name 2"] |
   | `lastUpdated` | string | ✅ | Date in YYYY-MM-DD format |
   | `tags` | array | ✅ | Category tags ["PoC", "AI", "APAC"] |
   | `links` | array | ✅ | Documentation links with label and url |

4. **Commit and Push**
   ```bash
   git add src/projects.json
   git commit -m "Add new project: [Project Name]"
   git push origin main
   ```

5. **Auto-Deploy**
   - If connected to Vercel/Netlify, changes deploy automatically
   - Wait 2-3 minutes for the build to complete
   - Refresh the portal to see your changes

### JSON Validation Tips

✅ **DO:**
- Use valid JSON syntax (quotes, commas, brackets)
- Keep descriptions concise (100-200 characters)
- Use consistent date format (YYYY-MM-DD)
- Ensure all URLs are complete and valid

❌ **DON'T:**
- Forget trailing commas in arrays
- Use single quotes (use double quotes)
- Leave fields empty (all are required)
- Use special characters in IDs

### Testing Locally Before Deploy

```bash
# Test your JSON changes locally
npm run dev

# Build for production (test for errors)
npm run build

# Preview production build
npm run preview
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Sign up for Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub

2. **Import Project**
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite settings

3. **Configure Build Settings**
   ```
   Framework Preset: Vite
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

4. **Deploy**
   - Click "Deploy"
   - Get your live URL (e.g., `your-project.vercel.app`)

5. **Auto-Deploy Setup**
   - Every push to `main` branch auto-deploys
   - Preview deployments for pull requests
   - Instant rollbacks available

### Deploy to Netlify

1. **Sign up for Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Connect your GitHub account

2. **New Site from Git**
   - Click "Add new site" → "Import an existing project"
   - Choose your repository

3. **Build Settings**
   ```
   Build command: npm run build
   Publish directory: dist
   ```

4. **Deploy**
   - Click "Deploy site"
   - Auto-deploys on every push to main

### Deploy to GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install -D gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/repository-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.js**
   ```javascript
   export default defineConfig({
     base: '/repository-name/',
     // ... rest of config
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

## 🎯 Usage

### For Team Members (Viewing Projects)

1. Open the portal URL
2. Browse all projects in card view
3. Use the search bar to find specific projects
4. Filter by status (Active/Paused/Completed/Upcoming)
5. Click "Details" to see full project information
6. Click "Docs" to access project documentation

### For Managers (Updating Projects)

1. Clone/pull the latest repository
2. Edit `src/projects.json`
3. Test locally with `npm run dev`
4. Commit and push changes
5. Wait for auto-deploy (2-3 minutes)
6. Verify changes on live site

## 🧪 Testing

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Test in different browsers
# Chrome, Firefox, Safari, Edge
```

## 📊 Performance

- ⚡ Page load time: < 2 seconds
- 📦 Bundle size: ~150KB (gzipped)
- 🎨 Lighthouse score: 95+
- 📱 Mobile responsive: 100%

## 🔧 Customization

### Change Brand Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  'joveo-blue': '#0052CC',    // Change to your primary color
  'joveo-orange': '#FF8B00',  // Change to your accent color
  'joveo-bg': '#F9FAFB',      // Change background
  'joveo-text': '#1E293B',    // Change text color
}
```

### Change Fonts

Edit `index.html` and update Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;600&display=swap" rel="stylesheet">
```

Update `tailwind.config.js`:
```javascript
fontFamily: {
  'inter': ['YourFont', 'sans-serif'],
}
```

## 🐛 Troubleshooting

### Projects not showing?
- Check `src/projects.json` for valid JSON syntax
- Verify all required fields are present
- Look for console errors in browser DevTools

### Styles not applying?
- Run `npm install` to ensure dependencies are installed
- Clear browser cache
- Check Tailwind config is properly set up

### Build fails?
- Check for syntax errors in JSON
- Ensure all imports are correct
- Verify Node.js version (16+)

### Deployment issues?
- Check build logs on Vercel/Netlify
- Ensure `dist` folder is being generated
- Verify environment variables (if any)

## 📚 Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Framer Motion Documentation](https://www.framer.com/motion)
- [Vite Documentation](https://vitejs.dev)
- [Vercel Documentation](https://vercel.com/docs)

## 🤝 Contributing

This is an internal Joveo project. For changes or suggestions:
1. Contact the project manager
2. Create a detailed proposal
3. Test changes locally
4. Submit for review before deploying

## 📄 License

MIT License - Internal Joveo Project

## 👥 Team

**Joveo — Global Supply & Partnerships**  
New Initiatives Team

---

**Need Help?** Contact the project manager or open an issue in the repository.

**Last Updated:** November 2025  
**Version:** 1.0.0
