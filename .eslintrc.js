module.exports = {
    root: true,
    env: {
      browser: true,
      node: true,
      es6: true,
      "jest/globals": true,
    },
    parserOptions: {
      parser: 'babel-eslint'
    },
    extends: [
      'eslint:recommended',
      'plugin:vue/recommended',
      'plugin:prettier/recommended'
    ],
    // *.vue ファイルを lint にかけるために必要
    plugins: ['vue',"jest"],
    // ここにカスタムルールを追加します。
    rules: {
      semi: [2, 'never'],
      'vue/html-indent': ['error', 2],
      'no-console': 'off',
      'no-unused-vars': 'off',
      'vue/html-self-closing': 'off',
      'vue/singleline-html-element-content-newline': 0,
      "endOfLine":"off",
      'vue/max-attributes-per-line': 'off',
      'prettier/prettier': [
        'error',
        {
          htmlWhitespaceSensitivity: 'ignore',
          "endOfLine": 'auto'
        }
      ]
    }
  }