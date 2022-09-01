import { createStore, } from 'vuex'
import createPersistedstate from 'vuex-persistedstate'
import cart from './modules/cart'
import user from './modules/user'
import category from './modules/category'
export default createStore({
    modules:{
      cart,
      user,
      category
    },
    //配置插件
    plugins:[
      //默认存储在localStorage
      createPersistedstate({
        //本地存储名字
          key: 'erabbit-client-pc-store',
          //指定需要的模块
          paths: ['user', 'cart']
      })
    ]
})
//A模块
// const moduleA={
//   state:{
//     username:'moduleA'
//   },
//   getters:{
//     newName(state){
//       return state.username+'!!'
//     }
//   },
//   mutations:{
//     updateName(state){
//       state.username='moduleAaaa'
//     }
//   }
// }
// //B模块
// const moduleB={
//   namespaced:true,
//   state:{
//     username:'moduleB'
//   },
//   getters:{
//     newName(state){
//       return state.username+'!!'
//     }
//   },
//   mutations: {
//     updateName(state){
//       state.username='ls'
//     }
//   },
//   actions: {
//     updateName(context){
//       setTimeout(()=>{
//         context.commit('updateName')
//       },1000)
//     }
//   },
// }

// export default createStore({
//   // state: {
//   //   username: 'zs'
//   // },
//   // getters: {
//   //   newName(state){
//   //     return state.username+'!!'
//   //   }
//   // },
//   // mutations: {
//   //   updateName(state){
//   //     state.username='ls'
//   //   }
//   // },
//   // actions: {
//   //   updateName(context){
//   //     setTimeout(()=>{
//   //       context.commit('updateName')
//   //     })
//   //   }
//   // },
//   modules: {
//     moduleA,
//     moduleB
//   }
// })
