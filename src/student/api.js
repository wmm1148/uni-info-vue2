import { request } from '@/network/request.js'
// 对业务数据请求的封装

export default {
  // 获取专业列表
  getMajorList: request({
    url: '/get/major/list',
    method: 'get'
  }),

  getStudentList: request({
    // url: `/get/student/list?page=${page}&limit=${size}`,
    // url: `/get/student/list`,
    // api该怎么写就怎么写，在mock拦截时处理就行
    url: '/get/student/list',
    method: 'get'
  }),

  // 获取账户信息
  getAccountInfo: request({
    url: 'sys/user/info',
    desc: '获取账户信息'
  }),

  // 增加
  addStudent: request({
    url: '/add/student',
    method: 'post' 
  }),
  updateStudent: (stu) => request({
    url: '/update/student',
    method: 'put',
    data: stu
  })(),
  removeStudent: (id) => request({
    url: `/remove/student/${id}`,
    method: 'delete' 
  })(),
  getStudentById: (id) => request ({
    url: `/get/student/by/${id}`,
    method: 'get' 
  })(),
  // getStudentById: request({
  //   url: '/get/student/by/:id',
  //   method: 'get' 
  // })
  changeStuStatus: (id) => request ({
    url: `/put/student/changeStatus/${id}`,
    method: 'put' 
  })(),

  getEliteStuList: request({
    url: '/get/eliteStudent/list',
    method: 'get'
  }),
  // getCaptcha: (uuid) => request ({
  //   url: `/post/captcha?uuid=${uuid}`,
  //   method: 'pppost',
  //   data: 'uuid'
  // })(),

}
