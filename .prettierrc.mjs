/** @type {import("prettier").Config} */
export default {
  arrowParens: 'always',
  bracketSpacing: true,
  proseWrap: 'always',
  semi: true,
  singleAttributePerLine: true,
  singleQuote: true,
  trailingComma: 'all',
  plugins: ['prettier-plugin-tailwindcss', 'prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  astroAllowShorthand: false,
  tailwindConfig: "./tailwind.config.cjs",
};