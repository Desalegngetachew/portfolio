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
    <div class="flex justify-between bg-gray-300 dark:bg-gray-800 w-full fixed pt-3">
      <div>
      <router-link to="/"> <p class="text-lg font-sans font-bold ml-3 text-orange-900">Desalegn</p></router-link>
      </div>
      <div>
      <nav class="flex gap-5 pr-5  text-orange-900 dark:text-white text-lg font-mono font-bold">
        <!-- <RouterLink to="/" class="hover:text-green-700 hover:border-b-2">Home</RouterLink> -->
        <a href="#home" class="hover:text-green-700 hover:border-b-2">Home</a>
        <!-- <RouterLink to="/about" class="hover:text-green-700 hover:border-b-2">About</RouterLink> -->
        <a href="#about" class="hover:text-green-700 hover:border-b-2">About</a>
        <!-- <RouterLink to="/service" class="hover:text-green-700 hover:border-b-2">Service</RouterLink> -->
        <a href="#service" class="hover:text-green-700 hover:border-b-2">Service</a>
        <!-- <RouterLink to="/portfolio" class="hover:text-green-700 hover:border-b-2">Portfolio</RouterLink> -->
        <a href="#project" class="hover:text-green-700 hover:border-b-2">Projects</a>
        <!-- <RouterLink to="/contact" class="hover:text-green-700 hover:border-b-2">Contact</RouterLink> -->
        <a href="#contact" class="hover:text-green-700 hover:border-b-2">Contact</a>
        <a href="https://app.hubspot.com/live-messages/24331439/inbox/4222707087#live-chat" class="hover:text-green-700 hover:border-b-2">live chat</a>
        <button @click="toggleDark()" class="rounded-lg py-2 text-gray-800 dark:text-white text-bold text-lg px-6">
         <span v-show="isDark" title="Bright the page">
          <svg class="fill-current h-6 w-auto hover:scale-x-110 hover:border-b-2 hover:border-l-2" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LightModeOutlinedIcon" tabindex="-1" title="LightModeOutlined"><path d="M12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path></svg>
         </span>
         <span v-show="!isDark" title="Dark page">
          <svg class="fill-current h-6 w-auto hover:scale-x-110 hover:border-b-2 hover:border-l-2" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="NightlightRoundOutlinedIcon" tabindex="-1" title="NightlightRoundOutlined"><path d="M15.5 22c1.05 0 2.05-.16 3-.46-4.06-1.27-7-5.06-7-9.54s2.94-8.27 7-9.54c-.95-.3-1.95-.46-3-.46-5.52 0-10 4.48-10 10s4.48 10 10 10z"></path></svg>
         </span>
        </button>
      </nav>
      <div class="hiddenNav bg-green-100 dark:bg-gray-800">
        <button class="text-gray-800 dark:text-white" @click="hiddenToggle =! hiddenToggle">Navigation</button>
        <div class=" block text-gray-800 dark:text-white bg-green-100 dark:bg-gray-800" v-show="hiddenToggle">
          <div class="grid grid-cols-1 text-gray-800 dark:text-white justify-center items-center pl-7 py-3 text-2xl mr-5">
          <RouterLink to="/" class="hover:text-yellow-400 hover:border-b-2">Home</RouterLink>
          <RouterLink to="/about" class="hover:text-yellow-400 hover:border-b-2">About</RouterLink>
          <RouterLink to="/service" class="hover:text-yellow-400 hover:border-b-2">Service</RouterLink>
          <RouterLink to="/project" class="hover:text-yellow-400 hover:border-b-2">Projects</RouterLink>
          <RouterLink to="/contact" class="hover:text-yellow-400 hover:border-b-2">Contact</RouterLink>
          <button @click="toggleDark()" class="rounded-lg py-2 text-gray-800 dark:text-white text-bold text-lg px-6">
            <span v-show="isDark">
             <svg class="fill-current text-gray-800 dark:text-white h-6 w-auto hover:scale-x-110 hover:border-b-2 hover:border-l-2" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LightModeOutlinedIcon" tabindex="-1" title="LightModeOutlined"><path d="M12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path></svg>
            </span>
            <span v-show="!isDark">
             <svg class="fill-current text-gray-800 dark:text-white h-6 w-auto hover:scale-x-110 hover:border-b-2 hover:border-l-2" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="NightlightRoundOutlinedIcon" tabindex="-1" title="NightlightRoundOutlined"><path d="M15.5 22c1.05 0 2.05-.16 3-.46-4.06-1.27-7-5.06-7-9.54s2.94-8.27 7-9.54c-.95-.3-1.95-.46-3-.46-5.52 0-10 4.48-10 10s4.48 10 10 10z"></path></svg>
            </span>
           </button>
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
