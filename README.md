# Project Name

A modern web application built with Turborepo, Next.js, Tailwind CSS, and
Vitest. This monorepo includes shared configurations and packages for efficient
development.

## 🚀 Features

- **Turborepo**: Fast, scalable monorepo management
- **Next.js**: Full-stack React framework
- **Tailwind CSS**: Utility-first CSS framework
- **Shadcn**: Utility-first CSS framework
- **Vitest**: Blazing-fast unit testing
- **TypeScript**: Type-safe JavaScript development
- **ESLint**: Code quality and style enforcement
- **Shared Configs**: Consistent ESLint, Tailwind, Prettier, and TypeScript
  configurations

## 📁 Project Structure

```bash
.
├── apps/
│   ├── shop/               # Next.js application
│   └── blog/               # blog app (optional)
├── packages/
│   ├── config/              # Shared ESLint, Prettier, and TypeScript configs
│   ├── ui/                # Shared UI components using shadcn
│   └── db/                # Shared db
│   └── api/               # shared api
├── package.json               # Root package.json
└── turbo.json                # Turborepo configuration
```

🛠️ Setup Clone the repository

```bash
git clone https://github.com/dzc0d3r/piassa.shop.git
cd piassa.shop
```

Install dependencies

```bash
    pnpm install
```

🧪 Testing

Run unit tests with Vitest:

```bash
pnpm test
```

🧰 Scripts

`pnpm dev` : Start development servers for all apps

`pnpm build` : Build all apps and packages

`pnpm lint` : Lint all files with ESLint

`pnpm format` : Format all files with Prettier

`pnpm test` : Run all tests with Vitest

`pnpm ui:add {shadcn-component}`: installs the shadcn component in shared ui
