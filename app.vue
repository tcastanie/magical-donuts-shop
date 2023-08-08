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
  title: 'Donuts Magiques',
  description: 'Laissez-vous envoûter par les saveurs enchanteresses de nos beignets magiques ! Nos beignets sont préparés avec les meilleurs ingrédients et imprégnés de pouvoirs mystiques qui vous transporteront dans un monde merveilleux. Du chocolat ensorcelant à la myrtille ensorcelante, nos beignets sont sûrs de jeter un sort délicieux à vos papilles gustatives. Commandez maintenant et découvrez la magie par vous-même !'
})
</script>
