<template>
    <div class="goods-container">
        <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter">
            <div class="ball" v-show="ballFlag"></div>  
        </transition>

        <div class="btn-back" @click="pageBack()">&lt; 返回</div>
        <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<v-banner :bannerList="bannerList"></v-banner>
					</div>
				</div>
			</div>
			<div class="mui-card">
				<div class="mui-card-header">{{ goodsInfo.title }}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>市场价：<del>¥{{ goodsInfo.market_price }}</del>  销售价：<span class="now-price">¥{{ goodsInfo.sell_price }}</span></p>
                        <div>
                            <span>购买数量：</span>
                            <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
                                <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                                <input id="test" class="mui-input-numbox" type="number" value="1" />
                                <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
				            </div>
                        </div>
                        <p>
                            <mt-button type="primary" size="small">立即购买</mt-button>
                            <mt-button type="danger" size="small" @click="addToCar">加入购物车</mt-button>
                        </p>
					</div>
				</div>
			</div>
            <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号：{{ goodsInfo.goods_no }}</p>
						<p>商品库存：{{ goodsInfo.stock_quantity }}</p>
						<p>上架时间：{{ goodsInfo.add_time | dateFormat }}</p>
					</div>
				</div>
				<div class="mui-card-footer">
                    <mt-button type="primary" size="large" plain @click="goGoodsInfo(id)">图文介绍</mt-button>
                    <mt-button type="danger" size="large" plain @click="goGoodsComment()">商品评论</mt-button>
                </div>
			</div>
    </div>
</template>

<script>
import Banner from '../subcomponents/Banner.vue'
import mui from '../../lib/mui/js/mui.min.js'

export default {
    data(){
        return {
            id: this.$route.params.id,
            bannerList: [],
            goodsInfo: {},

            ballFlag: false
        }
    },
    components: {
        'v-banner': Banner
    },
    methods: {
        pageBack(){
            this.$router.go(-1)
        },
        getBannerList(){
            this.$http.get('api/getthumimages/' + this.id).then(result => {
                // console.log(result)
                if(result.body.status == 0){
                    result.body.message.forEach(element => {
                        element.img = element.src
                    });
                    this.bannerList = result.body.message
                }
            })
        },
        getGoodsInfo(){
            this.$http.get('api/goods/getinfo/' + this.id).then(result => {
                // console.log(result)
                if(result.body.status == 0){
                    this.goodsInfo = result.body.message[0]
                }
            })
        },
        goGoodsInfo(id){
            this.$router.push({name:'GoodsInfo',params:{id}})
        },
        // goGoodsInfo(){
        //     this.$router.push({name:'GoodsInfo',params:{id: this.id}})
        // },
        goGoodsComment(){
            this.$router.push({name:'GoodsComment',params:{id:this.id}})
        },

        addToCar(){
            this.ballFlag = !this.ballFlag
        },
        beforeEnter(el){
            el.style.transform = 'translate(0, 0)'
        },
        enter(el){
            el.offsetWidth
            const ballPosition = el.getBoundingClientRect()
            const carPosition = document.getElementById('shopCar').getBoundingClientRect()
            // console.log(ballPosition)
            // console.log(carPosition)
            const xDist = carPosition.left - ballPosition.left
            const yDist = carPosition.top - ballPosition.top
            el.style.transform = 'translate('+ xDist +'px, '+ yDist +'px)'
            el.style.transition = 'all 0.8s ease'
            // done()  
        },
        afterEnter(el){
            this.ballFlag = !this.ballFlag
        }
    },
    created(){
        this.getBannerList()
        this.getGoodsInfo()
    },
    mounted(){
        mui('.mui-numbox').numbox()
    }
}
</script>

<style lang="scss" scoped>
.goods-container{
    background-color: #eee;
    position: relative;
    // overflow: hidden;
    padding: 1px 0;
    .btn-back{
        position: absolute;
        top: -30px;
        left: 10px;
        font-size: 14px;
        color: #fff;
        z-index: 999;
    }

    .now-price{
        color: red;
        font-weight: 500;
    }
    .mui-numbox{
        margin-bottom: 10px;
        vertical-align: -webkit-baseline-middle;
    }
    .ball{
        width: 18px;
        height: 18px;
        position: absolute;
        border-radius: 50%;
        background-color: red;
        top: 350px;
        left: 150px;
        z-index: 999;
    }

    .mui-card-footer{
        display: block;
        button{
            margin: 15px 0;
        }
    }
}
</style>
