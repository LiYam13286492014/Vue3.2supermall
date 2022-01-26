<template>
    <div id="cart">
        <cart-bar class="cartbar"></cart-bar>

        <scroll class="cartcontent" ref="Scroll">
            <car-shop v-for="item in cartList" :key="item.index" :product="item"></car-shop>
            
        </scroll>
        
        <cart-bottom class="cart-bottom"></cart-bottom>
        
    </div>
</template>

<script>
import CartBar from './childcart/cartbar.vue'
import CarShop from './childcart/cartshop.vue'
import {mapGetters} from 'vuex'
import CartBottom from './childcart/cartbottom.vue'
import Scroll from '../../components/common/scroll/scroll.vue'
export default {
    name: 'Cart',
    components:{
        CartBar,
        CarShop,
        CartBottom,
        Scroll
    },
    computed: {
        ...mapGetters({
            cartList : 'cartlist'
        })
    },
    


    activated() {
        this.$refs.Scroll.refresh()
    },
}
</script>

<style scoped>
    #cart{
        height: 100vh;
    }
    .cartbar{
        background-color: var(--color-tint);
        color: white;
        position: relative;
        z-index: 1;
    }

    .cartcontent{
        position: absolute;
        
        top: 44px;
        left: 0;
        right: 0;
        bottom: 85px;
        overflow: hidden;
    }

    .cart-bottom{
    
    }
</style>