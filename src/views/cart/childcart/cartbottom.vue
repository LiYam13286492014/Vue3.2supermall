<template>
    <div class="cartbottom">
        <div class="bottom-content">
            <div class="all">
                <div class="checkbutton" :class="{active : isActive}" @click="allclick"></div>
                <span >全选</span>
            </div>

            <div class="money">总价￥{{totalprice}}</div>
            


            
        </div>

        <div class="ending">去结算: ({{pay}})</div>
    </div>
</template>

<script>
export default {
    name: 'CartBottom',

    computed: {
        totalprice(){
        return    this.$store.state.cartList.filter(item => {
                return item.checked 
            }).reduce((preValue,item) => {
                return  preValue + item.price * item.count
            },0).toFixed(2)

            
        },

        pay(){
            return this.$store.state.cartList.filter(item =>item.checked).length
        },

        isActive(){
            if(this.$store.state.cartList.length === 0) return false
            return !this.$store.state.cartList.find(item => !item.checked)
        }
    },

    methods: {
        allclick(){
            if(this.isActive){
                this.$store.state.cartList.forEach(item =>item.checked=false)
            }else{
                this.$store.state.cartList.forEach(item =>item.checked=true)
            }
        }
    },
}
</script>

<style  scoped>
.cartbottom{
   display: flex;
   position: fixed;
    bottom: 49px;
    left: 0;
    right: 0;
    
    height: 36px;
    z-index: 60;
    
    background-color: #fff;
    
}

.all{
    display: flex;
    width: 60px;
    align-items: center;
    float: left;
    
    
    
}

.all span{
    margin-left: 5px; ;
}

.bottom-content{
    display: flex;
    padding: 0px 12px;
    line-height: 49px;
    width: 70%;
    
}

.checkbutton{
    display: flex;
    background-color: black;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    
    
    
    
    
    align-items: center;
    
    border: 1px solid #eee
}

.money{
    display: flex;
    width: 120px;
    align-items: center;
    margin-left: 20px;
}
.ending{
    width: 30%;
    display: flex;
    align-items: center;
    
    
    background-color:red;
    color: #fff;
    /* margin-left: 30px; */
    float: right;
    
}

.active{
    background-color: red;
}
</style>

