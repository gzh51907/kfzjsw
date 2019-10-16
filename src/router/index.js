import Vue from 'vue';

// 使用VueRouter步骤
// 1.引入vue-router
import VueRouter from 'vue-router';

// 2.使用(安装)vue-router（VueRouter是作为插件增强Vue的功能）
Vue.use(VueRouter);

// 引入页面组件
import Home from '../pages/Home.vue';
import Cart from '../pages/Cart.vue';
import Paimai from '../pages/Paimai.vue';
import Mine from '../pages/Mine.vue';
import Book from '../pages/Book.vue';
import Reg from '../pages/Reg.vue';
import Login from '../pages/Login.vue';
import Fenlei from '../pages/shouye/Fenlei.vue';
import Newbook from '../pages/everynewbook/newbook.vue';
import Details from '../pages/Details.vue';
import Management from '../pages/management.vue';
import { log } from 'util';

// 3. 实例化router并配置参数
let router = new VueRouter({
    // mode:'hash',
    // 配置参数：不同的 URL 显示不同的内容
    routes: [
        // 首页
        {
            name: 'home',
            path: '/home', //当浏览器地址为/home时，显示Home组件的内容
            component: Home,
            // props:{username:'laoxie',password:123}, //等效于<Home username="laoxie" password=123/>
            // props:function(route){

            //     return {
            //         username:'laoxie',
            //         password:123
            //     }
            // },
            props: true, // 等效于<Home v-bind="route.params"/> -> <Home v-bind="{username:'laoxie',age:18}"/> -> <Home username="laoxie" password=123/>
        },
        {
            path: '/', //当浏览器地址为/home时，显示Home组件的内容
            redirect: '/home'
        },
        {
            name: 'details',
            path: '/details/:id',
            component: Details
        },
        {
            name: 'book',
            path: '/book',
            component: Book

        }, {
            name: 'paimai',
            path: '/paimai',
            component: Paimai
        }, {
            name: 'login',
            path: '/login',
            component: Login
        }, {
            name: 'reg',
            path: '/reg',
            component: Reg
        }, {
            name: 'fenlei',
            path: '/fenlei',
            component: Fenlei
        },
        {
            name: 'management',
            path: '/management',
            component: Management
        }, {
            name: 'newbook',
            path: '/newbook',
            component: Newbook
        }, {
            name: 'mine',
            path: '/mine',
            component: Mine,
            meta: {
                requiresAuth: true
            }
        },
        // 购物车
        {
            name: 'cart',
            path: '/cart',
            component: Cart,
            meta: {
                requiresAuth: true
            }
        }
    ]
});
router.beforeEach(function (to, from, next) {
    window.console.log('beforEach', to);

    //在全局路由守卫beforeEach中进行页面权限访问控制
    //先判断目标路由是否需要鉴权
    if (to.meta.requiresAuth) {
        let user = localStorage.getItem('user');
        console.log(user);

        if (user) {
            next();
        } else {
            router.push({
                path: '/login',
                query: {
                    targetUrl: to.fullPath
                }
            })
        }
    } else {
        next();
    }

})

// 5.在组件中使用VueRouter

export default router;