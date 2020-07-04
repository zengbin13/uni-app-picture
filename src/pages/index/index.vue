<template>
  <view class="home-tab">
    <view class="home-tab-title">
      <view class="home-tab-text">
        <uni-segmented-control :current="current"
          :values="items"
          @clickItem="onClickItem"
          style-type="text"
          active-color="#1296db">
        </uni-segmented-control>
      </view>
      <view class="home-tab-search">
        <text class="iconfont icon-sreach"></text>
      </view>
    </view>
    <view class="home-tab-content">
      <view class="content">
        <view v-if="current === 0">
          <home-recommend></home-recommend>
        </view>
        <view v-if="current === 1">
          <home-category></home-category>
        </view>
        <view v-if="current === 2">
          <home-new></home-new>
        </view>
        <view v-if="current === 3">
          <home-album></home-album>
        </view>
      </view>
    </view>

  </view>
</template>

<script>
import { uniSegmentedControl } from "@dcloudio/uni-ui";
import homeAlbum from "./home-album/index";
import homeCategory from "./home-category/index";
import homeNew from "./home-new/index";
import homeRecommend from "./home-recommend/index";
export default {
  data() {
    return {
      items: ["推荐", "分类", "最新", "专辑"],
      current: 0
    };
  },
  components: {
    homeAlbum,
    homeCategory,
    homeNew,
    homeRecommend,
    uniSegmentedControl
  },
  methods: {
    onClickItem(e) {
      if (this.current !== e.currentIndex) {
        this.current = e.currentIndex;
      }
    }
  }
};
</script>

<style lang="scss">
.home-tab-title {
  position: relative;
  .home-tab-text {
    width: 60%;
    margin: 0 auto;
    margin-bottom: 4rpx;
  }
  .home-tab-search {
    height: 100%;
    width: 20%;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .iconfont {
      font-size: 36rpx;
    }
  }
}
</style>
