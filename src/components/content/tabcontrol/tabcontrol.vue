<template>
  <div class="tabcontrol">
      <div v-for="(item,index) in title"
       :key="item.index"
       class="tabcontrol-item"
        :class="{active: index === currentindex}" @click="itemclick(index)">
        <span>{{item}}</span></div>
  </div>
</template>

<script>
export default {
    name: 'TabControl',
    props:{
        title:{
            type: Array,
            default(){
                return []
            }
        }
    },
    data() {
        return {
            currentindex : 0
        }
    },
    methods: {
         itemclick(index){
            this.currentindex = index
            this.$emit('tabclick',index)
        }
    },
       
    

}
</script>

<style scoped>

.tabcontrol{
    display: flex;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
    
    
}

.tabcontrol-item{
    flex: 1;
    
}

.active span {
    color: var(--color-tint);
    border-bottom: 2px solid;
    
    
    
}





</style>