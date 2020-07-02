<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*
		全局引入样式文件iconfont 
		样式文件引入不要使用@符号
	*/
	@import url("./common/styles/iconfont.scss");
	@import url("./common/styles/base.scss");
</style>
