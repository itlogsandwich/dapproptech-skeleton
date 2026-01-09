<script setup lang = "ts">

  const state = reactive(
    {
      fullName: '',
      email: '',
      password: ''
    });

  async function onSubmit()
  {
    const {data, error: fetchError } = 
      await useFetch('http://localhost:3333/register', {
      method: 'POST',
      body: state,
      watch: false,
      });

    if (fetchError.value){

      console.error('Registration Failed:', fetchError.value.data)
      alert('Error:' + (fetchError.value.data?.message || 'Check Console'));

      return
    }
    
    console.log('User Created:', data.value)
    alert('Registeration Successful! Check console to verify!');
    navigateTo('/login');
  }

</script>

<template>
  <UContainer class = "flex h-screen items-center justify-center">

    <UCard class = "w-full max-w-md">
      <template #header>
        <h2 class = "text-xl font-bold"> Sign In </h2>
        <p class = "text-sm text-gray-500"> A safer and secure environment for all your estate needs </p>
      </template>

    <UForm :state = "state" class = "space-y-4" @submit = "onSubmit">

      <UFormField label = "Full Name" name = "full_name">
        <UInput v-model = "state.fullName" placeholder = "John Doe" icon = "i-heroicons-user" />
      </UFormField>

      <UFormField label = "Email" name = "email">
        <UInput v-model = "state.email" placeholder = "you@example.com" icon = "i-heroicons-envelope" />
      </UFormField>

      <UFormField label = "Password" name = "password">
        <UInput v-model = "state.password" type = "password" icon = "i-heroicons-lock-closed" />
      </UFormField>

      <UButton type = "submit" block color = "primary"> Register </UButton>
    </UForm>
    
      <template #footer>
        <p class = "text-xs text-center">
          Already have an account?
          <NuxtLink to ="/login" class = "text-primary-500 font-semibold"> Login here </NuxtLink>
        </p>
      </template>
    </UCard>

  </UContainer>
</template>
