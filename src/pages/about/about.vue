<template>
  <view class="content">
    <view class="rpx">rpx</view>
    <view class="vw">vw</view>
    <view class="scss">scss</view>
    {{message1}}
  </view>
</template>

<script>
export default {
  data() {
    return {
      message1: "数据展示-message1  xx"
    };
  },
  onLoad() {},
  methods: {}
};
</script>

<style lang="scss">
.content {
  text-align: center;
  height: 400rpx;
}
.rpx {
  width: 750rpx;
  height: 100px;
  background-color: rgb(219, 157, 157);
}
.vw {
  width: 50vw;
  height: 100px;
  background-color: rgb(162, 219, 157);
}
.content {
  .scss {
    width: 750rpx;
    height: 50px;
    background-color: rgb(157, 199, 219);
  }
}
</style>
