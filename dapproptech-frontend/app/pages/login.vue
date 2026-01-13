<script setup lang = "ts">
  const state = reactive(
    {
      email: '',
      password: ''
    });

  async function onSubmit()
  {
    try{  
      const data = 
      await $fetch('http://localhost:3333/login',{ 
      method: 'POST',
      body: state,
      credentials: 'include'
      });

      console.log('Logged in: ', data);
      navigateTo('/');

    } catch(err: any){
      alert('Login failed: ' + (err.data?.message || 'Server Error'));
    }
  }
</script>

<template>
  <UContainer class = "flex h-screen items-center justify-center">

    <UCard class = "w-full max-w-md">
      <template #header>
        <h2 class = "text-xl font-bold"> Sign In </h2>
        <p class = "text-sm text-gray-500"> Access your secure property records </p>
      </template>

    <UForm :state = "state" class = "space-y-4" @submit = "onSubmit">
      <UFormField label = "Email" name = "email" size = "lg" required>
        <UInput class = "w-full" v-model = "state.email" placeholder = "you@example.com" icon = "i-heroicons-envelope" />
      </UFormField>

    
      <UFormField label = "Password" name = "password" size = "lg" required>
        <UInput class = "w-full" v-model = "state.password" type = "password" placeholder = "password" icon = "i-heroicons-lock-closed" />
      </UFormField>

      <UButton type = "submit" block color = "primary"> Login </UButton>
    </UForm>
    
      <template #footer>
        <p class = "text-xs text-center">
          Don't have an account?
          <NuxtLink to ="/register" class = "text-primary-500 font-semibold"> Register here </NuxtLink>
        </p>
      </template>
    </UCard>

  </UContainer>
</template>
