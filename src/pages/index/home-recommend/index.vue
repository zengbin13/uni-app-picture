<template>
  <scroll-view scroll-y
    @scrolltolower="handleToLower"
    class="recommend"
    v-if="recommendList.length > 0">
    <!-- 推荐模块 -->
    <view class="recommend-wrap">
      <view class="recommend-item"
        v-for="item in recommendList"
        :key="item.id">
        <image :src="item.thumb"
          mode="widthFix"></image>
      </view>
    </view>
    <!-- 月份模块 -->
    <view class="month-wrap">
      <view class="month-title">
        <view class="month-title-left">
          <text class="month-title-date">
            <text class="day">{{monthList.DD}}</text>
            <text class="month">/ {{monthList.MM}}月</text>
          </text>
          <text class="month-title-info">{{monthList.title}}</text>
        </view>
        <view class="month-title-right">
          <text class="month-more">更多 ></text>
        </view>
      </view>
      <view class="month-content">
        <!-- 月份模块图片 -->
        <view v-for="item in monthList.items"
          :key="item.id"
          class="month-content-item">
          <image :src="item.img + item.rule.replace('$<Height>', 360)"
            mode="aspectFill"></image>
        </view>
      </view>
    </view>
    <!-- 热门推荐图片 -->
    <view class="hot-wrap">
      <view class="hot-title">热门推荐</view>
      <view class="hot-content">
        <view v-for="item in hotList"
          :key="item.id"
          class="hot-content-item">
          <image :src="item.thumb"
            mode="aspectFill"></image>
        </view>
      </view>
    </view>

  </scroll-view>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      // 推荐数据
      recommendList: [],
      monthList: [],
      hotList: [],
      params: {
        limit: 30,
        order: "hot",
        skip: 0
      },
      isMore: true
    };
  },
  methods: {
    //请求推荐数据
    getRecommendData(params) {
      this.$request({
        url: "/v3/homepage/vertical",
        data: params
      }).then(res => {
        if (this.recommendList.length === 0 || this.monthList.length === 0) {
          this.recommendList = res.data.res.homepage[1].items;

          this.monthList = res.data.res.homepage[2];
          this.monthList.MM = moment(this.monthList.stime).format("MM");
          this.monthList.DD = moment(this.monthList.stime).format("DD");
        }
        if (res.data.res.vertical.length === 0) {
          this.isMore = flase;
        }
        this.hotList = [...this.hotList, ...res.data.res.vertical];
      });
    },
    //处理触底事件
    handleToLower() {
      if (this.isMore) {
        this.params.skip = this.params.skip + this.params.limit;
        this.getRecommendData(this.params);
      } else {
        uni.showToast({
          title: "没有更多的数据",
          icon: "none"
        });
      }
    }
  },
  created() {
    this.getRecommendData(this.params);
  }
};
</script>

<style lang="scss" scoped>
// 推荐样式
.recommend {
  height: calc(100vh - 72rpx);
}
.recommend-wrap {
  display: flex;
  flex-wrap: wrap;
  .recommend-item {
    width: 50%;
    border: 3rpx solid #fff;
  }
}
// 今日推荐数据标题
.month-title {
  height: 80rpx;
  line-height: 80rpx;
  // background-color: pink;
  display: flex;
  justify-content: space-between;
  .month-title-left {
    margin: 0 20rpx;
    .month-title-date {
      color: $color-main;
      font-size: 32rpx;
      .day {
        font-size: 42rpx;
      }
    }
    .month-title-info {
      padding: 0 20rpx;
      font-weight: 600;
      font-size: 32rpx;
      letter-spacing: 0.1em;
      color: #333;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .month-title-right {
    margin: 0 20rpx;
    color: $color-main;
    cursor: pointer;
  }
}
// 今日推荐数据内容
.month-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .month-content-item {
    width: 33.33%;
    border: 3rpx solid #fff;
    height: 360rpx;
    image {
      height: 100%;
    }
  }
}
//热门推荐
.hot-wrap {
  .hot-title {
    height: 70rpx;
    line-height: 70rpx;
    font-size: 36rpx;
    margin: 10rpx;
    padding-left: 10rpx;
    border-left: 3px solid $color-main;
  }
  .hot-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .hot-content-item {
      width: 33.33%;
      border: 3rpx solid #fff;
      padding-bottom: 6rpx;
      height: 360rpx;
      image {
        height: 100%;
      }
    }
  }
}
</style>
