<script setup lang = "ts">

  const state = reactive(
    {
      fullName: '',
      email: '',
      password: ''
    });

  async function onSubmit()
  {
    try{
      const response = await $fetch('http://localhost:3333/register', {
      method: 'POST',
      body: state,
      credentials: 'omit'
      });

      console.log('User Created:', response);
      alert('Registration Successful!');
      navigateTo('/login');

    } catch(err: any){
        console.error('Raw Error:', err)
        
        if (err.data){
          alert('Server Message: ' + (err.data.message || 'Validation Failed'));
        }
        else{
          alert('Browser/Network Error: Request Was Blocked');
        }
    }
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

      <UFormField label = "Full Name" name = "full_name" size = "lg" required>
        <UInput  class = "w-full" v-model = "state.fullName" placeholder = "John Doe" icon = "i-heroicons-user" />
      </UFormField>

      <UFormField label = "Email" name = "email" size = "lg" description = "We'll never share your email with anyone else" required>
        <UInput class = "w-full" v-model = "state.email" placeholder = "you@example.com" icon = "i-heroicons-envelope" />
      </UFormField>

      <UFormField label = "Password" name = "password" size = "lg" required>
        <UInput class = "w-full" v-model = "state.password" type = "password" placeholder = "passsword" icon = "i-heroicons-lock-closed"  />
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
