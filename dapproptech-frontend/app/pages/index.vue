<script setup lang = "ts">  
  const {data: properties, pending, error } = await useFetch('http://localhost:3333/featured')
</script>

<template>
  <div>
    <main>

        <section id = "tagline" class="relative pt-20 pb-32">
            <UContainer>
              
              <div class="grid lg:grid-cols-2 gap-12 items-center">
                
                <div class="flex flex-col items-start text-left">
                  <h1 class="text-5xl lg:text-7xl font-bold leading-tight text-main">
                    It’s Not Just An Estate, <br />
                    <span class="text-accent">It’s Real.</span>
                  </h1>
                  
                  <p class="mt-6 text-lg text-muted max-w-md">
                    Secure, verified, and transparent real estate transactions.
                  </p>
                  
                  <UButton 
                    to = "/register"
                    size="xl" 
                    class="mt-8 px-10 py-4 font-bold rounded-xl shadow-lg shadow-accent/20"
                  >
                    Get Started
                  </UButton>
                </div>

                <div class="hidden lg:block">
                  <NuxtImg src = "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop" class="aspect-square rounded-3xl bg-surface-light border border-white/5 shadow-2xl"/>
                </div>

              </div>
            </UContainer>
          </section>

      <br>
      
      <section id = "featured-properties">

          <div class = "bg-surface-light flex flex-col items-center justify-center mb-8">
            <h1 class = "text-3xl font-bold text-gray-900 dark:text-white"> Featured Properties </h1>
            <p v-if = "pending" class = "text-primary-500 italic"> Connecting to Blockchain Ledger...</p>
            <p v-else-if = "error" cklass = "text-red-500"> Error: Failed to connect to backend. Check Adonis </p>
            <p v-else class = "text-gray-500 mt-2"> Blockchain-secured Properties! </p>
          </div>
        
          <UContainer class = py-10>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <UCard variant = "subtle" v-for ="property in properties" :key = "property.id" class = "hover:ring-2 hover:ring-primary-500 transition-all cursor-pointer">
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

      </section>

    </main>
  </div>
</template>
