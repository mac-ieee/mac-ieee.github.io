# IEEE McMaster Student Branch Website

The official website for the IEEE McMaster Student Branch, built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/).

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 24
- [pnpm](https://pnpm.io/) as pinned in `package.json` (`corepack enable` on Node.js 24)

### Development

```sh
pnpm install
pnpm dev
```

### Build

```sh
pnpm build
```

### Start

```sh
pnpm start
```

## Deployment

### GitHub Pages

In the GitHub repository, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**. Once the workflow is on `main`, pushes to `main` publish the site. You can also run **Deploy to GitHub Pages** manually from `main`.

The workflow uses the base path reported by GitHub Pages and builds for the repository URL or a configured custom domain. To build the static export locally, run `BUILD_TARGET=pages pnpm build`. The generated files are in `out/`.

### Kubernetes fallback

Run **Publish Kubernetes fallback image** in GitHub Actions to publish the ARM64 image to GHCR. Then, from a machine with access to the cluster, apply the existing manifests and restart the deployment to pull the new `:latest` image.

```sh
kubectl apply -f k8s/deployment.yaml
kubectl -n ieee-namespace rollout restart deployment/ieeesb-mcmaster-website
kubectl -n ieee-namespace rollout status deployment/ieeesb-mcmaster-website
```

## Project Structure

```
src/
  app/           # Next.js App Router pages and layouts
  components/    # React components
    ui/          # Reusable UI primitives (Badge, Button, Card)
    about.tsx    # About section
    chapters.tsx # Chapters section
    contact.tsx  # Contact section
    events.tsx   # Events section
    footer.tsx   # Footer
    header.tsx   # Header with navigation
    hero.tsx     # Hero section
    smooth-scroll.tsx  # Smooth scrolling & fade-in animations
    team.tsx     # Team section
  hooks/         # Custom React hooks
public/          # Static assets
```

## How to edit things

If you wish to change something in the website (like add an event or update your profile). Make sure to add your changes in the data file and run the items locally to see if its changed. If so add your changes in a new branch and make a PR so that we can review it.

## Tech Stack

- [Next.js](https://nextjs.org/) 16 with App Router
- [React](https://react.dev/) 19
- [Tailwind CSS](https://tailwindcss.com/) 4
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) for code quality
