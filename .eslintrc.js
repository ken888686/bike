module.exports = {
  root: true,
  env: {
    node: true,
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
  },
  extends: ['plugin:vue/vue3-recommended', '@vue/airbnb'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'max-len': ['warn', { code: 500 }],
    'vue/script-setup-uses-vars': 'error',
    'vue/attribute-hyphenation': 'off',
    'vue/max-len': [
      'warn',
      {
        code: 500,
      },
    ],
  },
};
