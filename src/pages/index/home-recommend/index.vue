<template>
	<view class="recommend">
		<!-- 推荐模块 -->
		<view class="recommend-wrap">
			<view class="recommend-item" v-for="item in recommendList" :key="item.id"><image :src="item.thumb" mode="widthFix"></image></view>
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
				<block v-for="item in monthList.items">
					<image :src="item.img" mode="scaleToFill" class="month-content-item"></image>
				</block>
			</view>
		</view>
		
	</view>
</template>

<script>
	import moment from "moment"
export default {
	data() {
		return {
			// 推荐数据
			recommendList: [],
			monthList: [],
			hotList: []
		};
	},
	methods: {
		getRecommendData() {
			this.$request({
				url: '/v3/homepage/vertical',
				data: {
					limit: 30,
					order: 'hot',
					skip: 0
				}
			}).then(res => {
				this.recommendList = res.data.res.homepage[1].items;
				
				this.monthList = res.data.res.homepage[2];
				this.monthList.MM = moment(this.monthList.stime).format("MM")
				this.monthList.DD = moment(this.monthList.stime).format("DD")
				
				this.hotList = res.data.res.vertical;
				console.log(this.monthList);
				console.log(this.hotList);
			});
		}
	},
	created() {
		this.getRecommendData();
	}
};
</script>

<style lang="scss" scoped>
.recommend-wrap {
	display: flex;
	flex-wrap: wrap;
	.recommend-item {
		width: 50%;
		border: 3rpx solid #fff;
	}
}
.month-title {
	height: 60rpx;
	line-height: 60rpx;
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
			padding: 0 20rpx ;
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
		cursor: pointer
	}
	
}
.month-content {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	.month-content-item {
		width: 240rpx;
		height: 440rpx;
		border: 5rpx solid #fff;
	}
}
</style>
