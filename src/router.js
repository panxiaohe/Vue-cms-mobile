import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from './components/tabbars/Home.vue'
import Member from './components/tabbars/Member.vue'
import Shopcar from './components/tabbars/Shopcar.vue'
import Search from './components/tabbars/Search.vue'

var router = new VueRouter({
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: Home},
        {path: '/member', component: Member},
        {path: '/shopcar', component: Shopcar},
        {path: '/search', component: Search}
    ],
    linkActiveClass: 'mui-active'
})

export default router