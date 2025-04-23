# What I didn't do:

### Didn't use Lottie player and Dotlottie player for Lottie Animations tab, why ?

Because endpoint returns only a .mp4 file, when the library wants lottie or json file.
[endpoint without lottie or json data](readme/no-json-and-no-lottie.png)

### Didn't compare both of them and write brief conclusion which one is best choice and why.

I didn't do it because I didn't initialize aboved library so there was no possibility to compate them (Dotlottie it's deprecated so best choice goes to Lottie player).

### Figma file with page design doesn't have all scenarios for dropdowns, menus etc.

I did a few things just for functionality and few I just didn't touch.
[figma1](readme/figma1.png)
[figma2](readme/figma2.png)

# What I did why my problems ?

**I sent a email with images and questions to our contact person and I know that my email was forwarded to
peoples from Lottie, but I didn't receive any response.**

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
