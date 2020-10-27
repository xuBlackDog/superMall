<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">蘑菇街</div>
    </nav-bar>
    {{banner}}
    {{recommend}}
  </div>
</template>

<script>
import NavBar from 'components/navbar/NavBar'
import {getMultDate} from 'api/home'
export default {
  name:"Home",
  components:{
    NavBar
  },
  data() {
    return {
      banner:[],
      recommend:[]
    }
  },
  created() {
    getMultDate().then(res =>{
      console.log(res);
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
      console.log(this.banner);
      console.log(this.recommend);
    })
  }
}
</script>

<style>
  .home-nav {
    background-color: var(--color-tint);
    color:white
  }
</style>