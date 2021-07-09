# orbit-record-cache-import-test

Repository used to resolve issue with importing `@orbit/record-cache` with Vite.

Run Vite dev server to see the error.

Tested with Node.js 14.16.1 and Chrome 91.0.4472.124.

Issue: https://github.com/orbitjs/orbit/issues/861

## Usage

Install dependencies:
```
npm i
```

Run Vite dev server:
```
npm run dev
```

Build main.ts:
```
npm run build
```

Run Express server to compare with dev:
```
npm run server
```
