// eslint.config.js
import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';

export default [
  js.configs.recommended,
  {
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/semi': ['error', 'always'],
      'no-unused-vars': 'warn'
    }
  },
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        jest: true,
        test: true,
        expect: true
      }
    },
    ignores: ['coverage/', 'dist/']
  }
];