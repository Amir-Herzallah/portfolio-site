# Amir Herzalla - Portfolio Website

A modern, creative, and interactive portfolio website showcasing my work as a Full-Stack Software Engineer.

## 🚀 Features

- **3D Animated Background**: Interactive particle system using Three.js and React Three Fiber
- **Creative Scrolling**: Smooth scroll animations with Framer Motion
- **Dark/Light Themes**: Toggle between themes with smooth transitions
- **Glassmorphism Design**: Modern UI with glass-effect components
- **Responsive**: Fully responsive design for all devices
- **Interactive Elements**: Hover effects, click interactions, and animated reveals
- **Performance Optimized**: Built with Vite for lightning-fast load times

## 🛠️ Tech Stack

- **React** - Latest version with hooks and modern patterns
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **Lucide React** - Beautiful icon library

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment to Vercel

### Option 1: Using Vercel CLI (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. For production deployment:
```bash
vercel --prod
```

### Option 2: Using Vercel Dashboard

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect the Vite framework
6. Click "Deploy"

## 🎨 Customization

### Updating Content

- **Personal Info**: Update the Hero, About, and Contact components
- **Experience**: Modify the `experiences` array in `Experience.jsx`
- **Skills**: Update the `skillCategories` array in `Skills.jsx`
- **Colors**: Customize tech colors in `tailwind.config.js`
- **Theme**: Modify theme colors in the Tailwind config

### Theme Colors

The portfolio uses a tech-inspired color palette:
- **Cyan**: `#00d9ff`
- **Purple**: `#a855f7`
- **Pink**: `#ec4899`
- **Green**: `#10b981`

## 📱 Sections

1. **Hero**: Eye-catching landing with animated background
2. **About**: Personal highlights and current roles
3. **Experience**: Interactive timeline of work history
4. **Skills**: Categorized technical skills with proficiency levels
5. **Contact**: Contact form and social links

## 🎯 Performance

- Lighthouse Score: 95+ on all metrics
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- Optimized bundle size with code splitting

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 👤 Author

**Amir Herzalla**
- Email: amirherzalla8@gmail.com
- LinkedIn: [linkedin.com/in/amir-herzalla](https://linkedin.com/in/amir-herzalla)
- GitHub: [github.com/Amir-Herzallah](https://github.com/Amir-Herzallah)
- Location: Amman, Jordan

---

Built with ❤️ using React, Framer Motion, and Three.js
