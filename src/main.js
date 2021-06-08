import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './student/mock'
import './book/mock'

Vue.config.productionTip = false

Vue.use(Antd)

// new Vue({
//   router,
//   render: h => h(App),
// }).$mount('#app')

Vue.nextTick(() => {
  const app = new Vue({
    router,
    name: 'App',
    render: h => h(App),
  });
  setTimeout(() => {
    app.$mount('#app');
  }, 200);
});
