
import Msite from '../pages/Msite/Msite.vue'
import Category from '../pages/Category/Category.vue'
import DeserveBuying from '../pages/DeserveBuying/DeserveBuying.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Profile from '../pages/Profile/Profile.vue'

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
        path:'/profile',
        component:Profile,
        meta:{
            isShowFooter:true
        }
    },
    {
        path:'/',
        redirect:'/msite',
    }
]