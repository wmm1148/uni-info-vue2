import axios from 'axios'
// 对axios的封装

// const requestList = new Set() // 存储请求url

export function request (config) {
  // 1.创建axios实例
  const instance = axios
  // // 2.axios拦截器
  // instance.interceptors.request.use(config => {
  //   console.log('request', config)
  //   return config // 必须return回去，不然就拦截下来了
  // }, err => {
  //   console.log('request err:', err)
  // })
  // instance.interceptors.response.use(res => {
  //   console.log('response', res)
  // 也可以设置取消函数 防止重复请求
  // 相同请求不得在600毫秒内重复发送，反之继续执行
  // setTimeout(() => {
  //   requestList.delete(response.config.url)
  // }, 600)

  //   return res?.data // return res.data即可
  // }, err => {
  //   console.log(err)
  // })

  // 3.发送请求
  return () => new Promise((resolve, reject) => {
    instance(config).then(res => {
      resolve(res?.data?.data)
    }).catch(err => {
      reject(err)
    })
  })
  // return () => instance(config)
  // instance是Promise，在用的时候直接.then .catch就行
}
