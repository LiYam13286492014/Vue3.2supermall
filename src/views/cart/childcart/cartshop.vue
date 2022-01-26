<template>
    <div class="cartshop" >
       <div class="cartshop-item">
        <div class="shop-button" >
            <div :class="{isActive : isShow()}" class="button"  @click="buttonclick"></div>
        </div>

       <div class="shop-image">
           <img :src="product.image" alt="">
       </div>

       <div class="shop-info">
           <div class="shop-title">{{product.title}}</div>
           <div class="shop-desc">{{product.desc}}</div>
           
           <div class="info-bottom">
               <div class="shop-price">${{product.price}}</div>
               <div class="shop-count">x{{product.count}}</div>
           </div>
       </div>
       </div>
       </div>
        
       
        
    
</template>

<script>

export default {
    name: 'CartShop',
    data() {
        return {
            
        }
    },
    props:{
        product:{
            type: Object,
            default(){

            }
        }
    },
    methods: {
        buttonclick(){
            this.$store.dispatch('checked',this.product)
            
        },

        isShow(){
            return this.product.checked
        }
    },



    

    

}
</script>

<style scoped>
.cartshop-item{
    display: flex;
    font-size: 15px;
    border: 1px solid #eee;
    border-radius: 5px;
    margin-top: 2px;
}

.shop-button{

}

.button{
    
    background-color: black;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    position: relative;
    top: 50%;
    margin: 0 auto;
    margin-top: -10px;
    border: 2px solid #eee
    
}

.shop-image{

}

.shop-image img{
    width: 100%;
    height: 100px;
    width: 80px;
    border-radius: 5px;
    padding: 1px;
}

.shop-title{
    padding: 4px;
    height: 40px;
    overflow: hidden;
}

.shop-desc{
    padding: 4px;
    height: 40px;
    overflow: hidden;
}

.info-bottom{
    display: flex;
    width: 100%;
    text-align: left;
}

.shop-price{
    padding-left: 4px;
    width: 80%;
    color: orange;
}

.shop-count{
   width: 20%;
}

.isActive{
    background-color: red;
}
    
</style>