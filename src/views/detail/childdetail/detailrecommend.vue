<template>
    <div>
        <goods-list :goodslist="recommend"></goods-list>
    </div>
</template>

<script>

import GoodsList from '../../../components/content/goodslist/goodslist.vue'
export default {
    name: 'DetailRecommend',
    props: {
        recommend:{
            type: Array,
            default(){
                return []
            }
        }
    },
    components:{
        GoodsList
    }
}
</script>

<style>

</style>