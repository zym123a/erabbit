import { createStore } from 'vuex'
//A模块
const moduleA={
  state:{
    username:'moduleA'
  },
  getters:{
    newName(state){
      return state.username+'!!'
    }
  },
  mutations:{
    updateName(state){
      state.username='moduleAaaa'
    }
  }
}
//B模块
const moduleB={
  namespaced:true,
  state:{
    username:'moduleB'
  },
  getters:{
    newName(state){
      return state.username+'!!'
    }
  },
  mutations: {
    updateName(state){
      state.username='ls'
    }
  },
  actions: {
    updateName(context){
      setTimeout(()=>{
        context.commit('updateName')
      },1000)
    }
  },
}

export default createStore({
  // state: {
  //   username: 'zs'
  // },
  // getters: {
  //   newName(state){
  //     return state.username+'!!'
  //   }
  // },
  // mutations: {
  //   updateName(state){
  //     state.username='ls'
  //   }
  // },
  // actions: {
  //   updateName(context){
  //     setTimeout(()=>{
  //       context.commit('updateName')
  //     })
  //   }
  // },
  modules: {
    moduleA,
    moduleB
  }
})
