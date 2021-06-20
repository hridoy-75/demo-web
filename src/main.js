import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import 'animate.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
import 'aos/dist/aos'
AOS.init()
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-grid.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.json'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/fonts/bootstrap-icons.woff'
import 'bootstrap-icons/font/fonts/bootstrap-icons.woff2'
import 'bootstrap-icons/bootstrap-icons.svg'
import 'boxicons/css/boxicons.min.css'
import 'swiper/swiper-bundle.min.css'
import 'glightbox/dist/css/glightbox.min.css'
import 'remixicon/fonts/remixicon.css'
import 'glightbox/dist/js/glightbox.min.js'
import 'swiper/swiper-bundle.min.js'
import 'isotope-layout/dist/isotope.pkgd.min.js'


import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, fab);



const app = createApp(App)
app.use(router)
    .component('fa', FontAwesomeIcon)
app.mount('#app')