<template>
  <div>
    <h1 class="mb-4 text-2xl font-bold uppercase tracking-widest text-blond">
      Mangez avec les doigts
    </h1>
    <p class="pb-4 text-lg">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatem quae laboriosam suscipit explicabo quo saepe repellendus quidem quam sint voluptates beatae, quod, illo sapiente qui numquam. Aliquid, cupiditate laboriosam.
    </p>
    <div :style="{ backgroundImage: `url(${home2Redim})`}" class="absolute left-0 h-72 w-full bg-fixed" />
    <div class="mt-72 py-4 text-lg">
      <p>Qui deserunt in tempor velit pariatur exercitation. Dolore qui elit excepteur qui dolore tempor eu excepteur ea labore incididunt cillum occaecat sint. Do Lorem aliquip aute dolore id fugiat id consectetur ad ea ullamco. Esse reprehenderit dolor aliqua id voluptate cillum esse labore.</p>
      <p>Aute laborum anim amet nisi officia eu duis irure ad elit. Culpa consectetur reprehenderit est sint veniam id nostrud minim commodo Lorem irure excepteur amet. Labore nostrud Lorem tempor irure irure est aliquip ut elit minim cillum amet pariatur nisi. Aute esse elit fugiat pariatur duis elit occaecat mollit.</p>
    </div>
    <div :style="{ backgroundImage: `url(${home3Redim})`}" class="absolute left-0 h-72 w-full bg-fixed" />
    <div class="mt-72 pt-4 text-lg">
      <p>Non occaecat ad ut nulla eiusmod consequat aliquip do anim mollit ut ea. Consequat ea voluptate minim eiusmod culpa non quis ut. Fugiat ex magna ipsum ex.</p>
      <p>Ea ut Lorem nulla officia quis cupidatat excepteur qui magna incididunt ipsum eiusmod amet. Tempor cillum fugiat consectetur incididunt minim excepteur. Consectetur elit ullamco ex culpa magna aliqua. Labore commodo Lorem laborum in adipisicing. Reprehenderit incididunt cupidatat veniam est est eiusmod mollit ut aliquip aute cillum proident commodo esse. Proident reprehenderit aliquip sunt deserunt eiusmod eiusmod elit aute aute. Pariatur duis aliqua commodo excepteur eiusmod.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import home2Redim from '~/assets/home2_redim.webp'
import home3Redim from '~/assets/home3_redim.webp'
</script>
