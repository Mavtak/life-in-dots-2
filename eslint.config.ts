import js from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import reactHooks from 'eslint-plugin-react-hooks';
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    files: [
      "**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}",
    ],
    plugins: {
      js,
    },
    extends: [
      "js/recommended",
    ],
    languageOptions: {
      globals: globals.browser,
    },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  reactHooks.configs.flat['recommended-latest'],
  globalIgnores([
    '.react-router/',
    'build/',
  ]),
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'no-empty-pattern': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    rules: {
      'indent': ['error', 2],
      'no-trailing-spaces': ['error'],
      'semi': ['error', 'always'],
    },
  },
]);
