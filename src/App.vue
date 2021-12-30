<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item  path='/home' >
        <img slot="img" src="./assets/img/svg/home.svg" alt="">
        <img slot="actimg" src="./assets/img/svg/homeactive.svg" alt="">
        <div slot="text">
          首页
        </div>
      </tab-bar-item>
      <tab-bar-item path='/dif' >
        <img slot="img" src="./assets/img/svg/dif.svg" alt="">
        <img slot="actimg" src="./assets/img/svg/difactive.svg" alt="">
        <div slot="text">
          分类
        </div>
      </tab-bar-item>
      <tab-bar-item path='/cart' >
        <img slot="img" src="./assets/img/svg/cart.svg" alt="">
        <img slot="actimg" src="./assets/img/svg/cartactive.svg" alt="">
        <div slot="text">
          购物车
        </div>
      </tab-bar-item>
      <tab-bar-item path='/mine' >
        <img slot="img" src="./assets/img/svg/mine.svg" alt="">
        <img slot="actimg" src="./assets/img/svg/mineactive.svg" alt="">
        <div slot="text">
          我的
        </div>
      </tab-bar-item>
    </tab-bar>

    <router-view></router-view>
  </div>
    
    
</template>

<script>
import TabBar from './components/common/tabbar/Tabbar.vue'
import TabBarItem from './components/common/tabbar/Tabbaritem.vue'

export default {
  name: 'App',
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style>
@import url('./assets/css/base.css');




</style>
