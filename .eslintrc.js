module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  extends: [
    "standard"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module"
  },
  plugins: [
    "@typescript-eslint"
  ],
  rules: {
    "no-unused-vars": 0,
    quotes: ["error", "double"],
    semi: [1, "always"],
    indent: "off",
    curly: "error",
    "no-console": "off",
    camelcase: "off"
  }
};