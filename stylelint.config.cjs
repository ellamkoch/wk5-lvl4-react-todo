/**
 * Stylelint configuration for basic CSS linting.
 * We extend the "standard" config which enforces:
 * - Valid CSS syntax
 * - Consistent formatting and conventions
 */

/** @type {import("stylelint").Config} */
module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recommended-scss'],

  rules: {
    // Disallow invalid hex colors
    'color-no-invalid-hex': true,

    // Avoid empty rule blocks
    'block-no-empty': true,

    // Allow camelCase class
    'selector-class-pattern': null,

    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'use',
          'forward',
          'mixin',
          'include',
          'function',
          'tailwind',
          'apply',
          'layer',
          'variants',
          'responsive',
          'theme',
          'custom-variant',
        ],
      },
    ],

    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'use',
          'forward',
          'mixin',
          'include',
          'function',
          'tailwind',
          'apply',
          'layer',
          'variants',
          'responsive',
          'theme',
          'custom-variant',
        ],
      },
    ],

    // Allow rgba
    'color-function-notation': null,
    'custom-property-no-missing-var-function': null,

    // Allow percentages to be decimal numbers rather than strings
    'alpha-value-notation': 'number',

    // Skip scss/no-global-function-names
    'scss/no-global-function-names': null,
    'import-notation': null,
  },
};
