<template>
    <div class="bottom">
        <div class="bottom-left">
            <div>
                <span>客服</span>                   
            </div>

            <div>
                <span>店铺</span>
            </div>

            <div>
                <span>收藏</span>
            </div>
        </div>

        <div class="bottom-right">
            <div class="car"  @click="addtocart">
                <span >加入购物车</span>
            </div>

            <div class="buy">
                <span >购买</span>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'DetailBottom',
    data() {
        return {
            products: []
        }
    },
    methods: {
        addtocart(){
            console.log('click');
            this.$emit('addtocart')
        }
    },
}
</script>

<style>
    .bottom{
        background-color: royalblue;
        line-height: 49px;
        text-align: center;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 12;
        width: 100%;
        display: flex;
        font-size: 15px;
        
        
        /* flex: 1; */
    }

    .bottom-left,.bottom-right{
        display: flex;
        width: 50%;
        
        
        
    }
    .bottom-left div,.bottom-right div{
        flex: 1;
    }
    .bottom-left{
        background-color: #fff;
    }

    .car{
        background-color: yellow;
        
    }
    

    .buy{
        background-color: var(--color-high-text);
    }
</style>