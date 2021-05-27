import { request } from '@/network/request.js'
// 对业务数据请求的封装

export default {
  // 获取专业列表
  getMajorList: request({
    url: '/get/major/list',
    type: 'get'
  }),

  getStudentList: request({
    // url: `/get/student/list?page=${page}&limit=${size}`,
    // url: `/get/student/list`,
    // api该怎么写就怎么写，在mock拦截时处理就行
    url: '/get/student/list',
    type: 'get'
  }),

  // 获取账户信息
  getAccountInfo: request({
    url: 'sys/user/info',
    desc: '获取账户信息'
  }),

  // 增加
  addStudent: request({
    url: '/add/student',
    type: 'post' // 默认就是get请求，可以不写
  }),
  updateStudent: request({
    url: '/update/student',
    type: 'put' // 默认就是get请求，可以不写
  }),
  removeStudent: request({
    url: '/remove/student',
    type: 'delete' // 默认就是get请求，可以不写
  }),
  getStudentById: request({
    url: '/get/student/by/:id',
    type: 'get' // 默认就是get请求，可以不写
  })
}
