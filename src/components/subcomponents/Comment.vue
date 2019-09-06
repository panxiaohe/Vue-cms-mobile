<template>
    <div class="comment-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入评论内容（不超过120字）" maxlength="120" v-model="commentText"></textarea>
        
        <mt-button type="primary" size="large" @click="addComment">发表评论</mt-button>

        <ul class="comment-list">
            <li class="comment-item" v-for="(item, i) in comments" :key="item.add_time"> 
                <p class="comment-title">第{{ i+1 }}楼 用户：{{ item.user_name }} 发表时间：{{ item.add_time | dateFormat }}</p>
                <p class="comment-content">{{ (item.content == 'undefined' | item.content == '') ? '该用户很懒 什么都没留下' : item.content }}</p>
            </li>
        </ul>
        <mt-button type="danger" size="large" plain @click="getMore()">加载更多</mt-button>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'

export default {
    data(){
        return{
            id: this.$parent.id,
            pageindex: 1,
            comments: [],
            commentText: ''
        }
    },
    methods: {
        getComments(){
            this.$http.get('api/getcomments/'+ this.id +'?pageindex='+ this.pageindex).then(result => {
                // console.log(result)
                if(result.body.status == 0){
                    this.comments = this.comments.concat(result.body.message)
                }else{
                    Toast('加载评论失败')
                }
            })
        },
        getMore(){
            this.pageindex++;
            this.getComments()
        },
        addComment(){
            if(this.commentText.trim().length == 0){
                // 如果评论内容为空，弹窗提示，并中断后续代码执行！
                return Toast('评论内容不能为空！');
            }
            this.$http.post('api/postcomment/'+ this.id, {content: this.commentText.trim()}).then(result => {
                console.log(result)
                if(result.body.status == 0){
                    // this.getComments() 因为当前页码不确定，所以不能直接调用getComments方法
                    let commentObj = {
                        user_name: '潘小盒',
                        add_time: Date.now(),
                        content: this.commentText.trim()
                    }
                    this.comments.unshift(commentObj)
                    this.commentText = '';
                }
            })
        }
    },
    created(){
        this.getComments()
    }
}
</script>

<style lang="scss" scoped>
.comment-container{
    h3{
        font-size: 18px;
    }
    textarea{
        font-size: 14px;
        height: 80px;
        margin-bottom: 5px;
    }

    .comment-list{
        padding: 0;
        li{
            list-style: none;
            .comment-title{
                background-color: #ccc;
                color: #333;
            }
            .comment-content{
                text-indent: 2em;
                color: #333;
            }
        }
    }

}
</style>
