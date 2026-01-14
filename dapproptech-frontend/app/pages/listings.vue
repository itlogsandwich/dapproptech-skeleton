<script setup lang = "ts">
  const {data: properties, pending, error } = await useFetch('http://localhost:3333/properties')
</script>

<template>

  <UContainer class = "py-10">

    <div class = "mb-8">
      <h1 class = "text-3xl font-bold text-gray-900 dark:text-white"> Property Listings </h1>
      <p v-if = "pending" class = "text-primary-500 italic"> Connecting to Blockchain Ledger...</p>
      <p v-else-if = "error" cklass = "text-red-500"> Error: Failed to connect to backend. Check Adonis </p>
      <p v-else class = "text-gray-500 mt-2"> Blockchain-secured Properties! </p>
    </div>

    <div class = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      <UCard v-for ="property in properties" :key = "property.id" class = "hover:ring-2 hover:ring-primary-500 transition-all cursor-pointer">
        <template #header>
          <NuxtImg
              :src = "property.imageUrl"
              class = "w-full h-50 object-cover rounded-t-lg"
          />
        </template>

        <div class = "space-y-2">
          <UBadge color = "primary" variant = "subtle"> {{ property.type }} </UBadge>
          <h3 class = "text-xl font-semibold"> {{ property.title }} </h3>
          <div class = "flex items-center text-gray-500 text-sm">
            <UIcon name = "i-heroicons-map-pin" class = "mr-1"/>
            {{ property.location }}
          </div>

          <div class = "flex justify-between items-center mt-4">
            <span class = "text-primary-600 font-bold text-lg"> {{ property.price }} </span>
            <span class = "text-gray-400 text-sm"> {{ property.sqm }} sqm </span>
          </div> 
        </div>

        <template #footer>
          <UButton block color = "gray" variant = "ghost"> View Details </UButton>
        </template>
      </UCard>

    </div>

  </UContainer>

</template>
