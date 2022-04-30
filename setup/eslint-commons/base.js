module.exports = {
  extends: [
    "next",
    "eslint:recommended",
    "jest",
    "plugin:prettier/recommended"
  ],
  settings: {
    next: {
      rootDir: ["apps/*/", "packages/*/"],
    },
  },
  env: {
    "jest/globals": true
  },
  rules: {
    "no-console": "error",
  },
};
