<template>
  <div class="goodslistitem">
      <img v-lazy="showimage" alt=""  @load="imgonload" @click="detailclick">
      <div class="text"><p>{{goodsitem.title}}</p>
      <span class="price">{{goodsitem.price}}</span>
      <span class="collect">{{goodsitem.cfav}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name: 'GoodsListItem',
    props:{
        goodsitem:{
            type: Object,
        default(){
            return {}
        }
        }
    },

    computed:{
        showimage(){
            return  this.goodsitem.image || this.goodsitem.show.img
        }
    },

    methods: {
        imgonload(){
            this.$bus.$emit('imgonload')
        },

        detailclick(){
            this.$router.push('/detail/' + this.goodsitem.iid
               
                
            )
        }
    },

}
</script>

<style>
.goodslistitem{
    width: 45%;
    position: relative;
    padding-bottom: 2px;
    
}

.goodslistitem img{
    width: 100%;
    border-radius: 5px;
    height: 216px;
    
}

.text{
    font-size: 12px;
    text-align: center;
    left: 0;
    right: 0;
    overflow: hidden;
    border: 1px solid #fff;
    
    
}
.price{
    margin-right: 20px;
    color: var(--color-high-text)
}

.goodslistitem p{
    white-space: nowrap;
    text-overflow: ellipsis;
    
}

.collect{
    position: relative;
}

.collect ::before{
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("../../../assets/img/svg/home.svg") 0 0/14px 14px;
}


</style>