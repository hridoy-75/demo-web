import { createWebHistory, createRouter } from 'vue-router'

import compHome from './Components/Home.vue'
import compQuickStart from './Components/QuickStart.vue'
import compStartBlog from './Components/StartBlog.vue'
import compStartEcommerce from './Components/StartEcommerce.vue'
import compStartAffiliate from './Components/StartAffiliate.vue'
import compDigitalMarketing from './Components/DigitalMarketing.vue'
import compBlog from './Components/Blog.vue'
import compResources from './Components/Resources.vue'
import compReSites from './Components/ReSites.vue'
import compRetools from './Components/Retools.vue'
import compReviews from './Components/Reviews.vue'


import compServices from './Components/Services.vue'
import compGetinTouch from './Components/GetinTouch.vue'


const routes = [

    {
        path: '/',
        component: compHome,
        meta: {
            title: 'Home'
        }
    },

    {
        path: '/QuickStart',
        component: compQuickStart,
        meta: {
            title: 'QuickStart'
        }
    },

    {
        path: '/StartBlog',
        component: compStartBlog,
        meta: {
            title: 'StartBlog'
        }
    },
    {
        path: '/StartEcommerce',
        component: compStartEcommerce,
        meta: {
            title: 'StartEcommerce'
        }
    },
    {
        path: '/StartAffiliate',
        component: compStartAffiliate,
        meta: {
            title: 'StartAffiliate'
        }
    },
    {
        path: '/DigitalMarketing',
        component: compDigitalMarketing,
        meta: {
            title: 'DigitalMarketing'
        }
    },

    {
        path: '/Blog',
        component: compBlog,
        meta: {
            title: 'Blog'
        }
    },
    {
        path: '/Resources',
        component: compResources,
        meta: {
            title: 'Resources'
        }
    },
    {
        path: '/ReSites',
        component: compReSites,
        meta: {
            title: 'ReSites'
        }
    },
    {
        path: '/Retools',
        component: compRetools,
        meta: {
            title: 'Retools'
        }
    },
    {
        path: '/Reviews',
        component: compReviews,
        meta: {
            title: 'Reviews'
        }
    },
    {
        path: '/Services',
        component: compServices,
        meta: {
            title: 'Services'
        }
    },

    {
        path: '/GetinTouch',
        component: compGetinTouch,
        meta: {
            title: 'GetinTouch'
        }
    },

]




const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return {
            top: 0
        }
    },
})


export default router;