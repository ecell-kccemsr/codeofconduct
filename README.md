# Singularity Hackathon · Code of Conduct

A single-page, minimalist code of conduct site for the Singularity Hackathon. The layout focuses on highly readable typography, bold sectioning, and a custom dot cursor for a tactile, branded feel. Built with Vite + React + TypeScript and ready for Netlify deployments.

## Features

- Clean hero + sectioned content describing expectations, boundaries, and reporting flow.
- Responsive grid layout with purposeful typography (`Space Grotesk` + `Sora`).
- Custom cursor dot on pointer devices for a subtle interactive cue.
- Lightweight design (no external UI dependencies) that ships as a static bundle.

## Getting Started

```bash
npm install          # install dependencies
npm run dev          # start Vite dev server with HMR
npm run build        # type-check and generate production build in dist/
npm run preview      # (optional) preview the production build locally
```

## Deploying to Netlify

1. Push this project to your Git provider of choice.
2. In Netlify, create a new site from Git and select the repository.
3. Use `npm run build` as the build command and `dist` as the publish directory.
4. (Optional) For manual deploys, install the Netlify CLI and run `netlify deploy --prod --dir=dist` after building.

### Replace contact details

The hotline and email listed on the page are placeholders. Update the text inside `src/App.tsx` with your real safety contact information before publishing the site.

## Tech Stack

- [Vite](https://vite.dev/) for fast bundling and dev server
- [React 19](https://react.dev/) with TypeScript
- Vanilla CSS with CSS variables and gradient backdrops

## License

This project is provided as-is for hackathon organizing teams. Adapt freely to match your event’s policies.
