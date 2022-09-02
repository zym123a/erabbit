<template>
  <div>
    <!-- 顶部通栏 -->
    <AppTopnav></AppTopnav>
    <!-- 吸顶头部 -->
    <AppHeaderSticky></AppHeaderSticky>
    <!-- 头部组件 -->
    <AppHeader></AppHeader>
    <!-- 内容容器 -->
    <div class="app-body">
        <router-view></router-view>
    </div>
    <!-- 底部组件 -->
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppTopnav from '@/components/app-topnav.vue';
import AppHeader from '@/components/app-header.vue';
import AppFooter from '../components/app-footer.vue';
import { useStore } from 'vuex';
import AppHeaderSticky from '@/components/app-header-sticky.vue';
export default {
    components: { AppTopnav, AppHeader, AppFooter, AppHeaderSticky },
    //获取分类数据
    setup(){
      const store=useStore()
      store.dispatch('category/getCategoryList')
    }
}
</script>

<style lang="less" scoped>
    .app-body{
      min-height: 600px;
    }


</style>