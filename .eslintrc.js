// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  extends: 'standard-with-typescript',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module'
  },
  rules: {
    'no-labels': 0,
    '@typescript-eslint/strict-boolean-expressions': 0
  }
}
