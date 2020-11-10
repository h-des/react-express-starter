module.exports = {
  parser: 'babel-eslint',
  extends: ['react-app', 'prettier', 'prettier/react'],
  plugins: ['prettier', 'react-hooks'],
  env: {
    browser: true,
  },
  rules: {
    'react/jsx-sort-props': [
      1,
      {
        callbacksLast: true,
        noSortAlphabetically: true,
      },
    ],
    'no-duplicate-imports': 'error',
    'prettier/prettier': [
      1,
      {
        singleQuote: true,
        semi: false,
      },
    ],
    'prefer-const': 2,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'no-unused-vars': [
      1,
      {
        args: 'none',
        ignoreRestSiblings: true,
      },
    ],
    'react/jsx-filename-extension': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/prefer-default-export': 0,
    'no-restricted-globals': [1, 'warning'],
  },
}
