# Refactored Todo CLI

This project is a refactored version of an open-source Todo CLI app built with Node.js. The goal was to improve code readability, performance, and maintainability.

## Features

- Add, remove, and list todos via command line
- Optimized file operations
- Modular and testable code
- User-friendly CLI with yargs

## How to Use

```bash
# Install dependencies
npm install

# Run commands
node index.js add "Buy groceries"
node index.js list
node index.js remove 1
```

## Improvements Made

- Modularized file handling and core logic
- Added CLI parsing with yargs
- Reduced unnecessary disk writes
- Enforced consistent code style with Prettier and ESLint

## Performance Impact

| Metric | Before | After |
|--------|--------|-------|
| Execution Time | ~120ms | ~80ms |
| LOC | 230 | 180 |
