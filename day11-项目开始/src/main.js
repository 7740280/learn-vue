import Vue from 'vue'
import router from './router.js'
import app from './App.vue'
import axios from 'axios'
import Vuex from 'vuex'
// import {Header, Tabbar, TabItem, Swipe, SwipeItem,Button,Lazyload} from 'mint-ui'
import Moment from 'moment'

//导入mui样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import VueRouter from 'vue-router'
import VuePreview from 'vue-preview'

Vue.use(VuePreview);
Vue.use(Vuex);

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

//每次进入网站肯定会调用main.js,在刚调用的时候,先从本地存储中把购物车的数据读出来放到store中
var car = JSON.parse(localStorage.getItem('car') || '[]');

var store = new Vuex.Store({
    state: {
        //将购物车商品的数据用一个数据存储起来,子car数组中存储一些商品的对象
        car: car,
    },
    mutations: {
        addToCar:function (state, goodsinfo) {
            //分析:
            //1.如果购物车中,之前已经有这个对用的商品,那么,只需要更新数量
            //2.如果没有,则直接把商品数据push到car中即可
            var flag = false;

            state.car.some(item=>{
               if (item.id == goodsinfo.id){
                   item.count += parseInt(goodsinfo.count);
                   flag = true;
                   return true;
               }
            });

            //如果最终循环完毕,得到的flag还是false,则把商品数据直接push到购物车中
            if (!flag){
                console.log(1);
                state.car.push(goodsinfo);
            }

            //当更新car后,把car数组存储到localStorage中
            localStorage.setItem('car',JSON.stringify(state.car));
        },
        updateGoodsInfo:function (state,goodsinfo) {

        }
    },
    getters: {
        getAllCount:function (state) {
            var c = 0;
            state.car.forEach(item=>{
                c+=item.count;
            });
            return c;
        }
    }
});

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
    store,//挂载Vuex
});