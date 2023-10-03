/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:unicorn/recommended',
    'plugin:promise/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:astro/recommended',
    'prettier',
  ],

  plugins: ['jsx-a11y', 'unicorn', 'prettier'],

  rules: {
    'unicorn/prevent-abbreviations': 'off',
    'prettier/prettier': 'error',
  },
  reportUnusedDisableDirectives: true,
  env: {
    browser: true,
    es2020: true,
    serviceworker: true,
    worker: true,
    node: true,
  },

  overrides: [
    {
      files: ['*.js', '*.jsx'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        requireConfigFile: false,
        sourceType: 'module',
      },

      env: {
        browser: true,
        es2020: true,
        serviceworker: true,
        worker: true,
      },
    },
    {
      files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      parserOptions: {
        project: './tsconfig.json',
      },
      settings: {
        node: {
          tryExtensions: ['.ts', '.tsx', '.cts', '.mts'],
        },
      },
    },
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      settings: {
        node: {
          tryExtensions: ['.ts', '.tsx', '.cts', '.mts', '.astro'],
        },
      },
      rules: {},
    },
    {
      // Define the configuration for `<script>` tag.
      // Script in `<script>` is assigned a virtual file name with the `.js` extension.
      files: ['**/*.astro/*.js', '*.astro/*.js'],
      env: {
        browser: true,
        es2020: true,
      },
      parserOptions: {
        sourceType: 'module',
      },
      rules: {
        // override/add rules settings here, such as:
        // "no-unused-vars": "error"

        // If you are using "prettier/prettier" rule,
        // you don't need to format inside <script> as it will be formatted as a `.astro` file.
        'prettier/prettier': 'off',
      },
    },
  ],
};
