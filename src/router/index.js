import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/PageHome.vue'
import PagePalestra from '../views/PagePalestra.vue'
import PagePalestraInfo from '../views/PagePalestraInfo.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/palestras',
        name: 'Palestras',
        component: PagePalestra
    },
    {
        path: '/palestras/:id',
        name: 'PalestraInfo',
        component: PagePalestraInfo,
        props: true
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router