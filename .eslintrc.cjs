module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommand',
    'plugin:prettier/recommended',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  plugins: ['vue'],
  ignorePatterns: ['.prettierrc.js', '.stylelintrc.js'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
};
