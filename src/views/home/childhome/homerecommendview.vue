<template>
  <div class="recommendview" >
      
      
         <div v-for="item in recommends" :key="item.index" class="recommend">
              <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
            </a>
         </div>
         
    </div>
</template>

<script>
export default {
    name: 'RecommendView',
    props:{
        recommends :{
            type: Array,
            defalut(){
                return []
            }
        }
    }
 
}
</script>

<style>
.recommendview{
    display: flex;
    text-align: center;
    width: 100%;
    font-size: 12px;
    border-bottom: 8px solid #eee;
    
}

.recommend img{
    height: 70px;
    width: 70px;
    margin-bottom: 6px;
    
}

.recommend {
    flex: 1;
    padding: 10px 0 10px;
}
</style>