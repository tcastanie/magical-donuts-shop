<template>
  <NuxtLayout class="h-full min-h-screen font-sans">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'fr'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }
  ]
})
useSeoMeta({
  title: 'Magical Donut shop'
})
</script>
