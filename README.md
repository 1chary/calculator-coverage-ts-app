# Calculator Coverage (TypeScript) — App Repo

React + TypeScript app instrumented with Istanbul.
Deployed on Vercel — `window.__coverage__` available in the browser.

## Setup
```bash
npm install
```

## Local dev (no instrumentation)
```bash
npm start
```

## Deploy to Vercel
```bash
npm i -g vercel
vercel --prod
# Vercel builds with REACT_APP_COVERAGE=true
# babel-plugin-istanbul instruments the TS→JS compiled output
# window.__coverage__ is available in the deployed browser app
```

## Key files
| File | Purpose |
|------|---------|
| `src/math.ts` | TypeScript Calculator class — the instrumented source |
| `src/App.tsx` | React UI |
| `tsconfig.json` | sourceMap + inlineSources → enables JS→TS line translation |
| `api/coverage.js` | Vercel serverless — receives/stores coverage from test scripts |
| `vercel.json` | Vercel build config — sets REACT_APP_COVERAGE=true |
