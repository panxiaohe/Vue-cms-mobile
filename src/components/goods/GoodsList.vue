<template>
    <div class="goods-container">
        <ul class="goods-list">
            <li>
                <img src="http://ofv795nmp.bkt.clouddn.com//upload/201504/20/thumb_201504200119256512.jpg">
                <p class="goods-name">小米（Mi）小米Note 16G双网通版</p>
                <div class="goods-info">
                    <p class="goods-price">
                        <span class="now">¥899</span>
                        <span class="old">¥999</span>
                    </p>
                    <p class="goods-sell">
                        <span>热卖中</span>
                        <span>剩60件</span>
                    </p>
                </div>
            </li>
            <li>
                <img src="http://ofv795nmp.bkt.clouddn.com//upload/201504/20/thumb_201504200214471783.jpg">
                <p class="goods-name">尼康(Nikon)D3300套机（18-55mm f/3.5-5.6G VRII）（黑色）</p>
                <div class="goods-info">
                    <p class="goods-price">
                        <span class="now">¥899</span>
                        <span class="old">¥999</span>
                    </p>
                    <p class="goods-sell">
                        <span>热卖中</span>
                        <span>剩60件</span>
                    </p>
                </div>
            </li>
            <li>
                <img src="http://ofv795nmp.bkt.clouddn.com//upload/201504/20/thumb_201504200119256512.jpg">
                <p class="goods-name">小米（Mi）小米Note 16G双网通版</p>
                <div class="goods-info">
                    <p class="goods-price">
                        <span class="now">¥899</span>
                        <span class="old">¥999</span>
                    </p>
                    <p class="goods-sell">
                        <span>热卖中</span>
                        <span>剩60件</span>
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods: {

    },
    created(){

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
