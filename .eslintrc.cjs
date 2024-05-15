module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
      'airbnb',
      'airbnb/hooks',
      'airbnb-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/react-in-jsx-scope': 0,
    'react/jsx-no-target-blank': 1,
    'import/no-absolute-path': 0,
    '@typescript-eslint/no-shadow': 1,
    'import/no-extraneous-dependencies': 1,
  },
  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.node.json'],
  }
}
