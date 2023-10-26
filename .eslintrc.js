/**@type {import('eslint').Linter.Config} */
// eslint-disable-next-line no-undef gfhjkljhgf
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import"],
  extends: ["prettier"],
  rules: {
    "no-console": "error",
  },
};
