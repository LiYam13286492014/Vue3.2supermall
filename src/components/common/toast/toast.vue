<template>
    <div v-show="isShow" class="toast">{{message}}</div>
</template>

<script>
export default {
    name: "Toast",

    data() {
        return {
            message : '',
            isShow : false
        }
    },
    // props:{
    //     message:{
    //         type: String,
    //         default(){
    //             return "哈哈哈"
    //         }
    //     },

    //     show: {
    //         default(){
    //             false
    //         }
    //     }
    // },

    methods: {
        show(res,time){
            this.isShow = true

            this.message = res

            setTimeout(() =>{
                this.isShow = false

                this.message = ''
            },time)
        }
    },

    

}
</script>

<style scoped>
    .toast{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 120px;
    height: 20px;
    color: #fff;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 999;
  }
</style>