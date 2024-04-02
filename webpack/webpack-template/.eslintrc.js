module.exports = {
  // babel-eslint可以解决动态导入import位置等问题。
  parser: "@babel/eslint-parser",
  // parser: "babel-eslint",
  plugins: ["import"], // 解决动态导入import语法报错问题 --> 实际使用eslint-plugin-import的规则解决的
  // 继承其他规则 extends['eslint:recommended'，'plugin:vue/essential'， 'react-app']
  extends: ["eslint:recommended"],
  env: {
    es6: true, // 启用es6、es7中全局变量，比如Promise, Map, Set等。
    node: true, // 启用node中全局变量
    browser: true // 启用浏览器中全局变量
  },
  // 解析选项
  parserOptions: {
      ecmaVersion: 6, // ES 语法版本
      sourceType: "module", // ES 模块化
      ecmaFeatures: { // ES 其他特性
        jsx: true // 如果是 React 项目，就需要开启 jsx 语法
      }
  },
  // 具体检查规则, 会覆盖extends中相同键的规则
  rules: {
      semi: [2, 'never'], // 禁止使用分号
      'array-callback-return': 'warn', // 强制数组方法的回调函数中有 return 语句，否则警告
      'default-case': [
        'warn', // 要求 switch 语句中有 default 分支，否则警告
        { commentPattern: '^no default$' } // 允许在最后注释 no default, 就不会有警告了
      ],
      eqeqeq: [
        'warn', // 强制使用 === 和 !==，否则警告
        'smart' // https://eslint.bootcss.com/docs/rules/eqeqeq#smart 除了少数情况下不会有警告
      ],
      // 拖尾逗号  always-multiline / never
      "comma-dangle": ["error", "never"],
      // 存在定义但未使用的变量报错
      "no-var": 'error', // 不能使用 var 定义变量
      'no-unused-vars': 'error',
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
  // ...
  // 其他规则详见：https://eslint.bootcss.com/docs/user-guide/configuring
}
  