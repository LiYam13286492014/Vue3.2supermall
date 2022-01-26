<template>
  <div class="goodslist">
      <goods-list-item v-for="item in goodslist" :key="item.index" :goodsitem="item" ></goods-list-item>

  </div>
</template>

<script>
import GoodsListItem from './goodslistitem.vue'
export default {

    name: 'GoodsList',
  
        data() {
        return {
            
        }
    },
    components:{
        GoodsListItem
    },

    props:{
        goodslist:{
            type:Array,
        default() {
            return []
        }
        }
    }

}
</script>

<style>
.goodslist{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
</style>