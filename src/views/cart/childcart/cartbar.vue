<template>
    <div class="cartbar">
        <nav-bar>
            <div slot="center">购物车({{$store.state.cartList.length}})</div>
        </nav-bar>
    </div>
</template>

<script>
import NavBar from '../../../components/common/navbar/navbar.vue'
export default {
    name: 'CartBar',
    components:{
        NavBar 
    }
}
</script>

<style scoped>
    
</style>