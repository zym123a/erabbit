<template>
  <div class="container">
    <!-- 首页入口 -->
    <div class="home-entry">
      <!-- 左侧分类 -->
      <HomeCategory></HomeCategory>
      <!-- 轮播图 -->
    </div>
  </div>
</template>

<script>
import HomeCategory from './components/home-category.vue';
export default {
    components: { HomeCategory }
}
</script>

<style scoped lang="less"> 

.container{
    
    color: @xtxColor;
}
</style>