# TypeScript Project Creation

## 1. Create a Basic TypeScript Project

```bash
mkdir my-project
cd my-project

npm init -y
npm install -D typescript tsx

npx tsc --init
touch index.ts
```

---

## 2. Compile & Run

### Compile TypeScript

With `tsconfig.json`, use:

```bash
npx tsc
```

This compiles the project according to `tsconfig.json`.

> Do **not** use `npx tsc index.ts` when you want `tsconfig.json` to be used.

### Run the JavaScript

```bash
node index.js
```

### Run TypeScript Directly with `tsx`

```bash
npx tsx index.ts
```

> **⚠️ Warning:** `tsx` **skips type-checking entirely**. It strips types and runs the JS using esbuild. Type errors will NOT be reported.

---

## 3. Type-Checking

To check for type errors without emitting files:

```bash
npx tsc --noEmit
```

Add it as a script in `package.json`:

```json
"scripts": {
  "typecheck": "tsc --noEmit"
}
```

Then run:

```bash
npm run typecheck
```

---

## 4. Development Watch Mode (Hot Reload + Type-Checking)

### Option A: Type-Checking Only (Watch)

```bash
npx tsc --watch --noEmit
```

Reports type errors on every save, but does not run the code.

### Option B: Run Only (Watch)

```bash
npx tsx watch index.ts
```

Re-runs the program on every save, but does **not** type-check.

### Option C: Both Together (Recommended)

Add a `dev` script to `package.json` that runs both in parallel:

```json
"scripts": {
  "typecheck": "tsc --noEmit",
  "dev": "tsc --watch --noEmit & tsx watch index.ts"
}
```

Then run:

```bash
npm run dev
```

On every save you get:
- **Type errors** from `tsc --watch` (compiler warnings you must fix)
- **Program output** from `tsx watch` (live execution)

> **Note:** `tsx watch` will still execute even with type errors. Treat the `tsc` errors as your guard.

---

## Quick Reference

| Task | Command |
|---|---|
| Install TypeScript + tsx | `npm install -D typescript tsx` |
| Create tsconfig | `npx tsc --init` |
| Compile project | `npx tsc` |
| Type-check only | `npx tsc --noEmit` |
| Watch compiler | `npx tsc --watch` |
| Run TS directly (no type-check) | `npx tsx index.ts` |
| Watch + run (no type-check) | `npx tsx watch index.ts` |
| **Dev mode (type-check + run)** | `npm run dev` |

---

## Recommended `package.json` Scripts

```json
{
  "scripts": {
    "typecheck": "tsc --noEmit",
    "dev": "tsc --watch --noEmit & tsx watch index.ts"
  },
  "devDependencies": {
    "tsx": "^4.x",
    "typescript": "^7.x"
  }
}
```

> **Recommendation:** Always use `npm run dev` during development so you never miss type errors.
