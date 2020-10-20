module.exports = {
    env: {
        browser: true,
        es6: true,
    },

    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
        'prettier/@typescript-eslint',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
    ],

    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
    },
    plugins: ['eslint-plugin-prefer-arrow', 'eslint-plugin-import', '@typescript-eslint'],
    rules: {
        // disabled requirement for exlicitely defining return type
        '@typescript-eslint/explicit-module-boundary-types': 'off',

        'import/order': [
            'warn',
            {
                'newlines-between': 'always',
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
            },
        ],
        // we have TypeScript handling that
        'import/no-unresolved': 'off',
    },
};
