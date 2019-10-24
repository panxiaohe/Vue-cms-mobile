import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from './components/tabbars/Home.vue'
import Member from './components/tabbars/Member.vue'
import Shopcar from './components/tabbars/Shopcar.vue'
import Search from './components/tabbars/Search.vue'
import NewsList from './components/news/NewsList.vue'
import NewsDetail from './components/news/NewsDetail.vue'
import Pictures from './components/picture/Pictures.vue'
import PictureDetail from './components/picture/PictureDetail.vue'
import GoodsList from './components/goods/GoodsList.vue'
import GoodsDetail from './components/goods/GoodsDetail.vue'
import GoodsInfo from './components/goods/GoodsInfo.vue'
import GoodsComment from './components/goods/GoodsComment.vue'

var router = new VueRouter({
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: Home},
        {path: '/member', component: Member},
        {path: '/shopcar', component: Shopcar},
        {path: '/search', component: Search},
        {path: '/home/newsList', component: NewsList},
        {path: '/home/newsDetail/:id', component: NewsDetail},
        {path: '/home/pictures', component: Pictures},
        {path: '/home/pictureDetail/:id', component: PictureDetail},
        {path: '/home/goodsList', component: GoodsList},
        {path: '/home/goodsDetail/:id', component: GoodsDetail},
        {path: '/home/goodsInfo/:id', component: GoodsInfo, name:'GoodsInfo'},
        {path: '/home/goodsComment/:id', component: GoodsComment, name:'GoodsComment'}

    ],
    linkActiveClass: 'mui-active'
})

export default router