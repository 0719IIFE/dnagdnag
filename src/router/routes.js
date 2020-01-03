
import Msite from '../pages/Msite/Msite.vue'
import Category from '../pages/Category/Category.vue'
import DeserveBuying from '../pages/DeserveBuying/DeserveBuying.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Login from '@/pages/Login/Login'
import Profile from '@/pages/Profile/Profile'
import RedBagRain from '@/pages/RedBagRain/RedBagRain'
import Goods from '@/pages/goods'
import Cart from '@/pages/cart/cart'
import Detail from '@/pages/detail/detail'
import Recommend from '@/pages/recommend/recommend'
import Clothing from '../components/Clothing/Clothing.vue'
import Comment from '../pages/comment/comment.vue'

export default [
    {
        path:'/msite',
        component:Msite,
        meta:{
            isShowFooter:true
        }
    },
    {
        path:'/clothing',
        component:Clothing
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
        path:'/profile',
        component:Profile,
        meta:{
            isShowFooter:true
        }
    },
    {
        path:'/red_bag_rain',
        component:RedBagRain
    },
    {
        path:'/login',
        component:Login,
    },
    {
        path:'/goods',
        component:Goods,
    },
    {
        path:'/cart',
        component:Cart,
    },
    {
        path:'/detail',
        component:Detail,
    },
    {
        path:'/recommend',
        component:Recommend,
    },
       {
        path:'/comment',
        component:Comment,
    },
    {
        path:'/',
        redirect:'/msite',
    }
]