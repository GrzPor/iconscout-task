# Compare between [Lottie player](https://www.npmjs.com/package/@lottiefiles/lottie-player) and [Dotlottie player](https://www.npmjs.com/package/@dotlottie/player-component).

Because we can see on NPM page that Dotlottie player it's deprecated and superceded by @lottiefiles/dotlottie-wc, I used for
Dotlottie page this web component plugin.

`const LP = @lottiefiles/lottie-player`

`const DLP = @lottiefiles/dotlottie-wc`

## DLP it's better than LP, why ?

1. It handles .lottie files which are smaller, so they're faster for loading on page,
2. It handle a few animations from one file,
3. It is newer and has more frequent updates,
4. Animations are smoother,
5. Both libraries have similar API (autoplay, loop, src, etc),
6. Both libraries have multi-platform support.

DLP is a more complex and advanced solution.
It is a great tool when you have a lot of animations and you care about page speed.

# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## API Configuration

This project uses the Iconscout API to fetch assets (icons, illustrations, 3D, etc). To configure the API:

1. Copy `.env.example` to a new file named `.env`:

```bash
cp .env.example .env
```

2. Edit the `.env` file and replace `your_client_id_here` with your actual Iconscout Client-ID.

```bash
ICONSCOUT_CLIENT_ID=your_actual_client_id
```

## Linting, Formatting, and SVGO

### Linting

Run ESLint to find and fix code quality issues:

```bash
# Check for linting issues
npm run lint

# Fix linting issues automatically when possible
npm run lint:fix
```

### Formatting

Format code with Prettier:

```bash
# Check formatting issues
npm run format

# Fix formatting issues
npm run format:fix
```

### SVGO

This project uses `nuxt-svgo` module for optimizing SVG files. The module is automatically enabled when running the development server or building the project. SVG optimization happens automatically during the build process.

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
