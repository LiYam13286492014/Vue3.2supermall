<template>
    <div id="homevue">
        <nav-bar class="homes">
            <div slot="center">购物街</div>
        </nav-bar>

        <home-swiper :banners = 'banner'></home-swiper>

        <recommend-view :recommends = "recommend"  >
            
        </recommend-view>
    </div>
</template>

<script>
import NavBar from '../../components/common/navbar/navbar.vue'
import RecommendView from '../home/childhome/homerecommendview.vue'
import {getHomeMultidata} from  '../../network/home'
import HomeSwiper from '../home/childhome/homeswiper.vue'
export default {
    name: 'Home',
    components: {
        
        NavBar,
        
        HomeSwiper,
        RecommendView

        
    },
    data() {
        return {
            banner: [],
            recommend: []
        }
    },
    
    created() {
        getHomeMultidata().then(res => {
            console.log(res);
            this.banner = res.data.banner.list,
            this.recommend=res.data.recommend.list
        })
    },
}
</script>

<style >
.homes{
    background-color: var(--color-tint);
    color: #fff;
}
</style>