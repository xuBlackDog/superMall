<template>
  <div class="bar_box">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name:"TarBar"
  }
</script>

<style>
  body{
    padding: 0px;
    margin:0px;
  }
  .bar_box{
    display: flex;
    background-color: #f6f6f6;
    box-shadow: 0 -3px 10px rgba(100 100 100 .8);
    position: fixed;
    left: 0;
    bottom:0;
    right: 0;
  }
</style>