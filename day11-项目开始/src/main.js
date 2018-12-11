import Vue from 'vue'
import router from './router.js'
import app from './App.vue'
import {Header, Tabbar, TabItem, Swipe, SwipeItem} from 'mint-ui'
//导入mint-ui样式
import 'mint-ui/lib/style.css'
//导入mui样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import VueRouter from 'vue-router'

Vue.use(VueRouter);

Vue.component(Header.name, Header);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router,
});