import Vue from 'vue'
 import VueRouter from 'vue-router'  

const Home=() => import('../views/home.vue')
const Dif=() => import('../views/dif.vue')
const Cart=() => import('../views/cart.vue')
const Mine=() => import('../views/mine.vue')

Vue.use(VueRouter)
const routes=[

    {
        path: '',
        redirect: '/home'
    },

    {
        path: '/home',
        component: Home,
        meta: {
            title:'主页'
        }
    },

    {
        path: '/dif',
        component: Dif,
        meta: {
            title:'分类'
        }
        
    },

    {
        path: '/cart',
        component: Cart,
        meta: {
            title:'购物车'
        }
    },

    {
        path: '/mine',
        component: Mine,
        meta: {
            title:'我的'
        }
    },

]

const router = new VueRouter({
    routes,
    mode: 'history'   
})

export default router