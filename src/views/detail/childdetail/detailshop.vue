<template>
  <div>
      <div class="shop-info">
          <img :src="shopinfo.logo" alt="">
          <span>{{shopinfo.name}}</span>
      </div>

      <div>
          <div class="shop-center">
          
          
          <div class="shop-left">
            <div class="sells">
            <div class="goods-num">
                {{shopinfo.sells}}
            </div>

            <div class="goods-text">
                总销量
            </div>
            </div>

            <div class="baby">
            <div class="goods-num" >
                {{shopinfo.goodsCount}}
            </div>

            <div class="goods-text">
                全部宝贝
            </div>
            </div>
        </div>

        
          

           
      
      
      
      

      
          <div class="shop-right">
              <table>
                  <tr v-for="item in shopinfo.score" :key="item.index">
                      <td>{{item.name}}：</td>
                      <td :class="{'better-score' : item.isBetter}" class="score">{{item.score}}</td>
                      <td :class="{'better-text' : item.isBetter}" ><span class="text">{{item.isBetter ? "高" : "低"}}</span></td>
                  </tr>
              </table>
          </div>
      </div>
      <div class="shop-bottom">
        <div class="enter-shop">进店逛逛</div>
            </div>
      </div>

      
      </div>


       

      
  
  
</template>

<script>
export default {
    name: 'DetailShop',
    data() {
        return {
            
        }
    },

    props:{
        shopinfo:{
             type: Object,
             default(){
                 return {}
             }
        }
    }
}
</script>

<style scoped>
.shop-info{
    padding: 25px 8px;
    border-bottom: 5px solid #f2f5f8;
}

.shop-info img{
    height: 45px;
    width: 45px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
}

.shop-info span{
    position: relative;
    top: -14px;
    margin-left: 5px;
}
.shop-center{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 15px;
}
.shop-left{
    display: flex;
    justify-content: space-evenly;
    flex: 1;
    text-align: center;
    margin-right: 10px;
    color: #333333;
    border-right: 1px solid rgba(0, 0, 0, 0.1);   
    padding-right: 10px;
    align-items: center;
    
    
    
}

.goods-text{
    font-size: 16px;
    margin-top: 10px;
}

.goods-num{
    font-size: 14px;
}

.sells{
    flex: 1;
    
}

.shop-right{
    font-size: 13px;
    color: #333333;
}

.shop-right table{
    width: 120px;
  margin-left: 10px;
  margin-right: 10px;
}

.shop-right table td{
    padding: 4px 0;
    
}

.text{
    padding: 3px;
  text-align: center;
  color: #ffffff;
  background-color: #5ea732;
}

.score{
    color: #5ea732;
}

.better-score{
    color: #f13e3a;
    

}

.better-text span {
     
      background-color: #f13e3a;
}

.shop-bottom{
    margin-top: 10px;
  text-align: center;
}

.enter-shop{
    font-size: 14px;
  line-height: 30px;
  display: inline-block;
  width: 150px;
  height: 30px;
  text-align: center;
  border-radius: 10px;
  background-color: #f2f5f8;
}


</style>