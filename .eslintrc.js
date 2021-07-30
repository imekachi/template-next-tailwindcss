module.exports = {
  root: true,
  extends: [
    'react-app',
    'plugin:@next/next/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    // This rule is not compatible with Next.js's <Link /> components
    'jsx-a11y/anchor-is-valid': 'off',
    // No unused variables
    '@typescript-eslint/no-unused-vars': 'error',
    'arrow-body-style': ['error', 'as-needed'],
  },
}
