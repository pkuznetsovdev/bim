// .eslintrc.js
module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    plugins: ['@typescript-eslint', 'prettier'],
    parserOptions: {
        project: `./tsconfig.json`,
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        'prettier/prettier': 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                ts: 'never',
            },
        ],
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "warn",
        "import/prefer-default-export": "warn",
        "radix": "off",
        "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
        "consistent-return": "off",
    },
};
