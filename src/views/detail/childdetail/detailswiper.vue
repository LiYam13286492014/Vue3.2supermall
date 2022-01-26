<template>
 <!-- <div class="DetailSwiper">
      <div  class="swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in topImages" :key="item.index">
              <img :src="item" alt="">
          </div>
      </div>

      
  </div>
 </div> -->

 <div>
     <swiper>
      <swiper-item v-for="item in topImages" :key="item.index" class="detail-swiper">
          <img :src="item" alt="" class="topimage">
      </swiper-item>
  </swiper>
 </div>
  
</template>

<script>

import {Swiper,SwiperItem} from '../../../components/common/swiper/index'
// import Swiper from 'swiper';

export default {
    name: 'DetailSwiper',
    components:{
        Swiper,
        SwiperItem
        
    },
    
    data() {
        return {
            
        }
    },
//     mounted() {
//     new Swiper('.swiper-container', {
    
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });
//     },

    props:{
        topImages: {
            type: Array,
            default(){
                return []
            }
        }
        
    }

}
</script>

<style >




.detail-swiper{
    height: 300px;
    overflow: hidden;
}
/* .swiper-container{
    height: 300px;
    width: 100%;
    overflow: hidden;
}

.swiper-container img{
    width: 100%;
    
} */

.topimage{
    width: 100%;
}




</style>