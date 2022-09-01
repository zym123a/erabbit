import { createRouter, createWebHashHistory } from 'vue-router'
//路由规则
const Layout =()=>import('@/views/Layout') 
const Home =()=>import('@/views/home') 
const routes = [
  {
    path:'/',
    component:Layout,
    children:[
      {
        path:'/',
        component:Home
      }
    ]
  }
 
]
//vue3.0中createRouter来创建路由实例，createWebHashHistory代表使用hash模式的路由。
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
