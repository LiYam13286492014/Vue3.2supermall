<template>
    <div id="homevue">
        <nav-bar class="homes">
            <div slot="center">购物街</div>
        </nav-bar>

         <tab-control :title="['精选','新款','推荐']" class="tab-control" @tabclick="tabclick" ref="tabcontrol1" v-show="istabshow"></tab-control>

        <scroll class="content" ref="scroll" @scroll="backtopshow"  :probe-type="3" :pull-up-load="true" @pullingUp='loadmore'>
            <home-swiper :banners = 'banner' @imgonload='getoffsettop'>

            </home-swiper>

        <recommend-view :recommends = "recommend"  >
        
        
            
        </recommend-view>
        <feature-view></feature-view>
        <tab-control :title="['精选','新款','推荐']" class="" @tabclick="tabclick" ref="tabcontrol2"></tab-control>
        
        <goods-list :goodslist="goods[currentclick].list"></goods-list>
        </scroll>

        <back-top @click.native="backtopclick" v-show="isShow"></back-top>

        
        
    </div>
</template>

<script>
import NavBar from '../../components/common/navbar/navbar.vue'
import RecommendView from '../home/childhome/homerecommendview.vue'
import {getHomeMultidata,getHomeCommend} from  '../../network/home'
import HomeSwiper from '../home/childhome/homeswiper.vue'
import FeatureView from '../home/childhome/featureview.vue'
import TabControl from '../../components/content/tabcontrol/tabcontrol.vue'
import GoodsList from '../../components/content/goodslist/goodslist.vue'
import Scroll from '../../components/common/scroll/scroll.vue'
import BackTop from '@/components/content/backtop/backtop.vue'
import {debounce} from '../../common/debounce.js'
export default {
    name: 'Home',
    components: {
        
        NavBar,
        
        HomeSwiper,
        RecommendView,
        FeatureView,
        TabControl,
        GoodsList,
        Scroll,
        BackTop

        
    },
    data() {
        return {
            banner: [],
            recommend: [],
            goods: {
                'pop': {page: 0, list:[] },
                'new': {page: 0, list:[] },
                'sell': {page: 0, list:[] },
            },
            currentclick: 'pop',
            isShow: false,
            tapoffset: 0,
            istabshow: false,
            saveY : 0
        }
    },
    
    
        created() {
        this.getHomeMultidata(),

        this.getHomeCommend('pop')
        this.getHomeCommend('new')
        this.getHomeCommend('sell')

        
    },

    mounted() {

        const refresh = debounce(this.$refs.scroll.refresh,500)
        this.$bus.$on('imgonload', () =>{
            refresh()
        })
    },

    destroyed() {
        console.log('dd')
    },

    activated() {

        // this.$refs.scroll.refresh()
        this.$refs.scroll.scrollTo(0,-this.saveY,0)
        this.$refs.scroll.refresh()
        
        
        
        
        
        console.log('a')
        console.log(this.$refs.scroll.scroll.y);
        
    },

    deactivated() {
        this.saveY = -this.$refs.scroll.scroll.y
        console.log('d');
        console.log(this.$refs.scroll.scroll.y);
    },
    

    methods: {
        getHomeMultidata(){
            getHomeMultidata().then(res => {
            console.log(res);
            this.banner = res.data.banner.list,
            this.recommend=res.data.recommend.list
        })
        },

        getHomeCommend(type){
            const page = this.goods[type].page + 1
            getHomeCommend(type,page).then(res => {
            
            this.goods[type].list.push(...res.data.list)

            this.goods[type].page += 1

            this.$refs.scroll.finishPullUp()
            
        })

        },
        
        tabclick(index){
            switch(index){
                case 0: this.currentclick = 'pop'
                break
                 case 1: this.currentclick = 'new'
                 break
                  case 2: this.currentclick = 'sell'
                  break
            }

            this.$refs.tabcontrol1.currentindex = index
            this.$refs.tabcontrol2.currentindex = index

        },

        backtopclick(){
            this.$refs.scroll.scrollTo(0,0,1000)
            
            
        },

        backtopshow(position){
            this.isShow = -position.y > 1000
            this.istabshow = -position.y >this.taboffset
        },

        debounce(func,delay){
            let timer = null
            return function(...args){
                
                if (timer) clearTimeout(timer)
                timer=setTimeout(() =>{
                    func.apply(this,args)
                    
                },delay)
            }
        },

        loadmore(){
            this.getHomeCommend(this.currentclick)
        },

        getoffsettop(){
            
            this.taboffset = this.$refs.tabcontrol2.$el.offsetTop
        }

       


    },
}
</script>

<style scoped >
.homes{
    position: relative;
    background-color: var(--color-tint);
    color: #fff;

    /* position: fixed;
    left: 0%;
    right: 0%;
    top: 0%;
    z-index: 10; */
    box-shadow: 0 1px 1px rgba(100, 100, 100, 0.3);
}

#homevue{

    height: 100vh;
}

.tab-control{
    
    position: relative;
    z-index: 9;
    background-color: #fff;
    
    
}

.content{
    position: absolute;
    /* height: calc(100% - 93px); */
    overflow: hidden;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    
    
}
</style>