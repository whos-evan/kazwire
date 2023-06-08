module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'ts-standard',
    'plugin:vue/vue3-essential'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
  }
}
