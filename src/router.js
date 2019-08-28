import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from './components/tabbars/Home.vue'
import Member from './components/tabbars/Member.vue'
import Shopcar from './components/tabbars/Shopcar.vue'
import Search from './components/tabbars/Search.vue'
import NewsList from './components/news/NewsList.vue'
import NewsDetail from './components/news/NewsDetail.vue'

var router = new VueRouter({
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: Home},
        {path: '/member', component: Member},
        {path: '/shopcar', component: Shopcar},
        {path: '/search', component: Search},
        {path: '/home/newsList', component: NewsList},
        {path: '/home/newsDetail/:id', component: NewsDetail},
    ],
    linkActiveClass: 'mui-active'
})

export default router