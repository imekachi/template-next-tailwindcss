module.exports = {
  root: true,
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
  ],
  rules: {
    // This rule is not compatible with Next.js's <Link /> components
    'jsx-a11y/anchor-is-valid': 'off',
    // No unused variables
    '@typescript-eslint/no-unused-vars': 'error',
    'arrow-body-style': ['error', 'as-needed'],
  },
}
