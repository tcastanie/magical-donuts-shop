<template>
  <div class="flex flex-wrap">
    <NuxtLink v-for="item of selectedItems" :key="item.id" class="flex w-full flex-col md:w-1/2 lg:w-1/3" :to="`/item/${item.slug}`">
      <div class="grow-0">
        <img :src="`/donuts/${item.image}`" :alt="item.name" class="h-full w-full object-cover duration-700 hover:brightness-150 active:brightness-150">
      </div>
      <div class="flex flex-col justify-center p-4">
        <div class="mb-4 text-2xl font-bold uppercase tracking-widest text-blond">
          {{ item.name }}
        </div>
        <p class="mb-4 text-xl">
          {{ item.description }}
        </p>
        <p class="self-end text-xl font-medium text-strawberry">
          {{ item.price }} €
        </p>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
import { ITEMS } from '../constants/donuts-list.js'
const props = defineProps({
  isRandomSell: {
    type: Boolean,
    default: false
  }
})
const selectedItems = ref([])

onMounted(() => {
  if (props.isRandomSell) {
    selectedItems.value = getRandomItems()
  } else {
    selectedItems.value = ITEMS
  }
})

const getRandomItems = () => {
  const randomItems = []
  while (randomItems.length < 3) {
    const randomItem = ITEMS[Math.floor(Math.random() * ITEMS.length)]
    if (!randomItems.includes(randomItem)) {
      randomItems.push(randomItem)
    }
  }
  return randomItems
}
</script>
