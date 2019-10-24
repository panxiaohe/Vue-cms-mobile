<template>
    <div class="goods-container">
        <ul class="goods-list">
            <router-link v-for="item in goodsList" :key="item.id" :to="'/home/goodsDetail/'+item.id" tag="li">
                <img :src="item.img_url">
                <p class="goods-name">{{ item.title }}</p>
                <div class="goods-info">
                    <p class="goods-price">
                        <span class="now">¥{{ item.sell_price}}</span>
                        <span class="old">¥{{ item.market_price }}</span>
                    </p>
                    <p class="goods-sell">
                        <span>热卖中</span>
                        <span>剩{{ item.stock_quantity }}件</span>
                    </p>
                </div>
            </router-link>
        </ul>

        <mt-button type="danger" size="large" @click="getMore()">加载更多</mt-button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            pageIndex: 1,
            goodsList: []
        }
    },
    methods: {
        getGoodsList(){
            this.$http.get('api/getgoods?pageindex='+this.pageIndex).then(result => {
                // console.log(result)
                if(result.body.status == 0){
                    this.goodsList = this.goodsList.concat(result.body.message)
                }
            })
        },
        getMore(){
            this.pageIndex++
            this.getGoodsList()
        }
    },
    created(){
        this.getGoodsList()
    }
}
</script>

<style lang="scss" scoped>
.goods-container{
    .goods-list{
        list-style: none;
        padding: 8px;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li{
            width: 49%;
            padding: 2px;
            border: 1px solid #ccc;
            box-shadow: 0 0 8px #ccc;
            margin-bottom: 8px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            img{
                width: 100%;
            }
            .goods-name{
                font-size: 14px;
                color: #333;
                font-weight: 500;
            }
            .goods-info{
                background-color: #eee;
                p{
                    margin:0;
                    padding: 5px; 
                }
                .goods-price{
                    .now{
                        color: red;
                        font-weight: bold;
                        font-size: 16px;
                    }
                    .old{
                        text-decoration: line-through;
                        font-size: 12px;
                        margin-left: 10px;
                    }
                }
                .goods-sell{
                    display: flex;
                    justify-content: space-between;
                    font-size: 13px;
                }
            }
        }
    }

}
</style>
