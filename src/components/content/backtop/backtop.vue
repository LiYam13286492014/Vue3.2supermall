<template>
    <div class="back-top">
        <img src="@/assets/img/svg/backtop.svg" alt="">
    </div>
</template>

<script>
export default {
    name: 'BackTop'

}
</script>

<style scoped>
    .back-top{
        position: fixed;
        bottom: 60px;
        right: 15px;
    }

    .back-top img{
        height: 40px;
        width: 40px;
        background-color: #fff;
        border-radius: 50%;

    }
</style>