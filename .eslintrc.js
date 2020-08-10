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
  // Markdown setup from here https://github.com/eslint/eslint-plugin-markdown
  plugins: [
    'markdown',
    'spellcheck',
  ],
  overrides: [
    {
      files: ['**/*.md'],
      processor: 'markdown/markdown',
    },
  ],
  rules: {

    // settings for gitbook JavaScript

    // gitbook formatting
    semi: 'off',
    'no-unreachable': 'off',
    'no-unused-vars': 'off',
    'func-names': 'off',
    'no-unused-expressions': 'off',
    'no-undef': 'off',
    'no-console': 'off',

    // course curriculum exceptions
    'no-restricted-globals': 'off',
    'vars-on-top': 'off',
    'no-var': 'off',
    'prefer-template': 'off',
    eqeqeq: 'off',
    'operator-assignment': 'off',

    'spellcheck/spell-checker': [1,
      {
        comments: true,
        strings: true,
        identifiers: true,
        lang: 'en_GB',
        skipWords: [
          'etc',
          'gitbook',
          'dict',
          'aff',
          'utils',
        ],
        skipIfMatch: [
          'http://[^s]*',
          '^[-\\w]+[-\\w\\.]+$', // For MIME Types
        ],
        skipWordIfMatch: [
          '^foobar.*$', // words that begin with foobar will not be checked
        ],
        minLength: 2,
      },
    ],
  },
};
