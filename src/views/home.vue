<template>
  <div class="w-full h-full">
    <div
      class="w-full sm:h-screen bg-fixed bg-green-50 dark:bg-gray-800 justify-center bg-center items-center flex bg-cover"
    >
      <div class="block ">
        <div class="block" id="home">
          <!-- <h1 class="name text-center font-sans text-2xl pb-2">Hi, I am</h1> -->
          <h1 class="name text-center font-mono text-5xl pb-2 font-bold">
            Desalegn Getachew
          </h1>

          <h1 class="name text-center font-mono font-bold text-3xl mt-3">ደሳለኝ ጌታቸው</h1>
        </div>

        <div class="main flex items-center pt-4">
          <div class="text font-mono font-bold text-lg">I'm a</div>
          <ul class="option font-mono font-bold text-lg">
            <li><span>Website Developer</span></li>
            <li><span>Graphics Designer</span></li>
            <li><span>Flutter Developer</span></li>
            <li><span>Freelancer</span></li>
          </ul>
        </div>
        <!-- <vue-typed-js :strings="['First text', 'Second Text']">
          <h1 class="typing"></h1>
        </vue-typed-js> -->
        <div class="flex gap-4 pt-10 mt-10 items-center justify-center">
          <a href="mailto:desalegn251@gmail.com" target="_blank" title="get in touch with Email">
          <div class="p-4 bg-gray-300 hover:scale-110 hover:bg-green-400 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="h-7 w-7 fill-current hover:scale-110 text-blue-800"
            viewBox="0 0 16 16">
            <path
              d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
          </svg>
          </div>
        </a>
          <a href="https://www.facebook.com/desetyibyit.sol" title="follow in Facebook">
          <div class="p-4 bg-gray-300 hover:scale-110 hover:bg-green-400 rounded-full">
            <svg
              class="h-7 w-7 hover:scale-110 fill-current text-blue-600"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="FacebookOutlinedIcon"
              tabindex="-1"
              title="FacebookOutlined"
            >
              <path
                d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
              ></path>
            </svg>
          </div>
        </a>
        <a href="https://t.me/deseget" title="contact in Telegram">
          <div class="p-4 hover:scale-110 hover:bg-green-400 bg-gray-300 rounded-full">
            <svg
              class="h-7 w-7 fill-current hover:scale-110 text-green-600"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="SendOutlinedIcon"
              tabindex="-1"
              title="SendOutlined"
            >
              <path
                d="m4.01 6.03 7.51 3.22-7.52-1 .01-2.22m7.5 8.72L4 17.97v-2.22l7.51-1M2.01 3 2 10l15 2-15 2 .01 7L23 12 2.01 3z"
              ></path>
            </svg>
          </div>
        </a>
        <a href="https://github.com/Desalegngetachew" title="see in github">
          <div class="p-4 hover:scale-110 hover:bg-green-400 cursor-pointer bg-gray-300 rounded-full">
<img src="../assets/github.png" alt="github logo" class="h-8 w-8" srcset="">
          </div>
        </a>
      <a href="https://linkedin.com/in/desalegn-getachew-23b213234" title="get in LinkedIn">
          <div class="p-4 hover:scale-110 hover:bg-green-400 cursor-pointer bg-gray-300 rounded-full">
            <img src="../assets/linkedin.png" alt="linked logo" class="h-7 w-7" srcset="">
          </div>
        </a>
        </div>
      </div>
    </div>
    <div class="w-full h-auto p-4">
      <h2 class="text-center text-3xl p-4 text-gray-800 dark:text-white" id="about">About Me</h2>
      <about />
    </div>
    <div class="w-full h-auto p-3" id="service">
      <h2 class="text-center text-3xl p-4 text-gray-800 dark:text-white">Service</h2>
      <service/>
    </div>
    <div class="w-full h-auto bg-green-200 dark:bg-gray-800" id="project">
      <h2 class="text-center text-3xl p-4 text-gray-800 dark:text-white">My Previous projects</h2>
     <project/>
    
    </div>
    <div class="w-full h-auto bg-gray-200 dark:bg-gray-800" id="contact">
      <h2 class="text-center text-3xl p-4 text-gray-800 dark:text-white">Say hello to me</h2>
<contact/>
    </div>
    <div>
      <footer/>
    </div>
  </div>
</template>

<script setup>
import about from "../components/about.vue";
import service from "../components/service.vue";
import project from "../components/project.vue";
import footer from '../components/footer.vue';
import contact from '../components/contact.vue';
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
.name {
  color: #d7b94c;
}
@media (max-width:600px) {
  .main .text{
    visibility: hidden;
    font-size: 26px;
  }
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
}
.main {
  display: flex;
}
.main .text {
  color: green;
  font-size: 40px;
  font-weight: 400;
}
.main .option {
  margin-left: 15px;
  height: 90px;
  line-height: 90px;
  overflow: hidden;
}
.option li {
  list-style: none;
  color: #face30;
  font-size: 40px;
  font-weight: 500;
  position: relative;
  top: 0;
  animation: slide 8s steps(4) infinite;
}
@keyframes slide {
  100% {
    top: -360px;
  }
}
.option li span {
  position: relative;
  margin: 5px 0;
  line-height: 90px;
}
.option li span::after {
  content: "";
  position: absolute;
  left: 0;
  height: 100%;
  width: 100%;
  /* 
  background: rgb(240, 236, 236);
 border-left: 2px solid #face30;*/
  animation: typing 2s steps(10) infinite;
  
}
@keyframes typing {
  40%,
  60% {
    left: calc(100% + 30px);
  }
  100% {
    left: 0;
  }
}
</style>
