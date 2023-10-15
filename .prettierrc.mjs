/** @type {import("prettier").Config} */
export default {
  arrowParens: 'always',
  bracketSpacing: true,
  proseWrap: 'always',
  semi: true,
  singleAttributePerLine: true,
  singleQuote: true,
  trailingComma: 'all',
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-astro',
    'prettier-plugin-tailwindcss',
  ],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  astroAllowShorthand: false,
  tailwindConfig: './tailwind.config.cjs',
  importOrder: ["<THIRD_PARTY_MODULES>", "", "^~/", "^[.][.]/", "^[.]/"],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderTypeScriptVersion: "4.4.0",
};
