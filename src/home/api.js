import { request } from '@/network/request.js'
// 对业务数据请求的封装

export default {
  getInputAPIData: request({
    url: '/get/inputAPIData',
    method: 'get'
  }),
}
