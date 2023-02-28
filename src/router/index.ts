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
                component: HomeViewVue
            },
            {
                path: '/features',
                name: 'Features',
                component: FeaturesViewVue
            },
            {
                path: '/servicies',
                name: 'Service',
                component: ServiceViewVue
            },
            {
                path: '/testimonials',
                name: 'Testimonials',
                component: TestimonialsViewVue
            },
            {
                path: '/contacts',
                name: 'Contacts',
                component: ContactViewVue
            },
            {
                path: '/getstarted',
                name: 'Getstart',
                component: GetStartedViewVue
            },
            
        ]
    },
]

const router = createRouter ({
    history: createWebHistory(import.meta.env.URL),
    routes
})

export default router