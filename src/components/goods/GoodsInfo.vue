<template>
    <div class="goodsInfo-container">
        <h3 class="goods-title">{{ goodsInfo.title }}</h3>
        <hr>
        <div class="goods-content" v-html="goodsInfo.content"></div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            id: this.$route.params.id,
            goodsInfo: {}
        }
    },
    methods: {
        getGoodsInfo(){
            this.$http.get('api/goods/getdesc/' + this.id).then(result => {
                if(result.body.status == 0){
                    this.goodsInfo = result.body.message[0]
                }
            })
        }
    },
    created(){
        this.getGoodsInfo()
    }
}
</script>

<style lang="scss">
// 去掉scoped img宽度100%才能生效！
.goodsInfo-container{
    padding: 4px;
    .goods-title{
        font-size: 16px;
        color: #226aff;
        text-align: center;
        margin: 15px 0;
    }
    .goods-content{
        img{
            width: 100%;
        }
    }
}
</style>
