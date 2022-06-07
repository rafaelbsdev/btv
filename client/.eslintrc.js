module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': 0,
    'no-console': 0,
    'no-unused-vars': 0,
    'react/button-has-type': 0,
    'max-len': 0,
  },
};
