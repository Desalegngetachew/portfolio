<template>
    <div class="w-full h-full bg-green-50 dark:bg-gray-800">
<div class="flex gap-2 items-center justify-center flex-wrap">
<!-- <div class=" "> -->
    <div v-motion-slide-visible-left class="contact text-gray-800 dark:text-white block justify-center items-center ml-10 flex-wrap md:w-[43%] sm:h-full">
        <h1 class="text-2xl p-2">{{about_name}}</h1>
        <p>{{paragraph}}</p>
        <div class="flex gap-2 mt-3">
            <span>
                <svg class="fill-current h-6 w-7 text-blue-600" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="BusinessOutlinedIcon" tabindex="-1" title="BusinessOutlined"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"></path></svg>
            </span>
           <p class="flex-wrap"> Desalegn Getachew, Bahir Dar, Ethiopia.</p>
        </div>
        <div class="flex gap-2 mt-3">
          <span>
            <svg class="fill-current h-6 w-7 text-blue-600" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CallOutlinedIcon" tabindex="-1" title="CallOutlined"><path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z"></path></svg>
          </span>
          <p>+251953593347</p>
        </div>
        <div class="flex gap-2 mt-3">
            <span>
                <svg class="fill-current h-6 w-7 text-blue-600" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EmailOutlinedIcon" tabindex="-1" title="EmailOutlined"><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path></svg>
            </span>
          <p>Desalegn251@Gmail.Com</p>
        </div>
        <div class="flex gap-2 mt-3">
            <span>
                <svg class="fill-current h-6 w-7 text-blue-600" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LanguageOutlinedIcon" tabindex="-1" title="LanguageOutlined"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></svg>
            </span>
          <p>Www.Desalegngetachew.Blogspot.Com/</p>
        </div>
    </div>
<!-- </div> -->
<div v-motion-slide-visible-top class="w-48 justify-center items-center md:ml-10 sm:ml-10 sm:items-center">
    <img src="../assets/background.jpg" class="rounded-full" alt="was my photo">
</div>
</div>
<!-- <h2 class="text-2xl text-center py-6 text-gray-800 dark:text-white">Skills</h2> -->
<div class="flex gap-10 justify-center items-center py-8 px-8 flex-wrap">
<div v-motion-slide-visible-top class="w-60 justify-center items-center md:ml-10 sm:ml-10 sm:items-center">
<img src="../assets/computer-skill.png" alt="computer image" srcset="" class="h-auto pt-6 w-full">
</div>
<div v-motion-slide-visible-right class="text-lg block lg:ml-0 sm:ml-10 text-gray-800 dark:text-white">
    <div>
        <p class="text-2xl text-center py-6 text-gray-800 dark:text-white">
        Programming and scripting language
    </p>
</div>
    <div >
        <p class="font-bold font-mono">Flutter</p>
    </div>
    <div >
        <p class="font-bold font-mono">Vue js </p>
    </div>
    <div >
        <p class="font-bold font-mono">Node and Express js</p>
    </div>
    <div >
       <p class="font-bold font-mono">JavaScript</p> 
    </div>
    <div >
        <p class="font-bold font-mono">PHP</p>
    </div>
    <div >
        <p class="font-bold font-mono">CSS</p>
    </div>
    <div >
        <p class="font-bold font-mono">Tailwind</p>
    </div>
    <div >
        <p class="font-bold font-mono">Bootstrap</p>
    </div>
    <div >
        <p class="font-bold font-mono">Java</p>
    </div>
    <div >
        <p class="font-bold font-mono">C++</p>
    </div>
</div>

</div>


<div class=" pt-5">
    <div class="grid sm:grid-cols-1 md:grid-cols-2 sm:gap-5 md:gap-16 text-gray-800 dark:text-white justify-center sm:px-3 md:px-11">
      <div class="border-2 shadow-lg p-2 dark:border" id="education">
        <h2 class="text-2xl py-6 text-gray-800 dark:text-white">Education</h2>
        <ul class="">
          
          <li>
            <div class="py-3 bg-yellow-500 rounded-r-3xl w-[50%] px-3"> 2010/2018 - Current </div>
            <div class="details">
              <h5> Bahir Dar Institute of Technology, BDU </h5>
              <small class="fg-theme"> BSc in Software Engineering </small>
              <p> I am currently studying my <code> BSc in Software Engineering </code>
                in this University.
              </p>
            </div>
          </li>
        
        </ul>
      </div>
      <div class="border-2 shadow-lg p-2 dark:border" data-wow-delay="200ms" id="experience">
        <h2 class="text-2xl py-6 text-gray-800 dark:text-white">Experience</h2>
        <ul class="">
          <li>
            <div class="py-3 bg-yellow-500 rounded-r-3xl w-[57%] px-3">June 1, 2022 - Oct 30, 2022</div>
            <div class="details">
              <h5 class="font-bold font-mono text-lg"> Internship </h5>
              <small class="font-bold font-mono text-lg"> Debre Markos University </small>
              <p> I have developed <code>Jop portal system for Ethiopia</code> during my Internship period.
                With this four Internship period, I have gained an experience on website development.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="container pt-5">
    <div class="row">
      <div class="col-md-6 wow fadeInRight" data-wow-delay="200ms">
        <h2 class="fw-normal"> My GitHub History</h2>
        <div class="calendar"></div>
      </div>
    </div>
  </div>
</div>
    
</template>

<script setup>
    import { ref } from 'vue';
    const about_name = ref('Desalegn Getachew')
    const paragraph = ref("Hello there, I'm Bahir Dar University Software Engineering Student.Get me using one of the following contact.")
</script>

<style scoped>
@media (max-width:600px) {
   .contact {
    width: 100%;
    margin-left:0px;
     
    }
   
  }
</style>