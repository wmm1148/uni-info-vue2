import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect:'/home/analysis',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: '/home/input',
    children: [
      {
        path: 'analysis',
        name: 'analysis',
        component: () => import( '../home/router/analysis.vue'),
      },
      {
        path: 'monitor',
        name: 'monitor',
        component: () => import( '../home/router/monitor.vue'),
      },
      {
        path: 'workplace',
        name: 'workplace',
        component: () => import( '../home/router/workplace.vue'),
      },
      {
        path: 'menuTree',
        name: 'menuTree',
        component: () => import( '../home/router/components/menuTree.vue'),
      },
      {
        path: 'basicCard',
        name: 'basicCard',
        component: () => import( '../home/router/display/basicCard.vue'),
      },
      {
        path: 'input',
        name: 'input',
        component: () => import( '../home/router/form/input.vue'),
      },
      {
        path: 'captchaInput',
        name: 'captchaInput',
        component: () => import( '../home/router/form/captchaInput.vue'),
      },
      {
        path: 'singleNetSelect',
        name: 'singleNetSelect',
        component: () => import( '../home/router/form/singleNetSelect.vue'),
      },
    ]
  },
  {
    path: '/stu',
    name: 'Student',
    redirect:'/stu/stuInfo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/Stu.vue'),
    children: [
      {
        path: 'stuInfo',
        name: 'stuInfo',
        component: () => import( '../student/router/stuInfo.vue'),
        children: [
          {
            path: 'detail/:id',
            name: 'detail',
            component: () => import('../student/router/stuInfo/~detail.id.vue'),
            props: true
          },
          {
            path: 'add',
            name: 'add',
            component: () => import('../student/router/stuInfo/~add.vue')
          },
          {
            path: 'edit/:edit',
            name: 'edit',
            component: () => import('../student/router/stuInfo/~edit.id.vue')
          },
        ]
      },
      {
        path: 'elite',
        name: 'elite',
        component: () => import('../student/router/elite.vue'),
        children: [
          // {
          //   path: 'detail/:id',
          //   name: 'detail',
          //   component: () => import('../student/router/elite/~detail.id.vue'),
          //   props: true
          // },
          {
            path: 'add',
            name: 'elite-add',
            component: () => import('../student/router/elite/~add.vue')
          },
          // {
          //   path: 'edit/:edit',
          //   name: 'elite-edit',
          //   component: () => import('../student/router/elite/~edit.id.vue')
          // },
        ]
      },
      {
        path: 'view',
        name: 'view',
        component: () => import('../student/router/viewer.vue'),
      }
    ]
  },
  {
    path: '/book',
    name: 'Book',
    redirect:'/book/wangeditor',
    component: () => import('../views/Book.vue'),
    children: [
      {
        path: 'wangeditor',
        name: 'wangeditor',
        component: () => import( '../book/router/wangeditor.vue'),
        children: [
          {
            path: 'detail/:id',
            name: 'detail',
            component: () => import('../book/router/wangeditor/~detail.id.vue'),
            props: true
          },
          {
            path: 'add',
            name: 'add',
            component: () => import('../book/router/wangeditor/~add.vue')
          },
          {
            path: 'edit/:edit',
            name: 'edit',
            component: () => import('../book/router/wangeditor/~edit.id.vue')
          },
        ]
      },
      {
        path: 'test',
        name: 'test',
        component: () => import( '../book/router/test.vue'),
      },
      {
        path: 'test2',
        name: 'test2',
        component: () => import( '../book/router/test2.vue'),
      },
      {
        path: 'test3',
        name: 'test3',
        component: () => import( '../book/router/test3.vue'),
      }
    ]
  },
  {
    path: '/teacher',
    name: 'Teacher',
    component: () => import( '../views/Teacher.vue'),
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
  linkActiveClass: 'active',
})

export default router
