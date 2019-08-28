<template>
    <div class="newsdetail-container">
        <h3 class="title">{{ newsDetail.title }}</h3>
        <p class="subtitle">
            <span>发布时间：{{ newsDetail.add_time }}</span>
            <span>点击：{{ newsDetail.click }}次</span>
        </p>
        <hr>
        <div class="content" v-html="newsDetail.content"></div>

        <commont-box></commont-box>
    </div>
</template>

<script>
import Commont from '../subcomponents/Comment.vue'

export default {
    data(){
        return{
            id: this.$route.params.id,
            newsDetail: {}
        }
    },
    components: {
        'commont-box': Commont
    },
    methods: {
        getNewsDetail(){
            this.$http.get('api/getnew/' + this.id).then(result => {
                if(result.body.status == 0){
                    this.newsDetail = result.body.message[0]
                }
            })
        }
    },
    created(){
        this.getNewsDetail()
    }
}
</script>

<style lang="scss">
.newsdetail-container{
    padding: 0 5px;
    .title{
        font-size: 16px;
        text-align: center;
        color: red;
        margin: 10px 0;
    }
    .subtitle{
        font-size: 14px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }
    .content{
        img{
            width: 100%;
        }
    }
}
</style>
