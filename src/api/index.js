import ajax from "./ajax"


//异步获取首页的数据
export const reqHome = () => ajax.get("/home")
//异步获取首页的数据
export const reqSecKilled = () => ajax.get("/seckilled")
//异步获取首页的数据
export const reqPicture = () => ajax.get("/picture")
//异步获取首页的数据
export const reqRedBagRain = () => ajax.get("/redBagRain")


export const reqTeJiaShuShi = () => ajax.get("/teJiShuShi")

export const DeserveBuying = () => ajax.get("/DeserveBuying")

export const reqJinRiCuXiao = () => ajax.get("/jinRiCuXiao")
