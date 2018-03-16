// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'
Vue.use(VueRouter);

import VueResource from 'vue-resource'
Vue.use(VueResource);


/*import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element);*/


/*import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);*/

/* 或写为
 * Vue.use(Button)
 * Vue.use(Cell)
 */
import Vuex from 'vuex'
Vue.use(Vuex);

Vue.config.productionTip = false;

import 'mint-ui/lib/style.css'
const footer = resolve => require(['./components/footer'], resolve);
const page404 = { template: '<div>亲，此功能正在开发中。。。</div>' };
const routes = [
  {
    path: '/home',
    name:'',
    components: {
      mybody: r => require.ensure([], () => r(require('./components/HelloWorld')), 'group-foo'),
      footer: footer
    }
  },
  {
    path: '/main',
    name:'',
    components: {
      mybody: resolve => require(['./components/addWorld'], resolve),
      footer: footer
    }
  },
  {
    path: '/vuex',
    name:'',
    components: {
      mybody: resolve => require(['./components/vuex'], resolve),
      footer: footer
    }
  },
  {
    path: '/Element',
    name:'',
    components: {
      mybody: resolve => require(['./components/Element'], resolve),
      footer: footer
    }
  },
  {   // 根目录重定向
    path: '/', redirect: '/home'
  },
  {   // 根目录重定向
    path: '/*', name: '功能开发中',component: page404
  }
];

const router = new VueRouter({
  mode: 'history',
  routes: routes,
  linkActiveClass: "router-view" // （缩写）相当于 routes: routes
});
const app = new Vue({
  router: router,
  render: h =>h(App)
}).$mount('#app');

