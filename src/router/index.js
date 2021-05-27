import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/stu',
    name: 'Student',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Stu.vue'),
  //   children: [
  //     {
  //       path: '/stuInfo',
  //       name: 'stuInfo',
  //       component: () => import(/* webpackChunkName: "about" */ '../student/router/stuInfo.vue')
  //     },
  //     {
  //       path: '/stuInfo2',
  //       name: 'stuInfo2',
  //       component: () => import(/* webpackChunkName: "about" */ '../student/router/stuInfo2.vue')
  //     }
  //   ]
  }
]

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })

const router = new VueRouter({
    //配置路由和组件的映射关系，这里写在外面
    routes,
    mode: 'history',   //这样网站显示的url上就不会出现hash那种#了  默认是Hash模式
    linkActiveClass: 'active'
})

export default router
