const js = require('@eslint/js');
const stylistic = require('@stylistic/eslint-plugin');
const jestPlugin = require('eslint-plugin-jest');

module.exports = [
  {
    ...js.configs.recommended,
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        __dirname: 'readonly',
        module: 'readonly',
        require: 'readonly',
        jest: 'readonly',
        describe: 'readonly',
        test: 'readonly',
        expect: 'readonly'
      }
    }
  },
  {
    plugins: {
      '@stylistic': stylistic,
      jest: jestPlugin
    },
    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/semi': ['error', 'always'],
      'no-unused-vars': 'warn'
    }
  },
  {
    files: ['**/__tests__/**/*.js'],
    rules: {
      'jest/no-disabled-tests': 'error',
      'jest/no-focused-tests': 'error'
    }
  },
  {
    ignores: [
      'coverage/',
      'dist/',
      'eslint.config.cjs'
    ]
  }
];