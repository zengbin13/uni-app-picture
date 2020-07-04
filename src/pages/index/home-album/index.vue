<template>
  <view class="album">
    <!-- 轮播图区域 -->
    <swiper class="swiper"
      :indicator-dots="true"
      autoplay
      :circular="true"
      :interval="3000"
      :duration="1000">
      <swiper-item v-for="item in bannerList"
        :key="item.id">
        <image :src="item.thumb"
          mode="widthFix" />
      </swiper-item>
    </swiper>
    <!-- 单个专辑 -->
    <view class="content">
      <block v-for="item in albumList"
        :key="item.id">
        <album-item :albumData="item"></album-item>
      </block>
    </view>
  </view>

</template>

<script>
import albumItem from "./album-item/index";
export default {
  data() {
    return {
      params: {
        limit: 30,
        order: "hot",
        skip: 0
      },
      bannerList: [],
      albumList: [],
      albumFilterList: []
    };
  },
  methods: {
    getAlbumData(params) {
      this.$request({
        url: "/v1/wallpaper/album",
        data: params
      }).then(res => {
        this.bannerList = res.data.res.banner;
        this.albumList = res.data.res.album;

        this.albumFilterList = this.albumList.map(item => {
          return {
            id: item.id,
            cover: item.cover,
            name: item.name,
            desc: item.desc
          };
        });
        console.log(this.bannerList);
        console.log(this.albumList);
        console.log(this.albumFilterList);
      });
    }
  },
  components: {
    albumItem
  },
  created() {
    //修改标题
    uni.setNavigationBarTitle({
      title: "首页-专辑"
    });
    //请求数据
    this.getAlbumData(this.params);
  }
};
</script>

<style lang="scss" scoped>
.swiper {
  width: 100vw;
  height: calc(750rpx / 2.25);
  image {
    height: 100%;
  }
}
</style>
