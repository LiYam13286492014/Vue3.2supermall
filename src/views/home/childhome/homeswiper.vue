<template>
  <swiper>
            <swiper-item v-for="item in banners" :key="item.index">
                <a :href="item.link">
                    <img :src="item.image" alt="" @load="imgonload">
                    
                </a>
            </swiper-item>
        </swiper>
</template>

<script>
import {Swiper, SwiperItem} from '../../../components/common/swiper/index'
export default {

    
    name: 'HomeSwiper',
    components:{
        Swiper,
        SwiperItem
    },
    props: {
        banners: {
            type: Array,
            default() {
                return []
            }
        }
        
    },
    data() {
        return {
            isLoad : false
        }
    },

    methods: {
        imgonload(){
            if(!this.isLoad){
                this.$emit('imgonload')
                this.isLoad = 'true'
            }
        }
    },

}
</script>

<style>

</style>