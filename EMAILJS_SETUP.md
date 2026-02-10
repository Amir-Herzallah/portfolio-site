# EmailJS Setup Guide

Follow these steps to configure the contact form to receive messages directly to your email.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

**Free Tier:** 200 emails per month (perfect for a portfolio site)

## Step 2: Add Email Service

1. In the EmailJS dashboard, click on **"Email Services"** in the left sidebar
2. Click **"Add New Service"**
3. Select your email provider:
   - **Gmail** (recommended)
   - Outlook
   - Yahoo
   - Or any custom SMTP

### For Gmail:
1. Select "Gmail"
2. Click "Connect Account"
3. Sign in with your Google account (amirherzalla8@gmail.com)
4. Grant EmailJS permission to send emails
5. Your Service ID will be generated (e.g., `service_abc123`)
6. **Copy this Service ID** - you'll need it later

## Step 3: Create Email Template

1. Click on **"Email Templates"** in the left sidebar
2. Click **"Create New Template"**
3. Give it a name like "Portfolio Contact Form"
4. Configure the template:

**Subject:**
```
New Contact Form Message from {{from_name}}
```

**Content:**
```
You have received a new message from your portfolio website.

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

5. Click **"Save"**
6. **Copy the Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key

1. Click on **"Account"** in the left sidebar
2. Go to the **"General"** tab
3. Find your **Public Key** (looks like `abc123XYZ`)
4. **Copy this Public Key**

## Step 5: Configure Your Project

1. In your project folder, create a `.env` file:
```bash
cp .env.example .env
```

2. Open the `.env` file and paste your credentials:
```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=abc123XYZ
```

Replace the values with your actual IDs from EmailJS.

## Step 6: Test the Contact Form

1. Start your development server:
```bash
npm run dev
```

2. Open `http://localhost:5173`
3. Navigate to the Contact section
4. Fill out the form and click "Send Message"
5. Check your email (amirherzalla8@gmail.com) - you should receive the message!

## Troubleshooting

### Form shows "Something went wrong"
- Check that all three environment variables are set correctly
- Make sure there are no spaces or quotes around the values
- Verify your EmailJS service and template are active

### Emails not arriving
- Check your spam folder
- Verify the email service is connected in EmailJS dashboard
- Make sure you haven't exceeded the 200 emails/month limit

### Console errors about CORS
- This shouldn't happen with EmailJS, but if it does:
- Check that your public key is correct
- Verify the service and template IDs match

## Security Notes

- Never commit your `.env` file to Git (it's already in .gitignore)
- The `.env.example` file is safe to commit (it has no real credentials)
- Your EmailJS public key is safe to expose (it's designed for frontend use)

## Deployment Note

When deploying to Vercel:
1. Go to your project settings on Vercel
2. Navigate to "Environment Variables"
3. Add all three EmailJS variables
4. Redeploy your project

---

Once set up, all contact form submissions will be sent directly to amirherzalla8@gmail.com!
