module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    // Don't enforce ===
    eqeqeq: 'off',
    // Disable func-names rule so that we can have anonymous functions
    'func-names': 'off',
    // Disable linebreak style to prevent ESLint errors on Windows line endings
    // https://eslint.org/docs/rules/linebreak-style
    'linebreak-style': 'off',
    // Allow console for students to debug
    'no-console': 'off',
    // Do not complain about unused main function
    'no-unused-vars': ['error', { varsIgnorePattern: 'main' }],
    // Enable var instead of just let and const
    'no-var': 'off',
    // Don't require a += b instead of a = a + b
    'operator-assignment': 'off',
    // Enable + sign to concatenate strings
    'prefer-template': 'off',
    // Disable radix requirement for functions like parseInt
    radix: 'off',
    // Don't require vars to be declared at the top
    'vars-on-top': 'off',
  },
};
