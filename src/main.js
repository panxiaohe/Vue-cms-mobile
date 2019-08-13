console.log('ok')

import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

import router from './router'


import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import 'mint-ui/lib/style.css'
import { Header, Swipe, SwipeItem } from 'mint-ui' 
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem)


import App from './App.vue'

new Vue({
    el: '#app',
    router,
    render: function(c){
        return c(App)
    }
})