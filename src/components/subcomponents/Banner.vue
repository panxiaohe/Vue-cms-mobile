<template>
  <div class="banner">
    <mt-swipe :auto="4000">
      <mt-swipe-item
        v-for="item in bannerList"
        :key="item.id"
      >
        <a :href="item.url"><img :src="item.img"></a>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
        // 通过这种方式获取到的list为空，可能是因为父组件还没有执行created()生命周期方法
        // bannerList: this.$parent.bannerList
    };
  },
  props: ['bannerList']
};
</script>

<style lang="scss" scoped>
.banner {
    text-align: center;
  .mint-swipe {
    height: 200px;

    .mint-swipe-item {
      img {
        // width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
