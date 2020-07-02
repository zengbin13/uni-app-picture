<template>
  <view>tuiji</view>
</template>

<script>
export default {
  data() {
    return {
      // 推荐数据
      recommendList: [],
      monthList: [],
      hotList: []
    };
  },
  mounted() {
    this.request({
      url: "/v3/homepage/vertical",
      data: {
        limit: 30,
        order: "hot",
        skip: 0
      }
    }).then(res => {
      console.log(res);
      this.recommendList = res.data.res.homepage[1].items;
      this.monthList = res.data.res.homepage[2].items;
      this.hotList = res.data.res.vertical;
    });
  }
};
</script>

<style lang="scss" scoped>
</style>