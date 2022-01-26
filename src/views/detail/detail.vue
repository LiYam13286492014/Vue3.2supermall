<template>
  <div id="shop">
      <detail-bar class="detailbarcontent" @itemclick="itemclick" ref="nav"></detail-bar>
      
      <scroll class="content" ref="Scroll" @scroll="getposition" :probe-type="3">
        <detail-swiper :topImages="topImage"></detail-swiper>

      <detail-base :goods="goods" class="goodcontent"></detail-base>

      <detail-shop :shopinfo="shopinfo" class="shopcontent"></detail-shop>
      <detail-shop-info :imagesInfo="detailInfo" @imgload="imgload" class="shopinfocontent"></detail-shop-info>
      <detail-params :goodsparams="goodsparams" ref="params"></detail-params>

      <detail-comments :comment="comment" ref="comments"></detail-comments>

      <detail-recommend :recommend="recommend"  ref="recommend"></detail-recommend>
      </scroll>
      <detail-bottom @addtocart="addtocart"></detail-bottom>

      <back-top @click.native="backtopclick" v-show="isShow" class="backtop"></back-top>
      <!-- <div class="state">{{this.$store.state.cartList}}</div> -->
      <toast  class="toast" ></toast>
  </div>
</template>

<script>
  import {getDetail,getRecommend} from '../../network/detail'
  import DetailBar from './childdetail/detailbar.vue'
  import DetailSwiper from './childdetail/detailswiper.vue'
  import {goods,Shop,GoodsParams} from '../../network/detail.js'
  import DetailBase from './childdetail/detailbase.vue'
  import DetailShop from './childdetail/detailshop.vue'
  import DetailShopInfo from './childdetail/detailshopinfo.vue'
  import DetailParams from './childdetail/detailparams.vue'
  import DetailComments from './childdetail/detailcomment.vue'
  import DetailRecommend from './childdetail/detailrecommend.vue'
  import DetailBottom from './childdetail/detailbottom.vue'
  import {debounce} from '../../common/debounce.js'
  
  import Scroll from '../../components/common/scroll/scroll.vue'
  import BackTop from '@/components/content/backtop/backtop.vue'
  import Toast from '../.././components/common/toast/toast.vue'
export default {
  

    name: 'Detail',
    data() {
      return {
        iid : null,
        topImage: [],
        goods:{},
        shopinfo: {},
        detailInfo:{},
        goodsparams:{},
        comment:{},
        recommend: [],
        getTop:[],
        currentindex: 0,
        isShow: false,
        show: false,
        message: ''
        
      }
    },

    components:{
      DetailBar,
      DetailSwiper,
      DetailBase,
      DetailShop,
      DetailShopInfo,
      DetailParams,
      DetailComments,
      DetailRecommend,
      DetailBottom,
      Toast,
      Scroll,
      BackTop
    },

    methods: {
      imgload(){
        const refresh = debounce(this.$refs.Scroll.refresh,500)
        refresh()

        this.getTop = []
        this.getTop.push(0)
        this.getTop.push(this.$refs.params.$el.offsetTop)
        this.getTop.push(this.$refs.comments.$el.offsetTop)

        this.getTop.push(this.$refs.recommend.$el.offsetTop)
        this.getTop.push(Number.MAX_VALUE)
        console.log(this.getTop);
        console.log("---");
      },

      itemclick(index){
        this.$refs.Scroll.scrollTo(0,-this.getTop[index],500)
        // console.log(index);
        // console.log(this.getTop[index]);
      },

      getposition(position){
        const positionY = -position.y
        this.isShow = -position.y > 6000
        // console.log(positionY);
        let length = this.getTop.length

        for(let i = 0;i < length-1;i++){
          if(this.currentindex !== i &&((positionY > this.getTop[i]) &&( positionY < this.getTop[i+1]))){
            this.currentindex = i
            this.$refs.nav.currentindex = this.currentindex
            console.log(this.currentindex);
            
            
          }
        }
        
      },
      backtopclick(){
        this.$refs.Scroll.scrollTo(0,0,1000)
      },

      addtocart(){
        const products = {}
        products.image  = this.topImage[0]
        products.title = this.goods.title
        products.desc = this.goods.desc
        products.price = this.goods.lowNowPrice
        products.iid = this.iid
        products.count = 1

        this.$store.dispatch('addcart',products).then(res =>{
          console.log(res);

          this.$toast.show(res,1500)
        //   this.show = true
        //   this.message = res

        //   setTimeout(() =>{
        //       this.message = ''

        //       this.show = false
        //   },1500)
        })
        console.log('push');

        
      }
    },
    updated() {
      
      console.log(this.getTop);
      console.log(this.$store.state.cartList);
      
    },


    created() {
      this.iid = this.$route.params.iid
      console.log(this.$route.params.iid);

      getDetail(this.iid).then(res =>{
        const data=res.result
         
        console.log(res);
        this.topImage = res.result.itemInfo.topImages
        this.goods= new goods(data.itemInfo, data.columns, data.shopInfo.services)
        
        this.shopinfo= new Shop(data.shopInfo)

        this.detailInfo=data.detailInfo

        this.goodsparams=new GoodsParams(data.itemParams.info,data.itemParams.rule)
        
        if(data.rate.cRate !== 0){
          this.comment=data.rate.list[0] || {}
        }
      })


      getRecommend().then(res =>{
        
        console.log(res);
        this.recommend = res.data.list
      })
    },


}

</script>

<style scoped >
  #shop{
    
    height: 100vh;
    
    
  }

  .detailbarcontent{
    position: relative;
    z-index: 10;
    background-color: #fff;

  }
  
  .content{
    
    position: absolute;
    background-color: #fff;
    z-index: 9;
    top:44px;
    left: 0;
    right: 0;
    bottom: 49px;
    

    
    
  }

  .goodcontent,.shopcontent,.shopinfocontent{
    background-color: #fff;
  }

  .backtop{
    z-index: 15;
  }

  .state {
    z-index: 100;
  }

  
</style>