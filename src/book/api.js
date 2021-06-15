import { request } from '@/network/request.js'
// 对业务数据请求的封装

export default {
  getBooktList: request({
    url: '/get/book/list',
    method: 'get'
  }),
  getCaptcha: request({
    url: '/get/captcha.jpg',
    method: 'get'
  }),
  
}
