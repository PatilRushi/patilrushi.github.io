# Setup Instructions

## Prerequisites

You need to install Node.js and npm to run this portfolio locally.

### Install Node.js (Choose one method):

#### Option 1: Using Homebrew (Recommended for macOS)
```bash
# Install Homebrew if you don't have it
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js
brew install node
```

#### Option 2: Download from Official Website
Visit https://nodejs.org/ and download the LTS version for macOS.

#### Option 3: Using nvm (Node Version Manager)
```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Restart your terminal, then install Node.js
nvm install --lts
nvm use --lts
```

## After Installing Node.js

1. **Verify installation:**
   ```bash
   node --version
   npm --version
   ```

2. **Install project dependencies:**
   ```bash
   cd /Users/rushikeshsuhaspatil/CascadeProjects/windsurf-project
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```
   
   The portfolio will be available at `http://localhost:5173`

4. **Build for production:**
   ```bash
   npm run build
   ```
   
   The production files will be in the `dist` folder.

## Quick Start (After Node.js is installed)

```bash
# Navigate to project directory
cd /Users/rushikeshsuhaspatil/CascadeProjects/windsurf-project

# Install dependencies
npm install

# Start development server
npm run dev
```

## Deployment

### Deploy to Netlify (Recommended)

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Deploy:
   ```bash
   netlify deploy --prod --dir=dist
   ```

### Alternative: Manual Deployment

1. Build the project: `npm run build`
2. Upload the `dist` folder to any static hosting service:
   - Netlify
   - Vercel
   - GitHub Pages
   - AWS S3
   - Cloudflare Pages

## Troubleshooting

- **Port already in use**: Change the port in `vite.config.ts` or kill the process using port 5173
- **Module not found errors**: Run `npm install` again
- **Build errors**: Clear cache with `rm -rf node_modules package-lock.json && npm install`
