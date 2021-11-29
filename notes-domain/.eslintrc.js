module.exports = {
  env: {
    es6: true,
    browser: true,
  },
  extends: 'airbnb',
  // parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 8,
    // requireConfigFile: false,
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'linebreak-style': ['error', 'unix'],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],
    'constructor-super': 'off',
    'react/react-in-jsx-scope': 'off',
    'default-param-last': 'off',
    'react/prefer-stateless-function': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'no-shadow': 'off',
    'import/prefer-default-export': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'max-len': 'off',
    'react/jsx-props-no-spreading': 'off',
    'implicit-arrow-linebreak': 'off',
    'react/no-array-index-key': 'off',
    'react/state-in-constructor': 'off',
    semi: 'off',
  },
};
