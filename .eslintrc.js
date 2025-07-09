module.exports = {
  overrides: [
    {
      files: ["src/app/(main)/components/Hero.tsx"],
      rules: {
        "react/no-unescaped-entities": "off"
      }
    },
    {
      files: ["src/app/layout.tsx"],
      rules: {
        "@typescript-eslint/no-unused-vars": "off"
      }
    }
  ]
};