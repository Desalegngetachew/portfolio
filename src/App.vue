<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";

// dark mode
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark);
// dark mode end
const hiddenToggle = ref(false)
</script>

<template>
  <div class="bg-green-50 dark:bg-gray-800 w-full h-full">
  <header>
    <div class="flex justify-between bg-green-100 dark:bg-gray-800 w-full fixed pt-3">
      <div>
      <router-link to="/"> <p class="text-lg font-sans font-bold ml-3 text-orange-900">Desalegn</p></router-link>
      </div>
      <div>
      <nav class="flex gap-5 pr-5  text-orange-900 text-lg font-mono font-bold">
        <RouterLink to="/" class="hover:text-green-700 hover:border-b-2">Home</RouterLink>
        <RouterLink to="/about" class="hover:text-green-700 hover:border-b-2">About</RouterLink>
        <RouterLink to="/service" class="hover:text-green-700 hover:border-b-2">Service</RouterLink>
        <RouterLink to="/portfolio" class="hover:text-green-700 hover:border-b-2">Portfolio</RouterLink>
        <RouterLink to="/contact" class="hover:text-green-700 hover:border-b-2">Contact</RouterLink>
        <button @click="toggleDark()" class="rounded-lg py-2 bg-gray-800 dark:bg-white dark:text-gray-800 text-white hover:bg-green-700 hover:scale-110 text-mono text-bold text-lg px-6">change brightness</button>
      </nav>
      
      <div class="hiddenNav">
        <button class="text-gray-800 dark:text-white" @click="hiddenToggle =! hiddenToggle">Navigation</button>
        <div class=" block bg-green-100" v-show="hiddenToggle">
          <div class="grid grid-cols-1 justify-center items-center pl-7 py-3 text-2xl mr-5">
          <RouterLink to="/" class="hover:text-yellow-400 hover:border-b-2">Home</RouterLink>
          <RouterLink to="/about" class="hover:text-yellow-400 hover:border-b-2">About</RouterLink>
          <RouterLink to="/service" class="hover:text-yellow-400 hover:border-b-2">Service</RouterLink>
          <RouterLink to="/portfolio" class="hover:text-yellow-400 hover:border-b-2">Portfolio</RouterLink>
          <RouterLink to="/contact" class="hover:text-yellow-400 hover:border-b-2">Contact</RouterLink>
          <button @click="toggleDark()" class="rounded-lg bg-green-400 text-white hover:bg-green-700 hover:scale-110 text-mono text-bold text-lg py-2 px-6">change brightness</button>
        </div>
      </div>
    </div>
      </div>
    </div>
  </header>
  <RouterView />
  
</div>
</template>
<style scoped>
a.router-link-exact-active{
color: green;
}
@media screen and (max-width:600px) {
  nav{
    visibility: hidden;
  }
 
}
@media screen and (min-width:600px) {
  nav{
    visibility: visible;
  }
  .hiddenNav{
    visibility: hidden;
  }
}

</style>
