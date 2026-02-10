# ⚡ Quick Start Guide

## 🎯 Your Portfolio is Ready!

### View it Locally Right Now

Your dev server is already running at:
```
http://localhost:5174
```

**Open this URL in your browser to see your portfolio!**

## 🚀 Deploy to Vercel (5 minutes)

### Quick Steps:

1. **Create GitHub repo** at https://github.com/new
   - Name it: `portfolio` or `amir-herzalla-portfolio`
   - Don't initialize with README

2. **Push your code:**
   ```bash
   cd portfolio-site
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy on Vercel:**
   - Go to https://vercel.com/dashboard
   - Click "Add New Project"
   - Import your GitHub repo
   - Click "Deploy"
   - Done! 🎉

**That's it!** Your portfolio will be live at `https://your-project.vercel.app`

## 📁 Project Structure

```
portfolio-site/
├── src/
│   ├── components/       # All UI components
│   │   ├── ParticleBackground.jsx  # 3D animated background
│   │   ├── Navigation.jsx          # Floating nav bar
│   │   ├── Hero.jsx               # Landing section
│   │   ├── About.jsx              # About section
│   │   ├── Experience.jsx         # Work timeline
│   │   ├── Skills.jsx             # Skills grid
│   │   ├── Contact.jsx            # Contact form
│   │   └── ThemeToggle.jsx        # Dark/Light toggle
│   ├── context/
│   │   └── ThemeContext.jsx       # Theme state management
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles + custom CSS
├── public/               # Static assets
├── dist/                 # Build output (generated)
├── README.md            # Full documentation
├── DEPLOYMENT.md        # Detailed deploy guide
├── FEATURES.md          # Feature list
└── package.json         # Dependencies

```

## 🎨 Customization Quick Tips

### Update Your Content

**Personal Info (Hero.jsx):**
- Line 94-108: Your name and title
- Line 110-121: Description
- Line 123-136: Social links

**Work Experience (Experience.jsx):**
- Line 10-71: `experiences` array
- Add/edit companies, roles, achievements

**Skills (Skills.jsx):**
- Line 12-89: `skillCategories` array
- Add/edit skills and proficiency levels

**Contact Info (Contact.jsx):**
- Line 10-46: `contactInfo` array
- Update email, phone, location, links

### Change Colors

**Edit `src/index.css`:**
```css
@theme {
  --color-tech-cyan: #00d9ff;     /* Change these! */
  --color-tech-purple: #a855f7;
  --color-tech-pink: #ec4899;
  --color-tech-green: #10b981;
}
```

## 🛠️ Commands

```bash
npm run dev      # Start dev server (already running!)
npm run build    # Build for production
npm run preview  # Preview production build
```

## 📖 Full Guides

- **Features List**: Read `FEATURES.md`
- **Deployment Guide**: Read `DEPLOYMENT.md`
- **Full README**: Read `README.md`

## ✅ Checklist Before Deploying

- [ ] Update social links (GitHub, LinkedIn)
- [ ] Verify email address is correct
- [ ] Check phone number format
- [ ] Review all experience dates
- [ ] Test dark and light themes
- [ ] Test on mobile (responsive)
- [ ] Run `npm run build` successfully

## 🎯 Next Steps

1. ✅ **View locally** - http://localhost:5174 (NOW!)
2. 🔄 **Customize content** - Update your info
3. 🎨 **Adjust colors** (optional) - Match your brand
4. 📤 **Deploy to Vercel** - Follow 3 steps above
5. 🔗 **Share your portfolio** - Add to resume/LinkedIn
6. 💼 **Apply for jobs** - Stand out from the crowd!

## 🆘 Need Help?

- **Build fails?** Run `npm run build` and check errors
- **Styling issues?** Check browser console (F12)
- **Git problems?** Make sure you're in `portfolio-site` directory
- **Deployment issues?** See `DEPLOYMENT.md` troubleshooting section

---

**Ready to impress recruiters?** 🚀

Your portfolio is modern, creative, and professional. Good luck!
