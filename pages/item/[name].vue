<template>
  <div class="mx-auto flex max-w-6xl flex-col gap-32 pb-24 md:gap-48 md:py-24">
    <div v-if="item" class="flex flex-col gap-8 md:flex-row">
      <!-- pictures slider -->
      <div class="flex-1">
        <img :src="`/donuts/${item.image}`" :alt="item.name" class="h-full w-full object-cover">
      </div>
      <!-- item infos and add to cart button -->
      <div class="flex flex-1 flex-col justify-center p-4 md:p-0">
        <div class="mb-4 text-2xl font-bold uppercase tracking-widest text-blond">
          {{ item.name }}
        </div>
        <p class="mb-4 text-xl font-medium text-strawberry">
          {{ item.price }} €
        </p>
        <p class="mb-8 text-xl">
          {{ item.description }}
        </p>
        <div class="flex flex-wrap justify-end gap-4">
          <input type="number" class="h-12 w-16 cursor-not-allowed rounded-md border border-strawberry bg-transparent text-center opacity-20" value="1" title="Quantité" disabled>
          <button class="flex cursor-not-allowed items-center justify-center rounded-md bg-strawberry px-4 py-2 font-bold text-blond opacity-20" disabled>
            Ajouter au panier
          </button>
          <button class="flex items-center justify-center gap-2 rounded-md bg-strawberry px-4 py-2 font-bold text-blond">
            Acheter ce donut
          </button>
        </div>
      </div>
    </div>
    <InfoDonut class="px-2 md:p-0" />
    <div>
      <h1 class="mx-2 mb-4 text-2xl font-bold uppercase tracking-widest text-blond md:mx-0">
        Pour compléter votre 4 heures
      </h1>
      <ListDonuts :is-random-sell="true" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ITEMS } from '../../constants/donuts-list.js'
const route = useRoute()

definePageMeta({
  validate: (route) => {
    const names: string[] = ITEMS.map(item => item.slug)
    return names.includes(route.params.name as string)
  }
})

const item = computed(() => {
  return ITEMS.find(item => item.slug === route.params.name)
})
</script>
