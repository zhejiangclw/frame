import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'babel-polyfill';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import './directives/index';

// 全局方法的引入
import {log, judgeApp} from '@/utils/util';

// 注册使用组件
Vue.use(MintUI);

Vue.config.productionTip = false;




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
