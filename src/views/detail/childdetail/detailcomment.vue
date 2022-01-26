<template>
    <div>
        <div class="comment" v-if="Object.keys(comment).length !== 0">
            <div class="commenthead">
                <div class="usercomment">用户评价</div>
                <div class="more">更多</div>
            </div>

            <div class="userinfo" >
                <img :src="comment.user.avatar" alt="">
                <span>{{comment.user.uname}}</span>
            </div>

            <div class="conmenttext">
                <div>{{comment.content}}</div>
                
            </div>

            <div class="others">
                <span>{{comment.created | showdate}}</span>
                 <span class="commentstyle">{{comment.style}}</span>
                  

            </div>
        </div>
    </div>
</template>

<script>
import {formatDate} from '../../../common/debounce'
export default {
    name: 'DetailComments',
    props:{
        comment:{
            type: Object,
            default(){
                return  {}
            }
        }
    },
    filters: {
        showdate(value){
            const date = new Date(value *1000)

            return formatDate(date, 'yyyy-MM-dd')


        }
    },

}
</script>

<style scoped>
.comment{
    padding: 20px 15px;
     border-bottom: 5px solid #f2f5f8;
}

.commenthead{
    line-height: 50px;
  height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.usercomment{
    float: left
}
.more{

    font-size: 13px;
    float: right;
}

.userinfo{
    padding: 10px 1px;
}

.userinfo img{
    height: 45px;
    width: 45px;
    border-radius: 50%;
}

.userinfo span{
    position: relative;
    top:-14px;
    margin-left: 10px;
    font-size: 13px;
}
.conmenttext div{
    font-size: 13px;
}

.others {
    padding: 3px 0px;
    font-size: 10px;
    color: #999999;;
}

.commentstyle{
    margin-left: 5px;
}
</style>