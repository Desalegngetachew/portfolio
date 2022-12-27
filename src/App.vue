<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>
  <header>
    <div class="flex items-center justify-between py-2 w-full fixed bg-transparent top-3">
      <div>
        <p class="text-2xl ml-3 text-orange-700">Desalegn</p>
      </div>
      <nav class="flex gap-5 pr-5  text-orange-500 text-2xl">
        <RouterLink to="/" class="hover:text-yellow-400 hover:border-b-2">Home</RouterLink>
        <RouterLink to="/about" class="hover:text-yellow-400 hover:border-b-2">About</RouterLink>
        <RouterLink to="/service" class="hover:text-yellow-400 hover:border-b-2">Service</RouterLink>
        <RouterLink to="/portfolio" class="hover:text-yellow-400 hover:border-b-2">Portfolio</RouterLink>
        <RouterLink to="/contact" class="hover:text-yellow-400 hover:border-b-2">Contact</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
  
</div>
</template>
<style scoped>
@media screen and (min-width:600px){
  nav{
    display: hidden;
  }
}
a.router-link-exact-active{
color: green;
}
</style>
