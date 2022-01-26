<template>
    
    <div>
        <nav-bar >
        <div slot="left">
            <div>
                <p @click="imgclick"> ◀ </p>
            </div>
        </div>
        <div slot="center"  class="detailbar">
        <div class="detailcenter" v-for="(item,index) in title " 
        :key="item.index" :class='{active :  currentindex === index}'  @click="itemclick(index)">{{item}}</div>
        </div>
        </nav-bar>
    
    </div>

    
</template>

<script>

import NavBar from '../../../components/common/navbar/navbar.vue'

export default {
    name: 'DetailBar',
    components:{
        NavBar,
        
    },
    data() {
        return {
             title: ['商品','参数','评价','推荐'],
             currentindex: 0,
            
        }
    },

    methods: {
        itemclick(index){
            this.currentindex = index
            this.$emit('itemclick',index)
            console.log(index);
            
        },

        imgclick(){
            this.$router.back()
        }
    },

}
</script>

<style scoped>
    .detailbar{
        display: flex;
        font-size: 13px;
    }

    .detailcenter{
        flex: 1;
        
    }

    .active{
        color: var(--color-high-text);
    }
</style>