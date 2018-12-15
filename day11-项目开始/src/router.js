import VueRouter from 'vue-router'


var router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/home',
            component: () => import('./components/tabbar/HomeContainer.vue')
        },
        {
            path: '/member',
            component: () => import( './components/tabbar/MemberContainer.vue')
        },
        {
            path: '/car',
            component: () => import( './components/tabbar/ShopcarContainer.vue')
        },
        {
            path: '/search',
            component: () => import( './components/tabbar/SearchContainer.vue')
        },
        {
            path: '/home/newslist',
            component: () => import( './components/news/NewsList.vue')
        },
        {
            path: '/home/newsinfo/:id',
            component: () => import('./components/news/NewsInfo.vue')
        },
        {
            path: '/home/photolist',
            component: () => import('./components/photos/PhotoList.vue')
        },
        {
            path:'/home/photoinfo/:id',
            component:()=>import('./components/photos/PhotoInfo.vue')
        },
        {
            path:'/home/goodslist',
            component:()=>import('./components/goods/GoodsList.vue')
        },
        {
            name:'goodsinfo',
            path:'/home/goodsinfo/:id',
            component:()=>import('./components/goods/GoodsInfo.vue')
        }
    ],
    linkActiveClass: 'mui-active'
});

export default router;