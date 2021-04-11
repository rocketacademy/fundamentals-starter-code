module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    // Don't enforce block scope on "var" variable declarations, let JS behave as intended.
    'block-scoped-var': 'off',
    // Don't enforce control flow closing curly brace needs to be
    // on same line as next control flow opening statement
    'brace-style': 'off',
    // Don't enforce ===
    eqeqeq: 'off',
    // Disable func-names rule so that we can have anonymous functions
    'func-names': 'off',
    // Disable linebreak style to prevent ESLint errors on Windows line endings
    // https://eslint.org/docs/rules/linebreak-style
    'linebreak-style': 'off',
    // Allow console for students to debug
    'no-console': 'off',
    // Allow function param reassign for object properties
    'no-param-reassign': ['error', { props: false }],
    // Do not complain about unused main function
    'no-unused-vars': ['error', { varsIgnorePattern: 'main' }],
    // Enable var instead of just let and const
    'no-var': 'off',
    // Don't require a += b instead of a = a + b
    'operator-assignment': 'off',
    // Don't require array and object destructuring for variable assignment
    'prefer-destructuring': 'off',
    // Enable + sign to concatenate strings
    'prefer-template': 'off',
    // Disable radix requirement for functions like parseInt
    radix: 'off',
    // Don't require vars to be declared at the top
    'vars-on-top': 'off',
  },
};
