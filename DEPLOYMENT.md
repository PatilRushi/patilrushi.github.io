# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio to `patilrushi.github.io`.

## Prerequisites

- GitHub account
- Git installed on your machine

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. **Important**: Name it exactly `patilrushi.github.io` (replace `patilrushi` with your GitHub username)
3. Make it **Public**
4. Do NOT initialize with README, .gitignore, or license (we already have these)

## Step 2: Initialize Git and Push Code

Run these commands in your project directory:

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Portfolio with advanced animations"

# Add your GitHub repository as remote
git remote add origin https://github.com/patilrushi/patilrushi.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. In the left sidebar, click **Pages**
4. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
5. The workflow will automatically deploy your site

## Step 4: Wait for Deployment

- The GitHub Actions workflow will automatically build and deploy your site
- Go to the **Actions** tab to see the deployment progress
- Once complete (usually 2-3 minutes), your site will be live at:
  - **https://patilrushi.github.io**

## Automatic Deployments

Every time you push to the `main` branch, GitHub Actions will automatically:
1. Build your React app
2. Deploy it to GitHub Pages
3. Your site will be updated within minutes

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Troubleshooting

### Site not loading?
- Check the Actions tab for any build errors
- Ensure GitHub Pages is enabled in Settings > Pages
- Wait a few minutes after the first deployment

### 404 errors on refresh?
- This is handled by the GitHub Actions workflow with proper redirects

### Need to update content?
1. Make your changes locally
2. Test with `npm run dev`
3. Commit and push:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push
   ```

## Custom Domain (Optional)

To use a custom domain like `www.yourname.com`:
1. Add a `CNAME` file with your domain
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings to use custom domain

---

**Your portfolio will be live at: https://patilrushi.github.io** 🚀
