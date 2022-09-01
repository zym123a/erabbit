<template>
  <div>
    <!-- 使用模块A的state数据 -->
    <p>{{$store.state.moduleA.username}}</p>
    <!-- 使用A模块的getters数据 -->
    <p>{{$store.getters.newName}}</p>
    <!-- 使用模块B的state数据 -->
    <p>{{$store.state.moduleB.username}}</p>
    <!-- 使用A模块的getters数据 -->
    <p>{{$store.getters['moduleB/newName']}}</p>
    <button @click="mutationFn">mutationFn</button>
    <button @click="actionFn">actionFn</button>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  setup(){
    const store= useStore()
    const mutationFn=()=>{
      store.commit('moduleB/updateName')
    }
    const actionFn=()=>{
      store.dispatch('moduleB/updateName')
    }
    return {mutationFn,actionFn}
  }
}
</script>

<style>

</style>