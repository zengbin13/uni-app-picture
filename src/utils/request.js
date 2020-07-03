import {
	config
} from '../config.js';

export function request({url,data = {}, method = 'GET'}) {
	uni.showLoading({
		title:"加载中"
	})
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${config.base_url}${url}`,
			method,
			data,
			header: {
				'content-type': 'application/json',
				'appId': config.appId,
				'token': uni.getStorageSync('AuthTokens')
			},
			success(res) {
				resolve(res)
			},
			fail(err) {
				reject(err)
			},
			complete() {
				uni.hideLoading()
			}
		})
	})
}
