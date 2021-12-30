<template>
    <div class="tab-bar-item" @click="changeClick();itemClick()">
        <slot v-if="!isTrue" name="img"></slot>
        <slot v-else name="actimg"></slot>
        <div :style="activestytle"><slot name="text"></slot></div>
    </div>
</template>

<script>
export default {
    name: 'TabBarItem',

    props: {
        path:String,
        actcolor:{
            type: String,
            default:'pink'
        }
    },
    data() {
        return {
            // isTrue: true
        }
    },

    methods: {
        itemClick(){
            this.$router.replace(this.path)
        },
        changeClick(){
            document.title=this.$route.meta.title
        }
    },

    computed:{
        isTrue(){
            return this.$route.path.indexOf(this.path) !==-1
        },
        activestytle(){
            return this.isTrue ? {color:this.actcolor } : {}

        }
    }
    
}
</script>

<style scoped>
.tab-bar-item{
   flex: 1;
   text-align: center;
   height: 49px;
  
}

.tab-bar-item img{
    width: 24px;
    height: 24px;
    vertical-align:middle;
    margin-bottom: 2px;
    
}

.active{
    color: red;
}
</style>