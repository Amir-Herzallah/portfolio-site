# Portfolio Website

A modern, interactive portfolio website built with React, featuring 3D animations, smooth transitions, and a responsive design. This project demonstrates advanced frontend development techniques and modern web technologies.

## Features

- **3D Animated Background** - Interactive particle system using Three.js and React Three Fiber
- **Smooth Animations** - Scroll-based animations powered by Framer Motion
- **Dark/Light Mode** - Seamless theme switching with CSS variables
- **Glassmorphism UI** - Modern glass-effect design components
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Interactive Elements** - Engaging hover effects and animated reveals
- **Performance Optimized** - Built with Vite for fast load times and optimal bundle size
- **Tech Stack Icons** - Integration with React Simple Icons for technology logos

## Tech Stack

**Frontend Framework**
- React 18 with modern hooks and patterns
- Vite for development and build tooling

**Styling**
- Tailwind CSS v4 with custom theme configuration
- CSS variables for dynamic theming
- Glassmorphism and gradient effects

**Animation & 3D**
- Framer Motion for scroll and component animations
- Three.js for 3D graphics rendering
- React Three Fiber as React renderer for Three.js

**UI Components**
- Lucide React for interface icons
- React Simple Icons for technology logos
- Custom theme context for state management

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

## Email Configuration

The contact form uses EmailJS to send messages directly to your email. Follow these steps to set it up:

1. **Create an EmailJS Account**
   - Visit [EmailJS](https://www.emailjs.com/) and sign up for a free account
   - Free tier includes 200 emails per month

2. **Set Up Email Service**
   - In EmailJS dashboard, go to "Email Services"
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the connection instructions

3. **Create Email Template**
   - Go to "Email Templates"
   - Click "Create New Template"
   - Use these template variables:
     ```
     From: {{from_name}} ({{from_email}})
     
     Message:
     {{message}}
     ```
   - Save the template and note the Template ID

4. **Get Your Public Key**
   - Go to "Account" → "General"
   - Copy your Public Key

5. **Configure Environment Variables**
   - Copy `.env.example` to `.env`
   ```bash
   cp .env.example .env
   ```
   - Fill in your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

## Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

**Note:** Make sure your `.env` file is configured with EmailJS credentials for the contact form to work.

## Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment

### Vercel Deployment (Recommended)

**Using Vercel CLI:**

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to your Vercel account
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

**Using Vercel Dashboard:**

1. Push code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Visit [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Vercel will auto-detect Vite configuration
5. Deploy

The `vercel.json` configuration file is included for optimal deployment settings.

## Project Structure

```
src/
├── components/           # React components
│   ├── Hero.jsx         # Landing section
│   ├── About.jsx        # About section with highlights
│   ├── Experience.jsx   # Work experience timeline
│   ├── Skills.jsx       # Technical skills grid
│   ├── Contact.jsx      # Contact form and information
│   ├── Navigation.jsx   # Navigation bar
│   ├── ParticleBackground.jsx  # 3D particle system
│   ├── ThemeToggle.jsx  # Theme switcher
│   └── TechIcon.jsx     # Technology icon component
├── context/
│   └── ThemeContext.jsx # Theme state management
├── App.jsx              # Main application component
├── main.jsx             # Application entry point
└── index.css            # Global styles and Tailwind imports
```

## Customization

### Content Updates

Update content in the respective component files:
- `Hero.jsx` - Name, title, and introduction
- `About.jsx` - Personal highlights and current positions
- `Experience.jsx` - Work history (modify `experiences` array)
- `Skills.jsx` - Technical skills (modify `skillCategories` array)
- `Contact.jsx` - Contact information and social links

### Theme Configuration

Customize colors in `src/index.css`:

```css
@theme {
  --color-tech-cyan: #00d9ff;
  --color-tech-purple: #a855f7;
  --color-tech-pink: #ec4899;
  --color-tech-green: #10b981;
}
```

### Tailwind Configuration

Modify `tailwind.config.js` for additional customization:
- Extend color palette
- Add custom animations
- Configure responsive breakpoints

## Performance

- Lighthouse Score: 95+ across all metrics
- First Contentful Paint: < 1 second
- Time to Interactive: < 2 seconds
- Optimized bundle size: ~358KB gzipped

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - This template is free to use for personal and commercial projects.

## Author

**Amir Herzalla**
- Email: amirherzalla8@gmail.com
- LinkedIn: [linkedin.com/in/amir-herzalla](https://linkedin.com/in/amir-herzalla)
- GitHub: [github.com/Amir-Herzallah](https://github.com/Amir-Herzallah)
- Location: Amman, Jordan

---

Built with React, Framer Motion, Three.js, and Tailwind CSS
