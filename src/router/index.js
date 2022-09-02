import { createRouter, createWebHashHistory } from 'vue-router'
//路由规则
const Layout =()=>import('@/views/Layout') 
const Home =()=>import('@/views/home')
const TopCategory = ()=>import('@/views/category/index')
const SubCategory = ()=>import('@/views/category/sub')
const routes = [
  //一级路由
  {
    path:'/',
    component:Layout,
    //二级路由
    children:[
      {
        path:'/',
        component:Home
      },
      {
        path:'/category/:id',
        component:TopCategory
      },
      {
        path:'/category/sub/:id',
        component:SubCategory
      },
    ]
  }
 
]
//vue3.0中createRouter来创建路由实例，createWebHashHistory代表使用hash模式的路由。
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
