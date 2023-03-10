import { createApp } from 'vue'
import { createPinia } from 'pinia'
// vue motion animation
import { MotionPlugin } from '@vueuse/motion'

import App from './App.vue'
import router from './router'
import './index.css'
// import { VueTypedJs } from 'vue-typed-js'
 
const app = createApp(App)

app.use(createPinia())
// motion animation
app.use(MotionPlugin)
app.use(router)
// app.use(VueTypedJs)
app.mount('#app')
