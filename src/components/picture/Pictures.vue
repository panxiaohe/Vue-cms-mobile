<template>
  <div class="picture-container">
    <div
      id="slider"
      class="mui-slider"
    >
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            class="mui-control-item"
            :class="[item.id == 0 ? 'mui-active' : '']"
            v-for="item in categories"
            :key="item.id"
            @click="getPicListByCateId(item.id)"
          >
            {{ item.title }}
          </a>
        </div>
      </div>
    </div>

    <ul class="picture-list">
      <router-link tag="li" :to="'/home/pictureDetail/'+item.id"
        v-for="item in picList"
        :key="item.id"
      >
        <img v-lazy="item.img_url">

        <div class="info">
          <p class="info-title">{{ item.title }}</p>
          <p class="info-content">{{ item.zhaiyao }}</p>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
// 1.使用mui的顶部可拖动tab控件，去掉全屏样式
// 2.js不生效：导入js
// 3.mui.js不支持严格模式，因此要使用插件禁用webpack的严格模式 参考https://github.com/genify/babel-plugin-transform-remove-strict-mode
//  - 3.1 安装 `cnpm i babel-plugin-transform-remove-strict-mode -D`
//  - 3.2 配置 .babelrc
// 4.chrome浏览器划动时报错：用样式 `* { touch-action: pan-y; }` 解决
// 5.点击进入图片页面时导航不能划动，刷新后才可以：在页面渲染完成时（mounted）需要手动初始化 scroll 控件
// 6.加上图片tab导航后，底部tabbar点击无效：tabbar中的 mui-tab-item类存在兼容性问题，换一个类名 如：mui-tab-item1，重新定义样式即可

import mui from "../../lib/mui/js/mui.min.js";

export default {
  data() {
    return {
      categories: [],
      picList: []
    };
  },
  methods: {
    getAllCategory() {
      this.$http.get("api/getimgcategory").then(result => {
        if (result.body.status == 0) {
          this.categories = result.body.message;
          this.categories.unshift({ id: 0, title: "全部" });
        }
      });
    },
    getPicListByCateId(cateId) {
      this.$http.get("api/getimages/" + cateId).then(result => {
        if (result.body.status == 0) {
          this.picList = result.body.message;
        }
      });
    }
  },
  created() {
    this.getAllCategory();
    this.getPicListByCateId(0);
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    // this.getAllCategory()
  }
};
</script>

<style lang="scss" scoped>
// 解决初次进入页面时顶部tab导航不能滑动的问题
* {
  touch-action: pan-y;
}

.picture-container {
  .picture-list {
    margin: 0;
    padding: 10px 10px 0 10px;
    li {
      list-style: none;
      width: 100%;
      background-color: #999;
      margin-bottom: 10px;
      text-align: center;
      box-shadow: 0 0 9px #999;
      position: relative;
      img {
        width: 100%;
        display: block;
      }
      // 图片懒加载样式
      img[lazy="loading"] {
        width: 40px;
        height: 300px;
        margin: auto;
      }
      .info{
          position: absolute;
          bottom: 0;
          height: 84px;
          overflow: hidden;
          background-color: rgba(0, 0, 0, .4);
          text-align: left;
          p.info-title{
              color: #fff;
              margin-bottom: 0;
          }
          p.info-content{
              font-size: 13px;
              color: #fff;
          }
      }
    }
  }
}
</style>
