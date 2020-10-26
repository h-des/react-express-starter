module.exports = {
  env: {
    commonjs: true,
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  globals: {},
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "prettier", "react-hooks", "simple-import-sort"],
  rules: {
    "no-unused-vars": "off",
    "react/prop-types": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/no-unescaped-entities": "off",
    "camelcase": "off",
    "simple-import-sort/sort": [
      "error",
      {
        "groups": [
          ["^react"],
          // Side effect imports.
          ["^\\u0000"],
          // Packages.
          // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
          ["^@?\\w"],
          // Absolute imports and other imports such as Vue-style `@/foo`.
          // Anything that does not start with a dot.
          ["^[^.]"],
          // Relative parent imports.
          ["^\\.\\."],
          // Relative imports.
          ["^\\."],
        ]
      }
    ]
  }
};
