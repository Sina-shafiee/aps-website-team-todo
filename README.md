# WEBSITE TEAM UP SKILL TASK

<p align="center">
  <a href="#getting-started">How To Use</a> •
  <a href="#file-and-folder-structure">folder structure</a> •
  <a href="#license">License</a>
</p>

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Open your terminal in root directory of project and run following command to install pnpm and dependencies

```bash
npm i -g pnpm & pnpm install
```

Run the development server:

```bash
pnpm dev
```

Build project and run production server

```bash
pnpm build & pnpm start
```

Run tests

```bash
pnpm test
```

Run tests live

```bash
pnpm test:watch
```

In order to prettify the code
you could use prettier extension or following command

```bash
pnpm prettier
```

## File and folder structure

    .
    ├── public
    ├── src                      # all source files live here
    │   ├── app                  # webapp pages
    │   ├── assets               # icons images etc
    │   └── components
    │          ├── ui                  # global ui related components
    │          ├── domains             # page's specific components
    │          ├── form                # form components
    │          └── ...                 # global components
    │   ├── store                # redux store & store related logic
    │   ├── theme                # theme provider
    │   ├── types                # global app types
    │   └── utils
    │          ├── constants           # constant data
    │          └── validation          # zod validations
    └── ...
