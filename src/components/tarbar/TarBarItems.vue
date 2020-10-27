<template>
  <div class="bar_items" @click="btnClick">
     <div v-if="!activeBoolean"><slot name="img"></slot></div>
     <div v-else><slot name="img-active"></slot></div>
     <div :style="activeStyle"><slot name="text"></slot></div>
  </div>
</template>

<script>
  export default {
    name:"TarBarItems",
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'red'
      }
    },
    data() {
      return {
        isActive:false
      }
    },
    methods:{
      btnClick() {
        this.$router.push(this.path);
      }
    },
    computed:{
      activeBoolean() {
        return this.$route.path.indexOf(this.path) != -1;
      },
      activeStyle() {
        return this.activeBoolean ? {color:this.activeColor} :{};
      }
    }
  }
</script>

<style>
  .bar_items{
    flex:1;
    height:49px;
    background-color: #f6f6f6;
    text-align: center;
  }
  .tar_img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>