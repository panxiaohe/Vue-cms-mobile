<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
        <router-link :to="'/home/newsDetail/' + item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <h3>{{item.title}}</h3>
            <p class='mui-ellipsis'>
              <span>发表时间：{{item.add_time | dateFormat}}</span>
              <span>点击次数：{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'

export default {
  data() {
    return {
        newsList: []
    };
  },
  methods: {
      getNewsList(){
        this.$http.get('api/getnewslist').then(result=>{
            console.log(result.body)
            var result = result.body
            if(result.status == 0){
                this.newsList = result.message
            }else{
                Toast('获取新闻列表失败')
            }
        })
      }
  },
  created(){
      this.getNewsList()
  }
};
</script>

<style lang="scss" scoped>
.mui-table-view {
  li {
    h3 {
      font-size: 14px;
    }
    .mui-ellipsis {
      font-size: 12px;
      color: #226aff;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
