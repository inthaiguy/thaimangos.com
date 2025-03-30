# Thai Mangos

A simple React application built with Vite, React, Tailwind CSS, and Flowbite.

## Features

- Custom mango SVG image
- Responsive design using Tailwind CSS
- Component library with Flowbite

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Deployment

The site is deployed on Cloudflare Workers. To deploy:

```bash
# First build the project
npm run build

# Then deploy using Wrangler
npx wrangler deploy
```

The live site is available at: https://thaimangos.zonable.workers.dev

### First-time deployment setup:
1. When running `npx wrangler deploy` for the first time, you'll be prompted to install Wrangler
2. You'll then be asked to authenticate with Cloudflare through your browser
3. Once authenticated, Wrangler will deploy your site automatically

## Technologies Used

- [Vite](https://vitejs.dev/) - Fast build tool
- [React](https://react.dev/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Flowbite](https://flowbite.com/) - Tailwind CSS component library
- [Cloudflare Workers](https://workers.cloudflare.com/) - Serverless platform for deployment

## Memory Game

The application includes a memory card game where you can match pairs of Thai fruits, including the star of the show - the mango!
