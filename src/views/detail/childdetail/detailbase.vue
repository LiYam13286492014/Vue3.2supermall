<template>
  <div class="detailbase" v-if="Object.keys(goods).length !== 0">
    <div class="title-info">
      {{goods.title}}
    </div>

    <div class="price-info">
        <span class="new-price">{{goods.newPrice}}</span>
         <span class="old-price">{{goods.oldPrice}}</span>
          <span :style="goods.discountBgColor" class="dis-info">{{goods.discount}}</span>
    </div>

    <div class="other-info">
        <span>{{goods.columns[0]}}</span>
        <span>{{goods.columns[1]}}</span>
        <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>

    <div class="detaillater">
        <span v-for="index in goods.services.length-1" :key="index" class="detaillaters">
            <img :src="goods.services[index-1].icon" alt="">
            <span>{{goods.services[index-1].name}}</span>
        </span>
    </div>
  </div>
  
</template>

<script>
export default {
    name: 'DetailBase',
    props:{
        goods: {
            type: Object,
            default(){
                return {}
            }
        }
    }

}
</script>

<style scoped>
.detailbase{
    width: 100%;
  margin-top: 15px;
  padding: 0 10px;
  color: #999999;
  border-bottom: 5px solid #f2f5f8;
    
    
}

.detaillater{
    display: flex;
    
    justify-content: space-between;
}

.detaillaters{
    font-size: 13px;
    line-height: 30px;
}

.detaillaters img{
    position: relative;
    width: 20px;
    line-height: 20px;
    top: 4px;
    margin-right: 5px;
    
    
}

.detaillaters span{
    color: #333333;
    
}

.title-info{
    margin-top: 3px;
    text-align: justify;
    color: #222222
}

.price-info{
    margin-top: 1px;
}

.new-price{
    font-size: 24px;
    color: #ff5777;
}

.old-price{
    font-size: 13px;
    margin-left: 5px;
    text-decoration: line-through;
}

.dis-info{
    font-size: 12px;
  position: relative;
  top: -4px;
  margin-left: 5px;
  padding: 3px 6px;
  color: #ffffff;
  border-radius: 8px;
  background-color: #ff5777;
}

.other-info{
    font-size: 13px;
    line-height: 30px;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
     border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}




</style>