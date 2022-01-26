<template>
  <div>
    <div class="info-head">
      <div class="start"></div>
      <div class="desc">{{imagesInfo.desc}}</div>
      <div class="end"></div>
    </div>

    <div class="imageslist">
        <div v-for="item in imagesInfo.detailImage" :key="item.index">
            <div class="listkey">{{item.key}}</div>
            <img :src="images" alt=""  v-for="images in item.list" :key="images.index" class="listimage" @load="imageload">
        </div>
      
    </div>
  </div>
</template>

<script>
export default {
    name: 'DetailShopInfo',
    data() {
        return {
            count: 0
        }
    },

    props:{
    imagesInfo:{
        type:Object,
        default(){
            return {}
        }
    }
},
    methods: {
        imageload(){
            // if(++this.count === this.imagesInfo.detailImage[0].list.length ){
                this.$emit('imgload')
            // }
        }
    },
}
</script>

<style scoped>
.info-head{
    padding: 20px 10px;
  border-bottom: 5px solid #f2f5f8;
}
.start, .end{
     position: relative;
     width: 90px;
     height: 1px;
     background-color: black;
}

.start{
    float: left;
}
.end{
    float: right;
}

.desc{
   padding: 15px 0px;
   font-size: 15px;
    
}

.start::before,.end::after{
    content: "";
    height: 5px;
    width: 5px;
    position: absolute;
    background-color: black;
    bottom: 0;
}

.end::after{
    right: 0;
}

.listimage{
    width: 100%;
}

.listkey{
    font-size: 15px;
  margin: 10px 0 10px 10px;
  color: #333333;
}
</style>