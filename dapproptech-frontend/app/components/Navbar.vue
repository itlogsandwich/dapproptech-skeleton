<script setup lang = "ts">
  const links = [
  { label: 'Home', to: '/' },
  { label: 'Agents', to: '/agents' },
  { label: 'Blog', to: '/blog' },
  { label: 'About us', to: '/about' },
  { label: 'Contact', to: '/contact' }
  ]
</script>

<template>
  <nav class = "sticky top-0 z-50 border-b border-white/5 bg-surface-dark/90 backdrop-blur-md">
    <UContainer class = "h-20 flex items-center justify-between">

      <div class = "flex items-center gap-3 cursor-pointer group">
        <UButton class = "w-15 h-15 bg-surface-dark rounded-lg flex items-center justify-center shadow-lg group-hover: border-accent/50 transition-colors"
          to="/"
          color ="neutral"
          variant = "link"
        >
          <span class = "xl"> <NuxtImg src = "DAPProptech-logo-small.png"/> </span>
        </UButton>
        <span class = "font-bold text-xl tracking-tight text-main"> PropTech</span>
      </div>

      <div class = "hidden md:flex items-center gap-1">
        <UButton
            v-for ="link in links"
            :key = "link.to"
            :to = "link.to"
            variant = "ghost"
            color = "gray"
            class = "text-muted hover:text-white transition-colors"
        >
        {{ link.label }}
        </UButton>
      </div>
      
      <div class = "flex items-center gap-3">
        <UButton
            to="/register" 
            color="" 
            variant="solid" 
            size="md"
            class="bg-accent-500 px-6 font-bold text-white transition-all hover:bg-accent-600 active:scale-95 shadow-lg shadow-accent/20"
        >
          Sign Up
        </UButton>
      </div>        
    </UContainer> 
  </nav>
</template>
