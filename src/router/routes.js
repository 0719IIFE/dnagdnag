
import Msite from '../pages/Msite/Msite.vue'
import Category from '../pages/Category/Category.vue'
import DeserveBuying from '../pages/DeserveBuying/DeserveBuying.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Login from '@/pages/Login/Login'
import Personal from '@/pages/Personal/Personal'


export default [
    {
        path:'/msite',
        component:Msite,
        meta:{
            isShowFooter:true
        }
    },
    {
        path:'/category',
        component:Category,
        meta:{
            isShowFooter:true
        }
    },
    {
        path:'/deservebuying',
        component:DeserveBuying,
        meta:{
            isShowFooter:true
        }
    },
    {
        path:'/shopcart',
        component:ShopCart
    },
    {
        path:'/personal',
        component:Personal,
        meta:{
            isShowFooter:true
        }
    },
    {
        path:'/login',
        component:Login,
    },
    {
        path:'/',
        redirect:'/msite',
    }
]