<script setup lang = "ts">
  useHead(
  {
    htmlAttrs: 
    {
      class: 'dark'
    },
    bodyAttrs:
    {
      class: 'bg-background text-main antialiased font-sans selection:bg-accent selection:text-white'
    },
  })
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
</style>
