export function request(params) {
  //基本数据
  // let baseUrl = 'http://157.122.54.189:9088/image/v1';
  let baseUrl = 'https://service.picasso.adesk.com';

  //网络请求加载
  uni.showLoading({
    title: '加载中',
  });
  //发生请求
  return new Promise((resolve, reject) => {
    uni.request({
      url: baseUrl + params.url,
      data: params.data || {},
      header: { 'content-type': 'application/json' },
      method: 'GET' || params.method,
      dataType: 'json',
      responseType: 'text',
      success(res) {
        resolve(res);
      },
      fail(err) {
        reject(err);
      },
      complete() {
        uni.hideLoading();
      },
    });
  });
}
