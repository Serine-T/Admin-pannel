module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-unused-vars': 'warn',
    'react/prop-types': 'off',
    'eol-last': 1,
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 3 }],
    'newline-before-return': 1,
    'object-curly-spacing': ['error', 'always'],
  },
};
