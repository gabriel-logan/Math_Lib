/* eslint-env node */
module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: true,
    rules: {
        semi: ['error', 'always'], // Enforce semicolons
        quotes: ['error', 'single'], // Enforce single quotes for strings
    },
};
