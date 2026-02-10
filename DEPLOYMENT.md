# 🚀 Deployment Guide - Vercel

This guide will walk you through deploying your portfolio to Vercel.

## Prerequisites

- A GitHub account
- A Vercel account (sign up at [vercel.com](https://vercel.com) - it's free!)
- Your portfolio code (already set up in this directory)

## Method 1: Deploy via Vercel Dashboard (Recommended for Beginners)

### Step 1: Push to GitHub

1. Create a new repository on GitHub:
   - Go to [github.com/new](https://github.com/new)
   - Name it something like `portfolio` or `amir-herzalla-portfolio`
   - Keep it public or private (your choice)
   - DO NOT initialize with README (we already have one)
   - Click "Create repository"

2. Push your code to GitHub:
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will automatically detect it's a Vite project
5. Click "Deploy" (no configuration needed - our `vercel.json` handles it!)
6. Wait 1-2 minutes for the build to complete
7. 🎉 Your portfolio is live!

Vercel will give you a URL like: `https://your-project-name.vercel.app`

### Step 3: Custom Domain (Optional)

1. In your Vercel project dashboard, go to "Settings" > "Domains"
2. Add your custom domain (e.g., `amirherzalla.com`)
3. Follow Vercel's instructions to update your DNS settings
4. Vercel automatically handles SSL certificates!

## Method 2: Deploy via Vercel CLI (For Advanced Users)

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

### Step 3: Deploy

For preview deployment:
```bash
vercel
```

For production deployment:
```bash
vercel --prod
```

The CLI will guide you through the setup. Just accept the defaults!

## Automatic Deployments

Once connected to GitHub:
- Every push to `main` branch = Production deployment
- Every push to other branches = Preview deployment
- Pull requests get their own preview URLs

## Environment Variables

If you need to add environment variables later:
1. Go to your project on Vercel
2. Settings > Environment Variables
3. Add your variables
4. Redeploy

## Monitoring & Analytics

Vercel provides:
- Real-time deployment logs
- Analytics (page views, performance)
- Error tracking
- Performance insights

Access these from your project dashboard on Vercel.

## Troubleshooting

### Build fails
- Check the build logs in Vercel dashboard
- Make sure `npm run build` works locally first
- Verify all dependencies are in `package.json`

### Blank page after deployment
- Check browser console for errors
- Verify the build output is in the `dist` folder
- Make sure `vercel.json` is properly configured

### Routes not working
- Our `vercel.json` has rewrite rules for SPA routing
- If issues persist, check Vercel's routing documentation

## Performance Optimization (Optional)

After deployment, you can optimize:
1. Enable image optimization in Vercel settings
2. Configure caching headers
3. Use Vercel's Edge Network features
4. Consider code splitting for the Three.js bundle

## Support

- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Vercel Support: Available in your dashboard
- Community: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

## Your Portfolio URL

After deployment, share your portfolio:
- Update your resume with the URL
- Add it to your LinkedIn profile
- Share it on social media
- Use it in job applications

---

**Ready to deploy? Follow Method 1 above!** 🚀

Any questions? The Vercel documentation is excellent, or reach out to me!
