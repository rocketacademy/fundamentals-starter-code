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
    sourceType: 'module',
  },
  rules: {
    // Allow console for students to debug
    'no-console': 'off',
    // TODO(akira): Please clarify why we have this
    'no-restricted-globals': 'off',
    // Don't require vars to be declared at the top
    'vars-on-top': 'off',
    // Enable var instead of just let and const
    'no-var': 'off',
    // Enable + sign to concatenate strings
    'prefer-template': 'off',
    // Don't enforce ===
    eqeqeq: 'off',
    // Don't require a += b instead of a = a + b
    'operator-assignment': 'off',
    // Disable func-names rule so that we can have anonymous functions
    'func-names': 'off',
    // Disable linebreak style to prevent ESLint errors on Windows line endings
    // https://eslint.org/docs/rules/linebreak-style
    'linebreak-style': 'off',
  },
};
