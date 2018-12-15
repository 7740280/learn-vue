import Vue from 'vue'
import router from './router.js'
import app from './App.vue'
import axios from 'axios'
// import {Header, Tabbar, TabItem, Swipe, SwipeItem,Button,Lazyload} from 'mint-ui'
import Moment from 'moment'

//导入mui样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import VueRouter from 'vue-router'
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

import MintUI from 'mint-ui'
Vue.use(VueRouter);
Vue.use(MintUI);
//导入mint-ui样式
import 'mint-ui/lib/style.css'

// Vue.component(Header.name, Header);
// Vue.component(Button.name, Button);
// Vue.component(Tabbar.name, Tabbar);
// Vue.component(TabItem.name, TabItem);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);

//定义全局根URL
axios.defaults.baseURL = 'http://vue-shop.com/api';
Vue.prototype.$http = axios;


//定义全局过滤器来格式化时间
Vue.filter('dateFormat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
    return Moment(dataStr).format(pattern);
});

//事件总线
Vue.prototype.bus = new Vue();

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router,
});