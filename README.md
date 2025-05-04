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
# Deploy using Wrangler (will automatically run the build)
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

---

## Project Overview

**Thai Mangos** is an interactive, educational web application dedicated to the rich diversity of mango varieties found in Thailand. The site provides detailed information, fun facts, and visual galleries for each mango type, making it a great resource for both mango enthusiasts and newcomers. 

The project features:
- Individual pages for each major Thai mango variety, including beautiful photos and unique facts
- A responsive, mobile-friendly design that looks great on all devices
- A memory card game to help users learn about Thai fruits in a fun, engaging way
- Modern web best practices, including PWA support (favicons, manifest)
- Deployed globally on Cloudflare Workers for fast, serverless access

## How to Use
- Browse the homepage for a glossary of mango varieties
- Click on any mango to learn more, view a photo carousel, and read interesting facts
- Try the quiz to test your knowledge of Thai fruits
- The site is fully responsive and works well on both desktop and mobile browsers

## Contributing
Contributions are welcome! If you want to add new mango varieties, improve the design, or enhance the games, feel free to open a pull request or issue.

## Credits
- Mango images and facts curated from Thai agricultural sources and local growers
- UI inspired by modern educational and culinary websites
- Created by Caius Blair
- Deployed on Cloudflare Workers
- Made on Windsurf
- Used Cascade for code editing


---
