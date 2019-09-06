<template>
  <div class="picture-container">
    <h3 class="title">{{ pictureDetail.title }}</h3>
    <p class="subtitle">
      <span>发表时间：{{ pictureDetail.add_time | dateFormat }}</span>
      <span>点击：{{ pictureDetail.click }}次</span>
    </p>
    <hr>

    <!-- 图片缩略图 -->
    <div class="thumbs">
        <vue-preview :slides="pictureList" @close="closePicture"></vue-preview>
    </div>
    <div class="content" v-html="pictureDetail.content"></div>

    <!-- 评论组件 -->
    <comment-box></comment-box>
  </div>
</template>

<script>
import Comment from "../subcomponents/Comment.vue";

export default {
  data() {
    return {
      id: this.$route.params.id,
      pictureDetail: [],
      pictureList: []

    };
  },
  components: {
    "comment-box": Comment
  },
  methods: {
    getPictureDetail() {
      this.$http.get("api/getimageInfo/" + this.id).then(result => {
        // console.log(result);
        if (result.body.status == 0) {
          this.pictureDetail = result.body.message[0];
        }
      });
    },
    getPictureList(){
        this.$http.get("api/getthumimages/" + this.id).then(result => {
        console.log(result);
        if (result.body.status == 0) {
            result.body.message.forEach(element => {
                element.msrc = element.src;
                element.w = 300;
                element.h = 220;
            });
            this.pictureList = result.body.message;
        }
      });
    },
    closePicture(){

    }
  },
  created() {
    this.getPictureDetail();
    this.getPictureList()
  }
};
</script>

<style lang="scss">
.picture-container {
  padding: 0 5px;
  .title {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle{
      display: flex;
      justify-content: space-between;
      font-size: 13px;
  }

    .thumbs{
        .my-gallery{
            display: flex;
            flex-wrap: wrap;
            // justify-content: space-between;
            figure{
            width: 30%;
            margin: 0 10px 10px 0;
                img{
                    width: 100%;
                    // height: 80px;
                }
            }
        }
        
    }

  .content{
      color: #333;
      font-size: 13px;
      line-height: 30px;
  }
}
</style>
