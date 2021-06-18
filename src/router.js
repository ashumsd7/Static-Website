import {createRouter, createWebHistory } from 'vue-router'

import Home from './components/pages/Home.vue'
import Contact from './components/pages/Contact.vue'
import About from './components/pages/About.vue'
import NotFound from './components/pages/NotFound.vue'
const router= createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/home', component: Home},
        {path:'/', component: Home},
        {path:'/about', component: About},
        {path:'/contact', component: Contact},
        {path:'/nf', component:NotFound}

    ]
});


export default router;