<template>
  <div id="app">
    <router-view></router-view>
    <tar-bar>
      <tar-bar-items path="/home" activeColor="blue">
        <img class="tar_img" src="./assets/img/home.svg" slot="img" alt="">
        <img class="tar_img" src="./assets/img/home_active.svg" slot="img-active" alt="">
        <div slot="text">主页</div>
      </tar-bar-items>
      <tar-bar-items path="category" activeColor="black">
         <img class="tar_img" src="./assets/img/category.svg" slot="img" alt="">
         <img class="tar_img" src="./assets/img/category_active.svg" slot="img-active" alt="">
         <div slot="text">消息</div>
      </tar-bar-items>
      <tar-bar-items path="cart">
          <img class="tar_img" src="./assets/img/profile.svg" slot="img" alt="">
          <img class="tar_img" src="./assets/img/profile_active.svg" slot="img-active" alt="">
          <div slot="text">我的</div>
      </tar-bar-items>
      <tar-bar-items path="profile">
         <img class="tar_img" src="./assets/img/shopcart.svg" slot="img" alt="">
         <img class="tar_img" src="./assets/img/shopcart_active.svg" slot="img-active" alt="">
          <div slot="text">购物车</div>
      </tar-bar-items>
    </tar-bar>
  </div>
</template>

<style>
  @import url('./assets/css/base.css');
</style>

<script>

  import TarBar from 'components/tarbar/TarBar'
  import TarBarItems from 'components/tarbar/TarBarItems'
  export default {
    name:"App",
    components:{
      TarBar,
      TarBarItems
    }
  }
</script>