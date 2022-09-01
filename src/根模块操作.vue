<template>
    <!-- vue2.0需要根元素vue3.0可以是代码片段 -->
    <div>
      <p>{{$store.state.username}}</p>
      <p>{{$store.getters['newName']}}</p>
      <button @click="fn">修改</button>
    </div>
  
  </template>
  
  <script>
  import { useStore } from 'vuex';
  export default {
    
    setup (){
      //使用根模块state的数据
      const store = useStore()
      console.log(store.state.username)
      //使用根模块getters的数据
      console.log(store.getters.newName)
      
      const fn=()=>{
        //提交根模块mutations的函数
        // store.commit('updateName')
        //调用根模块actions的函数
        store.dispatch('updateName')
      }
      return {fn}
    }
  }
  </script>
  
  <style>
  
  </style>
  