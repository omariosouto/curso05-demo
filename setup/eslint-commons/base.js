module.exports = {
  extends: [
    "next",
    "eslint:recommended",
    "jest",
    "plugin:prettier/recommended"
  ],
  env: {
    "jest/globals": true
  },
  rules: {
    "no-console": "error",
  },
};
