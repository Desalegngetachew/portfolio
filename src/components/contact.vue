<template>
    <div class="bg-gray-200 dark:bg-gray-800">
        <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div class="vg-maps py-7 pl-8 rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11028.44829113732!2d37.398106313343035!3d11.597358130807985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1644ce107991537d%3A0x3e8bedd070a29619!2sBahir%20Dar%20University%20Poly%20Campus!5e1!3m2!1sen!2set!4v1670750640197!5m2!1sen!2set"
                width="600" height="450" style="border:0;" allow="fullscreen" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
    <div class="w-full">
    <form action="">
       <div  class="w-full flex flex-col gap-3 px-20 py-10">
        <div class="">
            <input required type="text" name="name" id="name" placeholder="Your name" class="border border-green-300 shadow-md py-2 px-6 w-full text-lg font-mono font-bold text-gray-800 dark:text-gray-800">
        </div>
            <div class="flex gap-2 w-full">
            <input required type="email" id="email" name="email" placeholder="Your Email Address" class="border border-green-300 shadow-md py-2 px-1 w-full text-lg font-mono font-bold text-gray-800 dark:text-gray-800">
            <input type="text" id="subject" name="subject" placeholder="Subject" class="border border-green-300 shadow-md py-2 px-1 w-full text-lg font-mono font-bold text-gray-800 dark:text-gray-800">
        </div>
        <div>
        <textarea required class="border border-green-300 shadow-md p-5 text-lg font-mono font-bold w-full" name="message" id="message" cols="30" rows="5" placeholder="Write message here.Eg. Hi nice to meet you, I want to get in touch... "></textarea>
    </div>
    <div>
        <input type="submit" value="Send message" class="px-11 py-2 cursor-pointer rounded-lg bg-green-400 text-white hover:scale-x-110 hover:bg-green-700">
    </div>
    </div>
    </form>
</div>
</div>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>