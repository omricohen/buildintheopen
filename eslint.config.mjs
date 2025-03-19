import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable TypeScript rules
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/ban-types': 'off',
      
      // Disable React rules
      'react/no-unescaped-entities': 'off',
      'react/prop-types': 'off',
      'react/display-name': 'off',
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'off',
      'react-hooks/exhaustive-deps': 'off',
      
      // Disable Next.js rules
      '@next/next/no-html-link-for-pages': 'off',
      '@next/next/no-img-element': 'off',
      
      // Disable general rules
      'prefer-const': 'off',
      'no-console': 'off',
      'no-debugger': 'off',
      'no-unused-vars': 'off',
      'jsx-a11y/alt-text': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
    },
    ignorePatterns: ['**/*.json', 'node_modules', '.next', 'public', 'styles'],
  },
];

export default eslintConfig;
