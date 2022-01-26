<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from '../../../bscroll.js'
export default {
    name: 'Scroll',
    props:{
        probeType:{
            type: Number,
            default: 0
        },

        pullUpLoad:{
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            scroll: null,
            position:null
        }
    },

    mounted() {
        this.scroll=new BScroll(this.$refs.wrapper,{
            click: true,
            probeType : this.probeType,
            pullUpLoad : this.pullUpLoad
        })

        this.scroll.on('scroll', (position) =>{
            
            
            this.$emit('scroll',position)
        })

        if (this.pullUpLoad) {
            this.scroll.on('pullingUp',() =>{
                this.$emit('pullingUp')
            })
        }

        

        
    },

    methods: {
        scrollTo(x,y,time){
            this.scroll.scrollTo(x,y,time)
        },

        refresh(){

            
            this.scroll.refresh()
            
        },
        finishPullUp(){
           this.scroll && this.scroll.finishPullUp()
        }
        
    },

    
}
</script>

<style>

</style>