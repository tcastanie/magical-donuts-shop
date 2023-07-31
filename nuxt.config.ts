export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss'
  ],
  eslint: {
    lintOnStart: false
  }
})
