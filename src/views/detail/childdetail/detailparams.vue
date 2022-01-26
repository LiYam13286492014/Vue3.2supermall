<template>
  <div class="params">
        <p>参数信息</p>
          
      


      
          <table v-for="item in  goodsparams.sizes" :key="item.index">
              <tr v-for="size0 in item" :key="size0.index">
                  <td v-for="size in size0" :key="size.index">
                      {{size}}
                  </td>
              </tr>
          </table>


          <table class="infos-param">
              <tr v-for="item in goodsparams.infos" :key="item.index">
                  <td  class="infos-key">{{item.key}}</td>
                    <td  class="infos-value">{{item.value}}</td>
              </tr>
          </table>
      
  </div>
</template>

<script>
export default {
    name: 'DetailParams',
    props:{
        goodsparams:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style scoped>
.params{
    font-size: 14px;
  padding: 20px 15px;
  border-bottom: 5px solid #f2f5f8;
  z-index: 10;
}

.params p{
     font-size: 15px;
  margin-bottom: 10px;
}

.params table{
    
  width: 100%;
  border-collapse: collapse;
}

.params table tr {
  height: 60px;
   border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}

.params table tr td {
  width: 10px;
}

.infos-key{
  /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
  width: 45px;
  
}

.infos-param {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.infos-value {
  color: #eb4868;
}
</style>