## Prerequisites

- node: 18
  - Using nvm: https://github.com/nvm-sh/nvm#installing-and-updating
- npm: latest
- pnpm: 8
  - Using Corepack: https://pnpm.io/installation#using-corepack

## Install dependencies

```
pnpm install
```

## Run in development mode

- Start the app, point to local API:

```
pnpm start
```

- If you want to point the local app to the DEV / STAGING environment:

```
pnpm start:dev
```

```
pnpm start:staging
```

- If necessary, change configuration in `src/configuration/local.ts`

## Workspace Set Up

- IDE: VSCode
- Required Extensions:
  - ESLint
  - XState VSCode

## Coverage

```
pnpm cover:unit
```

```
pnpm cover:integration
```

Then copy 2 coverage-final.json file in `unit-out/coverage` and in `cy/coverage` to a new folder named cov-report. Change those files's name to make them distingue like `unit-coverage-final.json` and `integrate-coverage-final.json` . Then

```
pnpm cover:merge-cov-file-lcov
```

You should see a new folder named `coverage`, open `index.html` in it.
