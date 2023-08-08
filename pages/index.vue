<template>
  <div>
    <div class="flex min-h-[calc(100vh-6rem)] flex-col md:flex-row">
      <div class="flex-1 basis-1/2 md:order-2">
        <img src="~assets/home1_redim.webp" alt="donut" class="h-full w-full object-cover">
      </div>
      <div class="flex flex-1 basis-1/2 flex-col justify-center p-16">
        <div class="mb-4 text-2xl font-bold uppercase tracking-widest text-blond">
          Bienvenue
        </div>
        <h1 class="mb-8 text-6xl font-extrabold tracking-wide text-strawberry md:mb-16">
          dans votre magasin préféré
        </h1>
        <p class="mb-4 text-xl">
          Laissez-vous envoûter par les saveurs enchanteresses de nos beignets magiques ! Nos beignets sont préparés avec les meilleurs ingrédients et imprégnés de pouvoirs mystiques qui vous transporteront dans un monde merveilleux.
        </p>
        <p class="text-xl font-medium">
          Commandez maintenant et découvrez la magie par vous-même !
        </p>
      </div>
    </div>
    <ListDonuts />
  </div>
</template>
