console.log('ok')

import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://www.liulongbin.top:3005'
Vue.http.options.emulateJSON = true

// 导入路由模块
import router from './router'

// 导入各种插件
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import 'mint-ui/lib/style.css'
// 按需引入，图片懒加载功能没效果
// import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui' 
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
// Vue.use(Lazyload)
// 完整引入
import MintUi from 'mint-ui'
Vue.use(MintUi)

import moment from 'moment'

import VuePreview from 'vue-preview'
Vue.use(VuePreview)

// 导入App组件
import App from './App.vue'

// 过滤器
Vue.filter('dateFormat', function(dateStr, pattern='YYYY-MM-DD'){
    pattern = 'YYYY-MM-DD HH:mm:ss'
    return moment(dateStr).format(pattern)
})

// 全局组件
// import Commont from './components/subcomponents/Comment.vue'
// Vue.component('v-comment', Commont)

new Vue({
    el: '#app',
    router,
    render: function(c){
        return c(App)
    }
})