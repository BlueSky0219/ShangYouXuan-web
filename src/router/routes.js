import Home from "@/pages/Home/Index.vue"
import Search from "@/pages/Search/Index.vue"
import Register from "@/pages/Register/Index.vue"
import Login from "@/pages/Login/Index.vue"
import Detail from "@/pages/Detail/Index.vue"
import AddCartSuccess from "@/pages/AddCartSuccess/Index.vue"
import ShopCart from "@/pages/ShopCart/Index.vue"

export default [
    {
        path: "/shopcart",
        component: ShopCart,
        meta: { show: true }
    },
    {
        path: "/addcartsuccess",
        name: 'addcartsuccess',
        component: AddCartSuccess,
        meta: { show: true }
    },
    {
        path: "/detail/:skuid",
        component: Detail,
        meta: { show: true }
    },
    {
        path: "/home",
        component: Home,
        meta: { show: true }
    },
    {
        path: "/search/:keyword?",
        component: Search,
        name: "search",
        meta: { show: true }
    },
    {
        path: "/register",
        component: Register,
        meta: { show: false }
    },
    {
        path: "/login",
        component: Login,
        meta: { show: false }
    },
    {
        path: "/",
        redirect: '/home'
    }
]