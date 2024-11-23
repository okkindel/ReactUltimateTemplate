import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import perfectionist from 'eslint-plugin-perfectionist';
import reactRefresh from 'eslint-plugin-react-refresh';
import reactHooks from 'eslint-plugin-react-hooks';
import tailwind from 'eslint-plugin-tailwindcss';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import js from '@eslint/js';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      perfectionist.configs['recommended-line-length'],
      ...tailwind.configs['flat/recommended'],
      eslintPluginPrettierRecommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      js.configs.recommended,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      'tailwindcss/no-custom-classname': 'off',

      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/naming-convention': [
        'warn',
        {
          selector: 'memberLike',
          modifiers: ['private'],
          format: ['camelCase'],
          leadingUnderscore: 'require',
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/explicit-member-accessibility': [
        'warn',
        { overrides: { constructors: 'no-public' } },
      ],

      'perfectionist/sort-named-imports': 'warn',
      'perfectionist/sort-named-exports': 'warn',
      'perfectionist/sort-interfaces': 'off',
      'perfectionist/sort-exports': 'warn',
      'perfectionist/sort-imports': 'warn',
      'perfectionist/sort-objects': 'off',
      'perfectionist/sort-classes': 'off',
      'perfectionist/sort-enums': 'warn',

      'prettier/prettier': 'warn',

      'no-unused-vars': [
        'warn',
        { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
      ],
      'spaced-comment': ['error', 'always', { exceptions: ['*'] }],
      'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
      'no-extra-boolean-cast': 'off',
      'prefer-const': 'warn',
      'no-eq-null': 'warn',
      'no-var': 'warn',
      eqeqeq: 'warn',

      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'off',
        { allowConstantExport: true },
      ],
    },
  },
);
