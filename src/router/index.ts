import { title } from 'process'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import FrontendLayoutVue from '../layouts/FrontendLayout.vue'
import ContactViewVue from '../views/frontend/ContactView.vue'
import FeaturesViewVue from '../views/frontend/FeaturesView.vue'
import GetStartedViewVue from '../views/frontend/GetStartedView.vue'
import HomeViewVue from '../views/frontend/HomeView.vue'
import ServiceViewVue from '../views/frontend/ServiceView.vue'
import TestimonialsViewVue from '../views/frontend/TestimonialsView.vue'


const routes: Array<RouteRecordRaw> = [

        // Frontend Route
    {
        // Frontend Layout
        path: '/',
        name: 'Frontend',
        component: FrontendLayoutVue,

        children: [
            {
                path: '',
                name: 'Home',
                component: HomeViewVue,
                meta: {
                    title: 'Home'
                }
            },
            {
                path: '/features',
                name: 'Features',
                component: FeaturesViewVue,
                meta: {
                    title: 'Features'
                }
            },
            {
                path: '/servicies',
                name: 'Service',
                component: ServiceViewVue,
                meta: {
                    title: 'Service'
                }
            },
            {
                path: '/testimonials',
                name: 'Testimonials',
                component: TestimonialsViewVue,
                meta: {
                    title: 'Testimonials'
                }
            },
            {
                path: '/contacts',
                name: 'Contacts',
                component: ContactViewVue,
                meta: {
                    title: 'Contacts'
                }
            },
            {
                path: '/getstarted',
                name: 'Getstart',
                component: GetStartedViewVue,
                meta: {
                    title: 'Getstart'
                }
            },
            
        ]
    },
]

const router = createRouter ({
    history: createWebHistory(import.meta.env.URL),
    routes
})

// การเรียกทำงานก่อนที่ route จะโหลด
router.beforeEach((to, _, next) => {
    
    if(typeof(to.meta.title) == 'string'){
        document.title = to.meta.title
    }

    next()

    }
    )

export default router