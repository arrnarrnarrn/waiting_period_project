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
      'no-console': 'off',//console.log();OK
      'no-unused-vars': 'off',//使っていない変数あってもOK
      'vue/html-self-closing': 'off',//imgタグのようにタグが１つで完結してもOK
      "endOfLine":"off",
      'vue/max-attributes-per-line': 'off',
      'prettier/prettier': [
        'error',
        {
          htmlWhitespaceSensitivity: 'ignore',
        }
      ]
    }
  }