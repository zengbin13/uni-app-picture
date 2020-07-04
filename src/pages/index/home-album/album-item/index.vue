<template>
  <view class="album-item clearfix">
    <view class="album-img">
      <image :src="albumData.cover"
        mode="widthFix" />
    </view>

    <view class="album-item-content">
      <view class="name">{{albumData.name}}</view>
      <view class="desc">{{albumData.desc}}</view>
      <view class="tag">
        <text>+ 关注</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    albumData: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.album-item {
  display: flex;
  border-bottom: 1px solid #999;
  padding: 20rpx 0;
  .album-img {
    float: left;
    height: 220rpx;
    padding: 0 10rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    image {
      width: 200rpx;
    }
  }
  .album-item-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    .name {
      font-size: 36rpx;
    }
    .desc {
      height: 80rpx;
      line-height: 80rpx;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .tag {
      text {
        display: block;
        float: right;
        border: 1px solid $color-main;
      }
    }
  }
}
</style>
