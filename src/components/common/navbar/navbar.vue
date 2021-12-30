<template>
  <div class="navbar">
      <div class="left"><slot></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot></slot></div>
  </div>
</template>

<script>
export default {
    name:'NavBar'

}
</script>

<style >
.navbar {
    display: flex;
    line-height: 44px;
    text-align: center;
    
    
    
}

.left,.right{
    width: 60px;
   
}

.center{
    flex: 1;
    
    
}

</style>