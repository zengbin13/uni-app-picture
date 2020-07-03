let BASE_URL = '';
if (process.env.NODE_ENV == 'development') {
	BASE_URL = 'https://service.picasso.adesk.com' // 开发环境——小程序
	// BASE_URL = '/api' // 开发环境——H5
} else {
	BASE_URL = 'https://service.picasso.adesk.com' // 生产环境
}
const config = {
	base_url: BASE_URL,
	appId: 'wx6b54ccbf7e401af5',
	appKey: 'b26b026046f4e2ace31979d1e85de3d1'
}

export {
	config
}
