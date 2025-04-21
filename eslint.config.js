import js from '@eslint/js'
import vuePlugin from 'eslint-plugin-vue'
import nuxtPlugin from 'eslint-plugin-nuxt'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import vueParser from 'vue-eslint-parser'
import prettierConfig from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'
import tsParser from '@typescript-eslint/parser'

export default [
  {
    ignores: [
      '**/node_modules/**',
      '**/.nuxt/**',
      '**/.output/**',
      '**/.nitro/**',
      '**/dist/**',
      '**/logs/**',
      '**/*.log',
      '**/npm-debug.log*',
      '**/yarn-debug.log*',
      '**/yarn-error.log*',
      '**/.env',
      '**/.env.*',
      '**/.cache/**',
      '**/.idea/**',
      '**/.vscode/**',
      '**/.DS_Store',
      '**/package-lock.json',
      '**/yarn.lock',
      '**/pnpm-lock.yaml',
      '**/*.suo',
      '**/*.ntvs*',
      '**/*.njsproj',
      '**/*.sln',
      '**/*.sw?'
    ]
  },
  js.configs.recommended,
  prettierConfig,
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        parser: {
          ts: '@typescript-eslint/parser'
        },
        extraFileExtensions: ['.vue'],
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly',
        definePageMeta: 'readonly',
        useNuxtApp: 'readonly',
        useRuntimeConfig: 'readonly',
        useRoute: 'readonly',
        useRouter: 'readonly',
        useFetch: 'readonly',
        useHead: 'readonly',
        useSeoMeta: 'readonly',
        useState: 'readonly',
        ref: 'readonly',
        computed: 'readonly',
        reactive: 'readonly',
        onMounted: 'readonly',
        watch: 'readonly',
        nextTick: 'readonly',
        onBeforeMount: 'readonly',
        onUnmounted: 'readonly',
        provide: 'readonly',
        inject: 'readonly',
        toRef: 'readonly',
        toRefs: 'readonly',
        h: 'readonly',
        isRef: 'readonly',
        useAsyncData: 'readonly',
        useLazyAsyncData: 'readonly',
        useError: 'readonly',
        navigateTo: 'readonly',
        abortNavigation: 'readonly',
        onBeforeRouteLeave: 'readonly',
        onBeforeRouteUpdate: 'readonly',
        showError: 'readonly',
        clearError: 'readonly',
        createError: 'readonly',
        useRequestEvent: 'readonly',
        defineNuxtPlugin: 'readonly',
        defineNuxtRouteMiddleware: 'readonly',
        useAppConfig: 'readonly'
      }
    },
    plugins: {
      vue: vuePlugin,
      nuxt: nuxtPlugin,
      '@typescript-eslint': tsPlugin,
      prettier: prettierPlugin
    },
    rules: {
      // Prettier
      'prettier/prettier': 'error',

      // Vue rules
      'vue/multi-word-component-names': 'off',
      'vue/no-multiple-template-root': 'off',
      'vue/attribute-hyphenation': 'error',
      'vue/html-end-tags': 'error',
      'vue/no-v-html': 'warn'
    }
  },
  {
    files: ['**/*.js', '**/*.ts'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        defineNuxtConfig: 'readonly',
        definePageMeta: 'readonly',
        useNuxtApp: 'readonly',
        useRuntimeConfig: 'readonly',
        useRoute: 'readonly',
        useRouter: 'readonly',
        useFetch: 'readonly',
        useHead: 'readonly',
        useSeoMeta: 'readonly',
        useState: 'readonly',
        useAsyncData: 'readonly',
        useLazyAsyncData: 'readonly',
        useError: 'readonly',
        navigateTo: 'readonly',
        defineStore: 'readonly',
        createError: 'readonly',
        showError: 'readonly',
        clearError: 'readonly',
        abortNavigation: 'readonly',
        useRequestEvent: 'readonly',
        defineNuxtPlugin: 'readonly',
        defineNuxtRouteMiddleware: 'readonly',
        useAppConfig: 'readonly'
      }
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      prettier: prettierPlugin
    },
    rules: {
      // Prettier
      'prettier/prettier': 'error',

      // TypeScript rules (without requiring parserOptions.project)
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',

      // Common rules
      'no-undef': 'off' // Turning this off as TypeScript handles most of these checks
    }
  }
]
