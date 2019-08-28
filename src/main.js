console.log('ok')

import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://www.liulongbin.top:3005'

// 导入路由模块
import router from './router'

// 导入各种插件
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import 'mint-ui/lib/style.css'
import { Header, Swipe, SwipeItem, Button } from 'mint-ui' 
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)

import moment from 'moment'

// 导入App组件
import App from './App.vue'

// 过滤器
Vue.filter('dateFormat', function(dateStr, pattern='YYYY-MM-DD'){
    // pattern = 'YYYY-MM-DD HH:mm:ss'
    return moment(dateStr).format(pattern)
})

// 全局组件
// import Commont from './components/subcomponents/Comment.vue'
// Vue.component('commont-box', Commont)

new Vue({
    el: '#app',
    router,
    render: function(c){
        return c(App)
    }
})