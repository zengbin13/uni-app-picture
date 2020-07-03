import Vue from 'vue';
import App from './App';

import store from './store'

Vue.config.productionTip = false;
//全局挂载封装请求函数
import { request } from './utils/request';
Vue.prototype.$request = request;

Vue.prototype.$store = store;

App.mpType = 'app';

const app = new Vue({
  ...App,
  store
});
app.$mount();
