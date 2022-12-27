<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";
const hiddenToggle = ref(false)
</script>

<template>
  <div>
  <header>
    <div class="flex items-center justify-between py-2 w-full fixed bg-transparent top-3">
      <div>
        <p class="text-2xl ml-3 text-orange-700 logo">Desalegn</p>
      </div>
      <div>
      <nav class="flex gap-5 pr-5  text-orange-500 text-2xl">
        <RouterLink to="/" class="hover:text-yellow-400 hover:border-b-2">Home</RouterLink>
        <RouterLink to="/about" class="hover:text-yellow-400 hover:border-b-2">About</RouterLink>
        <RouterLink to="/service" class="hover:text-yellow-400 hover:border-b-2">Service</RouterLink>
        <RouterLink to="/portfolio" class="hover:text-yellow-400 hover:border-b-2">Portfolio</RouterLink>
        <RouterLink to="/contact" class="hover:text-yellow-400 hover:border-b-2">Contact</RouterLink>
        
      </nav>
      
      <div class="hiddenNav ">
        <button class="" @click="hiddenToggle =! hiddenToggle">Navigation</button>
        <div class=" block bg-red-600" v-if="hiddenToggle">
          <div class="grid grid-cols-1 justify-center items-center pl-7 py-3 text-2xl mr-5">
          <RouterLink to="/" class="hover:text-yellow-400 hover:border-b-2">Home</RouterLink>
          <RouterLink to="/about" class="hover:text-yellow-400 hover:border-b-2">About</RouterLink>
          <RouterLink to="/service" class="hover:text-yellow-400 hover:border-b-2">Service</RouterLink>
          <RouterLink to="/portfolio" class="hover:text-yellow-400 hover:border-b-2">Portfolio</RouterLink>
          <RouterLink to="/contact" class="hover:text-yellow-400 hover:border-b-2">Contact</RouterLink>
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
@media (max-width:600px) {
  nav{
    visibility: hidden;
  }
 
}
@media (min-width:600px) {
  nav{
    visibility: visible;
  }
  .hiddenNav{
    visibility: hidden;
  }
}

</style>
