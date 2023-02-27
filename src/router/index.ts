import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import FrontendLayoutVue from '../layouts/FrontendLayout.vue'
import HomeViewVue from '../views/frontend/HomeView.vue'


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
            }
        ]
    },
]

const router = createRouter ({
    history: createWebHistory(import.meta.env.URL),
    routes
})

export default router