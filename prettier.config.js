module.exports = {
  trailingComma: "es5",
  tabWidth: 4,
  singleQuote: true,
  printWidth: 110,
  useTabs: true,
  arrowParens: "always",
  semi: true,
  overrides: [
    {
      files: "*.md",
      options: {
        singleQuote: false
      }
    }
  ]
};
